import { Quote, Sparkles, MessageSquare, ArrowRight, Star } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

/**
 * Crystal Jubilee Component - 15 Year Narrative
 * 
 * Re-designed to present the CMD's reflections as an immersive experience.
 * Content focused on:
 * - The Birth: Wyzmindz (Sept 29) & Trasccon (Oct 1)
 * - The Philosophy: Niyati & "Man ka ho to Accha..."
 * - The Vision: World Class & Suryojasvi Namah
 * - The Tool: Three Reflection Questions
 */

export default function Jubilee() {
  const milestones = [
    {
      date: '29 Sept 2010',
      title: 'Wyzmindz Born',
      desc: 'The journey began with the incorporation of Wyzmindz, a step into the unknown.'
    },
    {
      date: '01 Oct 2010',
      title: 'Trasccon Arrives',
      desc: 'The "twins" were complete, marking the start of a dual legacy.'
    },
    {
      date: '28 May 2021',
      title: 'Asteya Birth',
      desc: 'The eldest of more children, Asteya, joined the growing Suryojasvi family.'
    },
    {
      date: '07 Dec 2022',
      title: 'Idamtat Returns',
      desc: 'Idamtat was established to pioneer SaaS solutions for the supply chain vertical.'
    },
    {
      date: '15 Dec 2022',
      title: 'Yocoya Begins',
      desc: 'Yocoya joined the mission to digitize and elevate global customer experiences.'
    },
    {
      date: '07 Dec 2023',
      title: 'RAAAI Foundation',
      desc: 'RAAAI was incorporated, bringing groundbreaking AI and future-ready innovation into the group.'
    }
  ];

  return (
    <section id="jubilee" className="py-16 bg-[#fcfcfc] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -ml-40 -mb-40"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 bg-gradient-to-r from-[#1e2a4a] to-blue-900 text-white rounded-full text-xs font-black tracking-[0.3em] uppercase shadow-xl"
          >
            Crystal Jubilee: 2010 — 2025
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black text-[#1e2a4a] font-[family-name:var(--font-serif)] tracking-tighter">
            15 Years of <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Reflections</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-12 bg-orange-500 rounded-full"></div>
            <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
            <div className="h-0.5 w-12 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: The CMD Narrative (8 Columns) */}
          <div className="lg:col-span-8 space-y-16">

            {/* CMD Reflection Panel */}
            <div className="relative p-10 md:p-20 bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden group">

              {/* Profile Integration */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-16 border-b border-gray-50 pb-12">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full scale-110"></div>
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                    <img
                      src="/founders/chetan-new.jpg"
                      alt="Chetan Khosla"
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left space-y-2">
                  <h3 className="text-4xl md:text-5xl font-black text-[#1e2a4a] font-[family-name:var(--font-serif)]">Chetan Khosla</h3>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 rounded-full border border-orange-100">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    <p className="text-orange-900 text-sm font-black uppercase tracking-widest">Chairman & M.D.</p>
                  </div>
                  <p className="text-gray-400 italic font-medium pt-2">"15 Years of Redefining Brilliance"</p>
                </div>
              </div>

              <Quote className="absolute top-12 right-12 w-24 h-24 text-gray-50 opacity-50" />

              <div className="space-y-10 relative z-10">
                <h4 className="text-3xl md:text-4xl text-[#1e2a4a] leading-tight font-[family-name:var(--font-serif)] font-bold italic tracking-tight">
                  "Man ka ho to <span className="text-orange-500">Accha</span>, Na ho to aur bhi <span className="text-blue-600">Accha</span>"
                </h4>

                <div className="prose prose-xl text-gray-600 max-w-none space-y-8 font-light leading-relaxed">
                  <p className="first-letter:text-7xl first-letter:font-black first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left">
                    Looking back at 15 years, I see every milestone as an invitation to pause and reflect. We have seen our share of ups and downs, even touching the brink of extinction, but absolute magic—or <strong>Niyati (Destiny)</strong>—has always brought us back.
                  </p>
                  <p>
                    Our journey has evolved from "Flying Kites" to becoming a <strong>World Class Organization</strong>. This means being brilliant at what we do and ensuring our impact on industries and the world is significant, positive, and world-class.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  <div className="bg-[#1e2a4a] p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                    <MessageSquare className="w-8 h-8 text-orange-400 mb-6" />
                    <h5 className="font-black text-xl mb-4 tracking-tight">Suryojasvi Namah</h5>
                    <p className="text-blue-100/70 text-sm leading-relaxed font-light">
                      We address each other as <strong>Suryojasvis</strong>. Addressing a colleague as <em>Suryojasvi Naveen</em> reminds us of what Destiny is calling us to become.
                    </p>
                  </div>
                  <div className="bg-orange-500 p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <Sparkles className="w-8 h-8 text-white mb-6" />
                    <h5 className="font-black text-xl mb-4 tracking-tight">Daily Pause</h5>
                    <p className="text-orange-50 text-sm leading-relaxed font-light">
                      Pause is not a one-time event; it's a daily ritual. By pausing, we learn to build the mind and body muscle for the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection Framework */}
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="h-px flex-grow bg-gray-100"></div>
                <h3 className="text-2xl font-black text-[#1e2a4a] uppercase tracking-[0.2em] text-center">
                  The Reflection Framework
                </h3>
                <div className="h-px flex-grow bg-gray-100"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { q: "What went well?", a: "What are we grateful for that went as per our will?" },
                  { q: "What did not go well?", a: "What is it that it taught us? How did it enrich us?" },
                  { q: "What are we committing?", a: "What are we building in the next period for World Class?" }
                ].map((item, i) => (
                  <div key={i} className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-orange-500 transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1e2a4a] font-black mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <h5 className="font-black text-[#1e2a4a] text-lg mb-4 tracking-tight">{item.q}</h5>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The Journey Timeline (4 Columns) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">

            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>

              <div className="relative z-10 space-y-12">
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-[#1e2a4a] font-[family-name:var(--font-serif)]">The Destination</h3>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-black">Timeline of Brilliance</p>
                </div>

                <div className="space-y-10">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex gap-6 relative">
                      {i !== milestones.length - 1 && (
                        <div className="absolute left-[11px] top-8 w-px h-16 bg-gray-100"></div>
                      )}
                      <div className="w-6 h-6 rounded-full border-2 border-orange-500 bg-white flex-shrink-0 z-10 flex items-center justify-center group-hover:scale-125 transition-transform">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">{m.date}</span>
                        <h4 className="font-bold text-[#1e2a4a] text-sm">{m.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-light">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-gray-50">
                  <Link href="/talks">
                    <span className="flex items-center justify-between w-full px-8 py-5 bg-[#1e2a4a] text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-blue-900/10 cursor-pointer group/cta">
                      View Full Archive
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sign-off Card */}
            <div className="p-10 bg-gradient-to-br from-[#1e2a4a] to-blue-900 rounded-[3rem] text-center text-white relative shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <Quote className="w-12 h-12 text-orange-400/20 mx-auto mb-6" />
              <p className="text-xl font-medium leading-relaxed italic mb-8 relative z-10">
                "Together!! Be the Light and Spread the Light!!!"
              </p>
              <div className="h-px w-12 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">Oct 2025 Milestone</p>
            </div>

          </div>

        </div>
      </div>
    </section >
  );
}
