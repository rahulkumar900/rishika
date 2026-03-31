"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHBhdGggZD0nTTEwIDBMMCAxMFYwSDEwWicgZmlsbD0nI2VhYjMwOCcgLz4KPC9zdmc+')] opacity-20" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            About <span className="text-primary">Rishika</span>
          </h2>
          <div className="w-20 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col bg-slate-50 dark:bg-slate-950 p-8 border border-slate-200 dark:border-slate-800 text-center items-center rounded-sm"
          >
            <div className="bg-primary/20 p-4 rounded-full mb-6">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-black uppercase mb-4 text-foreground">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              To provide high-quality construction services at competitive prices while maintaining unmatched professionalism and integrity across all sectors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col bg-slate-50 dark:bg-slate-950 p-8 border border-slate-200 dark:border-slate-800 text-center items-center rounded-sm"
          >
            <div className="bg-primary/20 p-4 rounded-full mb-6">
              <Lightbulb className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-black uppercase mb-4 text-foreground">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              To confidently face challenges through innovative ideas and consistently deliver the best infrastructural results, even in difficult civic situations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col bg-primary text-primary-foreground p-8 border border-primary text-center items-center shadow-lg rounded-sm"
          >
            <div className="bg-slate-900/10 p-4 rounded-full mb-6">
              <ShieldCheck className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-black uppercase mb-4">Quality Policy</h3>
            <p className="text-primary-foreground/90 font-medium leading-relaxed">
              Every deliverable is scrutinized by our dedicated Quality Group and Civil Assurance team, ensuring compliance with strict internal standards and modern technologies.
            </p>
          </motion.div>
        </div>

        {/* From the Director's Desk */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid lg:grid-cols-2 gap-12 items-center bg-slate-50 dark:bg-slate-950 p-8 md:p-12 border border-slate-200 dark:border-slate-800 rounded-3xl relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
          
          <div className="relative">
            <div className="aspect-square md:aspect-[4/5] relative rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl max-w-[280px] md:max-w-sm mx-auto lg:mx-0">
              <img 
                src="/director.webp" 
                alt="Director of Rishika Cleaner" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white text-left z-10">
                <div className="text-2xl font-black uppercase tracking-tight">Shishupal Kumar</div>
                <div className="text-primary font-bold uppercase text-xs tracking-[0.2em] mt-1">Director</div>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-black uppercase tracking-widest">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Director&apos;s Message
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
              Building the <span className="text-primary">Future</span> through Dedication
            </h3>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic border-l-4 border-primary/30 pl-6 text-lg md:text-xl">
              <p>
                &quot;At Rishika Cleaner Service, our philosophy is simple: delivering excellence without compromise. Every project we undertake is a commitment to the growth and development of our region.&quot;
              </p>
              <p>
                &quot;We don&apos;t just build structures; we build trust through quality engineering and consistent results in construction and civic maintenance.&quot;
              </p>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-1.5 bg-primary" />
              <div>
                <div className="font-black uppercase tracking-[0.15em] text-base md:text-lg text-slate-900 dark:text-white mb-1">
                  Shishupal Kumar
                </div>
                <div className="font-bold uppercase tracking-[0.2em] text-xs text-slate-500 dark:text-slate-400">
                  Director, Rishika Cleaner Service
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
