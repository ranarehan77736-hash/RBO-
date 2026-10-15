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

export default function FTARecordsAmendmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "FTA Records Amendment",
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
      q: "What is an FTA records amendment?",
      a: "It's the process of updating your business's registered information with the Federal Tax Authority through the EmaraTax portal."
    },
    {
      q: "When should I update my EmaraTax records?",
      a: "Whenever your trade license, business activity, company name, address, contact details, or ownership structure changes."
    },
    {
      q: "How do I update my trade license on EmaraTax?",
      a: "You submit an amendment request through the portal with your renewed or updated trade license attached as supporting documentation."
    },
    {
      q: "How can I amend my TRN details?",
      a: "You submit a TRN amendment request through EmaraTax with the correct updated information and any required supporting documents."
    },
    {
      q: "Can I change my business activity with the FTA?",
      a: "Yes, business activity amendments are submitted through the same EmaraTax amendment process."
    },
    {
      q: "How do I amend my VAT registration?",
      a: "You submit a VAT registration amendment request through EmaraTax reflecting the specific changes to your business details."
    },
    {
      q: "How long does the amendment process take?",
      a: "Timelines vary depending on the type of change and how quickly required documents are provided, though straightforward amendments generally process within a reasonable timeframe."
    },
    {
      q: "What happens if I don't update my FTA records?",
      a: "Outdated records can cause complications during filings, refund applications, or audits, and may lead to compliance issues down the line."
    },
    {
      q: "Can you handle the complete amendment process?",
      a: "Yes, we manage everything from document collection through EmaraTax submission and FTA follow-up."
    },
    {
      q: "Do you assist businesses across all Emirates?",
      a: "Yes, we support FTA records amendment requests for businesses throughout the UAE."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Our FTA records specialist will contact you within 10 minutes.");
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
                  FTA Records <span className="text-[#E8B84B]">Amendment UAE</span> &mdash;{" "}
                  <br className="hidden sm:inline" />
                  Keep Your Tax Records{" "}
                  <br className="hidden sm:inline" />
                  Accurate and Current
                </h1>

                <p className="text-gray-300 text-sm sm:text-[14.5px] leading-relaxed mb-8 max-w-2xl font-sans">
                  Businesses change &mdash; you renew a trade license, add a new business activity, move offices, or bring in a new authorized signatory. But if that change never makes it into your EmaraTax profile, your FTA records fall out of sync with reality, and that mismatch tends to surface at the worst possible time, usually during a VAT filing or a tax audit. That&apos;s exactly what our FTA records amendment UAE service exists to prevent. At RBO Accounting Services FZE, we handle trade license updates, TRN detail corrections, VAT registration amendments, and every other change your FTA profile needs to stay accurate.
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
                    href="https://wa.me/971508051857?text=Hello%20RBO%20Accounting,%20I%20need%20FTA%20Records%20Amendment"
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
                        <option value="FTA Records Amendment">FTA Records Amendment</option>
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
                  When Do You Need an FTA Records Amendment?
                </h2>
                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans">
                  An FTA records amendment updates the information the Federal Tax Authority holds on your business through the EmaraTax portal. You&apos;ll need one whenever your trade license changes, your business activity shifts, your company name or address changes, your authorized signatory or shareholding changes, or any detail tied to your VAT or corporate tax registration no longer matches your actual business setup. Submitting the amendment promptly through EmaraTax, backed by the right supporting documents, keeps your tax profile accurate and avoids mismatches that can complicate future filings, refunds, or audits.
                </p>
              </div>

              {/* Image Right (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-FTA-Audit-Assistance-Covers.webp"
                    alt="When Do You Need an FTA Records Amendment?"
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

              {/* Image Left (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-is-VAT-Registration-in-the-UAE-at-a-Glance.webp"
                    alt="What Is an FTA Records Amendment, and When Do You Need One?"
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
                  What Is an FTA Records Amendment, and When Do You Need One?
                </h2>
                <div className="space-y-3.5 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans">
                  <p>
                    An FTA records amendment is simply the formal process of updating your business&apos;s registered details with the Federal Tax Authority, whether that&apos;s your trade license, your TRN information, or your business activity classification. The FTA expects your EmaraTax profile to reflect your business accurately at all times, not just at the moment you first registered.
                  </p>
                  <p>
                    You&apos;ll typically need to submit an amendment when your trade license is renewed with new details, you add or remove a business activity, your company changes its legal name, you relocate offices, your contact details change, or there&apos;s a shift in shareholding or authorized signatories. Mainland companies, free zone companies, and offshore entities all fall under this same requirement &mdash; the specific documents may differ slightly, but the obligation to keep records current doesn&apos;t.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. OUR FTA RECORDS AMENDMENT SERVICES (6 Cards - 3x2 Grid) - EXACT MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                What&apos;s Included
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-3">
                Our FTA Records Amendment Services
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
                  TRN &amp; VAT Registration Amendments
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  We update your TRN details and VAT registration information to ensure your tax records remain accurate and compliant.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🏦
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  Corporate Tax Registration Updates
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  We process amendments to your corporate tax registration, including changes required by the FTA.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🔄
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  Business &amp; Trade License Updates
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Keep your EmaraTax profile aligned with your latest trade license details and business activity information.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  📊
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  Company Information Changes
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  We update company names, registered addresses, email addresses, and contact numbers in your tax profile.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🌐
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  Ownership &amp; Signatory Amendments
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Manage changes to authorized signatories, shareholders, partners, and company ownership structure with complete documentation.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🧾
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  EmaraTax Amendment Submission
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  We prepare and submit all amendments through EmaraTax with the correct supporting documents, ensuring changes are processed accurately the first time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. WHO WE SERVE ("Built for Every Stage of Business") - EXACT MATCH
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
            6. OUR PROCESS (8 Step Cards - 4x2 Grid) - EXACT MATCH
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
                  Initial Compliance Review
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We check your current EmaraTax profile against your actual business details to spot mismatches.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Verification of Existing Records
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We confirm exactly what&apos;s currently on file with the FTA.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Identifying Required Amendments
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We map out precisely which fields need updating based on your recent business changes.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Document Collection and Validation
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We gather the supporting documents the FTA requires for each specific amendment type.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  5
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  EmaraTax Portal Submission
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We submit your amendment request through the portal accurately and completely.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  6
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  FTA Application Review
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We monitor the application as the FTA processes it.
                </p>
              </div>

              {/* Step 7 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  7
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Supporting Documentation Upload
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We respond promptly if the FTA requests any additional evidence.
                </p>
              </div>

              {/* Step 8 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  8
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  FTA Communication and Follow-Up
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We handle any correspondence directly so you&apos;re not left chasing updates yourself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. WHY RBO (Why Businesses Choose RBO Accounting Services FZE) - EXACT MATCH
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
            8. BENEFITS OF PROFESSIONAL VAT RETURN FILING - EXACT MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-10 max-w-4xl">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Benefits of Professional VAT Return Filing
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
            9. LOCATIONS WE SERVE (EMIRATES TABS + MAP) - EXACT MATCH
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
            10. CLIENT REVIEWS / TESTIMONIALS SECTION - EXACT MATCH
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
            11. FREQUENTLY ASKED QUESTIONS ACCORDION - EXACT MATCH
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
