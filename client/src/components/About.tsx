
import { Sparkles, ArrowRight } from 'lucide-react';

/**
 * About Section Component
 * 
 * Design Philosophy: World-Class Elegance & Modernity
 * - Sophisticated typography pairing (Serif headings + Sans body)
 * - Clean, ample whitespace with a subtle grid background
 * - Navy and Gold accent colors for premium feel
 * - Asymmetric layout for visual interest
 */

export default function About() {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Subtle Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            {/* Decorative gradient blob */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-semibold tracking-wide uppercase">
                            <Sparkles className="w-4 h-4" />
                            The Suryojasvi Philosophy
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-[#1e2a4a] font-[family-name:var(--font-serif)] leading-tight">
                            Redefining Excellence <br />
                            <span className="italic text-orange-500">across Industries</span>
                        </h2>
                    </div>

                    {/* Content Card with Glassmorphism */}
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl relative">
                        {/* Quote mark decoration */}
                        <div className="absolute -top-6 -left-6 text-9xl text-orange-100 font-serif leading-none select-none">"</div>

                        <div className="space-y-8 relative z-10">
                            <p className="text-xl md:text-2xl text-gray-800 font-[family-name:var(--font-heading)] font-medium leading-relaxed">
                                At Suryojasvi Group, we believe that the challenges of tomorrow cannot be solved with the thinking of yesterday.
                            </p>

                            <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent"></div>

                            <div className="space-y-6 text-lg text-gray-600 font-[family-name:var(--font-sans)] leading-relaxed">
                                <p>
                                    We are a diversified conglomerate driven by a singular mission: <strong className="text-[#1e2a4a]">Elevating Industries for a Better World.</strong> By anchoring our operations in Innovation, Technology, and strategic Partnerships, we bridge the gap between complex industrial problems and elegant, tech-driven solutions.
                                </p>
                                <p>
                                    From the precision of aerospace manufacturing to the predictive power of AI-driven risk assessment, <span className="font-semibold text-orange-500">Suryojasvi is the thread that weaves together excellence across global sectors.</span>
                                </p>
                            </div>

                            {/* Learn More Link */}
                            <div className="pt-4">
                                <a href="#culture" className="inline-flex items-center gap-2 text-[#1e2a4a] font-semibold hover:text-orange-500 transition-colors group">
                                    Discover Our Culture
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
