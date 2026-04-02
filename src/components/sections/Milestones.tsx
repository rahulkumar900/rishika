"use client";

import { forwardRef, useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const projectMilestones = [
  {
    year: "2019",
    title: "Foundation & Railways",
    description: "Inaugural project managing Eastern Railway Stations and executing platform construction in Katihar, Bihar.",
    icon: "🚂", color: "#F5C842", tag: "Platform Construction", client: "Eastern Railway",
  },
  {
    year: "2020",
    title: "PHED Expansion",
    description: "Expanded core operations into extensive construction projects for the Public Health Engineering and Irrigation Departments.",
    icon: "🏗️", color: "#F5A742", tag: "Civil Construction", client: "PHED, Bihar",
  },
  {
    year: "2021",
    title: "Water Infrastructure",
    description: "Secured two major construction and maintenance projects for RCC Overhead Tanks in the PHED Eastern Zone of Bihar.",
    icon: "💧", color: "#42A5F5", tag: "Water Infrastructure", client: "PHED Eastern Zone",
  },
  {
    year: "2022",
    title: "Civic Maintenance",
    description: "Awarded the Patna Municipal Corporation contract including Ganga Ghat steps and a 2km RCC boundary wall.",
    icon: "🏛️", color: "#66BB6A", tag: "Civic Works", client: "Patna Municipal Corporation",
  },
  {
    year: "2024",
    title: "Har Ghar Nal Ka Jal",
    description: "Secured landmark maintenance tenders at the Panchayat level covering repainting and water filter cleaning services across Bihar & Jharkhand.",
    icon: "🚿", color: "#AB47BC", tag: "Utility Maintenance", client: "State Govt. (Panchayat Level)",
  },
  {
    year: "2025",
    title: "AMRUT 2.0 — 6 Towns",
    description: "Awarded DBOT contract for Water Supply to Chincholi, Chittapur, Wadi, Kamalapur, Sedam & Kalagi in Kalaburagi District. Lumpsum, zero-variation including 5-year O&M.",
    icon: "🏙️", color: "#26C6DA", tag: "Water Supply Scheme", client: "Karnataka UWSSB", status: "Running",
  },
  {
    year: "2025",
    title: "AMRUT 2.0 — 5 Towns",
    description: "Simultaneously secured DBOT contract for Water Supply to Hatti, Kavithal, Manvi, Maski & Turvihal in Kalaburagi Zone — full design, build, operate and transfer responsibility.",
    icon: "🌊", color: "#29B6F6", tag: "Water Supply Scheme", client: "Karnataka UWSSB", status: "Running",
  },
  {
    year: "2025",
    title: "CPWD — Netaji Nagar",
    description: "Awarded Mechanized Housekeeping contract for GPOA Block-3, Netaji Nagar, New Delhi by Central Public Works Department (Govt. of India), NIT No. 06/CE/CVPZ-1/2025.",
    icon: "🏢", color: "#FF7043", tag: "Mechanized Housekeeping", client: "CPWD, Govt. of India", status: "Running",
  },
  {
    year: "2025",
    title: "NTPC Barh — Industrial Housekeeping",
    description: "Secured two-year contract with NTPC Limited for Coal Mill Reject Handling & Housekeeping in Stage-1 at NTPC Barh Power Plant, via GeM Portal (NIT No. 9900313788).",
    icon: "⚡", color: "#FFCA28", tag: "Industrial Housekeeping", client: "NTPC Limited", status: "Running",
  },
  {
    year: "2026",
    title: "Ayodhya OHT — AMRUT 2.0",
    description: "Awarded Work Order by Nagar Nigam Ayodhya for repair of three Overhead Tanks (1250KL, 650KL, 1250KL) under the 24x7 Water Supply Scheme for 11 wards under AMRUT 2.0.",
    icon: "🕌", color: "#66BB6A", tag: "Water Infrastructure", client: "Nagar Nigam Ayodhya", status: "Running",
  },
  {
    year: "2026+",
    title: "Ongoing Expansion",
    description: "Continuously scaling operations with high-grade construction, industrial housekeeping, and specialized redevelopment of critical state infrastructure across India.",
    icon: "🚀", color: "#F5C842", tag: "Future Growth", client: "Multiple Clients",
  },
];

const N = projectMilestones.length;
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── Card content ────────────────────────────────────────────── */
function CardContent({ m }: { m: (typeof projectMilestones)[0] }) {
  return (
    <div
      className="relative rounded-2xl border overflow-hidden group transition-colors duration-500 bg-white/[0.03] hover:bg-white/[0.06]"
      style={{ borderColor: `${m.color}30` }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg,${m.color},${m.color}00)` }}
      />
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
              style={{ background: `${m.color}1a` }}
            >
              {m.icon}
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-1" style={{ color: m.color }}>
                {m.year}
              </div>
              <div
                className="inline-block text-[8px] font-bold uppercase tracking-widest px-2 py-[2px] rounded-sm"
                style={{ background: `${m.color}1a`, color: m.color }}
              >
                {m.tag}
              </div>
            </div>
          </div>
          {(m as { status?: string }).status === "Running" && (
            <span className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-emerald-400 border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 rounded-md shrink-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Live
            </span>
          )}
        </div>
        <h3 className="text-white font-black text-sm md:text-base uppercase tracking-tight leading-tight mb-2">
          {m.title}
        </h3>
        <p className="text-white/45 text-[11px] md:text-sm leading-relaxed mb-3">
          {m.description}
        </p>
        <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: m.color }} />
          <span className="text-white/28 text-[9px] font-mono uppercase tracking-widest truncate">
            {m.client}
          </span>
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 50px ${m.color}0a` }}
      />
    </div>
  );
}

/* ─── Milestone row (wraps both mobile & desktop layouts) ─────── */
interface RowProps {
  m: (typeof projectMilestones)[0];
  i: number;
  isLeft: boolean;
  isActive: boolean;
}

const MilestoneRow = forwardRef<HTMLDivElement, RowProps>(
  ({ m, i, isLeft, isActive }, ref) => {
    const dotStyle = {
      borderColor: isActive ? m.color : "#333",
      background: "#050505",
      boxShadow: isActive ? `0 0 18px ${m.color}90` : "none",
      transition: "all 0.45s ease",
    };
    const innerDotBg = { background: isActive ? m.color : "#444", transition: "background 0.45s" };

    return (
      <div ref={ref}>
        {/* ══ MOBILE (left spine, full-width cards) ══ */}
        {/*
          The spine lives at left-4 (16px) in the container.
          The dot is absolutely placed at left-4 -translate-x-1/2 so it
          sits exactly centred on the spine. The card uses pl-10 to clear it.
        */}
        <div className="relative md:hidden">
          {/* Dot — pinned to the spine */}
          <motion.div
            initial={false}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0.25 }}
            transition={{ duration: 0.4, ease }}
            className="absolute left-4 -translate-x-1/2 top-5 z-10 w-4 h-4 rounded-full border-2 flex items-center justify-center"
            style={dotStyle}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={innerDotBg} />
          </motion.div>

          {/* Card — offset right of the spine */}
          <motion.div
            initial={false}
            animate={isActive ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 28, scale: 0.97 }}
            transition={{ duration: 0.6, ease }}
            className="pl-10"
          >
            <CardContent m={m} />
          </motion.div>
        </div>

        {/* ══ DESKTOP (alternating L/R) ══ */}
        <div className="hidden md:flex items-center w-full">
          {/* Left zone */}
          <div className="flex-1 pr-3">
            {isLeft ? (
              <motion.div
                initial={false}
                animate={isActive ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -36, scale: 0.97 }}
                transition={{ duration: 0.65, ease }}
              >
                <CardContent m={m} />
              </motion.div>
            ) : <div />}
          </div>

          {/* Centre connector zone */}
          <div className="relative shrink-0 flex items-center justify-center" style={{ width: 96, height: 48 }}>
            {/* Arm — only toward the card side */}
            <motion.div
              initial={false}
              animate={isActive ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className={`absolute top-1/2 -translate-y-1/2 h-px ${
                isLeft ? "left-0 right-1/2 origin-left" : "left-1/2 right-0 origin-right"
              }`}
              style={{ background: `${m.color}60` }}
            />
            {/* Dot */}
            <motion.div
              initial={false}
              animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0.2 }}
              transition={{ duration: 0.4, ease }}
              className="relative z-10 w-5 h-5 rounded-full border-2 flex items-center justify-center"
              style={dotStyle}
            >
              <div className="w-2 h-2 rounded-full" style={innerDotBg} />
            </motion.div>
          </div>

          {/* Right zone */}
          <div className="flex-1 pl-3">
            {!isLeft ? (
              <motion.div
                initial={false}
                animate={isActive ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 36, scale: 0.97 }}
                transition={{ duration: 0.65, ease }}
              >
                <CardContent m={m} />
              </motion.div>
            ) : <div />}
          </div>
        </div>
      </div>
    );
  }
);
MilestoneRow.displayName = "MilestoneRow";

/* ─── Main export ─────────────────────────────────────────────── */
export function Milestones() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>(Array(N).fill(null));
  // Normalized [0-1] threshold for each dot: dotOffsetTop / containerHeight
  const thresholdsRef = useRef<number[]>(Array.from({ length: N }, (_, i) => i / (N - 1)));
  const [activeCount, setActiveCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 90%", "end 60%"],
  });

  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 18,
    restDelta: 0.001,
  });

  /* Measure real dot positions after layout */
  useEffect(() => {
    const measure = () => {
      const container = timelineRef.current;
      if (!container) return;
      const containerH = container.offsetHeight;
      if (containerH === 0) return;

      thresholdsRef.current = rowRefs.current.map((el) => {
        if (!el) return 0;
        // Centre of the row relative to container top
        const offsetMid = el.offsetTop + el.offsetHeight / 2;
        return offsetMid / containerH;
      });
    };

    // Measure after paint
    measure();
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 500);

    const ro = new ResizeObserver(measure);
    if (timelineRef.current) ro.observe(timelineRef.current);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ro.disconnect();
    };
  }, []);

  /* Subscribe to the spring and update activeCount */
  useEffect(() => {
    return lineScaleY.on("change", (v) => {
      let count = 0;
      thresholdsRef.current.forEach((t) => {
        if (v >= t) count++;
      });
      setActiveCount(count);
    });
  }, [lineScaleY]);

  const hVp = { once: true, amount: 0.4 };

  return (
    <section
      id="history"
      className="bg-[#050505] relative border-t border-white/10 py-24 md:py-36 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[50vh] rounded-full bg-primary/[0.04] blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[30vw] h-[28vh] rounded-full bg-blue-400/[0.035] blur-[110px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={hVp} transition={{ duration: 0.8, ease }}
            className="text-primary text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] mb-4 opacity-70"
          >
            — Our Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={hVp} transition={{ duration: 1, ease, delay: 0.1 }}
            className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]"
          >
            Project<br /><span className="text-primary">History.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={hVp} transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="w-16 h-0.5 bg-primary mx-auto mt-8 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={hVp} transition={{ duration: 0.8, ease, delay: 0.45 }}
            className="text-white/35 text-sm md:text-base mt-6 max-w-xl mx-auto leading-relaxed"
          >
            From a single railway contract in 2019 to 11 live projects across India — a decade of growth, trust, and execution.
          </motion.p>
        </div>

        {/* ── Timeline container ── */}
        {/*
          Mobile:  spine at left-[10px], cards padded via pl-8
          Desktop: spine at left-1/2 (center)
        */}
        <div ref={timelineRef} className="relative">

          {/* Ghost spine track — left-4 (16px) on mobile, centered on desktop */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.07] rounded-full" />

          {/* Animated spine fill — scaleY driven by spring */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden rounded-full pointer-events-none">
            <motion.div
              style={{
                scaleY: lineScaleY,
                transformOrigin: "top",
                height: "100%",
                width: "100%",
                background:
                  "linear-gradient(to bottom,#F5C842,#F5A742,#42A5F5,#66BB6A,#AB47BC,#26C6DA,#29B6F6,#FF7043,#FFCA28,#66BB6A,#F5C842)",
                opacity: 0.85,
                filter: "drop-shadow(0 0 3px #F5C84288)",
              }}
            />
          </div>

          {/* Milestone rows */}
          <div className="flex flex-col gap-8 md:gap-10">
            {projectMilestones.map((m, i) => (
              <MilestoneRow
                key={i}
                ref={(el) => { rowRefs.current[i] = el; }}
                m={m}
                i={i}
                isLeft={i % 2 === 0}
                isActive={i < activeCount}
              />
            ))}
          </div>

          {/* End cap — appears after all cards active */}
          <motion.div
            initial={false}
            animate={activeCount >= N ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, ease }}
            className="flex justify-center mt-14"
          >
            <div className="flex flex-col items-center gap-3">
              <motion.div
                animate={{ boxShadow: ["0 0 8px #F5C842aa", "0 0 28px #F5C842cc", "0 0 8px #F5C842aa"] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                className="w-4 h-4 rounded-full bg-primary"
              />
              <span className="text-primary font-mono text-[9px] uppercase tracking-widest opacity-50">
                Growing Forward
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
