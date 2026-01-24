"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const Careers = () => {
    const jobs = [
        {
            title: "Solar Installation Engineer",
            location: "Bangalore, Karnataka",
            type: "Full-time",
            experience: "2-4 years",
            description: "Lead solar panel installation projects and ensure quality standards",
            skills: ["Electrical Engineering", "Solar PV Systems", "Project Management"]
        },
        {
            title: "Sales Executive - Solar Solutions",
            location: "Mumbai, Maharashtra",
            type: "Full-time",
            experience: "1-3 years",
            description: "Drive sales of residential and commercial solar solutions",
            skills: ["Sales", "Customer Relations", "Solar Knowledge"]
        },
        {
            title: "Solar Design Engineer",
            location: "Delhi NCR",
            type: "Full-time",
            experience: "3-5 years",
            description: "Design efficient solar systems using AutoCAD and PVSyst",
            skills: ["AutoCAD", "PVSyst", "System Design", "Technical Analysis"]
        },
        {
            title: "Customer Support Specialist",
            location: "Remote",
            type: "Full-time",
            experience: "1-2 years",
            description: "Provide excellent post-installation support to customers",
            skills: ["Communication", "Problem Solving", "Technical Support"]
        },
        {
            title: "Solar Project Manager",
            location: "Pune, Maharashtra",
            type: "Full-time",
            experience: "5+ years",
            description: "Manage large-scale commercial solar installation projects",
            skills: ["Project Management", "Team Leadership", "Budget Management"]
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
                            Join Our{" "}
                            <span className="text-gradient-energy">Team</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Be part of India's clean energy revolution. Build a rewarding career with Naha Energy Solutions.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        {[
                            { label: "Team Members", value: "150+" },
                            { label: "Open Positions", value: "12" },
                            { label: "Cities", value: "15+" },
                            { label: "Growth Rate", value: "200%" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="font-display text-2xl font-bold mb-2">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {job.location}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Briefcase className="w-4 h-4" />
                                                        {job.type}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {job.experience}
                                                    </div>
                                                </div>
                                            </div>
                                            <Badge className="bg-primary/10 text-primary border-primary/20">
                                                Open
                                            </Badge>
                                        </div>

                                        <p className="text-muted-foreground mb-4">
                                            {job.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {job.skills.map((skill, sIndex) => (
                                                <Badge key={sIndex} variant="outline">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                                        >
                                            Apply Now
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Why Join Naha Energy?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Growth Opportunities",
                                description: "Fast-track your career in the booming renewable energy sector"
                            },
                            {
                                title: "Competitive Benefits",
                                description: "Health insurance, performance bonuses, and learning programs"
                            },
                            {
                                title: "Make an Impact",
                                description: "Contribute to India's clean energy mission and fight climate change"
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card rounded-xl p-6 shadow-lg text-center"
                            >
                                <h3 className="font-display text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-muted-foreground">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;
