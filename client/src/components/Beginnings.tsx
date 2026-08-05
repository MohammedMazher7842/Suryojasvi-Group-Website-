import React from 'react';
import { Rocket, Target, Cpu, TrendingUp, Award, Globe, Zap, Layers } from 'lucide-react';

/**
 * Beginnings Section Component
 * 
 * Premium Redesign: "The Ascent"
 * - Vertical central timeline with interactive milestones
 * - Glassmorphism cards with subtle gold accents
 * - World-class typography and spacing
 * - Navy (#1e2a4a) and Gold (#c0a070) theme
 */

const milestones = [
  {
    year: '2011',
    title: 'Operations Genesis',
    description: 'Wyzmindz commences operations, setting a foundation with Managed Services in WFM, Quality Assurance, Training, and Consulting.',
    icon: Target,
    side: 'left'
  },
  {
    year: '2012',
    title: 'Strategic Expansion',
    description: 'Rapid scaling into Supply Chain Management and dedicated Quality Managed Services for global Contact Centers.',
    icon: Globe,
    side: 'right'
  },
  {
    year: '2015-16',
    title: 'The Technology Pivot',
    description: 'Strategic shift towards future-tech. Initialization of the AutoSherpa and TransMon SAAS portfolios while exiting legacy managed services.',
    icon: Cpu,
    side: 'left'
  },
  {
    year: '2020',
    title: 'Market Leadership',
    description: 'Achieved "India\'s Most Preferred" status for Quality Monitoring and Auto CRM solutions. Full scale development of LOB-specific products.',
    icon: Award,
    side: 'right'
  },
  {
    year: '2022',
    title: 'Ecosystem Explosion',
    description: 'Launch of pivotal products like FinGaruda, Vidur, and Alertbee. Establishment of high-growth startups RAAAI and YOCOYA.',
    icon: Layers,
    side: 'left'
  },
  {
    year: '2024',
    title: 'Strength to Strength',
    description: 'Continuing the journey with unprecedented global momentum, reaching new heights in customer success and technological innovation.',
    icon: Rocket,
    side: 'right'
  }
];

export default function Beginnings() {
  return (
    <section id="beginnings" className="py-24 bg-[#fdfdfd] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-50/30 blur-[120px] rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50/30 blur-[120px] rounded-full -ml-20 -mb-20"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#c0a070]"></div>
            <span className="text-[#c0a070] font-bold tracking-[0.3em] text-xs uppercase">Legacy in the Making</span>
            <div className="h-px w-12 bg-[#c0a070]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#1e2a4a] font-[family-name:var(--font-serif)] leading-tight">
            Our Journey <br />
            <span className="text-[#c0a070]">So Far</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A decade of relentless innovation, from specialized consulting to global SAAS leadership.
          </p>
        </div>

        {/* Timeline Implementation */}
        <div className="relative max-w-6xl mx-auto">

          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#cbd5e1] to-transparent hidden md:block"></div>

          {/* Milestone Iteration */}
          <div className="space-y-16 md:space-y-0 relative">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className={`flex flex-col md:flex-row items-center justify-between w-full md:mb-24 last:mb-0 ${m.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] group transition-all duration-500`}>
                    <div className={`
                      relative p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] 
                      hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500
                      ${m.side === 'left' ? 'text-right' : 'text-left'}
                    `}>
                      {/* Year badge */}
                      <div className={`
                        absolute top-0 -translate-y-1/2 px-6 py-1 bg-[#1e2a4a] text-[#c0a070] text-sm font-black tracking-widest rounded-full shadow-lg
                        ${m.side === 'left' ? 'right-8' : 'left-8'}
                      `}>
                        {m.year}
                      </div>

                      {/* Icon (Mobile Only) */}
                      <div className="md:hidden flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-[#c0a070]">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-[#1e2a4a] mb-4 font-[family-name:var(--font-serif)]">
                        {m.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Icon Circle (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-gray-50 shadow-xl items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e2a4a] to-[#2a3a5a] flex items-center justify-center text-[#c0a070] shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Closing Narrative */}
        <div className="mt-32 text-center max-w-2xl mx-auto">
          <div className="p-10 rounded-[3rem] bg-gradient-to-br from-[#1e2a4a] to-[#111827] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,160,112,0.2),transparent)] opacity-50"></div>
            <h4 className="text-2xl font-bold mb-4 font-[family-name:var(--font-serif)] relative z-10">The Journey Continues</h4>
            <p className="text-blue-100/70 font-light relative z-10 leading-relaxed">
              We are just getting started. Our commitment to breakthrough innovation remains as strong today as it was in 2011.
            </p>
            <div className="mt-8 relative z-10">
              <div className="inline-block px-8 py-3 bg-[#c0a070] text-[#1e2a4a] font-bold rounded-full hover:bg-white transition-colors cursor-pointer text-sm tracking-wider uppercase">
                Explore Our Future
              </div>
            </div>

            {/* Animated Flare */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-400/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
