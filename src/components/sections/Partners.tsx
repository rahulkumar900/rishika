"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Jindal", logo: "/logos/jindal.png" },
  { name: "KCC Infra", logo: "/logos/kcc.png" },
  { name: "L&T", logo: "/logos/l-and-t.avif" },
  { name: "NCC", logo: "/logos/ncc.png" },
  { name: "NNT", logo: "/logos/nnt-logo.webp" },
  { name: "TERI", logo: "/logos/TERI.png" },
];

export function Partners() {
  return (
    <section className="relative py-24 bg-slate-950 border-y border-slate-900/50 overflow-hidden">
      {/* Premium Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,var(--color-primary)_opacity-10,transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3.5rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1.5 bg-primary rounded-full"
          />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-100">
            Strategic <span className="text-primary italic">Partners</span> &amp; Clients
          </h2>
          <p className="text-slate-400 max-w-2xl font-medium text-sm md:text-base leading-relaxed">
            Collaborating with India's leading organizations to deliver unmatched quality in
            heavy infrastructure and public health engineering.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-3"
            >
              {/* White logo card */}
              <div className="relative w-full bg-white rounded-md p-4 border border-slate-200/10 group-hover:border-primary/60 shadow-sm group-hover:shadow-primary/10 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-transparent group-hover:border-primary transition-colors duration-300 rounded-tl-md" />
                <div className="relative h-12 w-full grayscale group-hover:grayscale-0 transition-all duration-400">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 150px, (max-width: 1280px) 180px, 200px"
                  />
                </div>
              </div>

              {/* Partner name label */}
              <span className="text-slate-500 group-hover:text-slate-300 text-xs font-semibold uppercase tracking-widest transition-colors duration-300">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
