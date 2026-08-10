"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand - Left Column */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-start gap-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/NKICON.png" 
                alt="NK Financial Logo" 
                width={300} 
                height={100} 
                className="object-contain h-16 w-auto" 
              />
            </Link>
            <p className="text-white/60 text-sm max-w-sm text-center md:text-left leading-relaxed">
              Trusted financial consultancy delivering personalized loan, insurance, and investment solutions across India.
            </p>
          </div>

          {/* Contact Details - Right Column */}
          <div className="col-span-1 md:col-span-7 flex flex-col justify-center items-center md:items-end">
            <div className="flex flex-col gap-5 w-full max-w-lg">
              
              {/* Location */}
              <a 
                href="https://maps.google.com/?q=Shop No- 5, Raghunath Bhuvan, Overseer Colony, Near Shiv Shakti Mandal SANGLI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="mt-1 bg-white/10 p-2 rounded-full shrink-0 group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium leading-relaxed">
                  Shop No- 5, Raghunath Bhuvan, Overseer Colony, Near Shiv Shakti Mandal SANGLI.
                </span>
              </a>

              {/* Phone & Email Row */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:+919373061520" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <div className="bg-white/10 p-2 rounded-full shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">+91 9373061520</span>
                </a>

                <a href="mailto:niranjan.khandekar@yandex.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <div className="bg-white/10 p-2 rounded-full shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium break-all">niranjan.khandekar@yandex.com</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} NK Financial Consultancy and Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
