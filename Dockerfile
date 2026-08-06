# =============================================================================
# Suryojasvi Group Website — Vite (React 19) + Express static server
#   build : vite build            -> dist/public
#           esbuild server/index.ts -> dist/index.js  (ESM, deps external)
#   run   : node dist/index.js    -> serves dist/public on $PORT
# =============================================================================

# ---------- Build stage ----------
# Vite 7 requires Node ^20.19 || >=22.12 — pin 22 LTS.
FROM node:22-alpine AS builder

WORKDIR /app

# Install deps first so this layer caches across source-only changes
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy source (see .dockerignore — raw asset folders are excluded)
COPY . .

# Some npm tarballs land without the exec bit on Alpine
RUN chmod -R +x node_modules/.bin

RUN npm run build

# ---------- Runtime stage ----------
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# server/index.ts is bundled with --packages=external, so its only runtime
# dependency (express) must exist in the image. We write a minimal manifest
# instead of copying the project's package.json: copying the real one makes
# npm resolve the full dev tree (vite 7 vs @builder.io/vite-plugin-jsx-loc
# peer conflict -> ERESOLVE), and it drags the React/Radix tree into a stage
# that only serves the already-built dist/public.
# "type": "module" is required — dist/index.js is an ESM bundle.
RUN printf '%s' \
    '{"name":"suryojasvi-group-web","private":true,"type":"module","dependencies":{"express":"^4.21.2"}}' \
    > package.json \
    && npm install --omit=dev --no-audit --no-fund \
    && npm cache clean --force

COPY --from=builder /app/dist ./dist

# Drop privileges — the node image ships an unprivileged `node` user
RUN chown -R node:node /app
USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "dist/index.js"]
