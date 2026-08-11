"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactStatic() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "Personal Loan"
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            // Call our custom Nodemailer API
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service
                })
            });

            const result = await response.json();
            console.log("Mail API Response:", result);

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", phone: "", email: "", service: "Personal Loan" });
                // Removed the automatic 5 second timeout so the user can actually read the success message and click the WhatsApp button if they want to.
            } else {
                console.error("API Error:", result);
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-[#FDFBF7]">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                        Let&apos;s Secure Your Future
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-xl mx-auto">
                        Get in touch for personalized financial guidance. We respond to all inquiries within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Direct Contact Info */}
                    <div className="space-y-6">
                        <div className="p-6 md:p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Niranjan Khandekar</h3>
                            <p className="text-neutral-500 text-sm font-medium mb-8">NK Financial Consultancy</p>

                            <div className="space-y-6">
                                <a href="tel:9373061520" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-50 transition-colors">
                                        <Phone className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Phone</p>
                                        <p className="text-neutral-900 font-medium group-hover:text-amber-600 transition-colors">+91 9373061520</p>
                                    </div>
                                </a>

                                <a href="mailto:niranjan.khandekar@yandex.com" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-50 transition-colors">
                                        <Mail className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Email</p>
                                        <p className="text-neutral-900 font-medium group-hover:text-amber-600 transition-colors break-all">niranjan.khandekar@yandex.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Location</p>
                                        <p className="text-neutral-900 font-medium">Shop No- 5, Raghunath Bhuvan, Overseer Colony, SANGLI.</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/919373061520"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-10 flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold transition-all shadow-lg shadow-[#25D366]/20 active:scale-95"
                            >
                                <MessageSquare className="w-5 h-5" />
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Static Web Form with Success Popup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-6 md:p-10 rounded-3xl bg-white border border-neutral-200 shadow-xl relative overflow-hidden"
                    >
                        {status === "success" && (
                            <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                                <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                </div>
                                <h3 className="text-3xl font-black text-neutral-900 tracking-tight mb-3">Request Received!</h3>
                                <p className="text-neutral-600 font-medium mb-8 max-w-sm leading-relaxed">
                                    Niranjan has successfully received your details and will personally call you within 24 hours to discuss your financial goals.
                                </p>
                                <div className="w-full h-px bg-neutral-200 mb-8 max-w-xs mx-auto" />
                                <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-4">Need immediate assistance?</p>
                                <a
                                    href="https://wa.me/919373061520"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full max-w-xs py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold transition-all shadow-lg hover:-translate-y-0.5 active:scale-95"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    <span>WhatsApp Niranjan Now</span>
                                </a>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 text-sm font-medium text-neutral-400 hover:text-neutral-600 underline underline-offset-4"
                                >
                                    Submit another request
                                </button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-neutral-600 mb-2 pl-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                    placeholder="Sxxx Ixxx"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-neutral-600 mb-2 pl-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                    placeholder="Sxxx33@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-xs font-medium text-neutral-600 mb-2 pl-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                                    placeholder="+91 00000 00000"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-xs font-medium text-neutral-600 mb-2 pl-1">Service Required</label>
                                <select
                                    name="service"
                                    id="service"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none"
                                >
                                    <option value="Personal Loan">Personal Loan</option>
                                    <option value="Business Loan">Business Loan</option>
                                    <option value="Insurance">Insurance</option>
                                    <option value="Investments">Investments</option>
                                    <option value="Financial Planning">Financial Planning</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full flex items-center justify-center gap-2 py-4 mt-4 rounded-2xl bg-amber-500 hover:bg-amber-400 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] active:scale-95"
                            >
                                <span>{status === "submitting" ? "Sending..." : "Request Callback"}</span>
                                {status !== "submitting" && <Send className="w-4 h-4" />}
                            </button>

                            {status === "error" && (
                                <p className="text-red-500 text-xs text-center mt-2 font-medium">Something went wrong. Please try again or use WhatsApp.</p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}