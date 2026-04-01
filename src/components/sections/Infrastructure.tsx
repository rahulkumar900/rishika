"use client";

import { motion } from "framer-motion";

export function Infrastructure() {
  const stats = [
    {
      value: "3,200",
      unit: "SQ FT",
      label: "Secure Operational Space",
      desc: "Ample carpet area serving as the central hub for our equipment and logistics."
    },
    {
      value: "HEAVY",
      unit: "MACHINERY",
      label: "Concrete & Mixers",
      desc: "Equipped with state-of-the-art Concrete Batching Plants and Mixture Machines."
    },
    {
      value: "DEDICATED",
      unit: "FLEET",
      label: "Company Transport",
      desc: "A fleet of owned camper vehicles and pump sets ensuring rapid deployment."
    },
    {
      value: "4X",
      unit: "SCALABILITY",
      label: "Resource Elasticity",
      desc: "Proven capability to scale manpower and physical infrastructure on demand."
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-white border-t-2 border-black">
      <div className="container px-4 md:px-10 mx-auto">
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 mb-32">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#050505] leading-[0.8]"
            >
              INFRA<br/>STRUCTURE<span className="text-primary">.</span>
            </motion.h2>
          </div>
          <div className="md:w-1/2 flex items-end">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl md:text-3xl font-medium text-black/50 leading-tight"
            >
              We own and maintain top-tier heavy construction equipment to guarantee execution without compromise.
            </motion.p>
          </div>
        </div>

        <div className="w-full flex flex-col border-t-2 border-black">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col lg:flex-row justify-between lg:items-center py-12 md:py-16 border-b border-black/20 hover:border-black transition-colors"
            >
              <div className="flex flex-wrap gap-4 md:gap-10 lg:gap-16 items-baseline md:w-1/2 mb-8 lg:mb-0">
                <div className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#050505] group-hover:text-primary transition-colors duration-500 break-words max-w-full">
                  {stat.value}
                </div>
                <div className="text-sm md:text-xl lg:text-2xl font-bold uppercase tracking-[0.2em] text-black/40 group-hover:text-[#050505] transition-colors duration-500">
                  {stat.unit}
                </div>
              </div>
              
              <div className="md:w-1/3 flex flex-col gap-2">
                <h4 className="font-bold text-2xl md:text-3xl uppercase tracking-tight text-[#050505]">{stat.label}</h4>
                <p className="text-black/60 text-lg font-medium leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
