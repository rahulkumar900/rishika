"use client";

import { motion } from "framer-motion";
import { Truck, Box, Maximize, Warehouse } from "lucide-react";

export function Infrastructure() {
  const stats = [
    {
      icon: <Warehouse className="w-10 h-10 text-primary" />,
      value: "3,200",
      unit: "Sq. Ft.",
      label: "Secure Operational Space",
      desc: "Ample carpet area serving as the central hub for our equipment and logistics."
    },
    {
      icon: <Box className="w-10 h-10 text-primary" />,
      value: "Heavy",
      unit: "Machinery",
      label: "Concrete & Mixture Plants",
      desc: "Equipped with state-of-the-art Concrete Batching Plants and Mixture Machines."
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      value: "Dedicated",
      unit: "Fleet",
      label: "Company-Owned Transport",
      desc: "A fleet of owned camper vehicles and pump sets ensuring rapid deployment."
    },
    {
      icon: <Maximize className="w-10 h-10 text-primary" />,
      value: "4x",
      unit: "Scalability",
      label: "Resource Elasticity",
      desc: "Proven capability to scale manpower and physical infrastructure up to four times on demand."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-y-4 border-primary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Our <br/><span className="text-primary">Infrastructure</span>
            </h2>
            <div className="w-20 h-2 bg-primary"></div>
            <p className="text-lg text-slate-400 font-medium">
              We own and maintain top-tier construction equipment to guarantee that every project is executed without delays or compromise.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950 p-6 border border-slate-800 hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  {stat.icon}
                  <div className="text-right">
                    <span className="block text-3xl font-black text-white">{stat.value}</span>
                    <span className="text-sm font-bold text-primary uppercase">{stat.unit}</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-white mb-2">{stat.label}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
