"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Check, ArrowRight, Lock, MapPin,
  ChevronDown, ChevronUp, ChevronsDown, ChevronsUp, FileText,
  Briefcase, BarChart, Cloud,
  ShieldCheck, HelpCircle, Users, CheckCircle2, Navigation,
  Banknote, NotepadText, TrendingUp, MessageSquare, DollarSign, Clock, Server, Save, Search, Eye, AlertCircle, RefreshCw
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function VATAdvisoryServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "VAT Registration / Filing",
    emirate: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeLocation, setActiveLocation] = useState(0);

  const mapLocations = [
    { name: "Dubai", mapQuery: "Dubai+UAE" },
    { name: "Abu Dhabi", mapQuery: "Abu+Dhabi+UAE" },
    { name: "Sharjah", mapQuery: "Sharjah+UAE" },
    { name: "Ajman", mapQuery: "Ajman+Free+Zone" },
    { name: "Ras Al Khaimah", mapQuery: "Ras+Al+Khaimah+UAE" },
    { name: "Fujairah", mapQuery: "Fujairah+UAE" },
    { name: "Umm Al Quwain", mapQuery: "Umm+Al+Quwain+UAE" },
  ];

  const faqs = [
    {
      q: "What are VAT advisory services?",
      a: "They're professional consulting services that help businesses correctly interpret and apply UAE VAT law to their specific transactions and circumstances."
    },
    {
      q: "Why should I hire a VAT consultant?",
      a: "A consultant catches misclassified transactions and compliance gaps before the FTA does, which is far less costly than fixing errors after a penalty."
    },
    {
      q: "What is a VAT health check?",
      a: "It's a structured review of your business's VAT compliance position, covering transaction treatment, documentation, and recovery accuracy."
    },
    {
      q: "What is VAT treatment advice?",
      a: "It's guidance on how a specific transaction should be classified and taxed under current UAE VAT regulations."
    },
    {
      q: "How does the reverse charge mechanism work?",
      a: "Under reverse charge, the recipient of certain imported goods or services accounts for the VAT instead of the supplier, and we help confirm when this applies to your transactions."
    },
    {
      q: "What are zero-rated supplies?",
      a: "These are taxable supplies charged at 0% VAT, such as certain exports, though they still require proper documentation and reporting."
    },
    {
      q: "What are exempt supplies?",
      a: "These are supplies outside the scope of VAT entirely, meaning no VAT is charged and input tax related to them generally isn't recoverable."
    },
    {
      q: "How can VAT advisory reduce compliance risks?",
      a: "By identifying incorrect treatment, documentation gaps, and recovery errors before they accumulate into a larger liability or penalty."
    },
    {
      q: "Do you advise Free Zone businesses?",
      a: "Yes, including guidance specific to designated zone rules and how they affect VAT treatment on certain transactions."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Our VAT advisory specialist will contact you within 10 minutes.");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#E8B84B] selection:text-[#09203B]">
      <Header />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION (2-Column Grid on Desktop) - EXACT MATCH TO LIVE SITE
            ========================================================================= */}
        <section className="bg-[#09203b] py-12 md:py-16 relative overflow-hidden border-b-2 border-[#E8B84B]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left Column Content (7 cols on desktop) */}
              <div className="lg:col-span-7 text-white pr-0 lg:pr-4">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[45px] font-bold leading-[1.18] tracking-tight text-white mb-5">
                  VAT Advisory <span className="text-[#E8B84B]">Services UAE</span> &mdash;{" "}
                  <br className="hidden sm:inline" />
                  Practical Guidance from{" "}
                  <br className="hidden sm:inline" />
                  Experienced VAT Consultants
                </h1>

                <p className="text-gray-300 text-sm sm:text-[14.5px] leading-relaxed mb-8 max-w-2xl font-sans">
                  Not every VAT question has an obvious answer. Maybe you&apos;re unsure whether a transaction qualifies as zero-rated or exempt, or you&apos;ve just realized your reverse charge mechanism treatment on imported services might not be quite right. This is exactly where our VAT advisory services UAE come in. At RBO Accounting Services FZE, we help businesses interpret UAE VAT law correctly, run VAT health checks that catch problems before the FTA does, and give practical treatment advice that holds up under scrutiny.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <a
                    href="#consultation-form"
                    className="px-6 py-3 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-sm shadow-md transition-all duration-150 inline-flex items-center gap-1.5"
                  >
                    <span>Book a Free Consultation &rarr;</span>
                  </a>

                  <a
                    href="https://wa.me/971508051857?text=Hello%20RBO%20Accounting,%20I%20need%20VAT%20Advisory%20Services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-md border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all duration-150 inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* 3 Gold Bullseye Bullet Points */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-[13px] text-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8B84B] ring-2 ring-[#E8B84B]/40 inline-block flex-shrink-0" />
                    <span>Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8B84B] ring-2 ring-[#E8B84B]/40 inline-block flex-shrink-0" />
                    <span>7 Emirates Covered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8B84B] ring-2 ring-[#E8B84B]/40 inline-block flex-shrink-0" />
                    <span>100% FTA Compliant Solutions</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Consultation Card (5 cols on desktop) */}
              <div id="consultation-form" className="lg:col-span-5 scroll-mt-28">
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 border border-white/50 relative">
                  <div className="mb-4">
                    <h2 className="font-serif text-[22px] font-bold text-gray-900 mb-1 leading-snug">
                      Get a Free Consultation
                    </h2>
                    <p className="text-[12px] sm:text-[12.5px] text-gray-700 font-serif">
                      Our expert will reply within 10 minutes
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3 text-left">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 text-[13px] rounded-md border border-[#c4cbd5] bg-white text-gray-900 placeholder:text-gray-500 focus:border-[#c8962e] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 text-[13px] rounded-md border border-[#c4cbd5] bg-white text-gray-900 placeholder:text-gray-500 focus:border-[#c8962e] outline-none transition-all"
                      />
                    </div>

                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2 text-[13px] rounded-md border border-[#c4cbd5] bg-white text-gray-900 focus:border-[#c8962e] outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="Select Service" disabled>Select Service</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping &amp; Accounting</option>
                        <option value="VAT Registration / Filing">VAT Registration / Filing</option>
                        <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                        <option value="Audit Services">Audit Services</option>
                        <option value="Payroll Services">Payroll Services</option>
                        <option value="Virtual CFO">Virtual CFO</option>
                        <option value="AML Compliance">AML Compliance</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-900 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2.5]" />
                    </div>

                    <div className="relative">
                      <select
                        required
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full px-3.5 py-2 text-[13px] rounded-md border border-[#c4cbd5] bg-white text-gray-900 focus:border-[#c8962e] outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Your Emirate</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                        <option value="Fujairah">Fujairah</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-900 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2.5]" />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-6 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-[13.5px] shadow-sm transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                    >
                      <span>Request Free Consultation &rarr;</span>
                    </button>
                  </form>

                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-700 font-medium font-sans">
                    <Lock className="w-3 h-3 text-amber-500 fill-amber-500 flex-shrink-0" />
                    <span className="text-center">Your information is 100% secure and confidential</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            2. QUICK ANSWER SECTION - EXACT MATCH TO LIVE SITE
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#f8f6f1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Text Left (7 cols) */}
              <div className="lg:col-span-7">
                <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm block mb-3">
                  QUICK ANSWER
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 leading-[1.2] mb-5">
                  What Do VAT Advisory Services Cover?
                </h2>
                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans">
                  VAT advisory services help businesses correctly interpret and apply UAE VAT law to their specific transactions, rather than just filing returns mechanically. This typically includes a VAT health check to review past compliance, treatment advice on complex or unusual transactions, guidance on the reverse charge mechanism for imported services, and clarity on when supplies count as zero-rated, exempt, or standard-rated. Good VAT advisory work identifies risk before it becomes a penalty &mdash; reviewing input tax recovery positions, checking documentation gaps, and flagging transactions where the VAT treatment isn&apos;t as straightforward as it first appears.
                </p>
              </div>

              {/* Image Right (5 cols) - Clean Standalone Image from Image 1 */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Do-VAT-Advisory-Services-Cover.webp"
                    alt="What Do VAT Advisory Services Cover?"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ELIGIBILITY / NEED SECTION - EXACT MATCH TO LIVE SITE
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Image Left (5 cols) - Clean Standalone Image from Image 1 */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Are-VAT-Advisory-Services-and-Why-Do-Businesses-Need-Them.webp"
                    alt="What Are VAT Advisory Services, and Why Do Businesses Need Them?"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Right (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-[#c4923e] font-semibold text-xs md:text-sm block mb-2">
                  Eligibility
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  What Are VAT Advisory Services, and Why Do Businesses Need Them?
                </h2>
                <div className="space-y-3.5 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans">
                  <p>
                    VAT advisory services go beyond basic filing support. They involve a qualified VAT consultant looking closely at how your business actually operates &mdash; your contracts, your supply chain, your cross-border dealings &mdash; and telling you where your current VAT treatment holds up and where it doesn&apos;t.
                  </p>
                  <p>
                    Most businesses reach out for VAT advisory services UAE support when they&apos;re launching a new product line, expanding into a free zone or across borders, restructuring the business, or simply because they&apos;ve never had someone independently check whether their VAT position is correct.
                  </p>
                  <p>
                    The value here isn&apos;t theoretical. A single misclassified transaction, repeated across a year of invoicing, can turn into a meaningful VAT liability or a rejected input tax claim once the FTA reviews it. Getting the treatment right early is far cheaper than fixing it after the fact.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. OUR VAT ADVISORY SERVICES (6 Cards - 3x2 Grid) - EXACT MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                What&apos;s Included
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-3">
                Our VAT Advisory Services
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-sans">
                We manage every part of your return, not just the final submission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  📒
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  VAT Consultation
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Get expert advice on VAT regulations, compliance requirements, and practical solutions tailored to your business.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🏦
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  VAT Health Check
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  A comprehensive review of your VAT processes to identify compliance gaps, risks, and opportunities for improvement.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🔄
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  Transaction VAT Review
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  We assess individual transactions to ensure the correct VAT treatment before they become costly filing mistakes.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  📊
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  VAT Risk Assessment
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Identify potential VAT risks early with detailed compliance reviews designed to reduce exposure to FTA penalties.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🌐
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  VAT Planning &amp; Optimization
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Develop tax-efficient VAT strategies that improve cash flow while ensuring full compliance with UAE VAT regulations.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🧾
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  Ongoing VAT Support
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Receive continuous VAT guidance and documentation support whenever new questions or compliance issues arise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. OUTSOURCED ACCOUNTING UAE SECTION - EXACT MATCH TO LIVE SITE
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-[#f8f6f1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                Outsourced Accounting UAE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                Why More Businesses Choose Outsourced Accounting UAE Solutions
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto font-sans leading-relaxed">
                Hiring a full-time, in-house accountant costs more than most businesses realize once you factor in salary, visa costs, and training. Outsourced accounting UAE arrangements let you access a full team of qualified professionals for a fraction of that cost &mdash; and you get coverage even when someone is on leave, which an in-house hire can&apos;t offer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/70 shadow-sm text-left">
                <div className="w-10 h-10 rounded-lg bg-black text-[#E8B84B] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Full Team
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-sans">
                  vs. a single in-house hire
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/70 shadow-sm text-left">
                <div className="w-10 h-10 rounded-lg bg-black text-[#E8B84B] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Zero Gaps
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-sans">
                  coverage even during leave
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/70 shadow-sm text-left">
                <div className="w-10 h-10 rounded-lg bg-black text-[#E8B84B] flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Scales With You
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-sans">
                  no extra hiring or training
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/70 shadow-sm text-left">
                <div className="w-10 h-10 rounded-lg bg-black text-[#E8B84B] flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Strict Confidentiality
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-sans">
                  protocols built into every engagement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. MONTHLY BOOKKEEPING PACKAGES SECTION - EXACT MATCH TO LIVE SITE
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                Monthly Packages
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                Monthly Bookkeeping Packages Built Around Your Business Size
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-sans">
                We don&apos;t believe in one-size-fits-all pricing. Every package includes core bookkeeping, monthly financial statements, and direct access to your account manager.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
              {/* Package 1: Startup */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                    Startup
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-[13px] mb-6 font-sans">
                    Basic transaction recording &amp; VAT support
                  </p>
                  <ul className="space-y-3.5 mb-8">
                    <li className="flex items-center gap-2.5 text-[13.5px] text-gray-700 font-sans">
                      <Check className="w-4 h-4 text-[#c8962e] stroke-[2.5] flex-shrink-0" />
                      <span>Core monthly bookkeeping</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[13.5px] text-gray-700 font-sans">
                      <Check className="w-4 h-4 text-[#c8962e] stroke-[2.5] flex-shrink-0" />
                      <span>Monthly financial statements</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[13.5px] text-gray-700 font-sans">
                      <Check className="w-4 h-4 text-[#c8962e] stroke-[2.5] flex-shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#consultation-form"
                  className="w-full py-2.5 text-center rounded-md border border-[#c8962e] text-[#c8962e] hover:bg-[#c8962e] hover:text-white font-medium text-sm transition-all duration-150"
                >
                  Get Started
                </a>
              </div>

              {/* Package 2: Growing Business (Most Popular) */}
              <div className="bg-[#09203b] text-white rounded-2xl p-8 border-2 border-[#E8B84B] shadow-xl relative text-left flex flex-col justify-between transform md:-translate-y-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E8B84B] text-[#09203b] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Growing Business
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-[13px] mb-6 font-sans">
                    Full reconciliation &amp; reporting
                  </p>
                  <ul className="space-y-3.5 mb-8">
                    <li className="flex items-center gap-2.5 text-[13.5px] text-gray-100 font-sans">
                      <Check className="w-4 h-4 text-[#E8B84B] stroke-[2.5] flex-shrink-0" />
                      <span>Everything in Startup</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[13.5px] text-gray-100 font-sans">
                      <Check className="w-4 h-4 text-[#E8B84B] stroke-[2.5] flex-shrink-0" />
                      <span>Full bank reconciliation</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[13.5px] text-gray-100 font-sans">
                      <Check className="w-4 h-4 text-[#E8B84B] stroke-[2.5] flex-shrink-0" />
                      <span>Detailed financial reporting</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#consultation-form"
                  className="w-full py-2.5 text-center rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-sm transition-all duration-150"
                >
                  Get Started
                </a>
              </div>

              {/* Package 3: Established Company */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                    Established Company
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-[13px] mb-6 font-sans">
                    Audit-ready financials &amp; oversight
                  </p>
                  <ul className="space-y-3.5 mb-8">
                    <li className="flex items-center gap-2.5 text-[13.5px] text-gray-700 font-sans">
                      <Check className="w-4 h-4 text-[#c8962e] stroke-[2.5] flex-shrink-0" />
                      <span>Everything in Growing Business</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[13.5px] text-gray-700 font-sans">
                      <Check className="w-4 h-4 text-[#c8962e] stroke-[2.5] flex-shrink-0" />
                      <span>Audit-ready documentation</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[13.5px] text-gray-700 font-sans">
                      <Check className="w-4 h-4 text-[#c8962e] stroke-[2.5] flex-shrink-0" />
                      <span>Closer financial oversight</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#consultation-form"
                  className="w-full py-2.5 text-center rounded-md border border-[#c8962e] text-[#c8962e] hover:bg-[#c8962e] hover:text-white font-medium text-sm transition-all duration-150"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Standalone task notice */}
            <div className="max-w-3xl mx-auto bg-[#f8f6f1] rounded-xl p-5 border border-gray-200 text-center">
              <p className="text-gray-700 text-xs sm:text-[13.5px] font-sans">
                Only need help with one specific task &mdash; like clearing a backlog of unrecorded transactions or a single VAT filing? We also offer standalone services rather than forcing you into a full monthly commitment.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. WHO WE SERVE ("Built for Every Stage of Business") - EXACT MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-[#f8f6f1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                Who We Serve
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                Built for Every Stage of Business
              </h2>
            </div>

            {/* Row 1: 3 Equal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-7 border border-gray-200/70 shadow-sm text-left">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1.5">
                  Startups &amp; SMEs
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Setting up their first proper bookkeeping system.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-200/70 shadow-sm text-left">
                <div className="text-2xl mb-3">🏢</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1.5">
                  Free Zone Companies
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Navigating specific jurisdiction requirements.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-200/70 shadow-sm text-left">
                <div className="text-2xl mb-3">🛒</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1.5">
                  E-commerce Businesses
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Managing high transaction volumes across multiple channels.
                </p>
              </div>
            </div>

            {/* Row 2: 2 Equal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-7 border border-gray-200/70 shadow-sm text-left">
                <div className="text-2xl mb-3">🚢</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1.5">
                  Trading Companies
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Handling cross-border VAT questions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-200/70 shadow-sm text-left">
                <div className="text-2xl mb-3">🧾</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1.5">
                  Service-Based Businesses
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Straightforward, reliable monthly reporting without unnecessary complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. OUR PROCESS (8 Step Cards - 4x2 Grid) - EXACT MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                Our Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                How Our VAT Return Filing Process Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Initial Consultation
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We start by understanding the specific VAT question or concern that brought you to us.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Business and VAT Assessment
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We look at your business activities, structure, and current VAT treatment approach.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Financial Record Review
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We examine relevant invoices, contracts, and accounting records tied to the transactions in question.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Transaction Analysis
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We test specific transactions against current UAE VAT regulations to confirm correct treatment.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  5
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  VAT Risk Identification
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We flag any areas where your current approach carries compliance risk.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  6
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Customized Recommendations
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We provide clear, practical guidance you can actually apply, not just theoretical explanations.
                </p>
              </div>

              {/* Step 7 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  7
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Compliance Implementation
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We help you put the recommended changes into practice across your invoicing and records.
                </p>
              </div>

              {/* Step 8 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  8
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Ongoing Advisory
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We stay available as new transactions or questions come up, rather than closing the file after one session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. WHY RBO (Why Businesses Choose RBO Accounting Services FZE) - EXACT MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-[#f8f6f1]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                Why RBO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                Why Businesses Choose RBO Accounting Services FZE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200/60 shadow-sm flex items-start gap-4 text-left">
                <div className="w-9 h-9 rounded-md bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-gray-900 mb-1">
                    FTA Registered Tax Agents
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed font-sans">
                    Our VAT and compliance guidance is grounded in what the Federal Tax Authority actually requires.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200/60 shadow-sm flex items-start gap-4 text-left">
                <div className="w-9 h-9 rounded-md bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-gray-900 mb-1">
                    Dedicated Account Manager
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed font-sans">
                    Every client gets a dedicated account manager, not a rotating cast of unfamiliar staff.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200/60 shadow-sm flex items-start gap-4 text-left">
                <div className="w-9 h-9 rounded-md bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <DollarSign className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-gray-900 mb-1">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed font-sans">
                    Clear from the start, with no surprise fees added later.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200/60 shadow-sm flex items-start gap-4 text-left">
                <div className="w-9 h-9 rounded-md bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-gray-900 mb-1">
                    Deadlines Taken Seriously
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed font-sans">
                    We understand what a missed filing actually costs you.
                  </p>
                </div>
              </div>

              {/* Card 5 (Centered on desktop) */}
              <div className="bg-white rounded-xl p-6 border border-gray-200/60 shadow-sm flex items-start gap-4 text-left md:col-span-2 md:max-w-lg md:mx-auto w-full">
                <div className="w-9 h-9 rounded-md bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Server className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-gray-900 mb-1">
                    Fluent Across Platforms
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed font-sans">
                    Xero, Zoho, and QuickBooks &mdash; you&apos;re never forced to change systems to work with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. BENEFITS OF PROFESSIONAL VAT ADVISORY - EXACT MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-10 max-w-4xl">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Benefits of Professional VAT Advisory
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                Working with the right accounting consulting firm in Dubai gives you better financial visibility, more accurate records, and stronger regulatory compliance across VAT and corporate tax.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-left">
                <div className="text-3xl mb-4">👁️</div>
                <p className="text-gray-700 text-[13.5px] leading-relaxed font-sans">
                  File accurate VAT returns on time to meet FTA requirements and avoid unnecessary administrative penalties.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-left">
                <div className="text-3xl mb-4 text-[#c4923e]">✔</div>
                <p className="text-gray-700 text-[13.5px] leading-relaxed font-sans">
                  Ensure every eligible input tax claim is identified so you recover the VAT your business is entitled to.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-left">
                <div className="text-3xl mb-4">💧</div>
                <p className="text-gray-700 text-[13.5px] leading-relaxed font-sans">
                  Maintain reliable financial records with properly reconciled VAT transactions and accurate reporting.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-left">
                <div className="text-3xl mb-4">⏱️</div>
                <p className="text-gray-700 text-[13.5px] leading-relaxed font-sans">
                  Keep organized filing records and supporting documentation, making any future FTA inquiries or audits easier to manage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            11. LOCATIONS WE SERVE (EMIRATES TABS + MAP) - EXACT MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-[#f8f6f1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                Locations We Serve
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-3">
                Service Areas Across the UAE
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-sans">
                Our team supports businesses across the UAE, wherever your company is registered &mdash; in person or remotely, mainland or free zone.
              </p>
            </div>

            {/* Interactive Emirates Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {mapLocations.map((loc, idx) => (
                <button
                  key={loc.name}
                  onClick={() => setActiveLocation(idx)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeLocation === idx
                      ? "bg-[#E8B84B] text-gray-900 shadow-md font-bold"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#E8B84B]"
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>

            {/* Live Interactive Map Box */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg h-[400px] sm:h-[460px] relative">
              <iframe
                title="RBO Accounting UAE Locations"
                src={`https://maps.google.com/maps?q=${mapLocations[activeLocation].mapQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-gray-200 shadow-md text-xs font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c4923e]" />
                <span>Serving {mapLocations[activeLocation].name} &amp; Surrounding Business Districts</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. CLIENT REVIEWS / TESTIMONIALS SECTION - EXACT MATCH
            ========================================================================= */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
            <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
              Client Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-3">
              What Our Clients Say About RBO Accounting
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-sans">
              Trusted by businesses across all UAE Emirates. Here&apos;s what our clients share about working with us.
            </p>
          </div>
          <TestimonialsSection />
        </section>

        {/* =========================================================================
            13. FREQUENTLY ASKED QUESTIONS ACCORDION - EXACT MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white text-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left Aligned Section Header */}
            <div className="text-left mb-8 sm:mb-9">
              <span className="text-[#c4923e] uppercase tracking-wider font-bold text-xs block mb-2.5">
                COMMON QUESTIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203B] tracking-tight mb-2.5">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-sm sm:text-[14.5px] font-sans">
                Everything UAE businesses ask about accounting, VAT, and Corporate Tax &mdash; answered by our experts.
              </p>
            </div>

            {/* Single Unified Dark Navy Container */}
            <div className="bg-[#0d1b2a] rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-[#18283a] divide-y divide-[#18283a]">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className="transition-colors">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full px-5 py-3.5 sm:px-6 sm:py-4 text-left flex items-center justify-between gap-4 transition-colors bg-[#0d1b2a] hover:bg-[#112336] cursor-pointer group"
                    >
                      <span
                        className={`text-[13.5px] sm:text-[14px] font-semibold transition-colors ${
                          isOpen ? "text-[#E8B84B]" : "text-white group-hover:text-[#E8B84B]"
                        }`}
                      >
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronsUp className="w-4 h-4 text-white flex-shrink-0 stroke-[2.5]" />
                      ) : (
                        <ChevronsDown className="w-4 h-4 text-[#E8B84B] flex-shrink-0 stroke-[2.5]" />
                      )}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="faq-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ 
                            height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.2, ease: "linear" }
                          }}
                          className="overflow-hidden bg-white"
                        >
                          <div className="px-5 py-3.5 sm:px-6 sm:py-4 text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed font-sans border-t border-gray-100">
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
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
