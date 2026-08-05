import { Award, Briefcase, GraduationCap, Globe, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

/**
 * Founders Section Component
 * 
 * Premium Redesign:
 * - High-end profile cards with dual-ring borders
 * - Sophisticated typography (Serif for headers)
 * - Interactive expertise cards with icons
 * - Professional Navy and Gold palette
 */

export default function Founders() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth >= 1024 ? 960 : window.innerWidth >= 768 ? 580 : 280;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const groupLeadership = [
    {
      name: 'Chetan Khosla',
      role: 'Chairman & M.D',
      image: '/founders/chetan-new.jpg',
      initials: 'CK'
    },
    {
      name: 'Mahidhar Sastry',
      role: 'Director Technology',
      image: '/founders/mahisir_new.png',
      initials: 'MS'
    },
    {
      name: 'Vishwanath Mosale',
      role: 'Director Finance',
      image: '/founders/vishisir.jpg',
      initials: 'VM'
    }
  ];

  const subsidiaryLeadership = [
    {
      name: 'Rudrappa Mirekar',
      role: 'CEO - Trasccon',
      image: '/founders/rudrappa.jpg',
      initials: 'RM'
    },
    {
      name: 'Naveen Sharma',
      role: 'CEO - Autosherpa & Yocoya',
      image: '/founders/naveen.jpg',
      initials: 'NS'
    },
    {
      name: 'Sachin Manan',
      role: 'CEO - Transmon & Raaai',
      image: '/founders/sachin-new.jpg',
      initials: 'SM'
    },
    {
      name: 'Surender Singh',
      role: 'Director - Trasccon',
      image: '/founders/surendar.png',
      initials: 'SS'
    }
  ];

  const renderFounderCard = (member: any) => (
    <div key={member.name} className="snap-center group relative cursor-default flex-shrink-0 w-[260px] md:w-[280px] lg:w-[320px] h-[360px] md:h-[420px]">
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:-translate-y-2 transition-transform duration-500">

        {/* Profile Image (Full Cover) */}
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />

        {/* Immersive Vertical Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1426] via-[#1e2a4a]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

        {/* Accent Glow on Hover */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-orange-500/10 blur-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Content Box */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="mb-4">
            <h3 className="font-bold text-white font-[family-name:var(--font-serif)] tracking-tight text-2xl mb-3">
              {member.name}
            </h3>
            <div className="h-px w-10 bg-gradient-to-r from-orange-400 to-transparent"></div>
          </div>
          <p className="font-semibold text-orange-400 uppercase tracking-widest text-[10px] sm:text-xs leading-relaxed group-hover:text-orange-300 transition-colors pr-2">
            {member.role}
          </p>
        </div>

      </div>
    </div>
  );

  const expertise = [
    {
      icon: Briefcase,
      text: "MD Experience: Strategic leadership at global giants including LG, TIMEX, ESSAR, Amex, Accenture & QAI (+25 Years Exp)."
    },
    {
      icon: Globe,
      text: "Finance Leadership: Directed Bosch and John Fowler. Cofounded & successfully exited SASMOS to a Dutch MNC (+25 Years Exp)."
    },
    {
      icon: Award,
      text: "Aerospace & Defense Pioneer: Cofounded SASMOS, architecting a massive growth from 'Zero' to $5MM in just 3 years."
    },
    {
      icon: GraduationCap,
      text: "IT & Tech Mastery: Led initiatives at RPG Cables and Tyco. Cofounded & successfully exited SASMOS (+22 Years Exp)."
    },
    {
      icon: Users,
      text: "Sales Excellence: Drove global sales networks working with Tyco, FCI, and Elentech (25+ Years Exp)."
    }
  ];

  return (
    <section id="founders" className="py-16 bg-[#fcfcfc] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-orange-400"></div>
            <span className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase">Leadership</span>
            <div className="h-px w-8 bg-orange-400"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#1e2a4a] font-[family-name:var(--font-serif)] mb-6">
            Founding <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-gray-500 font-light leading-relaxed">
            A collective of industry veterans dedicated to redefining brilliance through innovation and strategic excellence.
          </p>
        </div>

        {/* Single Line Cinematic Scroll Container */}
        <div className="relative max-w-[1500px] mx-auto mb-24 group/slider">

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-orange-500 text-[#1e2a4a] hover:text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-orange-500 text-[#1e2a4a] hover:text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 sm:gap-8 snap-x snap-mandatory pt-4 pb-12 px-4 sm:px-12 md:px-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth"
          >
            {[...groupLeadership, ...subsidiaryLeadership].map((member) => renderFounderCard(member))}
          </div>
        </div>

        {/* Collective Expertise Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-6">
              <span className="text-orange-700 text-xs font-black tracking-widest uppercase">The Leadership Council</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1e2a4a] font-[family-name:var(--font-serif)] mb-4">
              Our Collective Strength
            </h3>
            <p className="text-gray-500 font-light text-lg">
              Combining decades of domain mastery, our founders drive the strategic vision of the Suryojasvi ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-gray-50">

            {/* Left Box: Stats/Summary */}
            <div className="space-y-8">
              <h4 className="text-3xl font-black text-[#1e2a4a] leading-tight font-[family-name:var(--font-serif)]">
                A Decade of <br />
                <span className="text-orange-500">Unmatched Expertise</span>
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50/50 border border-orange-100/50">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white font-black text-xl">100+</div>
                  <p className="text-[#1e2a4a] font-bold text-sm">Years of Collective Experience</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/50">
                  <div className="w-12 h-12 rounded-xl bg-[#1e2a4a] flex items-center justify-center text-white font-black text-xl">25+</div>
                  <p className="text-[#1e2a4a] font-bold text-sm">Years of Core Industry Leadership</p>
                </div>
              </div>
            </div>

            {/* Right Box: Detailed List */}
            <div className="space-y-6">
              {expertise.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4 group cursor-default">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#1e2a4a] group-hover:border-[#1e2a4a] group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-2 group-hover:text-[#1e2a4a] transition-colors">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>

      {/* Background flare */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-orange-50/20 blur-[150px] -z-10 rounded-full"></div>
    </section>
  );
}

