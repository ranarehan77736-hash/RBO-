import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Terms & Conditions | RBO Accounting Services FZE",
  description: "Terms and conditions governing the accounting, tax, and advisory services provided by RBO Accounting Services FZE.",
};

export default function TermsConditionsPage() {
  return (
    <SubpageLayout
      badge="TERMS OF ENGAGEMENT"
      title="Terms & Conditions"
      highlightedTitle=""
      description="Terms and conditions for utilizing RBO Accounting Services FZE professional accounting, tax, and company formation services in the UAE."
      content={
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">1. Scope of Engagement</h2>
          <p>
            All professional accounting, VAT filing, Corporate Tax submissions, and business formation services are governed by formal service agreements executed between the client and RBO Accounting Services FZE.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#09203b]">2. Client Responsibilities</h2>
          <p>
            Clients agree to provide accurate, timely, and complete financial records, bank statements, sales invoices, and supporting vouchers required for compliance reporting.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#09203b]">3. Regulatory Jurisdiction</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the United Arab Emirates and the regulations of the Federal Tax Authority (FTA).
          </p>
        </div>
      }
    />
  );
}
