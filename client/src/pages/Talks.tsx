import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Quote, Star, PlayCircle, Building2, UserCircle2, ExternalLink, Sparkles, X } from 'lucide-react';
import { useState, useEffect } from 'react';
/**
 * Suryojasvi Talk Page
 * 
 * Features senior employee experiences and company reviews.
 * Design: Trustworthy, professional, with glassmorphism and gold/navy accents.
 */

const testimonials = [
    {
        id: 1,
        name: "Manmohan",
        role: "Market Research & Deployment Lead, My CartEdge",
        image: "/team/manu.jpg",
        quote: "An 11-year journey from a tight-knit team of 4 to transforming my domain knowledge into a market-leading tool. Here, I am not just 'one in a thousand'.",
        fullText: "Eleven years ago, I walked into an interview that would redefine my professional life. Back then, we were a small, tight-knit team of 4. I've watched that team scale to 14, and my own role evolved from an analyst to a leader.\n\nMy career took a pivotal turn when I was entrusted with Transmon. We started with Flipkart, beginning with just 250 licenses. Through relentless effort, we scaled that to a staggering 12,000 licenses across 13 partners.\n\nMy journey comes full circle as I lead the market research and deployment for My CartEdge. Why did I stay? In 11 years, opportunities to leave were many. But at Suryojasvi, I am not just 'one in a thousand'. I have the power to influence quality, the freedom to seek help from anyone, and the privilege of working in an environment free from internal issues. Each Director has brought a unique strength to Suryojasvi. Now, it is our turn to take that legacy forward.",
        years: "11 Years",
        title: "Eleven Years of Innovation, Trust, and Transformation: My Journey at Suryojasvi"
    },
    {
        id: 2,
        name: "Rohit Kapoor",
        role: "Veteran Leader, WyzMindz & TransMon",
        image: "/team/rohit.jpg",
        quote: "Thirteen years of laughter and late nights, of challenges and celebrations... It has been much more than just a career — it has been a family, a classroom, and a stage.",
        fullText: "As I sit back and reflect, I realize that my professional journey with WyzMindz has now completed 13 years. Thirteen years of laughter and late nights, of challenges and celebrations, of setbacks that shaped me and victories that lifted us all. It has been much more than just a career — it has been a family, a classroom, and a stage where I grew as a professional and as a person.\n\nOn 7th August 2012, I made a decision that changed my life. I left the comfort and prestige of a large, established brand to join a young company — WyzMindz. It wasn't an easy choice, but my trust and respect for Mr. Sachin Mannan gave me the courage to take this leap of faith. Our first office was a small setup in Sector 7, Delhi. What made WyzMindz unique from the start was the vision of its founders: Sachin Mannan, Chetan Khosla, Thomas Mathew, and Mahidhar Shastri. Together, they built not just a company but a dream.\n\nAs WyzMindz grew, so did our ambitions. Under Mr. Mahidhar Shastri's leadership, the idea of creating our own product took root. That's how TransMon was born. Our journey picked up pace with clients like Flipkart, Telenor, and OYO. In 2019, I had the privilege of leading TransMon for Airtel — one of my proudest responsibilities.\n\nLooking back at this 13-year journey, my heart is full. WyzMindz is more than a workplace for me. It's been my family, my school, and my launchpad. Here's to WyzMindz. Here's to trust, resilience, and togetherness.",
        years: "13 Years",
        title: "When Trust Becomes a Journey: 13 Years of Togetherness"
    },
    {
        id: 3,
        name: "Sridhar Agilan",
        role: "Trasccon Interconnection",
        image: "/team/sridhar.jpg",
        quote: "That quote became the foundation of my comeback: 'The place where you fall is the place where you must rise.'",
        fullText: "When I look back to where it all began, my journey with Trasccon feels nothing short of amazing.\n\nBack in July 2017, I was going through one of the most challenging phases of my life — jobless, mentally and financially disturbed, with my child just six months old. That was when Mr. Girish referred me to Mr. Singh for an opportunity at Trasccon. I still remember my first meeting with Mr. SurenderSingh in the small cabin at our old Yelachenahalli plant. He saw potential in me. He then asked me to meet Mr. Rudrappa and the other directors at Wyzmindz. On 28th July, I received a call requesting my salary slip, and soon after, an email confirming my joining date. That moment changed everything for me. As the saying goes: 'The place where you fall is the place where you must rise.' That quote became the foundation of my comeback.\n\nFrom that day on, I committed myself fully to learning, growing, and contributing. I began my journey with production of Premier cables and slowly overcame my personal challenges through work, focus, and guidance from my mentors — Mr. Singh and Mr. Rudrappa.\n\nIn 2019, Trasccon expanded its manufacturing facility and took up the Fence Project. Our team successfully localized imported parts, completed complex engineering tasks, and delivered results that strengthened our reputation. That period was also personally significant — I was promoted to Assistant Manager, my children started school, and life began to stabilize.\n\nToday, as I complete 8 years with Trasccon, I can proudly say that whatever I've achieved is deeply connected with this organization. Trasccon didn't just help me build a career; it helped me rebuild my life. Here's to 8 years of learning and contribution — and to many more years of progress ahead.",
        years: "8 Years",
        title: "Rising Strong: My 8 Year Journey with Trasccon"
    },
    {
        id: 4,
        name: "Navaneeth",
        role: "Wyzmindz Pvt. Ltd.",
        image: "/team/navaneeth.png",
        quote: "What began as a learning opportunity gradually evolved into a decade filled with growth, responsibility, and trust.",
        fullText: "Completing 10 years at Wyzmindz Pvt. Ltd. has been a deeply meaningful and rewarding journey for me. What began as a learning opportunity gradually evolved into a decade filled with growth, responsibility, and trust. Over these years, I have grown both professionally and personally—shaped by real challenges, enriching experiences, and continuous learning.\n\nAs my journey progressed, I was entrusted with key responsibilities that allowed me to take ownership, work closely with teams, and contribute to improving processes and outcomes. Each phase brought its own lessons and reinforced the importance of adaptability, teamwork, and consistent effort in everything I do.\n\nLearning and collaboration have always been encouraged at Wyzmindz, and that culture has played a major role in my development. The guidance, support, and trust extended by leaders and colleagues have helped shape me into a better professional and a more grounded individual. I am truly grateful for the environment that allowed me to learn, grow, and contribute with confidence.\n\nReaching this 10-year milestone is a proud moment for me. I am thankful for the opportunities, support, and meaningful relationships built along the way. As I look ahead, I am confident that this journey will continue with the same spirit and purpose, contributing to the future successes of Wyzmindz Pvt. Ltd.\n\nTen years of learning, growth, and belonging—and the journey continues.",
        years: "10 Years",
        title: "A Decade at Wyzmindz: My Journey of Growth and Learning"
    }
];

const reviews = [
    { rating: 5, text: "Its a learning organisation. If we come across something new, there is a freedom to share your knowledge with everyone, culture, celebrations, fearless environment", author: "Senior Manager", platform: "AmbitionBox" },
    { rating: 5, text: "Excellent experience working at AUTOSherpa CRM.. Collaborative environment. Strong culture of learning & team work. Once in 6 months appraisal.", author: "Manager", platform: "AmbitionBox" },
    { rating: 5, text: "Continuously getting new opportunity to about myself too... proper guidance by seniors and salary increments is also there on yearly bases", author: "Quality Analyst", platform: "AmbitionBox" },
    { rating: 5, text: "Very friendly management. Flexible work schedule. Opportunity to pursue the initiatives I am interested in. For example, as a back-office person, you can get the opportunity to get exposure in Sales & Marketing.", author: "Business Head", platform: "AmbitionBox" },
    { rating: 5, text: "It's a learning organisation, where you have freedom to explore and give ideas. Founders are approachable. Work life balance is there, flexible timings, and everyone is helpful.", author: "Manager", platform: "AmbitionBox" },
    { rating: 5, text: "Opportunities to explore new fields, continuous personal and professional growth.", author: "Product & Dev Manager", platform: "AmbitionBox" },
    { rating: 5, text: "Very good place and work culture is very amazing.", author: "Business Analyst", platform: "AmbitionBox" },
    { rating: 5, text: "The company culture is good. Too friendly colleagues and management.", author: "Business Analyst", platform: "AmbitionBox" }
];

export default function Talks() {
    const [activeStory, setActiveStory] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
        };
        handleResize(); // set initial
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!activeStory) {
                setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
            }
        }, 6000);
        return () => clearInterval(timer);
    }, [activeStory, maxIndex]);

    return (
        <div className="min-h-screen bg-[#fdfdfd] pt-20">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-b from-[#1e2a4a] to-[#111827] overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1e2a4a] to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                        <Building2 className="w-5 h-5 text-[#c0a070]" />
                        <span className="text-white text-sm font-semibold tracking-wider uppercase">Suryojasvi Talk</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-serif)]">
                        Voices of <span className="text-[#c0a070]">Suryojasvi</span>
                    </h1>
                    <p className="text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                        Discover the stories, experiences, and genuine reviews from the minds driving our innovations forward.
                    </p>
                </div>
            </section>

            {/* CMD 15-Year Journey Message */}
            <section className="py-24 relative bg-white overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                        <div className="md:col-span-5 relative group">
                            <div className="absolute inset-0 bg-orange-100 rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                            <img src="/founders/chetan-new.jpg" alt="CMD Chetan Khosla" className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-xl relative z-10 border-4 border-white" />
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-gray-50 flex items-center justify-center flex-col min-w-[140px]">
                                <p className="text-4xl font-[family-name:var(--font-serif)] font-black text-orange-500">15</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Years of Legacy</p>
                            </div>
                        </div>
                        <div className="md:col-span-7 space-y-8 z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100">
                                <Sparkles className="w-5 h-5 text-orange-500" />
                                <span className="text-orange-700 text-xs font-black tracking-widest uppercase">Crystal Jubilee Message</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-[#1e2a4a] font-[family-name:var(--font-serif)] leading-tight">
                                A Reflection from our <span className="text-orange-500">CMD</span>
                            </h2>
                            <div className="h-1.5 w-24 bg-orange-500 rounded-full"></div>

                            <blockquote className="text-3xl text-gray-700 italic font-[family-name:var(--font-serif)] leading-relaxed relative">
                                <Quote className="w-12 h-12 text-orange-200 absolute -top-4 -left-4 -translate-y-full -z-10 opacity-50" />
                                "Man ka ho to <span className="text-orange-500 font-bold decoration-orange-200 underline decoration-4 underline-offset-4">Accha</span>, na ho to aur bhi <span className="text-blue-500 font-bold decoration-blue-200 underline decoration-4 underline-offset-4">Accha</span>."
                            </blockquote>

                            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                                <p>
                                    Looking back at 15 years, our journey has evolved significantly—from "Flying Kites" to aspiring to be a <strong>World Class Organization</strong>. Everything we've achieved thus far hasn't just been through our will alone; it has been guided by absolute magic, or <strong>Niyati</strong> (Destiny).
                                </p>
                                <p>
                                    As we celebrate our Crystal Jubilee, we recall milestones like the birth of Wyzmindz and Trasccon. Now, our goal is clear: whatever we do must create a significant, positive, and world-class impact.
                                </p>
                                <p>
                                    We embrace a new tradition: greeting each other with <strong className="text-[#1e2a4a]">"Suryojasvi Namah"</strong>—a daily reminder to harness the energy of the sun and become the brilliant individuals destiny calls us to be. Remember to pause, reflect, and always ask yourselves: What went well? What didn't go well? And what are we committing to build next?
                                </p>
                            </div>

                            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                                <div>
                                    <h4 className="font-bold text-[#1e2a4a] text-lg uppercase tracking-wider">Suryojasvi Chetan Khosla</h4>
                                    <p className="text-orange-500 font-semibold text-sm">Chairman & Managing Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Senior Experience / Testimonials */}
            <section className="py-24 relative bg-gray-50/50">
                <div className="absolute right-0 top-20 w-1/3 h-1/2 bg-orange-50/50 blur-[120px] rounded-full -z-10"></div>

                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1e2a4a] mb-4 font-[family-name:var(--font-serif)]">Leadership Chronicles</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[#c0a070] to-transparent mx-auto rounded-full"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto overflow-hidden pb-16">
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="w-full md:w-1/2 flex-shrink-0 px-4">
                                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-500 group h-full flex flex-col">
                                        <Quote className="w-12 h-12 text-[#c0a070] opacity-20 mb-6 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500" />
                                        <p className="text-gray-700 leading-relaxed min-h-[100px] italic">
                                            "{t.quote}"
                                        </p>
                                        <button
                                            onClick={() => setActiveStory(t)}
                                            className="text-orange-500 text-sm font-bold uppercase tracking-widest mt-4 mb-8 text-left hover:text-orange-600 transition-colors flex items-center gap-2 group/btn"
                                        >
                                            Read Full Journey
                                            <span className="text-lg leading-none group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                        </button>
                                        <div className="flex items-center gap-4 mt-auto">
                                            <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-orange-100" />
                                            <div>
                                                <h4 className="font-bold text-[#1e2a4a] text-lg font-[family-name:var(--font-serif)]">{t.name}</h4>
                                                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Dots */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-500 ${currentIndex === idx ? 'bg-orange-500 w-10' : 'bg-orange-200 hover:bg-orange-400'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Spotlight Concept (Live) */}
            <section className="py-24 bg-[#1e2a4a] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-serif)]">Inside the Ecosystem</h2>
                    <p className="text-blue-200/80 mb-12 max-w-2xl mx-auto italic">"Together!! Be the Light and Spread the Light!!!"</p>

                    <div className="max-w-4xl mx-auto relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group aspect-video bg-black flex items-center justify-center">
                        <iframe
                            src="https://www.youtube.com/embed/iiYIxDcTT10?autoplay=0"
                            title="Suryojasvi Culture Anthem"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0 z-10"
                        ></iframe>
                    </div>
                </div>
            </section>
            {/* Company Reviews */}
            <section className="py-24 relative bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1e2a4a] mb-4 font-[family-name:var(--font-serif)]">What Our People Say</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto mb-8">Authentic experiences shared by our team members across the group.</p>

                        <a href="https://www.ambitionbox.com/reviews/wyzmindz-solutions-reviews" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 text-[#1e2a4a] border border-gray-200 rounded-full shadow-sm hover:shadow transition-all group">
                            <span className="font-bold text-lg">169+</span>
                            <span className="text-gray-500">Genuine Reviews on</span>
                            <span className="font-bold text-blue-600">AmbitionBox</span>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </a>
                    </div>

                    {/* Infinite Auto-Scroll Carousel */}
                    <div className="relative w-full overflow-hidden max-w-7xl mx-auto flex items-stretch">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                        <div className="flex animate-scroll hover:[animation-play-state:paused] gap-6 py-4">
                            {/* Original Array */}
                            {reviews.map((review, idx) => (
                                <div key={`review-1-${idx}`} className="w-[350px] shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full cursor-grab active:cursor-grabbing">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-[#c0a070] text-[#c0a070]" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-6 flex-grow italic text-sm leading-relaxed">"{review.text}"</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <UserCircle2 className="w-5 h-5 text-gray-400" />
                                            <span className="text-sm font-semibold text-[#1e2a4a] truncate max-w-[120px]">{review.author}</span>
                                        </div>
                                        <span className="text-xs font-bold text-gray-400 uppercase bg-gray-50 px-2 py-1 rounded">{review.platform}</span>
                                    </div>
                                </div>
                            ))}

                            {/* Duplicate Array for Seamless Infinite Scroll */}
                            {reviews.map((review, idx) => (
                                <div key={`review-2-${idx}`} className="w-[350px] shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full cursor-grab active:cursor-grabbing">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-[#c0a070] text-[#c0a070]" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-6 flex-grow italic text-sm leading-relaxed">"{review.text}"</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <UserCircle2 className="w-5 h-5 text-gray-400" />
                                            <span className="text-sm font-semibold text-[#1e2a4a] truncate max-w-[120px]">{review.author}</span>
                                        </div>
                                        <span className="text-xs font-bold text-gray-400 uppercase bg-gray-50 px-2 py-1 rounded">{review.platform}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Modal Overlay */}
            {activeStory && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6 animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm cursor-pointer"
                        onClick={() => setActiveStory(null)}
                    ></div>
                    <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto z-10 animate-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setActiveStory(null)}
                            className="absolute top-6 right-6 w-10 h-10 bg-gray-50 hover:bg-orange-50 text-gray-400 hover:text-orange-500 rounded-full flex items-center justify-center transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden">
                            {/* Modal Image Header for Mobile / Sidebar for Desktop */}
                            <div className="md:col-span-4 bg-orange-50/50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-orange-100/50">
                                <img src={activeStory.image} alt={activeStory.name} className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl mb-6" />
                                <h4 className="font-bold text-[#1e2a4a] text-2xl text-center font-[family-name:var(--font-serif)]">{activeStory.name}</h4>
                                <p className="text-sm text-orange-600 font-medium text-center mt-2">{activeStory.role}</p>
                                <div className="mt-4 px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-500 shadow-sm border border-gray-100 uppercase tracking-widest">
                                    {activeStory.years}
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="md:col-span-8 p-8 md:p-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-8 font-[family-name:var(--font-serif)] leading-tight border-b border-gray-100 pb-6">
                                    {activeStory.title}
                                </h2>
                                <div className="space-y-6 text-gray-600 leading-relaxed font-light text-sm md:text-base">
                                    {activeStory.fullText.split('\n\n').map((paragraph: string, idx: number) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div >
    );
}
