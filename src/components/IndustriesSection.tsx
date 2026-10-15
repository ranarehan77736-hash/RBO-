"use client";

import React from "react";
import { Zap, ShoppingCart, Utensils, Truck, Globe } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Zap,
      title: "Startups & SMEs",
      desc: "Building their first proper financial systems.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      desc: "High-volume transactions and multi-channel reconciliation.",
    },
    {
      icon: Utensils,
      title: "Restaurants & Hospitality",
      desc: "Tight margins and cash-heavy daily operations.",
    },
    {
      icon: Truck,
      title: "Trading & Import-Export",
      desc: "Cross-border VAT questions and logistics.",
    },
    {
      icon: Globe,
      title: "Multinational Entities",
      desc: "Coordinated reporting across jurisdictions.",
    },
  ];

  return (
    <section id="industries" className="py-16 sm:py-20 bg-[#faf8f5] border-b border-gray-200/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#c9a227] font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
            Industries we serve
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#09203b] leading-tight mb-3">
            Industries We Understand
          </h2>
          <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
            Different industries face different financial pressures, and generic advice rarely holds up in practice.
          </p>
        </div>

        {/* 5 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-start group cursor-pointer min-h-[220px]"
              >
                {/* Yellow Circle Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-[#e8b84b] text-[#09203b] flex items-center justify-center mb-5 shadow-xs group-hover:bg-[#c9a227] group-hover:text-white transition-colors duration-300 shrink-0">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#09203b] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#64748b] text-xs leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
