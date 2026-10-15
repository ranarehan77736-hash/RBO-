"use client";

import React from "react";
import { BarChart3, Clock, Handshake } from "lucide-react";

export default function WhoWeAre() {
  const cards = [
    {
      icon: BarChart3,
      title: "Proactive Financial Guidance",
      desc: "We don't just record transactions—we monitor your finances, highlight potential issues early.",
    },
    {
      icon: Clock,
      title: "Reliable & Timely Support",
      desc: "We ensure you receive prompt assistance for urgent accounting, VAT, payroll, and compliance matters.",
    },
    {
      icon: Handshake,
      title: "Transparent & Client-Focused Service",
      desc: "We value long-term partnerships built on trust, honesty, and clear communication.",
    },
  ];

  return (
    <section id="who-we-are" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-gray-200/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Office Image with Glass RBO Logo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <img
                src="/wp-content/uploads/2026/06/who_we_are_office.jpg"
                alt="RBO Accounting Services Office"
                className="w-full h-auto max-h-[580px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Copy & 3 Gold-Bordered Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag & Heading */}
            <div>
              <span className="text-[#c9a227] font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-serif font-bold text-[#09203b] leading-[1.25] mb-4">
                Trusted Accounting & Financial Experts for UAE Businesses
              </h2>
              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                At <strong className="text-[#09203b]">RBO Accounting Services FZE</strong>, we believe accounting should do more than balance the books—it should help businesses make confident financial decisions. We provide reliable accounting, bookkeeping, VAT, payroll, and financial advisory services tailored for startups, SMEs, and established companies across the UAE.
              </p>
            </div>

            {/* 3 Gold Left-Bordered Cards */}
            <div className="space-y-4 pt-1">
              {cards.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 border-l-[5px] border-l-[#e8b84b] flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-[#09203b]/5 text-[#09203b] shrink-0">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-[17px] font-bold text-[#09203b] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
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
