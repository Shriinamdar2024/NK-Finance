import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | NK Financial Consultancy",
  description:
    "Get in touch with NK Financial Consultancy for personalized financial advice. Call, WhatsApp, or fill out the form and we'll respond within 24 hours.",
};

const quickActions = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9373061520",
    sub: "Mon–Sat, 9am–7pm",
    href: "tel:+919373061520",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40",
    cta: "Tap to Call",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+91 9373061520",
    sub: "Usually responds in minutes",
    href: "https://wa.me/919373061520",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40",
    cta: "Open Chat",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "niranjan.khandekar@yandex.com",
    sub: "Response within 24 hours",
    href: "mailto:niranjan.khandekar@yandex.com",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20 hover:border-sky-500/40",
    cta: "Send Email",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-amber-500/6 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-8">
              <ShieldCheck className="w-3.5 h-3.5" />
              Free Consultation Available
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
              Let's secure{" "}
              <span className="text-shimmer">your future together.</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Reach out for a free, no-obligation consultation. We'll help you understand your options and craft a financial plan built around your goals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Quick Action iOS Widgets ── */}
      <section className="py-10 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <ScrollReveal key={action.label} delay={i * 0.09}>
                <a
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={`flex flex-col p-6 rounded-3xl border glass transition-all duration-300 group active:scale-95 ${action.bg}`}
                >
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 ${action.bg}`}>
                    <Icon className={`w-5 h-5 ${action.color}`} />
                  </div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{action.label}</p>
                  <p className="text-white font-bold text-sm mb-0.5 break-all">{action.value}</p>
                  <p className="text-xs text-slate-600 mb-4">{action.sub}</p>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold mt-auto ${action.color}`}>
                    {action.cta}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── Main Contact Section ── */}
      <section className="py-10 pb-28 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: Info Panel */}
          <ScrollReveal direction="left">
            <div className="p-7 sm:p-8 rounded-3xl glass border border-white/8 shadow-2xl h-full">
              <h2 className="text-2xl font-extrabold text-white mb-1">Niranjan Khandekar</h2>
              <p className="text-amber-400 text-sm font-semibold mb-7">Principal Advisor · NK Financial Consultancy</p>

              <div className="space-y-5 mb-8">
                <a href="tel:+919373061520" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-white/5 flex items-center justify-center group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-all flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Phone</p>
                    <p className="text-slate-200 font-semibold text-sm group-hover:text-amber-400 transition-colors">+91 9373061520</p>
                  </div>
                </a>

                <a href="mailto:niranjan.khandekar@yandex.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-white/5 flex items-center justify-center group-hover:border-sky-500/40 group-hover:bg-sky-500/10 transition-all flex-shrink-0">
                    <Mail className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Email</p>
                    <p className="text-slate-200 font-semibold text-sm group-hover:text-sky-400 transition-colors break-all">niranjan.khandekar@yandex.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Location</p>
                    <p className="text-slate-200 font-semibold text-sm">Serving PAN India Digitally</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-white/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Working Hours</p>
                    <p className="text-slate-200 font-semibold text-sm">Mon – Sat, 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Large WhatsApp CTA */}
              <a
                href="https://wa.me/919373061520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#1fba59] text-white font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                Start a WhatsApp Conversation
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Contact Form */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="p-7 sm:p-8 rounded-3xl glass border border-white/10 shadow-2xl">
              <h2 className="text-xl font-extrabold text-white mb-1">Send us a Message</h2>
              <p className="text-slate-500 text-xs mb-7">We respond to all inquiries within 24 hours.</p>

              {/* NOTE: Replace Formspree action with your endpoint */}
              <form
                action="https://formspree.io/f/YOUR_ENDPOINT"
                method="POST"
                className="space-y-4"
              >
                {/* Name + Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-500 mb-2 pl-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      required
                      placeholder="Sxxx Ixxx"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/60 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-500 mb-2 pl-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/60 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-500 mb-2 pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder="sxxxx33@example.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/60 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all"
                  />
                </div>

                {/* Service Select */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-500 mb-2 pl-1">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    id="contact-service"
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/60 border border-white/8 text-white text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Loan Against Property">Loan Against Property</option>
                    <option value="Car Loan">Car Loan</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Mutual Funds / SIP">Mutual Funds / SIP</option>
                    <option value="Financial Planning">Financial Planning</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-500 mb-2 pl-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your financial needs..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/60 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 mt-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] active:scale-95"
                >
                  Request Callback
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center text-[10px] text-slate-600 pt-1">
                  🔒 Your information is 100% secure and never shared.
                </p>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <Footer />
    </main>
  );
}
