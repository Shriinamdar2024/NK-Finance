import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Coins,
  ShieldCheck,
  LineChart,
  FileText,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | NK Financial Consultancy",
  description:
    "Explore our complete suite of services — Loans, Insurance, Investments, Financial Planning, all delivered Simple & Fast.",
};

const servicesList = [
  {
    icon: Coins,
    title: "LOANS",
    desc: "Personal Loan, Business Loan, Loan Against Property, Project Loan, Machinery Loan, Car Loan & more.",
  },
  {
    icon: ShieldCheck,
    title: "INSURANCE",
    desc: "Life Insurance, Health Insurance, Motor Insurance, Loan Protection Insurance & more.",
  },
  {
    icon: LineChart,
    title: "INVESTMENTS",
    desc: "Mutual Funds, SIP, Fixed Deposits, Bonds & other investment solutions.",
  },
  {
    icon: FileText,
    title: "FINANCIAL PLANNING",
    desc: "Retirement Planning, Tax Planning, Wealth Creation & Goal-based Planning.",
  },
  {
    icon: Zap,
    title: "SIMPLE & FAST",
    desc: "Quick Processing, Easy Documentation and Hassle-free Experience.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-neutral-900 antialiased">
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold tracking-widest mb-6 shadow-sm">
              OUR EXPERTISE
            </div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              We provide smart, simple, and trusted financial solutions tailored to meet your personal and business goals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service Grid ── */}
      <section className="pb-28 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={idx * 0.1}>
                <div className="p-6 md:p-10 rounded-3xl md:rounded-[2rem] bg-white border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all text-center h-full group flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] border-2 border-amber-500">
                    <Icon className="w-10 h-10 text-amber-500" />
                  </div>
                  <h2 className="text-xl font-extrabold text-neutral-900 mb-4 tracking-wide uppercase">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
