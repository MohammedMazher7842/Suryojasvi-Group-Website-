import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';
import { useState } from 'react';

const awards_files = [
    "ARNIR Israel.png",
    "BEL India.png",
    "CFT Challenge Award.png",
    "CII 2024 Award.png",
    "CIT_IPCWHMA-620E-Manoj-Kumar-2025-2027_page-0001.jpg",
    "Defence-cable-harness_1_-removebg-preview.png",
    "EEPC Award.png",
    "EEPC INDIA Award.png",
    "IPC-MemberShip-Certificate-2024-25-scaled.png",
    "Innovative Kaizen Award.png",
    "KAIZEN Award.png",
    "KAIZEN competition.png",
    "MOOG India.png",
    "MOOG USA.png",
    "POKA-YOKE competition.png",
    "Restorative Kaizen Award.png",
    "SHE-C-2025 Award.png",
    "TRASCCON-INTERCONNECTION-AS-9100_2016-CERTIFICATE-scaled.png",
    "Trasccon-Certificate_NABCB_ISO_13485_638657142610045872_Ver_1-scaled.png",
    "WhatsApp Image 2026-02-25 at 4.06.54 PM (1).jpeg",
    "WhatsApp Image 2026-02-25 at 4.06.54 PM (2).jpeg",
    "WhatsApp Image 2026-02-25 at 4.06.54 PM.jpeg",
    "WhatsApp Image 2026-03-27 at 12.20.25 (1).jpeg",
    "WhatsApp Image 2026-03-27 at 12.20.25.jpeg",
    "WhatsApp Image 2026-03-27 at 12.20.26.jpeg",
    "ZED-Silver_page-0001-1.jpg"
];

const formatName = (filename: string) => {
    let base = filename.replace(/\.(png|jpg|jpeg)$/i, '');
    base = base.replace(/[_-]/g, ' ');
    base = base.replace(/ WhatsApp Image .*/i, 'Suryojasvi Event');
    base = base.replace(/scaled|page 0001 1|page 0001|removebg preview/ig, '');
    let finalName = base.trim() || 'Award & Recognition';
    if (finalName.length > 50) return finalName.substring(0, 47) + '...';
    return finalName;
};

export default function Awards() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="awards" className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-yellow-600/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Visual Header */}
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="inline-block mb-10"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full"></div>
                            <div className="relative w-20 h-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.2)]">
                                <Award className="w-10 h-10 text-yellow-500" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-8 font-[family-name:var(--font-serif)] tracking-tight"
                    >
                        Awards & <span className="bg-gradient-to-r from-yellow-100 via-yellow-500 to-yellow-100 bg-clip-text text-transparent">Recognitions</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "150px" }}
                        transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
                        className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        A curated gallery of our most prestigious achievements—verified proof of our commitment to world-class standards.
                    </motion.p>
                </div>

                {/* Grid Layout for Photos with staggered entrance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
                    {awards_files.map((file, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.7, 
                                delay: (index % 4) * 0.15, 
                                ease: [0.25, 0.4, 0.25, 1] 
                            }}
                            className="group relative"
                            onClick={() => setSelectedImage(`/Awards/${file}`)}
                        >
                            <div className="relative bg-[#0f172a] rounded-2xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden aspect-[4/3] flex items-center justify-center cursor-pointer transition-all duration-500 hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)] hover:-translate-y-3 group-hover:border-yellow-500/30">
                                {/* Ambient inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-transparent to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-transparent transition-colors duration-700"></div>
                                
                                <div className="relative w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] rounded-xl overflow-hidden bg-white/5 flex items-center justify-center border border-white/5">
                                    <img
                                        src={`/Awards/${file}`}
                                        alt={formatName(file)}
                                        className="w-full h-full object-contain p-2 scale-95 group-hover:scale-110 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                    
                                    {/* Advanced Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                                        <p className="text-yellow-400 text-center font-bold text-sm leading-relaxed drop-shadow-2xl tracking-wide translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                            {formatName(file)}
                                        </p>
                                        <p className="text-white/50 text-[10px] text-center uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                            Click to Enlarge
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Animated Golden Lines */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent to-yellow-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-l from-transparent to-yellow-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/80 p-4 md:p-12 cursor-zoom-out"
                    >
                        <div className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors cursor-pointer bg-white/10 rounded-full p-2 hover:bg-white/20">
                            <X className="w-8 h-8" />
                        </div>
                        <motion.img
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: -20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Enlarged Award"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-yellow-500/20 cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
