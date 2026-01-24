import { motion } from "framer-motion";
import { useState } from "react";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Residential", "Commercial", "Industrial"];

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
                            Our{" "}
                            <span className="text-gradient-energy">Projects</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Explore our successful solar installations across India - from homes to industries
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-card border border-border hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Component */}
            <Projects />

            <Footer />
        </div>
    );
};

export default ProjectsPage;
