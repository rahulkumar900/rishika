"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const partners = [
  { name: "Nalanda Engicon Pvt Ltd", logo: "/logos/nalanda.jpg" },
  { name: "Ganadhi Pati Construction Pvt Ltd", logo: "/logos/gc.png" },
  { name: "Jindal Infra", logo: "/logos/jindal.png" },
  { name: "KCC Infra", logo: "/logos/kcc.png" },
  { name: "L&T", logo: "/logos/l-and-t.avif" },
  { name: "NCC LTD.", logo: "/logos/ncc.png" },
  { name: "NNT Developers Pvt Ltd.", logo: "/logos/nnt-logo.webp" },
  { name: "TERI", logo: "/logos/TERI.png" },
];

export function Partners() {
  const easeExpoOut = [0.16, 1, 0.3, 1];
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="relative py-24 md:py-40 bg-white border-t border-black overflow-hidden flex flex-col justify-center">

      <div className="container px-4 md:px-10 mx-auto w-full mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: easeExpoOut }}
          className="text-[2.8rem] sm:text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-[#050505] leading-[0.85]"
        >
          CLIENTS<span className="text-primary">.</span>
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden flex items-center border-y-2 border-black bg-[#050505] py-16 md:py-24">

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollerRef}
          className="flex min-w-full shrink-0 gap-8 md:gap-16 w-max items-center animate-scroll hover:[animation-play-state:paused] pointer-events-auto cursor-pointer px-4"
        >
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center shrink-0 w-48 md:w-64 lg:w-80 group"
            >
              <div className="relative h-24 md:h-32 w-full bg-white/5 rounded-2xl md:rounded-3xl p-4 md:p-8 backdrop-blur-sm border border-white/10 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-2 md:p-4 transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 192px, 320px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 1rem));
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
