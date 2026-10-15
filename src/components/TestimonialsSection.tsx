"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Check, X } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Gouali Abderrah...",
      fullName: "Gouali Abderrahmane",
      timeAgo: "3 months ago",
      initialLetter: "G",
      letterBg: "bg-[#00796b]",
      comment:
        "We have been working with RBO and are extremely satisfied with their support. The team is always attentive, professional, and knowledgeable about UAE tax laws.",
      shortDesc:
        "We have been working with RBO and are extremely satisfied with their support. The team is always attentive...",
      rating: 5,
    },
    {
      name: "Sajawal Nazir",
      fullName: "Sajawal Nazir",
      timeAgo: "3 months ago",
      avatarImg:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      comment:
        "Super fast, highly responsive, and always ready with clear answers to every query. Their service is efficient, reliable, and hassle-free.",
      shortDesc:
        "Super fast, highly responsive, and always ready with clear answers to every query. Their service is efficient,...",
      rating: 5,
    },
    {
      name: "Shakir Ali",
      fullName: "Shakir Ali",
      timeAgo: "3 months ago",
      avatarImg:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      comment:
        "Excellent service from RBO Accounting Services FZE. They handled the entire FTA input tax refund process from start to finish without any hassle.",
      shortDesc:
        "Excellent service from RBO Accounting Services FZE. They handled the entire FTA input tax refund process from star...",
      rating: 5,
    },
    {
      name: "Ramzan Ali",
      fullName: "Ramzan Ali",
      timeAgo: "3 months ago",
      avatarImg:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      comment:
        "Thanks RBO Team for helping me in vat returns it was truly awesome to have such professional services for our business.",
      shortDesc:
        "Thanks RBO Team for helping me in vat returns it was truly awesome to have such professional services",
      rating: 5,
    },
    {
      name: "Tariq Al-Hashemi",
      fullName: "Tariq Al-Hashemi",
      timeAgo: "2 months ago",
      avatarImg:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      comment:
        "RBO Accounting handled our corporate tax registration and annual audit seamlessly. Their team is extremely knowledgeable about FTA regulations.",
      shortDesc:
        "RBO Accounting handled our corporate tax registration and annual audit seamlessly. Their team is extremely knowledgeable...",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      fullName: "Elena Rostova",
      timeAgo: "4 months ago",
      avatarImg:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      comment:
        "Switching our monthly bookkeeping and VAT return filing to RBO was the best decision for our company. Clear fixed pricing and zero surprise bills!",
      shortDesc:
        "Switching our monthly bookkeeping and VAT return filing to RBO was the best decision for our company. Clear fixed pricing...",
      rating: 5,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const maxStartIndex = Math.max(0, reviews.length - 3);

  // Auto-scroll every 4.5 seconds (pauses on hover or modal open)
  React.useEffect(() => {
    if (isPaused || selectedReview !== null) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, selectedReview, maxStartIndex]);

  const handleNext = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  // Get 3 items starting at startIndex
  const visibleReviews = reviews.slice(startIndex, startIndex + 3);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#c9a227] font-bold text-xs uppercase tracking-widest block mb-2 font-sans">
            CLIENT REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#09203b] leading-tight mb-3">
            What Our Clients Say About RBO Accounting
          </h2>
          <p className="text-[#64748b] text-xs sm:text-sm font-normal leading-relaxed">
            Trusted by businesses across all UAE Emirates. Here's what our clients share about working with us.
          </p>
        </div>

        {/* Main Grid: Left Google Overall Rating Badge + Right 3 Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: EXCELLENT Google Rating Badge */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#09203b] tracking-wider mb-2 font-sans">
              EXCELLENT
            </h3>

            {/* 5 Stars */}
            <div className="flex items-center gap-1 text-[#f59e0b] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current stroke-none" />
              ))}
            </div>

            <p className="text-xs font-semibold text-gray-700 mb-3">
              Based on <strong className="text-black">7 reviews</strong>
            </p>

            {/* Multicolor Google Logo */}
            <div className="text-2xl font-extrabold tracking-tight">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
          </div>

          {/* Right Column: Carousel Container with Left/Right Arrows & 3 Cards */}
          <div
            className="lg:col-span-9 relative px-2 sm:px-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Left Navigation Arrow (Only shown when not at start) */}
            {startIndex > 0 && (
              <button
                onClick={handlePrev}
                aria-label="Previous Reviews"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center shadow-md absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Right Navigation Arrow (Only shown when not at end) */}
            {startIndex < maxStartIndex && (
              <button
                onClick={handleNext}
                aria-label="Next Reviews"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center shadow-md absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Smooth Horizontal Slide Track */}
            <div className="overflow-hidden w-full py-2">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-5"
                style={{
                  transform: `translateX(-${startIndex * (100 / 3)}%)`,
                }}
              >
                {reviews.map((rev, idx) => (
                  <div
                    key={`${rev.name}-${idx}`}
                    className="w-full md:w-[calc(33.333%-13.33px)] shrink-0 bg-[#f4f4f6] rounded-2xl p-6 border border-gray-200/60 shadow-2xs flex flex-col justify-between min-h-[235px] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div>
                      {/* Header: Profile Photo or Letter Avatar, Name, TimeAgo & Google G */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {rev.avatarImg ? (
                            <img
                              src={rev.avatarImg}
                              alt={rev.name}
                              className="w-11 h-11 rounded-full object-cover shrink-0 shadow-xs border border-gray-200"
                            />
                          ) : (
                            <div
                              className={`w-11 h-11 rounded-full ${
                                rev.letterBg || "bg-[#00796b]"
                              } text-white font-bold text-base flex items-center justify-center shrink-0 shadow-xs`}
                            >
                              {rev.initialLetter || "G"}
                            </div>
                          )}
                          <div>
                            <h4 className="font-bold text-[#09203b] text-sm sm:text-base leading-tight">
                              {rev.name}
                            </h4>
                            <span className="text-[11px] text-gray-500 block mt-0.5">
                              {rev.timeAgo}
                            </span>
                          </div>
                        </div>

                        {/* Google G Emblem */}
                        <div className="w-6 h-6 shrink-0 flex items-center justify-center font-bold text-sm">
                          <span className="text-[#4285F4]">G</span>
                        </div>
                      </div>

                      {/* Rating Stars & Blue Verified Badge */}
                      <div className="flex items-center gap-1 mb-3.5">
                        <div className="flex text-[#f59e0b]">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                          ))}
                        </div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#1d9bf0] text-white flex items-center justify-center text-[8px] font-bold ml-1">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-[#09203b] text-[14px] sm:text-[15px] leading-[1.6] font-medium mb-4 line-clamp-4">
                        {rev.shortDesc}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <div>
                      <button
                        onClick={() => setSelectedReview(rev)}
                        className="text-[13px] text-gray-400 hover:text-gray-700 font-normal transition-colors cursor-pointer"
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Review Modal Popup */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl border-t-4 border-[#c9a227]">
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={selectedReview.avatarImg}
                alt={selectedReview.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h3 className="font-bold text-[#09203b] text-base">
                  {selectedReview.name}
                </h3>
                <span className="text-xs text-gray-500">{selectedReview.timeAgo}</span>
              </div>
            </div>

            <div className="flex text-[#f59e0b] mb-4">
              {[...Array(selectedReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current stroke-none" />
              ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-6 font-normal">
              "{selectedReview.comment}"
            </p>

            <button
              onClick={() => setSelectedReview(null)}
              className="w-full bg-[#09203b] hover:bg-[#0d2646] text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


