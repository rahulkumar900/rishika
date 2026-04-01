"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aggressive fake loading simulation mapping 0 to 100 in ~1.5 seconds
    let startTime: number | null = null;
    const duration = 1500; // ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate easing function (easeOutQuad) for the natural slowdown at the end
      const t = Math.min(1, elapsed / duration);
      const easeValue = t * (2 - t);
      
      const currentProgress = Math.floor(easeValue * 100);
      setProgress(currentProgress);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setLoading(false), 200); // Tiny pause at 100% before exit
      }
    };

    requestAnimationFrame(animate);
    
    // Safety fallback
    const fallback = setTimeout(() => setLoading(false), duration + 1000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          // Slide up and out when exiting
          exit={{ y: "-100vh" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#050505] flex items-end justify-between p-10 md:p-20 overflow-hidden"
        >
          {/* Subtle spinning indicator */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 md:w-16 md:h-16 border-t-2 border-l-2 border-white rounded-full mb-4"
          />

          {/* Massive Number */}
          <div className="flex items-baseline">
            <motion.div 
              // Tiny scale pop when hitting 100
              animate={progress === 100 ? { scale: 1.05, color: "#eab308" } : { scale: 1, color: "#ffffff" }}
              transition={{ duration: 0.3 }}
              className="text-[25vw] leading-none font-black tracking-tighter"
            >
              {progress}
            </motion.div>
            <span className="text-[10vw] font-black text-primary leading-none ml-2 mb-[4vw]">%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
