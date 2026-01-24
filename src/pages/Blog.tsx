import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, TrendingUp, Lightbulb, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
    const featuredPost = {
        title: "2024 Solar Guide: Everything You Need to Know About Going Solar in India",
        excerpt: "Comprehensive guide covering costs, subsidies, installation process, and ROI calculations for Indian homeowners considering solar energy.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop",
        category: "Guide",
        author: "Arjun Mehta",
        date: "January 15, 2024",
        readTime: "12 min read",
        gradient: "from-blue-500/80 to-cyan-500/80",
    };

    const blogPosts = [
        {
            title: "How Solar Net Metering Works: A Complete Guide",
            excerpt: "Learn how net metering allows you to sell excess electricity back to the grid and maximize your solar investment.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
            category: "Technology",
            icon: TrendingUp,
            author: "Priya Sharma",
            date: "January 10, 2024",
            readTime: "8 min read",
        },
        {
            title: "Top 5 Solar Panel Maintenance Tips for Maximum Efficiency",
            excerpt: "Simple maintenance practices to ensure your solar panels operate at peak performance year-round.",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=500&fit=crop",
            category: "Maintenance",
            icon: Wrench,
            author: "Vikram Singh",
            date: "January 5, 2024",
            readTime: "6 min read",
        },
        {
            title: "Solar Battery Storage: Is It Worth the Investment?",
            excerpt: "Exploring the pros and cons of adding battery storage to your solar system and when it makes financial sense.",
            image: "https://images.unsplash.com/photo-1509390144185-99bac91dd8b7?w=800&h=500&fit=crop",
            category: "Technology",
            icon: Lightbulb,
            author: "Priya Sharma",
            date: "December 28, 2023",
            readTime: "10 min read",
        },
        {
            title: "Understanding Government Solar Subsidies in India 2024",
            excerpt: "Complete breakdown of available government subsidies, eligibility criteria, and how to apply for solar incentives.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
            category: "Finance",
            icon: TrendingUp,
            author: "Ananya Reddy",
            date: "December 20, 2023",
            readTime: "7 min read",
        },
        {
            title: "Commercial vs Residential Solar: Key Differences",
            excerpt: "What businesses need to know when considering solar energy compared to residential installations.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
            category: "Business",
            icon: TrendingUp,
            author: "Arjun Mehta",
            date: "December 15, 2023",
            readTime: "9 min read",
        },
        {
            title: "Solar Panel Efficiency: Monocrystalline vs Polycrystalline",
            excerpt: "Comparing different solar panel technologies to help you choose the best option for your needs.",
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=500&fit=crop",
            category: "Technology",
            icon: Lightbulb,
            author: "Priya Sharma",
            date: "December 10, 2023",
            readTime: "11 min read",
        },
    ];

    const categories = ["All", "Guide", "Technology", "Finance", "Business", "Maintenance"];

    return (
        <div className="min-h-screen">
            <Navbar forceDark={true} />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Solar Energy{" "}
                            <span className="text-gradient-energy">Insights & Resources</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Expert guides, industry updates, and practical tips to help you make the most of solar energy.
                        </p>
                    </motion.div>

                    {/* Category Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${index === 0
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-card border border-border hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                            <div className="grid lg:grid-cols-2">
                                {/* Image */}
                                <div className="relative h-80 lg:h-auto overflow-hidden">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${featuredPost.gradient}`} />
                                    <Badge className="absolute top-6 left-6 bg-white text-primary border-0">
                                        Featured
                                    </Badge>
                                </div>

                                {/* Content */}
                                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                                    <Badge className="w-fit mb-4 bg-primary/10 text-primary border-0">
                                        {featuredPost.category}
                                    </Badge>
                                    <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-muted-foreground text-lg mb-6">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {featuredPost.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {featuredPost.readTime}
                                        </div>
                                    </div>
                                    <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                                        Read Full Article
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </CardContent>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-12 pb-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group cursor-pointer">
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <Badge className="absolute top-4 right-4 bg-primary border-0">
                                            {post.category}
                                        </Badge>
                                    </div>

                                    <CardContent className="p-6">
                                        <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-xs">
                                                    {post.author.charAt(0)}
                                                </div>
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Load More */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button className="px-8 py-3 bg-card border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            Load More Articles
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
