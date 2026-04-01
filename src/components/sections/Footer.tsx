"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="container px-4 md:px-10 mx-auto relative z-10 w-full">
        
        {/* Massive Closing Branding */}
        <div className="w-full flex justify-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] font-black tracking-tighter uppercase leading-none text-center"
          >
            Rishika<span className="text-primary">.</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/20 pt-16 mb-24">
          
          <div className="flex flex-col gap-6 lg:col-span-2">
            <img src="/logo.png" alt="Rishika Cleaner Service Logo" className="h-20 w-auto object-contain self-start" />
            <p className="text-xl font-medium text-white/50 max-w-sm">
              Premium construction, maintenance, and heavy execution across Bihar and Jharkhand since 2019.
            </p>
            <div className="mt-4">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">GSTIN: 10DZPB0421H1ZD</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Index</h4>
            <div className="flex flex-col gap-4 text-xl font-black uppercase tracking-tighter">
              <Link href="#about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="#services" className="hover:text-primary transition-colors">Capabilities</Link>
              <Link href="#projects" className="hover:text-primary transition-colors">The Work</Link>
              <Link href="#financials" className="hover:text-primary transition-colors">Financials</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Socials</h4>
            <div className="flex flex-col gap-4 text-xl font-black uppercase tracking-tighter text-white/50">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
            </div>
          </div>

        </div>

        {/* Bottom Floor */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-[0.2em] text-white/30 border-t border-white/10 pt-10">
          <div>© {new Date().getFullYear()} Rishika Cleaner Service.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
