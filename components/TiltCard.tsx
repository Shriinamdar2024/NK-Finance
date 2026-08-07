"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className = "", intensity = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / intensity;
    const y = (e.clientY - top - height / 2) / intensity;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: -tilt.y, rotateY: tilt.x }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`rounded-3xl bg-slate-900/50 border border-white/8 backdrop-blur-2xl shadow-2xl cursor-pointer card-glow transition-shadow duration-300 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </motion.div>
  );
}