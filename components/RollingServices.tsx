"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IndianRupee, Sparkles } from "lucide-react";

const services = [
  {
    id: "loans",
    title: "Loans & Credit",
    leftText: (
      <>
        Tailored credit solutions mapping your <strong>unique financial needs</strong>.
      </>
    ),
    rightText: (
      <>
        Access a wide range of <strong>personal, business, and property loans</strong>. We coordinate with multiple banking partners to get you the <strong>best interest rates</strong> and flexible repayment terms.
      </>
    )
  },
  {
    id: "quick",
    title: "Quick Processing",
    leftText: (
      <>
        Experience <strong>seamless approvals</strong> with our digital-first approach.
      </>
    ),
    rightText: (
      <>
        Our end-to-end digital documentation and real-time bank coordination ensure <strong>48-hour pre-approvals</strong>. <strong>Zero hidden charges</strong> and PAN India coverage.
      </>
    )
  },
  {
    id: "insurance",
    title: "Insurance",
    leftText: (
      <>
        <strong>Comprehensive coverage</strong> to protect everything you've built.
      </>
    ),
    rightText: (
      <>
        Safeguard your family's future with our <strong>life, health, motor, and loan protection plans</strong>. We help you choose policies with <strong>maximum benefits</strong> and seamless claim settlement.
      </>
    )
  },
  {
    id: "investments",
    title: "Investments",
    leftText: (
      <>
        Grow your wealth systematically with <strong>market-linked instruments</strong>.
      </>
    ),
    rightText: (
      <>
        Navigate market complexities with our <strong>goal-based investing strategies</strong>. From <strong>Mutual Funds and SIPs</strong> to <strong>Fixed Deposits and Bonds</strong>, we build resilient portfolios.
      </>
    )
  },
  {
    id: "planning",
    title: "Financial Planning",
    leftText: (
      <>
        <strong>End-to-end advisory</strong> mapping your financial life journey.
      </>
    ),
    rightText: (
      <>
        Strategic <strong>wealth creation</strong> and <strong>debt management</strong>. We handle <strong>retirement planning</strong> and <strong>tax optimization</strong> so you can enjoy tomorrow's peace of mind on today's budget.
      </>
    )
  }
];

export default function RollingServices() {
  const ITEM_HEIGHT = 80;
  // We duplicate the services 3 times to create a seamless infinite scroll column
  const extendedServices = [...services, ...services, ...services];

  // Start in the middle block to have items above and below
  const [activeIndex, setActiveIndex] = useState(services.length);
  const [isSnapping, setIsSnapping] = useState(false);

  // Auto-play the rolling effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const actualIndex = activeIndex % services.length;

  return (
    <section className="relative w-full h-screen min-h-[700px] bg-[#1a1111] overflow-hidden flex items-center justify-center pb-10">
      {/* Background SVG */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/bg.svg')" }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">

        {/* Left Text */}
        <div className="hidden md:flex flex-col justify-center h-full col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${actualIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                {services[actualIndex].leftText}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center Column - Flat Infinite Scroll with Fade Mask */}
        <div className="relative h-full flex flex-col justify-center items-center col-span-1 md:col-span-6 overflow-visible">

          {/* Centered Flex Container mapping the Icon and Text side-by-side */}
          <div className="flex items-center gap-4 md:gap-6 w-fit mx-auto">

            {/* Fixed Icon */}
            <div className="shrink-0 flex items-center justify-center h-[80px]">
              <IndianRupee className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
            </div>

            {/* Masked Viewport */}
            <div
              className="relative h-[400px] overflow-hidden"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
              }}
            >
              <motion.div
                className="flex flex-col"
                // 160px offsets the top so the active item (80px tall) is perfectly centered at 200px
                animate={{ y: 160 - (activeIndex * ITEM_HEIGHT) }}
                transition={isSnapping ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                onAnimationComplete={() => {
                  // Infinite loop logic: When we reach the start of the 3rd block, seamlessly snap back to the 2nd block
                  if (activeIndex >= services.length * 2) {
                    setIsSnapping(true);
                    setActiveIndex(activeIndex - services.length);
                    setTimeout(() => setIsSnapping(false), 50);
                  }
                }}
              >
                {extendedServices.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={`${service.id}-${index}`}
                      className="h-[80px] flex items-center shrink-0 whitespace-nowrap pr-2"
                    >
                      <h3 className={`font-semibold text-3xl md:text-[2.5rem] tracking-tight transition-colors duration-500 ${isActive ? "text-white" : "text-white/40"
                        }`}>
                        {service.title}
                      </h3>
                    </div>
                  );
                })}
              </motion.div>
            </div>

          </div>

        </div>

        {/* Right Text */}
        <div className="hidden md:flex flex-col justify-center h-full pl-8 col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${actualIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {services[actualIndex].rightText}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Text view - only shows on small screens */}
        <div className="md:hidden flex flex-col col-span-1 absolute bottom-36 left-6 right-6 h-48 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${actualIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-white/90 font-medium mb-3 text-lg">{services[actualIndex].leftText}</p>
              <p className="text-white/60 text-sm leading-relaxed">{services[actualIndex].rightText}</p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Explore Services Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-3 md:px-8 md:py-3.5 rounded-[6px] md:rounded-[16px] text-sm md:text-base font-semibold transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group">
          <span>Explore all services</span>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-black" />
        </button>
      </div>

    </section>
  );
}
