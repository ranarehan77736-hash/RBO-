import React from "react";
import SubpageLayout from "@/components/SubpageLayout";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Us | RBO Accounting Services FZE | Ajman & Dubai UAE",
  description: "Contact RBO Accounting Services FZE. HQ Office in Ajman Free Zone, serving Dubai & across UAE. Call +971 50 805 1857 or chat on WhatsApp.",
};

export default function ContactUsPage() {
  return (
    <SubpageLayout
      badge="GET IN TOUCH WITH OUR CERTIFIED TEAM"
      title="Contact RBO Accounting Services FZE"
      highlightedTitle=""
      description="Have questions about Corporate Tax, VAT filing, monthly bookkeeping, or starting a new UAE business? Speak directly with our certified advisors today."
      content={
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#09203b]">
              Our Contact Information
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our expert team is available 6 days a week to support your business operations across Ajman, Dubai, Abu Dhabi, and all 7 Emirates.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#09203b] text-[#e8b84b] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Phone / Call</div>
                  <div className="text-base font-bold text-[#09203b]">+971 50 805 1857</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#25D366] uppercase tracking-wider">WhatsApp Instant Chat</div>
                  <a href="https://wa.me/971508051857" target="_blank" rel="noopener" className="text-base font-bold text-[#09203b] hover:underline">
                    +971 50 805 1857
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#09203b] text-[#e8b84b] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">HQ Address</div>
                  <div className="text-sm font-semibold text-[#09203b]">Ajman Free Zone (AFZA), Ajman, UAE</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#09203b] text-[#e8b84b] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#c9a227] uppercase tracking-wider">Working Hours</div>
                  <div className="text-sm font-semibold text-[#09203b]">Mon - Sat: 9:00 AM - 6:00 PM GST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-gray-200 shadow-xl space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#09203b]">
              Send Us a Message
            </h3>
            <p className="text-xs text-gray-500">
              Fill out the form below and an FTA tax consultant will reply within 10 minutes.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227]"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number / WhatsApp"
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227]"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227]"
              />
              <textarea
                rows={4}
                placeholder="How can we assist your business?"
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227]"
              />
              <button
                type="submit"
                className="w-full bg-[#e8b84b] hover:bg-[#f4ca68] text-[#09203b] font-extrabold text-sm py-4 rounded-xl shadow-lg transition-all"
              >
                Submit Consultation Request →
              </button>
            </form>
          </div>
        </div>
      }
      faqs={[
        { q: "How quickly will you reply to my message?", a: "During business hours, our consultants reply via WhatsApp or phone call within 10 minutes." },
      ]}
    />
  );
}
