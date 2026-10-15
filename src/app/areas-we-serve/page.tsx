import React from "react";
import SubpageLayout from "@/components/SubpageLayout";
import EmiratesCoverageMap from "@/components/EmiratesCoverageMap";

export const metadata = {
  title: "Areas We Serve Across 7 Emirates UAE | RBO Accounting",
  description: "FTA-approved accounting, tax, bookkeeping, and audit services across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
};

export default function AreasWeServePage() {
  return (
    <SubpageLayout
      badge="ALL 7 EMIRATES COVERAGE"
      title="Accounting & Tax Services Across"
      highlightedTitle="all 7 Emirates"
      description="We provide local regulatory knowledge and physical on-site or remote financial support to businesses across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ."
      content={
        <div className="-mt-8">
          <EmiratesCoverageMap />
        </div>
      }
      faqs={[
        { q: "Do you serve clients outside of Ajman and Dubai?", a: "Yes! We serve corporate clients across all 7 UAE Emirates with physical office visits and secure cloud portal collaboration." },
      ]}
    />
  );
}
