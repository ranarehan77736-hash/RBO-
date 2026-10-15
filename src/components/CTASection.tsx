"use client";

import React from "react";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-[#A87E2B] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Static Heading */}
        <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white mb-4 tracking-tight">
          Ready to Stop Worrying About Compliance?
        </h2>

        {/* Static Paragraph */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-4xl mx-auto leading-relaxed mb-8 font-normal">
          If you&apos;re comparing accounting firms in UAE and want a team that actually answers the phone and explains things clearly, get in touch with RBO Accounting Services FZE today. Book a free consultation, and we&apos;ll walk through your current setup and where we can genuinely add value.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#09203B] hover:bg-[#061528] text-white font-bold py-3.5 px-6 rounded-lg text-sm inline-flex items-center justify-center gap-1.5 transition-colors shadow-lg"
          >
            <span>Get Free Consultation &rarr;</span>
          </a>
          <a
            href="https://wa.me/971508051857"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 border border-white/60 text-white font-bold py-3.5 px-6 rounded-xl text-sm inline-flex items-center justify-center gap-2.5 transition-colors shadow-md"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#90CDF4"
                d="M20 12c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 1.61.55 3.09 1.48 4.28L6.5 19.5l3.35-.97C10.74 18.82 11.84 19 13 19c3.87 0 7-3.13 7-7z"
              />
              <circle cx="10.2" cy="12" r="1.1" fill="#09203B" />
              <circle cx="13" cy="12" r="1.1" fill="#09203B" />
              <circle cx="15.8" cy="12" r="1.1" fill="#09203B" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Office Hours Note */}
        <p className="text-white/95 text-xs sm:text-sm font-semibold pt-6 text-center opacity-95">
          Office Hours: Monday to Saturday, 8:00 AM – 6:00 PM
        </p>

      </div>
    </section>
  );
}
