"use client";

import { motion } from "framer-motion";
import { Droplets, PaintRoller, Building2, Map, ShieldCheck, Truck } from "lucide-react";

const projectMilestones = [
  {
    year: "2019",
    title: "Foundation & Railways",
    description: "Inaugural project managing Eastern Railway Stations and executing platform construction in Katihar.",
    icon: <Truck className="w-6 h-6" />
  },
  {
    year: "2020",
    title: "PHED Expansion",
    description: "Expanded core operations into extensive construction projects for the Public Health Engineering and Irrigation Departments.",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    year: "2021",
    title: "Water Infrastructure",
    description: "Secured and established two major construction and maintenance projects for RCC Overhead Tanks in the PHED Eastern Zone of Bihar.",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    year: "2022",
    title: "Civic Maintenance",
    description: "Awarded significant maintenance contracts including NIIT Ganga Ghat steps and a 2km RCC wall boundary for the Patna Municipal Corporation.",
    icon: <Map className="w-6 h-6" />
  },
  {
    year: "2024",
    title: "Har Ghar Nal Ka Jal Yojna",
    description: "Secured landmark maintenance tenders at the Panchayat level, executing extensive G.I. Tower repainting and water filter cleaning services.",
    icon: <PaintRoller className="w-6 h-6" />
  },
  {
    year: "2026",
    title: "Ongoing Redevelopment",
    description: "Continuously providing high-grade construction services and specialized redevelopment of PHED water resources.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
];

export function Milestones() {
  return (
    <section id="history" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 text-primary font-bold uppercase tracking-widest text-sm mb-4">
            <span className="w-2 h-2 bg-primary animate-pulse rounded-full" />
            Milestones
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            Project <span className="text-primary">History</span>
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
            A proven track record. From our foundation in 2019 to executing critical civil infrastructure across the region.
          </p>
        </div>

        <div className="relative">
          {/* Heavy central line */}
          <div className="absolute left-[3rem] md:left-1/2 top-0 bottom-0 w-2 bg-slate-800 transform -translate-x-1/2 shadow-inner" />
          
          {/* Hazard stripe overlay for the line */}
          <div className="absolute left-[3rem] md:left-1/2 top-0 bottom-0 w-2 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(234,179,8,0.2)_10px,rgba(234,179,8,0.2)_20px)] transform -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {projectMilestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-[3rem] md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-slate-900 border-4 border-primary rounded-xl flex items-center justify-center text-primary z-20 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    {milestone.icon}
                  </div>

                  {/* Spacer for MD screens */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content */}
                  <div className={`w-full pl-20 pr-4 md:pl-0 md:pr-0 md:w-1/2 ${
                    isEven ? "md:pr-16" : "md:pl-16"
                  }`}>
                    <div className="bg-slate-900 border-l-4 border-primary md:border-l-0 md:border-b-4 md:border-primary p-5 md:p-8 hover:bg-slate-800 transition-colors shadow-xl group border-t border-r border-slate-800 h-full">
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-5xl font-black text-slate-800 group-hover:text-primary/20 transition-colors pointer-events-none">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 font-medium leading-relaxed text-base md:text-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
