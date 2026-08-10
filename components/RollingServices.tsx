"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IndianRupee, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "loans",
    title: "Loans & Credit",
    mobileTitle: "Secure loans & credit",
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
    mobileTitle: "Experience quick processing",
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
    mobileTitle: "Get comprehensive insurance",
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
    mobileTitle: "Grow their investments",
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
    mobileTitle: "Master financial planning",
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
  }, [activeIndex]); // Dependency resets timer on manual click

  const actualIndex = activeIndex % services.length;

  return (
    <section className="relative w-full h-[320px] md:h-screen min-h-[320px] md:min-h-[700px] bg-[#1a1111] overflow-hidden flex flex-col md:flex-row items-center justify-center py-[40px] px-[20px] md:p-0 md:pb-10">
      {/* Background SVG */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/bg.svg')" }}
      />

      {/* Dark overlay for text readability - Desktop only */}
      <div className="absolute inset-0 bg-black/40 mix-blend-overlay hidden md:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-0 md:px-6 flex flex-col md:grid md:grid-cols-12 gap-[20px] md:gap-8 items-center justify-center h-full">

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
        <div className="relative h-full flex flex-col justify-center items-center col-span-1 md:col-span-6 overflow-visible w-full gap-[20px] md:gap-0">

          {/* Top Label - Mobile Only */}
          <div className="flex md:hidden flex-row items-center justify-start gap-[10px] w-[344px] h-[12px] pl-[24px]">
            <span className="font-['Poppins'] font-normal text-[10px] leading-[12px] text-white/80">NK Financial helps enterprises</span>
          </div>

          {/* Centered Flex Container mapping the Icon and Text side-by-side */}
          <div className="flex items-center justify-center md:justify-start gap-0 md:gap-6 w-full md:w-fit mx-auto h-[168px] md:h-auto">

            {/* Fixed Icon - Desktop only */}
            <div className="hidden md:flex shrink-0 items-center justify-center h-[80px]">
              <IndianRupee className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
            </div>

            {/* Desktop Viewport */}
            <div
              className="hidden md:block relative h-[400px] overflow-hidden w-auto"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
              }}
            >
              <motion.div
                className="flex flex-col"
                animate={{ y: 160 - (activeIndex * ITEM_HEIGHT) }}
                transition={isSnapping ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                onAnimationComplete={() => {
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
                      key={`${service.id}-${index}-desktop`}
                      onClick={() => setActiveIndex(index)}
                      className="h-[80px] flex items-center justify-start shrink-0 whitespace-nowrap pr-2 cursor-pointer group"
                    >
                      <h3 className={`font-semibold text-[2.5rem] tracking-tight transition-all duration-500 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/60"}`}>
                        {service.title}
                      </h3>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Mobile Viewport */}
            <div className="md:hidden flex flex-row items-center justify-center h-[168px] w-full gap-[12px]">
              
              {/* Fixed Stationary Icon */}
              <div className="w-[12px] flex items-center justify-center shrink-0">
                <IndianRupee className="w-[12px] h-[12px] text-[#F7F3E4]" />
              </div>

              {/* Rolling Text Container */}
              <div className="relative h-[168px] overflow-hidden w-[320px]">
                <motion.div
                  className="flex flex-col w-full"
                  animate={{ y: (168 / 2) - 16 - (activeIndex * 32) }}
                  transition={isSnapping ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                  onAnimationComplete={() => {
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
                        key={`${service.id}-${index}-mobile`}
                        onClick={() => setActiveIndex(index)}
                        className="h-[32px] flex flex-row items-center justify-start shrink-0 whitespace-nowrap cursor-pointer"
                      >
                        <h3 className={`font-['Poppins'] font-medium text-[20px] leading-[24px] tracking-[-0.383px] transition-all duration-300 ${isActive ? "text-[#F7F3E4]" : "text-white/40"}`}>
                          {service.mobileTitle || service.title}
                        </h3>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

            </div>

          </div>

          {/* Mobile Button CTA */}
          <Link href="/services" className="flex md:hidden flex-row justify-center items-center px-[12px] py-[4px] gap-[10px] h-[20px] bg-white rounded-[6px] cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <span className="font-semibold text-[10px] leading-[12px] text-black whitespace-nowrap">Explore all services</span>
            <Sparkles className="w-[10px] h-[10px] text-black" />
          </Link>

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



      </div>

      {/* Explore Services Button */}
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <Link href="/services" className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-3 md:px-8 md:py-3.5 rounded-[6px] md:rounded-[16px] text-sm md:text-base font-semibold transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group">
          <span>Explore all services</span>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-black" />
        </Link>
      </div>

    </section>
  );
}
