"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname === "";
    }
    const cleanPath = path.replace(/\/$/, "");
    const cleanPathname = pathname.replace(/\/$/, "");
    return cleanPathname.startsWith(cleanPath);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-[88px] sm:h-[92px]">

          {/* Left: Monogram Gold Logo (Enlarged to match live site 100%) */}
          <Link href="/" className="flex items-center space-x-3 group py-1 shrink-0">
            <img
              src="/wp-content/uploads/2026/06/download-1.png"
              alt="RBO Accounting Services FZE"
              className="h-16 sm:h-20 lg:h-[84px] w-auto object-contain transition-opacity hover:opacity-90"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://www.rboaccounting.ae/wp-content/uploads/2026/06/download-1.png";
              }}
            />
          </Link>

          {/* Center: Navigation Menu with Dynamic Active Route Highlighting */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-9 font-serif font-bold text-[15px]">

            {/* Home */}
            <Link
              href="/"
              className={`transition-colors tracking-wide ${isActive("/") ? "text-[#e8b84b]" : "text-[#09203b] hover:text-[#e8b84b]"
                }`}
            >
              Home
            </Link>

            {/* About Us */}
            <Link
              href="/about-us/"
              className={`transition-colors tracking-wide ${isActive("/about-us") ? "text-[#e8b84b]" : "text-[#09203b] hover:text-[#e8b84b]"
                }`}
            >
              About Us
            </Link>

            {/* Our Services Dropdown */}
            <div className="relative group">
              <Link
                href="/our-services/"
                className={`flex items-center gap-1.5 transition-colors tracking-wide py-2 ${isActive("/our-services") ? "text-[#e8b84b]" : "text-[#09203b] hover:text-[#e8b84b]"
                  }`}
              >
                <span>Our Services</span>
                <FaCaretDown
                  className={`w-[18px] h-[18px] text-lg group-hover:rotate-180 transition-all ${isActive("/our-services") ? "text-[#e8b84b]" : "text-[#09203b] group-hover:text-[#e8b84b]"
                    }`}
                />
              </Link>

              {/* Exact Dark Navy Flyout Menu from Design */}
              <div
                onMouseLeave={() => setActiveDesktopSubmenu(null)}
                className="absolute top-[100%] left-0 w-[310px] bg-[#09203B] rounded-b-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] font-sans flex flex-col py-2 border-t-[3px] border-[#E8B84B] before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-4 before:bg-transparent"
              >
                {/* Item 1: Accounting Services */}
                <div
                  className="relative group/item"
                  onMouseEnter={() => setActiveDesktopSubmenu("accounting")}
                >
                  <Link
                    href="/our-services/accounting/bookkeeping-and-accounting/"
                    className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors flex justify-between items-center group-hover/item:text-white group-hover/item:bg-[#E8B84B]"
                  >
                    <span>Accounting Services</span>
                    <FaCaretRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* Submenu with hover bridge */}
                  <div
                    onMouseEnter={() => setActiveDesktopSubmenu("accounting")}
                    className={`absolute top-0 left-[calc(100%-2px)] w-[540px] bg-[#09203B] rounded-xl shadow-2xl py-3 transition-all duration-150 before:content-[''] before:absolute before:-left-6 before:top-0 before:w-8 before:h-full before:bg-transparent ${activeDesktopSubmenu === "accounting"
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible"
                      }`}
                  >
                    <Link href="/our-services/accounting/bookkeeping-and-accounting/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Bookkeeping and Accounting</Link>
                    <Link href="/our-services/accounting/bank-reconciliation/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Bank Reconciliation Services</Link>
                    <Link href="/our-services/accounting/accounts-payable-and-receivable/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Accounts Payable &amp; Receivable Outsourcing Services UAE | Abu Dhabi &amp; Dubai | RBO</Link>
                    <Link href="/our-services/accounting/ifrs-compliance/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">IFRS Compliance Services</Link>
                    <Link href="/our-services/accounting/financial-reporting/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Financial Reporting Service</Link>
                  </div>
                </div>

                {/* Item 2: VAT Registration & Filing UAE */}
                <div
                  className="relative group/item"
                  onMouseEnter={() => setActiveDesktopSubmenu("vat")}
                >
                  <Link
                    href="/our-services/vat-registration-filing/"
                    className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors flex justify-between items-center group-hover/item:text-white group-hover/item:bg-[#E8B84B]"
                  >
                    <span>VAT Registration &amp; Filing UAE</span>
                    <FaCaretRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* Submenu with hover bridge & correct links */}
                  <div
                    onMouseEnter={() => setActiveDesktopSubmenu("vat")}
                    className={`absolute top-0 left-[calc(100%-2px)] w-[300px] bg-[#09203B] rounded-xl shadow-2xl py-3 transition-all duration-150 before:content-[''] before:absolute before:-left-6 before:top-0 before:w-8 before:h-full before:bg-transparent ${activeDesktopSubmenu === "vat"
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible"
                      }`}
                  >
                    <Link href="/our-services/vat-registration-filing/registration/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">VAT registration</Link>
                    <Link href="/our-services/vat-registration-filing/return-filing/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">VAT return filing</Link>
                    <Link href="/our-services/vat-registration-filing/refund/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">VAT refund services</Link>
                    <Link href="/our-services/vat-registration-filing/advisory/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">VAT advisory services</Link>
                    <Link href="/our-services/vat-registration-filing/fta-audit-assistance/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">FTA audit assistance</Link>
                    <Link href="/our-services/vat-registration-filing/fta-records-amendment/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">FTA records amendment</Link>
                    <Link href="/our-services/vat-registration-filing/penalty-reconsideration/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">FTA tax penalty reconsideration</Link>
                  </div>
                </div>

                {/* Item 3: Corporate Tax UAE */}
                <div
                  className="relative group/item"
                  onMouseEnter={() => setActiveDesktopSubmenu("tax")}
                >
                  <Link
                    href="/our-services/corporate-tax/"
                    className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors flex justify-between items-center group-hover/item:text-white group-hover/item:bg-[#E8B84B]"
                  >
                    <span>Corporate Tax UAE</span>
                    <FaCaretRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* Submenu */}
                  <div
                    onMouseEnter={() => setActiveDesktopSubmenu("tax")}
                    className={`absolute top-0 left-[calc(100%-2px)] w-[300px] bg-[#09203B] rounded-xl shadow-2xl py-3 transition-all duration-150 before:content-[''] before:absolute before:-left-6 before:top-0 before:w-8 before:h-full before:bg-transparent ${activeDesktopSubmenu === "tax"
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible"
                      }`}
                  >
                    <Link href="/our-services/corporate-tax/registration/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Corporate Tax Registration</Link>
                    <Link href="/our-services/corporate-tax/return-filing/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Corporate Tax Return Filing UAE</Link>
                    <Link href="/our-services/corporate-tax/corporate-tax-planning/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Corporate Tax Planning UAE</Link>
                    <Link href="/our-services/corporate-tax/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Transfer Pricing UAE</Link>
                  </div>
                </div>

                {/* Item 4: Payroll Services */}
                <div
                  className="relative group/item"
                  onMouseEnter={() => setActiveDesktopSubmenu("payroll")}
                >
                  <Link
                    href="/our-services/payroll/"
                    className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors flex justify-between items-center group-hover/item:text-white group-hover/item:bg-[#E8B84B]"
                  >
                    <span>Payroll Services Dubai &amp; UAE</span>
                    <FaCaretRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* Submenu */}
                  <div
                    onMouseEnter={() => setActiveDesktopSubmenu("payroll")}
                    className={`absolute top-0 left-[calc(100%-2px)] w-[300px] bg-[#09203B] rounded-xl shadow-2xl py-3 transition-all duration-150 before:content-[''] before:absolute before:-left-6 before:top-0 before:w-8 before:h-full before:bg-transparent ${activeDesktopSubmenu === "payroll"
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible"
                      }`}
                  >
                    <Link href="/our-services/payroll/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">WPS payroll services</Link>
                    <Link href="/our-services/payroll/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">End of service benefits calculation</Link>
                    <Link href="/our-services/payroll/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Payroll reporting services</Link>
                    <Link href="/our-services/payroll/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Employee leave management</Link>
                  </div>
                </div>

                {/* Item 5: Audit & Assurance Services */}
                <div
                  className="relative group/item"
                  onMouseEnter={() => setActiveDesktopSubmenu("audit")}
                >
                  <Link
                    href="/our-services/audit-assurance/"
                    className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors flex justify-between items-center group-hover/item:text-white group-hover/item:bg-[#E8B84B]"
                  >
                    <span>Audit &amp; Assurance Services UAE</span>
                    <FaCaretRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* Submenu */}
                  <div
                    onMouseEnter={() => setActiveDesktopSubmenu("audit")}
                    className={`absolute top-0 left-[calc(100%-2px)] w-[300px] bg-[#09203B] rounded-xl shadow-2xl py-3 transition-all duration-150 before:content-[''] before:absolute before:-left-6 before:top-0 before:w-8 before:h-full before:bg-transparent ${activeDesktopSubmenu === "audit"
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible"
                      }`}
                  >
                    <Link href="/our-services/audit-assurance/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Free Zone Audit UAE</Link>
                    <Link href="/our-services/audit-assurance/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Statutory audit services UAE</Link>
                    <Link href="/our-services/audit-assurance/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Internal Audit Services UAE</Link>
                    <Link href="/our-services/audit-assurance/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Due Diligence Services UAE</Link>
                    <Link href="/our-services/audit-assurance/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Risk Assessment Services UAE</Link>
                  </div>
                </div>

                {/* Item 6: Virtual CFO Services */}
                <div
                  className="relative group/item"
                  onMouseEnter={() => setActiveDesktopSubmenu("cfo")}
                >
                  <Link
                    href="/our-services/virtual-cfo/"
                    className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors flex justify-between items-center group-hover/item:text-white group-hover/item:bg-[#E8B84B]"
                  >
                    <span>Virtual CFO Services</span>
                    <FaCaretRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* Submenu */}
                  <div
                    onMouseEnter={() => setActiveDesktopSubmenu("cfo")}
                    className={`absolute top-0 left-[calc(100%-2px)] w-[260px] bg-[#09203B] rounded-xl shadow-2xl py-3 transition-all duration-150 before:content-[''] before:absolute before:-left-6 before:top-0 before:w-8 before:h-full before:bg-transparent ${activeDesktopSubmenu === "cfo"
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible"
                      }`}
                  >
                    <Link href="/our-services/virtual-cfo/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Fractional CFO</Link>
                    <Link href="/our-services/virtual-cfo/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Financial Strategy &amp; Planning</Link>
                    <Link href="/our-services/virtual-cfo/" className="block px-7 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:bg-white/5 transition-colors">Cash Flow Management</Link>
                  </div>
                </div>

                {/* Item 7: Business Setup */}
                <div onMouseEnter={() => setActiveDesktopSubmenu(null)}>
                  <Link href="/business-setup/" className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors">
                    Business Setup &amp; Company Formation
                  </Link>
                </div>
              </div>
            </div>

            {/* Areas We Serve Dropdown */}
            <div className="relative group">
              <Link
                href="/areas-we-serve/"
                className={`flex items-center gap-1.5 transition-colors tracking-wide py-2 ${isActive("/areas-we-serve") ? "text-[#e8b84b]" : "text-[#09203b] hover:text-[#e8b84b]"
                  }`}
              >
                <span>Areas We Serve</span>
                <FaCaretDown
                  className={`w-[18px] h-[18px] text-lg group-hover:rotate-180 transition-all ${isActive("/areas-we-serve") ? "text-[#e8b84b]" : "text-[#09203b] group-hover:text-[#e8b84b]"
                    }`}
                />
              </Link>
              <div className="absolute top-[100%] left-0 w-max min-w-[560px] bg-[#09203B] rounded-b-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] font-sans flex flex-col py-2 border-t-[3px] border-[#E8B84B]">
                <Link href="/areas-we-serve/dubai/" className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors">
                  Accounting Consulting Firm in Dubai
                </Link>
                <Link href="/areas-we-serve/abu-dhabi/" className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors">
                  Accounting Consulting Firm in Abu Dhabi | Corporate Tax, VAT &amp; Audit | RBO
                </Link>
                <Link href="/areas-we-serve/sharjah/" className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors">
                  Accounting Consulting Firm in Sharjah
                </Link>
                <Link href="/areas-we-serve/fujairah/" className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors">
                  Accounting Consulting Firm in Fujairah
                </Link>
                <Link href="/areas-we-serve/ajman/" className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors">
                  Accounting &amp; Audit Firm in Ajman | FTA Tax Agents &amp; AFZ Approved | RBO
                </Link>
                <Link href="/areas-we-serve/umm-al-quwain/" className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors">
                  Accounting Consulting Firm in Umm Al Quwain
                </Link>
                <Link href="/areas-we-serve/ras-al-khaimah/" className="block px-6 py-3.5 text-[12.5px] font-bold text-[#E8B84B] hover:text-white hover:bg-[#E8B84B] transition-colors">
                  Accounting Consulting Firm in Ras Al Khaimah
                </Link>
              </div>
            </div>

            {/* Blog */}
            <Link
              href="/blog/"
              className={`transition-colors tracking-wide ${isActive("/blog") ? "text-[#e8b84b]" : "text-[#09203b] hover:text-[#e8b84b]"
                }`}
            >
              Blog
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact-us/"
              className={`transition-colors tracking-wide ${isActive("/contact-us") ? "text-[#e8b84b]" : "text-[#09203b] hover:text-[#e8b84b]"
                }`}
            >
              Contact Us
            </Link>

          </div>

          {/* Right: Golden CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#form"
              className="bg-[#e8b84b] hover:bg-[#f4ca68] text-white font-bold text-xs sm:text-[13px] px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Free VAT Check
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="#form"
              className="bg-[#e8b84b] text-white font-bold text-xs px-3 py-1.5 rounded-md"
            >
              Free Check
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#09203b] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-[#e8b84b]" /> : <Menu className="w-7 h-7 text-[#09203b]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1b2a] text-white border-t-4 border-[#e8b84b] px-6 py-6 space-y-4 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-serif text-lg font-bold ${isActive("/") ? "text-[#e8b84b]" : "text-gray-200"
              }`}
          >
            Home
          </Link>
          <Link
            href="/about-us/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-serif text-base font-medium ${isActive("/about-us") ? "text-[#e8b84b]" : "text-gray-200"
              }`}
          >
            About Us
          </Link>

          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className={`w-full flex justify-between font-serif text-base font-medium py-1 ${isActive("/our-services") ? "text-[#e8b84b]" : "text-gray-200"
                }`}
            >
              <span>Our Services</span>
              <ChevronDown className="w-4 h-4 text-[#e8b84b]" />
            </button>
            {activeDropdown === "services" && (
              <div className="pl-4 space-y-2 py-2 border-l border-white/10 text-xs text-gray-300 font-sans">
                <Link href="/our-services/accounting/bookkeeping-and-accounting/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Bookkeeping &amp; Accounting</Link>
                <Link href="/our-services/vat-registration-filing/registration/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b] font-medium">VAT Registration</Link>
                <Link href="/our-services/vat-registration-filing/return-filing/" onClick={() => setMobileMenuOpen(false)} className="block py-1">VAT Return Filing</Link>
                <Link href="/our-services/vat-registration-filing/refund/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b]">VAT Refund Services</Link>
                <Link href="/our-services/vat-registration-filing/advisory/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b]">VAT Advisory Services</Link>
                <Link href="/our-services/vat-registration-filing/fta-audit-assistance/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b]">FTA Audit Assistance</Link>
                <Link href="/our-services/vat-registration-filing/fta-records-amendment/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b]">FTA Records Amendment</Link>
                <Link href="/our-services/vat-registration-filing/penalty-reconsideration/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b]">FTA Tax Penalty Reconsideration</Link>
                <Link href="/our-services/vat-registration-filing/" onClick={() => setMobileMenuOpen(false)} className="block py-1">VAT Registration &amp; Filing Hub</Link>
                <Link href="/our-services/corporate-tax/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Corporate Tax UAE Hub</Link>
                <Link href="/our-services/corporate-tax/registration/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b]">Corporate Tax Registration</Link>
                <Link href="/our-services/corporate-tax/return-filing/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b]">Corporate Tax Return Filing</Link>
                <Link href="/our-services/corporate-tax/corporate-tax-planning/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b]">Corporate Tax Planning</Link>
                <Link href="/our-services/audit-assurance/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Audit &amp; Assurance Services</Link>
                <Link href="/our-services/payroll/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Payroll Services</Link>
                <Link href="/business-setup/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#e8b84b] font-bold">Business Setup UAE</Link>
              </div>
            )}
          </div>

          <Link
            href="/areas-we-serve/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-serif text-base font-medium ${isActive("/areas-we-serve") ? "text-[#e8b84b]" : "text-gray-200"
              }`}
          >
            Areas We Serve (7 Emirates)
          </Link>

          <Link
            href="/blog/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-serif text-base font-medium ${isActive("/blog") ? "text-[#e8b84b]" : "text-gray-200"
              }`}
          >
            Blog
          </Link>

          <Link
            href="/contact-us/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-serif text-base font-medium ${isActive("/contact-us") ? "text-[#e8b84b]" : "text-gray-200"
              }`}
          >
            Contact Us
          </Link>

          <a
            href="#form"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#e8b84b] text-white font-bold py-3 rounded-lg text-sm uppercase tracking-wider"
          >
            Free VAT Check
          </a>
        </div>
      )}
    </header>
  );
}
