"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import {
  Check, ArrowRight, Lock, MapPin,
  ChevronDown, ChevronUp, FileText,
  Briefcase, BarChart, Cloud,
  ShieldCheck, HelpCircle, Users, CheckCircle2, Navigation,
  Banknote, NotepadText, TrendingUp, MessageSquare, DollarSign, Clock, Server, Save
} from "lucide-react";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function BookkeepingAndAccountingPage() {
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
      q: "What are the best accounting firms in UAE?",
      a: "The best accounting firms in UAE are the ones registered with the Federal Tax Authority, staffed by qualified chartered accountants, and transparent about pricing and turnaround times. Look for a firm that explains its reasoning rather than just delivering a report."
    },
    {
      q: "What services do accounting firms in Dubai typically provide?",
      a: "Typical services include bookkeeping, VAT registration and return filing, corporate tax consulting, financial statement preparation, payroll processing (WPS), and audit support."
    },
    {
      q: "How much do accounting services cost in the UAE?",
      a: "Costs vary based on transaction volume and business size. We offer custom, transparent pricing with no hidden fees."
    },
    {
      q: "Why does it matter if a firm is an FTA approved tax agency?",
      a: "An FTA-approved agency is certified to deal directly with the Federal Tax Authority on your behalf, ensuring your submissions are legally compliant and reducing the risk of penalties."
    },
    {
      q: "How do I choose the right accounting firm in UAE for my business?",
      a: "Look for industry experience, responsiveness, clear communication, and the ability to scale with your business. Read client reviews and ask for a free consultation to gauge their expertise."
    },
    {
      q: "Do you support startups and small businesses?",
      a: "Absolutely. We have dedicated packages tailored for startups and SMEs to ensure they get off the ground with a solid financial foundation."
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
        <section className="bg-[#09203B] py-10 md:py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Column: Text */}
              <div className="text-white space-y-7 pr-0 lg:pr-8">
                <h1 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold leading-tight">
                  <span className="whitespace-nowrap">Bookkeeping <span className="text-[#D49D28]">and Accounting</span></span><br className="hidden md:block" />
                  <span className="text-[#D49D28]">Services</span> in UAE
                </h1>
                <p className="text-gray-300 text-[17px] leading-relaxed max-w-[620px]">
                  Running a business in the UAE means staying on top of VAT deadlines, corporate tax filings, and daily transaction records — all while trying to actually grow the business. RBO handles the day-to-day recording, reconciliation, and reporting so you always know where your business stands financially.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a href="#form" className="bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3.5 px-6 rounded-md shadow-lg transition-all flex items-center justify-center gap-2 text-[15px]">
                    Book a Free Consultation <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/971508051857" target="_blank" rel="noreferrer" className="bg-[#0f2a4a] border border-gray-600 hover:bg-[#15355c] text-white font-bold py-3.5 px-6 rounded-md transition-all flex items-center justify-center gap-2 text-[15px]">
                    <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Us
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-gray-300 pt-4">
                  <div className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-[#E8B84B] flex items-center justify-center"><Check className="w-3 h-3 text-[#09203B]" /></div> Free Initial Consultation</div>
                  <div className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-[#E8B84B] flex items-center justify-center"><Check className="w-3 h-3 text-[#09203B]" /></div> 7 Emirates Covered</div>
                  <div className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-[#E8B84B] flex items-center justify-center"><Check className="w-3 h-3 text-[#09203B]" /></div> 100% FTA Compliant Solutions</div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="w-full max-w-md mx-auto lg:ml-auto">
                <div id="form" className="bg-white rounded-2xl shadow-2xl p-8 relative">
                  <h3 className="text-2xl font-serif font-bold text-[#09203B] mb-2">Get a Free Consultation</h3>
                  <p className="text-sm text-gray-500 mb-6">Our expert will reply within 10 minutes</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B]"
                      />
                    </div>
                    <div className="relative">
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3.5 pr-10 text-sm focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] bg-white text-gray-700"
                      >
                        <option value="">Select Service</option>
                        <option value="Bookkeeping">Bookkeeping & Accounting</option>
                        <option value="VAT">VAT Services</option>
                        <option value="CorporateTax">Corporate Tax</option>
                        <option value="Audit">Audit Services</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="relative">
                      <select
                        required
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3.5 pr-10 text-sm focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] bg-white text-gray-700"
                      >
                        <option value="">Your Emirate</option>
                        <option value="Dubai">Dubai</option>
                        <option value="AbuDhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm text-[15px]">
                      Request Free Consultation <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-gray-500 font-medium">
                      <Lock className="w-3 h-3 text-[#c4923e]" />
                      <span>Your information is 100% secure and confidential</span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-24 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">Why It Matters</h4>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-6">Why Bookkeeping and Accounting Matter for Your Business</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Keeping proper books isn't optional in the UAE. Federal law requires businesses to maintain accurate financial records, and skipping this step can lead to real penalties during a VAT or corporate tax audit. Beyond compliance, clean books give you something more valuable: clarity. When you can see your actual cash position, your outstanding invoices, and your monthly expenses at a glance, you make better decisions instead of guessing.
                  </p>
                  <p>
                    Businesses that neglect bookkeeping often discover the cost later, when a tax filing deadline arrives and the numbers don't add up. Professional accounting services in Dubai and across the UAE exist to prevent exactly that scenario — catching small errors before they become expensive problems.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gray-200">
                  <img src="/wp-content/uploads/2026/08/Why-Bookkeeping-and-Accounting-Matter-for-Your-Business-e1786291552387.webp" alt="Why bookkeeping matters" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h4 className="text-[#D49D28] font-bold text-sm tracking-widest uppercase mb-3">What's Included</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-6">What Our Bookkeeping and Accounting Services in UAE Include</h2>
              <p className="text-gray-600">
                We built our service list around what businesses actually need month after month — not a generic package that looks good on paper.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/assets/images/BookkeepingandAccounting.jpeg" alt="Bookkeeping and Accounting" className="w-full h-auto object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-[20px] p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-[52px] h-[52px] bg-[#F3E6CD] rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-2xl leading-none">📒</span>
                </div>
                <h3 className="text-[17px] font-serif font-bold text-[#09203B] mb-3">Monthly Bookkeeping</h3>
                <p className="text-[14px] text-gray-800 leading-relaxed">Daily transaction recording, expense tracking, and ledger maintenance kept current every month.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-[20px] p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-[52px] h-[52px] bg-[#F3E6CD] rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-2xl leading-none">🏦</span>
                </div>
                <h3 className="text-[17px] font-serif font-bold text-[#09203B] mb-3">Bank Reconciliation</h3>
                <p className="text-[14px] text-gray-800 leading-relaxed">Your records always match what's actually sitting in your account — no guesswork, no gaps.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-[20px] p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-[52px] h-[52px] bg-[#F3E6CD] rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-2xl leading-none">🔄</span>
                </div>
                <h3 className="text-[17px] font-serif font-bold text-[#09203B] mb-3">AP &amp; AR Management</h3>
                <p className="text-[14px] text-gray-800 leading-relaxed">Structured accounts payable and receivable tracking, so you know exactly what you owe and what's owed to you.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-[20px] p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-[52px] h-[52px] bg-[#F3E6CD] rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-2xl leading-none">📊</span>
                </div>
                <h3 className="text-[17px] font-serif font-bold text-[#09203B] mb-3">Financial Reporting</h3>
                <p className="text-[14px] text-gray-800 leading-relaxed">Balance sheets, profit and loss statements, and cash flow summaries you can actually understand and act on.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-[20px] p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-[52px] h-[52px] bg-[#F3E6CD] rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-2xl leading-none">🌐</span>
                </div>
                <h3 className="text-[17px] font-serif font-bold text-[#09203B] mb-3">IFRS Compliance</h3>
                <p className="text-[14px] text-gray-800 leading-relaxed">Maintained throughout — essential if your business has investors, lenders, or international reporting obligations.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-[20px] p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-[52px] h-[52px] bg-[#F3E6CD] rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-2xl leading-none">🧾</span>
                </div>
                <h3 className="text-[17px] font-serif font-bold text-[#09203B] mb-3">Backlog Accounting &amp; Setup</h3>
                <p className="text-[14px] text-gray-800 leading-relaxed">Catch-up bookkeeping for businesses behind schedule, plus chart of accounts and invoicing template setup for new ones.</p>
              </div>
            </div>

            <div className="mt-8 bg-[#182f48] rounded-xl p-6 text-white max-w-6xl mx-auto shadow-sm">
              <h3 className="text-[15px] font-bold mb-2 text-[#D49D28] flex items-center gap-2">
                <Cloud className="w-4 h-4 text-white fill-white" /> Works with your existing platform
              </h3>
              <p className="text-white/90 text-[13px] leading-relaxed">
                Switching accounting systems is a hassle nobody wants — we work directly inside Xero, Zoho, and QuickBooks, plugging into whatever platform you already use.
              </p>
            </div>
          </div>
        </section>

        {/* OUTSOURCED ACCOUNTING */}
        <section className="py-24 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">Outsourced Accounting UAE</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-5 max-w-4xl mx-auto leading-tight">
                Why More Businesses Choose Outsourced Accounting UAE Solutions
              </h2>
              <p className="text-[14px] text-gray-600 max-w-[840px] mx-auto leading-relaxed">
                Hiring a full-time, in-house accountant costs more than most businesses realize once you factor in salary, visa costs, and training. Outsourced accounting UAE arrangements let you access a full team of qualified professionals for a fraction of that cost — and you get coverage even when someone is on leave, which an in-house hire can't offer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="bg-white rounded-[16px] p-5 text-center shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md group hover:bg-[#09203B] transition-all duration-300 cursor-pointer">
                <h3 className="text-[15px] font-bold text-[#c4923e] mb-1.5 transition-colors duration-300">Full Team</h3>
                <p className="text-[12px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300">vs. a single in-house hire</p>
              </div>
              <div className="bg-white rounded-[16px] p-5 text-center shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md group hover:bg-[#09203B] transition-all duration-300 cursor-pointer">
                <h3 className="text-[15px] font-bold text-[#c4923e] mb-1.5 transition-colors duration-300">Zero Gaps</h3>
                <p className="text-[12px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300">coverage even during leave</p>
              </div>
              <div className="bg-white rounded-[16px] p-5 text-center shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md group hover:bg-[#09203B] transition-all duration-300 cursor-pointer">
                <h3 className="text-[15px] font-bold text-[#c4923e] mb-1.5 transition-colors duration-300">Scales With You</h3>
                <p className="text-[12px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300">no extra hiring or training</p>
              </div>
              <div className="bg-white rounded-[16px] p-5 text-center shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md group hover:bg-[#09203B] transition-all duration-300 cursor-pointer">
                <h3 className="text-[15px] font-bold text-[#c4923e] mb-1.5 transition-colors duration-300">Strict Confidentiality</h3>
                <p className="text-[12px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300">protocols built into every engagement</p>
              </div>
            </div>
          </div>
        </section>

        {/* MONTHLY PACKAGES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-[#D49D28] font-bold text-sm tracking-widest uppercase mb-3">Monthly Packages</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-6">Monthly Bookkeeping Packages Built Around Your Business Size</h2>
              <p className="text-gray-600">
                We don't believe in one-size-fits-all pricing. Every package includes core bookkeeping, monthly financial statements, and direct access to your account manager.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Package 1 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow mt-4">
                <h3 className="text-2xl font-serif font-bold text-[#09203B] mb-2">Startup</h3>
                <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">Basic transaction recording &amp; VAT support</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D49D28] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Core monthly bookkeeping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D49D28] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Monthly financial statements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D49D28] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Dedicated account manager</span>
                  </li>
                </ul>
              </div>

              {/* Package 2 - Most Popular */}
              <div className="bg-white border-2 border-[#E8B84B] rounded-2xl p-8 shadow-xl relative transform md:-translate-y-4">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E8B84B] text-[#09203B] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#09203B] mb-2">Growing Business</h3>
                <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">Full reconciliation &amp; reporting</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D49D28] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Everything in Startup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D49D28] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-bold">Full bank reconciliation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D49D28] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-bold">Detailed financial reporting</span>
                  </li>
                </ul>
              </div>

              {/* Package 3 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow mt-4">
                <h3 className="text-2xl font-serif font-bold text-[#09203B] mb-2">Established Company</h3>
                <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">Audit-ready financials &amp; oversight</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D49D28] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Everything in Growing Business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D49D28] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-bold">Audit-ready documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D49D28] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-bold">Closer financial oversight</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-12 max-w-3xl mx-auto">
              Only need help with one specific task — like clearing a backlog of unrecorded transactions or a single VAT filing? We also offer standalone services rather than forcing you into a full monthly commitment.
            </p>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="py-24 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">Who We Serve</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-6">Built for Every Stage of Business</h2>
            </div>

            <div className="flex flex-col gap-5 max-w-[1100px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-[16px] p-7 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="text-xl mb-3 leading-none">🚀</div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[16px] mb-2.5">Startups &amp; SMEs</h3>
                  <p className="text-[13px] text-gray-800 leading-relaxed">Well-maintained accounting records provide the foundation for financial reporting, tax compliance and business decision-making.</p>
                </div>
                <div className="bg-white rounded-[16px] p-7 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="text-xl mb-3 leading-none">🏢</div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[16px] mb-2.5">Free Zone Companies</h3>
                  <p className="text-[13px] text-gray-800 leading-relaxed">Navigating specific jurisdiction requirements.</p>
                </div>
                <div className="bg-white rounded-[16px] p-7 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="text-xl mb-3 leading-none">🛒</div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[16px] mb-2.5">E-commerce Businesses</h3>
                  <p className="text-[13px] text-gray-800 leading-relaxed">Managing high transaction volumes across multiple channels.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[850px] mx-auto w-full">
                <div className="bg-white rounded-[16px] p-7 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="text-xl mb-3 leading-none">🚢</div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[16px] mb-2.5">Trading Companies</h3>
                  <p className="text-[13px] text-gray-800 leading-relaxed">Handling cross-border VAT questions.</p>
                </div>
                <div className="bg-white rounded-[16px] p-7 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="text-xl mb-3 leading-none">🧾</div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[16px] mb-2.5">Service-Based Businesses</h3>
                  <p className="text-[13px] text-gray-800 leading-relaxed">Straightforward, reliable monthly reporting without unnecessary complexity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="pt-24 pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">Our Process</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-12">How We Work With You</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
              <div className="bg-white rounded-[16px] p-7 shadow-sm border border-gray-100 flex flex-col items-center group hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-[46px] h-[46px] rounded-full bg-[#09203B] text-[#c4923e] flex items-center justify-center font-bold text-[15px] mb-5 border border-[#c4923e] group-hover:bg-[#c4923e] group-hover:text-[#09203B] group-hover:border-[#09203B] transition-colors duration-300">1</div>
                <h3 className="font-serif font-bold text-[#09203B] mb-3 text-[16px]">Free Consultation</h3>
                <p className="text-[13px] text-gray-700 leading-relaxed text-center">We understand your business, your current bookkeeping situation, and any urgent compliance gaps.</p>
              </div>
              <div className="bg-white rounded-[16px] p-7 shadow-sm border border-gray-100 flex flex-col items-center group hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-[46px] h-[46px] rounded-full bg-[#09203B] text-[#c4923e] flex items-center justify-center font-bold text-[15px] mb-5 border border-[#c4923e] group-hover:bg-[#c4923e] group-hover:text-[#09203B] group-hover:border-[#09203B] transition-colors duration-300">2</div>
                <h3 className="font-serif font-bold text-[#09203B] mb-3 text-[16px]">Setup</h3>
                <p className="text-[13px] text-gray-700 leading-relaxed text-center">We collect your existing documentation and set up your chart of accounts if one doesn't already exist.</p>
              </div>
              <div className="bg-white rounded-[16px] p-7 shadow-sm border border-gray-100 flex flex-col items-center group hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-[46px] h-[46px] rounded-full bg-[#09203B] text-[#c4923e] flex items-center justify-center font-bold text-[15px] mb-5 border border-[#c4923e] group-hover:bg-[#c4923e] group-hover:text-[#09203B] group-hover:border-[#09203B] transition-colors duration-300">3</div>
                <h3 className="font-serif font-bold text-[#09203B] mb-3 text-[16px]">Ongoing Bookkeeping</h3>
                <p className="text-[13px] text-gray-700 leading-relaxed text-center">We begin ongoing monthly bookkeeping and reconciliation on a set schedule.</p>
              </div>
              <div className="bg-white rounded-[16px] p-7 shadow-sm border border-gray-100 flex flex-col items-center group hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-[46px] h-[46px] rounded-full bg-[#09203B] text-[#c4923e] flex items-center justify-center font-bold text-[15px] mb-5 border border-[#c4923e] group-hover:bg-[#c4923e] group-hover:text-[#09203B] group-hover:border-[#09203B] transition-colors duration-300">4</div>
                <h3 className="font-serif font-bold text-[#09203B] mb-3 text-[16px]">Reporting &amp; Review</h3>
                <p className="text-[13px] text-gray-700 leading-relaxed text-center">You receive monthly reports along with a compliance review, so nothing slips through unnoticed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY RBO */}
        <section className="pt-12 pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">Why RBO</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B]">Why Businesses Choose RBO Accounting Services FZE</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-200 flex gap-4 items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[15px] mb-1">FTA Registered Tax Agents</h3>
                  <p className="text-[13px] text-[#09203B] leading-relaxed">Our VAT and compliance guidance is grounded in what the Federal Tax Authority actually requires.</p>
                </div>
              </div>
              <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-200 flex gap-4 items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[15px] mb-1">Dedicated Account Manager</h3>
                  <p className="text-[13px] text-[#09203B] leading-relaxed">Every client gets a dedicated account manager, not a rotating cast of unfamiliar staff.</p>
                </div>
              </div>
              <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-200 flex gap-4 items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[15px] mb-1">Transparent Pricing</h3>
                  <p className="text-[13px] text-[#09203B] leading-relaxed">Clear from the start, with no surprise fees added later.</p>
                </div>
              </div>
              <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-200 flex gap-4 items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[15px] mb-1">Deadlines Taken Seriously</h3>
                  <p className="text-[13px] text-[#09203B] leading-relaxed">We understand what a missed filing actually costs you.</p>
                </div>
              </div>
              <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-200 flex gap-4 items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                  <Save className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[15px] mb-1">Fluent Across Platforms</h3>
                  <p className="text-[13px] text-[#09203B] leading-relaxed">Xero, Zoho, and QuickBooks — you're never forced to change systems to work with us.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="pt-12 pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">Locations We Serve</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-4">Where We Provide Accounting Outsourcing</h2>
            <p className="text-[13px] text-gray-500 mb-8 max-w-4xl mx-auto">
              Our team supports businesses across the UAE, wherever your company is registered — in person or remotely, mainland or free zone.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-5xl mx-auto">
              {mapLocations.map((loc, idx) => {
                const isActive = activeLocation === idx;
                return (
                  <button
                    key={loc.name}
                    onClick={() => setActiveLocation(idx)}
                    className={`px-6 py-2.5 text-[14px] font-bold rounded-md transition-all shadow-sm ${isActive
                        ? "bg-[#c4923e] text-white"
                        : "bg-[#E2E8F0] hover:bg-gray-300 text-[#09203b]"
                      }`}
                  >
                    {loc.name}
                  </button>
                );
              })}
            </div>

            <div className="max-w-5xl mx-auto rounded-md overflow-hidden shadow-sm h-[160px] bg-gray-200 relative border border-gray-200">
              <iframe
                key={activeLocation}
                title={`Map of ${mapLocations[activeLocation].name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapLocations[activeLocation].mapQuery)}&t=m&z=11&output=embed&iwloc=near`}
                className="w-full h-full border-0 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-2 left-2 pointer-events-none">
                <a href={`https://maps.google.com/?q=${encodeURIComponent(mapLocations[activeLocation].mapQuery)}`} target="_blank" rel="noreferrer" className="bg-white hover:bg-gray-50 px-3 py-1.5 rounded-sm shadow-sm text-[12px] font-bold text-blue-600 flex items-center gap-1.5 transition-colors pointer-events-auto">
                  Maps ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT REVIEWS */}
        <TestimonialsSection />

        {/* FAQ SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h4 className="text-[#D49D28] font-bold text-sm tracking-widest uppercase mb-3">Common Questions</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-12">
              Everything UAE businesses ask about accounting, VAT, and Corporate Tax — answered by our experts.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border ${activeFaq === index ? 'border-[#09203B]' : 'border-gray-200'} rounded-xl overflow-hidden transition-all duration-300 shadow-sm`}
                >
                  <button
                    className={`w-full flex items-center justify-between p-6 text-left transition-colors ${activeFaq === index ? 'bg-[#09203B] text-white' : 'bg-white hover:bg-gray-50 text-[#09203B]'
                      }`}
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <span className="font-bold text-[15px] pr-8">{faq.q}</span>
                    {activeFaq === index ? (
                      <ChevronUp className={`w-5 h-5 flex-shrink-0 text-[#E8B84B]`} />
                    ) : (
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#E8B84B]`} />
                    )}
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 py-6 bg-white border-t border-gray-100' : 'max-h-0'
                      }`}
                  >
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOLD CTA BANNER */}
        <section className="bg-[#A27E36] py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-white mb-4">
              Ready for Bookkeeping That Actually Keeps You Ahead?
            </h2>
            <p className="text-white mb-8 max-w-[850px] mx-auto leading-relaxed text-[14px]">
              If you're comparing providers of bookkeeping and accounting services in UAE and want a team that answers the phone and keeps your books genuinely audit-ready, get in touch with RBO Accounting Services FZE today.
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

        {/* SUB-FOOTER CTA */}
        <section className="bg-white py-12">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FCFBF7] border border-[#E8B84B]/50 border-l-[4px] border-l-[#c4923e] rounded-[8px] p-6 shadow-sm flex flex-col">
              
              {/* Heading */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[18px]">📊</span>
                <h3 className="text-[18px] md:text-[20px] font-serif font-bold text-[#09203B]">
                  Setting Up a New UAE Company? Build Audit-Ready Books from Day One
                </h3>
              </div>
              
              {/* Paragraph */}
              <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
                The easiest way to avoid costly year-end accounting cleanups is setting up your cloud chart of accounts (Zoho Books / QuickBooks) simultaneously with commercial licensing. Learn how our <Link href="/business-setup" className="font-bold text-[#09203B] hover:text-[#E8B84B] underline transition-colors underline-offset-2">Company Formation &amp; Bookkeeping Packages</Link> provide turnkey corporate licensing with complete financial peace of mind.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/business-setup" className="bg-[#09203B] hover:bg-black text-white text-[12px] font-bold py-2.5 px-4 rounded-[4px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <span>🚀</span> UAE Business Setup Services &rarr;
                </Link>
                <Link href="/business-setup" className="bg-white border border-gray-300 hover:bg-gray-50 text-[#09203B] text-[12px] font-bold py-2.5 px-4 rounded-[4px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <span className="text-[#E8B84B] text-[14px]">✦</span> Mainland vs Free Zone Comparison
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
