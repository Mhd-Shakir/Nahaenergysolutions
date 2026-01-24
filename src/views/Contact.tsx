"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

const Contact = () => {
    return (
        <div className="min-h-screen">
            <Navbar forceDark={true} />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Get In{" "}
                            <span className="text-gradient-energy">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have questions? We're here to help. Reach out and let's start your solar journey!
                        </p>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                icon: Phone,
                                title: "Phone",
                                info: "+91 98765 43210",
                                link: "tel:+919876543210"
                            },
                            {
                                icon: Mail,
                                title: "Email",
                                info: "info@nahaenergy.com",
                                link: "mailto:info@nahaenergy.com"
                            },
                            {
                                icon: MapPin,
                                title: "Address",
                                info: "123 Solar Street, Green City, India - 560001",
                                link: "#"
                            },
                            {
                                icon: Clock,
                                title: "Working Hours",
                                info: "Mon-Sat: 9AM - 6PM",
                                link: "#"
                            }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <item.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.info}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <LeadForm />

            <Footer />
        </div>
    );
};

export default Contact;
