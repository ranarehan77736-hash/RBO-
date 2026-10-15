import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Virtual CFO Services UAE | Strategic Financial Advisory",
  description: "Part-time & Virtual CFO services in Dubai & UAE. Cash flow forecasting, budgeting, investor reporting, and high-level strategic financial leadership.",
};

export default function VirtualCFOPage() {
  return (
    <SubpageLayout
      badge="STRATEGIC FINANCIAL LEADERSHIP"
      title="Virtual CFO Services"
      highlightedTitle="in UAE"
      description="Gain executive-level financial leadership, cash flow forecasting, budgeting, and fundraising advisory at a fraction of the cost of a full-time CFO."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">High-Impact Financial Strategy for Growing Entities</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our experienced CFOs partner with your management team to drive growth, control burn rates, model financial scenarios, and prepare investor-ready pitch decks.
          </p>
        </div>
      }
      faqs={[
        { q: "What is the difference between a Virtual CFO and an accountant?", a: "An accountant focuses on past recording and tax filings, whereas a Virtual CFO focuses on forward-looking strategy, cash planning, and business growth." },
      ]}
    />
  );
}
