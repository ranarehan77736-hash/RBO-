import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Privacy Policy | RBO Accounting Services FZE",
  description: "Privacy policy and data protection standards for RBO Accounting Services FZE in the UAE.",
};

export default function PrivacyPolicyPage() {
  return (
    <SubpageLayout
      badge="LEGAL & DATA PROTECTION"
      title="Privacy Policy"
      highlightedTitle=""
      description="How RBO Accounting Services FZE collects, uses, and safeguards your corporate and financial data under UAE Federal laws."
      content={
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">1. Information Collection</h2>
          <p>
            RBO Accounting Services FZE collects personal and corporate information provided voluntarily during consultation inquiries, corporate onboarding, and client service engagements.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#09203b]">2. Confidentiality & Security</h2>
          <p>
            We implement strict enterprise-grade security protocols, encryption, and non-disclosure agreements (NDAs) to protect your financial records, VAT filings, and Corporate Tax returns.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#09203b]">3. Third-Party Sharing</h2>
          <p>
            Your information is never sold or shared with third parties, except as explicitly required by UAE Federal authorities (e.g., FTA, MOHRE, CBUAE) for official statutory compliance filings.
          </p>
        </div>
      }
    />
  );
}
