"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { useRef } from "react";

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    // start tracking when section hits the top, stop when section bottom hits viewport bottom
    offset: ["start start", "end end"]
  });

  // Animate a number from 0 to 100
  const progress100 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Create a template string evaluated every frame by the browser.
  // When progress = 100, x = calc(-100% + 100vw). 
  // This physically locks the rightmost edge of the track EXACTLY to the right edge of the screen!
  const x = useMotionTemplate`calc(-${progress100}% + ${progress100}vw)`;

  return (
    <section 
      id="projects" 
      ref={targetRef} 
      className="relative bg-[#050505] h-[400vh]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Massive Background Title */}
        <div className="absolute top-20 left-10 text-white/5 text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
          FEATURED EXECUTIONS
        </div>

        <motion.div 
          style={{ x }} 
          className="flex w-max relative z-10 h-[70vh] items-center"
        >
          {/* Spacer before content */}
          <div className="w-[10vw] shrink-0 h-full" />
          
          {/* Intro Typography Slide */}
          <div className="w-[85vw] md:w-[40vw] shrink-0 flex flex-col justify-center h-full mr-10 md:mr-32">
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-white leading-[0.8]">
              The <br/><span className="text-primary italic font-serif">Work.</span>
            </h2>
            <div className="w-20 h-1 bg-primary mt-12 mb-8" />
            <p className="text-white/50 text-xl md:text-2xl font-medium max-w-md leading-relaxed">
              Highlighting major infrastructural transformations spanning from critical railway lines to massive public sanitation projects.
            </p>
          </div>

          {/* Project Horizontal Slides */}
          <div className="flex gap-10">
            {projectsData.map((project) => (
              <div key={project.slug} className="w-[85vw] md:w-[60vw] lg:w-[45vw] shrink-0 h-[60vh] md:h-[75vh] relative group flex flex-col justify-center">
                <Link href={`/projects/${project.slug}`} className="block relative w-full h-full overflow-hidden bg-white/5 border border-white/10">
                  <div 
                    className="w-full h-full bg-cover bg-center grayscale mix-blend-luminosity opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  
                  {/* Heavy Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80" />

                  {/* Live Badge for running projects */}
                  {(project as { status?: string }).status === "Running" && (
                    <div className="absolute top-8 left-8 flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/50 text-emerald-400 font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      Live
                    </div>
                  )}

                  {/* Overlay Text Details */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="overflow-hidden">
                      <h3 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        {project.title}
                      </h3>
                    </div>
                    <div className="overflow-hidden mt-2 md:mt-4">
                      <div className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        {project.category} &mdash; {project.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating View Button */}
                  <div className="absolute top-8 right-8 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_30px_rgba(234,179,8,0.3)] text-[#050505]">
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Massive Outro Spacer */}
          {/* This ensures the very last card is fully pulled into the center/left of the screen BEFORE the section un-pins, preventing the abrupt jump to the next section. */}
          <div className="w-[10vw] md:w-[30vw] shrink-0 h-full pointer-events-none" />
          
        </motion.div>
      </div>
    </section>
  );
}
