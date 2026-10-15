"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsDown, ChevronsUp, Check, Quote } from "lucide-react";

export default function AboutUsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const aboutFaqs = [
    {
      q: "What is RBO Accounting Services FZE?",
      a: "RBO Accounting Services FZE is an FTA-registered accounting and tax firm headquartered in Ajman Free Zone, offering bookkeeping, VAT, Corporate Tax, auditing, and business setup services across all 7 UAE Emirates.",
    },
    {
      q: "Is RBO an FTA-approved tax agency?",
      a: "Yes! RBO Accounting Services FZE is officially registered with the Federal Tax Authority (FTA) as a certified Tax Agency with licensed Tax Agents authorized to represent UAE businesses before the FTA.",
    },
    {
      q: "What services does RBO Accounting provide?",
      a: "We provide full-scope accounting & bookkeeping, VAT registration & return filing, Corporate Tax registration & filing, Free Zone & Mainland statutory audits, WPS payroll processing, and business setup.",
    },
    {
      q: "How much does RBO charge?",
      a: "We offer transparent, fixed monthly pricing with zero hidden fees. Our packages are customized based on your monthly transaction volume and business complexity, starting from AED 1,000/month.",
    },
    {
      q: "Does RBO serve businesses outside Ajman?",
      a: "Yes! We serve clients across all 7 Emirates including Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Umm Al Quwain with complete cloud-based and on-site support.",
    },
    {
      q: "How quickly can I onboard with RBO?",
      a: "Our onboarding process takes 3 to 5 business days. We handle data migration, cloud accounting setup (Xero/Zoho Books), and initial compliance review with zero downtime to your business.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between relative selection:bg-[#E8B84B] selection:text-[#09203B]">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1">

        {/* Section 1: Hero Banner (100% Mobile & Desktop Responsive with #102033) */}
        <section className="bg-[#09203B] text-white py-14 sm:py-24 lg:py-32 relative overflow-hidden border-b-4 border-[#C9A227]">
          {/* Subtle background glow circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[300px] bg-[#E8B84B]/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Responsive Pill Badge */}
              <span className="inline-flex items-center gap-2 bg-[#09203B]/90 text-[#E8B84B] font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#E8B84B]/40 mb-6 sm:mb-8 shadow-lg backdrop-blur-md">
                🏢 About RBO Accounting
              </span>

              {/* Responsive Headline Scale */}
              <h1 className="text-2xl sm:text-4xl lg:text-[56px] font-serif font-extrabold text-white tracking-tight mb-5 sm:mb-8 leading-[1.25] sm:leading-[1.18]">
                UAE&apos;s Trusted <span className="text-[#E8B84B]">FTA-Approved</span> Accounting Firm — Serving All 7 Emirates
              </h1>

              {/* Responsive Paragraph Text */}
              <p className="text-gray-200 text-sm sm:text-lg lg:text-[20px] max-w-4xl mx-auto leading-relaxed sm:leading-[1.7] font-normal opacity-95">
                RBO Accounting Services FZE is a premier accounting and tax firm based in the UAE. We deliver expert bookkeeping, VAT, Corporate Tax, audit, and payroll services with complete transparency, IFRS compliance, and a genuine commitment to your business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Mission & Vision + The RBO Promise */}
        <section className="py-16 sm:py-24 bg-white text-[#09203B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

              {/* Left Column: Our Mission & Vision (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[#C9A227] font-bold text-xs uppercase tracking-widest block mb-2">
                    OUR MISSION &amp; VISION
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#09203B] tracking-tight mb-4">
                    Accounting Excellence for Every UAE Business — From Startup to Enterprise
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    Our mission is simple: to make world-class accounting, VAT, and Corporate Tax services accessible to every UAE business — with no hidden fees, no jargon, and no surprises. Just clear, compliant, and expert financial management.
                  </p>
                </div>

                {/* 4 Cards 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      icon: "🎯",
                      title: "Accuracy First",
                      desc: "Every number we report is verified, reconciled, and IFRS-compliant. We do not cut corners — ever.",
                    },
                    {
                      icon: "🔒",
                      title: "100% Confidential",
                      desc: "Your financial data is handled with military-grade confidentiality. We have never had a data breach.",
                    },
                    {
                      icon: "💡",
                      title: "Proactive Advisory",
                      desc: "We don't just record — we advise. We alert you to VAT deadlines, tax savings, and compliance risks.",
                    },
                    {
                      icon: "🤝",
                      title: "Long-Term Partnership",
                      desc: "We measure success by how much your business grows — not just how many forms we file.",
                    },
                  ].map((val, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FAF7F2] border border-[#E2E8F0] hover:border-[#E8B84B] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 ease-out transform hover:-translate-y-1"
                    >
                      <div className="text-3xl mb-3">{val.icon}</div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#09203B] mb-2">{val.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: What We Stand For — The RBO Promise Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#102033] text-white rounded-xl p-7 sm:p-8 shadow-xl border border-[#E8B84B]/20">
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-6">
                    What We Stand For — The RBO Promise
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        num: "1",
                        title: "Transparent, Fixed Pricing",
                        desc: "You agree your monthly fee upfront. No hourly billing, no unexpected invoices — ever.",
                      },
                      {
                        num: "2",
                        title: "Dedicated Accountant for Every Client",
                        desc: "You get one assigned expert who knows your business inside out — not a call centre.",
                      },
                      {
                        num: "3",
                        title: "Zero FTA Penalty Guarantee",
                        desc: "We handle every VAT return and Corporate Tax filing on time. No missed deadlines, no FTA fines.",
                      },
                      {
                        num: "4",
                        title: "Real-Time Cloud Access",
                        desc: "Your P&L, cash flow, and balance sheet available 24/7 on Xero or Zoho Books — from any device.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-9 h-9 rounded-full bg-[#E8B84B] text-[#102033] font-serif font-extrabold text-base flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                          {item.num}
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-base text-white mb-1">{item.title}</h4>
                          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Badge inside #0D1B2A Card */}
                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-xs sm:text-sm text-gray-200 font-medium">
                      🏢 RBO Accounting Services FZE — proudly serving UAE businesses since <span className="text-[#E8B84B] font-extrabold">2020</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: What Makes RBO Different (White background with warm soft cream icon badge) */}
        <section className="py-16 sm:py-24 bg-white text-[#09203B] border-t border-b border-[#E2E8F0]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#C9A227] font-bold text-xs uppercase tracking-widest block mb-2">
                WHY CHOOSE RBO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#09203B] mb-4">
                What Makes RBO Different from Other Accounting Firms in UAE
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                There are hundreds of accounting firms in UAE. Here is why 200+ businesses chose RBO — and why they stay.
              </p>
            </div>

            {/* 6 Feature Cards Grid with White Background */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: "✓",
                  title: "FTA-Approved & Legally Authorized",
                  desc: "Unlike many bookkeeping providers, RBO is a registered FTA tax agent — legally authorized to handle VAT, Corporate Tax, and represent you before the Federal Tax Authority. Not all accounting firms in UAE hold this critical license.",
                },
                {
                  icon: "👤",
                  title: "Dedicated Accountant — Not a Call Centre",
                  desc: "Every RBO client has one dedicated, named accountant who knows their business inside out. You can WhatsApp your accountant directly — not navigate through a ticketing system or speak to a different person every time.",
                },
                {
                  icon: "💰",
                  title: "Fixed Monthly Pricing — Zero Surprises",
                  desc: "We quote your fixed monthly fee before we begin. No hourly billing, no surprise invoices, no upselling. You know exactly what you pay — from the first conversation to the last annual report.",
                },
                {
                  icon: "☁️",
                  title: "Real-Time Cloud Accounting Technology",
                  desc: "We run your books on Xero or Zoho Books — giving you 24/7 access to your financial data. See your P&L, cash position, and VAT liability in real time, from your phone. No waiting for month-end reports.",
                },
                {
                  icon: "📍",
                  title: "UAE-Specific Expertise — All 7 Emirates",
                  desc: "We understand the nuances of doing business in every UAE emirate — from DMCC free zone audits in Dubai to RAK ICC requirements and Sharjah mainland regulations. UAE-specific knowledge that generic global firms simply don't have.",
                },
                {
                  icon: "🌐",
                  title: "Multilingual Team — English, Arabic, Urdu",
                  desc: "Our team communicates in English, Arabic, Urdu, and Hindi — reflecting the diverse fabric of UAE business. You explain your situation in your preferred language, and we handle it with complete clarity.",
                },
              ].map((diff, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl p-7 shadow-[0_4px_20px_rgba(9,32,59,0.06)] hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Warm soft cream icon box matching live screenshot img 2 */}
                    <div className="w-11 h-11 rounded-xl bg-[#FDF0D5] text-[#0D1B2A] text-lg font-extrabold flex items-center justify-center mb-4 shadow-xs">
                      {diff.icon}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#09203B] mb-3 leading-snug">
                      {diff.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Our Founder (Minimal distance between text and image) */}
        <section className="py-12 sm:py-16 bg-[#FAF7F2] text-[#09203B]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">

              {/* Left Column: Quote & Founder Info (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-[#C9A227] font-bold text-xs sm:text-sm uppercase tracking-widest block mb-3 font-sans">
                    OUR FOUNDER
                  </span>

                  {/* Gold Quote Mark Icon matching screenshot */}
                  <div className="text-[#E8B84B] text-5xl sm:text-6xl font-serif font-black mb-3 leading-none select-none">
                    “
                  </div>

                  {/* Quote text matching screenshot style & exact line breaks */}
                  <p className="font-serif text-base sm:text-xl text-[#0F172A] leading-[1.6] mb-5 font-normal max-w-[480px]">
                    At RBO Accounting, we believe every UAE business deserves financial clarity, not confusion. That&apos;s why my team and I focus on making audit, VAT, and corporate tax simple, accurate, and stress-free — so our clients can focus on what they do best: growing their business.
                  </p>

                  {/* Gold accent line */}
                  <div className="w-16 sm:w-20 h-0.5 bg-[#C9A227] mb-5"></div>
                </div>

                {/* Dark Navy Founder Badge Box */}
                <div className="inline-block bg-[#102033] text-white px-6 py-4 rounded-xl shadow-lg border border-[#E8B84B]/20">
                  <h4 className="font-serif font-bold text-lg sm:text-xl text-white mb-0.5 tracking-tight">
                    Muhammad Usman Malik
                  </h4>
                  <p className="text-[#E8B84B] text-xs sm:text-sm font-medium tracking-wide">
                    Founder and managing director
                  </p>
                </div>
              </div>

              {/* Right Column: Founder Photograph (Centered on mobile, left-aligned on desktop) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] mx-auto lg:mx-0">
                  <img
                    src="/images/muhammad-usman-malik-founder-managing-director.webp?v=1"
                    alt="Muhammad Usman Malik - Founder and Managing Director RBO Accounting"
                    className="w-full h-auto object-cover rounded-2xl block"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Why 200+ Businesses Trust RBO */}
        <section className="py-16 sm:py-24 bg-[#102033] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left Column: Corporate Handshake Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                  <img
                    src="/images/rbo_corporate_handshake.jpg"
                    alt="Trust & Partnership - RBO Accounting Services"
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Why 200+ Businesses Trust RBO (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[#E8B84B] font-bold text-xs uppercase tracking-widest block mb-2">
                    WHY CHOOSE US
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white mb-4 leading-snug">
                    Why 200+ UAE Businesses Trust RBO Accounting Services
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                    We are not just accountants — we are financial partners. Every client relationship is built on trust, transparency, and a shared commitment to your business success.
                  </p>
                </div>

                {/* 4 Feature Items */}
                <div className="space-y-5">
                  {[
                    {
                      icon: "⚡",
                      title: "10-Minute Response Guarantee",
                      desc: "During business hours, we respond to every client query within 10 minutes via WhatsApp or phone — because your business cannot wait.",
                    },
                    {
                      icon: "📅",
                      title: "Never Miss a Deadline",
                      desc: "VAT returns, Corporate Tax filings, payroll — every deadline is tracked and met. No client has ever received an FTA penalty while managed by RBO.",
                    },
                    {
                      icon: "📊",
                      title: "Monthly Reports You Can Actually Understand",
                      desc: "No 80-page reports full of jargon. We deliver clear, concise monthly management accounts with plain-English commentary and action points.",
                    },
                    {
                      icon: "🔄",
                      title: "Seamless Onboarding in 3-5 Days",
                      desc: "We migrate your data, set up cloud accounting, and take over your books within 3-5 business days — with zero disruption to your operations.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-start bg-[#081726] p-4 sm:p-5 rounded-xl border border-white/10 hover:border-[#E8B84B]/40 transition-colors"
                    >
                      <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                      <div>
                        <h4 className="font-serif font-bold text-base text-white mb-1">{item.title}</h4>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 6: Client Reviews */}
        <TestimonialsSection />

        {/* Section 7: About RBO Accounting — Frequently Asked Questions */}
        <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#09203B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

              {/* Left Column: FAQ Accordions (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[#C9A227] font-bold text-xs uppercase tracking-widest block mb-2">
                    COMMON QUESTIONS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#09203B] tracking-tight mb-3">
                    About RBO Accounting — Frequently Asked Questions
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Common questions about RBO Accounting Services FZE, our accreditation, fees, and onboarding process.
                  </p>
                </div>

                {/* Animated Accordion List */}
                <div className="space-y-3 pt-2">
                  {aboutFaqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="overflow-hidden rounded-xl shadow-xs transition-shadow duration-300 hover:shadow-md"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : idx)}
                          className={`w-full text-left py-3.5 px-5 flex justify-between items-center gap-4 transition-all duration-300 ${isOpen
                            ? "bg-[#102033] text-[#E8B84B] rounded-t-xl"
                            : "bg-[#102033] text-white hover:bg-[#162A42] rounded-xl"
                            }`}
                        >
                          <span className="font-serif font-semibold text-sm sm:text-base leading-snug">
                            {faq.q}
                          </span>

                          {/* Animated Double Caret Icon */}
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex-shrink-0"
                          >
                            {isOpen ? (
                              <ChevronsUp className="w-5 h-5 text-white" />
                            ) : (
                              <ChevronsDown className="w-5 h-5 text-[#E8B84B]" />
                            )}
                          </motion.div>
                        </button>

                        {/* Smooth Height Expand/Collapse Animation */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="overflow-hidden"
                            >
                              <div className="bg-white border border-[#0D1B2A]/15 p-5 rounded-b-xl text-gray-600 text-xs sm:text-sm leading-relaxed shadow-xs">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Ready to Work Card in #0D1B2A */}
              <div className="lg:col-span-5">
                <div className="bg-[#102033] text-white rounded-xl p-8 sm:p-10 shadow-xl border border-[#E8B84B]/20 sticky top-28 flex flex-col items-start">
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3 leading-snug">
                    Ready to Work with RBO?
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
                    Book a free 30-minute consultation today. We will review your current setup and walk through where we can add genuine value.
                  </p>

                  {/* Bullet Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {[
                      "Free 30-minute consultation",
                      "Dedicated accountant assigned",
                      "Fixed pricing — zero surprises",
                      "24/7 cloud dashboard access",
                      "English, Arabic, Urdu support",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 font-medium"
                      >
                        <Check className="w-4 h-4 text-[#D49D28] stroke-[3] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="flex flex-col items-start space-y-3.5 w-full">
                    <a
                      href="#contact"
                      className="bg-[#D49D28] hover:bg-[#C28C1B] text-white font-bold py-3 px-6 rounded-lg text-xs sm:text-sm inline-flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Book Free Consultation &rarr;
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 8: Compliance CTA Banner */}
        <CTASection />

      </div>

      {/* Footer & Floating WhatsApp Widget */}
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
