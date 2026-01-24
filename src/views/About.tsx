"use client";

import { motion } from "framer-motion";
import { Target, Users, Award, Heart, Zap, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const About = () => {
    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To make clean, affordable solar energy accessible to every Indian household and business, powering a sustainable future for generations to come.",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            icon: Heart,
            title: "Our Vision",
            description: "To be India's most trusted solar energy partner, recognized for innovation, quality, and exceptional customer service in renewable energy solutions.",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: Award,
            title: "Our Commitment",
            description: "We commit to delivering premium quality installations, transparent pricing, and lifetime support. Your satisfaction and energy independence are our top priorities.",
            gradient: "from-green-500 to-emerald-500",
        },
    ];

    const team = [
        {
            name: "Arjun Mehta",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
            bio: "15+ years in renewable energy",
        },
        {
            name: "Priya Sharma",
            role: "Chief Technology Officer",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
            bio: "Expert in solar technology",
        },
        {
            name: "Vikram Singh",
            role: "Operations Director",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
            bio: "5000+ installations managed",
        },
        {
            name: "Ananya Reddy",
            role: "Customer Success Lead",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
            bio: "Dedicated to customer satisfaction",
        },
    ];

    const milestones = [
        { year: "2015", event: "Company Founded", description: "Started with a vision to power India with clean energy" },
        { year: "2017", event: "1,000th Installation", description: "Reached our first major milestone" },
        { year: "2020", event: "National Expansion", description: "Expanded operations to 15 states" },
        { year: "2023", event: "5,000+ Customers", description: "Became one of India's leading solar providers" },
        { year: "2024", event: "100 MW Milestone", description: "Achieved 100 MW total installed capacity" },
    ];

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-energy-slate via-energy-slate-light to-energy-slate">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop"
                        alt="Solar panels"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-energy-slate/90 to-energy-slate-light/90" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                            Powering India's{" "}
                            <span className="text-gradient-energy">Green Future</span>
                        </h1>
                        <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                            We're on a mission to make solar energy accessible, affordable, and reliable for every Indian home and business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground text-left">
                                <p>
                                    At Naha Energy Solutions, we believe that energy is more than just electricity—it is the heartbeat of every home and the fuel for every dream. In a world where power costs are rising and sustainability is a necessity, we stepped in with a simple promise: Positive Energy for a Better Tomorrow.
                                </p>
                                <p>
                                    Our journey began with a vision to bridge the gap between complex technology and the common man. We don't just install solar panels; we engineer peace of mind. The 'Plus' (+) in our identity isn't just a symbol; it represents the added value, extra care, and positive impact we bring to your life. From the first ray of sun to the light in your living room, Naha Energy ensures that you are always powered by the best.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold">
                            What Drives Us
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6`}>
                                    <value.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold">
                            Our Journey
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2" />

                            {/* Milestones */}
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <div className="bg-card rounded-xl p-6 shadow-lg">
                                            <div className="text-primary font-bold text-xl mb-2">
                                                {milestone.year}
                                            </div>
                                            <h3 className="font-display text-xl font-bold mb-2">
                                                {milestone.event}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg relative z-10">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Passionate experts dedicated to powering your solar journey
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="font-display text-xl font-bold mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-semibold mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                            Ready to Join the Solar Revolution?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Let's work together to create a cleaner, greener future for India.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Get Your Free Quote
                            <Shield className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
