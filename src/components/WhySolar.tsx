"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Shield, Leaf, Award, Clock } from "lucide-react";

const WhySolar = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Reduce Electricity Bills",
      description: "Save up to 90% on your monthly electricity bills with solar power.",
    },
    {
      icon: Shield,
      title: "30 Year Warranty",
      description: "Industry-leading warranty coverage for complete peace of mind.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint and contribute to a cleaner planet.",
    },
    {
      icon: Award,
      title: "Government Subsidies",
      description: "Benefit from attractive government subsidies and tax benefits.",
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Professional installation completed in just 2-3 days.",
    },
    {
      icon: CheckCircle,
      title: "Premium Quality",
      description: "We use only tier-1 solar panels from globally renowned brands.",
    },
  ];

  return (
    <section id="why-solar" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
              Why Switch to{" "}
              <span className="text-gradient-solar">Solar Energy?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join the solar revolution with Nahasolar. We make the transition
              to clean energy simple, affordable, and rewarding. Our expert team
              handles everything from consultation to installation and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">Free Site Survey</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">EMI Available</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">After-Sales Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 gradient-solar rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySolar;
