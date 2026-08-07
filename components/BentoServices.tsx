"use client";

import React from "react";
import Link from "next/link";
import { TiltCard } from "./TiltCard";
import { ScrollReveal } from "./ScrollReveal";
import {
  Banknote,
  ShieldCheck,
  TrendingUp,
  Target,
  ArrowUpRight,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Banknote,
    category: "FINANCING",
    title: "Loans & Credit",
    description:
      "Tailored credit solutions for every need — personal, business, property, and machinery.",
    bullets: [
      "Personal & Consumer Loans",
      "Business & Project Loans",
      "Loan Against Property",
      "Car & Two-Wheeler Loans",
    ],
    accent: "from-amber-500/20 to-amber-600/5",
    iconBg: "bg-amber-500/15 border-amber-500/25",
    iconColor: "text-amber-400",
    span: "md:col-span-2",
  },
  {
    icon: Zap,
    category: "FAST-TRACK",
    title: "Quick Processing",
    description:
      "Digital documentation, real-time bank coordination, approvals in days not weeks.",
    bullets: ["48-hr Pre-approval", "Zero Hidden Charges", "PAN India Coverage"],
    accent: "from-indigo-500/15 to-indigo-600/5",
    iconBg: "bg-indigo-500/15 border-indigo-500/25",
    iconColor: "text-indigo-400",
    span: "",
  },
  {
    icon: ShieldCheck,
    category: "PROTECTION",
    title: "Insurance",
    description:
      "Comprehensive coverage to protect everything you've worked hard to build.",
    bullets: [
      "Life & Term Insurance",
      "Health Insurance",
      "Motor Insurance",
      "Loan Protection Plans",
    ],
    accent: "from-emerald-500/15 to-emerald-600/5",
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
    iconColor: "text-emerald-400",
    span: "",
  },
  {
    icon: TrendingUp,
    category: "WEALTH",
    title: "Investments",
    description:
      "Grow your wealth systematically with market-linked and fixed-return instruments.",
    bullets: [
      "Mutual Funds & SIP",
      "Fixed Deposits & Bonds",
      "Goal-Based Investing",
      "Portfolio Review",
    ],
    accent: "from-sky-500/15 to-sky-600/5",
    iconBg: "bg-sky-500/15 border-sky-500/25",
    iconColor: "text-sky-400",
    span: "",
  },
  {
    icon: Target,
    category: "ADVISORY",
    title: "Financial Planning",
    description:
      "End-to-end advisory that maps your financial life — from today's budget to tomorrow's retirement.",
    bullets: [
      "Retirement Planning",
      "Tax Optimization",
      "Wealth Creation Strategy",
      "Debt Management",
    ],
    accent: "from-violet-500/15 to-violet-600/5",
    iconBg: "bg-violet-500/15 border-violet-500/25",
    iconColor: "text-violet-400",
    span: "md:col-span-2 lg:col-span-1",
  },
];

export default function BentoServices() {
  return (
    <section id="services" className="py-28 max-w-6xl mx-auto px-4">
      <ScrollReveal className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold">
          What We Offer
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-4">
          A Complete Financial Portfolio
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
          Comprehensive consultancy designed to support every phase of your
          personal and professional financial journey.
        </p>
      </ScrollReveal>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        style={{ perspective: "1200px" }}
      >
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <ScrollReveal
              key={service.title}
              delay={idx * 0.07}
              className={service.span}
            >
              <TiltCard className={`h-full bg-gradient-to-br ${service.accent} p-7`}>
                {/* Icon + Category */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${service.iconBg}`}
                  >
                    <Icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-slate-500 mt-1">
                    {service.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Bullet list */}
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
                >
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}