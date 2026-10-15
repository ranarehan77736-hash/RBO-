"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Check, ArrowRight, Lock, MapPin,
  ChevronDown, Building, Building2, Store, Users,
  Globe, ShieldCheck, FileText, Clock, AlertTriangle,
  FileCheck2, ShieldAlert, Award, HelpCircle, Phone, CheckCircle2,
  Calendar, Briefcase, FileSpreadsheet, ExternalLink, Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CorporateTaxRegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Corporate Tax UAE",
    emirate: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Our Corporate Tax specialist will contact you within 10 minutes.");
  };

  const servicesOffered = [
    {
      icon: "📒",
      title: "Corporate Tax Registration for Mainland Companies",
      desc: "Mainland businesses licensed through any emirate's Department of Economic Development register as resident juridical persons under UAE Corporate Tax Law."
    },
    {
      icon: "🏦",
      title: "Corporate Tax Registration for Free Zone Companies",
      desc: "Free zone entities register too, even where a 0% qualifying income rate might eventually apply — registration itself is a separate, mandatory step from tax rate eligibility."
    },
    {
      icon: "🔄",
      title: "Corporate Tax Registration for Branch Offices",
      desc: "Branches of foreign or domestic companies operating in the UAE need their own registration tied to their specific business activity."
    },
    {
      icon: "📊",
      title: "Corporate Tax Registration for Sole Establishments",
      desc: "Sole establishment owners register as natural persons or juridical entities depending on turnover and business structure."
    },
    {
      icon: "🌐",
      title: "Corporate Tax Registration for SMEs & Startups",
      desc: "Smaller businesses often assume registration doesn't apply to them yet — in most cases it does, regardless of current profitability."
    },
    {
      icon: "🧾",
      title: "Corporate Tax Registration for Foreign-Owned Businesses",
      desc: "Foreign-owned UAE entities follow the same registration requirements as locally owned companies, with additional attention to non-resident person rules where relevant."
    }
  ];

  const whoNeedsCT = [
    {
      title: "Resident Juridical Persons",
      desc: "Companies incorporated or effectively managed in the UAE fall under this category and generally must register."
    },
    {
      title: "Natural Persons",
      desc: "Individuals conducting business activity in the UAE above the relevant turnover threshold may also need to register."
    },
    {
      title: "Non-Resident Persons",
      desc: "Foreign entities with a permanent establishment or UAE-sourced income may have registration obligations too."
    },
    {
      title: "Free Zone Persons",
      desc: "Free zone companies register regardless of whether they expect to qualify for preferential tax treatment."
    },
    {
      title: "Branches of Foreign Companies",
      desc: "Branches are treated based on their specific activity and legal connection to the parent entity."
    },
    {
      title: "Government & Exempt Entities",
      desc: "Certain government bodies and public benefit entities may be excluded, but this needs case-by-case confirmation."
    }
  ];

  const emarataxSteps = [
    {
      step: 1,
      title: "Create or Access Your EmaraTax Account",
      desc: "Registration starts by creating an EmaraTax account or logging into an existing one linked to your business."
    },
    {
      step: 2,
      title: "Complete the Corporate Tax Profile",
      desc: "You'll need to enter your legal structure, business activity, and ownership details accurately."
    },
    {
      step: 3,
      title: "Upload Required Documents",
      desc: "Supporting documents get uploaded directly through the portal for FTA review."
    },
    {
      step: 4,
      title: "Submit Your Application",
      desc: "Once complete, the application goes to the FTA for processing."
    },
    {
      step: 5,
      title: "Receive Your Tax Registration Number (TRN)",
      desc: "After approval, the FTA issues your TRN, confirming your business is officially registered."
    }
  ];

  const industriesList = [
    "Trading companies",
    "Professional services",
    "Manufacturing",
    "Healthcare",
    "Real estate",
    "Construction",
    "Logistics",
    "E-Commerce",
    "Hospitality",
    "Technology",
    "Financial services"
  ];

  const faqs = [
    {
      q: "Who must register for Corporate Tax in the UAE?",
      a: "Most resident juridical persons, certain non-resident persons with a UAE permanent establishment, and applicable natural persons conducting business must register."
    },
    {
      q: "What is the CT registration deadline?",
      a: "Deadlines depend on your license issuance date and business category, and FTA timelines have been updated before — confirm your specific deadline directly with our team or the FTA."
    },
    {
      q: "How do I register through EmaraTax?",
      a: "Registration happens through the EmaraTax portal, where you create a profile, submit documents, and wait for FTA approval — or we can manage the entire process for you."
    },
    {
      q: "What documents are required?",
      a: "Typically your trade license, Emirates ID, passport copy, MOA, Certificate of Incorporation, and shareholder details."
    },
    {
      q: "How long does registration take?",
      a: "Processing time varies based on application accuracy and FTA review volume; accurate submissions generally move faster."
    },
    {
      q: "What is a Tax Registration Number (TRN)?",
      a: "A TRN is the unique number the FTA issues once your Corporate Tax registration is approved."
    },
    {
      q: "Are Free Zone companies required to register?",
      a: "Yes, free zone companies must register regardless of whether they expect a 0% qualifying income rate."
    },
    {
      q: "Can natural persons register?",
      a: "Yes, natural persons conducting business above the relevant turnover threshold may need to register."
    },
    {
      q: "Can you complete the registration on my behalf?",
      a: "Yes, we manage the entire process from eligibility assessment through TRN issuance."
    },
    {
      q: "What happens after registration?",
      a: "You'll need to maintain tax records, file annual returns, and stay compliant with ongoing FTA requirements."
    },
    {
      q: "Do I need accounting services after registration?",
      a: "Most businesses do, since accurate bookkeeping and financial reporting directly support your annual Corporate Tax filing."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#E8B84B] selection:text-[#09203B]">
      <Header />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION (Dark Navy with CTA Form)
            ========================================================================= */}
        <section className="bg-[#09203b] py-12 md:py-16 relative overflow-hidden border-b-2 border-[#E8B84B]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left Column Content (7 cols) */}
              <div className="lg:col-span-7 text-white pr-0 lg:pr-4">
                <div className="inline-block px-3 py-1 bg-[#E8B84B]/15 border border-[#E8B84B]/30 rounded-full text-xs font-semibold tracking-wider text-[#E8B84B] uppercase mb-4">
                  FTA-Approved CT Registration Services
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.2] tracking-tight text-white mb-5">
                  Corporate Tax Registration UAE | <span className="text-[#E8B84B]">FTA-Approved CT Registration Services</span>
                </h1>

                <div className="text-gray-300 text-sm sm:text-[14.5px] leading-relaxed mb-8 max-w-2xl font-sans space-y-4">
                  <p>
                    Every taxable business in the UAE now needs a valid Tax Registration Number, and getting corporate tax registration UAE wrong — or late — carries a real financial cost.
                  </p>
                  <p>
                    RBO Accounting Services FZE handles the entire registration process through EmaraTax on your behalf, from confirming your eligibility to submitting your application and following up with the Federal Tax Authority until your TRN is issued.
                  </p>
                </div>

                {/* Call & WhatsApp CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="tel:+971508051857"
                    className="inline-flex items-center justify-center bg-[#c8962e] hover:bg-[#b28221] text-white font-bold px-7 py-3 rounded-lg shadow-sm transition-all duration-150 text-sm sm:text-[14.5px]"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/971508051857?text=Hello%20RBO%20Accounting,%20I%20need%20Corporate%20Tax%20Registration%20Assistance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold px-7 py-3 rounded-lg border border-white/80 hover:border-white transition-all duration-150 text-sm sm:text-[14.5px]"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right Column Consultation Form (5 cols) */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-100">
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#09203b] mb-1">
                      Get a Free Consultation
                    </h2>
                    <p className="text-xs text-emerald-600 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Our expert will reply within 10 minutes
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Select Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent transition bg-white"
                      >
                        <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                        <option value="Corporate Tax Registration">Corporate Tax Registration</option>
                        <option value="Corporate Tax Return Filing">Corporate Tax Return Filing</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping & Accounting</option>
                        <option value="VAT Registration / Filing">VAT Registration / Filing</option>
                        <option value="Audit Services">Audit Services</option>
                        <option value="Payroll Services">Payroll Services</option>
                        <option value="Virtual CFO">Virtual CFO</option>
                        <option value="AML Compliance">AML Compliance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Select Emirate
                      </label>
                      <select
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent transition bg-white"
                      >
                        <option value="">Select Emirate</option>
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
                      className="w-full mt-2 bg-[#09203b] hover:bg-[#0c2b4e] text-white font-bold py-3.5 px-4 rounded-md transition duration-200 shadow-md text-sm tracking-wide"
                    >
                      Book Free Consultation
                    </button>

                    <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-gray-500">
                      <Lock className="w-3.5 h-3.5 text-gray-400" />
                      <span>🔒 Your information is 100% secure and confidential</span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            2. QUICK ANSWER / MAINLAND QUESTION SECTION (bg-[#F8F6F1])
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#09203b] leading-snug mb-6">
                  Do RBO Accounting Services FZE manage corporate tax registration in the UAE for mainland companies?
                </h2>
                
                <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-8">
                  <p>
                    RBO Accounting Services FZE manages corporate tax registration UAE for mainland companies, free zone entities, branches, and sole establishments through the EmaraTax portal. The service covers eligibility assessment, document preparation, application submission, and FTA follow-up until the Tax Registration Number is issued.
                  </p>
                  <p>
                    Missing the registration deadline set by the Federal Tax Authority can result in a fixed late registration penalty, so businesses that haven’t registered yet should confirm their specific deadline and act promptly. Office hours run Monday to Saturday, 8:00 AM to 6:00 PM.
                  </p>
                </div>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center text-white bg-[#09203b] hover:bg-[#0c2b4e] font-semibold px-6 py-3.5 rounded-md shadow transition duration-200 text-sm group"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Column (5 cols) Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                  <img
                    src="/wp-content/uploads/2026/08/Do-RBO-Accounting-Services-FZE-manage-corporate-tax-registration-in-the-UAE-for-mainland-companies.webp"
                    alt="Corporate Tax Registration UAE for Mainland Companies"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            3. REGISTER WITH CONFIDENCE SECTION (bg-white)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column Image (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50 bg-gray-100">
                  <img
                    src="/wp-content/uploads/2026/08/What-Is-Corporate-Tax-Registration-in-the-UAE-Who-Must-Register.webp"
                    alt="Register Your Business for UAE Corporate Tax with Confidence"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column Content (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#09203b] leading-snug mb-8">
                  Register Your Business for UAE Corporate Tax with Confidence
                </h2>

                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#E8B84B]/20 text-[#09203b] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#09203b] stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#09203b] text-base mb-1">
                        Fast, Accurate & Fully Compliant Registration:
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Corporate tax registration UAE isn't complicated once you know which category your business falls into, but small errors during EmaraTax submission — a wrong business activity code, a mismatched shareholder detail — can delay approval by weeks.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#E8B84B]/20 text-[#09203b] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#09203b] stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#09203b] text-base mb-1">
                        Avoid the AED 10,000 Late Registration Penalty:
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        The FTA applies a fixed penalty for businesses that register after their applicable deadline. If you're not certain whether your business has already missed its window, get in touch before assuming it's too late — options may still exist depending on your situation.
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#E8B84B]/20 text-[#09203b] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#09203b] stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#09203b] text-base mb-1">
                        Register Through the EmaraTax Portal:
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        All Corporate Tax registration in the UAE runs through EmaraTax, the FTA's digital tax platform. We manage this process directly so you don't need to navigate the portal yourself.
                      </p>
                    </div>
                  </div>

                  {/* Point 4 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#E8B84B]/20 text-[#09203b] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#09203b] stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#09203b] text-base mb-1">
                        Get Your Corporate Tax Registration Number (TRN):
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Once your application clears FTA review, you receive a Tax Registration Number confirming your business is registered for Corporate Tax purposes.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SERVICES WE OFFER - 6 CARDS (bg-white)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#E8B84B] font-semibold text-xs uppercase tracking-widest block mb-2">
                What's Included
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b]">
                Corporate Tax Registration Services We Offer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesOffered.map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl mb-4 p-3 bg-[#F8F6F1] rounded-lg inline-block">
                      {srv.icon}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#09203b] mb-3 leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. WHO MUST REGISTER? - DARK NAVY SECTION (#09203B)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#09203B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column Content (7 cols) */}
              <div className="lg:col-span-7">
                <span className="text-[#E8B84B] font-semibold text-xs uppercase tracking-widest block mb-2">
                  What Is Corporate Tax Registration in the UAE?
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
                  Who Must Register?
                </h2>
                
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Under Federal Decree-Law No. 47 of 2022, most resident juridical persons, certain non-resident persons with a UAE permanent establishment, and applicable natural persons conducting business must register for Corporate Tax.
                </p>

                <div className="space-y-5 text-sm text-gray-300">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white text-base mb-1">
                      Who Is Exempt?
                    </h3>
                    <p className="leading-relaxed">
                      Government entities and qualifying public benefit entities may fall outside standard registration requirements, though exemption status still typically needs to be confirmed with the FTA rather than assumed.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white text-base mb-1">
                      FTA Corporate Tax Requirements
                    </h3>
                    <p className="leading-relaxed">
                      The Federal Tax Authority requires accurate business information, correct legal structure classification, and supporting documentation before approving any registration.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white text-base mb-1">
                      Importance of Obtaining a Tax Registration Number (TRN)
                    </h3>
                    <p className="leading-relaxed">
                      Your TRN is required for corporate tax filing, and without it, your business cannot meet its annual Corporate Tax return obligations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-[#0c2b4e]">
                  <img
                    src="/wp-content/uploads/2026/08/Who-Must-Register.webp"
                    alt="Who Must Register for UAE Corporate Tax"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            6. WHO NEEDS CORPORATE TAX REGISTRATION - 6 CARDS (bg-[#F8F6F1])
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b]">
                Who Needs Corporate Tax Registration?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whoNeedsCT.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#E8B84B]/20 text-[#09203b] flex items-center justify-center font-bold text-sm mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#09203b] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. LATEST CT REGISTRATION DEADLINE (bg-white)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Content (7 cols) */}
              <div className="lg:col-span-7">
                <span className="text-[#E8B84B] font-semibold text-xs uppercase tracking-widest block mb-2">
                  Corporate Tax Registration Deadline
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] mb-5">
                  Latest CT Registration Deadline
                </h2>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  Registration deadlines are tied to your license issuance date and business category, and the FTA has updated its registration timeline more than once since Corporate Tax launched — confirm your exact deadline with our team rather than relying on a general date.
                </p>

                <div className="bg-[#F8F6F1] p-5 rounded-xl border border-gray-200 mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#09203b] text-sm sm:text-base">
                        FTA Registration Timeline:
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                        The FTA assigns registration windows in phases based on when your trade license was issued.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#09203b] text-sm sm:text-base">
                        What Happens if You Miss the Deadline?
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                        Businesses that register after their assigned deadline become liable for a late registration penalty, regardless of whether tax was actually owed for that period.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#09203b] text-sm sm:text-base">
                        AED 10,000 Late Registration Penalty:
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                        The FTA has applied a fixed AED 10,000 penalty for late Corporate Tax registration — this is a flat amount rather than a percentage-based fine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#09203b] text-sm sm:text-base">
                        Penalty Waiver (If Applicable):
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                        The FTA has, at points, offered conditional relief for businesses that register within a specific grace period alongside their tax return — whether this applies to your situation depends on current FTA guidance at the time you register.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center text-white bg-[#09203b] hover:bg-[#0c2b4e] font-semibold px-6 py-3.5 rounded-md shadow transition duration-200 text-sm group"
                >
                  Confirm Your Deadline with Our Team
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50 bg-gray-100">
                  <img
                    src="/wp-content/uploads/2026/08/What-Is-FTA-Audit-Assistance-and-Why-Would-You-Need-It-e1786410754753.webp"
                    alt="Corporate Tax Registration Deadline and AED 10,000 Fine"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            8. EMARATAX REGISTRATION PROCESS - 5 STEPS (bg-[#F8F6F1])
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#E8B84B] font-semibold text-xs uppercase tracking-widest block mb-2">
                Our Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b]">
                EmaraTax Corporate Tax Registration Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {emarataxSteps.map((stepItem) => (
                <div
                  key={stepItem.step}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition relative flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#09203b] text-[#E8B84B] font-bold text-xl flex items-center justify-center mb-5 shadow-inner">
                      {stepItem.step}
                    </div>
                    <h3 className="font-serif font-bold text-base text-[#09203b] mb-3 leading-snug">
                      {stepItem.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. OUR CORPORATE TAX REGISTRATION PROCESS (bg-white)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column Text (7 cols) */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] mb-6">
                  Our Corporate Tax Registration Process
                </h2>
                <div className="text-gray-700 text-base leading-relaxed space-y-4">
                  <p>
                    We begin with an initial consultation to understand your business structure, followed by an eligibility assessment to confirm your registration category.
                  </p>
                  <p>
                    From there, we collect the required documentation, prepare your application accurately, submit it through EmaraTax, follow up directly with the FTA on your behalf, confirm TRN issuance, and remain available for ongoing compliance support once you're registered.
                  </p>
                </div>
              </div>

              {/* Right Column Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50 bg-gray-100">
                  <img
                    src="/wp-content/uploads/2026/08/Professional-business-advisory-financial-planning-business-strategy-and-growth-consulting-for-UAE-companies-e1786294474716-1024x703.webp"
                    alt="Our Corporate Tax Registration Process"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            10. DOCUMENTS REQUIRED FOR REGISTRATION (bg-[#F8F6F1])
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column Image (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                  <img
                    src="/wp-content/uploads/2026/06/pexels-photo-7821708.jpeg"
                    alt="Documents Required for Corporate Tax Registration"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column Text (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] mb-6">
                  Documents Required for Corporate Tax Registration
                </h2>
                <div className="text-gray-700 text-base leading-relaxed mb-6">
                  <p>
                    You'll generally need your trade license, Emirates ID, passport copy, Memorandum of Association, Certificate of Incorporation, shareholder details, authorized signatory information, business contact details, and financial information where the FTA requests it.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Valid Trade License",
                    "Emirates ID of Authorized Signatory",
                    "Passport Copy of Owners / Partners",
                    "Memorandum of Association (MOA)",
                    "Certificate of Incorporation",
                    "Shareholder & Ownership Details",
                    "Authorized Signatory Proof",
                    "Business Contact & Bank Details",
                    "Financial Information (if requested)"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-gray-200">
                      <FileCheck2 className="w-4 h-4 text-[#E8B84B] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-gray-800">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            11. WHY CHOOSE OUR REGISTRATION SERVICES (bg-white)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column Text (7 cols) */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] mb-6">
                  Why Choose Our Corporate Tax Registration Services?
                </h2>
                <div className="text-gray-700 text-base leading-relaxed space-y-4">
                  <p>
                    Businesses choose us for experienced corporate tax consultants who focus specifically on FTA compliance, fast processing that avoids unnecessary delays, end-to-end registration support from consultation through TRN issuance, transparent pricing with no hidden fees, dedicated tax specialists for every client, and secure handling of your business documentation throughout.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "FTA-Compliant Tax Consultants",
                    "Fast Processing & No Delays",
                    "End-to-End Registration Support",
                    "Transparent Pricing - No Hidden Fees",
                    "Dedicated Tax Specialist Per Client",
                    "100% Confidential Document Handling"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span className="text-sm font-semibold text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50 bg-gray-100">
                  <img
                    src="/wp-content/uploads/2026/08/What-Do-VAT-Advisory-Services-Cover.webp"
                    alt="Why Choose Our Corporate Tax Registration Services"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            12. BENEFITS OF REGISTERING EARLY (bg-[#F8F6F1])
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column Image (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                  <img
                    src="/wp-content/uploads/2026/08/What-is-VAT-Registration-in-the-UAE-at-a-Glance.webp"
                    alt="Benefits of Registering Early for UAE Corporate Tax"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column Text (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] mb-6">
                  Benefits of Registering Early
                </h2>
                <div className="text-gray-700 text-base leading-relaxed space-y-4">
                  <p>
                    Registering before your deadline helps you avoid penalties entirely, ensures full compliance from day one, sets up a smoother path toward your first corporate tax filing, protects business continuity by avoiding FTA disputes, and gives you genuine peace of mind instead of an open compliance risk sitting in the background.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "Zero Risk of Late Penalties",
                    "Full Day-One FTA Compliance",
                    "Smooth Path to Return Filing",
                    "Protects Business Continuity",
                    "Avoid Costly Disputes",
                    "Genuine Peace of Mind"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#E8B84B] shrink-0" />
                      <span className="text-sm font-semibold text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            13. INDUSTRIES WE SERVE (bg-white)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column Text & Industries List (7 cols) */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] mb-4">
                  Industries We Serve
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  We handle corporate tax registration UAE for
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industriesList.map((ind, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#F8F6F1] border border-gray-200 hover:border-[#E8B84B] transition"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#E8B84B]/20 text-[#09203b] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50 bg-gray-100">
                  <img
                    src="/wp-content/uploads/2026/08/Industries-We-Serve-1024x676.png"
                    alt="Industries We Serve in the UAE"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            14. ADDITIONAL CORPORATE TAX SERVICES (bg-[#F8F6F1])
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column Image (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                  <img
                    src="/wp-content/uploads/2026/08/What-Accounts-Payable-and-Receivable-Actually-Mean-e1786293062900.webp"
                    alt="Additional Corporate Tax & Accounting Services"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column Content with Internal Links (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] mb-6">
                  Additional Corporate Tax Services
                </h2>
                
                <div className="text-gray-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                  <p>
                    Beyond registration, we support businesses with{" "}
                    <Link href="/our-services/corporate-tax" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Corporate Tax UAE
                    </Link>{" "}
                    advisory covering{" "}
                    <Link href="/our-services/corporate-tax/return-filing" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      CT return filing
                    </Link>{" "}
                    and{" "}
                    <Link href="/our-services/corporate-tax/planning" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Tax planning
                    </Link>
                    , along with{" "}
                    <Link href="/our-services/corporate-tax/transfer-pricing" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Transfer pricing
                    </Link>{" "}
                    documentation for related-party transactions.
                  </p>
                  
                  <p>
                    We also provide{" "}
                    <Link href="/our-services/accounting/bookkeeping-and-accounting" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Bookkeeping & Accounting Services
                    </Link>{" "}
                    including{" "}
                    <Link href="/our-services/accounting/financial-reporting" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Financial reporting
                    </Link>{" "}
                    built on proper{" "}
                    <Link href="/our-services/accounting/ifrs-compliance" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      IFRS compliance
                    </Link>
                    ,{" "}
                    <Link href="/our-services/accounting/bank-reconciliation" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Bank reconciliation
                    </Link>
                    , and{" "}
                    <Link href="/our-services/accounting/accounts-payable-and-receivable" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Accounts Payable & Receivable Management
                    </Link>
                    , plus{" "}
                    <Link href="/our-services/audit" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Audit & Assurance Services UAE
                    </Link>{" "}
                    covering{" "}
                    <Link href="/our-services/audit/statutory-audit" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Statutory audit
                    </Link>
                    ,{" "}
                    <Link href="/our-services/audit/internal-audit" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Internal audit
                    </Link>
                    ,{" "}
                    <Link href="/our-services/audit/free-zone-audit" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Free Zone audit
                    </Link>
                    ,{" "}
                    <Link href="/our-services/audit/due-diligence" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Due diligence
                    </Link>
                    , and{" "}
                    <Link href="/our-services/audit/risk-assessment" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Risk assessment
                    </Link>
                    .
                  </p>

                  <p>
                    For businesses needing broader support, we offer{" "}
                    <Link href="/our-services/vat-registration-filing" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      VAT Registration & Filing UAE
                    </Link>
                    ,{" "}
                    <Link href="/our-services/payroll" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Payroll Services Dubai & UAE
                    </Link>
                    , and{" "}
                    <Link href="/our-services/virtual-cfo" className="font-bold text-[#09203b] hover:text-[#E8B84B] underline decoration-[#E8B84B]/40">
                      Virtual CFO Services UAE
                    </Link>
                    .
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            15. WHY BUSINESSES ACROSS THE UAE TRUST US (bg-white)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] mb-4">
                Why Businesses Across the UAE Trust Us
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Clients rely on us because of our qualified tax professionals, years of hands-on experience with FTA processes, a track record of successful registrations, strong client satisfaction, fast response times, and a dedicated support team available throughout the registration process.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[380px] w-full">
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=RBO%20Accounting%20Services%20FZE&t=m&z=10&output=embed&iwloc=near"
                title="RBO Accounting Services FZE"
                aria-label="RBO Accounting Services FZE"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </section>

        {/* =========================================================================
            16. AREAS WE SERVE (bg-[#F8F6F1])
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] mb-4">
                  Areas We Serve
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  We provide corporate tax registration UAE support for businesses across
                </p>

                {/* 7 Emirates Tags */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {[
                    { name: "Dubai", href: "/areas-we-serve/dubai" },
                    { name: "Abu Dhabi", href: "/areas-we-serve/abu-dhabi" },
                    { name: "Sharjah", href: "/areas-we-serve/sharjah" },
                    { name: "Ajman", href: "/areas-we-serve/ajman" },
                    { name: "Ras Al Khaimah", href: "/areas-we-serve/ras-al-khaimah" },
                    { name: "Fujairah", href: "/areas-we-serve/fujairah" },
                    { name: "Umm Al Quwain", href: "/areas-we-serve/umm-al-quwain" }
                  ].map((emirate, idx) => (
                    <Link
                      key={idx}
                      href={emirate.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-semibold text-[#09203b] hover:border-[#E8B84B] hover:text-[#E8B84B] shadow-sm transition"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#E8B84B]" />
                      {emirate.name}
                    </Link>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  and throughout the UAE — including our dedicated{" "}
                  <Link href="/areas-we-serve/dubai" className="text-[#09203b] font-medium hover:text-[#E8B84B] underline">
                    accounting consulting firm in Dubai
                  </Link>
                  ,{" "}
                  <Link href="/areas-we-serve/abu-dhabi" className="text-[#09203b] font-medium hover:text-[#E8B84B] underline">
                    accounting consulting firm in Abu Dhabi
                  </Link>
                  ,{" "}
                  <Link href="/areas-we-serve/sharjah" className="text-[#09203b] font-medium hover:text-[#E8B84B] underline">
                    accounting consulting firm in Sharjah
                  </Link>
                  ,{" "}
                  <Link href="/areas-we-serve/ajman" className="text-[#09203b] font-medium hover:text-[#E8B84B] underline">
                    accounting consulting firm in Ajman
                  </Link>
                  ,{" "}
                  <Link href="/areas-we-serve/ras-al-khaimah" className="text-[#09203b] font-medium hover:text-[#E8B84B] underline">
                    accounting consulting firm in Ras Al Khaimah
                  </Link>
                  ,{" "}
                  <Link href="/areas-we-serve/fujairah" className="text-[#09203b] font-medium hover:text-[#E8B84B] underline">
                    accounting consulting firm in Fujairah
                  </Link>
                  , and{" "}
                  <Link href="/areas-we-serve/umm-al-quwain" className="text-[#09203b] font-medium hover:text-[#E8B84B] underline">
                    accounting consulting firm in Umm Al Quwain
                  </Link>
                  .
                </p>
              </div>

              {/* Right Column Map (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[320px] w-full">
                  <iframe
                    loading="lazy"
                    src="https://maps.google.com/maps?q=UAE&t=m&z=7&output=embed&iwloc=near"
                    title="UAE Map"
                    aria-label="UAE Map"
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            17. CLIENT REVIEWS SECTION
            ========================================================================= */}
        <TestimonialsSection />

        {/* =========================================================================
            18. FREQUENTLY ASKED QUESTIONS - ACCORDION (bg-white)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#E8B84B] font-semibold text-xs uppercase tracking-widest block mb-2">
                COMMON QUESTIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300 bg-white"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 bg-white hover:bg-gray-50/80 transition"
                  >
                    <span className="font-bold text-gray-900 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                        activeFaq === idx ? "rotate-180 text-[#E8B84B]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-[#faf9f6]/40">
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
            19. FINAL CALL TO ACTION BANNER (bg-[#e8b84b])
            ========================================================================= */}
        <section className="py-14 sm:py-16 bg-[#e8b84b] text-[#09203B]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#09203b] mb-8 max-w-3xl mx-auto leading-tight">
              Ready for Corporate Tax Registration That Actually Keeps You Ahead?
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center bg-[#09203b] hover:bg-[#0c2b4e] text-white font-bold px-8 py-4 rounded-md shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
              >
                Get Free Consultation →
              </Link>
              <a
                href="https://wa.me/971508051857?text=Hello%20RBO%20Accounting,%20I%20am%20ready%20for%20Corporate%20Tax%20Registration."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-md shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
              >
                WhatsApp Us Now
              </a>
            </div>

            <p className="text-xs sm:text-sm font-medium text-[#09203b]/80">
              Office Hours: Monday to Saturday, 8:00 AM – 6:00 PM
            </p>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
