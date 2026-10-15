import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Accounting Firm in Ras Al Khaimah | RBO Accounting Services",
  description: "Bookkeeping, VAT returns, Corporate Tax, and RAKEZ audit reporting for businesses in Ras Al Khaimah (RAK).",
};

export default function RAKPage() {
  return (
    <SubpageLayout
      badge="RAK & RAKEZ ACCOUNTING SERVICES"
      title="Accounting Firm"
      highlightedTitle="in Ras Al Khaimah"
      description="Professional accounting, Corporate Tax registration, VAT filing, and statutory audit compliance for RAKEZ free zone and RAK Mainland entities."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">RAKEZ & RAK Corporate Accounting</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            We support industrial, logistics, and trading companies across RAKEZ with tailored accounting workflows and annual audit statements.
          </p>
        </div>
      }
      faqs={[
        { q: "Do you assist RAKEZ licensed companies?", a: "Yes, we handle complete accounting, Corporate Tax, and approved annual audit reporting for RAKEZ entities." },
      ]}
    />
  );
}
