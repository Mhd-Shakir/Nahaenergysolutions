"use client";

import { motion } from "framer-motion";
import { Users, Zap, Award, TrendingUp, Shield, Leaf } from "lucide-react";

const Stats = () => {
    const stats = [
        {
            icon: Users,
            value: "1,000",
            label: "Happy Customers",
            suffix: "+",
            color: "from-blue-400 to-cyan-400",
        },
        {
            icon: Zap,
            value: "100",
            label: "MW Installed",
            suffix: "+",
            color: "from-yellow-400 to-amber-500",
        },
        {
            icon: Leaf,
            value: "50,000",
            label: "Tons CO₂ Saved",
            suffix: "+",
            color: "from-green-400 to-emerald-500",
        },
        {
            icon: TrendingUp,
            value: "85",
            label: "Average Savings",
            suffix: "%",
            color: "from-purple-400 to-pink-500",
        },
    ];

    const certifications = [
        {
            icon: Award,
            title: "ISO 9001:2015",
            description: "Quality Management",
        },
        {
            icon: Shield,
            title: "MNRE Approved",
            description: "Government Certified",
        },
        {
            icon: Award,
            title: "30 Year Warranty",
            description: "Performance Guarantee",
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#0a192f] text-primary-foreground relative overflow-hidden">
            {/* Background Texture - Pure CSS Grid */}
            <div 
                className="absolute inset-0 z-0 opacity-5" 
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                }} 
            />
            
            {/* Animated Ambient Glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-medium text-sm tracking-widest uppercase mb-6 shadow-sm">
                        Our Impact
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Powering India's{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
                            Green Revolution
                        </span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Numbers that speak for themselves. Join our growing community of clean energy champions paving the way to a sustainable future!
                    </p>
                </motion.div>

                {/* Stats Grid - Sleek typography focus */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-24 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group flex flex-col items-center text-center lg:items-start lg:text-left"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-white/50 font-semibold text-xs md:text-sm uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                            <div className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                                    {stat.value}
                                </span>
                                <span className={`text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br ${stat.color}`}>
                                    {stat.suffix}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications - Unified Glass Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-10">
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-white">
                            Certified Excellence
                        </h3>
                        <p className="text-white/50">
                            Trusted by industry leaders and backed by leading certifications
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden group">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-[shimmer_2s_infinite]" />
                        
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex flex-col items-center text-center flex-1 relative z-10 w-full">
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-5 shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-colors hover:bg-white/10">
                                    <cert.icon className="w-8 h-8 text-cyan-400" />
                                </div>
                                <h4 className="font-display text-xl font-bold mb-2 text-white">
                                    {cert.title}
                                </h4>
                                <p className="text-sm text-white/50">
                                    {cert.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
