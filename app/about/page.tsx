import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import {
  Coins,
  ShieldCheck,
  LineChart,
  FileText,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | NK Financial Consultancy",
  description:
    "Smart solutions for a secure future. Providing simple and trusted financial solutions tailored to meet your personal and business goals.",
};

const services = [
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

const benefits = [
  "Wide Range of Financial Products",
  "Competitive Interest Rates",
  "Quick Processing & Easy Documentation",
  "Personalized Solutions",
  "Expert Guidance & Support",
];

const partners = [
  { name: "SBI", src: "/state-bank-of-india-logo.svg" },
  { name: "HDFC", src: "/hdfc-bank-logo.svg" },
  { name: "ICICI", src: "/icici-1.svg" },
  { name: "Axis Bank", src: "/axis-bank-logo-1.svg" },
  { name: "Kotak Mahindra", src: "/Kotak Mahindra Bank.svg" },
  { name: "Bajaj Finserv", src: "/bajaj-finserv-1.svg" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-neutral-900 antialiased">
      <Navbar />

      {/* ── Hero / Intro ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold tracking-widest mb-6 shadow-sm">
                OUR MISSION
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 leading-[1.1] tracking-tight mb-6 uppercase">
                Smart Solutions For A <span className="text-amber-500">Secure Future</span>
              </h1>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
                We are committed to providing smart, simple and trusted financial solutions tailored to meet your personal and business goals. We partner with leading banks and NBFCs to bring the best financial products right to you.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/image.png"
                  alt="Financial Expertise"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section className="py-20 bg-white border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-amber-500" />
              <h2 className="text-2xl font-bold text-neutral-900 tracking-wider">OUR SERVICES</h2>
              <div className="h-px w-12 bg-amber-500" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl bg-[#FDFBF7] border border-neutral-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all text-center h-full group">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.3)] border-2 border-amber-500">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-extrabold text-neutral-900 mb-3">{service.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{service.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us & Banking Partners ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Why Choose Us */}
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-8 bg-amber-500" />
                  <h2 className="text-2xl font-bold text-neutral-900 tracking-wider">WHY CHOOSE US?</h2>
                </div>
              </ScrollReveal>
              
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} direction="left">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-neutral-900">{benefit}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Banking Partners */}
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-8 bg-amber-500" />
                  <h2 className="text-2xl font-bold text-neutral-900 tracking-wider">OUR BANKING PARTNERS</h2>
                </div>
              </ScrollReveal>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {partners.map((partner, i) => (
                  <ScrollReveal key={i} delay={i * 0.05} direction="up">
                    <div className="h-24 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                      <Image 
                        src={partner.src} 
                        alt={partner.name} 
                        width={120} 
                        height={60} 
                        className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" 
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              
              <ScrollReveal delay={0.4}>
                <div className="mt-8 flex items-start gap-4 p-5 rounded-2xl bg-amber-50 border border-amber-200">
                  <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
                  <p className="text-sm font-semibold text-amber-900">
                    Partnering with Leading Banks & NBFCs to Serve You Better.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact & Quote ── */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Details */}
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold tracking-wider text-amber-500">CONTACT US</h2>
                <div className="h-px w-16 bg-amber-500/50" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="font-bold text-lg tracking-wider">NIRANJAN KHANDEKAR</span>
                </div>
                
                <a href="tel:9373061520" className="flex items-center gap-4 hover:text-amber-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="font-medium tracking-wide">9373061520</span>
                </a>
                
                <a href="mailto:niranjan.khandekar@yandex.com" className="flex items-center gap-4 hover:text-amber-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="font-medium tracking-wide">niranjan.khandekar@yandex.com</span>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="font-medium tracking-wide">Serving with Trust. Growing Together.</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal direction="right">
              <div className="p-8 md:p-12 border border-white/10 rounded-3xl relative">
                <div className="text-6xl text-amber-500/20 font-serif leading-none absolute top-6 left-6">&ldquo;</div>
                <p className="text-3xl sm:text-4xl font-serif text-white/90 italic leading-snug relative z-10 pl-6 pt-4">
                  Your Financial Growth, <br/>
                  <span className="text-amber-500">Our Responsibility.</span>
                </p>
                <div className="mt-8 flex justify-end">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full border border-amber-500/50" />
                    <div className="w-8 h-3 rounded-full border border-amber-500/50 flex items-center justify-center">
                      <div className="w-1 h-1 bg-amber-500 rounded-full" />
                    </div>
                    <div className="w-3 h-3 rounded-full border border-amber-500/50" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
