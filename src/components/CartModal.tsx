"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  ShoppingCartIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  UserIcon,
  PhoneIcon,
  MapPinIcon,
  DocumentTextIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "@/context/CartContext";

const CUSTOMER_INFO_KEY = "satyasai_customer_info_v1";

export default function CartModal() {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCartItems,
    totalCartAmount,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  const [farmAcreage, setFarmAcreage] = useState("");

  // Restore remembered customer info
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_INFO_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.customerName) setCustomerName(parsed.customerName);
        if (parsed.customerPhone) setCustomerPhone(parsed.customerPhone);
        if (parsed.customerLocation) setCustomerLocation(parsed.customerLocation);
        if (parsed.farmAcreage) setFarmAcreage(parsed.farmAcreage);
      }
    } catch {
      // ignore
    }
  }, []);

  // Lock body scroll when cart modal is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  const handleConfirmOrderWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) return;

    // Save info for future visits
    try {
      localStorage.setItem(
        CUSTOMER_INFO_KEY,
        JSON.stringify({
          customerName,
          customerPhone,
          customerLocation,
          farmAcreage,
        })
      );
    } catch {
      // ignore
    }

    const itemsSummary = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.title}* (${item.variety})\n   • Specs: ${item.height} | ${item.age}\n   • Quantity: ${item.cartQuantity} ${item.priceUnit || "plants"} × ₹${item.price} = ₹${(
            item.cartQuantity * item.price
          ).toLocaleString("en-IN")}`
      )
      .join("\n\n");

    const message = `🌿 *NEW NURSERY ORDER INQUIRY*\n*Satyasai Navkisan Green India Private Limited*\nLucknow, Uttar Pradesh | GST: 09AAZCS8852J1Z6\n────────────────────────────\n👤 *CUSTOMER DETAILS:*\n• *Name:* ${customerName.trim() || "Customer"}\n• *Delivery Location:* ${customerLocation.trim() || "Lucknow, UP"}\n• *Phone:* ${customerPhone.trim() || "Not provided"}${farmAcreage.trim() ? `\n• *Plantation Size:* ${farmAcreage.trim()}` : ""
      }\n\n📦 *ORDERED NURSERY STOCK:*\n${itemsSummary}\n\n────────────────────────────\n💰 *ESTIMATED ORDER TOTAL:* ₹${totalCartAmount.toLocaleString(
        "en-IN"
      )} (${totalCartItems} total plants/units)\n🌱 *Delivery Mode:* Direct Nursery Dispatch / Farm Gate Delivery in UP\n\nPlease confirm sapling availability, dispatch timeline, and advance invoice details.`;

    const whatsappUrl = `https://wa.me/919956879905?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Cart and Order Checkout"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            className="fixed inset-0 bg-stone-950/75 backdrop-blur-sm sm:backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ y: "100%", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] bg-[#fafaf9] rounded-t-3xl sm:rounded-3xl border border-stone-200/90 shadow-2xl text-stone-900 z-10 flex flex-col overflow-hidden"
          >
            {/* Mobile Drag Indicator */}
            <div className="w-12 h-1.5 bg-stone-300 rounded-full mx-auto mt-2.5 sm:hidden shrink-0" />

            {/* Sticky Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-white/95 backdrop-blur-md border-b border-stone-200 shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 shrink-0 shadow-xs">
                  <ShoppingCartIcon className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold font-sans text-stone-950 tracking-tight">
                      Nursery Order Cart
                    </h3>
                    {cart.length > 0 && (
                      <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                        {cart.length} {cart.length === 1 ? "variety" : "varieties"}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-500">
                    {totalCartItems > 0
                      ? `${totalCartItems.toLocaleString("en-IN")} plants selected • Direct Farm Gate Rates`
                      : "Add healthy nursery saplings to checkout"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                {cart.length > 0 && (
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-[11px] font-semibold text-stone-400 hover:text-red-600 px-2.5 py-1 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Clear
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeCart}
                  aria-label="Close cart"
                  className="p-2 sm:p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 overscroll-contain">
              {cart.length === 0 ? (
                /* Empty Cart State */
                <div className="text-center py-12 sm:py-16 px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                    <ShoppingCartIcon className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600/70" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-stone-900">
                    Your nursery cart is empty
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto mt-1 leading-relaxed">
                    Explore our certified grafted fruit saplings, tissue-cultured teak, and high-yield varieties to place your nursery booking.
                  </p>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="mt-5 px-6 py-2.5 rounded-full bg-emerald-950 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-950/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Browse Nursery Catalog
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-400">
                      <span>Selected Plant Strains:</span>
                      <span className="text-stone-500 font-semibold lowercase">
                        {cart.length} {cart.length === 1 ? "item" : "items"}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-emerald-300 transition-all flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3"
                        >
                          {/* Image & Details */}
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <h4 className="font-bold text-xs sm:text-sm text-stone-950 tracking-tight truncate">
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-emerald-900 font-semibold truncate">
                                {item.variety} • {item.height || "Certified stock"}
                              </p>
                              <div className="text-xs font-bold text-stone-900 mt-0.5">
                                ₹{item.price}/{item.priceUnit || "plant"} × {item.cartQuantity} ={" "}
                                <span className="text-emerald-900 font-extrabold">
                                  ₹{(item.price * item.cartQuantity).toLocaleString("en-IN")}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Stepper & Remove Button */}
                          <div className="flex items-center justify-between xs:justify-end w-full xs:w-auto gap-2.5 pt-2 xs:pt-0 border-t xs:border-t-0 border-stone-100 shrink-0">
                            {/* Stepper with step presets */}
                            <div className="flex items-center border border-stone-300 rounded-full bg-stone-50 p-0.5 shadow-2xs">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, -10)}
                                aria-label="Decrease quantity by 10"
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-200 active:scale-95 transition-colors cursor-pointer"
                              >
                                <MinusIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                              </button>
                              <span className="w-12 text-center font-bold text-xs sm:text-sm text-stone-950 select-none">
                                {item.cartQuantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, 10)}
                                aria-label="Increase quantity by 10"
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-200 active:scale-95 transition-colors cursor-pointer"
                              >
                                <PlusIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                              </button>
                            </div>

                            {/* Trash Button */}
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remove ${item.title} from cart`}
                              className="p-2 rounded-full text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Financial Summary Card */}
                  <div className="p-4 sm:p-4.5 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs">
                    <div className="flex justify-between text-stone-600">
                      <span>Total Plant Saplings:</span>
                      <span className="font-bold text-stone-900">
                        {totalCartItems.toLocaleString("en-IN")} Units
                      </span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Transit Nursery Packaging:</span>
                      <span className="font-semibold text-emerald-800 flex items-center gap-1">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Shockproof Crates Included</span>
                      </span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>GST Billing & Verification:</span>
                      <span className="font-semibold text-stone-900">
                        Included (09AAZCS8852J1Z6)
                      </span>
                    </div>
                    <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline">
                      <span className="font-bold text-xs sm:text-sm text-stone-950">
                        Estimated Order Total:
                      </span>
                      <span className="text-xl sm:text-2xl font-bold font-sans text-emerald-950">
                        ₹{totalCartAmount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* Customer Information & WhatsApp Dispatch Form */}
                  <form onSubmit={handleConfirmOrderWhatsApp} className="space-y-3.5 pt-1">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Delivery & Contact Details:
                      </div>
                      <span className="text-[11px] text-stone-500 font-medium">
                        * Required fields
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <UserIcon className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ramesh Chandra Verma"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all text-stone-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                          WhatsApp / Phone Number *
                        </label>
                        <div className="relative">
                          <PhoneIcon className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9876543210"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all text-stone-900"
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
                          <MapPinIcon className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Malihabad, Lucknow"
                            value={customerLocation}
                            onChange={(e) => setCustomerLocation(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all text-stone-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                          Plantation Acreage (Optional)
                        </label>
                        <div className="relative">
                          <DocumentTextIcon className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="e.g. 5 Acres Orchard"
                            value={farmAcreage}
                            onChange={(e) => setFarmAcreage(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all text-stone-900"
                          />
                        </div>
                      </div>
                    </div>

                    {/* CONFIRM ORDER ON WHATSAPP BUTTON (+91 99568 79905) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 sm:py-4 px-6 rounded-2xl sm:rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base tracking-tight flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/25 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer"
                      >
                        <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Confirm Order via WhatsApp • ₹{totalCartAmount.toLocaleString("en-IN")}</span>
                      </button>

                      <p className="text-[11px] text-center text-stone-500 mt-2 flex items-center justify-center gap-1.5">
                        <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Direct official booking sent to Satyasai Navkisan Nursery Desk.</span>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Sticky Bottom Actions on Desktop & Mobile */}
            {cart.length > 0 && (
              <div className="p-3 sm:p-4 bg-stone-50 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500 shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium">Lucknow Dispatch Center</span>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="font-bold text-emerald-800 hover:text-emerald-950 hover:underline cursor-pointer"
                >
                  Continue Shopping →
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
