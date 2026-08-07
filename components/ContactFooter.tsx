"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function ContactFooter() {
    return (
        <footer id="contact" className="pt-20 pb-12 bg-slate-950">
            <div className="max-w-6xl mx-auto px-4">

                <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 backdrop-blur-2xl flex flex-col md:flex-row justify-between gap-8 mb-16">

                    <div>
                        <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
                            Contact Us
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Niranjan Khandekar
                        </h2>
                        <p className="text-slate-400 text-sm max-w-sm mb-6">
                            Serving with Trust. Growing Together. Contact us today for personalized financial advice.
                        </p>
                    </div>

                    <div className="space-y-4 text-sm">
                        <a
                            href="tel:9373061520"
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5 hover:border-amber-500/30 text-slate-200 transition-colors"
                        >
                            <Phone className="w-4 h-4 text-amber-400" />
                            <span>+91 9373061520</span>
                        </a>

                        <a
                            href="mailto:niranjan.khandekar@yandex.com"
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5 hover:border-amber-500/30 text-slate-200 transition-colors"
                        >
                            <Mail className="w-4 h-4 text-amber-400" />
                            <span>niranjan.khandekar@yandex.com</span>
                        </a>

                        <a
                            href="https://wa.me/919373061520"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors shadow-lg shadow-emerald-600/20"
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span>Chat on WhatsApp</span>
                        </a>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-8 border-t border-white/5">
                    <p>© {new Date().getFullYear()} NK Financial Consultancy and Solutions. All rights reserved.</p>
                    <p className="mt-2 sm:mt-0">Designed for High Performance & Trust.</p>
                </div>

            </div>
        </footer>
    );
}