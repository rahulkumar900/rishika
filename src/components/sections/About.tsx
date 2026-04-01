"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xText1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xText2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const easeExpoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section ref={containerRef} id="about" className="py-32 md:py-48 bg-[#050505] text-white relative overflow-hidden">
      
      {/* Massive Scrolling Typography Background */}
      <div className="absolute top-10 md:top-32 left-0 w-[200vw] sm:w-[150vw] pointer-events-none opacity-5">
        <motion.div style={{ x: xText1 }} className="text-[15vw] font-black uppercase whitespace-nowrap leading-[0.8] tracking-tighter">
          WE DON'T JUST BUILD STRUCTURES
        </motion.div>
        <motion.div style={{ x: xText2 }} className="text-[15vw] font-black uppercase whitespace-nowrap leading-[0.8] tracking-tighter text-outline-sm text-transparent ml-[20vw]">
          WE BUILD ENDURING TRUST
        </motion.div>
      </div>

      <div className="container px-4 md:px-10 mx-auto relative z-10 w-full">
        
        {/* Core Philosophy Statement */}
        <div className="max-w-4xl mb-40">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1.5, ease: easeExpoOut }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-[2px] bg-primary mb-12"
          />
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: easeExpoOut }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-10"
          >
            A decade of <span className="text-primary italic font-serif">precision</span> in massive infrastructure &amp; civic engineering.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-sm text-white/50 font-medium tracking-wide uppercase mt-20"
          >
            <div>
              <div className="text-white text-3xl font-black mb-2 tracking-tighter">01. Mission</div>
              Extreme quality at competitive scales unconditionally.
            </div>
            <div>
              <div className="text-white text-3xl font-black mb-2 tracking-tighter">02. Vision</div>
              Innovating through difficult civic situations smoothly.
            </div>
            <div>
              <div className="text-white text-3xl font-black mb-2 tracking-tighter">03. Ethos</div>
              Strict compliance &amp; internal Civil Assurance.
            </div>
          </motion.div>
        </div>

        {/* The Director Brutalist Block */}
        <div className="grid lg:grid-cols-12 gap-10 mt-32 md:mt-64 relative border-t border-white/10 pt-10">
          
          {/* Vertical Title */}
          <div className="lg:col-span-1 hidden lg:flex justify-center">
            <div className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.5em] text-xs font-bold text-white/30 pt-10">
              Leadership &amp; Management
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: easeExpoOut }}
              className="aspect-[3/4] overflow-hidden bg-white/5"
            >
              <img 
                src="/director.webp" 
                alt="Shishupal Kumar"
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out"
              />
            </motion.div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1, ease: easeExpoOut }}
              className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r border-primary origin-bottom-right pointer-events-none"
            />
          </div>

          <div className="lg:col-span-6 lg:pl-10 flex flex-col justify-end pb-10">
            <div className="overflow-hidden mb-6">
              <motion.h3 
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: easeExpoOut }}
                className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white"
              >
                Shishupal Kumar
              </motion.h3>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-12"
            >
              Managing Director
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1.5 }}
              className="text-xl md:text-3xl font-medium leading-[1.4] text-white/70"
            >
              "We approach every project not as a contract, but as a commitment to the region's enduring growth. Excellence without compromise."
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
