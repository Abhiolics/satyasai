"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  XMarkIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ScaleIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { PlantVariety } from "@/data/plantData";

interface PlantDetailModalProps {
  plant: PlantVariety | null;
  onClose: () => void;
  onOpenCalculator: (plantId: string) => void;
}

export default function PlantDetailModal({
  plant,
  onClose,
  onOpenCalculator,
}: PlantDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (plant) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [plant, onClose]);

  if (!plant) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#fafaf9] border border-stone-200/80 shadow-2xl shadow-emerald-950/20 text-stone-900 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-stone-900/10 hover:bg-stone-900/20 backdrop-blur-md text-stone-800 transition-all hover:scale-105"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Column: Macro Botanical Image */}
          <div className="relative md:col-span-5 bg-stone-100 min-h-[300px] md:min-h-[480px]">
            <Image
              src={plant.image}
              alt={plant.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-white backdrop-blur-md shadow-sm mb-2">
                <SparklesIcon className="w-3.5 h-3.5" />
                {plant.badge}
              </span>
              <p className="text-xs uppercase tracking-wider text-emerald-200/80 font-mono">
                {plant.botanicalName}
              </p>
              <h3 className="text-2xl font-serif font-medium mt-1">
                {plant.name}
              </h3>
            </div>
          </div>

          {/* Right Column: In-depth Technical & Agricultural Specs */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
                Satyasai Navkisan Certified Mother Stock
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 mt-1 mb-3">
                {plant.name}
              </h2>
              <p className="text-sm leading-relaxed text-stone-600 mb-6">
                {plant.fullDesc}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <ClockIcon className="w-3.5 h-3.5 text-emerald-600" />
                    First Fruiting / Harvest
                  </div>
                  <div className="text-sm font-semibold text-stone-900">
                    {plant.firstHarvest}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <ScaleIcon className="w-3.5 h-3.5 text-emerald-600" />
                    Recommended Spacing
                  </div>
                  <div className="text-sm font-semibold text-stone-900">
                    {plant.spacing}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <ArrowTrendingUpIcon className="w-3.5 h-3.5 text-emerald-600" />
                    Yield / Return
                  </div>
                  <div className="text-sm font-semibold text-stone-900">
                    {plant.yieldPerTree}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
                    Transplant Survival
                  </div>
                  <div className="text-sm font-semibold text-emerald-700">
                    {plant.survivalRate}
                  </div>
                </div>
              </div>

              {/* Highlighting Varieties Available */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                  Available Clones & Grafts In Nursery:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {plant.varietiesAvailable.map((v, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-900 border border-emerald-200/70"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenCalculator(plant.id);
                }}
                className="flex-1 py-3 px-5 rounded-full bg-emerald-950 text-emerald-50 text-sm font-medium hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/10"
              >
                <span>Calculate Acreage & Saplings</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/919422000000?text=Hello%20Satyasai%20Navkisan%20Green%20India,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(
                  plant.name
                )}%20saplings.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-full bg-white border border-stone-300 text-stone-800 text-sm font-medium hover:bg-stone-50 transition-colors text-center"
              >
                Order Direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
