import React from "react";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Accounting Firm in Ajman | Official AFZA Partner Headquarters",
  description: "Official Ajman Free Zone (AFZA) Channel Partner HQ. Bookkeeping, VAT, Corporate Tax, and business setup starting from AED 5,555.",
};

export default function AjmanPage() {
  return (
    <SubpageLayout
      badge="HQ OFFICE & OFFICIAL AFZA PARTNER"
      title="Accounting Firm"
      highlightedTitle="in Ajman"
      description="Headquartered directly inside Ajman Free Zone (AFZA), we offer premier business formation, bookkeeping, VAT filing, and Corporate Tax management."
      content={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#09203b]">Ajman Free Zone Head Office Services</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            As an official AFZA Channel Partner, RBO delivers VIP fast-tracked company formation, annual audit reporting, and dedicated tax agent support directly from our Ajman headquarters.
          </p>
        </div>
      }
      faqs={[
        { q: "Where is your Ajman office located?", a: "Our corporate headquarters are located inside Ajman Free Zone (AFZA), Ajman, United Arab Emirates." },
      ]}
    />
  );
}
