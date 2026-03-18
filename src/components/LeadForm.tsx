"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, User, Zap, Send, CheckCircle, Loader2, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Lead {
  name: string;
  phone: string;
  email: string;
  billAmount: string;
  systemSize: string;
  message: string;
}

const LeadForm = () => {
  const [formData, setFormData] = useState<Lead>({
    name: "",
    phone: "",
    email: "",
    billAmount: "",
    systemSize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.billAmount.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to get your quote.",
        variant: "destructive",
      });
      return;
    }

    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          billAmount: Number(formData.billAmount),
          systemSize: formData.systemSize,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");
      
      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Quote Request Received! 🎉",
        description: "Our solar expert will contact you within 24 hours.",
      });
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 sm:py-14 md:py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center p-12 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
          >
            <div className="w-20 h-20 gradient-solar rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Thank You!
            </h3>
            <p className="text-muted-foreground mb-6">
              Your free solar consultation request has been received. Our team
              will contact you within 24 hours.
            </p>
            <Button
              className="gradient-solar text-white border-0 font-semibold px-8 hover:opacity-90 transition-opacity"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", phone: "", email: "", billAmount: "", systemSize: "", message: "" });
              }}
            >
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 sm:py-14 md:py-16 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-solar-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-solar-yellow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-solar-green font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mt-2 mb-4">
              Get Your{" "}
              <span className="text-gradient-solar">Free Solar Quote</span>
            </h2>
            <p className="text-muted-foreground text-base mb-6">
              Fill out the form and our solar experts will analyze your
              electricity usage and provide a customized quote within 24 hours.
              No obligation, completely free!
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-8 h-8 gradient-solar rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm">Free site survey & consultation</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-8 h-8 gradient-solar rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm">Customized system design</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-8 h-8 gradient-solar rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm">Transparent pricing with EMI options</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-4 md:p-5 rounded-xl bg-card shadow-2xl border"
            >
              <h3 className="font-display text-lg md:text-xl font-bold mb-1">
                Request Your Free Quote
              </h3>
              <p className="text-muted-foreground text-xs mb-4">
                Enter your details below and we'll get back to you soon.
              </p>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 h-9 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 h-9 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-medium">
                    Email Address (Optional)
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 h-9 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="billAmount" className="text-xs font-medium">
                    Monthly Electricity Bill (₹)
                  </Label>
                  <div className="relative">
                    <Zap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="billAmount"
                      name="billAmount"
                      type="number"
                      placeholder="e.g., 5000"
                      value={formData.billAmount}
                      onChange={handleChange}
                      className="pl-10 h-9 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="systemSize" className="text-xs font-medium">
                    Interested System Size (Optional)
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, systemSize: value }))
                    }
                    value={formData.systemSize}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select system size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3KW">3 KW System</SelectItem>
                      <SelectItem value="5KW">5 KW System</SelectItem>
                      <SelectItem value="8KW">8 KW System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-medium">
                    Message (Optional)
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="pl-10 min-h-[60px] resize-none text-sm"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="default"
                  className="w-full gradient-solar border-0 font-semibold text-sm h-10 gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get Free Quote
                    </>
                  )}
                </Button>
              </div>

              <p className="text-[10px] text-muted-foreground text-center mt-4">
                By submitting, you agree to receive a call from our team.
                <br />
                We respect your privacy and never share your data.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
