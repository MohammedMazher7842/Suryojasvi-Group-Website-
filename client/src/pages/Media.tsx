import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Newspaper, BookOpen, Play, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const magazines = [
    {
        id: 9,
        title: "Suryojasvi Times - Jun 2026",
        cover: "/magazine/Jun-26 cover.png",
        description: "Volume 25 - Discover the latest news and updates from June.",
        link: "/magazine/Jun-26.pdf",
        year: 2026
    },
    {
        id: 8,
        title: "Suryojasvi Times - May 2026",
        cover: "/magazine/May-26 cover.png",
        description: "Volume 24 - Highlights and achievements from May.",
        link: "/magazine/May-26.pdf",
        year: 2026
    },
    {
        id: 7,
        title: "Suryojasvi Times - Apr 2026",
        cover: "/magazine/Apr-26 cover.png",
        description: "Volume 23 - Catch up on all the news from April.",
        link: "/magazine/Apr-26.pdf",
        year: 2026
    },
    {
        id: 6,
        title: "Suryojasvi Times - Mar 2026",
        cover: "/magazine/Mar-26 cover.png",
        description: "Volume 22 - March into success with our latest edition.",
        link: "/magazine/Mar-26.pdf",
        year: 2026
    },
    {
        id: 5,
        title: "Suryojasvi Times - Feb 2026",
        cover: "/magazine/Feb-26Cover.png",
        description: "Volume 21 - Dive into our updates from February 2026.",
        link: "/magazine/Feb-26.pdf",
        year: 2026
    },
    {
        id: 4,
        title: "Suryojasvi Times - Jan 2026",
        cover: "/magazine/jan-2026-cover.png",
        description: "Volume 20 - Happy New Year 2026! Wishing the Suryojasvi Group a year of success, progress, and endless opportunities.",
        link: "/magazine/JAN-26.pdf",
        year: 2026
    }
];

export default function Media() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 350;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const [activeYear, setActiveYear] = useState<number | 'All'>('All');

    const filteredMagazines = activeYear === 'All'
        ? magazines
        : magazines.filter(m => m.year === activeYear);

    const years = ['All', ...Array.from(new Set(magazines.map(m => m.year)))].sort((a, b) => {
        if (a === 'All') return -1;
        if (b === 'All') return 1;
        return (b as number) - (a as number);
    });

    return (
        <div className="min-h-screen bg-[#fcfcfc] text-gray-800 pt-20">
            <Navigation />

            {/* Media Hero */}
            <section className="relative py-32 overflow-hidden bg-[#1e2a4a]">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-orange-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-xl">
                        <Newspaper className="w-5 h-5 text-orange-400" />
                        <span className="text-white font-bold tracking-widest uppercase text-xs">Official Media Room</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-serif)]">
                        Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Publications</span>
                    </h1>
                    <p className="text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                        Watch our latest updates and read our latest magazine publications.
                    </p>
                </div>
            </section>

            {/* Video Showcase - Brand New Light Premium Layout */}
            <section className="py-24 relative bg-white border-b border-gray-100 overflow-hidden">
                <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-orange-50/50 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-[#1e2a4a] mb-6 font-[family-name:var(--font-serif)]">
                            Suryojasvi <span className="text-orange-500">Screen</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-orange-500 rounded-full mx-auto"></div>
                        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg font-light">
                            Exclusive previews, deep dives, and reflections from the minds shaping our ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Featured Video (CMD) */}
                        <div className="lg:col-span-8 flex flex-col">
                            <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 bg-white mb-8 p-3 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-transparent opacity-50 z-0"></div>
                                <div className="w-full h-full rounded-[2.25rem] overflow-hidden relative z-10 bg-black shadow-inner">
                                    <iframe
                                        src="https://www.youtube.com/embed/o84IA6JlC-8?start=4"
                                        title="CMD Chetan Khosla Podcast"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full border-0"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="px-4 md:px-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-4 py-1.5 bg-orange-100 text-orange-700 text-xs font-black uppercase tracking-widest rounded-full">
                                        ★ CMD Spotlight
                                    </span>
                                    <span className="flex items-center gap-1 text-gray-400 text-sm font-medium uppercase tracking-wider">
                                        <Play className="w-4 h-4 text-orange-400" /> YouTube
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#1e2a4a] mb-4 font-[family-name:var(--font-serif)]">
                                    A Conversation with CMD Chetan Khosla
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed font-light max-w-3xl">
                                    A profound discussion on leadership, the role of Niyati (Destiny), and what it takes to build a world-class legacy in the modern tech era.
                                </p>
                            </div>
                        </div>

                        {/* Vertical Playlist */}
                        <div className="lg:col-span-4 flex flex-col justify-start">
                            <div className="bg-[#fcfcfc] rounded-[3rem] p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] h-full">
                                <h4 className="font-bold text-[#1e2a4a] text-2xl font-[family-name:var(--font-serif)] mb-8 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-orange-100 flex justify-center items-center">
                                        <Play className="w-4 h-4 text-orange-600 translate-x-[1px]" />
                                    </span>
                                    From the Archive
                                </h4>

                                <div className="space-y-6">
                                    {[
                                        { title: "Suryojasvi Group Overview", url: "https://www.youtube.com/embed/OlbBF_VbTio", duration: "Overview" },
                                        { title: "Senior Leadership Insights", url: "https://www.youtube.com/embed/Cfvuxongpds?start=9", duration: "Podcast" },
                                        { title: "Life at Suryojasvi", url: "https://www.youtube.com/embed/Z5SUZ1RbEEA", duration: "Culture Showcase" },
                                    ].map((vid, i) => (
                                        <div key={i} className="group bg-white p-3 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all shadow-sm cursor-pointer flex gap-4 items-center">
                                            <div className="relative w-32 aspect-video rounded-xl overflow-hidden bg-black shrink-0 pointer-events-none">
                                                <iframe
                                                    src={vid.url}
                                                    title={vid.title}
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
                                                ></iframe>
                                            </div>
                                            <div className="pr-2 py-1">
                                                <h5 className="font-bold text-[#1e2a4a] text-sm group-hover:text-orange-600 transition-colors line-clamp-2 leading-tight mb-2">
                                                    {vid.title}
                                                </h5>
                                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                                                    {vid.duration}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* View All Button */}
                                <button className="mt-8 w-full py-4 rounded-xl bg-white text-[#1e2a4a] font-bold hover:bg-[#1e2a4a] hover:text-white transition-all duration-300 border border-gray-200 flex items-center justify-center gap-2 group shadow-sm">
                                    View Complete Library <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Magazines & PDF Section */}
            <section className="py-24 relative bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1e2a4a] mb-6 flex justify-center items-center gap-4 font-[family-name:var(--font-serif)]">
                            <BookOpen className="w-10 h-10 text-orange-500" /> Digital Publications
                        </h2>
                        <div className="h-1.5 w-24 bg-orange-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg">Download our in-depth quarterly reports, case studies, and internal magazines.</p>
                    </div>

                    {/* Option 1: Interactive Year Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
                        {years.map(year => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year as number | 'All')}
                                className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${activeYear === year ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/30' : 'bg-white text-gray-500 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'}`}
                            >
                                {year === 'All' ? 'All Editions' : year}
                            </button>
                        ))}
                    </div>

                    {/* Manual Scroll Carousel */}
                    {filteredMagazines.length > 0 && (
                        <div className="relative w-full max-w-7xl mx-auto mt-12 group/carousel animate-in fade-in zoom-in-95 duration-500">

                            {/* Navigation Buttons */}
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-6 z-20 w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-[#1e2a4a] hover:bg-orange-500 hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0"
                                aria-label="Previous Volumes"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-6 z-20 w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-[#1e2a4a] hover:bg-orange-500 hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:-translate-x-0"
                                aria-label="Next Volumes"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Fade edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                            {/* Scrolling Track */}
                            <div
                                ref={scrollRef}
                                className="flex overflow-x-auto snap-x snap-mandatory gap-10 py-10 px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
                            >
                                {filteredMagazines.map((mag) => (
                                    <a href={mag.link} target="_blank" rel="noopener noreferrer" key={`mag-${mag.id}`} className="w-[300px] shrink-0 snap-center flex flex-col items-center group cursor-pointer border border-transparent hover:border-orange-50/10 transition-all rounded-[3rem]">
                                        {/* 3D Magazine Cover Effect */}
                                        <div className="relative w-[90%] aspect-[3/4] mb-8 transform-gpu transition-all duration-700 group-hover:scale-105 group-hover:-rotate-y-6 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] shadow-[0_15px_30px_rgba(0,0,0,0.08)] rounded-md overflow-hidden bg-white border border-gray-100">
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent w-8 z-10 pointer-events-none mix-blend-multiply"></div>
                                            <img src={mag.cover} alt={mag.title} className="w-full h-full object-cover" />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 backdrop-blur-[2px]">
                                                <div className="flex flex-col items-center justify-center w-20 h-20 bg-orange-500 text-white rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl group-hover:bg-white group-hover:text-orange-500 border-2 border-orange-400">
                                                    <Download className="w-8 h-8 mb-1" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">PDF</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center px-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full group-hover:shadow-md group-hover:border-orange-100 transition-all flex-grow">
                                            <h3 className="text-lg font-bold text-[#1e2a4a] mb-3 font-[family-name:var(--font-serif)] group-hover:text-orange-600 transition-colors leading-tight">{mag.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{mag.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
