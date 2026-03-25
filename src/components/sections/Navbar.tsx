"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent pointer-events-none md:pointer-events-auto"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 pointer-events-auto">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Rishika Cleaner Service Logo" 
              className={`h-[70px] w-auto py-1 transition-all duration-300 ${
                isScrolled 
                  ? "mix-blend-multiply contrast-125 brightness-100" 
                  : "mix-blend-screen invert contrast-125 opacity-90 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
              }`} 
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold tracking-wider uppercase transition-colors ${
                    isScrolled 
                      ? "text-slate-600 hover:text-primary" 
                      : "text-slate-200 hover:text-white drop-shadow-md"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button size="lg" className="font-bold uppercase tracking-wider">Get a Quote</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-slate-900" : "text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-24 left-0 w-full bg-slate-950 border-b-2 border-primary shadow-2xl"
        >
          <div className="flex flex-col p-6 gap-6 pointer-events-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-wider p-2 hover:bg-slate-900 rounded-md text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="lg" className="w-full mt-4 h-14 text-lg font-bold uppercase">Get a Quote</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
