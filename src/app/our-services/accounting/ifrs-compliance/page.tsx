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

export default function IFRSCompliancePage() {
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
      q: "What are IFRS compliance services?",
      a: "IFRS compliance services help businesses understand, implement, and maintain financial reporting that follows International Financial Reporting Standards, covering everything from initial transition to ongoing policy updates."
    },
    {
      q: "Is IFRS mandatory for all businesses in the UAE?",
      a: "Yes, under UAE Commercial Companies Law, mainland companies, free zone companies, and businesses subject to Corporate Tax are required to prepare financial statements in accordance with IFRS or IFRS for SMEs."
    },
    {
      q: "What is IFRS for SMEs?",
      a: "IFRS for SMEs is a simplified, self-contained standard designed specifically for small and medium-sized entities without public accountability, reducing the reporting burden while maintaining standard financial rigor."
    },
    {
      q: "How long does IFRS implementation take?",
      a: "Depending on transaction complexity, existing accounting records, and contracts (such as leases or multi-element revenue), implementation typically takes from a few weeks to a couple of months."
    },
    {
      q: "What challenges do companies face during IFRS transition?",
      a: "The most common hurdles include reclassifying financial instruments, measuring right-of-use assets under IFRS 16, identifying performance obligations under IFRS 15, and gathering sufficient disclosure data."
    },
    {
      q: "Do you provide support for IFRS 15 and IFRS 16 specifically?",
      a: "Yes. We offer targeted advisory for revenue recognition from contracts with customers (IFRS 15) and balance sheet lease recognition (IFRS 16), creating full accounting schedules and disclosure notes."
    },
    {
      q: "How do I get started with your IFRS advisory services?",
      a: "Book a free initial consultation with our team. We'll perform a high-level gap analysis on your existing financial records and propose a clear roadmap to full IFRS compliance."
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
        <section className="bg-[#09203B] py-12 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Text (7 cols on desktop) */}
              <div className="lg:col-span-7 text-white space-y-7 pr-0 lg:pr-6">
                <h1 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold leading-tight">
                  IFRS Compliance <span className="text-[#E8B84B]">Services UAE</span>
                </h1>
                <p className="text-gray-300 text-[14px] md:text-[15.5px] leading-relaxed max-w-[620px]">
                  Financial statements that don’t follow the right standards create problems the moment a bank, investor, or auditor takes a closer look. RBO Accounting Services FZE provides IFRS compliance services UAE businesses rely on to prepare financial statements that actually hold up under scrutiny — whether you’re transitioning from local accounting practices for the first time or adjusting to a specific standard like leases or revenue recognition.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="#form"
                    className="bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3.5 px-7 rounded-md shadow-lg transition-all flex items-center justify-center gap-2 text-[14px]"
                  >
                    Book a Free Consultation &rarr;
                  </a>
                  <a
                    href="https://wa.me/971508051857"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-bold py-3.5 px-7 rounded-md transition-all flex items-center justify-center gap-2 text-[14px]"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Us
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] md:text-[12px] font-semibold text-white pt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[12px] h-[12px] rounded-full border-2 border-[#D49D28] flex items-center justify-center"></div>
                    Free Initial Consultation
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-[12px] h-[12px] rounded-full border-2 border-[#D49D28] flex items-center justify-center"></div>
                    7 Emirates Covered
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-[12px] h-[12px] rounded-full border-2 border-[#D49D28] flex items-center justify-center"></div>
                    100% FTA Compliant Solutions
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Consultation Card (5 cols on desktop) */}
              <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
                <div id="form" className="bg-white rounded-2xl shadow-2xl p-8 md:p-9 relative">
                  <h3 className="text-2xl font-serif font-bold text-[#09203B] mb-1.5">
                    Get a Free Consultation
                  </h3>
                  <p className="text-[13px] text-gray-500 mb-6">
                    Our expert will reply within 10 minutes
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] text-[#09203B] font-medium placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Phone / WhatsApp *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] text-[#09203B] font-medium placeholder-gray-500"
                      />
                    </div>
                    <div className="relative">
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] bg-white text-[#09203B] font-medium"
                      >
                        <option value="" className="text-gray-500">Select Service</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping & Accounting</option>
                        <option value="VAT Registration / Filing">VAT Registration / Filing</option>
                        <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                        <option value="Audit Services">Audit Services</option>
                        <option value="Payroll Services">Payroll Services</option>
                        <option value="Virtual CFO">Virtual CFO</option>
                        <option value="AML Compliance">AML Compliance</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#09203B]">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="relative">
                      <select
                        required
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] bg-white text-[#09203B] font-medium"
                      >
                        <option value="" className="text-gray-500">Your Emirate</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Ras Al符号 Khaimah">Ras Al Khaimah</option>
                        <option value="Fujairah">Fujairah</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#09203B]">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm text-[13.5px]"
                    >
                      Request Free Consultation &rarr;
                    </button>
                    <div className="flex items-start justify-center gap-1.5 pt-2 text-[10px] text-[#09203B] font-medium text-center">
                      <Lock className="w-3.5 h-3.5 text-[#c4923e] mt-0.5 flex-shrink-0" />
                      <span>Your information is 100% secure and<br />confidential</span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT IFRS COMPLIANCE MEANS FOR YOUR BUSINESS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="pr-0 lg:pr-4">
                <h4 className="text-[#c4923e] font-bold text-[11px] tracking-[0.2em] uppercase mb-4">
                  Why It Matters
                </h4>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-6 leading-tight">
                  What IFRS Compliance Means for Your Business
                </h2>
                <div className="space-y-5 text-[#4b5563] leading-[1.75] text-[14.5px]">
                  <p>
                    IFRS, or International Financial Reporting Standards, sets the common accounting rules that let financial statements stay consistent and comparable across companies and countries. In the UAE, this isn't optional for most businesses. Since there's no separate local accounting standard for statutory reporting, companies preparing financial statements generally need to follow IFRS directly.
                  </p>
                  <p>
                    That requirement catches a lot of growing businesses off guard, especially ones that started with informal bookkeeping practices and only later realized their financial statements needed to meet a specific international standard.
                  </p>
                  <p>
                    The gap between how you've been recording transactions and what IFRS actually requires can be significant, particularly around areas like revenue recognition, leases, and financial instruments.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/What-Is-VAT-Return-Filing-and-Who-Needs-to-Do-It-e1786297249992.webp"
                    alt="IFRS Compliance Means for Your Business"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR IFRS COMPLIANCE SERVICES */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">
                What's Included
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-3">
                Our IFRS Compliance Services
              </h2>
              <p className="text-gray-600 text-[14.5px]">
                We built our IFRS compliance services around the actual transition points businesses run into, not a one-size-fits-all checklist.
              </p>
            </div>

            {/* Row 1 of 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
              {[
                {
                  icon: "🔍",
                  title: "Compliance Review & Gap Analysis",
                  desc: "Comparing your current financial reporting against what IFRS actually requires, before we begin fixing anything."
                },
                {
                  icon: "📘",
                  title: "Accounting Policy Development",
                  desc: "Building policies that reflect your business accurately while satisfying IFRS requirements."
                },
                {
                  icon: "🔄",
                  title: "Full Transition to IFRS",
                  desc: "Guiding companies moving from informal or local accounting practices through what changes and why."
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out cursor-pointer flex flex-col justify-start"
                >
                  <div className="w-14 h-14 bg-[#F5EAD4] rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[26px]">
                    {service.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#09203B] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2 of 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {[
                {
                  icon: "📑",
                  title: "Statement Preparation & Restructuring",
                  desc: "Preparing and restructuring financial statements to meet the standard."
                },
                {
                  icon: "📋",
                  title: "Disclosure Compliance & Documentation",
                  desc: "IFRS puts real weight on what you disclose, not just how you calculate the numbers."
                },
                {
                  icon: "🎓",
                  title: "IFRS Training & Workshops",
                  desc: "For finance teams that need to understand the standards themselves, not just receive finished documents."
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out cursor-pointer flex flex-col justify-start"
                >
                  <div className="w-14 h-14 bg-[#F5EAD4] rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[26px]">
                    {service.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#09203B] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* IFRS STANDARDS WE SUPPORT SUB-SECTION */}
            <div className="text-center max-w-4xl mx-auto mb-12 pt-4">
              <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">
                Standards We Support
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-3">
                IFRS Standards We Support
              </h2>
              <p className="text-gray-600 text-[14.5px]">
                Different standards create different challenges, and we work across the ones that come up most often for UAE businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {[
                {
                  code: "IFRS 15",
                  name: "Revenue Recognition",
                  desc: "Changes how and when income gets recorded based on contract terms."
                },
                {
                  code: "IFRS 16",
                  name: "Leases",
                  desc: "Lease accounting — most leases now appear on the balance sheet."
                },
                {
                  code: "IFRS 9",
                  name: "Financial Instruments",
                  desc: "Financial Instruments — relevant for investments or complex financial assets."
                },
                {
                  code: "IAS 36 / IFRS 10",
                  name: "Disclose / Consolidate",
                  desc: "Asset impairment assessments and consolidation frameworks for multi-entity businesses."
                }
              ].map((std, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex flex-col justify-start"
                >
                  <div className="text-[#c4923e] font-bold text-xs uppercase tracking-wider mb-2">
                    {std.code}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#09203B] mb-2">{std.name}</h3>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Cloud banner */}
            <div className="bg-[#09203B] rounded-2xl p-8 max-w-6xl mx-auto">
              <h3 className="text-[#c4923e] font-bold text-[15px] mb-2 flex items-center gap-2">
                <Cloud className="w-5 h-5 fill-[#c4923e]" /> Works with your existing platform
              </h3>
              <p className="text-white text-[14px] leading-relaxed max-w-4xl">
                Switching accounting systems is a hassle nobody wants &mdash; we work directly inside Xero, Zoho, and QuickBooks, plugging into whatever platform you already use.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: SIGNS YOUR BUSINESS NEEDS IFRS ADVISORY */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h4 className="text-[#c4923e] font-semibold text-[13px] md:text-[14px] uppercase tracking-wider mb-3">
                Warning Signs
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-4">
                Signs Your Business Needs IFRS Advisory
              </h2>
              <p className="text-gray-500 text-[14.5px] max-w-3xl mx-auto leading-relaxed">
                Reconciliation is detail-heavy work, and small errors compound quickly when nobody's checking consistently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-[28px] p-7 lg:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-xl lg:text-[22px] mb-1">
                    Audit or Investor Review
                  </h3>
                  <p className="text-gray-500 text-[13px] mb-6">
                    Need statements that meet the standard
                  </p>
                  <ul className="space-y-0 text-sm text-gray-700">
                    <li className="flex items-center gap-3 py-3 border-b border-dotted border-gray-300">
                      <Check className="w-4 h-4 text-[#dca642] stroke-[3] flex-shrink-0" />
                      <span>Preparing for investor scrutiny</span>
                    </li>
                    <li className="flex items-center gap-3 py-3">
                      <Check className="w-4 h-4 text-[#dca642] stroke-[3] flex-shrink-0" />
                      <span>Preparing for an audit</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2 - Highlighted */}
              <div className="bg-white border-[1.5px] border-[#dca642] rounded-[28px] p-7 lg:p-8 flex flex-col justify-between relative shadow-[0_8px_30px_rgba(220,166,66,0.12)] hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300">
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#e5a83b] text-[#09203B] px-3.5 py-1 rounded-md text-[11px] font-bold tracking-wide shadow-xs uppercase">
                    Common
                  </span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-xl lg:text-[22px] mb-1 mt-1">
                    First IFRS Transition
                  </h3>
                  <p className="text-gray-500 text-[13px] mb-6">
                    Moving away from informal practices
                  </p>
                  <ul className="space-y-0 text-sm text-gray-700">
                    <li className="flex items-center gap-3 py-3 border-b border-dotted border-gray-300">
                      <Check className="w-4 h-4 text-[#dca642] stroke-[3] flex-shrink-0" />
                      <span>New leases or revenue contracts</span>
                    </li>
                    <li className="flex items-center gap-3 py-3">
                      <Check className="w-4 h-4 text-[#dca642] stroke-[3] flex-shrink-0" />
                      <span>Don't fit cleanly into past records</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-gray-200 rounded-[28px] p-7 lg:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-xl lg:text-[22px] mb-1">
                    IPO, Merger, or Acquisition
                  </h3>
                  <p className="text-gray-500 text-[13px] mb-6">
                    IFRS as a baseline requirement
                  </p>
                  <ul className="space-y-0 text-sm text-gray-700">
                    <li className="flex items-center gap-3 py-3 border-b border-dotted border-gray-300">
                      <Check className="w-4 h-4 text-[#dca642] stroke-[3] flex-shrink-0" />
                      <span>Corporate transaction on the horizon</span>
                    </li>
                    <li className="flex items-center gap-3 py-3">
                      <Check className="w-4 h-4 text-[#dca642] stroke-[3] flex-shrink-0" />
                      <span>IFRS-compliant financials required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHY IFRS COMPLIANCE MATTERS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-[#c4923e] font-semibold text-[13px] md:text-[14px] uppercase tracking-wider mb-2">
                Why It Matters
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] text-center mb-12">
                Why IFRS Compliance Matters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 items-start">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <BarChart className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    Investor Credibility
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Builds real credibility with investors and stakeholders who need to trust that your numbers mean what they claim to mean.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Search className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    Internal Transparency
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Improves financial transparency internally, giving your own management team a clearer picture of the business.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Briefcase className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    Cross-Border Ready
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Supports cross-border and international operations, since IFRS is the accounting language most global partners already expect.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    Audit &amp; Regulatory Alignment
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Meets regulatory and audit requirements without scrambling before a deadline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: BUILT FOR EVERY STAGE OF BUSINESS */}
        <section className="py-20 md:py-24 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h4 className="text-[#c4923e] font-semibold text-[13px] md:text-[14px] mb-3">
                Who We Serve
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B]">
                Built for Every Stage of Business
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "🚀", title: "Startups & SMEs", desc: "Preparing for their first IFRS-compliant financial statements." },
                  { icon: "🏢", title: "Free Zone Companies", desc: "Navigating jurisdiction-specific reporting expectations." },
                  { icon: "🌐", title: "Multinational Businesses", desc: "Need consistency across different countries' reporting requirements." }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex flex-col justify-start cursor-pointer"
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-serif font-bold text-[#09203B] text-[18px] md:text-[19px] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: HOW OUR IFRS ADVISORY PROCESS WORKS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h4 className="text-[#c4923e] text-sm font-semibold tracking-wider uppercase mb-3">
                Our Process
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B]">
                How Our IFRS Advisory Process Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mt-12 items-stretch">
              {[
                { 
                  step: "1", 
                  title: "Consultation & Gap Analysis", 
                  desc: "Reviewing your current financial statements and accounting practices against IFRS requirements." 
                },
                { 
                  step: "2", 
                  title: "Accounting Policy Design", 
                  desc: "Building out the specific policies your business needs going forward." 
                },
                { 
                  step: "3", 
                  title: "Statement Implementation", 
                  desc: "Applying those policies to your actual reporting." 
                },
                { 
                  step: "4", 
                  title: "Ongoing Compliance Support", 
                  desc: "IFRS isn't a one-time fix — standards evolve and your business does too." 
                }
              ].map((process, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 md:p-7 text-center border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex flex-col justify-start cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[#09203B] text-amber-400 flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-sm flex-shrink-0">
                    {process.step}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#09203B] mb-3">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              ))}
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
                Where We Provide IFRS Advisory
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
                Our IFRS advisory team supports businesses across the UAE, covering both mainland and free zone companies.
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
                Common Questions
              </h4>
              <h2 className="text-3xl md:text-[38px] font-serif font-bold text-[#09203B] mb-3">
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
              Ready for Financial Statements That Hold Up Under Scrutiny?
            </h2>
            <p className="text-white mb-8 max-w-[850px] mx-auto leading-relaxed text-[14px]">
              If you're comparing providers of IFRS compliance services UAE has to offer and want a team that gets your financial statements truly audit- and investor-ready, get in touch with RBO Accounting Services FZE today.
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
