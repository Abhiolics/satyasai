"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CATEGORIES_LIST,
  PRODUCTS_BY_CATEGORY,
  ProductItem,
  CategoryInfo,
  CategoryId,
} from "@/data/categoriesProductData";
import {
  ShoppingCartIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
  CheckIcon,
  XMarkIcon,
  UserIcon,
  MapPinIcon,
  PhoneIcon,
  DocumentTextIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "@/context/CartContext";

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("mango");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [justAddedId, setJustAddedId] = useState<string | null>(null);
  const { cart, openCart, addToCart, totalCartItems, totalCartAmount } = useCart();

  // Horizontal scroll container reference for circular category reel
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const currentProducts = PRODUCTS_BY_CATEGORY[activeCategory] || [];
  const currentCategoryInfo = CATEGORIES_LIST.find((c) => c.id === activeCategory);

  // Initialize quantities for current products
  useEffect(() => {
    setQuantities((prev) => {
      const next = { ...prev };
      currentProducts.forEach((p) => {
        if (!next[p.id]) {
          next[p.id] = p.defaultQty;
        }
      });
      return next;
    });
  }, [activeCategory, currentProducts]);

  // Listen for category selection events dispatched from hero carousel or external CTA
  useEffect(() => {
    const handleCategorySelect = (e: Event) => {
      const customEvent = e as CustomEvent<CategoryId>;
      if (customEvent.detail && CATEGORIES_LIST.some((c) => c.id === customEvent.detail)) {
        setActiveCategory(customEvent.detail);
      }
    };
    window.addEventListener("select-category", handleCategorySelect);
    return () => window.removeEventListener("select-category", handleCategorySelect);
  }, []);

  const handleScrollCategories = (direction: "left" | "right") => {
    if (!categoryScrollRef.current) return;
    const scrollAmount = 280;
    categoryScrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleQuantityChange = (productId: string, delta: number, minOrder: number) => {
    setQuantities((prev) => {
      const current = prev[productId] ?? minOrder;
      const updated = Math.max(minOrder, current + delta);
      return { ...prev, [productId]: updated };
    });
  };

  const handleDirectQuantityInput = (productId: string, value: string, minOrder: number) => {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      setQuantities((prev) => ({
        ...prev,
        [productId]: Math.max(1, num),
      }));
    }
  };

  const handleAddToCart = (product: ProductItem) => {
    const qty = quantities[product.id] || product.defaultQty || product.minOrder || 10;
    addToCart(product, qty);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1600);
  };

  return (
    <section id="products" className="relative w-full bg-[#fafaf9] py-10 sm:py-14 border-b border-stone-200/90 text-stone-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              <SparklesIcon className="w-3.5 h-3.5 text-emerald-700" />
              <span>Direct Nursery Catalog • Farm Gate Pricing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-stone-950 font-normal tracking-tight">
              Select Botanical Category, <span className="italic font-normal text-emerald-950">Explore Varieties.</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl font-normal leading-relaxed">
              Tap any category below to inspect our 3×3 variety catalog, wholesale rates, and select multiple quantities for instant WhatsApp dispatch confirmation.
            </p>
          </div>

          {/* Quick Cart Pill & Manual Slider Navigation */}
          <div className="flex items-center gap-2 self-start md:self-end">
            {cart.length > 0 && (
              <button
                onClick={openCart}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-950 text-white text-xs font-semibold hover:bg-emerald-900 transition-all shadow-xs active:scale-95 mr-2 cursor-pointer"
              >
                <ShoppingCartIcon className="w-4 h-4 text-emerald-400" />
                <span>Cart ({totalCartItems})</span>
                <span className="bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded-full text-[11px] font-mono">
                  ₹{totalCartAmount.toLocaleString("en-IN")}
                </span>
              </button>
            )}

            <button
              onClick={() => handleScrollCategories("left")}
              aria-label="Scroll Categories Left"
              className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 hover:text-stone-950 transition-all active:scale-95 shadow-xs"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollCategories("right")}
              aria-label="Scroll Categories Right"
              className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 hover:text-stone-950 transition-all active:scale-95 shadow-xs"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. MODERN CIRCULAR CATEGORIES REEL (Clean & Responsive, No Clipping)      */}
        {/* ========================================================================= */}
        <div className="relative w-full py-2 mb-8">
          <div
            ref={categoryScrollRef}
            className="flex items-start gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-none py-3 px-2.5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {CATEGORIES_LIST.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className="group flex flex-col items-center shrink-0 focus:outline-hidden transition-all duration-300 cursor-pointer"
                >
                  {/* Modern Circular Image Frame - Full Unclipped Circle */}
                  <div
                    className={`relative w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full p-1 transition-all duration-300 ${
                      isActive
                        ? "ring-[2.5px] ring-emerald-800 ring-offset-2 ring-offset-[#fafaf9] shadow-md shadow-emerald-950/20"
                        : "ring-1.5 ring-stone-200/90 ring-offset-2 ring-offset-[#fafaf9] hover:ring-emerald-600/70 shadow-2xs hover:shadow-xs"
                    }`}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-stone-100">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 768px) 80px, 90px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Active Radial Indicator */}
                      {isActive && (
                        <div className="absolute inset-0 bg-emerald-950/15 backdrop-blur-[0.5px]" />
                      )}
                    </div>

                    {/* Active Corner Check Badge - Only Indicator */}
                    {isActive && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-900 text-white flex items-center justify-center shadow-md border-2 border-white z-10 animate-in fade-in zoom-in-75 duration-200">
                        <CheckIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Category Title Below Circle - Clean without underline */}
                  <div className="mt-2.5 text-center">
                    <span
                      className={`text-xs sm:text-[13px] tracking-tight leading-tight line-clamp-2 max-w-[85px] sm:max-w-[95px] block transition-colors ${
                        isActive
                          ? "font-bold text-emerald-950"
                          : "font-medium text-stone-700 group-hover:text-stone-950"
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Active Header Bar */}
        <div className="flex flex-wrap items-center justify-between pb-3.5 mb-6 border-b border-stone-200 gap-2">
          <div className="flex items-center gap-2">
           
            <span className="text-sm font-bold text-stone-950">
              {currentCategoryInfo?.name} ({currentProducts.length} Verified Varieties)
            </span>
          </div>
          <span className="text-xs text-stone-500 hidden sm:inline">
            Direct farm gate rates • Tap Add to Cart to build your shipment
          </span>
        </div>

        {/* ========================================================================= */}
        {/* 2. 3x3 CARDS GRID (9 Cards for Active Category - Compact Layout)          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5 animate-in fade-in duration-300">
          {currentProducts.map((product) => {
            const currentQty = quantities[product.id] ?? product.defaultQty;
            const isJustAdded = justAddedId === product.id;

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-white border border-stone-200/90 hover:border-emerald-700/60 p-3 sm:p-3.5 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top: Product Image, Badge, and Link */}
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 mb-2.5 border border-stone-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Stock / Promotion Badge */}
                    {product.badge && (
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-950/85 backdrop-blur-md text-emerald-200 text-[9px] font-bold uppercase tracking-wider shadow-xs">
                        {product.badge}
                      </div>
                    )}

                    {/* Direct IndiaMART / Official Catalog Link */}
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Inspect official product profile on saigreenindia.in"
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur-md border border-white flex items-center justify-center text-stone-850 hover:bg-emerald-950 hover:text-white transition-all shadow-xs"
                    >
                      <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                    </a>

                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-stone-950/75 backdrop-blur-md text-white text-[8.5px] font-medium tracking-wide">
                      Min Order: {product.minOrder} {product.priceUnit}s
                    </div>
                  </div>

                  {/* Product Title (with clickable link) */}
                  <h4 className="text-sm sm:text-[15px] font-bold font-sans text-stone-950 tracking-tight leading-snug group-hover:text-emerald-950 transition-colors">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-baseline justify-between"
                    >
                      <span className="truncate">{product.title}</span>
                    </a>
                  </h4>

                  {/* Price Tag (₹ 75/Piece) */}
                  <div className="mt-0.5 flex items-baseline gap-1">
                    <span className="text-lg sm:text-xl font-bold font-sans text-emerald-950 tracking-tight">
                      ₹ {product.price}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                      / {product.priceUnit}
                    </span>
                    <span className="text-[9.5px] text-stone-400 font-medium ml-auto">
                      GST Included
                    </span>
                  </div>

                  {/* Specification Breakdown */}
                  <div className="mt-2.5 space-y-1 p-2 rounded-xl bg-stone-50 border border-stone-200/70 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400 font-medium">Variety:</span>
                      <span className="font-bold text-stone-900 text-right truncate max-w-[160px]">{product.variety}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400 font-medium">Height:</span>
                      <span className="font-bold text-stone-900 text-right">{product.height}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400 font-medium">Age:</span>
                      <span className="font-bold text-stone-900 text-right">{product.age}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom: Quantity Selector & Add to Cart CTA */}
                <div className="mt-3 pt-2.5 border-t border-stone-100 flex flex-col gap-2">
                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-[11px] font-semibold text-stone-500">Quantity:</span>
                    <div className="flex items-center border border-stone-300 rounded-full bg-white shadow-2xs p-0.5">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(product.id, -10, product.minOrder)}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-100 active:scale-90 transition-all"
                        aria-label="Decrease quantity"
                      >
                        <MinusIcon className="w-3 h-3" />
                      </button>

                      <input
                        type="number"
                        min={product.minOrder}
                        value={currentQty}
                        onChange={(e) =>
                          handleDirectQuantityInput(product.id, e.target.value, product.minOrder)
                        }
                        className="w-12 text-center font-bold text-xs text-stone-950 focus:outline-hidden"
                      />

                      <button
                        type="button"
                        onClick={() => handleQuantityChange(product.id, 10, product.minOrder)}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-100 active:scale-90 transition-all"
                        aria-label="Increase quantity"
                      >
                        <PlusIcon className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Quantity Quick Add Pills */}
                  <div className="flex items-center gap-1 justify-end text-[9.5px] text-stone-500 font-medium">
                    <span>Presets:</span>
                    {[50, 100, 200].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() =>
                          setQuantities((prev) => ({
                            ...prev,
                            [product.id]: preset,
                          }))
                        }
                        className="px-1.5 py-0.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-2 px-3 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs active:scale-95 ${
                      isJustAdded
                        ? "bg-emerald-700 text-white"
                        : "bg-emerald-950 hover:bg-emerald-900 text-white"
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Added ({currentQty} {product.priceUnit}s)</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCartIcon className="w-3.5 h-3.5" />
                        <span>
                          Add to Cart • ₹{(currentQty * product.price).toLocaleString("en-IN")}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
