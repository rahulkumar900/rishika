"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Nalanda Engicon Pvt Ltd", logo: "/logos/nalanda.jpg" },
  { name: "Jindal Infra", logo: "/logos/jindal.png" },
  { name: "KCC Infra", logo: "/logos/kcc.png" },
  { name: "L&T", logo: "/logos/l-and-t.avif" },
  { name: "NCC LTD.", logo: "/logos/ncc.png" },
  { name: "NNT Developers Pvt Ltd.", logo: "/logos/nnt-logo.webp" },
  { name: "TERI", logo: "/logos/TERI.png" },
];

// Duplicate the list for a seamless infinite loop
const marqueeItems = [...partners, ...partners];

export function Partners() {
  return (
    <section className="relative py-24 bg-slate-950 border-y border-slate-900/50 overflow-hidden">
      {/* Premium Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,var(--color-primary)_opacity-10,transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3.5rem" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-1.5 bg-primary rounded-full"
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-100">
              Strategic <span className="text-primary italic">Partners </span> &amp; Clients
            </h2>
            <p className="text-slate-400 max-w-2xl font-medium text-sm md:text-base leading-relaxed">
              Collaborating with India's leading organizations to deliver unmatched quality in
              heavy infrastructure and public health engineering.
            </p>
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent" />

          <div
            className="flex gap-6 w-max"
            style={{
              animation: "partners-scroll 28s linear infinite",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
            }
          >
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group flex flex-col items-center gap-3 flex-shrink-0 w-44"
              >
                {/* White logo card */}
                <div className="relative w-full bg-white rounded-md p-4 border border-slate-200/10 group-hover:border-primary/60 shadow-sm group-hover:shadow-primary/10 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-transparent group-hover:border-primary transition-colors duration-300 rounded-tl-md" />
                  <div className="relative h-14 w-full grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                      sizes="176px"
                    />
                  </div>
                </div>
                {/* Partner name label */}
                <span className="text-slate-500 group-hover:text-slate-300 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe animation injected via a style tag */}
      <style>{`
        @keyframes partners-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
