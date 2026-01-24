import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Homeowner, Mumbai",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            rating: 5,
            text: "Naha Energy transformed my home! My electricity bills dropped by 85%. The installation was smooth, and the team was incredibly professional. Best investment I've made!",
        },
        {
            name: "Priya Sharma",
            role: "Business Owner, Delhi",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            rating: 5,
            text: "Our factory now runs on clean solar energy. The ROI was faster than expected, and we're contributing to a greener future. Highly recommend Naha Energy!",
        },
        {
            name: "Amit Patel",
            role: "Villa Owner, Bangalore",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
            rating: 5,
            text: "Exceptional service from start to finish. The solar panels look sleek on my roof, and the smart monitoring system is amazing. Zero electricity bills for 6 months now!",
        },
        {
            name: "Sneha Reddy",
            role: "Apartment Complex, Hyderabad",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
            rating: 5,
            text: "Installed solar for our entire apartment complex. The common area electricity is now completely free. Great work by the Naha Energy team!",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-20 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Happy Customers
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                        Why People Love{" "}
                        <span className="text-gradient-energy">Naha Energy</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Join thousands of satisfied customers who've made the switch to clean, affordable solar energy.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card relative overflow-hidden group">
                                {/* Quote Icon Background */}
                                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote className="w-16 h-16 text-primary" />
                                </div>

                                <CardContent className="pt-6 relative z-10">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">4.9/5</span>
                        <span className="text-muted-foreground">from 2,500+ reviews</span>
                    </div>

                    {/* View All Button */}
                    <div>
                        <a
                            href="/testimonials"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            View All Testimonials
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
