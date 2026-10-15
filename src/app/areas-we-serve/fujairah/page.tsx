import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Accounting Firm in Fujairah | RBO Accounting Services",
  description: "Bookkeeping, VAT, Corporate Tax, and FOIZ / Creative City audit services in Fujairah.",
};

export default function FujairahPage() {
  return (
    <SubpageLayout
      badge="FUJAIRAH ACCOUNTING & TAX SERVICES"
      title="Accounting Firm"
      highlightedTitle="in Fujairah"
      description="Tailored accounting, Corporate Tax, VAT filing, and audit reporting for businesses in Fujairah Free Zone (FOIZ) and Creative City Fujairah."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">Fujairah & Creative City Financial Support</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            We provide maritime, oil & gas, logistics, and media entities in Fujairah with compliant bookkeeping and tax management.
          </p>
        </div>
      }
      faqs={[
        { q: "Do you support Fujairah Creative City companies?", a: "Yes, we handle accounting, Corporate Tax Small Business Relief, and VAT filings for Fujairah Creative City clients." },
      ]}
    />
  );
}
