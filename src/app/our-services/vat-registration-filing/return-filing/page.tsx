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
  Banknote, NotepadText, TrendingUp, MessageSquare, DollarSign, Clock, Server, Save, Search, Eye, AlertCircle
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function VATReturnFilingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
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
      q: "What is VAT return filing?",
      a: "It's the process of reporting your business's output tax and input tax to the Federal Tax Authority (FTA) for a given tax period, resulting in either a tax liability payment or a refund claim."
    },
    {
      q: "Who needs to file VAT returns in the UAE?",
      a: "Any VAT-registered business in the UAE must file, even if there was zero VAT activity during that tax period (a nil return must still be submitted on time to prevent automatic administrative penalties)."
    },
    {
      q: "What is the VAT filing deadline?",
      a: "Returns and related payments are strictly due within 28 days following the end of your assigned tax period (or the next business day if the 28th falls on a public holiday or weekend)."
    },
    {
      q: "What is the VAT 201 form?",
      a: "It's the official Federal Tax Authority electronic form used to declare your standard-rated supplies, zero-rated supplies, exempt supplies, imports under reverse charge, and recoverable input tax through the EmaraTax portal."
    },
    {
      q: "How is output tax different from input tax?",
      a: "Output tax is the 5% VAT you collect from your clients and customers on taxable sales. Input tax is the VAT you incur on valid business expenses and purchases, which can be reclaimed against output tax."
    },
    {
      q: "Can I amend a submitted VAT return?",
      a: "Yes. If an error or omission resulting in a tax difference exceeding AED 10,000 is discovered after submission, a formal Voluntary Disclosure (Form 211) must be submitted through EmaraTax."
    },
    {
      q: "What happens if I miss the VAT filing deadline?",
      a: "The FTA imposes an immediate administrative penalty of AED 1,000 for the first late submission, and AED 2,000 for subsequent repetitions within 24 months, plus progressive late payment penalties on unpaid tax liabilities."
    },
    {
      q: "What documents are required for return filing?",
      a: "Standard tax invoices with valid TRNs, purchase bills, customs import declarations, credit and debit notes, bank statements, sales registers, and input/output VAT ledgers."
    },
    {
      q: "How long does VAT filing take?",
      a: "Depending on transaction volumes, once your accounting ledgers are reconciled, our tax agents typically finalize calculations, prepare the VAT 201 form, and complete submission within 2 to 4 business days."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Our VAT specialist will contact you within 10 minutes.");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#E8B84B] selection:text-[#09203B]">
      <Header />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION (2-Column Grid on Desktop)
            ========================================================================= */}
        <section className="bg-[#0b1329] py-14 md:py-20 relative overflow-hidden border-b-2 border-[#E8B84B]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left Column Content (7 cols on desktop) */}
              <div className="lg:col-span-7 text-white space-y-6 pr-0 lg:pr-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8B84B]/15 border border-[#E8B84B]/35 text-[#E8B84B] text-[12.5px] font-semibold tracking-wide">
                  <span>★</span> FTA Registered Tax Agents &bull; 100% Compliant
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold leading-[1.2] text-white">
                  VAT Return{" "}
                  <span className="text-[#E8B84B]">Filing UAE</span>{" "}
                  — Accurate, On-Time FTA Submissions
                </h1>

                <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed max-w-[620px]">
                  Every VAT-registered business in the UAE has to submit returns on a set schedule, and getting VAT return filing UAE right means more than just meeting a date. It means your input tax, output tax, and net VAT payable are calculated correctly, your supporting records line up with what you’re reporting, and the FTA has nothing to flag if it ever looks closer at your account. At RBO Accounting Services FZE, we handle the full VAT return filing UAE process for businesses across the country, so your quarterly or monthly submissions go in clean, complete, and on time.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-1">
                  <a
                    href="#form"
                    className="bg-[#E8B84B] hover:bg-[#d4a338] text-gray-900 font-bold py-3.5 px-7 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-[14px] transform hover:-translate-y-0.5"
                  >
                    Book a Free Consultation &rarr;
                  </a>
                  <a
                    href="https://wa.me/971508051857"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold py-3.5 px-6 rounded-lg transition-all flex items-center justify-center gap-2 text-[14px]"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Us
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[12px] font-medium text-gray-200 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#E8B84B]"></div>
                    Free Initial Consultation
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#E8B84B]"></div>
                    7 Emirates Covered
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#E8B84B]"></div>
                    100% FTA Compliant Solutions
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Consultation Card (5 cols on desktop) */}
              <div className="lg:col-span-5 w-full max-w-[430px] mx-auto lg:ml-auto">
                <div id="form" className="bg-white rounded-2xl shadow-2xl p-7 md:p-8 relative border border-gray-100">
                  <h3 className="text-[22px] font-serif font-bold text-gray-900 mb-1">
                    Get a Free Consultation
                  </h3>
                  <p className="text-[12.5px] text-gray-500 mb-5">
                    Our expert will reply within 10 minutes
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-[13.5px] focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-[13.5px] focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    <div className="relative">
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full appearance-none border border-gray-300 rounded-lg px-3.5 py-2.5 pr-10 text-[13.5px] focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] bg-white text-gray-800"
                      >
                        <option value="">Select Service</option>
                        <option value="VAT Return Filing">VAT Return Filing</option>
                        <option value="VAT Registration">VAT Registration</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping &amp; Accounting</option>
                        <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                        <option value="Audit Services">Audit Services</option>
                        <option value="Payroll Services">Payroll Services</option>
                        <option value="Virtual CFO">Virtual CFO</option>
                        <option value="AML Compliance">AML Compliance</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="relative">
                      <select
                        required
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full appearance-none border border-gray-300 rounded-lg px-3.5 py-2.5 pr-10 text-[13.5px] focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] bg-white text-gray-800"
                      >
                        <option value="">Your Emirate</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                        <option value="Fujairah">Fujairah</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#E8B84B] hover:bg-[#d4a338] text-gray-900 font-bold py-3.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm text-[14px]"
                    >
                      Request Free Consultation &rarr;
                    </button>
                    <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-gray-500 font-normal text-center">
                      <Lock className="w-3.5 h-3.5 text-[#E8B84B] flex-shrink-0" />
                      <span>Your information is 100% secure and confidential</span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            2. QUICK ANSWER SECTION
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#fcfbf9] border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-[#E8B84B] border-y border-r border-gray-100 space-y-4">
              <span className="text-[#c4923e] font-bold text-xs uppercase tracking-widest block">
                QUICK ANSWER
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-snug">
                How Does VAT Return Filing Work in the UAE?
              </h2>
              <p className="text-gray-600 text-[14.5px] sm:text-[15px] leading-relaxed">
                VAT-registered businesses in the UAE submit their VAT return using the VAT 201 form through the EmaraTax portal, usually on a quarterly basis, though larger businesses may file monthly depending on what the FTA assigns at registration. The return reports your output tax (VAT collected on sales) against your input tax (VAT paid on eligible purchases), and the difference is either the net VAT you owe or the amount you can reclaim. Returns are due within 28 days of the end of your tax period, and missing that window brings administrative penalties that add up the longer the return stays unfiled. Keeping accurate purchase and sales records throughout the period is what makes the actual filing straightforward rather than a last-minute scramble.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ELIGIBILITY SECTION
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-[#c4923e] font-bold text-xs uppercase tracking-widest">
                  Eligibility
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight">
                  What Is VAT Return Filing, and Who Needs to Do It?
                </h2>
                <div className="space-y-4 text-gray-600 text-[14.5px] leading-relaxed">
                  <p>
                    A VAT return is simply your business’s periodic report to the Federal Tax Authority, showing how much VAT you collected from customers and how much you paid to suppliers during a specific tax period. Anyone with an active VAT registration in the UAE must file, whether or not there was any VAT activity that period — a nil return is still a return, and skipping it because “nothing happened” is a common mistake that still triggers a penalty.
                  </p>
                  <p>
                    Your filing period depends on what the FTA assigned when you registered. Most SMEs file quarterly, while businesses with an annual turnover of AED 150 million or more typically file monthly. Whatever your schedule, your VAT return filing UAE deadline falls 28 days after the end of that tax period, and that date doesn’t move for weekends or public holidays, so it’s worth marking well in advance rather than relying on a reminder email.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="#form"
                    className="inline-flex items-center gap-2 bg-[#09203B] hover:bg-[#14375e] text-white font-bold py-3 px-6 rounded-lg text-[13.5px] transition-colors"
                  >
                    Check Your VAT Filing Schedule &rarr;
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[#09203B] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl border-t-4 border-[#E8B84B]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E8B84B]/20 flex items-center justify-center text-[#E8B84B]">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-[15px]">28-Day Strict Deadline</h4>
                        <p className="text-xs text-gray-400">Strictly enforced by the FTA</p>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4 space-y-3 text-[13px] text-gray-300">
                      <div className="flex justify-between items-center py-1">
                        <span>Standard SME Period:</span>
                        <span className="font-bold text-[#E8B84B]">Quarterly (3 Months)</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span>Turnover &gt; AED 150M:</span>
                        <span className="font-bold text-[#E8B84B]">Monthly</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span>Filing Portal:</span>
                        <span className="font-bold text-white">FTA EmaraTax Portal</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span>Late Filing Penalty:</span>
                        <span className="font-bold text-red-400">AED 1,000 to AED 2,000+</span>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-[12px] text-gray-300">
                      💡 <strong>Important Note:</strong> Even with zero sales or zero expenses in a tax period, a <em>Nil VAT Return</em> must still be submitted to avoid automatic fines.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SERVICES INCLUDED GRID ("Our VAT Return Filing Services")
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-[#FAFAFA] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#c4923e] font-bold text-xs uppercase tracking-widest block mb-2">
                What’s Included
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
                Our VAT Return Filing Services
              </h2>
              <p className="text-gray-600 text-[15px]">
                We manage every part of your return, not just the final submission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">📒</div>
                  <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2.5">
                    VAT Return Preparation
                  </h3>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed">
                    Accurate preparation of your VAT 201 return using verified financial records, ensuring every figure is complete before submission.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-5 text-[12px] text-[#c4923e] font-bold flex items-center gap-1">
                  Verified Ledgers &bull; EmaraTax Ready &rarr;
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">🏦</div>
                  <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2.5">
                    Input &amp; Output Tax Reconciliation
                  </h3>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed">
                    We reconcile input and output VAT, calculate your final VAT liability, and identify any VAT refund you may be eligible to claim.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-5 text-[12px] text-[#c4923e] font-bold flex items-center gap-1">
                  Zero Discrepancies &bull; Max Recovery &rarr;
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">🔄</div>
                  <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2.5">
                    VAT Classification Review
                  </h3>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed">
                    Every transaction is reviewed to ensure it is correctly classified as standard-rated, zero-rated, exempt, or out of scope before filing.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-5 text-[12px] text-[#c4923e] font-bold flex items-center gap-1">
                  Mainland &amp; Designated Zones &rarr;
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2.5">
                    Input Tax Eligibility Check
                  </h3>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed">
                    We verify recoverable VAT on every expense and identify non-claimable items to help you remain fully compliant with FTA regulations.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-5 text-[12px] text-[#c4923e] font-bold flex items-center gap-1">
                  Blocked Input Tax Filtered Out &rarr;
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">🌐</div>
                  <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2.5">
                    EmaraTax Submission
                  </h3>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed">
                    Your VAT return is submitted securely through EmaraTax, with filing confirmation and compliance records maintained for future reference.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-5 text-[12px] text-[#c4923e] font-bold flex items-center gap-1">
                  Filing Acknowledgment &bull; Safe Archiving &rarr;
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">🧾</div>
                  <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2.5">
                    VAT Advisory &amp; Voluntary Disclosure
                  </h3>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed">
                    Expert guidance on complex VAT matters, transaction treatment, error correction, and voluntary disclosure for previously submitted returns.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-5 text-[12px] text-[#c4923e] font-bold flex items-center gap-1">
                  Form 211 &bull; Penalty Mitigation &rarr;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. TARGET AUDIENCE GRID ("Built for Every Stage of Business")
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#c4923e] font-bold text-xs uppercase tracking-widest block mb-2">
                Who We Serve
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
                Built for Every Stage of Business
              </h2>
              <p className="text-gray-600 text-[15px]">
                Specialized tax expertise tailored to your company setup and commercial activities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: "🚀",
                  title: "Startups & SMEs",
                  desc: "Setting up their first proper bookkeeping system."
                },
                {
                  icon: "🏢",
                  title: "Free Zone Companies",
                  desc: "Navigating specific jurisdiction requirements and designated zones."
                },
                {
                  icon: "🛒",
                  title: "E-commerce Businesses",
                  desc: "Managing high transaction volumes across multiple channels."
                },
                {
                  icon: "🚢",
                  title: "Trading Companies",
                  desc: "Handling cross-border VAT questions and customs import declarations."
                },
                {
                  icon: "🧾",
                  title: "Service Businesses",
                  desc: "Straightforward, reliable monthly reporting without unnecessary complexity."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAFAFA] rounded-xl p-6 border border-gray-200/80 hover:border-[#E8B84B] hover:bg-white hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-serif font-bold text-[16px] text-[#09203B] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-[12.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. PROCESS STEPS ("How Our VAT Return Filing Process Works")
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-[#0b1329] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#E8B84B] font-bold text-xs uppercase tracking-widest block mb-2">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
                How Our VAT Return Filing Process Works
              </h2>
              <p className="text-gray-300 text-[15px]">
                A rigorous, multi-point compliance workflow to safeguard your business against FTA penalties.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  desc: "We start by understanding your business activity, tax period, and current bookkeeping setup."
                },
                {
                  step: "2",
                  title: "Collecting Records",
                  desc: "We gather your sales invoices, purchase invoices, credit and debit notes, and bank statements for the period."
                },
                {
                  step: "3",
                  title: "Transaction Review",
                  desc: "We go through each transaction to confirm correct VAT treatment — standard-rated, zero-rated, exempt, or reverse charge."
                },
                {
                  step: "4",
                  title: "VAT Calculation",
                  desc: "We calculate your total output tax, recoverable input tax, and net VAT payable or refundable."
                },
                {
                  step: "5",
                  title: "Return Preparation",
                  desc: "We prepare your VAT 201 form with accurate figures ready for client review and approval."
                },
                {
                  step: "6",
                  title: "EmaraTax Submission",
                  desc: "We file your return through the EmaraTax portal well before your deadline window."
                },
                {
                  step: "7",
                  title: "Final Compliance Check",
                  desc: "We double-check the submitted figures against your records one last time."
                },
                {
                  step: "8",
                  title: "Ongoing Support",
                  desc: "You receive monthly reports along with a compliance review, so nothing slips through unnoticed."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#E8B84B]/50 transition-all duration-200 relative group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E8B84B] text-gray-900 font-bold flex items-center justify-center text-[16px] mb-4 group-hover:scale-110 transition-transform shadow-md">
                    {item.step}
                  </div>
                  <h4 className="font-serif font-bold text-[17px] text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. WHY CHOOSE US SECTION ("Why Businesses Choose RBO")
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#c4923e] font-bold text-xs uppercase tracking-widest block mb-2">
                Why RBO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
                Why Businesses Choose RBO Accounting Services FZE
              </h2>
              <p className="text-gray-600 text-[15px]">
                Built on responsiveness, transparent practices, and deep UAE tax regulatory knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {/* Feature 1 */}
              <div className="bg-[#FAFAFA] rounded-2xl p-7 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#09203B] text-[#E8B84B] flex items-center justify-center mb-5">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2">
                  FTA Registered Tax Agents
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">
                  Our VAT and compliance guidance is grounded in what the Federal Tax Authority actually requires and enforces.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#FAFAFA] rounded-2xl p-7 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#09203B] text-[#E8B84B] flex items-center justify-center mb-5">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">
                  Clear from the start, with no surprise fees added later. Fixed monthly or quarterly return packages.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#FAFAFA] rounded-2xl p-7 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#09203B] text-[#E8B84B] flex items-center justify-center mb-5">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2">
                  Fluent Across Platforms
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">
                  Xero, Zoho Books, QuickBooks, Tally, and custom ERPs — you're never forced to change systems to work with us.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#FAFAFA] rounded-2xl p-7 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#09203B] text-[#E8B84B] flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2">
                  Dedicated Account Manager
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">
                  Every client gets a dedicated account manager, not a rotating cast of unfamiliar staff. Direct WhatsApp access.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-[#FAFAFA] rounded-2xl p-7 border border-gray-200 lg:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-[#09203B] text-[#E8B84B] flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[19px] text-[#09203B] mb-2">
                  Deadlines Taken Seriously
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">
                  We understand what a missed filing actually costs you. All client VAT files are processed well before the 28th to prevent last-minute server congestion or penalties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. BENEFITS SECTION ("Benefits of Professional VAT Return Filing")
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-[#FAFAFA] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
                Benefits of Professional VAT Return Filing
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Working with the right accounting consulting firm in Dubai gives you better financial visibility, more accurate records, and stronger regulatory compliance across VAT and corporate tax.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">👁️</div>
                <h4 className="font-serif font-bold text-[17px] text-[#09203B] mb-2">
                  Zero Penalties
                </h4>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  File accurate VAT returns on time to meet FTA requirements and avoid unnecessary administrative penalties.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">✓</div>
                <h4 className="font-serif font-bold text-[17px] text-[#09203B] mb-2">
                  Maximized Refunds
                </h4>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  Ensure every eligible input tax claim is identified so you recover the VAT your business is entitled to.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">💧</div>
                <h4 className="font-serif font-bold text-[17px] text-[#09203B] mb-2">
                  Clean Financials
                </h4>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  Maintain reliable financial records with properly reconciled VAT transactions and accurate reporting.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">⏱️</div>
                <h4 className="font-serif font-bold text-[17px] text-[#09203B] mb-2">
                  Audit-Ready Archives
                </h4>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  Keep organized filing records and supporting documentation, making any future FTA inquiries or audits easy to manage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. LOCATIONS / SERVICE AREAS ACROSS THE UAE (Interactive Map + Tabs)
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#c4923e] font-bold text-xs uppercase tracking-widest block mb-2">
                Locations We Serve
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
                Service Areas Across the UAE
              </h2>
              <p className="text-gray-600 text-[15px]">
                Our team supports businesses across the UAE, wherever your company is registered — in person or remotely, mainland or free zone.
              </p>
            </div>

            {/* Interactive Tabs + Map Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Emirates Tabs */}
              <div className="lg:col-span-4 flex flex-col gap-2.5">
                {mapLocations.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLocation(idx)}
                    className={`text-left px-5 py-3.5 rounded-xl font-medium text-[14px] transition-all flex items-center justify-between ${
                      activeLocation === idx
                        ? "bg-[#09203B] text-white shadow-md font-bold"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{loc.name}</span>
                    <span className={`text-xs ${activeLocation === idx ? "text-[#E8B84B]" : "text-gray-400"}`}>
                      &bull; Covered
                    </span>
                  </button>
                ))}
              </div>

              {/* Right Column: Embedded Map */}
              <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-[420px] bg-gray-100 relative">
                <iframe
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${mapLocations[activeLocation].mapQuery}&t=m&z=11&output=embed&iwloc=near`}
                  title={mapLocations[activeLocation].name}
                  aria-label={mapLocations[activeLocation].name}
                  className="w-full h-full min-h-[420px] border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. CLIENT REVIEWS / TESTIMONIALS SECTION
            ========================================================================= */}
        <TestimonialsSection />

        {/* =========================================================================
            11. FAQ ACCORDION SECTION
            ========================================================================= */}
        <section className="py-20 md:py-24 bg-[#FAFAFA] border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#c4923e] font-bold text-xs uppercase tracking-widest block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
                VAT Return Filing UAE &mdash; FAQs
              </h2>
              <p className="text-gray-600 text-[14.5px]">
                Clear answers to your most common UAE VAT return filing questions.
              </p>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-6 py-4.5 text-left font-serif font-bold text-[16px] text-gray-900 hover:text-[#c4923e] flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 shrink-0">
                      {activeFaq === idx ? (
                        <ChevronsUp className="w-5 h-5 text-[#c4923e]" />
                      ) : (
                        <ChevronsDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-[14px] text-gray-600 leading-relaxed border-t border-gray-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. BOTTOM CTA BANNER
            ========================================================================= */}
        <section className="bg-gradient-to-r from-[#09203B] via-[#0b1b36] to-[#09203B] py-16 text-white text-center border-t-2 border-[#E8B84B]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="inline-block bg-[#E8B84B]/20 text-[#E8B84B] border border-[#E8B84B]/40 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              On-Time &bull; Error-Free &bull; 100% Compliant
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Stay Compliant. Avoid Penalties. File With Confidence.
            </h2>
            <p className="text-gray-300 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Let RBO Accounting Services FZE manage your complete VAT return filing process so you can focus on growing your business without tax stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="#form"
                className="bg-[#E8B84B] hover:bg-[#d4a338] text-gray-900 font-bold px-8 py-3.5 rounded-lg shadow-md transition-all text-[14px]"
              >
                Book a Free Consultation &rarr;
              </a>
              <a
                href="https://wa.me/971508051857"
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold px-7 py-3.5 rounded-lg transition-all text-[14px] flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
