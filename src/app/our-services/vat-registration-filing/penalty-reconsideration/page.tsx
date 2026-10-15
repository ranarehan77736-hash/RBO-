"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Check, ArrowRight, Lock, MapPin,
  ChevronDown, ChevronsDown, ChevronsUp,
  Briefcase, BarChart, Cloud,
  ShieldCheck, HelpCircle, Users, CheckCircle2,
  Banknote, NotepadText, TrendingUp, MessageSquare, DollarSign, Clock, Server
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PenaltyReconsiderationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "VAT Penalty Reconsideration",
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
      q: "What is VAT penalty reconsideration?",
      a: "It's a formal request asking the FTA to review, reduce, or waive an administrative penalty already issued to your business."
    },
    {
      q: "Who can apply for an FTA penalty reconsideration?",
      a: "Any business that has received an administrative penalty and has valid, demonstrable grounds for the request."
    },
    {
      q: "What is the difference between a reconsideration request and an appeal?",
      a: "Reconsideration is generally the first formal step directly with the FTA, while further dispute mechanisms exist if that request doesn't resolve the matter."
    },
    {
      q: "How do I submit a reconsideration request to the FTA?",
      a: "Through EmaraTax, using the reconsideration request form along with your supporting evidence and documentation."
    },
    {
      q: "What documents are required?",
      a: "Typically your FTA penalty notice, VAT registration certificate, trade license, relevant VAT returns, and supporting evidence tied to your specific case."
    },
    {
      q: "How long does the reconsideration process take?",
      a: "Timelines vary by case complexity, though submitting a complete, well-documented request generally leads to a faster response."
    },
    {
      q: "Can I request a penalty installment plan?",
      a: "Yes, if paying the full penalty at once would create genuine hardship, an installment plan may be available."
    },
    {
      q: "What are the common reasons for penalty rejection?",
      a: "Insufficient evidence, missing documentation, or submitting outside the required time limit are the most frequent causes."
    },
    {
      q: "Can you represent my business before the FTA?",
      a: "Yes, we handle direct FTA representation and correspondence throughout your reconsideration case."
    },
    {
      q: "What happens if my reconsideration request is unsuccessful?",
      a: "We review the outcome with you and advise on any further options available for disputing the decision."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Our FTA penalty reconsideration specialist will contact you within 10 minutes.");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#E8B84B] selection:text-[#09203B]">
      <Header />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION (2-Column Grid on Desktop) - 100% MATCH
            ========================================================================= */}
        <section className="bg-[#09203b] py-12 md:py-16 relative overflow-hidden border-b-2 border-[#E8B84B]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left Column Content (7 cols on desktop) */}
              <div className="lg:col-span-7 text-white pr-0 lg:pr-4">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[45px] font-bold leading-[1.18] tracking-tight text-white mb-5">
                  VAT Penalty{" "}
                  <br className="hidden sm:inline" />
                  <span className="text-[#E8B84B]">Reconsideration UAE</span> &mdash;{" "}
                  <br className="hidden sm:inline" />
                  Challenge an Unfair FTA Penalty
                </h1>

                <p className="text-gray-300 text-sm sm:text-[14.5px] leading-relaxed mb-8 max-w-2xl font-sans">
                  Getting hit with an FTA penalty is frustrating, especially when you believe there were genuine reasons behind the delay or error, or the penalty simply doesn&apos;t reflect what actually happened. The good news is you don&apos;t have to accept it automatically. Through VAT penalty reconsideration UAE, businesses can formally ask the Federal Tax Authority to review a penalty and reduce or waive it, provided the request is backed by solid evidence and submitted correctly. At RBO Accounting Services FZE, we prepare and submit reconsideration requests, build supporting evidence, and represent your business directly with the FTA throughout the process.
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
                    href="https://wa.me/971508051857?text=Hello%20RBO%20Accounting,%20I%20need%20VAT%20Penalty%20Reconsideration"
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
                        <option value="VAT Penalty Reconsideration">VAT Penalty Reconsideration</option>
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
            2. QUICK ANSWER SECTION - 100% MATCH
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
                  How VAT Penalty Reconsideration Works?
                </h2>
                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans">
                  VAT penalty reconsideration is a formal request submitted to the Federal Tax Authority asking it to review, reduce, or waive an administrative penalty already issued. Businesses generally have valid grounds when there&apos;s a genuine, demonstrable reason behind the compliance failure &mdash; a technical error, a documented hardship, or evidence the penalty was applied incorrectly. The request is submitted through EmaraTax with the reconsideration request form and supporting documents, and the FTA reviews the case before issuing a decision. If a business can&apos;t pay the penalty in full, a penalty installment plan may also be an option worth exploring alongside, or instead of, a reconsideration request.
                </p>
              </div>

              {/* Image Right (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-FTA-Audit-Assistance-Covers.webp"
                    alt="How VAT Penalty Reconsideration Works?"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ELIGIBILITY SECTION - 100% MATCH
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Image Left (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-is-VAT-Registration-in-the-UAE-at-a-Glance.webp"
                    alt="What Is VAT Penalty Reconsideration, and Who Can Apply?"
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
                  What Is VAT Penalty Reconsideration, and Who Can Apply?
                </h2>
                <div className="space-y-3.5 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans">
                  <p>
                    FTA administrative penalties are financial penalties issued for VAT compliance failures &mdash; late registration, late filing, late payment, incorrect returns, and similar issues. A reconsideration request is your formal mechanism to ask the FTA to review that penalty, explain the circumstances, and request it be reduced or waived entirely.
                  </p>
                  <p>
                    It&apos;s worth distinguishing reconsideration from a broader appeal: reconsideration is generally the first step, addressed directly to the FTA, while further dispute resolution mechanisms exist if reconsideration doesn&apos;t resolve the matter. Any business that has received an administrative penalty can apply, though the strength of your case depends heavily on the evidence you can present and whether you file within the required time limit after the penalty notice.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. OUR SERVICES (6 Cards - 3x2 Grid) - 100% MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[#c4923e] uppercase tracking-wider font-semibold text-xs md:text-sm">
                What&apos;s Included
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-3">
                Our VAT Return Filing Services
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
                  FTA Penalty Waiver Requests
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  We prepare and submit penalty waiver requests supported by strong documentation to improve the chances of approval.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🏦
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  Administrative Penalty Appeals
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  Our experts manage the complete appeal process, helping you challenge penalties that may have been issued incorrectly.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🔄
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  Reconsideration Request Preparation
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  We prepare and submit reconsideration requests with accurate supporting evidence and detailed justifications.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  📊
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  VAT Compliance Review
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  We identify the root cause of the penalty, review your VAT compliance, and recommend corrective actions to prevent future issues.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🌐
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  FTA Correspondence &amp; Representation
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  We communicate directly with the FTA on your behalf, responding to notices and representing your business throughout the process.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f5e8c7] flex items-center justify-center text-2xl mb-5">
                  🧾
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  Penalty Installment Plan Assistance
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed font-sans">
                  If immediate payment isn&apos;t feasible, we assist with installment plan applications and guide you through the approval process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. WHO WE SERVE ("Built for Every Stage of Business") - 100% MATCH
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
            6. OUR PROCESS (8 Step Cards - 4x2 Grid) - 100% MATCH
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
                  Initial Case Evaluation
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We review your penalty notice and assess whether you have reasonable grounds for reconsideration.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Review of the FTA Penalty Notice
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We go through the specific penalty details and the reasoning behind it.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Compliance and Documentation Assessment
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We check your records against what the FTA expected to identify exactly what happened.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Evidence Collection
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We gather the documentation that supports your case for reconsideration.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  5
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Reconsideration Strategy Development
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We build a clear, evidence-based argument for why the penalty should be reduced or waived.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  6
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Reconsideration Request Form Preparation
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We complete the formal request accurately, backed by your supporting evidence.
                </p>
              </div>

              {/* Step 7 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-black text-[#E8B84B] font-bold text-base flex items-center justify-center mx-auto mb-4">
                  7
                </div>
                <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                  Submission Through EmaraTax
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                  We submit the request through the portal within the required timeframe.
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
                  We manage any correspondence or additional information requests from the FTA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. WHY RBO (Why Businesses Choose RBO Accounting Services FZE) - 100% MATCH
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
            8. BENEFITS OF PROFESSIONAL PENALTY RECONSIDERATION SUPPORT - 100% MATCH
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-10 max-w-4xl">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Benefits of Professional Penalty Reconsideration Support
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
                  Keep organized filing records and supporting documentation, making any future FTA inquiries or audits easier to manag
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. LOCATIONS WE SERVE (EMIRATES TABS + MAP) - 100% MATCH
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
            10. CLIENT REVIEWS / TESTIMONIALS SECTION - 100% MATCH
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
            11. FREQUENTLY ASKED QUESTIONS ACCORDION - 100% MATCH
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
