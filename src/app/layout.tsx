import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accounting Firm in UAE | FTA Registered | RBO Accounting Services FZE",
  description:
    "FTA-registered accounting firm in the UAE for bookkeeping, VAT, corporate tax, audit and payroll. Clear advice for mainland and free-zone businesses.",
  keywords: [
    "Accounting Firm UAE",
    "Bookkeeping Dubai",
    "VAT Registration UAE",
    "Corporate Tax UAE",
    "Free Zone Audit Ajman",
    "FTA Tax Agents UAE",
    "WPS Payroll Services",
    "Business Setup UAE",
  ],
  openGraph: {
    title: "Accounting Firm in UAE | FTA Registered | RBO Accounting Services FZE",
    description:
      "FTA-registered accounting firm in the UAE for bookkeeping, VAT, corporate tax, audit and payroll.",
    url: "https://www.rboaccounting.ae",
    siteName: "RBO Accounting Services FZE",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased text-gray-800 bg-[#F8FAFC]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
