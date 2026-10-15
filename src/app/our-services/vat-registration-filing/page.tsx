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

export default function VATRegistrationFilingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    emirate: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the VAT registration threshold in the UAE?",
      a: "For UAE-resident businesses, mandatory registration generally applies once taxable supplies and imports exceed AED 375,000 over the previous 12 months, or are expected to exceed that amount within the next 30 days. The voluntary threshold is AED 187,500, subject to applicable requirements."
    },
    {
      q: "How do I register for VAT in the UAE?",
      a: "VAT registration is submitted electronically via the Federal Tax Authority's EmaraTax portal. You must provide your trade license, passport/Emirates ID of authorized signatories, financial statements or bank records evidencing turnover, and company incorporation documents."
    },
    {
      q: "How often do I need to file a VAT return?",
      a: "The standard tax period assigned by the FTA is quarterly for most businesses, though certain entities may be assigned a monthly tax period depending on revenue volume or specific FTA designations."
    },
    {
      q: "What accounting software does RBO support?",
      a: "Our tax team works seamlessly across popular cloud accounting platforms including Zoho Books, QuickBooks, Xero, Tally, SAP, and custom ERP systems."
    },
    {
      q: "Can RBO help with VAT registration and VAT return filing?",
      a: "Yes. We offer complete end-to-end support starting from initial turnover eligibility assessment, document preparation, and TRN issuance to recurring quarterly return computations, reconciliation, and portal submissions."
    },
    {
      q: "Can free zone companies register for VAT?",
      a: "Yes. UAE VAT applies to both mainland and free zone entities. Free zone companies (including those operating in Designated Zones) must register once their taxable supplies cross the mandatory threshold."
    },
    {
      q: "Does RBO provide VAT refund assistance?",
      a: "Yes. If your eligible input VAT exceeds output VAT, we help compile supporting invoices, perform detailed reconciliations, and submit formal refund claims directly to the FTA."
    },
    {
      q: "Can RBO help if there are errors in VAT records?",
      a: "Yes. We conduct thorough VAT health checks, identify ledger discrepancies, rectify past return omissions, and submit Voluntary Disclosures (VD) to the FTA before audits occur."
    },
    {
      q: "Does RBO provide VAT services across the UAE?",
      a: "Yes. We serve mainland and free zone clients across all 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain."
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
                  VAT Registration &amp; Filing in <br />
                  <span className="text-[#c4923e]">the UAE</span>
                </h1>
                
                <div className="space-y-4 text-gray-300 text-[13.5px] sm:text-[14px] leading-relaxed max-w-[610px]">
                  <p>
                    VAT compliance can feel like a moving target if you’re not sure where you stand. RBO Accounting Services FZE provides professional VAT registration and filing support in the UAE, helping businesses figure out their VAT obligations, get registered, prepare accurate VAT returns, and keep records organized for the long haul.
                  </p>
                  <p>
                    Our support runs the full length of the VAT journey &mdash; from your very first registration through recurring return filing, reconciliation, refunds, advisory, and any FTA-related matters that come up along the way. We work with startups, SMEs, mainland companies, and free zone businesses across the UAE.
                  </p>
                  <p className="text-gray-200">
                    Need help with VAT registration or filing? Contact RBO Accounting Services FZE for a consultation.
                  </p>
                </div>

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

        {/* SECTION 1: PROFESSIONAL VAT REGISTRATION & FILING SERVICES */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="pr-0 lg:pr-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Professional VAT Registration &amp; <br />Filing Services in the UAE
                </h2>
                <div className="space-y-4 text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  <p>
                    VAT compliance isn’t a one-time task &mdash; it’s an ongoing responsibility once your business is registered. Getting your registration status, transaction treatment, and supporting records right from day one makes everything that follows much easier to manage.
                  </p>
                  <p>
                    RBO offers structured VAT registration and filing services that UAE businesses can rely on to stay on top of their obligations and keep their tax records accurate.
                  </p>
                </div>

                <div className="mb-6">
                  <p className="font-bold text-gray-900 text-sm mb-3">Our VAT services include:</p>
                  <ul className="space-y-1.5 text-gray-600 text-sm">
                    {["VAT registration", "VAT return filing", "VAT registration amendments", "VAT refunds", "VAT advisory", "Input and output VAT reconciliation", "FTA audit support", "FTA records updates"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-900 font-medium text-sm mb-6">
                  VAT penalty reconsideration
                </p>

                <Link
                  href="/contact-us"
                  className="inline-block bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-6 rounded-md shadow-sm transition-colors text-sm"
                >
                  Explore Our VAT Services
                </Link>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                <div className="aspect-[16/11] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/What-Is-VAT-Return-Filing-and-Who-Needs-to-Do-It-e1786297249992.webp"
                    alt="Professional VAT Registration & Filing Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: VAT REGISTRATION IN THE UAE */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Banner */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <div className="bg-[#09203B] p-8 md:p-12 text-white text-center rounded-2xl relative overflow-hidden">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <FileText className="w-8 h-8 text-[#E8B84B]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 tracking-wide">
                    BOOKKEEPING &amp; ACCOUNTING
                  </h3>
                  <h4 className="text-lg md:text-xl font-bold text-[#E8B84B] mb-4">
                    SERVICES IN UAE
                  </h4>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-8">
                    Accurate Records. Clear Insights. Better Business Decisions.
                  </p>

                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-[11px] font-semibold">
                    <div className="flex flex-col items-center gap-1.5">
                      <BarChart className="w-5 h-5 text-[#E8B84B]" />
                      <span>ACCURATE BOOKKEEPING</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <TrendingUp className="w-5 h-5 text-[#E8B84B]" />
                      <span>BANK RECONCILIATION</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <ShieldCheck className="w-5 h-5 text-[#E8B84B]" />
                      <span>FINANCIAL REPORTING</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 text-center">
                    <span className="text-[11px] uppercase tracking-wider text-gray-300">
                      STAY COMPLIANT. STAY ORGANIZED. GROW WITH CONFIDENCE.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="order-1 lg:order-2 pl-0 lg:pl-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  VAT Registration in the UAE
                </h2>
                <div className="space-y-4 text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  <p>
                    If your business meets the applicable UAE VAT registration requirements, you're required to register with the Federal Tax Authority.
                  </p>
                  <p>
                    For UAE-resident businesses, registration is generally mandatory once the value of taxable supplies and imports goes over AED 375,000 in the previous 12 months, or is expected to cross that mark within the next 30 days. If you're not quite there yet, voluntary registration may still be an option once taxable supplies, imports, or taxable expenses pass AED 187,500, subject to the applicable requirements.
                  </p>
                </div>

                <div className="mb-6">
                  <p className="font-bold text-gray-900 text-sm mb-3">RBO can help with:</p>
                  <ul className="space-y-1.5 text-gray-600 text-sm">
                    {["VAT eligibility assessment", "Registration documentation", "Taxable turnover review", "EmaraTax application support", "TRN registration process", "FTA registration queries"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-900 font-medium text-sm mb-6">
                  VAT registration amendments
                </p>

                <Link
                  href="/our-services/vat-registration-filing/registration/"
                  className="inline-block bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-6 rounded-md shadow-sm transition-colors text-sm mb-4"
                >
                  Explore VAT Registration UAE
                </Link>

                <p className="text-xs text-gray-500">
                  For official eligibility and registration requirements, you can also refer to the Federal Tax Authority's VAT Registration guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: VAT RETURN FILING IN THE UAE */}
        <section id="vat-return-filing" className="py-20 md:py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="pr-0 lg:pr-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  VAT Return Filing in the UAE
                </h2>
                <div className="space-y-4 text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  <p>
                    Once you're registered for VAT, you'll need to submit returns and make the related payments according to your assigned tax period. The FTA states that VAT returns and related payments are generally due within 28 days from the end of the relevant tax period.
                  </p>
                </div>

                <div className="mb-6">
                  <p className="font-bold text-gray-900 text-sm mb-3">Our VAT return filing services help businesses with:</p>
                  <ul className="space-y-1.5 text-gray-600 text-sm">
                    {[
                      "Sales transaction review",
                      "Purchase and expense review",
                      "Output VAT calculation",
                      "Input VAT review",
                      "VAT reconciliation",
                      "Return preparation",
                      "FTA submission support",
                      "VAT payment coordination",
                      "Filing records and documentation"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-900 font-medium text-sm mb-6">
                  Our goal throughout is simple: help you keep accurate VAT workings and get your returns submitted well within the deadline.
                </p>

                <Link
                  href="/contact-us"
                  className="inline-block bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-6 rounded-md shadow-sm transition-colors text-sm"
                >
                  Explore VAT Return Filing UAE
                </Link>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                <div className="aspect-[16/11] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/How-Does-VAT-Return-Filing-Work-in-the-UAE-e1786297603641.webp"
                    alt="VAT Return Filing in the UAE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: INPUT & OUTPUT VAT RECONCILIATION */}
        <section id="vat-reconciliation" className="py-20 md:py-24 bg-[#FAFAFA] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <div className="aspect-[16/11] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/What-Is-FTA-Audit-Assistance-and-Why-Would-You-Need-It-e1786410754753.webp"
                    alt="Input & Output VAT Reconciliation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="order-1 lg:order-2 pl-0 lg:pl-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Input &amp; Output VAT Reconciliation
                </h2>
                <div className="space-y-4 text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  <p>
                    Accurate VAT returns start with reliable accounting records underneath them.
                  </p>
                  <p>
                    Before a return is prepared, it's worth reviewing your sales, purchases, expenses, and the VAT treatment applied to each. RBO can help with:
                  </p>
                </div>

                <ul className="space-y-1.5 text-gray-600 text-sm mb-6">
                  {[
                    "Input VAT reconciliation",
                    "Output VAT reconciliation",
                    "Sales-to-VAT reconciliation",
                    "Purchase-to-VAT reconciliation",
                    "VAT ledger review",
                    "Supporting invoice review",
                    "Identifying discrepancies"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-900 font-medium text-sm mb-6">
                  Catching inconsistencies at this stage &mdash; rather than after submission &mdash; saves a lot of headaches down the line.
                </p>

                <Link
                  href="/our-services/accounting/bookkeeping-and-accounting/"
                  className="inline-block bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-6 rounded-md shadow-sm transition-colors text-sm"
                >
                  Explore Accounting &amp; Bookkeeping Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: VAT COMPLIANCE SERVICES */}
        <section id="vat-advisory" className="py-20 md:py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="pr-0 lg:pr-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  VAT Compliance Services
                </h2>
                <p className="text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  Filing a return is just one part of VAT compliance. You'll also need to maintain proper tax invoices, accounting records, and supporting documentation, and apply the right VAT treatment across your transactions.
                </p>

                <div className="space-y-4 text-[14px] text-gray-600 mb-8">
                  <div id="records-amendment" className="scroll-mt-28">
                    <strong className="text-gray-900 block mb-0.5">VAT Record Keeping:</strong>
                    Keeping your VAT-related accounting records and supporting documents organized and audit-ready.
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-0.5">VAT Health Checks:</strong>
                    Taking a closer look at your VAT processes and records to flag inconsistencies or areas that need attention.
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-0.5">VAT Advisory:</strong>
                    Practical guidance on how VAT applies to your specific business transactions and compliance obligations.
                  </div>
                  <div id="fta-audit" className="scroll-mt-28">
                    <strong className="text-gray-900 block mb-0.5">FTA Audit Support:</strong>
                    Helping you get the right records and information together when responding to an FTA audit or request.
                  </div>
                </div>

                <Link
                  href="/contact-us"
                  className="inline-block bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-6 rounded-md shadow-sm transition-colors text-sm"
                >
                  Explore VAT Advisory Services
                </Link>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                <div className="aspect-[16/11] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/What-Are-VAT-Advisory-Services-and-Why-Do-Businesses-Need-Them-e1786297936470.webp"
                    alt="VAT Compliance Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: VAT REFUND SERVICES IN THE UAE */}
        <section id="vat-refund" className="py-20 md:py-24 bg-[#FAFAFA] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <div className="aspect-[16/11] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/What-Makes-Our-Accounting-Consulting-Different_1-1-e1786482046332.webp"
                    alt="VAT Refund Services in the UAE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="order-1 lg:order-2 pl-0 lg:pl-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  VAT Refund Services in the UAE
                </h2>
                <div className="space-y-4 text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  <p>
                    Depending on your circumstances, your business may have recoverable input VAT under the applicable UAE VAT rules and conditions.
                  </p>
                  <p className="font-bold text-gray-900">
                    RBO can help prepare and review the information and documentation needed to support a VAT refund, including:
                  </p>
                </div>

                <ul className="space-y-1.5 text-gray-600 text-sm mb-6">
                  {[
                    "Review of eligible input VAT",
                    "Supporting document review",
                    "VAT reconciliation",
                    "Refund application preparation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-900 font-medium text-sm mb-6">
                  FTA correspondence support
                </p>

                <Link
                  href="/contact-us"
                  className="inline-block bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-6 rounded-md shadow-sm transition-colors text-sm"
                >
                  Explore VAT Refund Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: VAT SERVICES FOR MAINLAND & FREE ZONE BUSINESSES */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="pr-0 lg:pr-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  VAT Services for Mainland &amp; Free Zone Businesses
                </h2>
                <div className="space-y-4 text-gray-600 leading-[1.75] text-[14.5px]">
                  <p>
                    Whether you're operating as a mainland company or through a free zone, RBO can support your VAT position.
                  </p>
                  <p>
                    VAT treatment depends on factors like the nature of the transaction, your business activity, and who the parties involved are &mdash; and businesses in designated zones sometimes have their own specific treatment to consider. We help you review your position and pinpoint exactly what compliance requirements apply to you.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                <div className="aspect-[16/11] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/Compliance-and-UAE-Regulations-e1786475995714.webp"
                    alt="Mainland and Free Zone VAT Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: VAT SERVICES FOR BUSINESSES ACROSS THE UAE */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Map */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <div className="w-full h-[320px] bg-white relative">
                  <a
                    href="https://maps.google.com/maps?q=Sharjah+UAE"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-3 left-3 z-10 bg-white px-2.5 py-1 text-xs font-medium text-blue-600 rounded shadow-xs flex items-center gap-1.5 hover:bg-gray-50 transition-colors border border-gray-200"
                  >
                    <span>Maps</span>
                  </a>
                  <iframe
                    src="https://maps.google.com/maps?q=Sharjah+UAE&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                    title="Map of UAE"
                  ></iframe>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="order-1 lg:order-2 pl-0 lg:pl-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  VAT Services for Businesses Across the UAE
                </h2>
                <p className="text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  RBO provides VAT registration, filing, and compliance support to businesses throughout the UAE, including:
                </p>

                <ul className="space-y-1.5 text-gray-700 text-sm font-medium mb-6">
                  {[
                    "Dubai",
                    "Abu Dhabi",
                    "Sharjah",
                    "Ajman",
                    "Ras Al Khaimah",
                    "Fujairah",
                    "Umm Al Quwain"
                  ].map((emirate, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                      <span>{emirate}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-600 text-sm mb-6">
                  Visit our Areas We Serve page to find location-specific accounting and tax services.
                </p>

                <Link
                  href="/areas-we-serve/"
                  className="inline-block bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-6 rounded-md shadow-sm transition-colors text-sm"
                >
                  Explore Areas We Serve
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: WHY CHOOSE RBO FOR VAT SERVICES */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="pr-0 lg:pr-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Why Choose RBO for VAT Services?
                </h2>
                <p className="text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  VAT compliance comes down to three things: accurate information, organized records, and acting on time. Here’s how we help with all three:
                </p>

                <div className="space-y-4 text-[14px] text-gray-600">
                  <div>
                    <strong className="text-gray-900 block mb-0.5">Practical VAT Support:</strong>
                    We focus on the real accounting and tax detail behind every registration and filing &mdash; not just the paperwork.
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-0.5">Registration Assistance:</strong>
                    We walk you through the registration process and help pull together the information it requires.
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-0.5">Accurate VAT Workings:</strong>
                    Sales, purchases, input VAT, and output VAT get reviewed and reconciled before anything is filed.
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-0.5">Ongoing Compliance Support:</strong>
                    You get continuing support, not just a scramble every time a filing deadline shows up.
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-0.5">Integrated Accounting Support:</strong>
                    VAT is closely tied to your everyday bookkeeping, so we're able to support both your accounting and your VAT needs together.
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                <div className="aspect-[16/11] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/Our-Commitment-to-Compliance-e1786480734467.webp"
                    alt="Why Choose RBO for VAT Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: OUR VAT REGISTRATION & FILING PROCESS */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Map */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <div className="w-full h-[320px] bg-white relative">
                  <a
                    href="https://maps.google.com/maps?q=Ajman+UAE"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-3 left-3 z-10 bg-white px-2.5 py-1 text-xs font-medium text-blue-600 rounded shadow-xs flex items-center gap-1.5 hover:bg-gray-50 transition-colors border border-gray-200"
                  >
                    <span>Maps</span>
                  </a>
                  <iframe
                    src="https://maps.google.com/maps?q=Ajman+UAE&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                    title="Map of Ajman"
                  ></iframe>
                </div>
              </div>

              {/* Right Column: Process Steps */}
              <div className="order-1 lg:order-2 pl-0 lg:pl-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Our VAT Registration &amp; Filing Process
                </h2>

                <div className="space-y-4 text-[13.5px] text-gray-600 leading-relaxed">
                  <div>
                    <strong className="text-gray-900">1. Understand Your Business:</strong> We start by reviewing your business activity, structure, turnover, and current VAT position.
                  </div>
                  <div>
                    <strong className="text-gray-900">2. Assess VAT Requirements:</strong> We help determine whether mandatory or voluntary registration applies based on the current requirements.
                  </div>
                  <div>
                    <strong className="text-gray-900">3. Prepare Registration Information:</strong> We organize the business and supporting documentation needed for registration.
                  </div>
                  <div>
                    <strong className="text-gray-900">4. VAT Registration Support:</strong> We complete the application through the FTA's EmaraTax platform, which the FTA currently identifies as the official service channel for VAT registration.
                  </div>
                  <div>
                    <strong className="text-gray-900">5. Prepare VAT Records:</strong> Once registered, we review your sales, purchases, expenses, and VAT records ahead of return preparation.
                  </div>
                  <div>
                    <strong className="text-gray-900">6. VAT Return Preparation:</strong> Input and output VAT are reviewed and reconciled before the return goes in.
                  </div>
                  <div>
                    <strong className="text-gray-900">7. Filing &amp; Ongoing Support:</strong> The return is submitted for the applicable tax period, and you can continue with ongoing VAT compliance support from there.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: WHO NEEDS VAT REGISTRATION IN THE UAE */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="pr-0 lg:pr-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Who Needs VAT Registration in the UAE?
                </h2>
                <p className="text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  Whether you need to register depends on your taxable supplies, imports, and other applicable criteria. Businesses worth checking their position include:
                </p>

                <ul className="space-y-1.5 text-gray-600 text-sm mb-6">
                  {[
                    "Startups reaching taxable turnover thresholds",
                    "SMEs",
                    "Mainland companies",
                    "Free zone businesses",
                    "Trading companies",
                    "Retail businesses",
                    "Service businesses",
                    "E-commerce businesses",
                    "Import and export businesses",
                    "Professional service companies",
                    "Growing businesses approaching the VAT threshold"
                  ].map((business, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                      <span>{business}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-500">
                  For UAE-resident businesses, the FTA currently sets the mandatory registration threshold at AED 375,000 and the voluntary threshold at AED 187,500, subject to the applicable rules.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                <div className="aspect-[16/11] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/Who-Needs-VAT-Registration-in-the-UAE-e1786296002138.webp"
                    alt="Who Needs VAT Registration in the UAE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: VAT REGISTRATION VS. VAT RETURN FILING */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <div className="aspect-[16/11] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/wp-content/uploads/2026/08/What-is-VAT-Registration-in-the-UAE-at-a-Glance.webp"
                    alt="VAT Registration vs VAT Return Filing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="order-1 lg:order-2 pl-0 lg:pl-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  VAT Registration vs. VAT Return Filing
                </h2>
                <p className="text-gray-600 leading-[1.75] text-[14.5px] mb-6">
                  It's easy to mix these two up, but they're separate stages of VAT compliance:
                </p>

                <div className="space-y-6 text-[14px]">
                  <div className="bg-white p-5 rounded-xl border border-gray-200">
                    <strong className="text-gray-900 block mb-1 text-base">VAT Registration</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Determines whether a business needs to register</li>
                      <li>• Creates the business's VAT registration with the FTA</li>
                      <li>• Results in a Tax Registration Number (TRN) after approval</li>
                      <li>• Generally applies once applicable thresholds or conditions are met</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-gray-200">
                    <strong className="text-gray-900 block mb-1 text-base">VAT Return Filing</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Applies to businesses already registered for VAT</li>
                      <li>• Reports VAT activity for the relevant tax period</li>
                      <li>• Calculates VAT payable or recoverable</li>
                      <li>• Must be filed according to the assigned tax period</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-6">
                  Every business's situation is a little different, so it's worth assessing your specific circumstances against the applicable UAE VAT requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13: FAQS */}
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
                            <p className="text-gray-600 leading-relaxed text-[14px] md:text-[15px]">
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

        {/* SECTION 14: CTA BANNER */}
        <section className="bg-[#0b1329] py-16 md:py-20 relative overflow-hidden text-center text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Need Help With VAT Registration or Filing?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you’re approaching the VAT registration threshold, need help getting set up with the FTA, want ongoing return filing support, or just need someone to review your VAT records, RBO Accounting Services FZE is here to help. Speak with RBO about your UAE VAT requirements today.
            </p>
            <div className="flex justify-center">
              <a
                href="#form"
                className="bg-[#c4923e] hover:bg-[#b08030] text-white font-bold py-3 px-8 rounded-md shadow-md transition-all text-sm"
              >
                Get a VAT Consultation
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
