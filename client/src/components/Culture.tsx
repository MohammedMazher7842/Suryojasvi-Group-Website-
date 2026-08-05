import { Shield, Lightbulb, Users, Heart, Sparkles, Zap, Camera, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Culture Section Component
 */
export default function Culture() {
  const [activeTab, setActiveTab] = useState<'festivals' | 'rituals' | 'activities'>('festivals');

  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Be the Light',
      description: 'Inspired by "Appo Deepo Bhava", we empower every individual to be their own light and spread it forward.'
    },
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'Doing what we say and saying what we mean is the foundation of our trust ecosystem.'
    },
    {
      icon: Users,
      title: 'Camaraderie',
      description: 'We are more than a team; we are friends who win and lose together, supporting each other always.'
    },
    {
      icon: Heart,
      title: 'Gratitude',
      description: 'We feel blessed for our customers, our teams, and the responsibilities we carry.'
    }
  ];

  const categories = {
    festivals: {
      title: "Festivals",
      icon: Heart,
      color: "orange",
      items: ["International Yoga Day", "Christmas", "Dussehra", "All Indian Festivals"],
      photos: [
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.15.26.jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.15.27 (1).jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.15.27.jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.15.28 (1).jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.15.28 (2).jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.15.28.jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.19.12.jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.19.13 (1).jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.19.13.jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.19.14.jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.23.49.jpeg",
        "/culture/festivals/WhatsApp Image 2026-03-27 at 13.24.44.jpeg"
      ]
    },
    rituals: {
      title: "Rituals & Gratitude",
      icon: Sparkles,
      color: "blue",
      items: ["Light Kriya", "Gratitude Kriya", "MEGA Mail (Every Monday)"],
      photos: [] // No photos yet
    },
    activities: {
      title: "Activities",
      icon: Zap,
      color: "purple",
      items: ["AI Festival & n8n Festival", "Hackathons", "Kaun Banega Suryojasvi (KBS)", "SCL (Cricket League)", "Cooking without Fire", "Secret Santa"],
      photos: []
    }
  };

  return (
    <section id="culture" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-[#1e2a4a] font-[family-name:var(--font-serif)]"
          >
            Our <span className="text-orange-500">Culture</span> & Values
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1.5 bg-orange-400 mx-auto rounded-full"
          ></motion.div>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            The heartbeat of Suryojasvi Group is defined by Brilliance, Gratitude, and an unwavering commitment to our Principles.
          </p>
        </div>

        {/* Culture Pillars - Core Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-32">
          {/* Mahavakyas & Guiding Principles - Keeping these prominent */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white rounded-[1.5rem] overflow-hidden shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="p-8 border-b border-gray-50 bg-gray-50/50">
                <h3 className="text-2xl font-black text-[#1e2a4a] flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                  Suryojasvi Dasha Mahavakyas
                </h3>
              </div>
              <div className="p-4 bg-white">
                <img src="/culture/Mahavakyas.jpg" alt="Mahavakyas" className="w-full h-[400px] object-contain rounded-lg shadow-inner" />
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white rounded-[1.5rem] overflow-hidden shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="p-8 border-b border-gray-50 bg-gray-50/50">
                <h3 className="text-2xl font-black text-[#1e2a4a] flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                  Our Guiding Principles
                </h3>
              </div>
              <div className="p-4 bg-white">
                <img src="/culture/guiding.jpg" alt="Guiding Principles" className="w-full h-[400px] object-contain rounded-lg shadow-inner" />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Life Gallery */}
        <div className="bg-[#f8fafc] rounded-[3rem] p-8 md:p-16 border border-gray-200/50 shadow-inner">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h3 className="text-4xl font-black text-[#1e2a4a] mb-6 font-[family-name:var(--font-serif)]">Life At Suryojasvi</h3>
              <p className="text-gray-500">Explore the moments that define our spirit. Select a category below to view our gallery of celebrations and rituals.</p>
            </div>
            
            {/* Category Toggle */}
            <div className="flex p-1.5 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {(Object.keys(categories) as Array<keyof typeof categories>).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeTab === cat 
                      ? 'bg-[#1e2a4a] text-white shadow-lg' 
                      : 'text-gray-400 hover:text-[#1e2a4a] hover:bg-gray-50'
                  }`}
                >
                  {categories[cat].title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* List Side */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                {categories[activeTab].items.map((item, i) => (
                  <motion.div 
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-sm"
                  >
                    <div className={`w-3 h-3 rounded-full bg-${categories[activeTab].color}-500 shadow-lg shadow-${categories[activeTab].color}-500/30`}></div>
                    <p className="font-bold text-[#1e2a4a] text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-8 bg-white rounded-[2rem] border border-dashed border-gray-200 flex flex-col items-center justify-center text-center space-y-4">
                <Camera className="w-10 h-10 text-gray-300" />
                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  More photos are being added to our {categories[activeTab].title} collection.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 overflow-y-auto max-h-[800px] pr-4 custom-scrollbar">
              {categories[activeTab].photos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {categories[activeTab].photos.map((photo, i) => (
                    <motion.div 
                      key={photo}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl group cursor-pointer border-4 border-white"
                    >
                      <img src={photo} alt="Culture moment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                        <p className="text-white font-bold text-lg">Event Highlight</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="h-full min-h-[400px] flex items-center justify-center border-4 border-dashed border-gray-200 rounded-[3rem] bg-gray-50/50">
                  <div className="text-center space-y-4">
                    <p className="text-gray-400 font-medium italic">Photos coming soon for {categories[activeTab].title}...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Global Value Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-100 group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#1e2a4a] mb-3">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
