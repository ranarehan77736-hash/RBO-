"use client";

import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Free Consultation",
      desc: "Contact us via phone, WhatsApp or our form. We discuss your business needs at no cost.",
    },
    {
      step: "2",
      title: "Custom Proposal",
      desc: "We prepare a tailored proposal with fixed, transparent pricing — no hidden fees.",
    },
    {
      step: "3",
      title: "Onboarding & Setup",
      desc: "We onboard your business, set up cloud accounting software, and handle FTA registrations.",
    },
    {
      step: "4",
      title: "Ongoing Management",
      desc: "We manage your books, taxes, payroll, and compliance — with zero hassle.",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-[#faf8f5] text-[#334155] border-b border-gray-200/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#c9a227] font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
            OUR PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#09203b] leading-tight mb-3">
            How We Get Your Finances in Order — In 4 Simple Steps
          </h2>
          <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
            From first contact to ongoing compliance — our proven process makes getting started simple, fast, and stress-free.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-start group cursor-pointer"
            >
              {/* Number Badge */}
              <div className="w-10 h-10 rounded-full bg-[#09203b] text-[#e8b84b] font-bold text-sm flex items-center justify-center mb-4 shadow-xs group-hover:bg-[#c9a227] group-hover:text-[#09203b] transition-colors duration-300">
                {item.step}
              </div>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#09203b] mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="text-[#64748b] text-xs leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
