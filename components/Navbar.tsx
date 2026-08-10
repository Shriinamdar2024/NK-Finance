"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center w-full transition-all duration-300">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`flex items-center justify-between w-full px-6 md:px-12 py-3 md:py-4 transition-all duration-300 ${
            scrolled
              ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-slate-200"
              : "bg-transparent"
          }`}
        >
          {/* Brand Logo - Left */}
          <Link href="/" className="flex items-center relative z-10">
            <Image 
              src="/NKICON.png" 
              alt="NK Financial Logo" 
              width={240} 
              height={75} 
              className="object-contain h-10 md:h-14 w-auto" 
              priority
            />
          </Link>

          {/* Desktop Nav Links - Center */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-slate-900 ${
                  pathname === link.href ? "text-slate-900 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA - Right */}
          <div className="hidden md:flex items-center relative z-10">
            <a
              href="https://wa.me/919373061520"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-black hover:bg-neutral-800 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Free Consultation</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-slate-900 relative z-10"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-[88px] px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-8">
              {[
                { label: "Home", href: "/" },
                ...navLinks
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    className={`block text-3xl font-bold tracking-tight transition-colors ${
                      pathname === link.href ? "text-amber-500" : "text-slate-900 hover:text-amber-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                className="mt-8 pt-8 border-t border-slate-200"
              >
                <a
                  href="https://wa.me/919373061520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-black hover:bg-neutral-800 text-white font-semibold text-lg transition-all shadow-xl hover:shadow-2xl active:scale-95"
                >
                  <Phone className="w-5 h-5" />
                  Free Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}