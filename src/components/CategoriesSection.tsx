"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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

interface CartItem extends ProductItem {
  cartQuantity: number;
}

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("mango");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Horizontal scroll container reference for circular category reel
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Customer checkout form state
  const [customerName, setCustomerName] = useState("");
  const [customerLocation, setCustomerLocation] = useState("Lucknow, Uttar Pradesh");
  const [customerPhone, setCustomerPhone] = useState("");
  const [farmAcreage, setFarmAcreage] = useState("");

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
    const qty = quantities[product.id] || product.defaultQty;
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          cartQuantity: next[existingIndex].cartQuantity + qty,
        };
        return next;
      } else {
        return [...prev, { ...product, cartQuantity: qty }];
      }
    });

    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1600);
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const nextQty = item.cartQuantity + delta;
            return nextQty > 0 ? { ...item, cartQuantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.cartQuantity, 0);
  const totalCartAmount = cart.reduce((acc, item) => acc + item.price * item.cartQuantity, 0);

  // Generate WhatsApp Order Message targeting 9412742566
  const handleConfirmOrderWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) return;

    const itemsSummary = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.title}* (${item.variety})\n   • Specs: ${item.height} | ${item.age}\n   • Quantity: ${item.cartQuantity} ${item.priceUnit}s × ₹${item.price} = ₹${(
            item.cartQuantity * item.price
          ).toLocaleString("en-IN")}`
      )
      .join("\n\n");

    const message = `🌿 *NEW NURSERY ORDER INQUIRY*\n*Satyasai Navkisan Green India Private Limited*\nLucknow, Uttar Pradesh | GST: 09AAZCS8852J1Z6\n────────────────────────────\n👤 *CUSTOMER DETAILS:*\n• *Name:* ${customerName.trim() || "Customer"}\n• *Delivery Location:* ${customerLocation.trim() || "Lucknow, UP"}\n• *Phone:* ${customerPhone.trim() || "Not provided"}${
      farmAcreage.trim() ? `\n• *Plantation Size:* ${farmAcreage.trim()}` : ""
    }\n\n📦 *ORDERED NURSERY STOCK:*\n${itemsSummary}\n\n────────────────────────────\n💰 *ESTIMATED ORDER TOTAL:* ₹${totalCartAmount.toLocaleString(
      "en-IN"
    )} (${totalCartItems} total plants/units)\n🌱 *Delivery Mode:* Direct Nursery Dispatch / Farm Gate Delivery in UP\n\nPlease confirm sapling availability, dispatch timeline, and advance invoice details.`;

    const whatsappUrl = `https://wa.me/919412742566?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
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
                onClick={() => setIsCartOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-950 text-white text-xs font-semibold hover:bg-emerald-900 transition-all shadow-xs active:scale-95 mr-2"
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
        {/* 1. MODERN CIRCULAR CATEGORIES REEL (Matching User Reference Image)        */}
        {/* ========================================================================= */}
        <div className="relative w-full py-3 mb-8">
          <div
            ref={categoryScrollRef}
            className="flex items-start gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-none pb-2 pt-1 px-1"
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
                  {/* Modern Circular Image Frame */}
                  <div
                    className={`relative w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full p-1 transition-all duration-300 ${
                      isActive
                        ? "ring-[2.5px] ring-emerald-800 ring-offset-2 ring-offset-[#fafaf9] shadow-lg shadow-emerald-950/20 scale-105"
                        : "ring-1.5 ring-stone-200/90 ring-offset-2 ring-offset-[#fafaf9] hover:ring-emerald-600/70 hover:scale-105 shadow-2xs hover:shadow-md"
                    }`}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-stone-100">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 768px) 80px, 90px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Active Radial Indicator */}
                      {isActive && (
                        <div className="absolute inset-0 bg-emerald-950/15 backdrop-blur-[0.5px]" />
                      )}
                    </div>

                    {/* Active Corner Check Badge */}
                    {isActive && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-emerald-900 text-white flex items-center justify-center shadow-xs border-2 border-white">
                        <CheckIcon className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Category Title Below Circle (Matching Reference Image) */}
                  <div className="mt-2.5 text-center flex flex-col items-center">
                    <span
                      className={`text-xs sm:text-[13px] tracking-tight leading-tight line-clamp-2 max-w-[85px] sm:max-w-[95px] transition-colors ${
                        isActive
                          ? "font-bold text-emerald-950"
                          : "font-medium text-stone-700 group-hover:text-stone-950"
                      }`}
                    >
                      {cat.name}
                    </span>

                    {/* Active Underline Pill */}
                    {isActive ? (
                      <span className="w-5 h-1 rounded-full bg-emerald-800 mt-1 animate-in fade-in zoom-in duration-200" />
                    ) : (
                      <span className="w-1.5 h-1 rounded-full bg-transparent mt-1 group-hover:bg-stone-300 transition-colors" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Active Header Bar */}
        <div className="flex flex-wrap items-center justify-between pb-3.5 mb-6 border-b border-stone-200 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Showing 3×3 Catalog:
            </span>
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

      {/* ========================================================================= */}
      {/* 3. FLOATING CART PILL (Appears when items are in cart)                     */}
      {/* ========================================================================= */}
      {cart.length > 0 && (
        <aside aria-label="Nursery Cart Summary" className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-3 py-3 px-5 rounded-full bg-emerald-950 hover:bg-emerald-900 text-white shadow-2xl border border-emerald-800/50 hover:scale-105 active:scale-95 transition-all group"
          >
            <div className="relative">
              <ShoppingCartIcon className="w-5 h-5 text-emerald-400 group-hover:rotate-6 transition-transform" />
              <span className="absolute -top-1.5 -right-2 bg-amber-400 text-stone-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-emerald-950">
                {cart.length}
              </span>
            </div>

            <div className="text-left">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                Confirm Order
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-tight">
                {totalCartItems} Plants • ₹{totalCartAmount.toLocaleString("en-IN")}
              </div>
            </div>

            <span className="ml-1 text-emerald-400 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </aside>
      )}

      {/* ========================================================================= */}
      {/* 4. CART & CHECKOUT MODAL (WhatsApp Order to 9412742566)                   */}
      {/* ========================================================================= */}
      {isCartOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-stone-950/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#fafaf9] border border-stone-200 shadow-2xl text-stone-900 z-10 flex flex-col">
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-7 py-4 bg-white/95 backdrop-blur-md border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900">
                  <ShoppingCartIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-sans text-stone-950 tracking-tight">
                    Your Nursery Order Cart
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    {cart.length} varieties selected • {totalCartItems} total plants
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Items & Checkout Form */}
            <div className="p-5 sm:p-7 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCartIcon className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-stone-600">Your nursery cart is currently empty.</p>
                  <p className="text-xs text-stone-400 mt-1">Select varieties from the categories above to build your order.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-5 py-2 rounded-full bg-emerald-950 text-white text-xs font-semibold"
                  >
                    Browse Categories
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      Selected Plant Varieties:
                    </div>

                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs flex items-center gap-3 sm:gap-4"
                      >
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                          <Image src={item.image} alt={item.title} fill sizes="64px" className="object-cover" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xs sm:text-sm text-stone-950 tracking-tight truncate">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-emerald-900 font-semibold truncate">
                            {item.variety} • {item.height}
                          </p>
                          <div className="text-xs font-bold text-stone-900 mt-0.5">
                            ₹{item.price}/{item.priceUnit} × {item.cartQuantity} ={" "}
                            <span className="text-emerald-950">
                              ₹{(item.price * item.cartQuantity).toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>

                        {/* Item Stepper & Delete */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center border border-stone-300 rounded-full bg-stone-50 p-0.5">
                            <button
                              type="button"
                              onClick={() => handleUpdateCartQuantity(item.id, -10)}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-200"
                            >
                              <MinusIcon className="w-3 h-3" />
                            </button>
                            <span className="w-10 text-center font-bold text-xs text-stone-950">
                              {item.cartQuantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleUpdateCartQuantity(item.id, 10)}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-200"
                            >
                              <PlusIcon className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveFromCart(item.id)}
                            title="Remove item"
                            className="p-1.5 rounded-full text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Financial Summary */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs">
                    <div className="flex justify-between text-stone-600">
                      <span>Total Plant Quantity:</span>
                      <span className="font-bold text-stone-900">{totalCartItems} Units</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Nursery Transit Packaging:</span>
                      <span className="font-semibold text-emerald-800">Included (Shockproof Crates)</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Applicable Taxes:</span>
                      <span className="font-semibold text-stone-900">GST Included (09AAZCS8852J1Z6)</span>
                    </div>
                    <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline">
                      <span className="font-bold text-sm text-stone-950">Estimated Order Total:</span>
                      <span className="text-xl sm:text-2xl font-bold font-sans text-emerald-950">
                        ₹{totalCartAmount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* Customer Information Form */}
                  <form onSubmit={handleConfirmOrderWhatsApp} className="space-y-3.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      Delivery & Contact Details (For WhatsApp Confirmation):
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <UserIcon className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ramesh Chandra Verma"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                          WhatsApp / Mobile Number *
                        </label>
                        <div className="relative">
                          <PhoneIcon className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9876543210"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                          Delivery City / District *
                        </label>
                        <div className="relative">
                          <MapPinIcon className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Malihabad, Lucknow"
                            value={customerLocation}
                            onChange={(e) => setCustomerLocation(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                          Plantation Acreage (Optional)
                        </label>
                        <div className="relative">
                          <DocumentTextIcon className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            placeholder="e.g. 5 Acres Orchard"
                            value={farmAcreage}
                            onChange={(e) => setFarmAcreage(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700"
                          />
                        </div>
                      </div>
                    </div>

                    {/* CONFIRM ORDER ON WHATSAPP BUTTON (9412742566) */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm tracking-tight flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/25 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Confirm Your Order via WhatsApp (9412742566)</span>
                      </button>
                      <p className="text-[11px] text-center text-stone-500 mt-2">
                        A detailed order summary will be sent directly to Satyasai Navkisan Nursery Desk (+91 9412742566).
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
