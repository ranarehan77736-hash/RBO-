"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Check, ArrowRight, Lock, MapPin,
  ChevronsDown, ChevronsUp,
  Phone, MessageSquare, Briefcase, Building, Building2,
  ShieldCheck, CheckCircle2, TrendingUp, Scale, Clock, FileText,
  HelpCircle, Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CorporateTaxPlanningPage() {
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

  const coreAreas = [
    {
      title: "Business Structure Review",
      desc: "We review whether your current legal structure — mainland, free zone, branch, or holding company — is still the most tax-efficient setup for how your business actually operates."
    },
    {
      title: "Qualifying Free Zone Person (QFZP) Planning",
      desc: "Free zone companies that want to preserve their 0% rate on qualifying income need to actively manage what counts as qualifying versus non-qualifying activity. We help you monitor this throughout the year rather than discover a breach at filing time."
    },
    {
      title: "Small Business Relief Assessment",
      desc: "We assess whether your business meets Small Business Relief conditions each period, since eligibility depends on revenue levels that can change year to year."
    },
    {
      title: "Tax Group Structuring",
      desc: "For businesses with multiple UAE entities, we evaluate whether forming a tax group makes sense, weighing the administrative simplification against any offsetting considerations."
    },
    {
      title: "Transfer Pricing Strategy",
      desc: "Where related-party transactions exist, we help you set and document pricing that reflects the arm's length principle, reducing exposure if the FTA later reviews your position."
    },
    {
      title: "Deductible Expense Planning",
      desc: "We help you understand which expenses genuinely qualify as deductible under UAE Corporate Tax Law, so your taxable income calculation isn't inflated by costs that shouldn't count against it."
    },
    {
      title: "Timing of Income and Expenses",
      desc: "In some cases, the timing of when income is recognized or expenses are incurred can affect which tax period they fall into — we help you understand this without recommending anything that crosses into artificial manipulation."
    },
    {
      title: "Loss Utilization Planning",
      desc: "Where your business has incurred tax losses, we help you understand how those losses might be carried forward and applied against future taxable income."
    }
  ];

  const industriesList = [
    "Trading Companies",
    "Manufacturing Businesses",
    "Professional Service Firms",
    "Real estate Companies",
    "Construction Companies",
    "E-commerce Businesses",
    "Technology Companies",
    "Logistics Companies",
    "Healthcare Providers",
    "Hospitality Businesses"
  ];

  const faqs = [
    {
      q: "What is corporate tax planning UAE and how is it different from filing?",
      a: "Filing reports what already happened; planning shapes decisions during the year so the eventual filing reflects the most tax-efficient position available."
    },
    {
      q: "Do free zone companies need tax planning if they qualify for 0%?",
      a: "Yes, since qualifying status depends on ongoing income composition, not a one-time confirmation."
    },
    {
      q: "How does Small Business Relief affect my planning?",
      a: "Eligibility depends on revenue thresholds that can change year to year, so it needs to be reassessed rather than assumed."
    },
    {
      q: "Do I need transfer pricing documentation if my transactions are small?",
      a: "This depends on your specific related-party activity and applicable thresholds — we assess this during a consultation rather than applying a blanket rule."
    },
    {
      q: "How is taxable income calculated?",
      a: "Taxable income starts from accounting profit and applies specific adjustments, exemptions, and deductions required under UAE Corporate Tax Law."
    },
    {
      q: "Can tax groups reduce our compliance burden?",
      a: "In some cases, yes, though it depends on your specific group structure and objectives, which is something we review case by case."
    },
    {
      q: "When should tax planning start relative to my financial year-end?",
      a: "Ideally well before year-end, since many planning opportunities depend on decisions made during the year rather than after it closes."
    },
    {
      q: "Do you also handle registration and filing, or only planning?",
      a: "We provide corporate tax registration UAE and corporate tax return filing UAE services alongside planning, so your strategy and your filed return stay aligned."
    },
    {
      q: "How often should we revisit our tax planning?",
      a: "At least annually, though businesses with changing revenue, structure, or related-party activity benefit from more frequent reviews."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#E8B84B] selection:text-[#09203B]">
      <Header />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION (Dark Navy with CTA Form)
            ========================================================================= */}
        <section className="bg-[#09203b] py-14 md:py-20 relative overflow-hidden border-b-2 border-[#E8B84B]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column (7 cols): Heading & Description */}
              <div className="lg:col-span-7 space-y-6 text-white text-left">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.2] tracking-tight">
                  Corporate Tax Planning UAE |{" "}
                  <span className="text-[#E8B84B]">Strategic Corporate Tax</span>{" "}
                  Advisory Services
                </h1>

                <p className="text-gray-300 text-base sm:text-[17px] leading-relaxed max-w-2xl font-sans">
                  Registering for Corporate Tax and filing a return are only two parts of the picture. Corporate tax planning UAE is what happens in between—the decisions made throughout the year that determine whether your business pays more tax than it needs to or structures itself in a way that&apos;s both compliant and efficient. RBO Accounting Services FZE works with mainland and free zone businesses across the UAE to plan ahead rather than react at filing time.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="tel:+971508051857"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C8962E] hover:bg-[#b28221] text-white font-bold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href="https://wa.me/971508051857?text=Hello%20RBO%20Accounting,%20I%20need%20Corporate%20Tax%20Planning%20advice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/30 hover:border-[#E8B84B] text-white hover:text-[#E8B84B] font-bold text-sm sm:text-base rounded-lg transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols): Lead Form Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#0d1b2a]/95 border border-white/15 rounded-2xl p-7 sm:p-9 shadow-2xl backdrop-blur-md">
                  <div className="mb-6 text-left">
                    <h3 className="font-serif text-2xl font-bold text-white mb-1.5">
                      Get a Free Consultation
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Our expert will reply within 10 minutes
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f7f9ff] text-gray-900 placeholder-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B84B] border border-gray-200 transition"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f7f9ff] text-gray-900 placeholder-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B84B] border border-gray-200 transition"
                      />
                    </div>

                    <div>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f7f9ff] text-gray-900 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B84B] border border-gray-200 transition cursor-pointer"
                      >
                        <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                        <option value="Corporate Tax Planning">Corporate Tax Planning</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping &amp; Accounting</option>
                        <option value="VAT Registration / Filing">VAT Registration / Filing</option>
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
                        required
                        className="w-full px-4 py-3 bg-[#f7f9ff] text-gray-900 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B84B] border border-gray-200 transition cursor-pointer"
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
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#C8962E] hover:bg-[#b28221] text-white font-bold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Request Free Consultation</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center justify-center gap-2 pt-2 text-[12px] text-gray-400">
                      <Lock className="w-3.5 h-3.5 text-[#E8B84B]" />
                      <span>Your information is 100% secure and confidential</span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            2. DOES RBO PROVIDE CORPORATE TAX PLANNING SERVICES? (bg #F8F6F1)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (7 cols): Content */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[29px] font-bold text-[#09203b] leading-[1.3]">
                  Does RBO Accounting Services FZE provide corporate tax planning UAE services?
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                  RBO Accounting Services FZE provides corporate tax planning UAE services covering Qualifying Free Zone Person structuring, small business relief assessment, transfer pricing strategy, and tax-efficient business decisions throughout the year. The service is aimed at reducing compliance risk and improving after-tax outcomes for mainland and free zone companies alike. Office hours run Monday to Saturday, 8:00 AM to 6:00 PM.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact-us/#form"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8962E] hover:bg-[#b28221] text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column (5 cols): Image */}
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/Do-RBO-Accounting-Services-FZE-manage-corporate-tax-registration-in-the-UAE-for-mainland-companies.webp"
                    alt="Corporate Tax Planning UAE Services"
                    className="w-full h-auto object-cover max-h-[380px]"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHY PLANNING MATTERS BEYOND REGISTRATION AND FILING (bg White)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (5 cols): Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/Why-Planning-Matters-Beyond-Registration-and-Filing.webp"
                    alt="Why Planning Matters Beyond Registration and Filing"
                    className="w-full h-auto object-cover max-h-[420px]"
                  />
                </div>
              </div>

              {/* Right Column (7 cols): Text */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-left">
                <span className="text-[#C8962E] font-bold text-xs sm:text-[13px] tracking-[1.6px] uppercase block">
                  Corporate Tax Planning Services in the UAE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[29px] font-bold text-[#09203b] leading-[1.3]">
                  Why Planning Matters Beyond Registration and Filing
                </h2>
                <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3.5 text-justify">
                  <p>
                    Many businesses treat Corporate Tax as a once-a-year filing exercise, but decisions made mid-year — how income is structured, which entity holds which asset, how related-party transactions are priced — directly affect your final tax position.
                  </p>
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Serving Mainland, Free Zone &amp; Group Structures:</h4>
                    <p className="text-gray-600">
                      We work with standalone mainland companies, Qualifying Free Zone Persons trying to preserve their 0% rate, and group structures weighing whether to form a tax group.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Proactive Rather Than Reactive Tax Management:</h4>
                    <p className="text-gray-600">
                      The businesses that benefit most from corporate tax planning UAE are the ones that start before their financial year closes, not after.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Book a Free Tax Planning Consultation:</h4>
                    <p className="text-gray-600">
                      A short conversation about your current structure often reveals opportunities or risks you hadn&apos;t considered.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. WHAT IS CORPORATE TAX PLANNING? (bg White)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (7 cols): Content */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#09203b] leading-[1.25]">
                  What Is Corporate Tax Planning?
                </h2>
                <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3.5 text-justify">
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Planning vs Compliance:</h4>
                    <p className="text-gray-600">
                      Compliance means filing correctly after the fact. Planning means making decisions during the year so that what you eventually file reflects the most tax-efficient position available to you legally.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Why UAE Businesses Need Tax Planning Now:</h4>
                    <p className="text-gray-600">
                      With Corporate Tax now firmly in place, businesses that previously never thought about tax structuring are finding it directly affects profitability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">How Planning Reduces Risk and Improves Efficiency:</h4>
                    <p className="text-gray-600">
                      Good planning catches issues — like a free zone company inadvertently earning non-qualifying income — before they show up as an unwelcome surprise at filing time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Image */}
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/What-Is-Corporate-Tax-Planning.webp"
                    alt="What Is Corporate Tax Planning"
                    className="w-full h-auto object-cover max-h-[410px]"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            5. CORE AREAS OF CORPORATE TAX PLANNING (bg #F8F6F1)
            ========================================================================= */}
        <section className="py-16 md:py-24 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b] leading-tight">
                Core Areas of Corporate Tax Planning
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E8E8] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between text-left"
                >
                  <div>
                    <h4 className="font-serif text-base sm:text-[17px] font-bold text-[#0D1B2A] tracking-[0.5px] mb-3">
                      {area.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. OUR CORPORATE TAX PLANNING SERVICES (bg White)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (5 cols): Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/Our-Corporate-Tax-Planning-Services.webp"
                    alt="Our Corporate Tax Planning Services"
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
              </div>

              {/* Right Column (7 cols): Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-left">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[33px] font-bold text-[#09203b] leading-[1.3]">
                  Our Corporate Tax Planning Services
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                  Our <strong className="text-[#09203b]">Corporate Tax UAE</strong> advisory covers ongoing <strong className="text-[#09203b]">Tax planning</strong> built around your specific structure, alongside <strong className="text-[#09203b]">Transfer pricing</strong> review for related-party dealings. This connects directly with the <Link href="/our-services/corporate-tax/registration/" className="text-[#C8962E] font-semibold hover:underline">CT registration</Link> and <Link href="/our-services/corporate-tax/return-filing/" className="text-[#C8962E] font-semibold hover:underline">CT return filing</Link> work we handle separately, so your planning decisions flow through consistently to what actually gets filed. We also draw on your <strong className="text-[#09203b]">Financial reporting</strong>, maintained under proper <strong className="text-[#09203b]">IFRS compliance</strong>, since accurate books are the foundation any tax planning decision has to be built on.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            7. OUR CORPORATE TAX PLANNING PROCESS (bg White)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (7 cols): Content */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[33px] font-bold text-[#09203b] leading-[1.3]">
                  Our Corporate Tax Planning Process
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                  We begin with a review of your current business structure and financial position, then identify areas where your tax position could be improved or where risk exists. From there, we model the impact of different structural or timing decisions, recommend a clear plan, and support implementation. Planning isn&apos;t a one-time exercise — we revisit your position periodically as your business and UAE tax regulations evolve.
                </p>
              </div>

              {/* Right Column (5 cols): Image */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/Our-Corporate-Tax-Planning-Process.webp"
                    alt="Our Corporate Tax Planning Process"
                    className="w-full h-auto object-cover max-h-[430px]"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            8. WHO BENEFITS FROM CORPORATE TAX PLANNING? (bg White)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (5 cols): Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/Who-Benefits-From-Corporate-Tax-Planning.webp"
                    alt="Who Benefits From Corporate Tax Planning"
                    className="w-full h-auto object-cover max-h-[420px]"
                  />
                </div>
              </div>

              {/* Right Column (7 cols): Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-left">
                <span className="text-[#C8962E] font-bold text-xs sm:text-[13px] tracking-[1.6px] uppercase block">
                  How Taxable Income Is Calculated
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[33px] font-bold text-[#09203b] leading-[1.3]">
                  Who Benefits From Corporate Tax Planning?
                </h2>
                <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3.5 text-justify">
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Free Zone Businesses Protecting Their 0% Rate:</h4>
                    <p className="text-gray-600">
                      Any free zone company earning meaningful revenue benefits from actively monitoring its qualifying income status.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Growing SMEs Approaching Relief Thresholds:</h4>
                    <p className="text-gray-600">
                      Businesses growing close to the Small Business Relief revenue threshold need to plan for what happens once they cross it.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Groups With Multiple UAE Entities:</h4>
                    <p className="text-gray-600">
                      Businesses operating through more than one UAE entity benefit from reviewing whether a tax group structure simplifies their compliance burden.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Businesses With Related-Party Transactions:</h4>
                    <p className="text-gray-600">
                      Companies transacting with related entities, whether in the UAE or abroad, need transfer pricing planning to avoid disputes later.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#09203b] text-base mb-1">Businesses Preparing for Growth or Investment:</h4>
                    <p className="text-gray-600">
                      Companies planning to raise investment or expand often benefit from a tax-efficient structure being in place before that growth happens, rather than restructuring under pressure afterward.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            9. COMMON CORPORATE TAX PLANNING MISTAKES (bg White)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (7 cols): Content */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#09203b] leading-[1.3]">
                  Common Corporate Tax Planning Mistakes
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                  We regularly see businesses assume their free zone status automatically protects their tax rate without monitoring actual income sources, assume Small Business Relief applies indefinitely without reassessing eligibility each period, price related-party transactions without documentation to support the figures used, and only think about tax planning in the weeks before filing rather than throughout the year.
                </p>
              </div>

              {/* Right Column (5 cols): Image */}
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/Gemini_Generated_Image_botgonbotgonbotg-e1786407897201.webp"
                    alt="Common Corporate Tax Planning Mistakes"
                    className="w-full h-auto object-cover max-h-[410px]"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            10. WHY CHOOSE OUR CORPORATE TAX PLANNING SERVICES? (bg White)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (5 cols): Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/Why-Choose-Our-Corporate-Tax-Planning-Services.webp"
                    alt="Why Choose Our Corporate Tax Planning Services"
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
              </div>

              {/* Right Column (7 cols): Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-left">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[33px] font-bold text-[#09203b] leading-[1.3]">
                  Why Choose Our Corporate Tax Planning Services?
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                  Businesses work with us because we combine tax planning with the underlying <strong className="text-[#09203b]">Bookkeeping &amp; Accounting Services</strong> and audit expertise needed to actually implement it, rather than offering advice in isolation. Our team stays current with FTA guidance as it evolves, we provide transparent pricing, and we assign a dedicated advisor who understands your business rather than starting from scratch each time.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            11. INDUSTRIES WE SERVE (bg #F8F6F1)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (7 cols): Checklist */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[33px] font-bold text-[#09203b] leading-[1.3] mb-2">
                    Industries We Serve
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We provide corporate tax planning UAE support for
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {industriesList.map((ind, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E8B84B]/20 text-[#C8962E] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-gray-800 font-medium text-sm sm:text-base">
                        {ind}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (5 cols): Image */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/Industries-We-Serve.webp"
                    alt="Industries We Serve"
                    className="w-full h-auto object-cover max-h-[380px]"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            12. WHY CORPORATE TAX PLANNING MATTERS (bg White)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (5 cols): Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="https://www.rboaccounting.ae/wp-content/uploads/2026/08/Why-Corporate-Tax-Planning-Matters.webp"
                    alt="Why Corporate Tax Planning Matters"
                    className="w-full h-auto object-cover max-h-[350px]"
                  />
                </div>
              </div>

              {/* Right Column (7 cols): Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-left">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[33px] font-bold text-[#09203b] leading-[1.3]">
                  Why Corporate Tax Planning Matters
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                  Businesses that plan ahead avoid unpleasant surprises at filing time, protect preferential tax treatment they may be entitled to, reduce the risk of FTA disputes over related-party pricing, and generally make better-informed decisions about how to structure growth, investment, and ongoing operations.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            13. SERVICE AREAS (with Map Embed)
            ========================================================================= */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column Text (7 cols) */}
              <div className="lg:col-span-7 text-left space-y-5">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09203b]">
                  Service Areas
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  We provide corporate tax planning UAE support across
                </p>

                {/* 7 Emirates Badges */}
                <div className="flex flex-wrap gap-2.5">
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F8F6F1] rounded-full border border-gray-200 text-sm font-semibold text-[#09203b] hover:border-[#E8B84B] hover:text-[#E8B84B] shadow-sm transition"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#E8B84B]" />
                      {emirate.name}
                    </Link>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  and throughout the UAE — including through our{" "}
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
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[380px]">
                  <iframe
                    loading="lazy"
                    src="https://maps.google.com/maps?q=RBO%20Accounting%20Services%20FZE&t=m&z=7&output=embed&iwloc=near"
                    title="RBO Accounting Services FZE"
                    aria-label="RBO Accounting Services FZE"
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            14. CLIENT REVIEWS SECTION
            ========================================================================= */}
        <TestimonialsSection />

        {/* =========================================================================
            15. FREQUENTLY ASKED QUESTIONS - ACCORDION (Dark Navy Unified Container)
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

      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
