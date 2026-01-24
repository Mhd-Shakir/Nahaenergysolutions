"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Building2, Home, Factory } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
    id: string;
    title: string;
    location: string;
    category: "Residential" | "Commercial" | "Industrial";
    iconName: "Home" | "Building2" | "Factory";
    capacity: string;
    image: string;
    savings: string;
    gradient: string;
}

const DEFAULT_PROJECTS: Project[] = [
    {
        id: "1",
        title: "Luxury Villa Solar Installation",
        location: "Bangalore, Karnataka",
        category: "Residential",
        iconName: "Home",
        capacity: "15 kW",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
        savings: "₹18,000/month",
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: "2",
        title: "Commercial Office Complex",
        location: "Mumbai, Maharashtra",
        category: "Commercial",
        iconName: "Building2",
        capacity: "50 kW",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
        savings: "₹65,000/month",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        id: "3",
        title: "Manufacturing Plant",
        location: "Pune, Maharashtra",
        category: "Industrial",
        iconName: "Factory",
        capacity: "200 kW",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
        savings: "₹2,50,000/month",
        gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
        id: "4",
        title: "Residential Community",
        location: "Delhi NCR",
        category: "Residential",
        iconName: "Home",
        capacity: "100 kW",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        savings: "₹1,20,000/month",
        gradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
        id: "5",
        title: "Hospital Solar System",
        location: "Hyderabad, Telangana",
        category: "Commercial",
        iconName: "Building2",
        capacity: "75 kW",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
        savings: "₹90,000/month",
        gradient: "from-red-500/20 to-pink-500/20",
    },
    {
        id: "6",
        title: "Tech Park Solar Grid",
        location: "Chennai, Tamil Nadu",
        category: "Commercial",
        iconName: "Building2",
        capacity: "150 kW",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        savings: "₹1,80,000/month",
        gradient: "from-indigo-500/20 to-blue-500/20",
    },
];

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);

    useEffect(() => {
        const stored = localStorage.getItem("nahasolar_projects");
        if (stored) {
            setProjects(JSON.parse(stored));
        } else {
            // Seed defaults if empty
            localStorage.setItem("nahasolar_projects", JSON.stringify(DEFAULT_PROJECTS));
            setProjects(DEFAULT_PROJECTS);
        }
    }, []);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "Home": return Home;
            case "Building2": return Building2;
            case "Factory": return Factory;
            default: return Zap;
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section id="projects" className="py-20 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Our Work
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                        Featured{" "}
                        <span className="text-gradient-energy">Solar Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Explore our successful solar installations across India. From homes to industries, we power progress.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {projects.map((project, index) => {
                        const IconComponent = getIcon(project.iconName);
                        return (
                            <motion.div key={project.id || index} variants={itemVariants}>
                                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card overflow-hidden group cursor-pointer">
                                    {/* Image Container */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`} />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-primary/90 backdrop-blur-sm border-0 text-primary-foreground">
                                                {project.category}
                                            </Badge>
                                        </div>

                                        {/* Icon */}
                                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                                        </div>
                                    </div>

                                    <CardContent className="pt-6">
                                        {/* Title */}
                                        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Location */}
                                        <p className="text-sm text-muted-foreground mb-4">
                                            📍 {project.location}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-muted/50 rounded-lg p-3">
                                                <div className="flex items-center gap-1 mb-1">
                                                    <Zap className="w-4 h-4 text-primary" />
                                                    <span className="text-xs text-muted-foreground">Capacity</span>
                                                </div>
                                                <div className="font-bold text-lg">{project.capacity}</div>
                                            </div>
                                            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-3 border border-green-500/20">
                                                <div className="text-xs text-muted-foreground mb-1">Savings</div>
                                                <div className="font-bold text-lg text-green-600 dark:text-green-400">
                                                    {project.savings}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground text-lg">
                        Ready to start your solar journey?{" "}
                        <Link href="/contact" className="text-primary font-semibold hover:underline">
                            Get your free quote today →
                        </Link>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
