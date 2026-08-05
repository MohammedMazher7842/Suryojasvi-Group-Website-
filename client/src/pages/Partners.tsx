import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Partners() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navigation />

            <main className="flex-grow pt-32 pb-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Header */}
                    <div className="text-center mb-20 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1e2a4a] font-[family-name:var(--font-serif)] mb-6 drop-shadow-sm">
                            Our Partners
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We collaborate with industry leaders and innovative organizations to deliver exceptional value and drive transformative growth across our ventures.
                        </p>
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-8 rounded-full"></div>
                    </div>

                    {/* Partners Grid */}
                    <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {[
                                { name: 'Arnir', logo: '/logos/arnir.png' },
                                { name: 'Dhwani', logo: '/logos/dhwani.png' },
                                { name: 'DanaMojo', logo: '/logos/danamojo.png' },
                                { name: 'Pure India', logo: '/logos/pureinidia.png' },
                                { name: 'Good School', logo: '/logos/GoodSchool.png' },
                                { name: 'Sattva', logo: '/logos/Sattva.png' },
                                { name: 'Learning Forward', logo: '/logos/learningforward.jpeg' },
                            ].map((partner, index) => (
                                <div key={partner.name} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-center justify-center h-40 group transition-all duration-500 hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] hover:-translate-y-2 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                                    {/* Subtle gradient background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    {/* Top accent line animation */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                    
                                    <img src={partner.logo} alt={`${partner.name} Logo`} className="relative z-10 w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 drop-shadow-sm group-hover:drop-shadow-lg" />
                                </div>
                            ))}
                            
                            {/* Placeholder for future partners */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 border-dashed flex items-center justify-center h-40">
                                <div className="text-gray-300 font-medium text-sm text-center">More Partners<br/>Coming Soon</div>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60 -mt-10 -mr-10"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -mb-10 -ml-10"></div>
                        
                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2a4a] mb-4">Why Partner With Us?</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our approach is built on mutual growth, shared vision, and an unwavering commitment to excellence.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {/* Reason 1 */}
                                <div className="space-y-4 group">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1e2a4a]">Accelerated Innovation</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Leverage our group's diverse expertise across tech, analytics, and manufacturing to bring innovative solutions to market faster.
                                    </p>
                                </div>

                                {/* Reason 2 */}
                                <div className="space-y-4 group">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1e2a4a]">Global Reach</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tap into our extensive network across multiple industries and geographic locations to expand your market footprint.
                                    </p>
                                </div>

                                {/* Reason 3 */}
                                <div className="space-y-4 group">
                                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1e2a4a]">Synergistic Ecosystem</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Become part of an interconnected ecosystem where each entity mutually benefits from shared resources, knowledge, and operational scale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
