import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Accounting Firm in Abu Dhabi | RBO Accounting Services",
  description: "FTA-approved accounting & tax services in Abu Dhabi. Bookkeeping, Corporate Tax, ICV certification support, and ADGM / KIZAD Free Zone audit assistance.",
};

export default function AbuDhabiPage() {
  return (
    <SubpageLayout
      badge="ABU DHABI CORPORATE TAX & ACCOUNTING"
      title="Accounting Firm"
      highlightedTitle="in Abu Dhabi"
      description="Professional accounting, tax advisory, ICV support, and audit assurance for companies in Abu Dhabi Mainland, ADGM, KIZAD, and Masdar City."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">Abu Dhabi Business Accounting & Tax Solutions</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            From In-Country Value (ICV) score enhancement to ADGM audit reporting and Federal Tax Authority compliance, we provide full-spectrum financial support for Abu Dhabi enterprises.
          </p>
        </div>
      }
      faqs={[
        { q: "Do you handle ADGM and KIZAD free zone audits?", a: "Yes, we prepare audit-ready financial statements conforming to ADGM and KIZAD authority frameworks." },
      ]}
    />
  );
}
