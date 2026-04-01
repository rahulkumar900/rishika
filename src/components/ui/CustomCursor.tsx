"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Track mouse coordinates directly on the MotionValue for performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the raw mouse coordinates using a spring
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  useEffect(() => {
    // Determine if the device has a fine pointer (i.e. not a touch device)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    
    // Only show the custom cursor on non-touch devices
    if (mediaQuery.matches) {
      setIsVisible(true);
      
      const updateMousePosition = (e: MouseEvent) => {
        // Center the cursor dot on the mouse
        mouseX.set(e.clientX - 10);
        mouseY.set(e.clientY - 10);
      };

      window.addEventListener("mousemove", updateMousePosition);
      
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
    />
  );
}
