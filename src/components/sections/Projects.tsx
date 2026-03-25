"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-2 bg-primary mb-6"></div>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Highlighting major infrastructural transformations spanning from critical railway lines to massive public sanitation and water supply projects.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/projects/${project.slug}`} className="block group relative overflow-hidden bg-slate-900 border border-slate-800">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  {/* View Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-slate-900/40 backdrop-blur-sm">
                    <div className="bg-primary text-primary-foreground font-bold uppercase tracking-wider px-6 py-3 border border-primary-foreground">
                      View full detail
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 relative z-20 -mt-12 bg-slate-900 mx-6 mb-6 border-l-4 border-primary group-hover:border-white transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold text-primary tracking-widest uppercase">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                    <span className="flex items-center gap-1">{project.location}</span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    <span className="truncate">{project.client}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
