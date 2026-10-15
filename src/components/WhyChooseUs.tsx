"use client";

import React from "react";
import { Check, Coins, Lock, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Check,
      title: "FTA-Approved Tax Agents",
      desc: "Registered with the Federal Tax Authority — your VAT, Corporate Tax and compliance handled by government-certified professionals.",
    },
    {
      icon: Coins,
      title: "Fixed, Transparent Pricing",
      desc: "Agree your monthly fee upfront. No hourly billing, no surprise invoices — ever.",
    },
    {
      icon: Lock,
      title: "100% Confidential & Secure",
      desc: "Your financial data is handled with the highest security standards on every engagement.",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      desc: "We serve UAE's diverse business community in English, Arabic, Urdu, Hindi, and more — communication in your preferred language.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative w-full py-16 lg:py-24 bg-[#09203b] text-white border-y border-[#c9a227]/30 min-h-[calc(100vh-84px)] flex items-center">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full py-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Office Consultation Photo (Vertical Portrait matching live site) */}
          <div className="lg:col-span-5 h-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d1b2a] h-full min-h-[480px] lg:min-h-[540px]">
              <img
                src="/wp-content/uploads/2026/06/contact1.jpg"
                alt="Why Businesses Choose RBO Accounting Services"
                className="w-full h-full object-cover object-top absolute inset-0"
              />
            </div>
          </div>

          {/* Right Column: Copy & 4 Stacked Feature Items */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Subtitle Tag & Heading */}
            <div>
              <span className="text-[#e8b84b] font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
                WHY CHOOSE RBO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-serif font-bold text-white leading-[1.25] mb-4">
                Why Businesses Choose RBO Over Other Accounting Firms in UAE
              </h2>
              <p className="text-[#94a3b8] text-sm sm:text-[15px] leading-relaxed font-normal max-w-2xl">
                Our clients tend to stay with us because they get a dedicated point of contact who actually knows their business, transparent pricing with no surprise add-ons, and turnaround times that respect your deadlines instead of running up against them.
              </p>
            </div>

            {/* 4 Feature Items */}
            <div className="space-y-5 pt-2">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0d2646] border border-[#e8b84b]/35 text-[#e8b84b] flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-[17px] font-serif font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
