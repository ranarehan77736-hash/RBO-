"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import {
  Check, ArrowRight, Lock, MapPin,
  ChevronDown, ChevronUp, ChevronsDown, ChevronsUp, FileText,
  Briefcase, BarChart, Cloud,
  ShieldCheck, HelpCircle, Users, CheckCircle2, Navigation,
  Banknote, NotepadText, TrendingUp, MessageSquare, DollarSign, Clock, Server, Save, Search, Eye, AlertCircle
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function VATRegistrationServicePage() {
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
      q: "What is the penalty for late VAT registration in the UAE?",
      a: "The Federal Tax Authority (FTA) imposes an administrative penalty of AED 20,000 for failing to submit a registration application within the specified timeframe."
    },
    {
      q: "How long does VAT registration take?",
      a: "Standard VAT registration typically takes between 3 to 10 business days once all required documents are properly submitted through the EmaraTax portal. If the FTA requests additional clarifications, it may take slightly longer."
    },
    {
      q: "Can a Free Zone company register for VAT?",
      a: "Yes. UAE VAT applies to both mainland and free zone companies. Free Zone companies (including Designated Zones) must register if their taxable turnover meets the mandatory threshold."
    },
    {
      q: "What documents are required for VAT registration?",
      a: "Required documents include a copy of the Trade License, Certificate of Incorporation, Memorandum of Association (MOA), passport and Emirates ID of the authorized signatory, audited or certified financial statements / bank statements proving turnover, and business contact details."
    },
    {
      q: "What is the difference between mandatory and voluntary VAT registration?",
      a: "Mandatory registration is required by law when your taxable supplies and imports exceed AED 375,000 in the past 12 months or are expected to in the next 30 days. Voluntary registration is optional once turnover or taxable expenses exceed AED 187,500, enabling businesses to recover input VAT."
    },
    {
      q: "Can multiple businesses register under one VAT group?",
      a: "Yes. Related entities that meet specific FTA control and economic relationship criteria can form a Tax Group, allowing them to file a single consolidated VAT return with zero-rated inter-company transactions."
    },
    {
      q: "How do I get started with your VAT registration service?",
      a: "Simply request a free consultation or contact us via WhatsApp. Our FTA-registered tax agents will review your turnover, gather your documents, and complete your EmaraTax application accurately."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#E8B84B] selection:text-[#09203B]">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-[#0b1b36] py-14 md:py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left Column: Text (7 cols on desktop) */}
              <div className="lg:col-span-7 text-white space-y-6 pr-0 lg:pr-4">
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold leading-[1.25]">
                  <span className="text-[#c4923e]">VAT Registration UAE</span> Register <br />
                  <span className="text-[#c4923e]">Your Business</span> with FTA-Approved Experts
                </h1>
                <p className="text-gray-300 text-[13.5px] sm:text-[14px] leading-relaxed max-w-[610px]">
                  If your business has crossed the mandatory VAT threshold of AED 375,000, or you simply want to register early to claim input VAT, you need a smooth, error-free VAT registration UAE process. At RBO Accounting Services FZE, we handle your entire VAT registration UAE application from start to finish — document collection, EmaraTax portal submission, and TRN application follow-up — so you don’t have to chase the Federal Tax Authority (FTA) yourself.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-1">
                  <a
                    href="#form"
                    className="bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-6 rounded-md shadow-sm transition-all flex items-center justify-center gap-1.5 text-[13px]"
                  >
                    Book a Free Consultation &rarr;
                  </a>
                  <a
                    href="https://wa.me/971508051857"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2 text-[13px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" /> WhatsApp Us
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold text-white pt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[10px] h-[10px] rounded-full border-[2px] border-[#c4923e] flex items-center justify-center"></div>
                    Free Initial Consultation
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-[10px] h-[10px] rounded-full border-[2px] border-[#c4923e] flex items-center justify-center"></div>
                    7 Emirates Covered
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-[10px] h-[10px] rounded-full border-[2px] border-[#c4923e] flex items-center justify-center"></div>
                    100% FTA Compliant Solutions
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Consultation Card (5 cols on desktop) */}
              <div className="lg:col-span-5 w-full max-w-[420px] mx-auto lg:ml-auto">
                <div id="form" className="bg-white rounded-2xl shadow-xl p-7 md:p-8 relative">
                  <h3 className="text-[22px] font-serif font-bold text-gray-900 mb-1">
                    Get a Free Consultation
                  </h3>
                  <p className="text-[12px] text-gray-500 mb-5">
                    Our expert will reply within 10 minutes
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-[5px] px-3.5 py-2.5 text-[13px] focus:outline-none focus:border-[#c4923e] focus:ring-1 focus:ring-[#c4923e] text-gray-800 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded-[5px] px-3.5 py-2.5 text-[13px] focus:outline-none focus:border-[#c4923e] focus:ring-1 focus:ring-[#c4923e] text-gray-800 placeholder-gray-500"
                      />
                    </div>
                    <div className="relative">
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full appearance-none border border-gray-300 rounded-[5px] px-3.5 py-2.5 pr-10 text-[13px] focus:outline-none focus:border-[#c4923e] focus:ring-1 focus:ring-[#c4923e] bg-white text-gray-800 font-normal"
                      >
                        <option value="" className="text-gray-500">Select Service</option>
                        <option value="VAT Registration / Filing">VAT Registration / Filing</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping & Accounting</option>
                        <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                        <option value="Audit Services">Audit Services</option>
                        <option value="Payroll Services">Payroll Services</option>
                        <option value="Virtual CFO">Virtual CFO</option>
                        <option value="AML Compliance">AML Compliance</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="relative">
                      <select
                        required
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full appearance-none border border-gray-300 rounded-[5px] px-3.5 py-2.5 pr-10 text-[13px] focus:outline-none focus:border-[#c4923e] focus:ring-1 focus:ring-[#c4923e] bg-white text-gray-800 font-normal"
                      >
                        <option value="" className="text-gray-500">Your Emirate</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                        <option value="Fujairah">Fujairah</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-4 rounded-[5px] transition-colors flex items-center justify-center gap-1.5 mt-2 shadow-sm text-[13px]"
                    >
                      Request Free Consultation &rarr;
                    </button>
                    <div className="flex items-center justify-center gap-1.5 pt-2 text-[10.5px] text-gray-700 font-normal text-center">
                      <Lock className="w-3 h-3 text-[#c4923e] flex-shrink-0" />
                      <span>Your information is 100% secure and confidential</span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: QUICK ANSWER */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="pr-0 lg:pr-4">
                <h4 className="text-[#c4923e] font-bold text-[11px] tracking-[0.2em] uppercase mb-4">
                  QUICK ANSWER
                </h4>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  What is VAT Registration in the UAE at a Glance?
                </h2>
                <div className="space-y-5 text-gray-600 leading-[1.75] text-[14.5px]">
                  <p>
                    VAT registration UAE becomes mandatory once your taxable supplies and imports exceed AED 375,000 in the past 12 months, or you expect to cross that figure in the next 30 days. Businesses below that but above AED 187,500 can register voluntarily.
                  </p>
                  <p>
                    Registration happens through the EmaraTax portal, and once the Federal Tax Authority approves your application, you receive a Tax Registration Number (TRN) and a VAT registration certificate. Most straightforward applications are approved within a few weeks, though the FTA can request additional documents if anything is unclear.
                  </p>
                  <p>
                    Missing the mandatory deadline attracts a penalty of AED 20,000, so it pays to register on time rather than wait for a reminder.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/What-is-VAT-Registration-in-the-UAE-at-a-Glance.webp"
                    alt="VAT Registration at a Glance"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ELIGIBILITY - WHO NEEDS VAT REGISTRATION */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/Who-Needs-VAT-Registration-in-the-UAE.webp"
                    alt="Who Needs VAT Registration in the UAE"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Right Column: Structured Breakdown */}
              <div className="order-1 lg:order-2 pl-0 lg:pl-4">
                <h4 className="text-[#c4923e] font-bold text-[11px] tracking-[0.2em] uppercase mb-4">
                  Eligibility
                </h4>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Who Needs VAT Registration in the UAE
                </h2>
                <div className="space-y-5 text-gray-600 leading-[1.75] text-[14.5px]">
                  <p>
                    <strong className="text-gray-900">Mandatory Registration:</strong> Your business must register once your taxable supplies and imports pass AED 375,000 over the previous 12 months, or you reasonably expect to hit that number within the next 30 days. This isn’t optional — the FTA expects you to monitor your turnover and register within the required window.
                  </p>
                  <p>
                    <strong className="text-gray-900">Voluntary Registration:</strong> If your turnover or taxable expenses sit above AED 187,500 but below the mandatory threshold, you can choose voluntary registration. Many early-stage businesses do this deliberately to reclaim VAT on setup costs, rent, and professional services from day one.
                  </p>
                  <p>
                    <strong className="text-gray-900">Non-Resident, Sole Establishment &amp; Tax Group Registration:</strong> Non-resident businesses making taxable supplies generally must register regardless of turnover. Sole establishment owners running multiple businesses only need one VAT registration covering all of them. Related UAE entities can use tax group registration to file one consolidated return instead of separate ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY VAT REGISTRATION MATTERS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">
                Outsourced Accounting UAE
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Why VAT Registration Matters for Your Business
              </h2>
              <p className="text-gray-600 text-[14.5px] max-w-3xl mx-auto leading-relaxed">
                Registering isn’t just a compliance checkbox. It protects you from penalties, gives your business more credibility with suppliers and clients who prefer working with VAT-registered companies, and lets you recover VAT on eligible business expenses. Businesses that register on time also avoid the stress of a rushed application later, when the FTA is already asking why you missed the deadline. Getting this right early feeds directly into cleaner Bookkeeping &amp; Accounting Services, since your invoicing and record-keeping need to reflect your VAT status from the moment you’re registered.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: "🛡️",
                  title: "Protection from Penalties",
                  desc: "Avoid the AED 20,000 late registration fine by applying on time."
                },
                {
                  icon: "🏢",
                  title: "Credibility with Partners",
                  desc: "More credibility with suppliers and clients who prefer working with registered entities."
                },
                {
                  icon: "💰",
                  title: "Recover Input VAT",
                  desc: "Claim back VAT paid on eligible business expenses, rent, and setup costs."
                },
                {
                  icon: "📑",
                  title: "No Rushed Applications",
                  desc: "Smooth onboarding without the stress of an urgent last-minute scramble."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex flex-col justify-start"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-serif font-bold text-gray-900 text-[17px] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: HOW WE WORK WITH YOU */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h4 className="text-[#c4923e] text-sm font-semibold tracking-wider uppercase mb-3">
                Our Process
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                How We Work With You
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto px-4 mt-12 items-stretch">
              {[
                {
                  step: "1",
                  title: "Free Eligibility Assessment",
                  desc: "We look at your turnover, business activity, and structure to confirm whether mandatory or voluntary registration applies to you."
                },
                {
                  step: "2",
                  title: "Document Collection & Review",
                  desc: "We collect everything listed above and check it against FTA requirements before submission, catching gaps early instead of after a rejection."
                },
                {
                  step: "3",
                  title: "EmaraTax Portal Submission",
                  desc: "We create or use your existing EmaraTax account and submit your full VAT registration UAE application, including business activity details and turnover projections."
                },
                {
                  step: "4",
                  title: "FTA Review & Query Handling",
                  desc: "If the FTA asks for clarification or additional documents, we respond on your behalf so the process doesn’t stall while you’re busy running your business."
                },
                {
                  step: "5",
                  title: "TRN Issuance & Delivery",
                  desc: "Once approved, you receive your Tax Registration Number and VAT certificate, and we walk you through what changes for your invoicing and reporting going forward."
                }
              ].map((process, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex flex-col justify-start cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[#09203B] text-amber-400 flex items-center justify-center mx-auto mb-5 text-base font-bold shadow-sm flex-shrink-0">
                    {process.step}
                  </div>
                  <h3 className="font-serif text-[16px] font-bold text-gray-900 mb-2.5">
                    {process.title}
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: BUILT FOR EVERY STAGE OF BUSINESS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h4 className="text-[#c4923e] font-semibold text-[13px] md:text-[14px] mb-3">
                Who We Serve
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Built for Every Stage of Business
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: "🚀", title: "Startups & SMEs", desc: "Setting up their first proper bookkeeping system." },
                  { icon: "🏢", title: "Free Zone Companies", desc: "Navigating specific jurisdiction requirements." },
                  { icon: "🛒", title: "E-commerce Businesses", desc: "Managing high transaction volumes across multiple channels." }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex flex-col justify-start cursor-pointer"
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-serif font-bold text-gray-900 text-[18px] md:text-[19px] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "🚢", title: "Trading Companies", desc: "Handling cross-border VAT questions." },
                  { icon: "💼", title: "Service-Based Businesses", desc: "Straightforward, reliable monthly reporting without unnecessary complexity." }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex flex-col justify-start cursor-pointer"
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-serif font-bold text-gray-900 text-[18px] md:text-[19px] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY BUSINESSES CHOOSE RBO */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-2">
                Why RBO
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-12">
                Why Businesses Choose RBO Accounting Services FZE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 items-start">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      FTA Registered Tax Agents
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Every application is processed by officially certified tax agents recognized by the Federal Tax Authority.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <DollarSign className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      Transparent Pricing
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Fixed upfront fee with zero hidden portal charges or surprise revision costs.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <FileText className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      Fluent Across Platforms
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Xero, Zoho, and QuickBooks &mdash; we plug directly into whatever software you currently run.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Users className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      Dedicated Account Manager
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Work directly with an assigned specialist on WhatsApp and phone for immediate responses.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      Deadlines Taken Seriously
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Applications are validated and lodged onto EmaraTax within 24 hours of receiving complete documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: LOCATIONS WE SERVE (MAP) */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h4 className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-2">
                Locations We Serve
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-4">
                Where We Provide Accounting Outsourcing
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
                Our reconciliation team supports businesses across the UAE, covering both mainland and free zone companies.
              </p>

              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {mapLocations.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLocation(idx)}
                    className={`px-5 py-2 text-xs md:text-sm font-medium rounded-md transition-colors ${
                      activeLocation === idx
                        ? "bg-[#D49D28] text-white shadow-xs"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Map Display Container */}
            <div className="max-w-6xl mx-auto px-4">
              <div className="w-full h-[200px] md:h-[220px] rounded-xl overflow-hidden shadow-xs border border-gray-200/90 bg-white relative">
                <a
                  href={`https://maps.google.com/maps?q=${mapLocations[activeLocation].mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-3 left-3 z-10 bg-white px-2.5 py-1 text-xs font-medium text-blue-600 rounded shadow-xs flex items-center gap-1.5 hover:bg-gray-50 transition-colors border border-gray-200/80"
                >
                  <span>Maps</span>
                  <svg className="w-3 h-3 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <iframe
                  src={`https://maps.google.com/maps?q=${mapLocations[activeLocation].mapQuery}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title={`Map of ${mapLocations[activeLocation].name}`}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: TESTIMONIALS */}
        <TestimonialsSection />

        {/* SECTION 10: FAQS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-10">
              <h4 className="text-[#c4923e] font-bold text-xs tracking-wider uppercase mb-3">
                COMMON QUESTIONS
              </h4>
              <h2 className="text-3xl md:text-[38px] font-serif font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-[14.5px] md:text-[15.5px] leading-relaxed">
                Everything UAE businesses ask about accounting, VAT, and Corporate Tax &mdash; answered by our experts.
              </p>
            </div>

            <div className="border border-[#09203B] rounded-none overflow-hidden shadow-sm divide-y divide-[#183659]">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className="transition-colors">
                    <button
                      className="w-full flex items-center justify-between py-4.5 px-6 md:py-5 md:px-8 bg-[#09203B] hover:bg-[#0c2745] text-left transition-colors cursor-pointer group"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                    >
                      <span className={`text-[15px] md:text-[16px] pr-6 transition-colors duration-200 ${
                        isOpen ? 'text-[#c4923e] font-bold' : 'text-white font-medium group-hover:text-[#c4923e]'
                      }`}>
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        <ChevronsDown className="w-5 h-5 text-[#c4923e] stroke-[2.5]" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="faq-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ 
                            height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.25, ease: "linear" }
                          }}
                          className="overflow-hidden bg-white border-b border-gray-200"
                        >
                          <div className="p-6 md:p-8">
                            <p className="text-gray-500 leading-relaxed text-[14px] md:text-[15px]">
                              {faq.a}
                            </p>
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

        {/* SECTION 11: GOLD CTA BANNER */}
        <section className="bg-[#A27E36] py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-white mb-4">
              Ready to Register Your UAE Business for VAT Without Stress?
            </h2>
            <p className="text-white mb-8 max-w-[850px] mx-auto leading-relaxed text-[14px]">
              Avoid the AED 20,000 late registration penalty. Let our certified FTA tax agents review your turnover and secure your official Tax Registration Number (TRN) smoothly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a href="#form" className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-md shadow-sm transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-1.5 text-[13px]">
                Get Free Consultation &rarr;
              </a>
              <a href="https://wa.me/971508051857" className="bg-transparent border border-white/50 hover:bg-white hover:text-[#A27E36] text-white font-bold py-3 px-8 rounded-md shadow-sm transition-all flex items-center justify-center gap-1.5 text-[13px]">
                WhatsApp Us Now
              </a>
            </div>
            <p className="text-[12px] text-white font-medium tracking-wide">Office Hours: Monday to Saturday, 8:00 AM &ndash; 6:00 PM</p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
