"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Heavy parallax for background to give depth
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityVideo = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);
  
  // Independent floating parallax for each giant word
  const yText1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center pt-24 pb-12"
    >
      {/* Deep Cinematic Background */}
      <motion.div 
        style={{ y: yVideo, opacity: opacityVideo }}
        className="absolute inset-0 z-0 origin-top scale-110"
      >
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-10 pointer-events-none" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover mix-blend-luminosity grayscale"
          poster="/hero-bg.png"
        />
      </motion.div>

      {/* Massive Brutalist Typography Layer */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center h-full gap-0 select-none px-4 pointer-events-none text-center">
        <motion.div 
          style={{ y: yText1 }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <h1 className="text-[16vw] md:text-[13vw] font-black uppercase tracking-tighter leading-[0.8] text-white filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            Rishika
          </h1>
        </motion.div>

        <motion.div 
          style={{ y: yText2 }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden z-20 flex flex-col md:flex-row items-center gap-0 md:gap-8"
        >
          <h1 className="text-[17vw] md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8] text-primary filter drop-shadow-[0_10px_30px_rgba(234,179,8,0.2)]">
            Cleaner
          </h1>
        </motion.div>

        <motion.div 
          style={{ y: yText3 }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <h1 className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter leading-[0.8] text-white/90 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            Service<span className="text-primary">.</span>
          </h1>
        </motion.div>
      </div>

      {/* Absolute Bottom Elements (Anchored) */}
      <div className="absolute w-full bottom-8 md:bottom-12 px-6 md:px-12 flex justify-between items-end z-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/60 text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] max-w-[180px] md:max-w-xs leading-relaxed mix-blend-difference"
        >
          Premium Heavy Infrastructure &<br/>Civic Maintenance.
        </motion.div>

        <motion.a 
          href="#about"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-12 h-20 md:w-16 md:h-24 border border-white/20 rounded-full flex justify-center p-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 pointer-events-auto backdrop-blur-sm group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <motion.div 
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full flex justify-center"
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-primary transition-colors" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

