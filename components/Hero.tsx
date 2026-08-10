"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-90 mix-blend-luminosity"
        >
          {/* Replace this src with your actual video path, e.g., /videos/hero-bg.mp4 */}
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Soft overlay to ensure text readability against any video background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/70 via-[#FDFBF7]/50 to-[#FDFBF7]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-24 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Empowering Your <br className="hidden md:block" />
            Financial Future
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl mb-10 leading-relaxed px-2">
            Trusted consultancy and solutions for personal loans, business loans, insurance, and investments. Tailored precisely for your goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/founder"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl sm:rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-base transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 text-center"
          >
            Meet Our Founder
          </Link>
          <a
            href="https://wa.me/919373061520"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl sm:rounded-full bg-white/80 hover:bg-white backdrop-blur-sm border border-neutral-200/50 text-black font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group hover:-translate-y-1"
          >
            <span>Free Consultation</span>
            <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}