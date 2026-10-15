import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Accounting Firm in Sharjah | RBO Accounting Services",
  description: "Bookkeeping, VAT, Corporate Tax, and audit services for businesses in Sharjah Mainland, SAIF Zone, and SHAMS Free Zone.",
};

export default function SharjahPage() {
  return (
    <SubpageLayout
      badge="SHARJAH ACCOUNTING & TAX SERVICES"
      title="Accounting Firm"
      highlightedTitle="in Sharjah"
      description="Reliable accounting, audit, VAT return filing, and Corporate Tax advisory for companies across Sharjah Industrial Areas, SAIF Zone, and SHAMS."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">Sharjah Commercial & Industrial Accounting</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            We support trading, manufacturing, and service businesses across Sharjah with accurate general ledgers, inventory valuation, and tax compliance.
          </p>
        </div>
      }
      faqs={[
        { q: "Do you audit SAIF Zone and SHAMS entities?", a: "Yes, we handle statutory annual audits for SAIF Zone and SHAMS license renewals." },
      ]}
    />
  );
}
