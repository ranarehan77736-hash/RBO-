import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Payroll Services & WPS Compliance UAE | RBO Accounting",
  description: "WPS payroll processing, salary transfer SIF file generation, EOSB end-of-service calculation, and MOHRE compliance in Dubai & UAE.",
};

export default function PayrollPage() {
  return (
    <SubpageLayout
      badge="WPS & MOHRE PAYROLL COMPLIANCE"
      title="Payroll Services Dubai & UAE"
      highlightedTitle=""
      description="Ensure 100% compliance with UAE Wage Protection System (WPS) laws, accurate MOHRE salary files, and transparent end-of-service gratuity calculations."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">Flawless UAE Payroll Management</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Avoid MOHRE work permit suspensions by processing monthly salary transfers on schedule via SIF files, managing leave records, and accurately computing EOSB gratuity under UAE Labor Law.
          </p>
        </div>
      }
      faqs={[
        { q: "What is WPS in the UAE?", a: "The Wage Protection System (WPS) is an electronic salary transfer system mandated by MOHRE and CBUAE to ensure timely salary payment." },
      ]}
    />
  );
}
