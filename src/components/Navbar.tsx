"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import nahaLogo from "@/assets/naha-logo.png";

interface NavbarProps {
  forceDark?: boolean;
}

const Navbar = ({ forceDark = false }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Careers", href: "/careers" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const scrollToSection = (href: string) => {
    // Check if it's an internal anchor link
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          const element = document.querySelector(`#${sectionId}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300); // Increased timeout slightly for navigation delay
      } else {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Navigate to the page
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4">
      <div className="container mx-auto px-4">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`transition-all duration-300 ${isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
            } ${isMobileMenuOpen ? "rounded-3xl" : "rounded-full"}`}
        >
          {/* Navbar content */}
          <div className="px-4 md:px-6 flex items-center justify-between h-12 sm:h-14 md:h-14 lg:h-16 xl:h-16">
            {/* Logo with responsive sizing */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/">
                <Image
                  src={nahaLogo}
                  alt="Naha Energy Solutions"
                  className={`h-8 w-auto sm:h-9 md:h-9 lg:h-10 xl:h-11 object-contain transition-all duration-300 ${(!isScrolled && !isMobileMenuOpen) && !forceDark ? "brightness-0 invert" : ""
                    }`}
                // Note: Next/Image handles 'src' as object if imported. 
                // If using classNames for sizing, width/height props might be overridden or need to be set to 'auto' via CSS.
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation with responsive gaps */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium text-xs lg:text-sm transition-colors hover:text-primary ${isScrolled || isMobileMenuOpen || forceDark ? "text-foreground" : "text-primary-foreground"
                    }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button with responsive sizing */}
            <div className="hidden md:flex items-center">
              <Button
                variant="default"
                className="gradient-energy border-0 font-semibold gap-1.5 text-xs lg:text-sm px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2"
                onClick={() => scrollToSection("#contact")}
              >
                <Phone className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                <span className="hidden lg:inline">Get Free Quote</span>
                <span className="lg:hidden">Quote</span>
              </Button>
            </div>

            {/* Mobile Menu Button with responsive padding */}
            <button
              className="md:hidden p-1 sm:p-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-4 h-4 sm:w-5 sm:h-5 ${isScrolled || isMobileMenuOpen || forceDark ? "text-foreground" : "text-primary-foreground"}`} />
              ) : (
                <Menu className={`w-4 h-4 sm:w-5 sm:h-5 ${isScrolled || isMobileMenuOpen || forceDark ? "text-foreground" : "text-primary-foreground"}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu with responsive spacing */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-background border-t rounded-b-3xl overflow-hidden"
              >
                <div className="px-3 sm:px-4 py-2 sm:py-3 flex flex-col gap-2 sm:gap-3">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground font-medium py-1.5 text-left text-xs sm:text-sm hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  ))}
                  <Button
                    variant="default"
                    className="gradient-energy border-0 font-semibold gap-2 w-full text-xs sm:text-sm py-2 sm:py-2.5"
                    onClick={() => scrollToSection("#contact")}
                  >
                    <Phone className="w-4 h-4" />
                    Get Free Quote
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;
