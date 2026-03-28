"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, PieChart } from "lucide-react";

const turnoverData = [
  { year: "2023", amount: "12.65", unit: "CR", growth: "+15%" },
  { year: "2024", amount: "16.25", unit: "CR", growth: "+28%" },
  { year: "2025", amount: "35.80", unit: "CR", growth: "+120%" },
];

export function Financials() {
  return (
    <section id="financials" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
              <TrendingUp className="w-3 h-3" />
              Financial Growth
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
              Annual <span className="text-primary text-outline-sm">Turnover</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl">
              Tracing our financial trajectory from foundation to industry leadership. Consistent growth driven by excellence.
            </p>
          </div>
          
          <div className="hidden lg:flex gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-bold uppercase">Compound Growth</div>
                <div className="text-xl font-black text-slate-900 dark:text-white">EXTREME ACCELERATION</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {turnoverData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Background with Glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-2xl" />
              
              <div className="relative bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-xl overflow-hidden">
                {/* Year Badge */}
                <div className="absolute top-0 right-0 px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-black text-xl rounded-bl-2xl">
                  {item.year}
                </div>

                <div className="space-y-6">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    <PieChart className="w-7 h-7" />
                  </div>

                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Financial Year {item.year}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
                        ₹{item.amount}
                      </span>
                      <span className="text-2xl font-black text-primary uppercase">{item.unit}</span>
                    </div>
                  </div>

                  {/* Visual Bar Representation */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                      <span>Market Performance</span>
                      <span className="text-emerald-500">{item.growth}</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(parseFloat(item.amount) / 40) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "circOut" }}
                        className="h-full bg-primary relative"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem]" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Audited Financial Results & Projections
            </p>
          </div>
          <p className="text-sm text-slate-400 italic">
            * Data based on official turnover filings for the respective fiscal years.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
