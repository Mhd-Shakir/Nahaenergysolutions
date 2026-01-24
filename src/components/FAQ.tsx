import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How much can I save with solar panels?",
            answer: "Most homeowners save 70-90% on their electricity bills. The exact savings depend on your energy consumption, roof size, and sunlight exposure. Our free consultation includes a detailed savings projection for your property.",
        },
        {
            question: "What is the cost of installing solar panels?",
            answer: "Solar installation costs vary based on system size and requirements. For a typical residential installation (3-5 kW), costs range from ₹1.5-3 lakhs. However, with government subsidies and financing options, your net cost can be significantly lower. Most systems pay for themselves within 4-6 years.",
        },
        {
            question: "Do solar panels work during cloudy days or monsoon?",
            answer: "Yes! Solar panels still generate electricity on cloudy days, though at reduced capacity (typically 10-25% of peak output). Modern panels are designed to work efficiently in various weather conditions. Any shortfall is automatically covered by grid power.",
        },
        {
            question: "What is the lifespan of solar panels?",
            answer: "Quality solar panels last 25-30 years with minimal maintenance. We provide a 25-year performance warranty, guaranteeing at least 80% efficiency after 25 years. The inverter typically needs replacement after 10-15 years.",
        },
        {
            question: "Is government subsidy available for solar installation?",
            answer: "Yes! The Indian government offers substantial subsidies under the PM-KUSUM scheme. Residential installations can get up to 40% subsidy for systems up to 3 kW, and 20% for additional capacity up to 10 kW. We help you with all subsidy paperwork.",
        },
        {
            question: "How long does the installation process take?",
            answer: "The entire process from initial consultation to activation typically takes 4-8 weeks. The actual installation work is completed within 2-3 days. Most of the time goes into permits, approvals, and grid connection formalities, which we handle for you.",
        },
        {
            question: "What maintenance do solar panels require?",
            answer: "Solar panels require minimal maintenance. We recommend cleaning panels 2-3 times a year to remove dust and debris. Our annual maintenance package includes professional cleaning, system inspection, and performance optimization for maximum output.",
        },
        {
            question: "Can I sell excess electricity back to the grid?",
            answer: "Absolutely! Through net metering, any excess power generated is fed back to the grid, and you receive credits on your electricity bill. This means your meter runs backwards when you generate more than you consume. We handle all net metering applications and approvals.",
        },
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Got Questions?
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                        Frequently Asked{" "}
                        <span className="text-gradient-energy">Questions</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Find answers to common questions about solar energy and our services.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="border border-border rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-4 py-3 md:px-6 md:py-5 flex items-start justify-between gap-3 text-left hover:bg-muted/50 transition-colors"
                                >
                                    <div className="flex items-start gap-3 md:gap-4 flex-1">
                                        <div className="mt-0.5 md:mt-1">
                                            <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-sm md:text-lg pr-4 md:pr-8">
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                                    </motion.div>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === index ? "auto" : 0,
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-4 pb-4 md:px-6 md:pb-5 pl-11 md:pl-[4.25rem]">
                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border"
                    >
                        <h3 className="font-display text-2xl font-bold mb-3">
                            Still Have Questions?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Our solar experts are here to help. Get in touch for personalized answers.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Contact Us
                            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
