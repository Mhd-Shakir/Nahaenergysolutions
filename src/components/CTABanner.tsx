import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTABannerProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
    variant?: "default" | "gradient" | "outlined";
}

const CTABanner = ({
    title = "Ready to Go Solar?",
    description = "Join thousands of satisfied customers saving money with clean energy. Get your free quote today!",
    buttonText = "Get Free Quote",
    buttonHref = "/#contact",
    variant = "gradient",
}: CTABannerProps) => {
    const variantStyles = {
        default: "bg-card border border-border",
        gradient: "bg-gradient-to-r from-primary via-secondary to-primary",
        outlined: "bg-background border-2 border-primary",
    };

    const textColor = variant === "gradient" ? "text-primary-foreground" : "text-foreground";
    const buttonStyle =
        variant === "gradient"
            ? "bg-white text-primary hover:shadow-2xl"
            : "bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/50";

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${variantStyles[variant]} rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden`}
                >
                    {/* Decorative Elements */}
                    {variant === "gradient" && (
                        <>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-glow" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
                        </>
                    )}

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="inline-block mb-6"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${variant === "gradient" ? "bg-white/20" : "bg-primary/10"} flex items-center justify-center`}>
                                <Sparkles className={`w-8 h-8 ${variant === "gradient" ? "text-white" : "text-primary"}`} />
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${textColor}`}
                        >
                            {title}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${variant === "gradient" ? "text-primary-foreground/90" : "text-muted-foreground"
                                }`}
                        >
                            {description}
                        </motion.p>

                        {/* Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring" }}
                        >
                            <a
                                href={buttonHref}
                                className={`inline-flex items-center gap-2 px-8 py-4 ${buttonStyle} font-bold rounded-full transition-all duration-300 hover:scale-105 group`}
                            >
                                {buttonText}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm"
                        >
                            <div className={`flex items-center gap-2 ${variant === "gradient" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Free Consultation</span>
                            </div>
                            <div className={`flex items-center gap-2 ${variant === "gradient" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>25 Year Warranty</span>
                            </div>
                            <div className={`flex items-center gap-2 ${variant === "gradient" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Government Subsidies</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTABanner;
