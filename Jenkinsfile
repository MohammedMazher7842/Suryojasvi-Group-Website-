// =============================================================================
// Suryojasvi Group Website — CI/CD
//
// Jenkins controller runs elsewhere; this pipeline is pinned to the build node
// 'kalyan-mongo' (35.207.243.110), which is also the deploy host. The site is
// served by Docker: nginx (suryojasvigroup.com) -> 127.0.0.1:4009 -> container
// 'suryojasvi-group-web' (:3000).
// =============================================================================

// Zulip Notification Function
// Writes message to a file first to avoid bash interpreting backticks as command substitution
def sendZulipNotification(String message) {
    try {
        writeFile file: 'zulip_msg.txt', text: message
        sh """
            curl -s -X POST ${ZULIP_SITE}/api/v1/messages \
                -u ${ZULIP_BOT_EMAIL}:${ZULIP_API_KEY} \
                -d type=stream \
                -d "to=${ZULIP_STREAM}" \
                -d "topic=${ZULIP_TOPIC}" \
                --data-urlencode "content@${env.WORKSPACE}/zulip_msg.txt" || true
        """
        echo "✅ Zulip notification sent"
    } catch (Exception e) {
        echo "⚠️ Zulip notification failed: ${e.message}"
    }
}

pipeline {
    agent {
        label 'kalyan-mongo'
    }

    environment {
        // Git Configuration
        GIT_URL         = 'https://github.com/MohammedMazher7842/Suryojasvi-Group-Website-.git'
        GIT_BRANCH      = 'main'
        GIT_CREDENTIALS = 'github-cred'

        // Docker / deploy configuration (on this same server)
        CONTAINER_NAME   = 'suryojasvi-group-web'
        IMAGE_NAME       = 'suryojasvi-group-web'
        HOST_PORT        = '4009'
        APP_PORT         = '3000'
        SITE_URL         = 'https://suryojasvigroup.com'

        // Zulip Notification Configuration
        ZULIP_BOT_EMAIL = 'kalyan-docs-bot@connect.suryojasvi.com'
        ZULIP_API_KEY   = 'zItHhmhUL1lXV3REoQhGV5OlSEei6dEa'
        ZULIP_SITE      = 'https://connect.suryojasvi.com'
        ZULIP_STREAM    = 'Action_CICD'
        ZULIP_TOPIC     = 'Suryojasvi Group Website'
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timestamps()
        timeout(time: 45, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {

        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "*/${GIT_BRANCH}"]],
                    userRemoteConfigs: [[
                        url: "${GIT_URL}",
                        credentialsId: "${GIT_CREDENTIALS}"
                    ]]
                ])
                script {
                    env.GIT_COMMIT_HASH  = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
                    env.GIT_COMMIT_SHORT = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
                    env.GIT_BRANCH_NAME  = sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
                    if (!env.GIT_BRANCH_NAME || env.GIT_BRANCH_NAME == 'HEAD') {
                        env.GIT_BRANCH_NAME = env.GIT_BRANCH ?: GIT_BRANCH
                    }
                    env.GIT_COMMIT_MSG    = sh(returnStdout: true, script: 'git log -1 --pretty=%s').trim()
                    env.GIT_COMMIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --pretty=%an').trim()
                    env.GIT_COMMIT_URL    = "${GIT_URL.replace('.git', '')}/commit/${env.GIT_COMMIT_HASH}"
                    env.GIT_COMPARE_URL   = "${GIT_URL.replace('.git', '')}/commits/${env.GIT_BRANCH_NAME}"

                    // Immutable, traceable image tag for this build
                    env.IMAGE_TAG  = "${BUILD_NUMBER}-${env.GIT_COMMIT_SHORT}"
                    env.FULL_IMAGE = "${IMAGE_NAME}:${env.IMAGE_TAG}"

                    echo "Git Commit : ${env.GIT_COMMIT_HASH}"
                    echo "Git Branch : ${env.GIT_BRANCH_NAME}"
                    echo "Build No   : ${BUILD_NUMBER}"
                    echo "Image      : ${env.FULL_IMAGE}"

                    def startMsg = """:construction: **BUILD STARTED** — Suryojasvi Group Website

| | |
|---|---|
| :package: **Service** | suryojasvi-group-web (Docker) |
| :hammer: **Build** | [#${BUILD_NUMBER}](${BUILD_URL}) |
| :seedling: **Branch** | `${env.GIT_BRANCH_NAME}` |
| :bookmark: **Commit** | [`${env.GIT_COMMIT_SHORT}`](${env.GIT_COMMIT_URL}) |
| :person: **Author** | ${env.GIT_COMMIT_AUTHOR} |
| :memo: **Message** | ${env.GIT_COMMIT_MSG} |
| :zap: **Triggered by** | ${currentBuild.getBuildCauses()[0]?.shortDescription ?: 'Manual trigger'} |

:hourglass: Building image `${env.FULL_IMAGE}` — [View Console](${BUILD_URL}console)"""
                    sendZulipNotification(startMsg)
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    echo "Building Docker image ${env.FULL_IMAGE} (Node 22 / Vite build inside the image)..."
                    // The Jenkins agent user is in the 'docker' group — no sudo needed here.
                    sh """
                        docker build \
                            --pull \
                            -t ${env.FULL_IMAGE} \
                            -f Dockerfile .
                    """
                    echo "Image built: ${env.FULL_IMAGE}"
                    sh "docker image inspect ${env.FULL_IMAGE} --format 'Size: {{.Size}} bytes  Created: {{.Created}}'"
                }
            }
        }

        stage('Verify Build Artifacts') {
            steps {
                script {
                    // Fail fast before touching the live container: make sure the
                    // build actually produced a server bundle and a client bundle.
                    sh """
                        docker run --rm --entrypoint sh ${env.FULL_IMAGE} -c '
                            test -f dist/index.js || { echo "ERROR: dist/index.js missing"; exit 1; }
                            test -f dist/public/index.html || { echo "ERROR: dist/public/index.html missing"; exit 1; }
                            echo "dist/index.js OK"
                            echo "dist/public/index.html OK"
                            echo "Client assets: \$(find dist/public -type f | wc -l) files"
                        '
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Remember what is live right now so Health Check can roll back.
                    // The old container was compose-managed; this reads its image either way.
                    env.PREV_IMAGE = sh(
                        returnStdout: true,
                        script: "docker inspect ${CONTAINER_NAME} --format '{{.Config.Image}}' 2>/dev/null || true"
                    ).trim()
                    echo "Currently live image: ${env.PREV_IMAGE ?: 'none (first deploy)'}"

                    echo "Deploying ${env.FULL_IMAGE} on port ${HOST_PORT}..."
                    sh """
                        # Stop and remove the running container (frees port ${HOST_PORT})
                        docker rm -f ${CONTAINER_NAME} 2>/dev/null || true

                        docker run -d \
                            --name ${CONTAINER_NAME} \
                            --restart unless-stopped \
                            -p ${HOST_PORT}:${APP_PORT} \
                            -e NODE_ENV=production \
                            -e PORT=${APP_PORT} \
                            --log-driver json-file \
                            --log-opt max-size=10m \
                            --log-opt max-file=3 \
                            ${env.FULL_IMAGE}

                        # 'latest' always points at what was deployed last
                        docker tag ${env.FULL_IMAGE} ${IMAGE_NAME}:latest

                        docker ps --filter "name=^/${CONTAINER_NAME}\$" \
                            --format 'table {{.Names}}\\t{{.Image}}\\t{{.Ports}}\\t{{.Status}}'
                    """
                    echo "Container started from ${env.FULL_IMAGE}"
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    try {
                        sh """
                            # Wait for the app to answer on the published port
                            for i in \$(seq 1 30); do
                                if curl -sf -o /dev/null http://localhost:${HOST_PORT}/; then
                                    echo "HTTP check PASSED on port ${HOST_PORT} (attempt \$i)"
                                    exit 0
                                fi
                                echo "waiting for app... (\$i/30)"
                                sleep 2
                            done
                            echo "ERROR: app did not answer on port ${HOST_PORT} within 60s"
                            docker logs --tail 80 ${CONTAINER_NAME} || true
                            exit 1
                        """
                        sh """
                            # Container must be up, and the page must actually be the site
                            docker ps --filter "name=^/${CONTAINER_NAME}\$" --filter "status=running" \
                                --format '{{.Names}} {{.Status}}' | grep -q ${CONTAINER_NAME} \
                                && echo "Container RUNNING" \
                                || { echo "ERROR: container not running"; exit 1; }

                            curl -sf http://localhost:${HOST_PORT}/ | grep -qi "<div id=\\"root\\"" \
                                && echo "index.html served correctly" \
                                || { echo "ERROR: unexpected response body"; exit 1; }

                            # SPA fallback route must return 200, not 404
                            code=\$(curl -s -o /dev/null -w '%{http_code}' http://localhost:${HOST_PORT}/about)
                            [ "\$code" = "200" ] && echo "SPA fallback OK (/about -> 200)" \
                                || { echo "ERROR: SPA fallback returned \$code"; exit 1; }
                        """
                        echo "✅ All health checks passed"
                    } catch (Exception e) {
                        echo "❌ Health check failed: ${e.message}"
                        if (env.PREV_IMAGE && env.PREV_IMAGE != env.FULL_IMAGE) {
                            echo "↩️ Rolling back to ${env.PREV_IMAGE}..."
                            sh """
                                docker rm -f ${CONTAINER_NAME} 2>/dev/null || true
                                docker run -d \
                                    --name ${CONTAINER_NAME} \
                                    --restart unless-stopped \
                                    -p ${HOST_PORT}:${APP_PORT} \
                                    -e NODE_ENV=production \
                                    -e PORT=${APP_PORT} \
                                    --log-driver json-file \
                                    --log-opt max-size=10m \
                                    --log-opt max-file=3 \
                                    ${env.PREV_IMAGE} || true
                                sleep 5
                                curl -sf -o /dev/null http://localhost:${HOST_PORT}/ \
                                    && echo "Rollback healthy — site restored on ${env.PREV_IMAGE}" \
                                    || echo "WARNING: rollback did NOT come up — MANUAL ACTION REQUIRED"
                            """
                            env.ROLLED_BACK = 'true'
                        } else {
                            echo "No previous image to roll back to."
                        }
                        error("Health check failed for ${env.FULL_IMAGE}")
                    }
                }
            }
        }

        stage('Cleanup Old Images') {
            steps {
                script {
                    sh """
                        # Keep the 3 most recent tagged builds (docker lists newest first)
                        docker images ${IMAGE_NAME} --format '{{.Repository}}:{{.Tag}}' \
                            | grep -v ':latest\$' \
                            | tail -n +4 \
                            | xargs -r docker rmi || true

                        # Reclaim dangling layers — this host runs at ~95% disk
                        docker image prune -f || true
                        docker builder prune -f --filter until=168h || true

                        echo "Disk after cleanup:"
                        df -h / | tail -1
                    """
                    echo "Old images cleaned up"
                }
            }
        }
    }

    post {
        success {
            script {
                def duration = currentBuild.durationString.replace(' and counting', '')
                def prevBuild = currentBuild.previousBuild
                def prevStatus = prevBuild ? prevBuild.result : 'N/A'
                def prevBuildInfo = prevBuild ? "[#${prevBuild.number}](${BUILD_URL.replace("/${BUILD_NUMBER}/", "/${prevBuild.number}/")})" : 'None'
                def restoredTag = (prevStatus != 'SUCCESS' && prevStatus != null) ? ' :tada: **First green build after failure!**' : ''

                def msg = """:check_mark: **DEPLOYMENT SUCCESSFUL** — Suryojasvi Group Website${restoredTag}

---

| | |
|---|---|
| :package: **Service** | suryojasvi-group-web (Docker) |
| :hammer: **Build** | [#${BUILD_NUMBER}](${BUILD_URL}) |
| :seedling: **Branch** | `${env.GIT_BRANCH_NAME ?: GIT_BRANCH}` |
| :bookmark: **Commit** | [`${env.GIT_COMMIT_SHORT ?: 'N/A'}`](${env.GIT_COMMIT_URL ?: GIT_URL}) |
| :person: **Author** | ${env.GIT_COMMIT_AUTHOR ?: 'N/A'} |
| :memo: **Message** | ${env.GIT_COMMIT_MSG ?: 'N/A'} |
| :whale: **Image** | `${env.FULL_IMAGE ?: 'N/A'}` |
| :globe_showing_asia_australia: **Website** | ${SITE_URL} |
| :electric_plug: **Port** | ${HOST_PORT} → 3000 (nginx proxy) |
| :stopwatch: **Duration** | ${duration} |
| :rewind: **Previous Build** | ${prevBuildInfo} (${prevStatus}) |

:link: [View Commit](${env.GIT_COMMIT_URL ?: GIT_URL}) | [Branch History](${env.GIT_COMPARE_URL ?: GIT_URL}) | [Jenkins Build](${BUILD_URL}) | [Console Output](${BUILD_URL}console)"""
                sendZulipNotification(msg)
            }
        }

        failure {
            script {
                def duration = currentBuild.durationString.replace(' and counting', '')
                def prevBuild = currentBuild.previousBuild
                def prevStatus = prevBuild ? prevBuild.result : 'N/A'
                def prevBuildInfo = prevBuild ? "[#${prevBuild.number}](${BUILD_URL.replace("/${BUILD_NUMBER}/", "/${prevBuild.number}/")})" : 'None'
                def rollbackNote = (env.ROLLED_BACK == 'true') ?
                    ":recycle: **Rolled back** to `${env.PREV_IMAGE}` — the live site was restored to the previous image." :
                    ":warning: No rollback performed — check whether the site is currently serving."

                // Capture relevant error lines from the build log
                def errorSnippet = ''
                try {
                    def allLines = currentBuild.rawBuild.getLog(150)
                    def filteredLines = allLines.findAll { line ->
                        line =~ /(?i)(error[:\s]|exception[:\s]|\bfailed\b|fatal[:\s]|caused by|exit code [^0]|build failure|cannot find|could not|no such file|permission denied|killed|oom|no space left)/
                    }
                    def logLines = filteredLines ? filteredLines.take(30) : allLines.takeRight(35)
                    errorSnippet = logLines.collect { line ->
                        line.length() > 300 ? line.take(300) + '…' : line
                    }.join('\n')
                } catch (Exception logEx) {
                    errorSnippet = "⚠️ Could not retrieve build logs: ${logEx.message}"
                }

                def msg = """:cross_mark: **DEPLOYMENT FAILED** — Suryojasvi Group Website

---

| | |
|---|---|
| :package: **Service** | suryojasvi-group-web (Docker) |
| :hammer: **Build** | [#${BUILD_NUMBER}](${BUILD_URL}) |
| :seedling: **Branch** | `${env.GIT_BRANCH_NAME ?: GIT_BRANCH}` |
| :bookmark: **Commit** | [`${env.GIT_COMMIT_SHORT ?: 'N/A'}`](${env.GIT_COMMIT_URL ?: GIT_URL}) |
| :person: **Author** | ${env.GIT_COMMIT_AUTHOR ?: 'N/A'} |
| :memo: **Message** | ${env.GIT_COMMIT_MSG ?: 'N/A'} |
| :whale: **Image** | `${env.FULL_IMAGE ?: 'N/A'}` |
| :stopwatch: **Duration** | ${duration} |
| :rewind: **Previous Build** | ${prevBuildInfo} (${prevStatus}) |

${rollbackNote}

:fire: **Action Required:** Review the error below and fix the failing stage.

**Error Logs:**
```
${errorSnippet}
```

:link: [View Commit](${env.GIT_COMMIT_URL ?: GIT_URL}) | [Full Console Output](${BUILD_URL}console) | [Jenkins Build](${BUILD_URL})"""
                sendZulipNotification(msg)
            }
        }

        unstable {
            script {
                def duration = currentBuild.durationString.replace(' and counting', '')
                def msg = """:warning: **DEPLOYMENT UNSTABLE** — Suryojasvi Group Website

| | |
|---|---|
| :package: **Service** | suryojasvi-group-web (Docker) |
| :hammer: **Build** | [#${BUILD_NUMBER}](${BUILD_URL}) |
| :seedling: **Branch** | `${env.GIT_BRANCH_NAME ?: GIT_BRANCH}` |
| :bookmark: **Commit** | [`${env.GIT_COMMIT_SHORT ?: 'N/A'}`](${env.GIT_COMMIT_URL ?: GIT_URL}) |
| :stopwatch: **Duration** | ${duration} |

:mag: Build completed with warnings. Investigate before going live.
:link: [View Console Output](${BUILD_URL}console) | [Jenkins Build](${BUILD_URL})"""
                sendZulipNotification(msg)
            }
        }

        aborted {
            script {
                def duration = currentBuild.durationString.replace(' and counting', '')
                def msg = """:prohibited: **DEPLOYMENT ABORTED** — Suryojasvi Group Website

| | |
|---|---|
| :package: **Service** | suryojasvi-group-web (Docker) |
| :hammer: **Build** | [#${BUILD_NUMBER}](${BUILD_URL}) |
| :stopwatch: **Duration** | ${duration} |

:link: [Jenkins Build](${BUILD_URL})"""
                sendZulipNotification(msg)
            }
        }

        always {
            script {
                echo "📊 Build duration: ${currentBuild.durationString}"
                echo "📊 Build result: ${currentBuild.result}"
                echo "🧹 Final cleanup"
                cleanWs()
            }
        }
    }
}
