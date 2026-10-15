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

export default function VATRefundServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Select Service",
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
      q: "What is a VAT refund?",
      a: "It's a repayment from the FTA when your recoverable input VAT exceeds the output VAT you've collected during a tax period."
    },
    {
      q: "Who is eligible for a VAT refund in the UAE?",
      a: "Any VAT-registered business whose recoverable input tax exceeds its output tax for a tax period can apply, especially common for exporters, businesses with significant capital expenditures, and startups."
    },
    {
      q: "What is the VAT 311 Form?",
      a: "The VAT 311 form is the official electronic refund claim application submitted through the EmaraTax portal after filing your periodic VAT 201 return."
    },
    {
      q: "How do I apply for a VAT refund through EmaraTax?",
      a: "Log in to your EmaraTax account, navigate to the VAT dashboard, select 'VAT 311 - New Refund Request', verify your credit balance, upload valid tax invoices, and submit."
    },
    {
      q: "How long does the VAT refund process take?",
      a: "The FTA typically reviews and processes complete refund applications within 20 business days of submission. Bank transfer processing may take an additional 5 business days."
    },
    {
      q: "What documents are required for a VAT refund claim?",
      a: "Valid tax invoices, customs declarations for imported goods, export proof (if applicable), sample contracts, payment proof (bank statements), and an input tax schedule."
    },
    {
      q: "How is recoverable input VAT calculated?",
      a: "It is the total eligible VAT paid on legitimate business expenses and purchases that directly support your taxable business activities, excluding blocked expenses like entertainment."
    },
    {
      q: "Can I correct a submitted VAT refund application?",
      a: "Once submitted, you cannot directly edit the VAT 311 form. If errors or omissions are identified, you must provide clarifications or submit an amendment as requested by the FTA auditor."
    },
    {
      q: "What happens if my refund application is rejected?",
      a: "If rejected or partially approved, the FTA provides reasons. You can submit additional documentation or file an official Reconsideration Request within 40 business days of notification."
    },
    {
      q: "Do you provide support during VAT audits?",
      a: "Yes. Our FTA-registered tax agents manage the entire audit inquiry, prepare reconciliation schedules, verify invoice validity, and correspond directly with FTA auditors."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Our VAT refund specialist will contact you within 10 minutes.");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#E8B84B] selection:text-[#09203B]">
      <Header />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION (2-Column Grid on Desktop) - EXACT MATCH TO IMAGE 1
            ========================================================================= */}
        <section className="bg-[#09203b] py-12 md:py-16 relative overflow-hidden border-b-2 border-[#E8B84B]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left Column Content (7 cols on desktop) */}
              <div className="lg:col-span-7 text-white pr-0 lg:pr-4">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[45px] font-bold leading-[1.18] tracking-tight text-white mb-5">
                  VAT Refund <span className="text-[#E8B84B]">Services UAE</span> &mdash;{" "}
                  <br className="hidden sm:inline" />
                  Recover Every Dirham You&apos;re{" "}
                  <br className="hidden sm:inline" />
                  Owed
                </h1>

                <p className="text-gray-200 text-[14px] sm:text-[14.5px] leading-relaxed font-normal mb-6 max-w-xl">
                  If your input tax consistently exceeds your output tax, or you’ve made a large one-off purchase that leaves you with excess input VAT, you’re entitled to a refund from the Federal Tax Authority. But getting that money back means preparing a clean VAT 311 form, backing every claim with valid tax invoices, and following up until the FTA actually releases the funds. That’s where our VAT refund services UAE come in. At RBO Accounting Services FZE, we handle eligibility checks, documentation, EmaraTax submission, and FTA correspondence, so your refund doesn’t stall somewhere in the review queue.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 mb-6">
                  <a
                    href="#consultation-form"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-[13.5px] shadow-sm transition-all duration-150"
                  >
                    <span>Book a Free Consultation &rarr;</span>
                  </a>

                  <a
                    href="https://wa.me/971500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border border-white/20 bg-[#09203b] hover:bg-white/5 text-white font-medium text-[13.5px] transition-all duration-150"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] sm:text-[12.5px] text-white font-normal">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full border border-[#E8B84B] flex items-center justify-center flex-shrink-0">
                      <span className="w-1 h-1 rounded-full bg-[#E8B84B]" />
                    </span>
                    <span>Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full border border-[#E8B84B] flex items-center justify-center flex-shrink-0">
                      <span className="w-1 h-1 rounded-full bg-[#E8B84B]" />
                    </span>
                    <span>7 Emirates Covered</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full border border-[#E8B84B] flex items-center justify-center flex-shrink-0">
                      <span className="w-1 h-1 rounded-full bg-[#E8B84B]" />
                    </span>
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
                        <option value="Select Service">Select Service</option>
                        <option value="VAT Registration / Filing">VAT Registration / Filing</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping & Accounting</option>
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
            2. QUICK ANSWER SECTION
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Text Left */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                  QUICK ANSWER
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  How Do VAT Refunds Work in the UAE?
                </h2>
                <p className="text-gray-600 text-base sm:text-[16.5px] leading-relaxed pt-2">
                  A VAT refund lets a registered business reclaim excess input VAT — the VAT paid on eligible purchases — when it’s higher than the output VAT collected on sales for that period. Businesses apply through the EmaraTax portal using the VAT 311 form, supported by valid tax invoices, import documentation, and other financial records proving the claim. The FTA reviews the application, may request additional evidence, and once satisfied, releases the refund, usually within 20 business days of a clean, complete submission. Incomplete documentation, invalid invoices, or ineligible input tax claims are the most common reasons refund applications get delayed or rejected outright.
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#fcfbf9] border border-gray-100 text-sm font-medium text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#c4923e] flex-shrink-0" />
                    <span>VAT 311 EmaraTax Filing</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#fcfbf9] border border-gray-100 text-sm font-medium text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#c4923e] flex-shrink-0" />
                    <span>~20 Days FTA Review Cycle</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#fcfbf9] border border-gray-100 text-sm font-medium text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#c4923e] flex-shrink-0" />
                    <span>100% Verified Invoices</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#fcfbf9] border border-gray-100 text-sm font-medium text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#c4923e] flex-shrink-0" />
                    <span>Direct Bank Disbursals</span>
                  </div>
                </div>
              </div>

              {/* Illustration / Visual Right */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-[#f8fafc] p-6 text-center">
                  <img
                    src="/wp-content/uploads/2026/08/How-Does-VAT-Return-Filing-Work-in-the-UAE-e1786297603641.webp"
                    alt="How Do VAT Refunds Work in UAE"
                    className="w-full h-auto object-cover rounded-xl shadow-sm"
                  />
                  <div className="mt-4 p-4 rounded-xl bg-white border border-gray-100 text-left shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#c4923e] uppercase tracking-wider mb-1">
                      <Banknote className="w-4 h-4" />
                      <span>FTA Excess Credit Rule</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Excess input VAT is credited to your FTA account upon VAT 201 filing, enabling immediate cash refund submission via VAT 311.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ELIGIBILITY SECTION
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-[#fcfbf9] border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white p-6">
                  <img
                    src="/wp-content/uploads/2026/08/What-Is-VAT-Return-Filing-and-Who-Needs-to-Do-It-e1786297249992.webp"
                    alt="What Are VAT Refund Services, and Who Can Claim"
                    className="w-full h-auto object-cover rounded-xl shadow-sm"
                  />
                  <div className="mt-4 flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                    <span className="font-semibold text-gray-800">Who Can Claim?</span>
                    <span className="text-[#c4923e] font-bold">Exporters &bull; Startups &bull; Capex</span>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                  Eligibility
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  What Are VAT Refund Services, and Who Can Claim?
                </h2>
                <p className="text-gray-600 text-base sm:text-[16.5px] leading-relaxed pt-2">
                  A VAT refund applies when your recoverable input tax — the VAT you’ve paid on legitimate business expenses — is greater than the output tax you’ve collected from customers during a tax period. Rather than carrying that excess forward indefinitely, you can apply to the FTA to have it paid back to you directly.
                </p>
                <p className="text-gray-600 text-base sm:text-[16.5px] leading-relaxed">
                  Any VAT-registered business in the UAE can claim a refund if it meets the eligibility criteria, though in practice it tends to come up most often for exporters, businesses with large capital purchases, construction companies mid-project, and startups still in a heavy setup-spending phase before their sales catch up. You typically apply for a refund after filing your regular VAT return, once you can see that your input tax position genuinely exceeds your output tax for the period, rather than assuming it automatically each time.
                </p>

                <div className="pt-2">
                  <a
                    href="#consultation-form"
                    className="inline-flex items-center gap-2 font-semibold text-sm text-[#c4923e] hover:text-[#a0742a] transition-colors"
                  >
                    <span>Check your refund eligibility with an FTA registered agent</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SERVICES INCLUDED GRID ("Our VAT Refund Services") - EXACT MATCH TO IMAGE 1
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm block mb-2">
                What’s Included
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-bold text-[#09203B] mb-2.5">
                Our VAT Refund Services
              </h2>
              <p className="text-gray-500 text-sm sm:text-base font-sans">
                We manage every part of your return, not just the final submission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-xl mb-5 shadow-xs select-none">
                    <span>📒</span>
                  </div>
                  <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#09203B] mb-2.5 leading-snug">
                    VAT Refund Eligibility Assessment
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed font-sans">
                    We assess your VAT position to determine whether filing a refund claim is the best option or if carrying the credit forward is more beneficial.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-xl mb-5 shadow-xs select-none">
                    <span>🏛️</span>
                  </div>
                  <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#09203B] mb-2.5 leading-snug">
                    VAT 311 Form Preparation
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed font-sans">
                    Accurate preparation of your VAT 311 refund application with all required information completed before submission.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-xl mb-5 shadow-xs select-none">
                    <span>🔄</span>
                  </div>
                  <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#09203B] mb-2.5 leading-snug">
                    Supporting Document Verification
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed font-sans">
                    We review tax invoices and supporting documents to ensure your refund claim meets FTA documentation requirements.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-xl mb-5 shadow-xs select-none">
                    <span>📊</span>
                  </div>
                  <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#09203B] mb-2.5 leading-snug">
                    Recoverable VAT Calculation
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed font-sans">
                    Our experts calculate your exact recoverable VAT amount, helping you maximize eligible refunds while remaining compliant.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-xl mb-5 shadow-xs select-none">
                    <span>🌐</span>
                  </div>
                  <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#09203B] mb-2.5 leading-snug">
                    EmaraTax Refund Submission
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed font-sans">
                    Your VAT refund application is submitted securely through EmaraTax, with confirmation and progress monitored throughout the process.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-xl mb-5 shadow-xs select-none">
                    <span>🧾</span>
                  </div>
                  <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#09203B] mb-2.5 leading-snug">
                    FTA Correspondence &amp; Appeals
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed font-sans">
                    We respond to FTA queries, provide additional documentation when requested, and assist with appeals or rectification if a refund claim is rejected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. TARGET AUDIENCE GRID ("Built for Every Stage of Business") - EXACT MATCH TO IMAGE 1
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-[#f8f6f1] border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm block mb-2">
                Who We Serve
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-bold text-[#09203B] mb-2">
                Built for Every Stage of Business
              </h2>
            </div>

            {/* Row 1: 3 equal cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div className="text-2xl mb-3.5 select-none">
                  <span>🚀</span>
                </div>
                <h3 className="font-serif text-[18px] sm:text-[18.5px] font-bold text-[#09203B] mb-2">
                  Startups &amp; SMEs
                </h3>
                <p className="text-[13.5px] text-gray-500 font-sans leading-relaxed">
                  Setting up their first proper bookkeeping system.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div className="text-2xl mb-3.5 select-none">
                  <span>🏢</span>
                </div>
                <h3 className="font-serif text-[18px] sm:text-[18.5px] font-bold text-[#09203B] mb-2">
                  Free Zone Companies
                </h3>
                <p className="text-[13.5px] text-gray-500 font-sans leading-relaxed">
                  Navigating specific jurisdiction requirements.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div className="text-2xl mb-3.5 select-none">
                  <span>🛒</span>
                </div>
                <h3 className="font-serif text-[18px] sm:text-[18.5px] font-bold text-[#09203B] mb-2">
                  E-commerce Businesses
                </h3>
                <p className="text-[13.5px] text-gray-500 font-sans leading-relaxed">
                  Managing high transaction volumes across multiple channels.
                </p>
              </div>
            </div>

            {/* Row 2: 2 equal cards (50% / 50%) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div className="text-2xl mb-3.5 select-none">
                  <span>🚢</span>
                </div>
                <h3 className="font-serif text-[18px] sm:text-[18.5px] font-bold text-[#09203B] mb-2">
                  Trading Companies
                </h3>
                <p className="text-[13.5px] text-gray-500 font-sans leading-relaxed">
                  Handling cross-border VAT questions.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div className="text-2xl mb-3.5 select-none">
                  <span>🧾</span>
                </div>
                <h3 className="font-serif text-[18px] sm:text-[18.5px] font-bold text-[#09203B] mb-2">
                  Service-Based Businesses
                </h3>
                <p className="text-[13.5px] text-gray-500 font-sans leading-relaxed">
                  Straightforward, reliable monthly reporting without unnecessary complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. PROCESS STEPS ("How Our VAT Refund Process Works")
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                Our Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-3">
                How Our VAT Refund Process Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  desc: "We start by understanding your business activity, tax period, and current bookkeeping setup."
                },
                {
                  step: 2,
                  title: "Business & Eligibility Review",
                  desc: "We check your registration status, filing history, and input-output tax balance."
                },
                {
                  step: 3,
                  title: "Collecting Supporting Documents",
                  desc: "We gather your tax invoices, purchase records, import documentation, and bank statements."
                },
                {
                  step: 4,
                  title: "Input VAT Analysis",
                  desc: "We go through each invoice to confirm the input tax is genuinely recoverable, not blocked under UAE VAT rules."
                },
                {
                  step: 5,
                  title: "VAT Refund Calculation",
                  desc: "We calculate your exact excess input VAT claim based on verified figures."
                },
                {
                  step: 6,
                  title: "VAT 311 Form Preparation",
                  desc: "We complete the form accurately, backed by the documentation the FTA expects to see."
                },
                {
                  step: 7,
                  title: "EmaraTax Submission",
                  desc: "We submit your refund application through the EmaraTax portal."
                },
                {
                  step: 8,
                  title: "FTA Follow-Up & Tracking",
                  desc: "We monitor the application status and respond to any FTA queries on your behalf."
                }
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-[#fcfbf9] border border-gray-100 hover:border-[#E8B84B]/40 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#09203B] text-[#E8B84B] font-bold text-sm flex items-center justify-center mb-5 shadow-sm">
                      {item.step}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. WHY CHOOSE US SECTION ("Why Businesses Choose RBO Accounting Services FZE") - EXACT MATCH TO IMAGE 1
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm block mb-2">
                Why RBO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-bold text-[#09203B] mb-2">
                Why Businesses Choose RBO Accounting Services FZE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-150 shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Check className="w-4 h-4 stroke-[3] text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-[17px] font-bold text-[#09203B] mb-1 leading-snug">
                    FTA Registered Tax Agents
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-gray-500 leading-relaxed font-sans">
                    Our VAT and compliance guidance is grounded in what the Federal Tax Authority actually requires.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-150 shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Users className="w-4 h-4 text-white fill-white" />
                </div>
                <div>
                  <h3 className="font-serif text-[17px] font-bold text-[#09203B] mb-1 leading-snug">
                    Dedicated Account Manager
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-gray-500 leading-relaxed font-sans">
                    Every client gets a dedicated account manager, not a rotating cast of unfamiliar staff.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-150 shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <span className="font-bold text-[17px] text-white font-sans leading-none">$</span>
                </div>
                <div>
                  <h3 className="font-serif text-[17px] font-bold text-[#09203B] mb-1 leading-snug">
                    Transparent Pricing
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-gray-500 leading-relaxed font-sans">
                    Clear from the start, with no surprise fees added later.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-150 shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-[17px] font-bold text-[#09203B] mb-1 leading-snug">
                    Deadlines Taken Seriously
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-gray-500 leading-relaxed font-sans">
                    We understand what a missed filing actually costs you.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-150 shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Save className="w-4 h-4 text-white fill-white" />
                </div>
                <div>
                  <h3 className="font-serif text-[17px] font-bold text-[#09203B] mb-1 leading-snug">
                    Fluent Across Platforms
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-gray-500 leading-relaxed font-sans">
                    Xero, Zoho, and QuickBooks — you&apos;re never forced to change systems to work with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. BENEFITS OF PROFESSIONAL VAT REFUND ASSISTANCE - EXACT MATCH TO IMAGE 1
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left max-w-5xl mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-[32px] font-bold text-[#09203B] mb-2 leading-snug">
                Benefits of Professional VAT Refund Assistance
              </h2>
              <p className="text-gray-500 text-[13.5px] sm:text-[14px] font-sans leading-relaxed">
                Working with the right accounting consulting firm in Dubai gives you better financial visibility, more accurate records, and stronger regulatory compliance across VAT and corporate tax.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Benefit 1 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-150 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div className="text-2xl mb-4 select-none">
                  <span>👁️</span>
                </div>
                <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed font-sans">
                  File accurate VAT refunds on time to meet FTA requirements and avoid unnecessary administrative penalties.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-150 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div className="text-2xl mb-4 select-none flex items-center text-[#E8B84B]">
                  <Check className="w-5 h-5 text-[#E8B84B] stroke-[3.5]" />
                </div>
                <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed font-sans">
                  Ensure every eligible input tax claim is identified so you recover the VAT your business is entitled to.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-150 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div className="text-2xl mb-4 select-none">
                  <span>💧</span>
                </div>
                <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed font-sans">
                  Maintain reliable financial records with properly reconciled VAT transactions and accurate reporting.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-150 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start">
                <div className="text-2xl mb-4 select-none">
                  <span>⏱️</span>
                </div>
                <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed font-sans">
                  Keep organized filing records and supporting documentation, making any future FTA inquiries or audits easier to manage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. SERVICE AREAS ACROSS THE UAE (Interactive Tabs & Map)
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-[#fcfbf9] border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                Locations We Serve
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-3">
                Service Areas Across the UAE
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Our team supports businesses across all UAE Emirates, wherever your company is registered — in person or remotely, mainland or free zone.
              </p>
            </div>

            {/* Emirates Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
              {mapLocations.map((loc, idx) => (
                <button
                  key={loc.name}
                  onClick={() => setActiveLocation(idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 ${
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
            10. CLIENT REVIEWS / TESTIMONIALS SECTION
            ========================================================================= */}
        <TestimonialsSection />

        {/* =========================================================================
            11. FREQUENTLY ASKED QUESTIONS ACCORDION - EXACT MATCH TO IMAGE 1
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
