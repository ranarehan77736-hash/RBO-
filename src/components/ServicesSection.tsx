"use client";

import React, { useState, useEffect } from "react";
import { Check, ArrowRight, X, Star, Building, FileCheck, Layers, Package, Globe, ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesSection() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      emoji: "📒",
      title: "Bookkeeping & Accounting Services",
      desc: "Clean books are the foundation of everything else. Our monthly bookkeeping services cover daily transaction recording, paired with regular bank reconciliation. We handle accounts payable & receivable management, deliver clear financial reporting, ensure IFRS compliance, and work directly inside Xero, Zoho & QuickBooks.",
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
      emoji: "🧾",
      title: "VAT Registration & Filing UAE",
      desc: "We handle VAT registration from day one, manage ongoing VAT return filing, and pursue VAT refunds where you're owed money back. Our team also provides VAT advisory, steps in with FTA audit support, keeps your FTA records update current, and handles penalty reconsideration.",
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
      emoji: "🏛️",
      title: "Corporate Tax UAE",
      desc: "Since corporate tax became mandatory, every eligible business needs a firm that actually understands the practical side of compliance, not just the theory. We manage CT registration, handle your CT return filing on schedule, and work with you on tax planning that fits your actual business structure rather than a generic template.",
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
      emoji: "🔍",
      title: "Audit & Assurance Services UAE",
      desc: "Whether a bank, investor, or free zone authority requires it, we deliver audit work that stands up to scrutiny. This includes statutory audit for annual compliance, internal audit to strengthen your controls, and free zone audit for companies licensed under DMCC, IFZA, JAFZA, and similar authorities.",
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
      emoji: "💳",
      title: "Payroll Services Dubai & UAE",
      desc: "Payroll mistakes cost trust with employees fast, and UAE payroll has its own specific rules. We manage WPS payroll (salary processing) to keep you compliant with the Wage Protection System, calculate EOSB calculation accurately so end-of-service settlements are never a dispute, handle leave management tracking, and provide clear payroll reports every cycle.",
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
      emoji: "📊",
      title: "Virtual CFO Services UAE",
      desc: "Not every business is ready for a full-time CFO, but most growing businesses need that level of financial thinking. Our virtual CFO service delivers management reports that actually inform decisions, hands-on financial planning, realistic budgeting, close cash flow management so you're never caught short, and ongoing business advisory as your company grows and its needs change.",
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

  const quickLinks = [
    { icon: Building, text: "Ajman Free Zone (AFZA)" },
    { icon: Layers, text: "Mainland vs Free Zone Guide" },
    { icon: Globe, text: "Dubai Business Setup" },
    { icon: FileCheck, text: "5-Step Trade Licence Process" },
    { icon: Package, text: "All-Inclusive Setup Packages" },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlideIndex = Math.max(0, services.length - itemsPerPage);

  // Auto scroll timer every 4.5 seconds (pauses on hover or modal open)
  useEffect(() => {
    if (isPaused || activeModal !== null) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, activeModal, maxSlideIndex]);

  const handleNext = () => {
    if (slideIndex < maxSlideIndex) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  const renderCard = (item: typeof services[0], originalIdx: number) => (
    <div
      key={`${item.title}-${originalIdx}`}
      className="group bg-white border border-[#e2e8f0] hover:border-[#c9a227]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer h-full min-h-[420px]"
      onClick={() => setActiveModal(originalIdx)}
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#fef6e3] border border-[#fef0c7] group-hover:border-[#c9a227]/40 group-hover:bg-[#fef0c7]/60 flex items-center justify-center text-2xl mb-5 shadow-xs transition-all duration-300">
          {item.emoji}
        </div>
        
        <h3 className="text-xl font-serif font-bold text-[#09203b] group-hover:text-[#c9a227] transition-colors duration-300 mb-3">
          {item.title}
        </h3>

        <p className="text-[#475569] text-sm leading-relaxed mb-6">
          {item.desc}
        </p>

        {/* Checklist */}
        <ul className="space-y-2.5 mb-6 text-xs text-[#334155]">
          {item.checklist.map((checkItem, cIdx) => (
            <li key={cIdx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c9a227] stroke-[3] flex-shrink-0" />
              <span>{checkItem}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveModal(originalIdx);
        }}
        className="inline-flex items-center gap-2 text-[#c9a227] group-hover:text-[#b8911f] font-bold text-base tracking-wide pt-3 text-left w-max transition-colors"
      >
        <span>Learn More</span>
        <span className="text-lg group-hover:translate-x-1.5 transition-transform duration-300">→</span>
      </button>
    </div>
  );

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#f8fafc] text-[#334155]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#9a7212] font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#09203b] mb-4 leading-tight">
            Everything Your Business Needs Under One Roof
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            Most accounting firms in UAE specialize in one or two areas and refer you elsewhere for the rest. We built our service range specifically so you don't have to manage three different vendors for accounting, tax, and compliance.
          </p>
        </div>

        {/* Auto-scrolling Service Cards Container */}
        <div
          className="relative px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow (Only shown when not at start) */}
          {slideIndex > 0 && (
            <button
              onClick={handlePrev}
              aria-label="Previous Service"
              className="w-10 h-10 rounded-full bg-white border border-gray-300 text-[#09203b] flex items-center justify-center shadow-lg absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 hover:bg-[#c9a227] hover:text-white hover:border-[#c9a227] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow (Only shown when not at end) */}
          {slideIndex < maxSlideIndex && (
            <button
              onClick={handleNext}
              aria-label="Next Service"
              className="w-10 h-10 rounded-full bg-[#09203b] text-[#e8b84b] flex items-center justify-center shadow-lg absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 hover:bg-[#c9a227] hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Smooth Horizontal Slide Track */}
          <div className="overflow-hidden w-full py-4">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-8"
              style={{
                transform: `translateX(-${(slideIndex % services.length) * (100 / itemsPerPage)}%)`,
              }}
            >
              {services.concat(services.slice(0, 3)).map((item, idx) => (
                <div
                  key={`${item.title}-${idx}`}
                  className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] shrink-0"
                >
                  {renderCard(item, idx % services.length)}
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  slideIndex % services.length === idx ? "w-8 bg-[#c9a227]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Business Setup Banner Card (Middle Banner) */}
        <div id="business-setup" className="py-2">
          <div className="bg-[#09203B] border-2 border-[#E8B84B] rounded-2xl p-6 sm:p-8 shadow-lg relative text-white">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#E8B84B]/10 border border-[#E8B84B]/40 text-[#E8B84B] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 fill-current text-[#E8B84B]" />
              <span>OFFICIAL AJMAN FREE ZONE (AFZA) CHANNEL PARTNER & UAE MAINLAND SPECIALISTS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  UAE Business Setup & Company Formation Services
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Establish your UAE entity with 100% foreign ownership, rapid 24–48h licensing across Dubai Mainland and 40+ Free Zones, fully integrated with day-one Corporate Tax registration, VAT structuring, and audit-ready bookkeeping.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="#form"
                  className="group bg-[#E8B84B] hover:bg-[#F4CA68] text-[#09203B] font-extrabold text-xs sm:text-sm py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Explore Setup Hub</span>
                  <ArrowRight className="w-4 h-4 text-[#09203B] group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Setup Quick Links Pills */}
            <div className="mt-5 pt-5 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {quickLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#132c4a] hover:bg-[#1a385c] border border-white/15 hover:border-[#E8B84B]/60 text-gray-200 hover:text-white px-3 py-2 rounded-lg text-[11px] font-semibold flex items-center gap-2 cursor-pointer transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#E8B84B] flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Centered "View All Services" Button at the bottom matching live site */}
        <div className="text-center pt-6">
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-[#ffffff] font-serif font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-md transition-all"
          >
            <span>View All Services</span>
            <span className="text-base">→</span>
          </a>
        </div>

      </div>

      {/* Scope Detail Modal */}
      {activeModal !== null && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border-t-4 border-[#c9a227]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{services[activeModal].emoji}</span>
              <h3 className="text-2xl font-serif font-bold text-[#09203b]">
                {services[activeModal].title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {services[activeModal].desc}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#9a7212] mb-3">
              Core Deliverables Checklist:
            </h4>

            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              {services[activeModal].checklist.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-[#f8fafc] p-2.5 rounded-lg border border-gray-200">
                  <Check className="w-4 h-4 text-[#c9a227] font-bold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a
                href="#form"
                onClick={() => setActiveModal(null)}
                className="flex-1 text-center bg-[#e8b84b] hover:bg-[#f4ca68] text-[#09203b] font-extrabold py-3 rounded-lg text-sm"
              >
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/971508051857"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-lg text-sm"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
