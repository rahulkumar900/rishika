"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full transition-all duration-500 border ${
          isScrolled 
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-2xl py-3" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <img 
              src="/logo.png" 
              alt="Rishika Cleaner Service" 
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled 
                  ? "h-7 md:h-9 opacity-100" 
                  : "h-12 md:h-16 opacity-80 group-hover:opacity-100"
              }`}
            />
            <div className="flex flex-col leading-none overflow-hidden">
              <span className={`font-black uppercase tracking-tight transition-all duration-500 ${
                isScrolled 
                  ? "text-xs md:text-sm text-white" 
                  : "text-sm md:text-base text-white/90 group-hover:text-white"
              }`}>
                Rishika
              </span>
              <span className={`font-bold uppercase tracking-[0.15em] transition-all duration-500 ${
                isScrolled 
                  ? "text-[8px] md:text-[10px] text-primary" 
                  : "text-[10px] md:text-xs text-primary/80 group-hover:text-primary"
              }`}>
                Cleaner Service
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-xs font-bold uppercase tracking-[0.2em] relative group transition-colors duration-500 ${isScrolled ? "text-white/60 hover:text-white" : "text-white/60 hover:text-white"}`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-[#050505] text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleSmoothScroll(e, link.href);
                  setMobileMenuOpen(false);
                }}
                className="text-4xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => {
                handleSmoothScroll(e, '#contact');
                setMobileMenuOpen(false);
              }}
              className="mt-8 px-8 py-4 bg-primary text-[#050505] text-sm font-black uppercase tracking-[0.2em] rounded-full"
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
