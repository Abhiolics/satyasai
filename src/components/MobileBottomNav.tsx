"use client";

import React, { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const productsEl = document.getElementById("products");
      if (productsEl) {
        const rect = productsEl.getBoundingClientRect();
        if (rect.top <= 240 && rect.bottom >= 120) {
          setActiveSection("products");
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("");
    }
  };

  const handleProductsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("products");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection("products");
      }
    }
  };

  const isHomeActive = pathname === "/" && activeSection !== "products";
  const isProductsActive = pathname === "/" && activeSection === "products";

  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 28, delay: 0.15 }}
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-2.5 xs:bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-1.25rem)] max-w-sm sm:max-w-md pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-4 items-center gap-1 p-1 xs:p-1.5 rounded-2xl sm:rounded-full bg-stone-950/92 backdrop-blur-2xl border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.55)] text-white">
        
        {/* 1. Home Item */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-1.5 sm:py-2.5 px-1 sm:px-3 rounded-xl sm:rounded-full text-center transition-all duration-200 active:scale-95 ${
            isHomeActive
              ? "bg-white/15 text-white shadow-2xs font-bold"
              : "text-stone-300 hover:text-white hover:bg-white/10"
          }`}
        >
          <HomeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400 shrink-0" />
          <span className="text-[10px] sm:text-xs font-semibold leading-tight truncate">Home</span>
        </Link>

        {/* 2. Products Item */}
        <Link
          href="/#products"
          onClick={handleProductsClick}
          className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-1.5 sm:py-2.5 px-1 sm:px-3 rounded-xl sm:rounded-full text-center transition-all duration-200 active:scale-95 ${
            isProductsActive
              ? "bg-white/15 text-white shadow-2xs font-bold"
              : "text-stone-300 hover:text-white hover:bg-white/10"
          }`}
        >
          <Squares2X2Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-400 shrink-0" />
          <span className="text-[10px] sm:text-xs font-semibold leading-tight truncate">Products</span>
        </Link>

        {/* 3. Get Location Item (Google Maps Coordinates) */}
        <a
          href="https://maps.google.com/?q=26.86279000,80.99733000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-1.5 sm:py-2.5 px-1 sm:px-3 rounded-xl sm:rounded-full text-center text-stone-300 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-95"
          title="Get Google Maps Location (Lucknow, UP)"
        >
          <MapPinIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-rose-400 shrink-0" />
          <span className="text-[10px] sm:text-xs font-semibold leading-tight truncate">Location</span>
        </a>

        {/* 4. Call Us Item (Standout Highlight CTA) */}
        <a
          href="tel:07942637905"
          className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-1.5 sm:py-2.5 px-1 sm:px-3 rounded-xl sm:rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-stone-950 font-bold text-center shadow-md shadow-emerald-500/25 transition-all duration-200 active:scale-95"
        >
          <div className="relative flex items-center justify-center shrink-0">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-900 opacity-40" />
            <PhoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative" />
          </div>
          <span className="text-[10px] sm:text-xs font-bold leading-tight truncate">Call Us</span>
        </a>
      </div>
    </motion.nav>
  );
}
