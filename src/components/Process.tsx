import { motion } from "framer-motion";
import { Phone, Calendar, Wrench, CheckCircle, Lightbulb, FileText } from "lucide-react";

const Process = () => {
    const steps = [
        {
            icon: Phone,
            title: "Free Consultation",
            description: "Contact us for a free consultation. Our experts will understand your energy needs and assess your property.",
            color: "from-blue-500 to-cyan-500",
            delay: 0.1,
        },
        {
            icon: FileText,
            title: "Custom Proposal",
            description: "Receive a detailed proposal with system design, cost breakdown, and savings projections tailored to your needs.",
            color: "from-purple-500 to-pink-500",
            delay: 0.2,
        },
        {
            icon: Calendar,
            title: "Schedule Installation",
            description: "Once approved, we'll schedule your installation at your convenience. Our team works efficiently with minimal disruption.",
            color: "from-green-500 to-emerald-500",
            delay: 0.3,
        },
        {
            icon: Wrench,
            title: "Professional Setup",
            description: "Our certified technicians install your solar system with precision, ensuring optimal performance and safety.",
            color: "from-orange-500 to-yellow-500",
            delay: 0.4,
        },
        {
            icon: CheckCircle,
            title: "Testing & Activation",
            description: "We thoroughly test your system, complete all paperwork, and activate your solar power generation.",
            color: "from-red-500 to-pink-500",
            delay: 0.5,
        },
        {
            icon: Lightbulb,
            title: "Enjoy Clean Energy",
            description: "Start saving on electricity bills immediately! Monitor your system performance with our smart app and enjoy 24/7 support.",
            color: "from-indigo-500 to-blue-500",
            delay: 0.6,
        },
    ];

    return (
        <section className="py-20 md:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Simple Process
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                        How We Make Solar{" "}
                        <span className="text-gradient-energy">Easy For You</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        From consultation to activation, we handle everything. Just sit back and watch your savings grow!
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2" />

                    {/* Steps */}
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: step.delay }}
                                className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                                    <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className={`inline-flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                                                <step.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-muted-foreground font-medium">
                                                    STEP {index + 1}
                                                </div>
                                                <h3 className="font-display text-xl font-bold">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Circle */}
                                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-primary shadow-lg relative z-10">
                                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color}`} />
                                </div>

                                {/* Spacer */}
                                <div className="hidden lg:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20">
                        <div className="text-left">
                            <h3 className="font-display text-2xl font-bold mb-2">
                                Ready to Get Started?
                            </h3>
                            <p className="text-muted-foreground">
                                Book your free consultation today and take the first step towards clean energy!
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                        >
                            Get Free Quote
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
