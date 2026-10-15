"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Check, Star, ArrowRight, ChevronDown, ChevronUp, Lock } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export interface SubpageProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  trustPoints?: string[];
  heroImage?: string;
  content: React.ReactNode;
  faqs?: FAQItem[];
}

export default function SubpageLayout({
  badge = "FTA-APPROVED ACCOUNTING & TAX FIRM IN UAE",
  title,
  highlightedTitle,
  description,
  trustPoints = [
    "Free Initial Consultation",
    "7 Emirates Covered Across UAE",
    "100% FTA & IFRS Compliant Solutions",
  ],
  heroImage = "/wp-content/uploads/2026/06/hero_office_bg.jpg",
  content,
  faqs = [],
}: SubpageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "---Select Service---",
    emirate: "---Your Emirate---",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#334155] flex flex-col justify-between selection:bg-[#e8b84b] selection:text-[#09203b]">
      {/* Top Header Navigation */}
      <Header />

      <div className="flex-1">
        {/* Subpage Hero Banner */}
        <section className="relative w-full bg-[#0a1420] text-white py-14 lg:py-18 border-b-4 border-[#c9a227] overflow-hidden min-h-[520px] flex items-center">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-80"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(9, 25, 45, 0.88) 0%, rgba(13, 27, 42, 0.82) 50%, rgba(5, 15, 30, 0.90) 100%), url('${heroImage}')`,
            }}
          />

          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full py-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 border border-[#e8b84b] text-[#e8b84b] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-[#09203b]/80 backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 fill-current text-[#e8b84b]" />
                  <span>{badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold leading-[1.25] tracking-tight text-white">
                  {title} {highlightedTitle && <span className="text-[#e8b84b]">{highlightedTitle}</span>}
                </h1>

                <p className="text-[#e2e8f0] text-[15px] sm:text-[16.5px] leading-[1.7] font-normal max-w-2xl text-shadow-sm">
                  {description}
                </p>

                <div className="flex flex-col space-y-2.5 pt-2 text-xs sm:text-[13px] font-bold text-white">
                  {trustPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#e8b84b] stroke-[3] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Quick Consultation Form */}
              <div className="lg:col-span-5" id="form">
                <div className="bg-[#0d1b2a]/90 border border-[#e8b84b]/40 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl max-w-[420px] ml-auto">
                  <div className="text-left mb-4">
                    <h3 className="text-xl font-serif font-bold text-white mb-1">
                      Get a Free Consultation
                    </h3>
                    <p className="text-xs text-[#94a3b8]">
                      Our expert will reply within 10 minutes
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-6 text-center space-y-3">
                      <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Thank You!</h4>
                      <p className="text-xs text-gray-300">
                        Your request has been received. Our team will contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#061528]/90 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#e8b84b]"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#061528]/90 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#e8b84b]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#061528]/90 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#e8b84b]"
                      />
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#061528]/90 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#e8b84b]"
                      >
                        <option value="---Select Service---">---Select Service---</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping & Accounting</option>
                        <option value="VAT Registration / Filing">VAT Registration / Filing</option>
                        <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                        <option value="Audit Services">Audit Services</option>
                        <option value="Payroll Services">Payroll Services</option>
                        <option value="Business Setup">Business Setup UAE</option>
                      </select>
                      <button
                        type="submit"
                        className="w-full bg-[#e8b84b] hover:bg-[#f4ca68] text-[#09203b] font-extrabold text-xs py-3 px-4 rounded-lg shadow-md transition-all"
                      >
                        Request Free Consultation →
                      </button>
                      <div className="flex items-center justify-start gap-1.5 text-[11px] text-gray-300 pt-1">
                        <Lock className="w-3.5 h-3.5 text-[#e8b84b] shrink-0" />
                        <span>Your information is 100% secure and confidential</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Main Body Content */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20 space-y-16">
          {content}

          {/* FAQs Accordion */}
          {faqs.length > 0 && (
            <div className="max-w-4xl mx-auto pt-8 border-t border-gray-200">
              <div className="text-center mb-10">
                <span className="text-[#c9a227] font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#09203b]">
                  Got Questions? We Have Answers.
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-[#09203b] text-base sm:text-lg hover:text-[#c9a227] transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#c9a227] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#faf8f5]/50 font-sans">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer & Floating WhatsApp Widget */}
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
