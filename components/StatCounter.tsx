"use client";

import React, { useEffect, useRef } from "react";
import { useMotionValue, useInView, animate } from "framer-motion";

interface StatCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function StatCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString("en-IN")}${suffix}`;
        }
      },
    });
    return controls.stop;
  }, [isInView, target, prefix, suffix, duration, motionValue]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
