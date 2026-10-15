import React from "react";
import SubpageLayout from "@/components/SubpageLayout";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "UAE Tax & Accounting Blog | Latest FTA Updates & Corporate Tax Insights",
  description: "Stay informed with official UAE Corporate Tax updates, VAT return rules, bookkeeping guides, and business setup insights from certified FTA Tax Agents.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "UAE Corporate Tax Small Business Relief: Complete Guide for 2026",
      desc: "Learn how your business can claim 0% Corporate Tax under Ministerial Decision No. 73 of 2023 for revenue under AED 3 Million.",
      date: "October 2026",
      category: "Corporate Tax",
      slug: "uae-corporate-tax-small-business-relief",
    },
    {
      title: "Who Needs VAT Registration in the UAE? Thresholds & Fines Explained",
      desc: "Understanding mandatory vs voluntary VAT registration thresholds (AED 375k vs AED 187.5k) to avoid the AED 10,000 FTA non-registration penalty.",
      date: "September 2026",
      category: "VAT Filing",
      slug: "who-needs-vat-registration-uae",
    },
    {
      title: "Why Bookkeeping & Accounting Matter for UAE Free Zone Companies",
      desc: "Free Zone entities are no longer exempt from holding audit-ready books under UAE Federal Decree-Law No. 47.",
      date: "August 2026",
      category: "Bookkeeping",
      slug: "bookkeeping-matters-uae-free-zones",
    },
  ];

  return (
    <SubpageLayout
      badge="UAE TAX & FINANCIAL INSIGHTS"
      title="RBO Accounting & Tax"
      highlightedTitle="Knowledge Blog"
      description="Stay compliant with the latest Federal Tax Authority (FTA) laws, Corporate Tax decisions, VAT return guides, and business setup strategies in Dubai & UAE."
      content={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="bg-[#e8b84b]/15 text-[#9a7212] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#09203b] leading-tight hover:text-[#c9a227] transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.desc}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-4">
                <a
                  href="#form"
                  className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#09203b] font-bold text-sm transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      }
      faqs={[
        { q: "How often do you publish UAE tax updates?", a: "We update our blog immediately whenever the Federal Tax Authority (FTA) or Ministry of Finance issues new cabinet decisions or public clarifications." },
      ]}
    />
  );
}
