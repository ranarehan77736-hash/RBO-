import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Audit & Assurance Services UAE | Free Zone & Statutory Audit",
  description: "Statutory audit, Free Zone approved financial audit (DMCC, IFZA, JAFZA, DAFZA, AFZA), internal audit, and due diligence across Dubai & UAE.",
};

export default function AuditAssurancePage() {
  return (
    <SubpageLayout
      badge="APPROVED AUDIT & ASSURANCE FIRM"
      title="Audit & Assurance Services"
      highlightedTitle="in Dubai & UAE"
      description="Independent statutory audit reports accepted by all major UAE banks, government ministries, and Free Zone authorities including DMCC, IFZA, JAFZA, and AFZA."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">Approved Free Zone & Statutory Audits</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            We deliver thorough, objective audit reports for annual license renewal, bank credit facilities, investor due diligence, and regulatory compliance.
          </p>
        </div>
      }
      faqs={[
        { q: "Which Free Zone authorities require an annual audit report?", a: "DMCC, JAFZA, DAFZA, AFZA, IFZA, RAKEZ, and Meydan require approved auditor financial reports for annual license renewal." },
      ]}
    />
  );
}
