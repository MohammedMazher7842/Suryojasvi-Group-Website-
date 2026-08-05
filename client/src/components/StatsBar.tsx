
import { Globe, Building2, Users, Handshake } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

/**
 * StatsBar Component
 * 
 * Displays key company statistics in a horizontal bar.
 * Design matches the provided reference:
 * - Dark navy background
 * - Gold/Amber numbers with Serif typography
 * - Clean white/light text for labels
 * - Vertical dividers between items
 */

export default function StatsBar() {
    const stats = [
        {
            value: '3',
            label: 'STATES',
            icon: Globe,
        },
        {
            value: '6',
            label: 'COMPANIES',
            icon: Building2,
        },
        {
            value: '600+',
            label: 'EMPLOYEES',
            icon: Users,
        },
        {
            value: '100%',
            label: 'COMMITMENT',
            icon: Handshake,
        },
    ];

    return (
        <div className="w-full bg-[#1e2a4a]/95 py-12 relative z-20 -mt-1 shadow-xl backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center relative group">
                            {/* Vertical Divider (hidden on last item and mobile) */}
                            {index !== stats.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/20"></div>
                            )}

                            <div className="text-center transform transition-transform duration-300 hover:scale-105">
                                <span className="block text-4xl md:text-5xl font-serif text-[#fbbf24] mb-2 font-bold tracking-tight">
                                    <AnimatedCounter value={stat.value} />
                                </span>
                                <span className="block text-xs md:text-sm text-blue-100 tracking-[0.2em] font-medium uppercase font-inter">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
