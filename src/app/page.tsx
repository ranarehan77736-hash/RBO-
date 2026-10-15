import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import WhoWeAre from "@/components/WhoWeAre";
import ServicesSection from "@/components/ServicesSection";
import BusinessSetupBanner from "@/components/BusinessSetupBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import EmiratesCoverageMap from "@/components/EmiratesCoverageMap";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between relative selection:bg-[#E8B84B] selection:text-[#09203B]">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Content Sections */}
      <div className="flex-1">
        <HeroSection />
        <MarqueeBanner />
        <WhoWeAre />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <EmiratesCoverageMap />
        <IndustriesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </div>

      {/* Footer & Floating WhatsApp Widget */}
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
