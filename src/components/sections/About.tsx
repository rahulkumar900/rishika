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
      </div>
    </section>
  );
}
