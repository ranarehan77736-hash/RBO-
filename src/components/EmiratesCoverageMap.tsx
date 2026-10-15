"use client";

import React, { useState } from "react";

export default function EmiratesCoverageMap() {
  const [activeEmirate, setActiveEmirate] = useState(0);

  const emirates = [
    { name: "Dubai", mapQuery: "Dubai+UAE" },
    { name: "Abu Dhabi", mapQuery: "Abu+Dhabi+UAE" },
    { name: "Sharjah", mapQuery: "Sharjah+UAE" },
    { name: "Ajman", mapQuery: "Ajman+Free+Zone" },
    { name: "Ras Al Khaimah", mapQuery: "Ras+Al+Khaimah+UAE" },
    { name: "Fujairah", mapQuery: "Fujairah+UAE" },
    { name: "Umm Al Quwain", mapQuery: "Umm+Al+Quwain+UAE" },
  ];

  return (
    <div className="w-full">
      {/* 7 Horizontal Emirate Tab Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
        {emirates.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveEmirate(idx)}
            className={`py-2 px-4 sm:px-5 rounded-lg text-xs sm:text-sm font-bold transition-all text-center ${
              activeEmirate === idx
                ? "bg-[#E8B84B] text-white shadow-sm"
                : "bg-gray-200/90 text-[#09203B] hover:bg-gray-300 font-semibold"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Interactive Google Map Embed */}
      <div className="w-full h-[180px] sm:h-[220px] rounded-lg overflow-hidden border border-gray-200/80 shadow-md relative bg-gray-100">
        <iframe
          key={activeEmirate}
          title={`Map of ${emirates[activeEmirate].name}`}
          className="w-full h-full border-0"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(emirates[activeEmirate].mapQuery)}&t=m&z=11&output=embed&iwloc=near`}
        />
      </div>
    </div>
  );
}

