import React from "react";
import SubpageLayout from "@/components/SubpageLayout";
import BusinessSetupBanner from "@/components/BusinessSetupBanner";
import { Star, Check, ShieldCheck, Building } from "lucide-react";

export const metadata = {
  title: "UAE Business Setup & Company Formation | Official AFZA Partner",
  description: "Official Ajman Free Zone (AFZA) Channel Partner & UAE Mainland specialists. 100% foreign ownership, 24-48h license processing, starting from AED 5,555.",
};

export default function BusinessSetupPage() {
  return (
    <SubpageLayout
      badge="OFFICIAL AJMAN FREE ZONE (AFZA) CHANNEL PARTNER"
      title="UAE Business Setup & Company Formation"
      highlightedTitle=""
      description="Incorporate your UAE company with 100% foreign ownership, 24-48h fast-track trade licensing across Dubai Mainland and 40+ Free Zones, and day-one Corporate Tax protection."
      content={
        <div className="space-y-12">
          <BusinessSetupBanner />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#09203b]">Ajman Free Zone (AFZA) Setup</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                As an official AFZA Channel Partner headquartered in Ajman Free Zone, we guarantee VIP expedited processing, authority discounts starting from AED 5,555, zero middleman markups, and direct registrar access.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#09203b]">Dubai Mainland (DED) Formation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Form a Dubai Mainland entity with 100% foreign ownership. Trade freely across the entire UAE domestic market and submit bids for government tenders without local sponsor constraints.
              </p>
            </div>
          </div>
        </div>
      }
      faqs={[
        { q: "How long does it take to get a UAE trade license?", a: "For Ajman Free Zone (AFZA), license issuance takes 24 to 48 hours. Dubai Mainland licenses take 3 to 5 business days." },
        { q: "What is included in the business setup package?", a: "Trade license, Memorandum of Association (MOA), Commercial Register, Establishment Card, initial approvals, and day-one Corporate Tax TRN registration." },
      ]}
    />
  );
}
