"use client";

import { motion } from "framer-motion";
import { Home, Building2, Wrench, Sun, Battery, Leaf } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "3KW System",
      description:
        "Perfect for small to medium-sized homes (2-3 BHK). Generates ~12-15 units per day. Ideal for reducing basic electricity bills.",
      features: ["Saves ₹3,000 - ₹4,000/month", "Requires ~300 sq. ft. roof area", "Subsidy Available"],
    },
    {
      icon: Sun,
      title: "5KW System",
      description:
        "Our most popular choice for large homes/villas (3-4 BHK). Generates ~20-25 units per day. Covers ACs and heavy appliances.",
      features: ["Saves ₹5,000 - ₹7,000/month", "Requires ~500 sq. ft. roof area", "High ROI"],
    },
    {
      icon: Building2,
      title: "8KW System",
      description:
        "High-capacity system for large villas or small offices. Generates ~32-40 units per day. Maximum independence from the grid.",
      features: ["Saves ₹9,000 - ₹12,000/month", "Requires ~800 sq. ft. roof area", "Commercial/Large Res. use"],
    },
  ];

  const benefits = [
    { icon: Sun, label: "Free Energy", value: "30+ Years" },
    { icon: Battery, label: "Battery Backup", value: "Available" },
    { icon: Leaf, label: "CO2 Saved", value: "4 Tons/Year" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Solar Solutions for{" "}
            <span className="text-gradient-solar">Every Need</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From residential rooftops to large commercial installations, we
            deliver customized solar solutions with premium quality and service.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 gradient-solar rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-display text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:gradient-solar lg:rounded-2xl lg:p-8 lg:md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center lg:bg-transparent bg-card rounded-xl p-6 lg:p-0 shadow-lg lg:shadow-none"
              >
                <benefit.icon className="w-10 h-10 lg:text-primary-foreground text-primary mb-3" />
                <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold lg:text-primary-foreground text-foreground mb-1 whitespace-nowrap">
                  {benefit.value}
                </div>
                <div className="lg:text-primary-foreground/80 text-muted-foreground whitespace-nowrap">{benefit.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
