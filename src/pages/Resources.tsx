import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, FileText, Video, Download } from "lucide-react";

import { useToast } from "@/hooks/use-toast";

const Resources = () => {
    const { toast } = useToast();
    const resources = [
        {
            icon: BookOpen,
            title: "Solar Guide 2024",
            description: "Complete guide to solar energy in India",
            link: "#"
        },
        {
            icon: FileText,
            title: "Subsidy Information",
            description: "Government subsidies and incentives",
            link: "#"
        },
        {
            icon: Video,
            title: "Video Tutorials",
            description: "Learn about solar systems",
            link: "#"
        },
        {
            icon: Download,
            title: "Product Catalog",
            description: "Download our complete catalog",
            link: "#"
        }
    ];

    const handleResourceClick = (e: React.MouseEvent, title: string) => {
        e.preventDefault();
        toast({
            title: "Coming Soon",
            description: `${title} will be available for download shortly.`,
        });
    };

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
                            Resources &{" "}
                            <span className="text-gradient-energy">FAQ</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Everything you need to know about solar energy and our services
                        </p>
                    </motion.div>

                    {/* Resources Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {resources.map((resource, index) => (
                            <motion.a
                                key={index}
                                href={resource.link}
                                onClick={(e) => handleResourceClick(e, resource.title)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="cursor-pointer bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                            >
                                <resource.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold mb-2">{resource.title}</h3>
                                <p className="text-sm text-muted-foreground">{resource.description}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />

            <Footer />
        </div>
    );
};

export default Resources;
