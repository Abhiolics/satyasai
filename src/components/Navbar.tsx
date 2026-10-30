"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { getAllProducts, ProductItem } from "@/data/categoriesProductData";
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  onOpenCalculator?: (plantId?: string) => void;
  onSelectPlant?: (plantId: string) => void;
}

export default function Navbar({ }: NavbarProps = {}) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { openCart, totalCartItems } = useCart();

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Real-time matched products
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const all = getAllProducts();
    return all
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.variety.toLowerCase().includes(q) ||
          p.categoryId.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchOpen(false);
    router.push(`/plants?search=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    router.push(`/plants?category=${product.categoryId}&search=${encodeURIComponent(product.variety)}`);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Plants", href: "/plants" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-300 rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 relative ${isScrolled
            ? "glass-panel shadow-[0_12px_36px_rgba(0,0,0,0.12)] border-white/80 bg-white/95 backdrop-blur-xl"
            : "bg-white/90 backdrop-blur-xl border border-white/70 shadow-sm"
          }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Left Side: Real Logo & Company Title */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group text-left shrink-0">
            {/* Real Company Logo */}
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-stone-200/80 shadow-xs shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.jpg"
                alt="Satyasai Navkisan Green India Logo"
                width={44}
                height={44}
                className="object-contain w-full h-full p-0.5"
                priority
              />
            </div>

            {/* Details Column */}
            <div className="flex flex-col">
              <span className="font-bold text-stone-950 text-xs sm:text-sm tracking-tight leading-snug group-hover:text-emerald-800 transition-colors max-w-[170px] sm:max-w-none truncate sm:whitespace-normal">
                Satyasai Navkisan
              </span>
              <span className="text-[10px] sm:text-xs text-stone-500 font-medium hidden sm:inline">
                Green India Private Limited
              </span>
            </div>
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center justify-center gap-1 bg-stone-100/90 p-1 rounded-full border border-stone-200/70 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${isActive
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

          {/* Working Search Bar matching User Flow Reference */}
          <div ref={searchContainerRef} className="relative flex-1 max-w-[200px] sm:max-w-[280px] md:max-w-[320px]">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <MagnifyingGlassIcon className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                placeholder="Search plants..."
                className="w-full pl-8 sm:pl-9 pr-7 sm:pr-8 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm bg-stone-100/80 hover:bg-stone-100 border border-stone-200/90 focus:bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all text-stone-900 placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <XMarkIcon className="w-3.5 h-3.5" />
                </button>
              )}
            </form>

            {/* Real-time search dropdown results overlay */}
            <AnimatePresence>
              {isSearchOpen && searchQuery.trim().length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden z-50 p-2 text-stone-900"
                >
                  {searchResults.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-400 border-b border-stone-100">
                        Matching Plants ({searchResults.length})
                      </div>
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleSelectProduct(product)}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50/80 cursor-pointer transition-colors group"
                        >
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-xs text-stone-900 group-hover:text-emerald-800 truncate">
                              {product.title}
                            </div>
                            <div className="text-[10px] text-stone-500 capitalize">
                              {product.categoryId} plant • ₹{product.price}
                            </div>
                          </div>
                          <span className="text-xs text-emerald-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            View →
                          </span>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleSearchSubmit}
                        className="w-full mt-1 py-1.5 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold text-center transition-colors"
                      >
                        See all results for &quot;{searchQuery}&quot; →
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 text-center">
                      <p className="text-xs text-stone-500 font-medium">
                        No plants found for &quot;{searchQuery}&quot;
                      </p>
                      <button
                        type="button"
                        onClick={() => router.push("/plants")}
                        className="mt-2 text-xs font-semibold text-emerald-700 hover:underline"
                      >
                        Browse All Plant Categories →
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Contact / Call */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* View Catalog Shortcut */}
            <Link
              href="/plants"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-all active:scale-95"
            >
              <span>Catalog</span>
            </Link>

            {/* Shopping Cart Button */}
            <button
              type="button"
              onClick={openCart}
              aria-label="Open Nursery Cart"
              className="relative inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-stone-100 hover:bg-emerald-50 text-stone-800 hover:text-emerald-900 border border-stone-200/90 transition-all active:scale-95 cursor-pointer"
            >
              <ShoppingCartIcon className="w-4 h-4 text-emerald-800" />
              <span className="hidden sm:inline text-xs font-bold">Cart</span>
              {totalCartItems > 0 && (
                <span className="bg-emerald-700 text-white font-extrabold text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center shadow-xs">
                  {totalCartItems > 99 ? "99+" : totalCartItems}
                </span>
              )}
            </button>

            {/* Direct Phone Call */}
            <a
              href="tel:+91 99568 79905"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md shadow-emerald-950/20 transition-all active:scale-95"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="hidden xs:inline">Call</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
