"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Construction & Contracting",
      description: "Platform construction, railway station management, and large-scale Public Health Engineering Department (PHED) projects.",
      number: "01",
    },
    {
      title: "Overhead Tank Maintenance",
      description: "Expert maintenance and construction of RCC Overhead Tanks across Bihar's PHED Eastern Zone.",
      number: "02",
    },
    {
      title: "Water Filtration Services",
      description: "Panchayat-level water filter cleaning and maintenance under the Har Ghar Nal Ka Jal Yojna.",
      number: "03",
    },
    {
      title: "Painting & Renovation",
      description: "G.I. Tower repainting, structural painting, and maintenance works like the NIIT Ganga Ghat steps.",
      number: "04",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-40 bg-white text-[#050505] relative overflow-hidden">
      <div className="container px-4 md:px-10 mx-auto relative z-10 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.8rem] sm:text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85]"
          >
            Core<br />Capabilities
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-right max-w-sm mt-10 md:mt-0 font-medium text-lg text-black/60"
          >
            Delivering specialized, robust solutions tailored for intensive infrastructure.
          </motion.div>
        </div>

        {/* Full Width Brutalist List */}
        <div className="border-t-2 border-black w-full">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative border-b border-black/20 hover:border-black transition-colors duration-500 w-full cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              
              <div className="relative z-10 py-10 md:py-16 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6 md:gap-12 w-full md:w-1/2">
                  <div className="text-sm md:text-lg font-bold font-mono group-hover:text-primary transition-colors duration-500">
                    {service.number}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter group-hover:text-white transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <div className="w-full md:w-1/3 text-base md:text-xl font-medium text-black/60 group-hover:text-white/80 transition-colors duration-500">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
