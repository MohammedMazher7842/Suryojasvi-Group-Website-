import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

/**
 * Hero Section Component
 * 
 * Design Philosophy: Dynamic Energy & Innovation
 * - Asymmetric layout with diagonal split design
 * - Bold orange-yellow gradient background
 * - Large, impactful typography using Poppins
 * - Animated entrance with scroll-triggered reveals
 * - Call-to-action button with hover effects
 */

export default function Hero() {
  const heroImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/YFq7JaDmNK2tcmQ2izCydE/sandbox/pfv48Wuz8bhvIEA1fzbNnn-img-1_1771494971000_na1fn_aGVyby1iZy1tYWlu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWUZxN0phRG1OSzJ0Y21RMml6Q3lkRS9zYW5kYm94L3BmdjQ4V3V6OGJodklFQTFmemJObm4taW1nLTFfMTc3MTQ5NDk3MTAwMF9uYTFmbl9hR1Z5YnkxaVp5MXRZV2x1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aDibmiRvNm-Bjf3s0IhurnsuFRYxmzEM9xFsndAPnl7x~Zteu~NlQ0Lj8NMIUXwvGC1KMoFmF03ZMNQxnHSs1nqeWTnUQ2ZrnKGWRkZHEjRof7TAaqNCtvIoQfCqfVQp-Ksx1zjed8EpG5T5ds1VtI8Pe0yHva3yHbBbaWAqHPTBmzTND9wY895dQwTrCy0BvF5BvzKAwDDiejSNE4u2~M41b8QfxuwORB3ZIqKZHWz~HGDuewBfNZtCjuI2Ye0CRdbx9Zy9VygqLOrnD4rvZsSkZi5n33r89kpyIdInaVRlHO8C-NlPDrvXwyfMSML97lGB8reCA6F2SrmKI9Almg__';

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 overflow-hidden"
      style={{
        backgroundImage: `url('${heroImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="container relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full py-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-orange-500 border-2 border-orange-200"></div>
                <div className="px-4 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-xs font-bold text-white tracking-[0.2em] shadow-sm">
                  EST. 2011
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
              </div>

              <h1 className="text-6xl md:text-9xl font-black font-[family-name:var(--font-serif)] tracking-tighter leading-[0.8] mb-6">
                <span className="text-[#1e2a4a]">Suryojasvi</span>
                <span className="block text-4xl md:text-6xl text-orange-500 mt-2">Group</span>
              </h1>

              <p className="text-2xl md:text-3xl text-indigo-900 leading-relaxed font-[family-name:var(--font-serif)] italic opacity-90 font-medium ml-1">
                Redefining Excellence across Industries.
              </p>
            </div>

            {/* Animated Mission Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative space-y-4 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-orange-100/50 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(249,115,22,0.15)] overflow-hidden">
                {/* Decorative Icon */}
                <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
                  <Target className="w-40 h-40" />
                </div>

                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30"
                  >
                    <Target className="w-6 h-6" />
                  </motion.div>
                  <div className="space-y-1">
                    <p className="text-sm font-black text-orange-600 uppercase tracking-[0.3em]">Our Mission</p>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-transparent"></div>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-inter font-medium">
                  "Elevating Industries for a Better World through <span className="text-orange-500">Innovation</span>, <span className="text-[#101827]">Technology</span> & <span className="text-orange-500">Partnerships</span>."
                </p>

                {/* Animated progress bar indicator */}
                <div className="pt-2">
                  <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-[#1e2a4a] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 font-poppins flex items-center gap-2 group">
                Explore Our Story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-3 bg-white border-2 border-[#1e2a4a] text-[#1e2a4a] font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 hover:scale-105 active:scale-95 font-poppins">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Visual Element: Orbiting Companies */}
          <div className="hidden md:flex items-center justify-center animate-fade-in delay-200">
            <div className="relative w-[450px] h-[450px] flex items-center justify-center">

              {/* Decorative Subtle Rings */}
              <div className="absolute w-[450px] h-[450px] border border-orange-500/10 rounded-full"></div>
              <div className="absolute w-[280px] h-[280px] border border-orange-500/20 rounded-full"></div>

              {/* Central Core: Main Suryojasvi Logo */}
              <div className="relative z-10 w-40 h-40 bg-white/90 backdrop-blur-md rounded-full shadow-[0_0_50px_rgba(249,115,22,0.3)] border-2 border-orange-100 flex items-center justify-center p-6 animate-pulse hover:scale-105 transition-transform duration-500">
                <img src="/logo.png" alt="Suryojasvi Group" className="w-full h-full object-contain drop-shadow-sm" />
              </div>

              {/* Orbiting Elements - Unified Ring with all companies */}
              <div className="absolute w-full h-full rounded-full animate-spin [animation-duration:40s]">
                {[
                  { logo: '/logos/Wyzmindz.png', url: 'https://wyzmindz.com' },
                  { logo: '/logos/trasccon.png', url: 'https://trasccon.com' },
                  { logo: '/logos/idamtat.png', url: 'https://idamtat.in' },
                  { logo: '/logos/asteyanew.jpeg', url: 'https://asteyaservices.com' },
                  { logo: '/logos/yocoya.png', url: 'https://getyocoya.com' },
                  { logo: '/logos/raai.png', url: '#' }
                ].map((item, index, array) => {
                  const angle = (index / array.length) * 360;
                  // Alternate between two orbits (inner and outer) for depth
                  const orbitRadius = index % 2 === 0 ? '-225px' : '-140px';

                  return (
                    // Positioning Wrapper
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{ transform: `rotate(${angle}deg) translateY(${orbitRadius})` }}
                    >
                      {/* Counter-Spin Wrapper */}
                      <div className="animate-spin [animation-direction:reverse] [animation-duration:40s]">
                        {/* Static counter-rotation & centering */}
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-white rounded-full shadow-xl flex items-center justify-center p-3 border border-orange-100/50 hover:scale-[1.3] transition-transform duration-300 cursor-pointer block ${index % 2 === 0 ? 'w-[75px] h-[75px]' : 'w-[60px] h-[60px]'}`}
                          style={{ transform: `translate(-50%, -50%) rotate(-${angle}deg)` }}
                        >
                          <img src={item.logo} alt={`Group Company ${index}`} className="w-full h-full object-contain" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
