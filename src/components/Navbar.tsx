"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface NavbarProps {
  onOpenCalculator?: (plantId?: string) => void;
  onSelectPlant?: (plantId: string) => void;
}

export default function Navbar({}: NavbarProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-300 rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-2.5 sm:py-3 relative ${
          isScrolled
            ? "glass-panel shadow-[0_12px_36px_rgba(0,0,0,0.09)] border-white/80 bg-white/90 backdrop-blur-xl"
            : "bg-white/85 backdrop-blur-xl border border-white/70 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Left Side: Real Logo & Company Title */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group text-left shrink-0">
            {/* Real Company Logo */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-stone-200/80 shadow-xs shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.jpg"
                alt="Satyasai Navkisan Green India Private Limited Logo"
                width={48}
                height={48}
                className="object-contain w-full h-full p-0.5"
                priority
              />
            </div>

            {/* Details Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-stone-950 text-xs sm:text-base tracking-tight leading-snug group-hover:text-emerald-950 transition-colors max-w-[200px] sm:max-w-none truncate sm:whitespace-normal">
                  Satyasai Navkisan Green India Private Limited
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] sm:text-xs text-stone-600 mt-0.5 font-medium">
                <span className="flex items-center gap-1 text-emerald-900 font-semibold">
                  <MapPinIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-700 shrink-0" />
                  <span>Lucknow, UP</span>
                </span>

                <span className="hidden md:inline text-emerald-900 font-semibold text-[11px] bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200/70">
                  GST: 09AAZCS8852J1Z6
                </span>
              </div>
            </div>
          </Link>

          {/* Center Navigation Links (Visible on Desktop / Tablets) */}
          <div className="hidden lg:flex items-center justify-center gap-1 bg-stone-100/80 p-1 rounded-full border border-stone-200/70 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "text-emerald-950 font-bold"
                      : "text-stone-600 hover:text-stone-950 hover:bg-white/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white rounded-full shadow-xs border border-stone-200/60 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side: CTAs */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-2.5 shrink-0">
            {/* Mail Icon Button on mobile, Mail Us pill on tablet/desktop */}
            <a
              href="mailto:navikisan@gmail.com?subject=Inquiry%20regarding%20Certified%20Fruit%20%26%20Teak%20Saplings%20-%20Satyasai%20Navkisan"
              aria-label="Send Email to navikisan@gmail.com"
              title="Mail Us (navikisan@gmail.com)"
              className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-4 sm:py-2 rounded-full bg-white/90 hover:bg-white border border-stone-300/80 text-stone-850 hover:text-stone-950 text-xs sm:text-sm font-medium shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <EnvelopeIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-emerald-800 shrink-0" />
              <span className="hidden sm:inline">Mail Us</span>
            </a>

            {/* Call Now CTA */}
            <a
              href="tel:07942637905"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-950 hover:bg-emerald-900 text-white text-xs sm:text-sm font-medium shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all active:scale-95"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="hidden xs:inline">Call Now</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

