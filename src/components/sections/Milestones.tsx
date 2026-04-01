"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectMilestones = [
  {
    year: "2019",
    title: "Foundation & Railways",
    description: "Inaugural project managing Eastern Railway Stations and executing platform construction in Katihar.",
    icon: "🚂",
    color: "#F5C842",
  },
  {
    year: "2020",
    title: "PHED Expansion",
    description: "Expanded core operations into extensive construction projects for the Public Health Engineering and Irrigation Departments.",
    icon: "🏗️",
    color: "#F5A742",
  },
  {
    year: "2021",
    title: "Water Infrastructure",
    description: "Secured two major construction and maintenance projects for RCC Overhead Tanks in the PHED Eastern Zone of Bihar.",
    icon: "💧",
    color: "#42A5F5",
  },
  {
    year: "2022",
    title: "Civic Maintenance",
    description: "Awarded the Patna Municipal Corporation contract including Ganga Ghat steps and a 2km RCC boundary wall.",
    icon: "🏛️",
    color: "#66BB6A",
  },
  {
    year: "2024",
    title: "Har Ghar Nal Ka Jal",
    description: "Secured landmark maintenance tenders at the Panchayat level: repainting and water filter cleaning services.",
    icon: "🚿",
    color: "#AB47BC",
  },
  {
    year: "2025",
    title: "AMRUT 2.0 — 6 Towns",
    description: "Awarded DBOT contract to provide Water Supply Scheme to Chincholi, Chittapur, Wadi, Kamalapur, Sedam & Kalagi in Kalaburagi District under AMRUT 2.0. Lumpsum, zero-variation tender including 5-year O&M.",
    icon: "🏙️",
    color: "#26C6DA",
    status: "Running",
  },
  {
    year: "2025",
    title: "AMRUT 2.0 — 5 Towns",
    description: "Simultaneously secured DBOT contract for Water Supply to Hatti, Kavithal, Manvi, Maski & Turvihal towns in Kalaburagi Zone under AMRUT 2.0 — with full design, build, operate and transfer responsibility.",
    icon: "🌊",
    color: "#29B6F6",
    status: "Running",
  },
  {
    year: "2026",
    title: "Ongoing Expansion",
    description: "Continuously providing high-grade construction services and specialized redevelopment of massive state infrastructure.",
    icon: "🚀",
    color: "#F5C842",
  },
];

// S-curve road path in a 320×1600 viewBox — 6 curves for 8 milestones
const ROAD_PATH =
  "M 160 0 C 160 80, 40 120, 40 200 C 40 280, 280 320, 280 400 C 280 480, 40 520, 40 600 C 40 680, 280 720, 280 800 C 280 880, 40 920, 40 1000 C 40 1080, 280 1120, 280 1200 C 280 1280, 160 1340, 160 1400 C 160 1460, 160 1530, 160 1600";

const MILESTONE_POSITIONS = projectMilestones.map(
  (_, i) => i / (projectMilestones.length - 1)
);

// Simple lerp for smoothing
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function Milestones() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Raw & smoothed progress stored in refs for RAF (avoids stale closure)
  const rawProgress = useRef(0);
  const smoothedProgress = useRef(0);
  const rafRef = useRef<number>(0);

  // Car state driven by RAF — stored in state only for React re-render
  const [carPos, setCarPos] = useState({ x: 160, y: 0 });
  const [carAngle, setCarAngle] = useState(90);
  const [trailProgress, setTrailProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dotPositions, setDotPositions] = useState<{ x: number; y: number }[]>([]);

  // ── Compute dot positions once path is in DOM ──────────────────────────────
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    setDotPositions(
      MILESTONE_POSITIONS.map((t) => {
        const pt = path.getPointAtLength(t * len);
        return { x: pt.x, y: pt.y };
      })
    );
  }, []);

  // ── Scroll handler: reads section offset, updates rawProgress ──────────────
  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const sectionH = section.offsetHeight;
    const viewH = window.innerHeight;
    // progress goes 0→1 as section scrolls from "top at viewport bottom" to "bottom at viewport top"
    // We use: start = section top hits viewport top, end = section bottom hits viewport top
    const scrolled = -rect.top;
    const total = sectionH - viewH;
    const progress = Math.min(1, Math.max(0, scrolled / total));
    rawProgress.current = progress;
  }, []);

  // ── RAF loop: smooths progress and updates car position ────────────────────
  useEffect(() => {
    const path = pathRef.current;

    const tick = () => {
      // Lerp toward raw target (0.1 = speed of catch-up)
      smoothedProgress.current = lerp(smoothedProgress.current, rawProgress.current, 0.08);
      const val = smoothedProgress.current;

      if (path) {
        const totalLen = path.getTotalLength();
        const pt = path.getPointAtLength(val * totalLen);

        // Tangent angle
        const delta = 3;
        const p1 = path.getPointAtLength(Math.max(0, val * totalLen - delta));
        const p2 = path.getPointAtLength(Math.min(totalLen, val * totalLen + delta));
        const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);

        setCarPos({ x: pt.x, y: pt.y });
        setCarAngle(angle);
        setTrailProgress(val);

        // Which milestone is active
        let newActive = -1;
        MILESTONE_POSITIONS.forEach((pos, i) => {
          if (val >= pos - 0.04) newActive = i;
        });
        setActiveIndex(newActive);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Wire up scroll listener (works with Lenis because Lenis fires scroll events) ──
  useEffect(() => {
    // Lenis dispatches a custom 'scroll' event AND also updates window.scrollY,
    // so listening to the window 'scroll' event still works.
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial value
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const easeExpoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section
      id="history"
      ref={sectionRef}
      className="bg-[#050505] relative border-t border-white/10"
      style={{ minHeight: "600vh" }}
    >
      {/* ── Sticky viewport ─────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Ambient bg glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        {/* ── Title ───────────────────────────────────────────── */}
        <div className="absolute top-6 left-0 w-full flex flex-col items-start px-4 md:px-16 z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeExpoOut }}
          >
            <p className="text-primary text-[10px] md:text-sm font-mono uppercase tracking-[0.3em] mb-1 opacity-70">
              — Our Journey
            </p>
            <h2 className="text-white text-3xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
              Project<br />
              <span className="text-primary">History.</span>
            </h2>
          </motion.div>
        </div>

        {/* ── Main content area ───────────────────────────────── */}
        <div className="relative w-full h-full flex items-center justify-center">

          {/* SVG Road */}
          {/* On mobile: pinned to the right side. On desktop: centered */}
          <div className="absolute inset-0 flex items-center md:justify-center justify-end pointer-events-none">
            <svg
              viewBox="0 -100 320 1800"
              className="h-full max-h-screen w-auto"
              style={{ maxWidth: "clamp(110px, 35vw, 220px)" }}
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Shadow glow */}
              <path d={ROAD_PATH} stroke="rgba(255,255,255,0.03)" strokeWidth="48" fill="none" strokeLinecap="round" />
              {/* Road base */}
              <path d={ROAD_PATH} stroke="#1a1a1a" strokeWidth="32" fill="none" strokeLinecap="round" />
              {/* Road surface */}
              <path d={ROAD_PATH} stroke="#252525" strokeWidth="28" fill="none" strokeLinecap="round" />
              {/* Gold edge glow */}
              <path d={ROAD_PATH} stroke="#F5C842" strokeWidth="30" fill="none" strokeLinecap="round" strokeOpacity="0.13" />
              {/* Dashed centre line */}
              <path d={ROAD_PATH} stroke="#F5C842" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="14 12" strokeOpacity="0.45" />

              {/* Driven trail – drawn via stroke-dasharray trick */}
              <path
                d={ROAD_PATH}
                stroke="#F5C842"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: "1 0",
                  strokeDashoffset: 0,
                  // Use CSS custom property approach: pathLength-based clip
                  opacity: 0.7,
                  filter: "drop-shadow(0 0 5px #F5C842aa)",
                }}
                // We drive this via a clipPath trick or via pathLength
                // pathLength + strokeDasharray allow % progress
                pathLength={1}
                strokeDasharray={`${trailProgress} ${1 - trailProgress}`}
                strokeDashoffset={0}
              />

              {/* Hidden measurement path */}
              <path
                ref={pathRef}
                d={ROAD_PATH}
                stroke="none"
                fill="none"
                style={{ visibility: "hidden" }}
              />

              {/* Milestone dots */}
              {dotPositions.map((pos, i) => {
                const isActive = i <= activeIndex;
                const m = projectMilestones[i];
                return (
                  <g key={i}>
                    <circle
                      cx={pos.x} cy={pos.y}
                      r={isActive ? 13 : 9}
                      fill={isActive ? `${m.color}20` : "transparent"}
                      stroke={isActive ? m.color : "#3a3a3a"}
                      strokeWidth={isActive ? 2 : 1.5}
                      style={{ transition: "all 0.5s ease" }}
                    />
                    <circle
                      cx={pos.x} cy={pos.y}
                      r={isActive ? 5.5 : 3.5}
                      fill={isActive ? m.color : "#2a2a2a"}
                      style={{ transition: "all 0.5s ease" }}
                    />
                    {/* Pulse ring when active */}
                    {i === activeIndex && (
                      <circle
                        cx={pos.x} cy={pos.y}
                        r={20}
                        fill="none"
                        stroke={m.color}
                        strokeWidth={1}
                        opacity={0.4}
                        style={{ animation: "ping 1.5s ease-out infinite" }}
                      />
                    )}
                  </g>
                );
              })}

              {/* ── Car ───────────────────────────────────────── */}
              <g
                transform={`translate(${carPos.x}, ${carPos.y}) rotate(${carAngle}) translate(-24, -15)`}
              >
                {/* Glow */}
                <ellipse cx="24" cy="15" rx="22" ry="12" fill="#F5C842" opacity="0.12" />
                <ellipse cx="24" cy="15" rx="14" ry="8" fill="#F5C842" opacity="0.18" />
                {/* Body */}
                <rect x="2" y="9" width="44" height="14" rx="5" fill="#F5C842" />
                {/* Cabin */}
                <rect x="11" y="3" width="24" height="12" rx="3" fill="#FFE082" />
                {/* Windows */}
                <rect x="13" y="5" width="9" height="7" rx="1.5" fill="#111" opacity="0.8" />
                <rect x="24" y="5" width="9" height="7" rx="1.5" fill="#111" opacity="0.8" />
                {/* Wheels */}
                <circle cx="11" cy="23" r="5.5" fill="#111" />
                <circle cx="11" cy="23" r="2.5" fill="#555" />
                <circle cx="37" cy="23" r="5.5" fill="#111" />
                <circle cx="37" cy="23" r="2.5" fill="#555" />
                {/* Headlights */}
                <ellipse cx="46" cy="14" rx="2" ry="1.5" fill="#fff9e0" opacity="0.95" />
                <ellipse cx="46" cy="14" rx="5" ry="2.5" fill="#fff9e0" opacity="0.2" />
                {/* Taillights */}
                <ellipse cx="2" cy="14" rx="2" ry="1.5" fill="#ff3333" opacity="0.9" />
              </g>
            </svg>
          </div>

          {/* ── Mobile: Active card panel (left side, replaces left/right columns) ── */}
          <div className="md:hidden absolute left-0 top-0 h-full w-[58%] flex flex-col justify-center px-4 pointer-events-none">
            <AnimatePresence mode="wait">
              {activeIndex >= 0 && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.4, ease: easeExpoOut }}
                  className="flex flex-col gap-2"
                >
                  <div
                    className="text-3xl"
                    style={{ filter: `drop-shadow(0 2px 12px ${projectMilestones[activeIndex].color}88)` }}
                  >
                    {projectMilestones[activeIndex].icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="font-mono text-xs uppercase tracking-[0.25em]"
                      style={{ color: projectMilestones[activeIndex].color }}
                    >
                      {projectMilestones[activeIndex].year}
                    </div>
                    {(projectMilestones[activeIndex] as { status?: string }).status === "Running" && (
                      <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 px-1.5 py-0.5">
                        <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" /></span>
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-black text-xl uppercase tracking-tight leading-tight">
                    {projectMilestones[activeIndex].title}
                  </h3>
                  <p className="text-white/55 text-xs leading-relaxed max-w-[200px]">
                    {projectMilestones[activeIndex].description}
                  </p>
                  <div
                    className="mt-1 h-px w-10"
                    style={{
                      background: `linear-gradient(to right, ${projectMilestones[activeIndex].color}88, ${projectMilestones[activeIndex].color}00)`,
                    }}
                  />
                </motion.div>
              )}
              {activeIndex < 0 && (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-2"
                >
                  <div className="text-white/20 text-xs font-mono uppercase tracking-widest">Start scrolling</div>
                  <div className="text-white/10 text-sm font-black uppercase tracking-tight">Our journey<br/>begins here</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Desktop: Cards LEFT (even index milestones) ─────────── */}
          <div className="hidden md:flex absolute left-0 top-0 w-[44%] h-full flex-col justify-around py-24 px-8 pointer-events-none">
            {projectMilestones.map((m, i) => {
              if (i % 2 !== 0) return null;
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              return (
                <motion.div
                  key={i}
                  animate={{
                    opacity: isActive ? 1 : isPast ? 0.28 : 0.12,
                    x: isActive ? 0 : -8,
                    scale: isActive ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.5, ease: easeExpoOut }}
                  className="text-right"
                >
                  <div className="inline-block text-2xl md:text-3xl mb-1" style={{ filter: `drop-shadow(0 2px 8px ${m.color}66)` }}>
                    {m.icon}
                  </div>
                  <div className="flex items-center justify-end gap-2 mb-0.5">
                    <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em]" style={{ color: m.color }}>
                      {m.year}
                    </div>
                    {(m as { status?: string }).status === "Running" && (
                      <span className="flex items-center gap-1 text-[8px] font-black uppercase tracking-widest text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 px-1 py-0.5">
                        <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" /></span>
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-black text-sm md:text-xl uppercase tracking-tight leading-tight">
                    {m.title}
                  </h3>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.35 }}
                        className="text-white/55 text-[11px] md:text-sm leading-relaxed mt-1 max-w-[170px] md:max-w-[210px] ml-auto"
                      >
                        {m.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <div className="mt-2 ml-auto h-px w-6 md:w-10" style={{ background: `linear-gradient(to right, ${m.color}00, ${m.color}77)` }} />
                </motion.div>
              );
            })}
          </div>

          {/* ── Desktop: Cards RIGHT (odd index milestones) ──────────── */}
          <div className="hidden md:flex absolute right-0 top-0 w-[44%] h-full flex-col justify-around py-24 px-8 pointer-events-none">
            {projectMilestones.map((m, i) => {
              if (i % 2 !== 1) return null;
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              return (
                <motion.div
                  key={i}
                  animate={{
                    opacity: isActive ? 1 : isPast ? 0.28 : 0.12,
                    x: isActive ? 0 : 8,
                    scale: isActive ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.5, ease: easeExpoOut }}
                  className="text-left"
                >
                  <div className="inline-block text-2xl md:text-3xl mb-1" style={{ filter: `drop-shadow(0 2px 8px ${m.color}66)` }}>
                    {m.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em]" style={{ color: m.color }}>
                      {m.year}
                    </div>
                    {(m as { status?: string }).status === "Running" && (
                      <span className="flex items-center gap-1 text-[8px] font-black uppercase tracking-widest text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 px-1 py-0.5">
                        <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" /></span>
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-black text-sm md:text-xl uppercase tracking-tight leading-tight">
                    {m.title}
                  </h3>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.35 }}
                        className="text-white/55 text-[11px] md:text-sm leading-relaxed mt-1 max-w-[170px] md:max-w-[210px]"
                      >
                        {m.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <div className="mt-2 h-px w-6 md:w-10" style={{ background: `linear-gradient(to right, ${m.color}77, ${m.color}00)` }} />
                </motion.div>
              );
            })}
          </div>

          {/* ── Active badge (bottom center) — desktop only ────── */}
          <AnimatePresence mode="wait">
            {activeIndex >= 0 && (
              <motion.div
                key={activeIndex}
                className="hidden md:block absolute bottom-7 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
                initial={{ opacity: 0, y: 16, scale: 0.88 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.92 }}
                transition={{ duration: 0.45, ease: easeExpoOut }}
              >
                <div
                  className="rounded-2xl px-5 py-3 backdrop-blur-xl border text-center"
                  style={{
                    background: "rgba(8,8,8,0.88)",
                    borderColor: `${projectMilestones[activeIndex].color}40`,
                    boxShadow: `0 0 30px ${projectMilestones[activeIndex].color}18, inset 0 1px 0 rgba(255,255,255,0.04)`,
                  }}
                >
                  <div
                    className="text-2xl font-black tracking-[0.15em] font-mono"
                    style={{ color: projectMilestones[activeIndex].color }}
                  >
                    {projectMilestones[activeIndex].year}
                  </div>
                  <div className="text-white font-bold text-xs uppercase tracking-widest">
                    {projectMilestones[activeIndex].title}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Progress dots — hidden on mobile (replaced by card panel) ── */}
          <div className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 flex-col gap-2 z-20 pointer-events-none">
            {projectMilestones.map((m, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: i === activeIndex ? 1.5 : i < activeIndex ? 1 : 0.7,
                  opacity: i === activeIndex ? 1 : i < activeIndex ? 0.55 : 0.2,
                }}
                transition={{ duration: 0.35 }}
                className="w-2 h-2 rounded-full"
                style={{ background: i === activeIndex ? m.color : i < activeIndex ? m.color : "#ffffff" }}
              />
            ))}
          </div>

          {/* ── Scroll hint ──────────────────────────────────── */}
          <motion.div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            animate={{ opacity: activeIndex >= 0 ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/25 text-[9px] font-mono uppercase tracking-[0.25em]">Scroll to drive</span>
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-px h-7 bg-gradient-to-b from-white/35 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Keyframe for pulse ring */}
      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
