"use client";

import React, { useState, useEffect } from "react";
import { Check, ArrowRight, Lock, MessageSquare, ChevronDown } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";

export default function HeroSection() {
  const heroImages = [
    "/wp-content/uploads/2026/06/hero_office_bg.jpg",
    "/wp-content/uploads/2026/06/contact1.jpg",
    "/wp-content/uploads/2026/08/What-Is-VAT-Return-Filing-and-Who-Needs-to-Do-It-e1786297249992.webp",
    "/wp-content/uploads/2026/08/Why-Bookkeeping-and-Accounting-Matter-for-Your-Business-e1786291552387.webp",
    "/wp-content/uploads/2026/08/Who-Needs-VAT-Registration-in-the-UAE-e1786296002138.webp",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  // 5000ms slide duration matching Elementor background_slideshow_slide_duration: 5000
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "---Select Service---",
    emirate: "---Your Emirate---",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-[#0a1420] text-white py-12 lg:py-16 border-b-4 border-[#c9a227] overflow-hidden min-h-[calc(100vh-84px)] flex items-center">

      {/* Elementor Ken Burns Zoom-In + Fade Slideshow Animation */}
      {heroImages.map((imgUrl, index) => {
        const isActive = index === currentBg;
        return (
          <div
            key={imgUrl}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center pointer-events-none ${isActive ? "opacity-85" : "opacity-0"
              }`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(9, 25, 45, 0.72) 0%, rgba(13, 27, 42, 0.65) 50%, rgba(0, 0, 0, 0.75) 100%), url('${imgUrl}')`,
              transform: isActive ? "scale(1.15)" : "scale(1.0)",
              transition: "opacity 1000ms ease-in-out, transform 5500ms linear",
            }}
          />
        );
      })}

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6">

            {/* Pill Tag */}
            <div className="inline-block border border-[#e8b84b] text-[#e8b84b] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-[#09203b]/80 backdrop-blur-sm">
              ✓ FTA-Approved Accounting Firm in UAE
            </div>

            {/* Exact Headline matching live screenshot typography & weights */}
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-serif leading-[1.2] tracking-tight">
              <span className="font-semibold text-white">Accounting </span>
              <span className="font-extrabold text-[#e8b84b]">Firms in UAE</span>
              <br />
              <span className="font-extrabold text-[#e8b84b]">Your Business </span>
              <span className="font-semibold text-white">– Can Actually</span>
              <br />
              <span className="font-semibold text-white">Rely On</span>
            </h1>

            {/* Paragraph matching live site */}
            <p className="text-[#e2e8f0] text-[15px] sm:text-[16px] leading-[1.7] font-normal max-w-2xl text-shadow-sm">
              Running a business in the UAE means juggling VAT deadlines, corporate tax filings, payroll compliance, and day-to-day bookkeeping — often all at once. RBO Accounting Services FZE exists to take that weight off your shoulders. As one of the dependable accounting firms in UAE, we combine local regulatory knowledge with practical, hands-on support so you can focus on running your business instead of chasing paperwork.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a
                href="#form"
                className="bg-[#e8b84b] hover:bg-[#f4ca68] text-[#09203b] font-extrabold text-sm py-3.5 px-6 rounded-lg shadow-lg transition-all flex items-center justify-center gap-1.5"
              >
                <span>Book a Free Consultation →</span>
              </a>

              <a
                href="https://wa.me/971508051857"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/60 bg-transparent hover:bg-white/10 text-white font-bold text-sm sm:text-base py-3 px-6 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0"
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

            {/* Trust Checklist - Column Layout matching live site */}
            <div className="flex flex-col space-y-2.5 pt-3 text-xs sm:text-[13px] font-bold text-white">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#e8b84b] stroke-[3] shrink-0" />
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#e8b84b] stroke-[3] shrink-0" />
                <span>7 Emirates Covered</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#e8b84b] stroke-[3] shrink-0" />
                <span>100% FTA Compliant Solutions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Consultation Card matching live site 100% */}
          <div className="lg:col-span-5" id="form">
            <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-2xl max-w-[440px] ml-auto text-[#09203B]">

              <div className="text-left mb-6">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#09203B] mb-2 leading-snug">
                  Get a Free Consultation
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-normal">
                  Our expert will reply within 10 minutes
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#09203B]">Thank You!</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Your request has been received. Our expert will reply within 10 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#D49D28] underline font-semibold"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#09203B] placeholder-gray-500 focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#09203B] placeholder-gray-500 focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-[#09203B] placeholder-gray-500 focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full appearance-none bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-4 py-3 pr-10 text-sm text-[#09203B] focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                    >
                      <option value="---Select Service---">Select Service</option>
                      <option value="Bookkeeping & Accounting">Bookkeeping & Accounting</option>
                      <option value="VAT Registration / Filing">VAT Registration / Filing</option>
                      <option value="Corporate Tax UAE">Corporate Tax UAE</option>
                      <option value="Audit Services">Audit Services</option>
                      <option value="Payroll Services">Payroll Services</option>
                      <option value="Virtual CFO">Virtual CFO</option>
                      <option value="AML Compliance">AML Compliance</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#D49D28]">
                      <FaCaretDown className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      value={formData.emirate}
                      onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                      className="w-full appearance-none bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-4 py-3 pr-10 text-sm text-[#09203B] focus:outline-none focus:border-[#D49D28] focus:bg-white transition-all"
                    >
                      <option value="---Your Emirate---">Your Emirate</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Fujairah">Fujairah</option>
                      <option value="Umm Al Quwain">Umm Al Quwain</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#D49D28]">
                      <FaCaretDown className="w-5 h-5" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D49D28] hover:bg-[#C28C1B] text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    Request Free Consultation &rarr;
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600 pt-2 font-medium text-center">
                    <Lock className="w-3.5 h-3.5 text-[#D49D28] shrink-0" />
                    <span>Your information is 100% secure and confidential</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

