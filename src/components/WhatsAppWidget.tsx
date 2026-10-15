"use client";

import React, { useState, useEffect } from "react";
import { X, Send, ChevronUp } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSend = () => {
    const text = message.trim()
      ? encodeURIComponent(message)
      : encodeURIComponent("Hello RBO Accounting, I would like to inquire about your VAT and Accounting services.");
    window.open(`https://wa.me/971508051857?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* WhatsApp Popup Window */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 bg-[#0D2646] border-2 border-[#25D366] rounded-2xl shadow-2xl overflow-hidden text-white animate-fadeIn">
          
          {/* Popup Header */}
          <div className="bg-[#25D366] p-4 text-[#09203B] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#09203B] text-[#E8B84B] font-serif font-extrabold flex items-center justify-center text-sm shadow">
                RBO
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm leading-tight text-[#09203B]">
                  RBO Accounting Support
                </h4>
                <span className="text-[10px] text-[#09203B]/80 font-semibold block">
                  Typically replies in 10 mins
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#09203B] hover:text-black p-1 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Popup Body */}
          <div className="p-4 space-y-3 bg-[#061528] text-xs">
            <div className="bg-[#0D2646] p-3 rounded-xl border border-white/10 text-gray-200">
              <p className="font-semibold text-[#E8B84B] mb-1">
                👋 Hello! Welcome to RBO Accounting Services.
              </p>
              <p>
                How can we assist your business today with VAT, Corporate Tax, Bookkeeping, or Business Setup in the UAE?
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <input
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="w-full bg-[#09203B] border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#25D366]"
              />
              <button
                onClick={handleSend}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Start Chat on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Floating Trigger: Speech Bubble Pill + Green Circle WhatsApp Icon */}
      <div className="flex flex-col items-end gap-3">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollTop}
          className={`w-10 h-10 bg-white border border-gray-100 shadow-xl rounded-full flex items-center justify-center transition-all duration-300 transform hover:bg-gray-50 hover:-translate-y-1 ${
            showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-[#E8B84B] stroke-[3]" />
        </button>

        <div className="flex items-center gap-3">
        {/* Chat with Us speech bubble */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-white text-[#222222] font-sans text-xs sm:text-sm font-medium px-4 py-2 rounded-2xl shadow-xl cursor-pointer hover:bg-gray-50 transition-all select-none border border-gray-100 flex items-center"
        >
          <span>Chat with Us</span>
          {/* Speech bubble pointer arrow on the right pointing to green circle */}
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white drop-shadow-xs" />
        </div>

        {/* WhatsApp Green Circle Button */}
        <a
          href="https://wa.me/971508051857"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isOpen) {
              e.preventDefault();
              setIsOpen(false);
            }
          }}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform transform hover:scale-105 active:scale-95 flex-shrink-0"
          aria-label="Chat with Us on WhatsApp"
        >
          {/* Official WhatsApp SVG Icon matching user's screenshot 100% */}
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
        </div>
      </div>

    </div>
  );
}
