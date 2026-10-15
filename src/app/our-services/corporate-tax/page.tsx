"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import {
  Check, ArrowRight, Lock, MapPin,
  ChevronDown, ChevronsDown, ChevronsUp,
  Briefcase, BarChart, Cloud,
  ShieldCheck, HelpCircle, Users, CheckCircle2,
  Banknote, NotepadText, TrendingUp, MessageSquare, DollarSign, Clock, Server, FileText, Scale
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CorporateTaxPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Corporate Tax UAE",
    emirate: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Corporate Tax in the UAE?",
      a: "Corporate Tax is a federal tax on the taxable income of corporations and other businesses under the UAE Corporate Tax framework. It applies to financial years beginning on or after 1 June 2023."
    },
    {
      q: "Do UAE companies need to register for Corporate Tax?",
      a: "Taxable persons are generally required to register with the Federal Tax Authority and obtain a Corporate Tax Registration Number, with specific requirements depending on the entity and applicable rules."
    },
    {
      q: "What is the UAE Corporate Tax rate?",
      a: "The standard structure is 0% on taxable income up to AED 375,000 and 9% above that, subject to applicable rules and special regimes."
    },
    {
      q: "When is the Corporate Tax return due?",
      a: "The Ministry of Finance states that taxable persons generally need to file within 9 months from the end of the relevant Tax Period."
    },
    {
      q: "Do free zone companies need to register for Corporate Tax?",
      a: "Yes — free zone juridical persons fall within the Corporate Tax framework and need to comply with applicable requirements, though specific treatment can depend on whether the business qualifies for relevant provisions."
    },
    {
      q: "Can RBO help with Corporate Tax registration?",
      a: "Yes. We support the registration process, including preparing the required information and handling the EmaraTax registration."
    },
    {
      q: "Does RBO provide Corporate Tax return filing?",
      a: "Yes. We can review your financial information, prepare your Corporate Tax calculations, and support the filing of your return."
    },
    {
      q: "Does RBO provide Corporate Tax planning?",
      a: "Yes. We offer planning and advisory support based on your business’s structure, activities, and applicable UAE tax requirements."
    },
    {
      q: "Does RBO provide transfer pricing services?",
      a: "Yes. We can support businesses with applicable related-party transaction requirements."
    },
    {
      q: "Does RBO provide Corporate Tax services across the UAE?",
      a: "Yes. We support businesses in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Our Corporate Tax specialist will contact you within 10 minutes.");
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
                  Corporate Tax <span className="text-[#E8B84B]">in the UAE</span>
                </h1>

                <div className="text-gray-300 text-sm sm:text-[14.5px] leading-relaxed mb-8 max-w-2xl font-sans space-y-4">
                  <p>
                    Corporate Tax is still relatively new territory for a lot of UAE businesses, and getting it right matters. RBO Accounting Services FZE provides professional Corporate Tax services to help you understand your obligations, complete registration, prepare and file your returns, keep your financial records in order, and stay compliant going forward.
                  </p>
                  <p>
                    Our Corporate Tax support covers startups, SMEs, mainland companies, free zone businesses, and other taxable persons across the UAE. From your first registration through return filing, tax planning, and transfer pricing, we tailor our assistance to how your business is actually structured.
                  </p>
                  <p className="text-gray-200 font-medium pt-1">
                    Need help with UAE Corporate Tax? Contact RBO Accounting Services FZE for a Corporate Tax consultation.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <a
                    href="#consultation-form"
                    className="px-6 py-3 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-sm shadow-md transition-all duration-150 inline-flex items-center gap-1.5"
                  >
                    <span>Book a Free Consultation &rarr;</span>
                  </a>

                  <a
                    href="https://wa.me/971508051857?text=Hello%20RBO%20Accounting,%20I%20need%20Corporate%20Tax%20Help"
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
                        <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping &amp; Accounting</option>
                        <option value="VAT Registration / Filing">VAT Registration / Filing</option>
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
            SECTION 1: Professional Corporate Tax Services in the UAE
            Layout: Text Left (7 cols), Image Right (5 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Text Left */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Professional Corporate Tax Services in the UAE
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  <p>
                    The UAE Corporate Tax regime applies to financial years beginning on or after 1 June 2023. It&apos;s calculated on taxable income, and it comes with its own set of registration, record-keeping, filing, and payment obligations that businesses need to stay on top of.
                  </p>
                  <p>
                    RBO offers a structured range of Corporate Tax services to help UAE businesses manage all of this:
                  </p>
                </div>

                <div className="mb-2">
                  <h3 className="font-sans font-semibold text-gray-900 text-sm sm:text-[15px] mb-3">
                    Our services include:
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                    {[
                      "Corporate Tax registration",
                      "Corporate Tax return filing",
                      "Corporate Tax planning",
                      "Tax compliance support",
                      "Taxable income assessment",
                      "Financial record review",
                      "Transfer pricing support",
                      "Corporate Tax advisory",
                      "FTA-related support"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Right */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Financial-Reporting-Actually-Involves.webp"
                    alt="Professional Corporate Tax Services in the UAE"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Corporate Tax Registration in the UAE
            Layout: Image Left (5 cols), Text Right (7 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#f8f6f1] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Image Left */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/BookkeepingandAccounting.jpeg"
                    alt="Corporate Tax Registration in the UAE"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Corporate Tax Registration in the UAE
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  <p>
                    If your business is subject to UAE Corporate Tax, you&apos;re required to register with the Federal Tax Authority and get a Corporate Tax Registration Number.
                  </p>
                  <p>
                    Registration currently runs through the FTA&apos;s EmaraTax platform, and the documentation required depends on the type of taxable person you are.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-sans font-semibold text-gray-900 text-sm sm:text-[15px] mb-3">
                    RBO can help with:
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                    {[
                      "Corporate Tax registration assessment",
                      "Document preparation",
                      "Taxable person information",
                      "EmaraTax registration support",
                      "Corporate Tax Registration Number application",
                      "Registration information review",
                      "FTA registration-related queries"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm sm:text-[14px] font-sans mt-3">
                    Corporate Tax registration amendments
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/our-services/corporate-tax/registration/"
                    className="px-6 py-2.5 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 inline-flex items-center gap-1.5"
                  >
                    <span>Explore Corporate Tax Registration UAE</span>
                  </Link>

                  <p className="text-gray-500 text-xs sm:text-[13px] font-sans mt-4">
                    For the official registration process, you can also refer to the Federal Tax Authority&apos;s Corporate Tax Registration service.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Corporate Tax Return Filing in the UAE
            Layout: Clean White Section with structured list and button
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
              Corporate Tax Return Filing in the UAE
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
              <p>
                Your Corporate Tax return needs to be built from your relevant financial and tax information and submitted within the applicable deadline.
              </p>
              <p>
                The Ministry of Finance states that taxable persons generally need to file their return within 9 months from the end of the relevant Tax Period, with Corporate Tax payment generally due by the same deadline.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-semibold text-gray-900 text-sm sm:text-[15px] mb-3">
                Our return filing support can include:
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                {[
                  "Financial statement review",
                  "Taxable income calculation",
                  "Tax adjustments",
                  "Deductible and non-deductible expense review",
                  "Corporate Tax workings",
                  "Return preparation",
                  "Return filing support",
                  "Corporate Tax payment coordination"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm sm:text-[14px] font-sans mt-3">
                Supporting documentation
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/our-services/corporate-tax/return-filing/"
                className="px-6 py-2.5 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 inline-flex items-center gap-1.5"
              >
                <span>Explore Corporate Tax Return Filing UAE</span>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Corporate Tax Planning in the UAE
            Layout: Warm Gray Cream Background with structured list and button
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#f8f6f1] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
              Corporate Tax Planning in the UAE
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
              <p>
                Good Corporate Tax planning comes down to understanding how the UAE rules apply to your specific business and shaping your financial and operational decisions around that.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-semibold text-gray-900 text-sm sm:text-[15px] mb-3">
                RBO provides planning and advisory support covering:
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                {[
                  "Taxable income assessment",
                  "Business structure considerations",
                  "Deductible expense review",
                  "Tax-efficient business planning",
                  "Related-party transactions",
                  "Tax period considerations",
                  "Compliance planning",
                  "Financial record requirements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mt-5">
                Our focus is on helping you actually understand your Corporate Tax position, so you can make informed decisions within the applicable UAE tax framework &mdash; not just react to it.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/our-services/corporate-tax/corporate-tax-planning/"
                className="px-6 py-2.5 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 inline-flex items-center gap-1.5"
              >
                <span>Explore Corporate Tax Planning UAE</span>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: Corporate Tax for Mainland Businesses
            Layout: Text Left (7 cols), Image Right (5 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Text Left */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Corporate Tax for Mainland Businesses
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  <p>
                    Mainland companies may have their own registration, filing, and record-keeping requirements depending on their status and activities.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-sans font-semibold text-gray-900 text-sm sm:text-[15px] mb-3">
                    RBO can help mainland businesses with:
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                    {[
                      "Corporate Tax registration",
                      "Tax return preparation",
                      "Financial record review",
                      "Taxable income calculations",
                      "Corporate Tax compliance",
                      "Ongoing accounting and tax support"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mt-5">
                    Accurate accounting matters here more than people often expect, since Corporate Taxable Income generally starts from your accounting income before any tax adjustments are applied.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/our-services/accounting/"
                    className="px-6 py-2.5 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 inline-flex items-center gap-1.5"
                  >
                    <span>Explore Accounting Services in UAE</span>
                  </Link>
                </div>
              </div>

              {/* Image Right */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Financial-Reporting-Actually-Involves.webp"
                    alt="Corporate Tax for Mainland Businesses"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: Corporate Tax for Free Zone Businesses
            Layout: Image Left (5 cols), Text Right (7 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#f8f6f1] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Image Left */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Accounts-Payable-and-Receivable-Actually-Mean-e1786293062900.webp"
                    alt="Corporate Tax for Free Zone Businesses"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Corporate Tax for Free Zone Businesses
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  <p>
                    Free zone businesses fall within the UAE Corporate Tax framework too, though specific rules can apply depending on your status and whether you qualify for particular treatment under the legislation. The Ministry of Finance confirms that juridical persons established in UAE Free Zones are within the scope of Corporate Tax and must meet the applicable requirements.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-sans font-semibold text-gray-900 text-sm sm:text-[15px] mb-3">
                    RBO can help free zone businesses with:
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                    {[
                      "Corporate Tax registration",
                      "Tax status assessment",
                      "Corporate Tax return filing",
                      "Financial record review",
                      "Compliance support",
                      "Tax planning",
                      "Transfer pricing considerations"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mt-5">
                    Contact RBO to discuss your free zone Corporate Tax requirements.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: Corporate Tax & Accounting Records
            Layout: Text Left (7 cols), Image Right (5 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Text Left */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Corporate Tax &amp; Accounting Records
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  <p>
                    Corporate Tax compliance and accounting go hand in hand. The Ministry of Finance explains that accounting income &mdash; based on your financial statements &mdash; is the starting point for taxable income, with adjustments applied from there. That means the reliability of your financial records really matters, covering things like:
                  </p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                    {[
                      "Revenue",
                      "Expenses",
                      "Assets",
                      "Liabilities",
                      "Related-party transactions",
                      "Financial statements",
                      "Supporting documentation"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mt-5">
                    RBO offers integrated accounting and Corporate Tax services, so your financial records and your tax compliance are working together, not separately.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/our-services/accounting/bookkeeping-and-accounting/"
                    className="px-6 py-2.5 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 inline-flex items-center gap-1.5"
                  >
                    <span>Explore Bookkeeping &amp; Accounting Services</span>
                  </Link>
                </div>
              </div>

              {/* Image Right */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Financial-Reporting-Actually-Involves.webp"
                    alt="Corporate Tax & Accounting Records"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: Transfer Pricing Services in the UAE
            Layout: Image Left (5 cols), Text Right (7 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#f8f6f1] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Image Left */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Accounts-Payable-and-Receivable-Actually-Mean-e1786293062900.webp"
                    alt="Transfer Pricing Services in the UAE"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Transfer Pricing Services in the UAE
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  <p>
                    If your business has related-party transactions, the UAE&apos;s transfer pricing requirements may come into play.
                  </p>
                  <p>
                    RBO provides transfer pricing support to help review those transactions and prepare the documentation needed to meet applicable requirements, including:
                  </p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                    {[
                      "Related-party transaction review",
                      "Transfer pricing assessment",
                      "Documentation support",
                      "Transaction analysis",
                      "Tax compliance considerations"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 text-sm sm:text-[14px] font-sans mt-3">
                    Coordination with accounting and financial records
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/our-services/corporate-tax/transfer-pricing/"
                    className="px-6 py-2.5 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 inline-flex items-center gap-1.5"
                  >
                    <span>Explore Transfer Pricing Services UAE</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: Corporate Tax Compliance Services
            Layout: Text Left (7 cols), Image Right (5 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Text Left */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Corporate Tax Compliance Services
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  <p>
                    Corporate Tax compliance is a lot more than filing one return a year. It usually involves managing:
                  </p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                    {[
                      "Corporate Tax registration",
                      "Accurate accounting records",
                      "Taxable income calculations",
                      "Tax adjustments",
                      "Supporting documentation",
                      "Return filing",
                      "Corporate Tax payment",
                      "Transfer pricing requirements where applicable",
                      "Record retention"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mt-5">
                    RBO helps you build an organized approach to all of it, with ongoing accounting and tax support along the way.
                  </p>
                </div>
              </div>

              {/* Image Right */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Financial-Reporting-Actually-Involves.webp"
                    alt="Corporate Tax Compliance Services"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: Corporate Tax Services for Businesses Across the UAE
            Layout: Centered / Clean Boxed Card
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#f8f6f1] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
              Corporate Tax Services for Businesses Across the UAE
            </h2>

            <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-5">
              RBO provides Corporate Tax and accounting support to businesses throughout the UAE, including:
            </p>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-gray-700 text-sm sm:text-[14.5px] font-sans font-medium mb-6">
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
                  <span className="text-[#c8962e] font-bold text-base">•</span>
                  <span>{emirate}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-sm sm:text-[14px] font-sans mb-6">
              Visit our Areas We Serve page to find location-specific accounting and tax services.
            </p>

            <Link
              href="/areas-we-serve/"
              className="px-6 py-2.5 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 inline-flex items-center gap-1.5"
            >
              <span>Explore Areas We Serve &rarr;</span>
            </Link>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: Who Needs Corporate Tax Registration in the UAE?
            Layout: Text Left (7 cols), Image Right (5 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Text Left */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Who Needs Corporate Tax Registration in the UAE?
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  <p>
                    Whether you need to register depends on your legal status, activities, income, and any applicable exemptions or special provisions. Businesses worth checking their position include:
                  </p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-[14px] font-sans">
                    {[
                      "UAE mainland companies",
                      "Free zone companies",
                      "UAE-incorporated juridical persons",
                      "Businesses managed and controlled in the UAE",
                      "Foreign entities with a UAE Permanent Establishment",
                      "Natural persons conducting business activities in the UAE where the applicable revenue threshold is exceeded"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mt-5">
                    The Ministry of Finance and FTA set out the official rules on which persons are subject to Corporate Tax.
                  </p>
                </div>
              </div>

              {/* Image Right */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Is-Corporate-Tax-Registration-in-the-UAE-Who-Must-Register.webp"
                    alt="Who Needs Corporate Tax Registration in the UAE?"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 12: UAE Corporate Tax Rate
            Layout: Image Left (5 cols), Text Right (7 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#f8f6f1] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Image Left */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/Do-RBO-Accounting-Services-FZE-manage-corporate-tax-registration-in-the-UAE-for-mainland-companies.webp"
                    alt="UAE Corporate Tax Rate"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  UAE Corporate Tax Rate
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  <p>
                    The general structure currently looks like this:
                  </p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2.5 text-gray-700 text-sm sm:text-[14.5px] font-sans font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                      <span><strong>0%</strong> on taxable income up to AED 375,000</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#c8962e] font-bold text-base leading-none mt-0.5">•</span>
                      <span><strong>9%</strong> on taxable income above AED 375,000</span>
                    </li>
                  </ul>

                  <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mt-5">
                    Different rules can apply to certain entities, including qualifying businesses and large multinational groups subject to applicable international tax rules. Worth noting: it&apos;s best to assess your own circumstances rather than assume the standard rate applies to every entity or every type of income.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 13: Our Corporate Tax Process
            Layout: Text Left (7 cols), Image Right (5 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Text Left */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Our Corporate Tax Process
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14px] leading-relaxed font-sans">
                  <div className="flex items-start gap-3">
                    <span className="text-[#c8962e] font-bold text-lg leading-none mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Understand Your Business</strong> &mdash; We review your business structure, activities, financial year, and current Corporate Tax position.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#c8962e] font-bold text-lg leading-none mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Assess Your Corporate Tax Obligations</strong> &mdash; We identify the relevant registration, filing, and compliance requirements based on the applicable rules.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#c8962e] font-bold text-lg leading-none mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Organize Financial Information</strong> &mdash; Your accounting records and relevant financial information are reviewed to support Corporate Tax calculations.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#c8962e] font-bold text-lg leading-none mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Corporate Tax Registration</strong> &mdash; Where applicable, we assist with registration through the FTA&apos;s EmaraTax platform.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#c8962e] font-bold text-lg leading-none mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Calculate Taxable Income</strong> &mdash; Your financial information is reviewed and the applicable tax adjustments are considered.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#c8962e] font-bold text-lg leading-none mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Prepare the Corporate Tax Return</strong> &mdash; The relevant information and calculations are organized for return preparation.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#c8962e] font-bold text-lg leading-none mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Filing &amp; Ongoing Compliance</strong> &mdash; Your return is filed within the applicable deadline, and you can continue receiving support for future tax periods.
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Right */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Financial-Reporting-Actually-Involves.webp"
                    alt="Our Corporate Tax Process"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 14: Why Choose RBO for Corporate Tax Services?
            Layout: Image Left (5 cols), Text Right (7 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#f8f6f1] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Image Left */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/Do-RBO-Accounting-Services-FZE-manage-corporate-tax-registration-in-the-UAE-for-mainland-companies.webp"
                    alt="Why Choose RBO for Corporate Tax Services?"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Why Choose RBO for Corporate Tax Services?
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  Corporate Tax requires accounting, financial records, and tax compliance to work together &mdash; which is exactly where RBO fits in:
                </p>

                <div className="space-y-4 text-gray-600 text-sm sm:text-[14px] leading-relaxed font-sans">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Integrated Accounting &amp; Tax Support
                    </h3>
                    <p>
                      Your accounting records and Corporate Tax requirements are managed through connected financial processes, not siloed apart.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Practical Tax Guidance
                    </h3>
                    <p>
                      We explain Corporate Tax requirements in plain, practical business terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Compliance-Focused Approach
                    </h3>
                    <p>
                      We help you get your registration, filing, and supporting documentation properly organized.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Support for Mainland &amp; Free Zone Businesses
                    </h3>
                    <p>
                      Our services are built to work across different UAE business structures.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Ongoing Financial Support
                    </h3>
                    <p>
                      Beyond Corporate Tax, you can also access bookkeeping, financial reporting, VAT, and other accounting services from RBO.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 15: Corporate Tax vs. VAT
            Layout: Text Left (7 cols), Image Right (5 cols)
            ========================================================================= */}
        <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Text Left */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.25] mb-5">
                  Corporate Tax vs. VAT
                </h2>

                <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-sans mb-6">
                  It&apos;s easy to conflate the two, but they&apos;re separate UAE tax obligations:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Corporate Tax Block */}
                  <div className="bg-[#f8f6f1] p-5 rounded-xl border border-gray-200/70">
                    <h3 className="font-serif font-bold text-gray-900 text-base mb-3">
                      Corporate Tax
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-xs sm:text-[13px] font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Tax on taxable income/profits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Generally assessed for each Tax Period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Registration applies according to applicable rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Return is filed with the FTA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Based on taxable income after applicable adjustments</span>
                      </li>
                    </ul>
                  </div>

                  {/* VAT Block */}
                  <div className="bg-[#f8f6f1] p-5 rounded-xl border border-gray-200/70">
                    <h3 className="font-serif font-bold text-gray-900 text-base mb-3">
                      VAT
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-xs sm:text-[13px] font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Tax on applicable taxable supplies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Filed according to the assigned VAT tax period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Registration depends on applicable VAT requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Return is filed with the FTA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c8962e] font-bold">•</span>
                        <span>Based on output and recoverable input VAT</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed font-sans mb-6">
                  RBO provides both Corporate Tax Services and VAT Registration &amp; Filing Services for businesses that want integrated tax support.
                </p>

                <div className="pt-1">
                  <Link
                    href="/our-services/vat-registration-filing/"
                    className="px-6 py-2.5 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 inline-flex items-center gap-1.5"
                  >
                    <span>Explore VAT Registration &amp; Filing UAE</span>
                  </Link>
                </div>
              </div>

              {/* Image Right */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
                  <img
                    src="/wp-content/uploads/2026/08/What-Financial-Reporting-Actually-Involves.webp"
                    alt="Corporate Tax vs. VAT"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 16: Frequently Asked Questions Accordion
            Layout: 10 FAQs in dark navy container
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-white text-gray-900 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left Aligned Section Header */}
            <div className="text-left mb-8 sm:mb-9">
              <span className="text-[#c4923e] uppercase tracking-wider font-bold text-xs block mb-2.5">
                COMMON QUESTIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203B] tracking-tight mb-2.5">
                Frequently Asked Questions
              </h2>
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

        {/* =========================================================================
            SECTION 17: Need Help With Corporate Tax in the UAE?
            Layout: Dark Navy Hero-style Banner with 2 CTA buttons
            ========================================================================= */}
        <section className="relative py-16 md:py-20 bg-[#09203b] text-white text-center overflow-hidden">
          {/* Subtle Background Pattern / Overlay */}
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: "url('/wp-content/uploads/2026/09/dubai-skyline-hero-bg.jpg')" }}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Need Help With Corporate Tax in the UAE?
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-sans">
              Whether you need to register for Corporate Tax, prepare your first return, review your taxable income, plan ahead for future obligations, or get a handle on transfer pricing, RBO Accounting Services FZE is here to help. Speak with RBO about your Corporate Tax requirements today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#consultation-form"
                className="px-7 py-3 rounded-md bg-[#c8962e] hover:bg-[#b28221] text-white font-medium text-sm shadow-md transition-all duration-150 inline-flex items-center gap-1.5"
              >
                <span>Get a Consultation</span>
              </a>

              <a
                href="https://wa.me/971508051857?text=Hello%20RBO%20Accounting,%20I%20need%20Corporate%20Tax%20Help"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-md border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all duration-150 inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 18: Forming a New UAE Entity? Secure Day-One Corporate Tax Compliance
            Layout: Highlight Banner with 3 Action Pills
            ========================================================================= */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#fffdf8] border border-[#f3d994] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-xl">📁</span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                  Forming a New UAE Entity? Secure Day-One Corporate Tax Compliance
                </h3>
              </div>

              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-sans mb-6">
                Under FTA Decision No. 3 of 2024, newly incorporated companies must complete Corporate Tax registration within strict timelines (typically 3 months from trade licence issuance) or face an immediate AED 10,000 penalty. When you establish your enterprise through RBO, company formation is seamlessly bundled with day-one tax compliance, compliant opening balance sheets, and{" "}
                <Link
                  href="/uae-corporate-tax-small-business-relief-guide-2026/"
                  className="text-[#c8962e] font-semibold underline hover:text-[#b28221]"
                >
                  Small Business Relief (0% Tax) Structuring
                </Link>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/business-setup/"
                  className="px-5 py-2.5 rounded-lg bg-[#09203b] hover:bg-[#112d4e] text-white text-xs sm:text-[13px] font-semibold transition-all inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>🚀 Explore Business Setup Hub &rarr;</span>
                </Link>

                <Link
                  href="/business-setup/packages/"
                  className="px-5 py-2.5 rounded-lg bg-white border border-gray-300 hover:border-[#c8962e] text-gray-800 text-xs sm:text-[13px] font-semibold transition-all inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>📦 All-Inclusive Setup Packages</span>
                </Link>

                <Link
                  href="/business-setup/mainland-vs-free-zone/"
                  className="px-5 py-2.5 rounded-lg bg-white border border-gray-300 hover:border-[#c8962e] text-gray-800 text-xs sm:text-[13px] font-semibold transition-all inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>⚖️ Mainland vs Free Zone Guide</span>
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
