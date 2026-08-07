"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { 
  Quote, 
  MessageSquare, 
  Phone, 
  CheckCircle2,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-neutral-900 antialiased overflow-hidden">
      <Navbar />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-neutral-200/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />

      <section className="relative pt-36 pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Photo & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Niranjan Khandekar"
                  className="w-full h-[600px] object-cover object-top"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-extrabold text-3xl tracking-wide mb-1">Niranjan Khandekar</p>
                  <p className="text-amber-400 font-medium tracking-wider text-sm uppercase">Founder & Principal Advisor</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-3xl shadow-xl border border-neutral-100 hidden sm:flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center">
                <Calendar className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <p className="text-3xl font-black text-neutral-900 leading-none">8+</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mt-1">Years Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7 lg:pl-10 relative z-10">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold tracking-widest mb-6 shadow-sm">
                MEET THE FOUNDER
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-8">
                Building trust through <span className="text-amber-500">transparency</span> & expertise.
              </h1>
              
              <div className="space-y-6 text-neutral-600 text-lg leading-relaxed mb-12">
                <p>
                  With over 8 years of dedicated experience in the Indian financial services sector, Niranjan Khandekar established NK Financial Consultancy with a singular, unwavering mission: to democratize access to honest, expert financial guidance for everyone.
                </p>
                <p>
                  He has successfully helped hundreds of individuals and business owners achieve their financial aspirations. From securing complex business loans to structuring resilient investment portfolios, his deep expertise spans the entire spectrum of wealth and debt management.
                </p>
                <p>
                  A firm believer in a digital-first approach, Niranjan ensures that world-class financial advice and processing are accessible PAN India, removing geographical barriers and hidden complexities.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {[
                  "Holistic Financial Partner", 
                  "End-to-End Digital Process", 
                  "No Hidden Charges", 
                  "Unbiased Expert Advice"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    </div>
                    <span className="font-bold text-neutral-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919373061520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black hover:bg-neutral-800 text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919373061520"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-neutral-200 hover:border-black hover:shadow-md text-neutral-900 font-bold text-sm transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-neutral-500" />
                  Call Directly
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.svg')] opacity-5 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <Quote className="w-16 h-16 text-amber-500/40 mx-auto mb-8" />
            <h2 className="text-3xl sm:text-5xl font-serif font-medium leading-snug italic mb-10">
              &quot;I started NK Financial because I saw too many people getting the wrong advice or no advice at all. Every client deserves clarity, honesty, and a plan that actually works for them.&quot;
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-amber-500/50" />
              <p className="text-amber-500 font-bold tracking-widest uppercase text-sm">Niranjan Khandekar</p>
              <div className="w-12 h-px bg-amber-500/50" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
