"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  HomeIcon,
  Squares2X2Icon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const handleProductsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("products");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 28, delay: 0.15 }}
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden w-auto max-w-[96vw]"
    >
      <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-stone-950/92 backdrop-blur-2xl border border-white/20 shadow-[0_16px_36px_rgba(0,0,0,0.5)] text-white">
        
        {/* 1. Home Item */}
        <Link
          href="/"
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all active:scale-95 shrink-0 ${
            pathname === "/"
              ? "bg-white/15 text-white shadow-2xs font-bold"
              : "text-stone-300 hover:text-white hover:bg-white/10"
          }`}
        >
          <HomeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
          <span>Home</span>
        </Link>

        {/* 2. Products Item */}
        <Link
          href="/#products"
          onClick={handleProductsClick}
          className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold text-stone-300 hover:text-white hover:bg-white/10 transition-all active:scale-95 shrink-0"
        >
          <Squares2X2Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
          <span>Products</span>
        </Link>

        {/* 3. Get Location Item (Google Maps Coordinates) */}
        <a
          href="https://maps.google.com/?q=26.86279000,80.99733000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold text-stone-300 hover:text-white hover:bg-white/10 transition-all active:scale-95 shrink-0"
          title="Get Google Maps Location (Lucknow, UP)"
        >
          <MapPinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
          <span>Location</span>
        </a>

        {/* 4. Call Us Item (Standout Highlight CTA) */}
        <a
          href="tel:+919412742566"
          className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-stone-950 font-bold text-[11px] sm:text-xs tracking-tight shadow-md shadow-emerald-500/30 transition-all active:scale-95 shrink-0"
        >
          <div className="relative flex items-center justify-center shrink-0">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-900 opacity-40" />
            <PhoneIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 relative" />
          </div>
          <span>Call Us</span>
        </a>
      </div>
    </motion.nav>
  );
}
