import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Accounting Firm in Umm Al Quwain | RBO Accounting Services",
  description: "Bookkeeping, VAT, Corporate Tax, and UAQFTZ audit services in Umm Al Quwain (UAQ).",
};

export default function UmmAlQuwainPage() {
  return (
    <SubpageLayout
      badge="UMM AL QUWAIN ACCOUNTING & TAX"
      title="Accounting Firm"
      highlightedTitle="in Umm Al Quwain"
      description="Reliable accounting, Corporate Tax, VAT returns, and audit reporting for companies operating in UAQ Free Trade Zone (UAQFTZ) and Mainland."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">UAQFTZ & UAQ Commercial Accounting</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            We deliver end-to-end bookkeeping, tax registration, and audit reports tailored to UAQ business licensing requirements.
          </p>
        </div>
      }
      faqs={[
        { q: "Do you audit UAQFTZ licensed entities?", a: "Yes, we handle statutory annual financial audit filings for UAQ Free Trade Zone license renewals." },
      ]}
    />
  );
}
