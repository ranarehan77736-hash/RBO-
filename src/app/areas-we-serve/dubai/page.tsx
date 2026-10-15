import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Accounting Firm in Dubai | RBO Accounting Services",
  description: "Dependable accounting firm in Dubai. Bookkeeping, Corporate Tax, VAT returns, audit assurance, and company formation across Business Bay, DIFC, DMCC & Dubai Mainland.",
};

export default function DubaiPage() {
  return (
    <SubpageLayout
      badge="DUBAI ACCOUNTING & TAX SPECIALISTS"
      title="Dependable Accounting Firm"
      highlightedTitle="in Dubai"
      description="Tailored accounting, VAT, Corporate Tax, and audit solutions for businesses operating in Business Bay, Downtown, DIFC, DMCC, JAFZA, DAFZA, and Dubai Mainland."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">Leading Accounting & Tax Services in Dubai</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Dubai's fast-paced commercial market demands precise, audit-ready financial management. We handle your daily bookkeeping, monthly VAT returns, annual Corporate Tax filings, and Free Zone audit requirements seamlessly.
          </p>
        </div>
      }
      faqs={[
        { q: "Do you visit our Dubai office for document reviews?", a: "Yes, our senior accounting consultants conduct scheduled on-site visits across all Dubai business hubs." },
      ]}
    />
  );
}
