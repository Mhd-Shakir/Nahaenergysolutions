"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const TestimonialsPage = () => {
    const allTestimonials = [
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
        {
            name: "Vikram Singh",
            role: "Hotel Owner, Jaipur",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
            rating: 5,
            text: "Solar installation for our hotel was completed in just 3 days! Professional team, quality products, and excellent post-installation support. Highly satisfied!",
        },
        {
            name: "Meera Iyer",
            role: "Homeowner, Chennai",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
            rating: 5,
            text: "The team explained everything clearly and helped us get the government subsidy. Installation was quick and clean. Saving ₹15,000 per month!",
        },
        {
            name: "Arjun Nair",
            role: "Factory Owner, Pune",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
            rating: 5,
            text: "200 kW installation for our manufacturing unit. System works flawlessly. The monitoring app is fantastic. Worth every rupee!",
        },
        {
            name: "Anjali Desai",
            role: "IT Professional, Bangalore",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
            rating: 5,
            text: "Working from home, my electricity bills were huge. After installing solar panels, I'm practically paying nothing. Amazing service by Naha Energy!",
        },
    ];

    return (
        <div className="min-h-screen">
            <Navbar forceDark={true} />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Customer{" "}
                            <span className="text-gradient-energy">Testimonials</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Hear from our happy customers who've made the switch to clean, affordable solar energy.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-8 mb-16"
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                            <div className="text-muted-foreground">Average Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                            <div className="text-muted-foreground">Happy Customers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <div className="text-muted-foreground">Satisfaction Rate</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-12 pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {allTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
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
                                                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 relative">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
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
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TestimonialsPage;
