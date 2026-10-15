import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col justify-between">
      <Header />
      <div className="py-24 px-4 text-center space-y-6 max-w-xl mx-auto">
        <h1 className="text-6xl font-serif font-extrabold text-[#09203b]">404</h1>
        <h2 className="text-2xl font-serif font-bold text-[#09203b]">Page Not Found</h2>
        <p className="text-gray-600 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#e8b84b] hover:bg-[#f4ca68] text-[#09203b] font-bold py-3 px-6 rounded-xl shadow-md transition-all"
        >
          Return Home →
        </Link>
      </div>
      <Footer />
    </div>
  );
}
