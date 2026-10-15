"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#081726] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">
          
          {/* Column 1: Brand Info & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-6">
            <Link href="/" className="inline-block mb-1">
              <img
                src="/wp-content/uploads/2026/06/download-1.png"
                alt="RBO Accounting Services FZE"
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://www.rboaccounting.ae/wp-content/uploads/2026/06/download-1.png";
                }}
              />
            </Link>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md">
              FTA-approved accounting, VAT, Corporate Tax, audit and payroll services for UAE businesses across all 7 Emirates. Trusted. Transparent. Compliant.
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-gray-300 pt-1 leading-relaxed">
              <p>
                <span className="text-[#D49D28] font-bold">Phone:</span>{" "}
                <a href="tel:+971508051857" className="hover:text-white transition-colors">+971 50 805 1857</a>
                {"  "}
                <span className="text-[#D49D28] font-bold ml-2">Email:</span>{" "}
                <a href="mailto:info@rboaccounting.ae" className="hover:text-white transition-colors">info@rboaccounting.ae</a>
              </p>

              <p>
                <span className="text-[#D49D28] font-bold">Hours:</span> Mon - Sat: 8:00 AM - 6:00 PM
              </p>

              <p>
                <span className="text-[#D49D28] font-bold">Office Address:</span> C1 Building, Ajman Free Zone, Liwara 1, Ajman, UAE
              </p>
            </div>
          </div>

          {/* Column 2: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#D49D28] mb-3">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li><Link href="/our-services/accounting/bookkeeping-and-accounting/" className="hover:text-[#D49D28] transition-colors">Bookkeeping & Accounting</Link></li>
              <li><Link href="/our-services/vat-registration-filing/" className="hover:text-[#D49D28] transition-colors">VAT Registration & Filing</Link></li>
              <li><Link href="/our-services/corporate-tax/" className="hover:text-[#D49D28] transition-colors">Corporate Tax UAE</Link></li>
              <li><Link href="/business-setup/" className="hover:text-[#D49D28] transition-colors">UAE Business Setup & Formation</Link></li>
              <li><Link href="/our-services/audit-assurance/" className="hover:text-[#D49D28] transition-colors">Audit Services</Link></li>
              <li><Link href="/our-services/payroll/" className="hover:text-[#D49D28] transition-colors">Payroll Services</Link></li>
              <li><Link href="/our-services/virtual-cfo/" className="hover:text-[#D49D28] transition-colors">Virtual CFO Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Locations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#D49D28] mb-3">
              Locations
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li><Link href="/areas-we-serve/ajman/" className="hover:text-[#D49D28] transition-colors">Ajman</Link></li>
              <li><Link href="/areas-we-serve/dubai/" className="hover:text-[#D49D28] transition-colors">Dubai</Link></li>
              <li><Link href="/areas-we-serve/abu-dhabi/" className="hover:text-[#D49D28] transition-colors">Abu Dhabi</Link></li>
              <li><Link href="/areas-we-serve/sharjah/" className="hover:text-[#D49D28] transition-colors">Sharjah</Link></li>
              <li><Link href="/areas-we-serve/ras-al-khaimah/" className="hover:text-[#D49D28] transition-colors">Ras Al Khaimah</Link></li>
              <li><Link href="/areas-we-serve/fujairah/" className="hover:text-[#D49D28] transition-colors">Fujairah</Link></li>
              <li><Link href="/areas-we-serve/umm-al-quwain/" className="hover:text-[#D49D28] transition-colors">Umm Al Quwain</Link></li>
            </ul>
          </div>

          {/* Column 4: Company & Socials (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#D49D28] mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 mb-5">
              <li><Link href="/about-us/" className="hover:text-[#D49D28] transition-colors">About Us</Link></li>
              <li><Link href="/contact-us/" className="hover:text-[#D49D28] transition-colors">Contact Us</Link></li>
              <li><Link href="/blog/" className="hover:text-[#D49D28] transition-colors">Blog & Resources</Link></li>
              <li><Link href="/privacy-policy/" className="hover:text-[#D49D28] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions/" className="hover:text-[#D49D28] transition-colors">Terms & Conditions</Link></li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2">
              <h4 className="font-serif font-bold text-sm text-[#D49D28] mb-2.5">Follow Us</h4>
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61591450861907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-[#D49D28] text-[#081726] hover:bg-[#b8851f] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 fill-current stroke-none" />
                </a>
                <a
                  href="https://www.instagram.com/rboservicesfze/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-[#D49D28] text-[#081726] hover:bg-[#b8851f] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/136034010/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-[#D49D28] text-[#081726] hover:bg-[#b8851f] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 fill-current stroke-none" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="font-serif text-xs sm:text-sm text-[#D49D28] tracking-wide">
            &copy; 2026 RBO Accounting Services FZE. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
