"use client";

import React from "react";
import Image from "next/image";

const partners = [
  { name: "State Bank of India", logo: "/state-bank-of-india-logo.svg", className: "h-10 w-32 md:h-12 md:w-40" },
  { name: "HDFC Bank", logo: "/hdfc-bank-logo.svg", className: "h-10 w-32 md:h-12 md:w-40" },
  { name: "ICICI Bank", logo: "/icici-1.svg", className: "h-16 w-48 md:h-20 md:w-56" },
  { name: "Axis Bank", logo: "/axis-bank-logo-1.svg", className: "h-10 w-32 md:h-12 md:w-40" },
  { name: "Kotak Mahindra Bank", logo: "/Kotak Mahindra Bank.svg", className: "h-16 w-48 md:h-20 md:w-56" },
  { name: "Bajaj Finserv", logo: "/bajaj-finserv-1.svg", className: "h-10 w-32 md:h-12 md:w-40" },
];

// Duplicate multiple times for a seamless infinite loop even on ultra-wide screens
const allPartners = [...partners, ...partners, ...partners, ...partners];

export default function PartnerMarquee() {
  return (
    <section id="partners" className="py-16 border-y border-slate-200 bg-[#FDFBF7] overflow-hidden">
      <div className="text-center mb-10 px-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 font-semibold">
          Partnering with India's leading Banks &amp; NBFCs
        </p>
      </div>

      {/* Marquee Track */}
      <div className="marquee-track relative overflow-hidden flex items-center">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

        {/* 
          We use a flex container that holds our items and animates them leftwards.
          'gap-16 md:gap-32' provides perfect spacing between the logos as requested.
        */}
        <div className="flex w-max animate-marquee gap-16 md:gap-32 py-4 px-8 items-center">
          {allPartners.map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer"
            >
              {partner.logo ? (
                <div className={`relative flex items-center justify-center ${partner.className || "h-10 w-32 md:h-12 md:w-40"}`}>
                  <Image 
                    src={partner.logo} 
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-xl font-bold text-slate-400 whitespace-nowrap">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}