import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Zap, value: "50%", label: "Energy Savings" },
    { icon: Shield, value: "25yr", label: "Warranty" },
    { icon: TrendingDown, value: "₹0", label: "Down Payment" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pb-12 md:pb-16 lg:pb-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels on rooftop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-solar-slate/90 via-solar-slate/70 to-solar-slate/90" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-solar-green/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-solar-yellow/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      <div className="container mx-auto px-4 relative z-10 pt-16 sm:pt-18 md:pt-20 lg:pt-22 xl:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solar-green/20 border border-solar-green/30 mb-6"
            >
              <Zap className="w-4 h-4 text-solar-green" />
              <span className="text-solar-green text-sm font-medium">
                India's Trusted Solar Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-primary-foreground">Power Your Home With </span>
              <span className="text-gradient-solar">Clean Solar Energy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Join thousands of homeowners saving up to 90% on electricity bills
              with Nahasolar's premium solar solutions. Get a free quote today!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="gradient-solar border-0 font-semibold text-lg px-8 py-6 gap-2 glow-green"
                onClick={scrollToContact}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="default"
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 font-semibold text-lg px-8 py-6"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-1 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="gradient-solar p-3 rounded-xl">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Stats - Clean Style without boxes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-3 gap-6 mt-12 lg:hidden"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-solar-green mx-auto mb-3" />
              <div className="text-2xl font-display font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-primary-foreground/70 whitespace-nowrap">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-solar-green" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
