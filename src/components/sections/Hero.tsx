"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, ChevronRight, HardHat, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 text-slate-50 overflow-hidden">
      {/* Heavy Industrial Background Grid */}
      <div className="absolute inset-0 bg-grid-slate-900 bg-[size:40px_40px] opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-xs w-fit">
              <span className="w-2 h-2 bg-slate-950 animate-pulse" />
              Established 2019
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] uppercase">
              Heavy Duty <br />
              <span className="text-primary">Construction</span><br />
              & Maintenance
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-[600px] border-l-4 border-primary pl-4 font-medium">
              Delivering uncompromising quality infrastructure, PHED projects, and water facility redevelopment across Bihar and Jharkhand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-fit">
              <Link 
                href="#contact" 
                className={buttonVariants({ 
                  size: "lg", 
                  className: "h-14 px-8 text-lg font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 rounded-none w-full sm:w-auto flex items-center justify-center whitespace-nowrap" 
                })}
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Link>
              <Link 
                href="#services" 
                className={buttonVariants({ 
                  variant: "outline", 
                  size: "lg", 
                  className: "h-14 px-8 text-lg font-bold uppercase tracking-wide border-2 border-slate-700 hover:bg-slate-800 text-slate-300 rounded-none bg-transparent w-full sm:w-auto flex items-center justify-center whitespace-nowrap" 
                })}
              >
                View Capabilities
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 p-2 border border-slate-800">
                  <HardHat className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">20+</div>
                  <div className="text-xs text-slate-500 uppercase font-semibold">Field Experts</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 p-2 border border-slate-800">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">ISO Grade</div>
                  <div className="text-xs text-slate-500 uppercase font-semibold">Quality Assured</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Structural Graphic Placeholder */}
            <div className="absolute inset-0 bg-slate-900 border-4 border-slate-800 p-2 flex flex-col justify-between">
              <div className="w-full h-full bg-slate-800 relative overflow-hidden group">
                 {/* Hazard Stripes */}
                 <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,var(--color-primary),var(--color-primary)_10px,transparent_10px,transparent_20px)] z-20" />
                 
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-3a323adff569?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                 
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-primary text-primary-foreground p-4 font-bold border-l-4 border-slate-950 shadow-2xl">
                      <div className="text-sm uppercase tracking-wider mb-1 opacity-80">Featured Project</div>
                      <div className="text-2xl">Har Ghar Nal Ka Jal</div>
                      <Link href="/projects/har-ghar-nal-ka-jal" className="flex items-center mt-2 text-sm font-semibold hover:underline cursor-pointer">
                        Read Case Study <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
