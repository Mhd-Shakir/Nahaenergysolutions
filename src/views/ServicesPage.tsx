"use client";

import { motion } from "framer-motion";
import { Home, Building2, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const ServicesPage = () => {
    const services = [
        {
            icon: Home,
            title: "3KW System",
            description: "Perfect for small to medium-sized homes (2-3 BHK). Generates ~12-15 units per day.",
            features: [
                "Saves ₹3,000 - ₹4,000/month",
                "Requires ~300 sq. ft. roof area",
                "Subsidy Available",
                "Smart energy monitoring system",
                "30-year performance warranty",
                "Government subsidy assistance"
            ],
            pricing: "Approx. ₹1.8 - 2 Lakhs",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
        },
        {
            icon: CheckCircle,
            title: "5KW System",
            description: "Our most popular choice for large homes/villas (3-4 BHK). Generates ~20-25 units per day.",
            features: [
                "Saves ₹5,000 - ₹7,000/month",
                "Requires ~500 sq. ft. roof area",
                "High ROI (3-4 years)",
                "Covers ACs and heavy appliances",
                "30-year performance warranty",
                "24/7 monitoring & support"
            ],
            pricing: "Approx. ₹3 - 3.5 Lakhs",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop"
        },
        {
            icon: Building2,
            title: "8KW System",
            description: "High-capacity system for large villas or small offices. Generates ~32-40 units per day.",
            features: [
                "Saves ₹9,000 - ₹12,000/month",
                "Requires ~800 sq. ft. roof area",
                "Maximum grid independence",
                "Industrial/Commercial grade efficiency",
                "30-year performance warranty",
                "Remote monitoring"
            ],
            pricing: "Approx. ₹4.5 - 5 Lakhs",
            image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen">
            <Navbar forceDark={true} />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Our{" "}
                            <span className="text-gradient-energy">Services</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Comprehensive solar solutions tailored to your needs - from installation to maintenance
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Image */}
                                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <div className="inline-flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                                <service.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h2 className="font-display text-3xl md:text-4xl font-bold">
                                                {service.title}
                                            </h2>
                                        </div>

                                        <p className="text-lg text-muted-foreground mb-6">
                                            {service.description}
                                        </p>

                                        <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                            {service.features.map((feature, fIndex) => (
                                                <div key={fIndex} className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-muted/50 rounded-xl p-4 mb-6">
                                            <div className="text-sm text-muted-foreground mb-1">Pricing</div>
                                            <div className="text-2xl font-bold text-primary">{service.pricing}</div>
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                                        >
                                            Get Quote
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
