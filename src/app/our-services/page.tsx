"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CTASection from "@/components/CTASection";
import EmiratesCoverageMap from "@/components/EmiratesCoverageMap";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Lock, ChevronsDown, ChevronsUp, ArrowRight, Building, FileCheck, Layers, Package, Globe, Shield, Award, Users, CreditCard, Clock, Cloud, DollarSign } from "lucide-react";
import Link from "next/link";

export default function OurServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "---Select Service---",
    emirate: "---Your Emirate---",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setSubmitted(true);
  };

  const servicesData = [
    {
      title: "Bookkeeping & Accounting Services",
      image: "/images/bookkeeping-2.jpg",
      desc: "Clean books are the foundation of everything else. Our monthly bookkeeping services cover daily transaction recording, paired with regular bank reconciliation. We handle accounts payable & receivable management, deliver clear financial reporting, ensure IFRS compliance, and work directly inside Xero, Zoho & QuickBooks.",
      link: "/our-services/accounting/bookkeeping-and-accounting/",
      checklist: [
        "Daily bookkeeping",
        "Bank reconciliation",
        "Accounts Payable & Receivable Management",
        "Financial reporting",
        "IFRS compliance",
        "Xero, Zoho & QuickBooks",
      ],
    },
    {
      title: "VAT Registration & Filing UAE",
      image: "/images/vat-4.jpg",
      desc: "We handle VAT registration from day one, manage ongoing VAT return filing, and pursue VAT refunds where you're owed money back. Our team also provides VAT advisory, steps in with FTA audit support, keeps your FTA records update current, and handles penalty reconsideration.",
      link: "/our-services/vat-registration-filing/",
      checklist: [
        "VAT registration",
        "VAT return filing",
        "VAT refunds",
        "FTA audit support",
        "FTA records update",
        "Penalty reconsideration",
      ],
    },
    {
      title: "Corporate Tax UAE",
      image: "/images/tax.jpg",
      desc: "Since corporate tax became mandatory, every eligible business needs a firm that actually understands the practical side of compliance, not just the theory. We manage CT registration, handle your CT return filing on schedule, and work with you on tax planning that fits your actual business structure.",
      link: "/our-services/corporate-tax/",
      checklist: [
        "CT registration",
        "CT return filing",
        "Tax planning",
        "Transfer pricing",
        "Tax compliance",
        "FTA support",
      ],
    },
    {
      title: "Audit & Assurance Services UAE",
      image: "/images/audit-8.jpg",
      desc: "Whether a bank, investor, or free zone authority requires it, we deliver audit work that stands up to scrutiny. This includes statutory audit for annual compliance, internal audit to strengthen your controls, and free zone audit for companies licensed under DMCC, IFZA, JAFZA, and similar authorities.",
      link: "/our-services/audit-assurance/",
      checklist: [
        "Statutory audit",
        "Internal audit",
        "Free Zone audit",
        "Due diligence",
        "Compliance audit",
        "Risk assessment",
      ],
    },
    {
      title: "Payroll Services Dubai & UAE",
      image: "/images/payrol.jpg",
      desc: "Payroll mistakes cost trust with employees fast, and UAE payroll has its own specific rules. We manage WPS payroll (salary processing) to keep you compliant with the Wage Protection System, calculate EOSB calculation accurately so end-of-service settlements are never a dispute, and handle leave management.",
      link: "/our-services/payroll/",
      checklist: [
        "WPS payroll",
        "Salary processing",
        "EOSB calculation",
        "Leave management",
        "MOHRE compliance",
        "Payroll reports",
      ],
    },
    {
      title: "Virtual CFO Services UAE",
      image: "/images/calcualtion.jpg",
      desc: "Not every business is ready for a full-time CFO, but most growing businesses need that level of financial thinking. Our virtual CFO service delivers management reports that actually inform decisions, hands-on financial planning, realistic budgeting, close cash flow management so you're never caught short, and business advisory.",
      link: "/our-services/virtual-cfo/",
      checklist: [
        "Management reports",
        "Financial planning",
        "Budgeting",
        "Cash flow management",
        "KPI reporting",
        "Business advisory",
      ],
    },
  ];

  const valueProps = [
    {
      bgColor: "bg-[#FEF6E6]",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="4" width="14" height="17" rx="2" fill="#E67E22" opacity="0.2" />
          <path d="M19 4H15V3C15 2.45 14.55 2 14 2H10C9.45 2 9 2.45 9 3V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM10 4H14V5H10V4Z" fill="#D35400" />
          <rect x="8" y="11" width="8" height="2" rx="1" fill="#E67E22" />
          <rect x="8" y="15" width="5" height="2" rx="1" fill="#E67E22" />
        </svg>
      ),
      title: "Accurate Financial Records",
      desc: "Well-maintained accounting records provide the foundation for financial reporting, tax compliance and business decision-making.",
    },
    {
      bgColor: "bg-[#FEF6E6]",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#D5D8DC" />
          <path d="M14 2V8H20" stroke="#7F8C8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="8" y="12" width="8" height="2" rx="1" fill="#2980B9" />
          <rect x="8" y="16" width="6" height="2" rx="1" fill="#2980B9" />
        </svg>
      ),
      title: "Tax & Regulatory Compliance",
      desc: "Our VAT and Corporate Tax services help businesses address applicable registration, filing, reporting and compliance requirements.",
    },
    {
      bgColor: "bg-[#FEF6E6]",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect x="6" y="3" width="14" height="18" rx="3" fill="#F39C12" />
          <path d="M4 6H7M4 10H7M4 14H7M4 18H7" stroke="#D35400" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="9" y="7" width="8" height="2" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="9" y="11" width="8" height="2" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="9" y="15" width="5" height="2" rx="1" fill="#FFFFFF" opacity="0.8" />
        </svg>
      ),
      title: "Clear Financial Reporting",
      desc: "Accurate financial statements and management reports give business owners and management teams better visibility into business performance.",
    },
    {
      bgColor: "bg-[#EBF5FB]",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 5V11C4 16.55 7.4 21.74 12 23C16.6 21.74 20 16.55 20 11V5L12 2Z" fill="#3498DB" />
        </svg>
      ),
      title: "Better Financial Control",
      desc: "Reconciliations, reporting, internal audit and risk assessment help businesses identify discrepancies, strengthen controls and improve financial processes.",
    },
    {
      bgColor: "bg-[#FDEDEC]",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" fill="#EC7063" opacity="0.2" stroke="#EC7063" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" stroke="#EC7063" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="#E74C3C" />
        </svg>
      ),
      title: "Business-Focused Financial Support",
      desc: "Our Virtual CFO and business advisory services extend beyond routine accounting to support planning, budgeting, cash flow and business performance.",
    },
  ];

  const serviceBenefits = [
    {
      icon: Check,
      title: "FTA Registered Tax Agents",
      desc: "Our VAT and compliance guidance is grounded in what the Federal Tax Authority actually requires.",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      desc: "Every client gets a dedicated account manager, not a rotating cast of unfamiliar staff.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "Clear from the start, with no surprise fees added later.",
    },
    {
      icon: Clock,
      title: "Deadlines Taken Seriously",
      desc: "We understand what a missed filing actually costs you.",
    },
    {
      icon: Layers,
      title: "Fluent Across Platforms",
      desc: "Xero, Zoho, and QuickBooks — you're never forced to change systems to work with us.",
    },
    {
      icon: Check,
      title: "FTA Registered Tax Agents",
      desc: "Our VAT and compliance guidance is grounded in what the Federal Tax Authority actually requires.",
    },
  ];

  const servicesFaqs = [
    {
      q: "Can I bundle bookkeeping with VAT and Corporate Tax services?",
      a: "Yes! Bundling accounting with VAT and Corporate Tax is our most popular package because it ensures total day-one compliance without managing multiple vendors. It also offers significant cost savings.",
    },
    {
      q: "Which software do you work with?",
      a: "We work directly inside Xero, Zoho Books, QuickBooks Online, SAP, and custom ERP systems. If you don't have cloud software yet, we set it up for you for free.",
    },
    {
      q: "Are your accounting services compliant with UAE FTA regulations?",
      a: "Yes! RBO Accounting Services FZE is an FTA-registered tax agency with certified tax agents. All financial statements and tax filings are prepared strictly according to FTA guidelines and IFRS standards.",
    },
    {
      q: "Do you provide accounting services for Free Zone companies?",
      a: "Yes! We serve companies in all major UAE Free Zones including DMCC, IFZA, JAFZA, DAFZA, AFZA, RAKEZ, Shams, and Hamriyah Free Zone, ensuring compliance with both Free Zone authority regulations and federal tax laws.",
    },
    {
      q: "How quickly can RBO onboard a new business?",
      a: "Onboarding takes between 3 to 5 business days. We handle data migration, cloud accounting configuration, historical review, and initial compliance mapping with zero downtime for your operations.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between relative selection:bg-[#E8B84B] selection:text-[#09203B]">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1">

        {/* Section 1: Hero Banner + Free Consultation Form */}
        <section className="bg-[#09203B] text-white py-8 sm:py-12 lg:py-14 relative overflow-hidden border-b-4 border-[#C9A227]">
          {/* Subtle Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#E8B84B]/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left Column: Hero Text & Value Props */}
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-2 bg-[#0D1B2A]/90 text-[#E8B84B] font-bold text-xs px-3.5 py-1 rounded-full border border-[#E8B84B]/40 shadow-md backdrop-blur-md">
                  🏢 OUR SERVICES
                </span>

                <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-serif font-extrabold text-white tracking-tight leading-[1.2]">
                  Accounting, Tax &amp; Audit <span className="text-[#E8B84B]">Services</span> in UAE
                </h1>

                <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed font-light opacity-95 max-w-2xl">
                  RBO Accounting Services FZE provides professional accounting, bookkeeping, VAT, corporate tax, audit, and payroll services for businesses across the UAE. We combine technical accuracy with practical business advice so you stay compliant, avoid penalties, and keep complete control over your finances.
                </p>

                {/* Hero Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <a
                    href="#form"
                    className="bg-[#E8B84B] hover:bg-[#F4CA68] text-[#09203B] font-extrabold text-xs sm:text-sm py-3 px-5 rounded-lg shadow-lg transition-all flex items-center justify-center gap-1.5 transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                  >
                    <span>Book a Free Consultation &rarr;</span>
                  </a>

                  <a
                    href="https://wa.me/971508051857"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/60 bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0"
                  >
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#90CDF4"
                        d="M20 12c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 1.61.55 3.09 1.48 4.28L6.5 19.5l3.35-.97C10.74 18.82 11.84 19 13 19c3.87 0 7-3.13 7-7z"
                      />
                      <circle cx="10.2" cy="12" r="1.1" fill="#09203B" />
                      <circle cx="13" cy="12" r="1.1" fill="#09203B" />
                      <circle cx="15.8" cy="12" r="1.1" fill="#09203B" />
                    </svg>
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* Trust Checklist */}
                <div className="flex flex-wrap items-center gap-3.5 pt-3 text-xs font-semibold text-gray-200 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E8B84B] stroke-[3] shrink-0" />
                    <span>Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E8B84B] stroke-[3] shrink-0" />
                    <span>7 Emirates Covered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E8B84B] stroke-[3] shrink-0" />
                    <span>100% FTA Compliant Solutions</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Consultation Card matching live site */}
              <div className="lg:col-span-5" id="form">
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl max-w-[390px] mx-auto lg:ml-auto text-[#09203B]">
                  <div className="text-left mb-4">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#09203B] mb-1 leading-snug">
                      Get a Free Consultation
                    </h3>
                    <p className="text-xs text-gray-600 font-normal">
                      Our expert will reply within 10 minutes
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-6 text-center space-y-3">
                      <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                        <Check className="w-7 h-7" />
                      </div>
                      <h4 className="text-lg font-bold text-[#09203B]">Thank You!</h4>
                      <p className="text-xs text-gray-600">
                        Your request has been received. Our expert will reply within 10 minutes.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-[#D49D28] underline font-semibold"
                      >
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#09203B] placeholder-gray-500 focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone / WhatsApp"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#09203B] placeholder-gray-500 focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#09203B] placeholder-gray-500 focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#09203B] focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                        >
                          <option value="---Select Service---">Select Service</option>
                          <option value="Bookkeeping & Accounting">Bookkeeping & Accounting</option>
                          <option value="VAT Registration / Filing">VAT Registration / Filing</option>
                          <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                          <option value="Audit Services">Audit Services</option>
                          <option value="Payroll Services">Payroll Services</option>
                          <option value="Virtual CFO">Virtual CFO</option>
                          <option value="AML Compliance">AML Compliance</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <select
                          value={formData.emirate}
                          onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#09203B] focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                        >
                          <option value="---Your Emirate---">Your Emirate</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Abu Dhabi">Abu Dhabi</option>
                          <option value="Sharjah">Sharjah</option>
                          <option value="Ajman">Ajman</option>
                          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                          <option value="Fujairah">Fujairah</option>
                          <option value="Umm Al Quwain">Umm Al Quwain</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#D49D28] hover:bg-[#C28C1B] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                      >
                        Request Free Consultation &rarr;
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-600 pt-1 font-medium text-center">
                        <Lock className="w-3 h-3 text-[#D49D28] shrink-0" />
                        <span>Your information is 100% secure and confidential</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Keeping Your Books Accurate & Up to Date */}
        <section className="py-12 sm:py-16 bg-[#FAF7F2] text-[#09203B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* Left Column: Description */}
              <div className="lg:col-span-6 space-y-3">
                <span className="text-[#C9A227] font-bold text-xs uppercase tracking-widest block mb-1">
                  ABOUT OUR SERVICES
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#09203B] leading-tight">
                  Keeping Your Books Accurate and Up to Date
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  At RBO Accounting, we offer a complete range of accounting and financial services — from day-to-day bookkeeping to corporate tax planning and statutory audits across the UAE. We combine technical accuracy with practical business advice so you stay compliant, avoid FTA penalties, and keep complete control over your finances.
                </p>
              </div>

              {/* Right Column: RBO Office Laptop Photograph */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-lg mx-auto lg:ml-auto">
                  <img
                    src="/images/rbo-office-accounting-laptop.png"
                    alt="Keeping Your Books Accurate - RBO Accounting Services FZE"
                    className="w-full h-auto object-cover rounded-2xl block"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Everything Your Business Needs Under One Roof (6 Main Services Grid) */}
        <section className="py-16 sm:py-24 bg-white text-[#09203B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#C9A227] font-bold text-xs uppercase tracking-widest block mb-2">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#09203B] mb-4">
                Everything Your Business Needs Under One Roof
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Most accounting firms in UAE specialize in one or two areas and refer you elsewhere for the rest. We built our service range specifically so you don&apos;t have to manage three different vendors for accounting, tax, and compliance.
              </p>
            </div>

            {/* 6 Feature Cards Grid matching live site */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {servicesData.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(9,32,59,0.06)] hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Image Banner */}
                    <div className="h-48 w-full overflow-hidden relative border-b border-gray-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="font-serif font-bold text-xl text-[#09203B] mb-3 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                        {service.desc}
                      </p>

                      {/* Checklist Bullets */}
                      <ul className="space-y-2 mb-6">
                        {service.checklist.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#09203B] font-medium">
                            <Check className="w-4 h-4 text-[#C9A227] stroke-[3] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-6 pb-6 pt-0">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#B8911F] font-bold text-sm transition-colors group"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: One Accounting Partner, Every Financial Requirement (5 Value Cards) */}
        {/* Section 4: One Accounting Partner, Every Financial Requirement */}
        <section className="py-16 sm:py-24 bg-[#FAF7F2] text-[#09203B]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-extrabold text-[#09203B] mb-5 tracking-tight leading-tight">
                One Accounting Partner, Every Financial Requirement
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal opacity-90 max-w-3xl mx-auto">
                RBO brings together accounting, tax, audit, payroll and financial advisory services to provide businesses with a more connected approach to financial management. Instead of managing bookkeeping, VAT, Corporate Tax, audit and financial reporting requirements through disconnected providers, businesses can access a broader range of professional services through one accounting partner.
              </p>
            </div>

            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {valueProps.slice(0, 3).map((prop, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[20px] p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/80 hover:shadow-md transition-all text-left flex flex-col justify-start"
                >
                  <div className={`w-12 h-12 ${prop.bgColor} rounded-xl flex items-center justify-center mb-6 shrink-0`}>
                    {prop.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#09203B] mb-3 leading-snug">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {prop.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 Cards aligned to outer edges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueProps.slice(3, 5).map((prop, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[20px] p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/80 hover:shadow-md transition-all text-left flex flex-col justify-start"
                >
                  <div className={`w-12 h-12 ${prop.bgColor} rounded-xl flex items-center justify-center mb-6 shrink-0`}>
                    {prop.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#09203B] mb-3 leading-snug">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {prop.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 5: Locations We Serve / Supporting Businesses Across Every Emirate */}
        <section className="py-16 sm:py-24 bg-white text-[#09203B]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#C9A227] font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
                Locations We Serve
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-extrabold text-[#09203B] mb-3 tracking-tight">
                Supporting Businesses Across Every Emirate
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal opacity-90 max-w-2xl mx-auto">
                RBO Accounting Services FZE supports businesses across major UAE business locations, including:
              </p>
            </div>

            <EmiratesCoverageMap />
          </div>
        </section>

        {/* Section 6: Why Businesses Choose RBO Accounting Services FZE */}
        <section className="py-16 sm:py-24 bg-white text-[#09203B]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[#C9A227] font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
                Why RBO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-extrabold text-[#09203B] leading-tight">
                Why Businesses Choose RBO Accounting Services FZE
              </h2>
            </div>

            {/* 2 Column Benefit Cards Grid matching screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceBenefits.map((benefit, idx) => {
                const IconComp = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex items-start gap-4 text-left"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#09203B] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <IconComp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#09203B] mb-1.5 leading-snug">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 7: Frequently Asked Questions */}
        <section id="faq" className="py-16 sm:py-24 bg-white text-[#09203B]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#C9A227] font-bold text-xs uppercase tracking-widest block mb-2">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#09203B] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Got questions about our services, software, or onboarding process? Here are answers to common questions.
              </p>
            </div>

            {/* Accordion FAQ List */}
            <div className="space-y-3">
              {servicesFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl shadow-xs transition-shadow duration-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className={`w-full text-left py-4 px-6 flex justify-between items-center gap-4 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#102033] text-[#E8B84B] rounded-t-xl"
                          : "bg-[#102033] text-white hover:bg-[#162A42] rounded-xl"
                      }`}
                    >
                      <span className="font-serif font-semibold text-sm sm:text-base leading-snug">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        {isOpen ? (
                          <ChevronsUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronsDown className="w-5 h-5 text-[#E8B84B]" />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="bg-[#FAF7F2] border border-[#102033]/15 p-6 rounded-b-xl text-gray-700 text-xs sm:text-sm leading-relaxed">
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

        {/* Section 8: Compliance CTA Banner */}
        <CTASection />

      </div>

      {/* Footer & Floating WhatsApp Widget */}
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
