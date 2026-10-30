"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  XMarkIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  PhoneIcon,
  TruckIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { ProductItem } from "@/data/categoriesProductData";
import { useCart } from "@/context/CartContext";

interface PlantDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart?: (product: ProductItem, quantity: number) => void;
}

export default function PlantDetailModal({
  product,
  onClose,
  onAddToCart,
}: PlantDetailModalProps) {
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(50);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(product.defaultQty || product.minOrder || 50);
      setActiveImageIndex(0);
      setIsAdded(false);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

  const handleQuantityDelta = (delta: number) => {
    const min = product.minOrder || 10;
    setQuantity((prev) => Math.max(min, prev + delta));
  };

  const handleAddToCartClick = () => {
    addToCart(product, quantity);
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
    setIsAdded(true);
    onClose();
  };

  const handleWhatsAppEnquiry = () => {
    const message = encodeURIComponent(
      `Hello Satyasai Navkisan Nursery,\n\nI am interested in ordering:\n• Plant: ${product.title}\n• Variety: ${product.variety}\n• Quantity: ${quantity} ${product.priceUnit || "Pieces"}\n• Price: ₹${product.price} / ${product.priceUnit || "Piece"}\n\nPlease share availability and freight details to my location.`
    );
    window.open(`https://wa.me/917942637905?text=${message}`, "_blank");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container matching Panel 4 of Diagram */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-stone-200 shadow-2xl z-10 text-stone-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          {/* Left Column: Main Image + Thumbnail Strip */}
          <div className="flex flex-col gap-3.5">
            {/* Main Featured Photo */}
            <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-2xl bg-stone-100 overflow-hidden border border-stone-200/90 shadow-inner">
              <Image
                src={galleryImages[activeImageIndex] || product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-300"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-700/90 backdrop-blur-md shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {galleryImages.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-emerald-600 ring-2 ring-emerald-500/30 scale-102"
                        : "border-stone-200 hover:border-stone-400 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Title, Price, Bullet Specs, Quantity & CTAs */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Product Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight leading-snug">
                {product.title}
              </h2>

              {/* Price Display matching reference */}
              <div className="mt-2.5 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-stone-950 tracking-tight">
                  ₹{product.price}
                </span>
                <span className="text-sm font-medium text-stone-500">
                  (per {product.priceUnit || "plant"})
                </span>
              </div>

              {/* Key Bullet Specifications matching Panel 4 */}
              <div className="mt-5 space-y-3 bg-stone-50 border border-stone-200/80 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-3 text-sm text-stone-800 font-medium">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <CheckCircleIcon className="w-4 h-4" />
                  </span>
                  <span>{product.survivalRate || "High Survival Rate (98.8%+ verified)"}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-stone-800 font-medium">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <SparklesIcon className="w-4 h-4" />
                  </span>
                  <span>{product.growth || "Good Growth & vigorous rootstock development"}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-stone-800 font-medium">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheckIcon className="w-4 h-4" />
                  </span>
                  <span>{product.suitability || "Suitable for Commercial Plantation & agroforestry"}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-stone-800 font-medium">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <TruckIcon className="w-4 h-4" />
                  </span>
                  <span>{product.bulkAvailability || "Available in Bulk Quantity (Direct Farm Gate Delivery)"}</span>
                </div>
              </div>

              {/* Short Agricultural Description */}
              {product.description && (
                <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="mt-6 pt-5 border-t border-stone-200 space-y-4">
              {/* Quantity Counter */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-stone-700">Quantity (Plants):</span>
                <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-white shadow-xs">
                  <button
                    type="button"
                    onClick={() => handleQuantityDelta(-10)}
                    className="p-2.5 sm:p-3 hover:bg-stone-100 text-stone-700 transition-colors active:scale-95 cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="w-16 text-center font-bold text-stone-900 text-base">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQuantityDelta(10)}
                    className="p-2.5 sm:p-3 hover:bg-stone-100 text-stone-700 transition-colors active:scale-95 cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons matching Panel 4: Add to Cart & Enquiry Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Add to Cart (Green Button) */}
                <button
                  type="button"
                  onClick={handleAddToCartClick}
                  className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/20 transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  {isAdded ? (
                    <>
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                      <span>Added to Order!</span>
                    </>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                </button>

                {/* Enquiry Now (WhatsApp / Direct Call) */}
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full py-3.5 px-5 rounded-xl bg-stone-900 hover:bg-stone-850 text-white font-bold text-sm sm:text-base border border-stone-800 shadow-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <PhoneIcon className="w-4 h-4 text-emerald-400" />
                  <span>Enquiry Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
