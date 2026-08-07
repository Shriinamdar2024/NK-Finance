"use client";

import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import Link from "next/link";

const benefits = [
  { title: "Wide Product Range", sub: "Loans, Insurance, Investments & Planning under one roof." },
  { title: "Competitive Rates", sub: "Access to best-in-market rates from 15+ banking partners." },
  { title: "Fast Processing", sub: "Pre-approval within 48 hours, hassle-free documentation." },
  { title: "Personalised Advice", sub: "Tailored strategies — never a one-size-fits-all approach." },
  { title: "Dedicated Support", sub: "Your advisor is always a call or WhatsApp away." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#FDFBF7]">
      {/* Decorative background lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">

          {/* Left: Headline + Quote */}
          <ScrollReveal direction="left" className="lg:max-w-md flex-shrink-0">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3 mb-5">
              Why Choose NK Financial?
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed mb-8">
              We bridge the gap between clients and India's leading national institutions — with total transparency, expert guidance, and absolute commitment to your success.
            </p>

            {/* Quote card */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-sm mb-8">
              <div className="text-3xl text-neutral-300 font-serif leading-none mb-2">&ldquo;</div>
              <p className="text-neutral-800 font-medium text-sm leading-relaxed italic">
                Your Financial Growth, Our Responsibility. We don&apos;t just advise — we partner with you on every step of the journey.
              </p>
              <p className="text-neutral-500 text-xs font-semibold mt-4">— Niranjan Khandekar, Founder</p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-600 hover:text-black hover:border-black transition-all group bg-white"
            >
              Meet the Founder
              <ArrowUpRight className="w-4 h-4 group-hover:text-black transition-colors" />
            </Link>
          </ScrollReveal>

          {/* Right: Benefits List */}
          <div className="flex-1 space-y-3 w-full">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.08} direction="right">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:border-neutral-300 hover:shadow-md transition-all duration-300 group">
                  <div className="mt-0.5 w-8 h-8 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-neutral-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900 mb-0.5">{benefit.title}</p>
                    <p className="text-xs text-neutral-600">{benefit.sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}