import { ArrowUpRight } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

/**
 * GroupCompanies Component
 * 
 * Displays the group's subsidiary companies and products.
 * Layout based on the provided reference image:
 * - Left side: WyzMindz overview and detailed text
 * - Right side: Cards for TransMon and AutoSherpas with 'Know More' links
 */

export default function GroupCompanies() {
    // Verified structural integrity
    return (
        <section id="companies" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1e2a4a] font-[family-name:var(--font-serif)] mb-4">
                        Our Group of Companies
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mx-auto rounded-full"></div>
                </div>

                <div id="wyzmindz" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto pt-16 -mt-16">
                    {/* Left Column: WyzMindz Detailed Info */}
                    <div className="space-y-8 animate-fade-in-left">
                        {/* WyzMindz Logo Representation */}
                        <a href="https://wyzmindz.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mb-6 hover:scale-105 transition-transform">
                            <img
                                src="/logos/Wyzmindz.png"
                                alt="WyzMindz Logo"
                                className="h-20 w-auto object-contain"
                            />
                        </a>

                        <div className="prose prose-lg text-gray-600 font-[family-name:var(--font-sans)] leading-relaxed space-y-6">
                            <p className="font-semibold text-[#1e2a4a]">
                                Founded 29-Sept-2010
                            </p>
                            <p>
                                An Analytics Company.
                            </p>
                            <p>
                                Provides Data Products and Services solutions for B2B customers.
                            </p>
                            <p>
                                Expertise in two domains <strong className="text-[#1e2a4a]">Customer Service</strong> and <strong className="text-[#1e2a4a]">Supply Chain Management</strong>.
                            </p>

                            <div className="pt-4">
                                <a href="https://wyzmindz.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-wider hover:text-orange-600 transition-colors group text-sm">
                                    Know More
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Cards */}
                    <div className="space-y-8 animate-fade-in-right">
                        {/* TransMon Card */}
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
                                {/* Logo Placeholder */}
                                <a href="https://transmonqa.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                                    <img
                                        src="/logos/transmon.png"
                                        alt="TransMon Logo"
                                        className="h-16 w-auto object-contain"
                                    />
                                </a>

                                <a href="https://transmonqa.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#d4af37] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#b5952f] transition-colors rounded shadow-md whitespace-nowrap">
                                    Know More
                                </a>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                                Optimize Large Sales, Collections & Customer Service Operations through AutoQA & Speech Analytics
                            </p>
                            <div className="mt-4 relative p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-sm transition-all duration-500 hover:shadow-orange-200/50 hover:-translate-y-1 overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                <p className="text-gray-800 font-medium relative z-10 text-sm md:text-base leading-relaxed">
                                    <strong className="text-orange-600 drop-shadow-sm">Our MTP (Massive Transformative Purpose)</strong> is <span className="italic">Simplify & elevate Large customer service operations</span>
                                </p>
                            </div>
                        </div>

                        {/* AutoSherpa Card */}
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
                                {/* Logo Placeholder */}
                                <a href="https://autosherpas.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                                    <img
                                        src="/logos/autosherpa.png"
                                        alt="AutoSherpa Logo"
                                        className="h-16 w-auto object-contain"
                                    />
                                </a>

                                <a href="https://autosherpas.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#d4af37] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#b5952f] transition-colors rounded shadow-md whitespace-nowrap">
                                    Know More
                                </a>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                                Elevate Automotive Dealer profitability through Better Sales, Service & Insurance Renewals
                            </p>
                            <div className="mt-4 relative p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-sm transition-all duration-500 hover:shadow-orange-200/50 hover:-translate-y-1 overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                <p className="text-gray-800 font-medium relative z-10 text-sm md:text-base leading-relaxed">
                                    <strong className="text-orange-600 drop-shadow-sm">Our MTP (Massive Transformative Purpose)</strong> is <span className="italic">Be the digital Operating system for automotive retail industry</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contribution Stats Banner */}
                <div className="mt-24 w-full bg-gradient-to-r from-[#1e2a4a] to-[#111827] relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up">
                    {/* Texture Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    {/* Decorative Blobs */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>

                    <div className="relative z-10 py-16 px-6 md:px-12 text-center">
                        <h3 className="text-2xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)] mb-12 leading-tight">
                            Our Contribution in the <br className="hidden md:block" />
                            <span className="text-orange-400">CX, Sales, Collections & Insurance Space</span>
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                            {[
                                { value: "700+", label: "Satisfied Customers" },
                                { value: "100,000+", label: "Daily Users" },
                                { value: "25+", label: "Unicorns" },
                                { value: "1 Billion", label: "Interactions Studied" }
                            ].map((stat, index) => (
                                <div key={index} className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:translate-y-[-4px] border border-transparent hover:border-white/10">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-3 font-[family-name:var(--font-serif)] group-hover:text-orange-400 transition-colors drop-shadow-lg">
                                        <AnimatedCounter value={stat.value} />
                                    </div>
                                    <div className="h-1 w-12 bg-white/20 mb-4 rounded-full group-hover:bg-orange-500/50 transition-colors"></div>
                                    <div className="text-blue-100 font-semibold tracking-wide text-sm md:text-base font-[family-name:var(--font-sans)] uppercase opacity-90 group-hover:opacity-100">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="h-24"></div>

                {/* Trasccon Section */}
                <div id="trasccon" className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 pt-16 -mt-16">
                    {/* Rocket Background Effect */}
                    <div className="absolute inset-0 z-0">
                        {/* Sky Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-600 to-orange-200 opacity-40"></div>
                        {/* Stars */}
                        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
                        {/* Central Beam representing rocket trail */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-full bg-gradient-to-t from-orange-500 via-yellow-200 to-transparent opacity-30 blur-2xl"></div>
                    </div>

                    <div className="relative z-10 py-20 px-6 md:px-12">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 text-center md:text-left">
                            <a href="https://trasccon.com/" target="_blank" rel="noopener noreferrer" className="bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform">
                                <img
                                    src="/logos/trasccon.png"
                                    alt="Trasccon Logo"
                                    className="h-12 md:h-16 w-auto object-contain"
                                />
                            </a>
                            <h2 className="text-3xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] drop-shadow-md">
                                Trasccon Interconnection Systems
                            </h2>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

                            {/* LeftImages */}
                            <div className="lg:col-span-3 space-y-8">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 group">
                                    <div className="h-40 rounded-xl mb-4 overflow-hidden relative group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow duration-500">
                                        <img
                                            src="/logos/aerospace.png"
                                            alt="Aerospace Sector"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <h4 className="text-white text-center font-bold tracking-wider group-hover:text-blue-200 transition-colors">AEROSPACE</h4>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 group">
                                    <div className="h-40 rounded-xl mb-4 overflow-hidden relative group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-shadow duration-500">
                                        <img
                                            src="/logos/military.png"
                                            alt="Military Sector"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <h4 className="text-white text-center font-bold tracking-wider group-hover:text-green-200 transition-colors">MILITARY</h4>
                                </div>
                            </div>

                            {/* Center Text */}
                            <div className="lg:col-span-6 text-center space-y-10">
                                <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">Founded 1-Oct-2010</p>
                                <h3 className="text-xl md:text-2xl font-sans text-white leading-relaxed drop-shadow-lg mb-4">
                                    A Manufacturing Company focused on <strong className="text-orange-300">Interconnection Systems</strong>.
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Primarily Manufactures for Defense and Aviation sectors. Also other Industries.
                                </p>
                                <div className="mt-4 relative p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm transition-all duration-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:-translate-y-1 overflow-hidden group backdrop-blur-sm">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/10 to-amber-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                    <p className="text-gray-200 font-medium relative z-10 text-lg leading-relaxed">
                                        <strong className="text-orange-400 drop-shadow-sm">Our MTP (Massive Transformative Purpose)</strong> is <span className="italic text-white">Protecting Countries Innovatively.</span>
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <a href="https://trasccon.com/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-gradient-to-r from-[#d4af37] to-[#b5952f] text-white font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all rounded-sm transform hover:scale-105">
                                        Know More
                                    </a>
                                </div>

                                <div className="flex justify-center mt-8">
                                    <div className="w-full sm:w-2/3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 group">
                                        <div className="h-40 rounded-xl mb-4 overflow-hidden relative group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-shadow duration-500">
                                            <img
                                                src="/logos/Industry.jpeg"
                                                alt="Industry Sector"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <h4 className="text-white text-center font-bold tracking-wider group-hover:text-yellow-200 transition-colors uppercase">Industry</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Right Images */}
                            <div className="lg:col-span-3 space-y-8">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 group">
                                    <div className="h-40 rounded-xl mb-4 overflow-hidden relative group-hover:shadow-[0_0_20px_rgba(30,58,138,0.5)] transition-shadow duration-500">
                                        <img
                                            src="/logos/marine.png"
                                            alt="Marine Sector"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <h4 className="text-white text-center font-bold tracking-wider group-hover:text-blue-200 transition-colors">MARINE</h4>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 group">
                                    <div className="h-40 rounded-xl mb-4 overflow-hidden relative group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-shadow duration-500">
                                        <img
                                            src="/logos/medical.png"
                                            alt="Medical Sector"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <h4 className="text-white text-center font-bold tracking-wider group-hover:text-red-200 transition-colors">MEDICAL</h4>
                                </div>
                            </div>

                        </div>

                        {/* Trasccon Stats Banner */}
                        <div className="w-full bg-[#1e2a4a]/90 backdrop-blur-md relative overflow-hidden rounded-2xl border-t-4 border-orange-500">
                            <div className="relative z-10 py-12 px-6 text-center">
                                <h4 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-heading)] mb-10">
                                    Our Contribution in the <span className="text-blue-300">Aerospace and Defense industry</span>
                                </h4>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {[
                                        { value: "100+", label: "Satisfied Clients" },
                                        { value: "1000+", label: "Project successfully implemented" },
                                        { value: "25+", label: "Accolades Earned" },
                                        { value: "15K+", label: "Integrations Done" }
                                    ].map((stat, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-serif)]">
                                                <AnimatedCounter value={stat.value} />
                                            </div>
                                            <div className="text-gray-300 text-sm md:text-base font-medium tracking-wide">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Spacer */}
                <div className="h-24"></div>

                {/* Idamtat Section */}
                <div id="idamtat" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto pt-16 -mt-16">
                    {/* Left Column: Idamtat Detailed Info */}
                    <div className="space-y-8 animate-fade-in-left">
                        <a href="https://idamtat.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mb-6 hover:scale-105 transition-transform">
                            <img
                                src="/logos/idamtat.png"
                                alt="Idamtat Logo"
                                className="h-24 w-auto object-contain"
                            />
                        </a>

                        <div className="prose prose-lg text-gray-600 font-[family-name:var(--font-sans)] leading-relaxed space-y-6">
                            <p className="font-semibold text-[#1e2a4a]">
                                Founded on 07-December-2022
                            </p>
                            <p>
                                We are enabling manufacturers and dealers with SaaS technology to automate <strong className="text-[#1e2a4a]">incentive management</strong>, <strong className="text-[#1e2a4a]">data management</strong>, and deployment of <strong className="text-[#1e2a4a]">Project Management ERP</strong>.
                            </p>
                            <div className="mt-6 relative p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-sm transition-all duration-500 hover:shadow-orange-200/50 hover:-translate-y-1 overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                <p className="text-gray-800 font-medium relative z-10 text-base leading-relaxed">
                                    <strong className="text-orange-600 drop-shadow-sm">Our MTP (Massive Transformative Purpose)</strong> is <span className="italic">Enabling MSME's to thrive globally</span>
                                </p>
                            </div>

                            <div className="pt-4">
                                <a href="https://idamtat.in/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#c0a070] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#a88a5b] transition-colors rounded shadow-md inline-block">
                                    Know More
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Idamtat Product Cards */}
                    <div className="space-y-8 animate-fade-in-right">
                        {/* GetAPcs Card */}
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
                                <a href="https://getapcs.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                                    <img
                                        src="/logos/getapcs.png"
                                        alt="GetAPcs Logo"
                                        className="h-16 w-auto object-contain"
                                    />
                                </a>

                                <a href="https://getapcs.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#c0a070] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#a88a5b] transition-colors rounded shadow-md whitespace-nowrap">
                                    Know More
                                </a>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                                Project-First Cloud ERP Software for Engineering, Manufacturing & Project-Driven Businesses.
                            </p>
                        </div>

                        {/* SourceBuddy Card */}
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
                                <a href="https://sourcebuddy.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                                    <img
                                        src="/logos/sourcebuddy.png"
                                        alt="SourceBuddy Logo"
                                        className="h-20 w-auto object-contain"
                                    />
                                </a>

                                <a href="https://sourcebuddy.in/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#c0a070] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#a88a5b] transition-colors rounded shadow-md whitespace-nowrap">
                                    Know More
                                </a>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                                Increase Sales, Improve Margins & Optimize Communications Between Supplier, Buyer & Customer
                            </p>
                        </div>

                        {/* MyCaratEdge Card */}
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
                                <a href="https://mycaratedge.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                                    <img
                                        src="/logos/mycaratedge.png"
                                        alt="MyCaratEdge Logo"
                                        className="h-16 w-auto object-contain"
                                    />
                                </a>

                                <a href="https://mycaratedge.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#c0a070] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#a88a5b] transition-colors rounded shadow-md whitespace-nowrap">
                                    Know More
                                </a>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                                Exclusive incentives and benefits execution platform tailored for optimal margins and growth.
                            </p>
                        </div>

                        {/* StoresBuddy Card */}
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                                    <img
                                        src="/logos/storesbuddy.jpg"
                                        alt="StoresBuddy Logo"
                                        className="h-36 w-auto object-contain mix-blend-multiply"
                                    />
                                </a>

                                <a href="#" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#c0a070] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#a88a5b] transition-colors rounded shadow-md whitespace-nowrap">
                                    Know More
                                </a>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                                End-to-end intelligent inventory visibility and streamlined store operation management.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="h-24"></div>

                {/* Asteya Section */}
                <div id="asteya" className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-sky-50 transition-all duration-500 hover:shadow-sky-200/50 group/section pt-16 -mt-16">
                    {/* Sky Background Effect */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        {/* Sky Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-sky-100/10 to-transparent"></div>

                        {/* Animated Clouds (Simulated) */}
                        <div className="absolute top-[10%] left-[15%] w-64 h-24 bg-white/40 blur-3xl rounded-full animate-pulse"></div>
                        <div className="absolute top-[40%] right-[10%] w-96 h-32 bg-white/30 blur-[100px] rounded-full animate-pulse delay-1000"></div>
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-white to-transparent opacity-60"></div>
                    </div>

                    <div className="relative z-10 py-16 px-6 md:px-12 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 animate-fade-in-left">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-6">
                                    <a href="https://asteyaservices.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-2xl shadow-xl shadow-sky-900/5 backdrop-blur-sm border border-white/50 transform transition-transform hover:scale-110 duration-500">
                                        <img
                                            src="/logos/asteyanew.jpeg"
                                            alt="Asteya Logo"
                                            className="h-16 md:h-20 w-auto object-contain"
                                        />
                                    </a>
                                </div>

                                <div className="prose prose-lg text-gray-700 font-[family-name:var(--font-sans)] leading-relaxed space-y-6">
                                    <p className="text-xl font-semibold text-[#1e2a4a] border-l-4 border-sky-400 pl-4 py-1">
                                        Founded on 28-May-2021
                                    </p>
                                    <p className="text-lg">
                                        Focused on serving the Indian NGO sector. Sustainability instead of Profit is the motive.
                                    </p>
                                    <p className="text-lg text-gray-600">
                                        Provides Compliance, Accounting, HR, and Reporting services to NGOs for a minimal fee.
                                    </p>
                                    <div className="mt-6 relative p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-sm transition-all duration-500 hover:shadow-orange-200/50 hover:-translate-y-1 overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                        <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                        <p className="text-gray-800 font-medium relative z-10 text-lg leading-relaxed m-0">
                                            <strong className="text-orange-600 drop-shadow-sm">Our MTP (Massive Transformative Purpose)</strong> is <span className="italic">Helping build a credible and Effective social sector.</span>
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <a href="https://asteyaservices.com/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#c0a070] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#a88a5b] transition-all hover:shadow-lg hover:-translate-y-1 rounded shadow-md group inline-block">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Representation (Social Sector/NGO Imagery) */}
                            <div className="hidden lg:flex justify-center items-center relative">
                                <div className="relative w-full max-w-md aspect-square group/img">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400/20 to-orange-400/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-700"></div>
                                    <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80 transform rotate-2 group-hover/img:rotate-0 transition-transform duration-700">
                                        <img
                                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                                            alt="Social Impact"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Decorative badge */}
                                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center justify-center animate-bounce">
                                        <div className="w-10 h-10 text-orange-500">
                                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Asteya Stats Banner */}
                        <div className="mt-16 w-full bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-2xl overflow-hidden shadow-xl border-t-4 border-sky-400">
                            <div className="py-10 px-6 text-center">
                                <h4 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-heading)] mb-10">
                                    Our Contribution in the <span className="text-sky-300">Social Sector Space</span>
                                </h4>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {[
                                        { value: "100+", label: "Serving NGOs" },
                                        { value: "300+", label: "Donar Prog. Supported" },
                                        { value: "36 Lac +", label: "Total Benificiary" },
                                        { value: "88 Cr. +", label: "Budget under Management" }
                                    ].map((stat, index) => (
                                        <div key={index} className="flex flex-col items-center group/stat transition-transform hover:-translate-y-1">
                                            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-serif)]">
                                                <AnimatedCounter value={stat.value} />
                                            </div>
                                            <div className="text-sky-100 text-sm md:text-base font-medium tracking-wide opacity-90 group-hover/stat:opacity-100 transition-opacity">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div> {/* Closes Relative z-10 (365) */}
                </div> {/* Closes Asteya Section Outer (353) */}

                {/* Spacer */}
                <div className="h-24"></div>

                {/* Yocoya Section */}
                <div id="yocoya" className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-white group/yocoya pt-16 -mt-16">
                    {/* Background Vibe (Semi-transparent overlay on white) */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-50"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 blur-[100px] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 blur-[100px] rounded-full"></div>
                    </div>

                    <div className="relative z-10 py-16 px-6 md:px-12 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left Column: Yocoya Info */}
                            <div className="space-y-8 animate-fade-in-left">
                                <a href="https://getyocoya.com/" target="_blank" rel="noopener noreferrer" className="border-4 border-purple-500/30 p-2 rounded-xl inline-block hover:scale-105 transition-transform">
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <img
                                            src="/logos/yocoya.png"
                                            alt="Yocoya Logo"
                                            className="h-12 md:h-16 w-auto object-contain"
                                        />
                                    </div>
                                </a>

                                <div className="prose prose-lg text-gray-700 font-[family-name:var(--font-sans)] leading-relaxed space-y-6">
                                    <p className="font-semibold text-purple-800">
                                        Founded 15-Dec-2022
                                    </p>
                                    <p>
                                        Company focused on to digitize customer experience with SaaS CRM & Cloud Phone.
                                    </p>
                                    <p>
                                        <span className="italic font-medium text-[#1e2a4a]">Scalable customized workflows</span> for Automotive car dealers, banking and insurance products sales.
                                    </p>
                                    <div className="mt-6 relative p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-sm transition-all duration-500 hover:shadow-orange-200/50 hover:-translate-y-1 overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                        <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                        <p className="text-gray-800 font-medium relative z-10 text-base leading-relaxed m-0">
                                            <strong className="text-orange-600 drop-shadow-sm">Our MTP (Massive Transformative Purpose)</strong> is <span className="italic">Be the digital Operating system for automotive retail industry</span>
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <a href="https://getyocoya.com/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#c0a070] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#a88a5b] transition-all hover:shadow-lg hover:-translate-y-1 rounded shadow-md inline-block">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Product Cards */}
                            <div className="space-y-6 animate-fade-in-right">
                                {/* AssureSherpa Card */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 group">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                        <a href="https://assuresherpa.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                                            <div className="px-3 py-1 bg-red-50 rounded border border-red-100">
                                                <span className="text-red-600 font-bold tracking-tighter text-lg">ASSURE<span className="text-gray-500 font-medium">Sherpa</span></span>
                                            </div>
                                        </a>
                                        <a href="https://assuresherpa.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#c0a070] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#a88a5b] transition-colors rounded shadow-sm whitespace-nowrap">
                                            Know More
                                        </a>
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Drive Sales of New Insurance Renewals & Policy Renewals
                                    </p>
                                </div>

                                {/* Yocoya Collect Card */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 group">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                        <a href="https://getyocoya.com/collect/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                                            <div className="px-3 py-1 bg-purple-50 rounded border border-purple-100">
                                                <span className="text-purple-700 font-bold tracking-tighter text-lg uppercase">Yocoya <span className="text-blue-600">Collect</span></span>
                                            </div>
                                        </a>
                                        <a href="https://getyocoya.com/collect/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#c0a070] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#a88a5b] transition-colors rounded shadow-sm whitespace-nowrap">
                                            Know More
                                        </a>
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Multi Portfolio Debt Collection CRM
                                    </p>
                                </div>

                                {/* Dial Max Card */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 group">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                        <a href="https://getyocoya.com/dialmax/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                                            <div className="px-3 py-1 bg-orange-50 rounded border border-orange-100">
                                                <span className="text-orange-600 font-bold tracking-tighter text-lg uppercase">Dial <span className="text-yellow-600">Max</span></span>
                                            </div>
                                        </a>
                                        <a href="https://getyocoya.com/dialmax/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#c0a070] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#a88a5b] transition-colors rounded shadow-sm whitespace-nowrap">
                                            Know More
                                        </a>
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Outstanding tele-communication app for Call Centers, Tele-Sales, Customer Service and Field support team. Comes with In-built CRM at ZERO Cost.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
