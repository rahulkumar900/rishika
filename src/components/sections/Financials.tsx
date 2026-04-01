"use client";

import { motion } from "framer-motion";

const turnoverData = [
  { year: "2023", amount: "12.65", unit: "CR", growth: "+15%" },
  { year: "2024", amount: "16.25", unit: "CR", growth: "+28%" },
  { year: "2025", amount: "35.80", unit: "CR", growth: "+120%" },
];

export function Financials() {
  const easeExpoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="financials" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden text-white border-t border-white/10">
      
      <div className="container px-4 md:px-10 mx-auto relative z-10 w-full mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: easeExpoOut }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] whitespace-nowrap"
          >
            FINANCIALS<span className="text-primary">.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-left md:text-right max-w-sm md:max-w-md font-medium text-base md:text-xl text-white/50"
          >
            Tracing our trajectory from foundation to industry leadership. Consistent growth driven by execution.
          </motion.div>
        </div>
      </div>

      <div className="container px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-col border-t-2 border-white">
          {turnoverData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: easeExpoOut }}
              className="group relative border-b border-white/20 hover:border-primary transition-colors duration-500 overflow-hidden"
            >
              {/* Massive Hover Fill */}
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />

              <div className="relative z-10 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6 pointer-events-none">
                
                <div className="flex items-baseline gap-4 md:gap-10 w-full md:w-1/2">
                  <div className="text-xl md:text-3xl font-bold font-mono text-white/30 group-hover:text-black/50 transition-colors duration-500">
                    {item.year}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter text-white group-hover:text-[#050505] transition-colors duration-500 leading-none">
                      {item.amount}
                    </h3>
                    <span className="text-2xl md:text-4xl font-black text-primary group-hover:text-[#050505] transition-colors duration-500">
                      {item.unit}
                    </span>
                  </div>
                </div>
                
                <div className="w-full md:w-1/3 flex flex-col items-start md:items-end">
                  <div className="text-sm md:text-base uppercase tracking-[0.2em] font-bold text-white/50 group-hover:text-black/50 transition-colors duration-500 mb-2">
                    Year over Year Growth
                  </div>
                  <div className="text-2xl md:text-5xl font-black tracking-tighter text-white group-hover:text-[#050505] transition-colors duration-500">
                    {item.growth}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
