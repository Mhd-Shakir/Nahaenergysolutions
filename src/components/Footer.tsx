"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import nahaLogo from "@/assets/naha-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-solar-slate text-primary-foreground pt-12 pb-8 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-solar-green/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src={nahaLogo}
                alt="Naha Energy Solutions"
                className="h-10 w-auto bg-transparent object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering India with clean, renewable energy. Premium solar solutions for a sustainable tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Our Team", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-solar-green transition-colors flex items-center gap-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Residential Solar", href: "/services" },
                { name: "Commercial Solar", href: "/services" },
                { name: "Industrial Solutions", href: "/services" },
                { name: "Maintenance", href: "/services" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-solar-green transition-colors flex items-center gap-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Compact) */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-solar-green flex-shrink-0 mt-0.5" />
                <span>Kondotty, Kerala</span>
              </li>
              <li>
                <a href="tel:+918089135003" className="flex items-center gap-3 text-muted-foreground hover:text-solar-green transition-colors">
                  <Phone className="w-4 h-4 text-solar-green flex-shrink-0" />
                  <span>+91 80891 35003</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@nahaenergy.com" className="flex items-center gap-3 text-muted-foreground hover:text-solar-green transition-colors">
                  <Mail className="w-4 h-4 text-solar-green flex-shrink-0" />
                  <span>info@nahaenergy.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Minimal) */}
        <div className="border-t border-solar-slate-light/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p className="text-center md:text-left">
            © {currentYear} Naha Energy Solutions. All rights reserved. <span className="hidden md:inline mx-2">|</span><br className="md:hidden" />
            Powered by <a href="https://fikavo.com" target="_blank" rel="noopener noreferrer" className="hover:text-solar-green transition-colors">fikavo.com</a>
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-solar-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-solar-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
