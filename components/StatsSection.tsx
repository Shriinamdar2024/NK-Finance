"use client";

import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { StatCounter } from "./StatCounter";
import { TrendingUp, Users, Handshake, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Happy Clients",
    target: 500,
    suffix: "+",
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
  },
  {
    icon: TrendingUp,
    label: "Loans Disbursed",
    prefix: "₹",
    target: 50,
    suffix: "Cr+",
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
  },
  {
    icon: Handshake,
    label: "Banking Partners",
    target: 15,
    suffix: "+",
    color: "text-sky-600",
    bg: "bg-sky-50 border-sky-100",
  },
  {
    icon: Award,
    label: "Years Experience",
    target: 8,
    suffix: "+",
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-100",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#FDFBF7]">
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* Subtle BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-semibold">
            Trust &amp; Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3">
            Numbers that speak for themselves
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className={`p-6 rounded-3xl border text-center group hover:scale-[1.03] transition-transform duration-300 shadow-sm bg-white ${stat.bg.split(' ')[1]}`}>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mx-auto mb-4 ${stat.bg}`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <p className={`text-3xl sm:text-4xl font-extrabold mb-1 ${stat.color}`}>
                    <StatCounter
                      target={stat.target}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix ?? ""}
                      duration={2.2}
                    />
                  </p>
                  <p className="text-xs text-neutral-600 font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
