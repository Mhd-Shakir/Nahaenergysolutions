import { motion } from "framer-motion";
import { Users, Zap, Award, TrendingUp, Shield, Leaf } from "lucide-react";

const Stats = () => {
    const stats = [
        {
            icon: Users,
            value: "5,000+",
            label: "Happy Customers",
            suffix: "",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Zap,
            value: "100",
            label: "MW Installed",
            suffix: "+",
            color: "from-yellow-500 to-orange-500",
        },
        {
            icon: Leaf,
            value: "50,000",
            label: "Tons CO₂ Saved",
            suffix: "+",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: TrendingUp,
            value: "85",
            label: "Average Savings",
            suffix: "%",
            color: "from-purple-500 to-pink-500",
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
            title: "25 Year Warranty",
            description: "Performance Guarantee",
        },
    ];

    return (
        <section className="py-20 md:py-24 bg-gradient-to-br from-energy-slate via-energy-slate-light to-energy-slate text-primary-foreground relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-glow delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                        Our Impact
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                        Powering India's{" "}
                        <span className="text-gradient-energy">Green Revolution</span>
                    </h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                        Numbers that speak for themselves. Join our growing community of clean energy champions!
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            {/* Mobile: No box styling, Desktop: Keep boxes */}
                            <div className="lg:bg-white/10 lg:backdrop-blur-md lg:rounded-2xl lg:p-8 lg:border lg:border-white/20 lg:hover:bg-white/15 transition-all duration-300 text-center">
                                {/* Icon with Gradient */}
                                <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                        <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                                    </div>
                                </div>

                                {/* Value */}
                                <div className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 lg:mb-2">
                                    {stat.value}
                                    <span className="text-secondary">{stat.suffix}</span>
                                </div>

                                {/* Label */}
                                <div className="text-primary-foreground/70 font-medium text-sm lg:text-base">
                                    {stat.label}
                                </div>

                                {/* Shine Effect - Desktop only */}
                                <div className="hidden lg:block absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                            Certified Excellence
                        </h3>
                        <p className="text-primary-foreground/70">
                            Trusted by industry leaders and backed by certifications
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                            >
                                <cert.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                                <h4 className="font-display text-lg font-bold mb-1">
                                    {cert.title}
                                </h4>
                                <p className="text-sm text-primary-foreground/70">
                                    {cert.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
