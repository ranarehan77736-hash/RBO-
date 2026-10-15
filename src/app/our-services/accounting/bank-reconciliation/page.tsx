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
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function BankReconciliationPage() {
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
      q: "What is bank reconciliation and why is it important?",
      a: "Bank reconciliation is the process of comparing your recorded transactions against your bank statement to confirm they match. It matters because unreconciled books can hide errors, missing payments, or fraud — all of which affect the accuracy of your financial decisions."
    },
    {
      q: "What causes unreconciled transactions?",
      a: "Common causes include timing differences between when a transaction is recorded and when it clears the bank, bank fees or charges that were never manually entered, duplicate entries, and simple data entry errors."
    },
    {
      q: "How often should bank reconciliation be done?",
      a: "Monthly reconciliation is standard for most businesses, though companies with high transaction volumes sometimes benefit from more frequent reconciliation to catch issues faster."
    },
    {
      q: "Can you help with backlog or overdue reconciliations?",
      a: "Yes. If your reconciliation has fallen behind, we can work through the backlog and get your accounts current, then transition you onto a regular monthly schedule."
    },
    {
      q: "Does bank reconciliation help during a tax audit?",
      a: "Yes. Reconciled books demonstrate that your financial records are accurate and well-maintained, which speeds up audits and reduces the risk of penalties tied to discrepancies."
    },
    {
      q: "How is cash book matching different from bank reconciliation?",
      a: "Cash book matching specifically compares your internal cash records against verified transactions, while bank reconciliation is the broader process of aligning your full ledger against your bank statement. In practice, the two work together as part of the same reconciliation process."
    },
    {
      q: "How do I get started with your reconciliation service?",
      a: "Book a free consultation through our website or give us a call. We'll review your current bank accounts and reconciliation status and outline exactly where we can help."
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
                  <span className="whitespace-nowrap">Bank <span className="text-[#D49D28]">Reconciliation Services</span></span>
                  <span className="block mt-2">UAE</span>
                </h1>
                <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed max-w-[620px]">
                  Nothing derails a month end close faster than a bank balance that doesn't match your books. RBO Accounting Services FZE provides bank reconciliation services UAE businesses use to catch discrepancies early, clear unreconciled transactions, and keep their financial records accurate month after month. We handle the matching work so your numbers actually reflect reality &mdash; not just what your ledger assumes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a href="#form" className="bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all flex items-center justify-center gap-2 text-[13px]">
                    Book a Free Consultation &rarr;
                  </a>
                  <a href="https://wa.me/971508051857" target="_blank" rel="noreferrer" className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2 text-[13px]">
                    <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Us
                  </a>
                </div>
                <div className="flex flex-row items-center gap-x-3 text-[11px] font-semibold text-white pt-2 overflow-hidden whitespace-nowrap">
                  <div className="flex items-center gap-1.5"><div className="w-[12px] h-[12px] rounded-full border-2 border-[#D49D28] flex items-center justify-center"></div> Free Initial Consultation</div>
                  <div className="flex items-center gap-1.5"><div className="w-[12px] h-[12px] rounded-full border-2 border-[#D49D28] flex items-center justify-center"></div> 7 Emirates Covered</div>
                  <div className="flex items-center gap-1.5"><div className="w-[12px] h-[12px] rounded-full border-2 border-[#D49D28] flex items-center justify-center"></div> 100% FTA Compliant Solutions</div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="w-full max-w-md mx-auto lg:ml-auto">
                <div id="form" className="bg-white rounded-xl shadow-2xl p-8 relative">
                  <h3 className="text-2xl font-serif font-bold text-[#09203B] mb-2">Get a Free Consultation</h3>
                  <p className="text-[12px] text-gray-500 mb-6">Our expert will reply within 10 minutes</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#E8B84B] focus:ring-1 focus:ring-[#E8B84B] text-[#09203B] font-medium placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Phone / WhatsApp"
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
                        <option value="Bookkeeping">Bookkeeping & Accounting</option>
                        <option value="BankReconciliation">Bank Reconciliation</option>
                        <option value="VAT">VAT Services</option>
                        <option value="CorporateTax">Corporate Tax</option>
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
                        <option value="AbuDhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#09203B]">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm text-[13px]">
                      Request Free Consultation &rarr;
                    </button>
                    <div className="flex items-start justify-center gap-1.5 pt-2 text-[10px] text-[#09203B] font-medium text-center">
                      <Lock className="w-3 h-3 text-[#c4923e] mt-0.5 flex-shrink-0" />
                      <span>Your information is 100% secure and<br />confidential</span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHAT BANK RECONCILIATION ACTUALLY INVOLVES */}
        <section className="py-24 bg-[#F8F6F1]">
          <div className="max-w-[1900px] mx-auto px-6 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="pr-0 lg:pr-4">
                <h4 className="text-[#c4923e] font-bold text-[10px] tracking-[0.2em] uppercase mb-4">RECONCILIATION</h4>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-6 leading-tight">
                  What Bank Reconciliation Actually <br className="hidden lg:block" />Involves
                </h2>
                <div className="space-y-6 text-[#4b5563] leading-[1.7] text-[14px] md:text-[15px]">
                  <p>
                    Bank reconciliation is the process of matching the balances in your accounting records (like your general ledger) to the corresponding information on your bank statements. It ensures that every single transaction is accounted for and classified correctly.
                  </p>
                  <p>
                    Without regular reconciliation, errors accumulate. You might be paying for unauthorized subscriptions, missing out on unrecorded deposits, or presenting an inaccurate financial standing to investors and the FTA. Our expert team ensures every dirham is accounted for.
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                <div className="aspect-[16/10] bg-gray-200">
                  <img src="/wp-content/uploads/2026/08/What-Is-VAT-Return-Filing-and-Who-Needs-to-Do-It-e1786297249992.webp" alt="Bank Reconciliation" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR BANK RECONCILIATION SERVICES */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h4 className="text-[#c4923e] font-bold text-[11px] tracking-widest uppercase mb-3">What's Included</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-4">Our Bank Reconciliation Services</h2>
              <p className="text-gray-600 text-[14.5px] leading-relaxed max-w-3xl mx-auto">
                We built our bank reconciliation services UAE clients depend on around the actual discrepancies businesses run into every month &mdash; not a generic checklist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: "🏦", title: "Bank Reconciliation", desc: "Matching every transaction in your ledger against your bank statement, line by line." },
                { icon: "📕", title: "Cash Book Matching", desc: "Aligning your recorded cash movements against verified bank activity." },
                { icon: "💳", title: "Credit Card Reconciliation", desc: "For businesses running multiple payment channels through corporate cards." },
                { icon: "🔍", title: "Unreconciled Transaction Resolution", desc: "Missing entries, timing differences, or genuine errors — we investigate and resolve them, not just flag them." },
                { icon: "🌍", title: "Multi-Account & Multi-Currency", desc: "For businesses across several bank accounts or dealing with foreign currency, adjusting for exchange rate differences." },
                { icon: "📅", title: "Month End Closing Support", desc: "Your reconciliation work is already done by closing time, so your numbers are ready to report on." }
              ].map((service, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out cursor-pointer">
                  <div className="w-14 h-14 bg-[#F5EAD4] rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[28px]">
                    {service.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#09203B] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#09203B] rounded-2xl p-8 max-w-6xl mx-auto">
              <h3 className="text-[#c4923e] font-bold text-[15px] mb-2 flex items-center gap-2">
                <Cloud className="w-5 h-5 fill-[#c4923e]" /> Works with your existing platform
              </h3>
              <p className="text-white text-[14px] leading-relaxed max-w-4xl">
                Switching accounting systems is a hassle nobody wants &mdash; we work directly inside Xero, Zoho, and QuickBooks, plugging into whatever platform you already use.
              </p>
            </div>
          </div>
        </section>

        {/* SIGNS YOUR BUSINESS NEEDS RECONCILIATION SUPPORT */}
        <section className="py-24 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-[#c4923e] font-bold text-[14px] md:text-[15px] tracking-wide mb-3">Warning Signs</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-4">Signs Your Business Needs Reconciliation Support</h2>
              <p className="text-gray-500 text-[14.5px]">
                A few warning signs tend to show up before businesses realize they have a reconciliation problem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: "⚖️", text: "Bank balance and ledger balance stop matching — even by a small amount" },
                { icon: "🧾", text: "Transactions go missing, or the same payment shows up twice" },
                { icon: "⏳", text: "Month end closing drags into the following month" },
                { icon: "🚩", text: "Unreconciled books trigger follow-up questions during a VAT or tax audit" }
              ].map((sign, index) => (
                <div 
                  key={index} 
                  className="bg-[#09203B] rounded-2xl p-7 text-left flex flex-col justify-start border border-[#1b3557] shadow-lg hover:border-[#c4923e]/60 hover:shadow-[0_12px_30px_rgba(9,32,59,0.35)] hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-5 border border-white/10 group-hover:bg-[#c4923e]/20 group-hover:border-[#c4923e]/40 transition-colors duration-300">
                    {sign.icon}
                  </div>
                  <p className="text-gray-200 text-[13.5px] leading-relaxed group-hover:text-white transition-colors duration-200">
                    {sign.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-6xl mx-auto mt-8">
              <p className="text-gray-500 text-[13.5px] leading-relaxed text-left">
                If any of this sounds familiar, it's usually a sign your reconciliation process needs a dedicated, consistent hand rather than being squeezed in whenever someone has spare time.
              </p>
            </div>
          </div>
        </section>

        {/* WHY OUTSOURCED MAKES SENSE */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h4 className="text-[#c4923e] font-semibold text-[13px] md:text-[14px] uppercase tracking-wider mb-3">
                Why Outsource
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] mb-4">
                Why Outsourced Bank Reconciliation Makes Sense
              </h2>
              <p className="text-gray-500 text-[14.5px] max-w-2xl mx-auto leading-relaxed">
                Reconciliation is detail-heavy work, and small errors compound quickly when nobody’s checking consistently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 items-stretch">
              
              {/* Left Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[20px] md:text-[21px] mb-2">
                    Fewer Errors Slip Through
                  </h3>
                  <p className="text-gray-500 text-[13.5px] mb-6">
                    Dedicated focus, not a side task
                  </p>
                  
                  <ul className="space-y-0">
                    {[
                      "Reconciliation is our core focus",
                      "Not squeezed between other responsibilities",
                      "Consistent, detail-heavy review"
                    ].map((item, i, arr) => (
                      <li 
                        key={i} 
                        className={`flex items-start gap-3 py-3.5 ${
                          i !== arr.length - 1 ? "border-b border-dotted border-gray-200" : ""
                        }`}
                      >
                        <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="text-gray-700 text-[13.5px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Middle Card (Featured / Active State) */}
              <div className="bg-white border-2 border-amber-400 rounded-2xl p-8 flex flex-col justify-between relative shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e8b84b] text-[#09203B] text-xs font-bold px-3.5 py-1 rounded-full shadow-sm whitespace-nowrap">
                  Time Saved
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[20px] md:text-[21px] mb-2">
                    Your Time Back
                  </h3>
                  <p className="text-gray-500 text-[13.5px] mb-6">
                    Stop matching line items yourself
                  </p>
                  
                  <ul className="space-y-0">
                    {[
                      "No more hours lost to manual matching",
                      "More reliable than a rushed self-review",
                      "Focus on running your business instead"
                    ].map((item, i, arr) => (
                      <li 
                        key={i} 
                        className={`flex items-start gap-3 py-3.5 ${
                          i !== arr.length - 1 ? "border-b border-dotted border-gray-200" : ""
                        }`}
                      >
                        <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="text-gray-700 text-[13.5px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div>
                  <h3 className="font-serif font-bold text-[#09203B] text-[20px] md:text-[21px] mb-2">
                    Genuinely Audit-Ready
                  </h3>
                  <p className="text-gray-500 text-[13.5px] mb-6">
                    No backlog, ever
                  </p>
                  
                  <ul className="space-y-0">
                    {[
                      "Records stay audit-ready month to month",
                      "Matters most when an audit request lands",
                      "Ongoing reconciliation prevents backlog"
                    ].map((item, i, arr) => (
                      <li 
                        key={i} 
                        className={`flex items-start gap-3 py-3.5 ${
                          i !== arr.length - 1 ? "border-b border-dotted border-gray-200" : ""
                        }`}
                      >
                        <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="text-gray-700 text-[13.5px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BUILT FOR EVERY STAGE */}
        <section className="py-20 md:py-24 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h4 className="text-[#c4923e] font-semibold text-[13px] md:text-[14px] mb-3">Who We Serve</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B]">Built for Every Stage of Business</h2>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Row 1: 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: "🚀", title: "Startups & SMEs", desc: "Need reconciliation done right from the start." },
                  { icon: "🏢", title: "Free Zone Companies", desc: "Jurisdiction-specific reporting requirements." },
                  { icon: "🛒", title: "E-commerce Businesses", desc: "High volumes of daily transactions across multiple payment gateways." }
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

              {/* Row 2: 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "🚢", title: "Trading Companies", desc: "Managing cross-border payments." },
                  { icon: "🧾", title: "Multi-Account Businesses", desc: "Consistent, coordinated reconciliation across all accounts." }
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

        {/* HOW OUR PROCESS WORKS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h4 className="text-[#c4923e] text-sm font-semibold tracking-wider uppercase mb-3">
                Our Process
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B]">
                How Our Bank Reconciliation Process Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mt-12 items-stretch">
              {[
                { 
                  step: "1", 
                  title: "Free Consultation", 
                  desc: "We understand your current bank accounts, transaction volume, and any existing discrepancies you’re already aware of." 
                },
                { 
                  step: "2", 
                  title: "Statement Collection", 
                  desc: "We collect your bank statements and begin matching transactions against your cash book, line by line." 
                },
                { 
                  step: "3", 
                  title: "Investigate & Resolve", 
                  desc: "Missing entries, timing gaps, or duplicate transactions — we investigate and resolve each one rather than leaving them unexplained." 
                },
                { 
                  step: "4", 
                  title: "Report & Sign-Off", 
                  desc: "You receive a monthly reconciliation report with sign-off — a clear, documented record that your books and bank balance actually agree." 
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

        {/* WHY BUSINESSES CHOOSE RBO */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-2">
                Why RBO
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#09203B] text-center mb-12">
                Why Businesses Choose RBO Accounting Services FZE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 items-start">
              
              {/* Left Column (3 Cards) */}
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      FTA Registered Tax Agents
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our reconciliation practices are built with actual audit requirements in mind, not just internal tidiness.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <DollarSign className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      Transparent Pricing
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      No surprise fees added later.
                    </p>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <FileText className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      Fluent Across Platforms
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Xero, Zoho, and QuickBooks — we plug directly into whatever system you already use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (2 Cards) */}
              <div className="space-y-6">
                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Users className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      Dedicated Account Manager
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Every client works with a dedicated bookkeeper who already knows their accounts — no starting from scratch each month.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ease-out flex items-start gap-5 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#09203B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      Deadlines Taken Seriously
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      A reconciliation report that arrives weeks late defeats the purpose of having one at all.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHERE WE PROVIDE SERVICES (MAP SECTION) */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h4 className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-2">
                Locations We Serve
              </h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-4">
                Where We Provide Bank Reconciliation Services
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
                Our reconciliation team supports businesses across the UAE, covering both mainland and free zone companies.
              </p>
            </div>

            {/* Interactive Emirate Tabs / Pill Buttons */}
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-6 px-4">
              {mapLocations.map((loc, index) => (
                <button
                  key={index}
                  className={`font-serif rounded-lg px-5 md:px-6 py-2 text-[15px] transition-all duration-200 cursor-pointer ${
                    activeLocation === index
                      ? "bg-[#e5a83b] text-white font-medium shadow-sm"
                      : "bg-[#d1d5db] text-[#1f2937] hover:bg-[#c4c8cf] font-normal"
                  }`}
                  onClick={() => setActiveLocation(index)}
                >
                  {loc.name}
                </button>
              ))}
            </div>

            {/* Map Display Container (Banner / Panoramic Aspect) */}
            <div className="max-w-6xl mx-auto px-4">
              <div className="w-full h-[200px] md:h-[220px] rounded-xl overflow-hidden shadow-xs border border-gray-200/90 bg-white relative">
                {/* Floating "Maps" link button at the top-left */}
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

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* FAQS */}
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
                Everything UAE businesses ask about accounting, VAT, and Corporate Tax — answered by our experts.
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

        {/* GOLD CTA BANNER */}
        <section className="bg-[#A27E36] py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-white mb-4">
              Ready for Books That Actually Match Your Bank Balance?
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
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
