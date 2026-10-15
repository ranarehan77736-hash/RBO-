"use client";

import React from "react";

export default function MarqueeBanner() {
  const items = [
    "FTA Registered Tax Agent",
    "200+ UAE Businesses",
    "All 7 Emirates Covered",
    "10min Average Response Time",
    "24/7 WhatsApp Support",
    "100% Tax & Legal Compliance",
  ];

  return (
    <div className="w-full bg-[#061528] border-y border-[#E8B84B]/30 py-3.5 overflow-hidden">
      <div className="animate-marquee flex items-center space-x-8">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-8 whitespace-nowrap">
            <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="text-[#E8B84B]">◆</span>
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
