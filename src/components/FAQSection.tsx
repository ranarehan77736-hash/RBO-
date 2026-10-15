"use client";

import React, { useState } from "react";
import { ChevronsDown, ChevronsUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are the best accounting firms in UAE?",
      a: "The best accounting firms in UAE are the ones registered with the Federal Tax Authority, staffed by qualified chartered accountants, and transparent about pricing and turnaround times. Look for a firm that explains its reasoning rather than just delivering a report.",
    },
    {
      q: "What services do accounting firms in Dubai typically provide?",
      a: "Accounting firms in Dubai offer comprehensive bookkeeping, VAT registration & return filing, Corporate Tax registration & filing, audited financial statements, WPS payroll processing, and FTA penalty reconsideration.",
    },
    {
      q: "How much do accounting services cost in the UAE?",
      a: "Costs vary depending on your monthly transaction volume and company size. Small to medium businesses typically pay between AED 1,000 to AED 3,500 per month for full-scope bookkeeping, VAT compliance, and reporting.",
    },
    {
      q: "Why does it matter if a firm is an FTA approved tax agency?",
      a: "FTA-approved tax agencies have certified Tax Agents legally authorized to represent your company directly with the Federal Tax Authority, handle official tax audits, and file formal reconsideration applications.",
    },
    {
      q: "How do I choose the right accounting firm in UAE for my business?",
      a: "Look for official FTA tax agency status, qualified chartered accountants (ACCA/CA), transparent pricing without hidden charges, fast turnarounds, and experience in your specific industry.",
    },
    {
      q: "Do you support startups and small businesses?",
      a: "Yes! We provide flexible, affordable accounting packages specifically tailored for startups, SMEs, and free zone entities across Dubai, Abu Dhabi, Ajman, and all 7 Emirates.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#09203B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: FAQ Accordions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[#C9A227] font-bold text-xs uppercase tracking-widest block mb-2">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#09203B] tracking-tight mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Everything UAE businesses ask about accounting, VAT, and Corporate Tax — answered by our experts.
              </p>
            </div>

            {/* Animated Accordion List */}
            <div className="space-y-3 pt-2">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl shadow-xs transition-shadow duration-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className={`w-full text-left py-3.5 px-5 flex justify-between items-center gap-4 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0D1B2A] text-[#E8B84B] rounded-t-xl"
                          : "bg-[#0D1B2A] text-white hover:bg-[#112338] rounded-xl"
                      }`}
                    >
                      <span className="font-serif font-semibold text-sm sm:text-base leading-snug">
                        {faq.q}
                      </span>
                      
                      {/* Animated Double Caret Icon */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        {isOpen ? (
                          <ChevronsUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronsDown className="w-5 h-5 text-[#E8B84B]" />
                        )}
                      </motion.div>
                    </button>

                    {/* Smooth Height Expand/Collapse Animation */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="bg-white border border-[#0D1B2A]/15 p-5 rounded-b-xl text-gray-600 text-xs sm:text-sm leading-relaxed shadow-xs">
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

          {/* Right Column: Expert Consultation Card in #0D1B2A (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0D1B2A] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#E8B84B]/20 sticky top-28 flex flex-col items-start"
            >
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3 leading-snug">
                Still Have Questions? Talk to an Expert
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
                Our accounting specialists are available to guide you on the best financial path for your UAE business.
              </p>

              {/* Bullet Checklist */}
              <ul className="space-y-3.5 mb-8">
                {[
                  "Free 30-minute consultation",
                  "No commitment required",
                  "Reply within 10 minutes",
                  "WhatsApp available",
                  "English, Arabic, Urdu support",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                    className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 font-medium"
                  >
                    <Check className="w-4 h-4 text-[#D49D28] stroke-[3] flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col items-start space-y-3.5 w-full">
                <a
                  href="#contact"
                  className="bg-[#D49D28] hover:bg-[#C28C1B] text-white font-bold py-3 px-6 rounded-lg text-xs sm:text-sm inline-flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Book Free Consultation &rarr;
                </a>
                <a
                  href="https://wa.me/971508051857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/10 border border-white/60 text-white font-bold py-3.5 px-6 rounded-xl text-sm inline-flex items-center justify-center gap-2.5 transition-all shadow-md"
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
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
