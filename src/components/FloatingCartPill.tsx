"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCartIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/CartContext";

export default function FloatingCartPill() {
  const { cart, openCart, totalCartItems, totalCartAmount } = useCart();

  if (cart.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ y: 80, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 80, opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        aria-label="Nursery Cart Summary"
        className="fixed z-40 bottom-20 sm:bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 max-w-[94vw] pointer-events-auto"
      >
        <button
          onClick={openCart}
          className="flex items-center gap-2.5 sm:gap-3 py-2.5 px-4 sm:py-3 sm:px-5 rounded-full bg-emerald-950/95 hover:bg-emerald-900 text-white shadow-[0_14px_36px_rgba(6,78,59,0.55)] border border-emerald-600/70 hover:scale-105 active:scale-95 transition-all group backdrop-blur-xl cursor-pointer"
        >
          {/* Animated Shopping Cart Icon with Count Badge */}
          <div className="relative flex items-center justify-center shrink-0">
            <ShoppingCartIcon className="w-5 h-5 text-emerald-400 group-hover:rotate-6 transition-transform" />
            <span className="absolute -top-1.5 -right-2 bg-amber-400 text-stone-950 font-bold text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center border-2 border-emerald-950 shadow-xs">
              {cart.length}
            </span>
          </div>

          <div className="text-left flex items-center gap-2">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 leading-none">
                Review Order
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap mt-0.5">
                {totalCartItems.toLocaleString("en-IN")} Plants • ₹{totalCartAmount.toLocaleString("en-IN")}
              </div>
            </div>

            <span className="ml-1 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-950 bg-emerald-400 px-2.5 py-0.5 rounded-full shadow-2xs group-hover:bg-emerald-300 transition-colors whitespace-nowrap">
              <span>Cart</span>
              <ArrowRightIcon className="w-3 h-3 text-emerald-950 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </button>
      </motion.aside>
    </AnimatePresence>
  );
}
