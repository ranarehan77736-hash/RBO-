"use client";

import React from "react";
import { Star, ArrowRight, Building, FileCheck, Layers, Package, Globe } from "lucide-react";

export default function BusinessSetupBanner() {
  const quickLinks = [
    { icon: Building, text: "Ajman Free Zone (AFZA)" },
    { icon: Layers, text: "Mainland vs Free Zone Guide" },
    { icon: Globe, text: "Dubai Business Setup" },
    { icon: FileCheck, text: "5-Step Trade Licence Process" },
    { icon: Package, text: "All-Inclusive Setup Packages" },
  ];

  return (
    <section id="business-setup" className="py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-[#09203B] via-[#0D2646] to-[#09203B] border-2 border-[#E8B84B] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-white">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8B84B]/20 border border-[#E8B84B]/50 text-[#E8B84B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Star className="w-4 h-4 fill-current text-[#E8B84B]" />
            <span>Official Ajman Free Zone (AFZA) Channel Partner & UAE Mainland Specialists</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white leading-tight">
                UAE Business Setup & Company Formation Services
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Establish your UAE entity with 100% foreign ownership, rapid 24–48h licensing across Dubai Mainland and 40+ Free Zones, fully integrated with day-one Corporate Tax registration, VAT structuring, and audit-ready bookkeeping.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#form"
                className="bg-gradient-to-r from-[#E8B84B] to-[#F4CA68] hover:from-[#F4CA68] hover:to-[#E8B84B] text-[#09203B] font-extrabold text-sm py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Explore Setup Hub</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Setup Quick Links Pills */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 hover:bg-[#E8B84B]/20 border border-white/20 hover:border-[#E8B84B] text-gray-200 hover:text-white p-3 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-[#E8B84B] flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
