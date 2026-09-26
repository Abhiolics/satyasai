"use client";

import React, { useState, useEffect } from "react";
import {
  XMarkIcon,
  CalculatorIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

interface AcreageCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlantId?: string;
}

export default function AcreageCalculatorModal({
  isOpen,
  onClose,
  defaultPlantId = "mango",
}: AcreageCalculatorModalProps) {
  const [cropType, setCropType] = useState<string>(defaultPlantId || "mango");
  const [acres, setAcres] = useState<number>(2);
  const [density, setDensity] = useState<"high" | "standard">("high");

  useEffect(() => {
    if (defaultPlantId) {
      setCropType(defaultPlantId);
    }
  }, [defaultPlantId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Calculation parameters
  let plantsPerAcre = 100;
  let spacingText = "15 ft x 15 ft";
  let firstHarvestYears = "3 Years";
  let returnMetric = "₹3.5 - 5.5 Lakhs / Acre / Year (Peak)";

  if (cropType === "mango") {
    if (density === "high") {
      plantsPerAcre = 400; // Ultra high density (10x10 ft)
      spacingText = "10 ft x 10 ft (UHDP Canopy)";
      firstHarvestYears = "2.5 – 3 Years";
      returnMetric = "₹4.5 – 7.5 Lakhs / Acre / Year";
    } else {
      plantsPerAcre = 120; // 18x18 ft
      spacingText = "18 ft x 18 ft (Traditional Canopy)";
      firstHarvestYears = "3.5 – 4 Years";
      returnMetric = "₹3.0 – 5.0 Lakhs / Acre / Year";
    }
  } else if (cropType === "guava") {
    if (density === "high") {
      plantsPerAcre = 600; // 6x8 or 6x10 ft
      spacingText = "6 ft x 8 ft (UHDP Meadow)";
      firstHarvestYears = "8 – 10 Months (Rapid Cashflow)";
      returnMetric = "₹5.0 – 8.5 Lakhs / Acre / Year";
    } else {
      plantsPerAcre = 350; // 10x10 ft
      spacingText = "10 ft x 10 ft (Semi-Intensive)";
      firstHarvestYears = "12 Months";
      returnMetric = "₹3.5 – 6.0 Lakhs / Acre / Year";
    }
  } else if (cropType === "teak") {
    if (density === "high") {
      plantsPerAcre = 800; // Block plantation 7x7 or 8x8 ft
      spacingText = "7 ft x 8 ft (Block Agro-Forestry)";
      firstHarvestYears = "12 – 14 Years Timber Maturity";
      returnMetric = "₹40 – ₹60 Lakhs Total Timber Girth Value";
    } else {
      plantsPerAcre = 500; // Border & wide row
      spacingText = "9 ft x 9 ft (Spaced Timber)";
      firstHarvestYears = "14 Years Timber Maturity";
      returnMetric = "₹30 – ₹45 Lakhs Timber Value";
    }
  } else {
    // Mixed horticulture
    plantsPerAcre = 300;
    spacingText = "Multi-tier Agro-Forestry Layout";
    firstHarvestYears = "1.5 – 3 Years staggered";
    returnMetric = "Continuous diversified cash flow";
  }

  const totalSaplings = Math.round(plantsPerAcre * acres);
  const extraBufferSaplings = Math.round(totalSaplings * 0.05); // 5% buffer recommendation

  const whatsAppText = encodeURIComponent(
    `Hello Satyasai Navkisan Green India! I calculated my plantation requirement on your website:\n\n- Crop: ${cropType.toUpperCase()}\n- Acreage: ${acres} Acres\n- Density: ${density.toUpperCase()}\n- Total Saplings Needed: ${totalSaplings} (+${extraBufferSaplings} buffer)\n- Spacing: ${spacingText}\n\nPlease share booking rates and dispatch schedule.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/65 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#fafaf9] border border-stone-200 shadow-2xl p-6 sm:p-8 text-stone-900 z-10">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
          <CalculatorIcon className="w-4 h-4 text-emerald-600" />
          Horticultural Spacing Engine
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-1">
          Plantation & Yield Estimator
        </h2>
        <p className="text-sm text-stone-600 mb-6">
          Calculate the exact certified sapling requirement, recommended pit grid, and harvest horizons for your estate.
        </p>

        {/* Crop Selector */}
        <div className="mb-5">
          <label className="block text-xs font-semibold uppercase text-stone-500 tracking-wider mb-2">
            1. Select Plantation Crop:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: "mango", label: "Grafted Mango", icon: "🥭" },
              { id: "guava", label: "Taiwan Guava", icon: "🍐" },
              { id: "teak", label: "Burma Teak", icon: "🌲" },
              { id: "nursery", label: "Mixed Orchard", icon: "🌱" },
            ].map((crop) => (
              <button
                key={crop.id}
                onClick={() => setCropType(crop.id)}
                className={`py-3 px-3 rounded-2xl text-xs font-semibold flex flex-col items-center gap-1.5 transition-all border ${
                  cropType === crop.id
                    ? "bg-emerald-950 text-emerald-100 border-emerald-950 shadow-md shadow-emerald-950/20"
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
                }`}
              >
                <span className="text-xl">{crop.icon}</span>
                <span>{crop.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Acreage Slider & Input */}
        <div className="mb-5 p-4 rounded-2xl bg-white border border-stone-200">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">
              2. Total Land Area:
            </label>
            <span className="text-base font-bold text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              {acres} {acres === 1 ? "Acre" : "Acres"} ({Math.round(acres * 40)} Gunthas)
            </span>
          </div>
          <input
            type="range"
            min={0.5}
            max={25}
            step={0.5}
            value={acres}
            onChange={(e) => setAcres(parseFloat(e.target.value))}
            className="w-full accent-emerald-800 cursor-pointer h-2 bg-stone-200 rounded-lg"
          />
          <div className="flex justify-between text-[11px] text-stone-400 mt-1">
            <span>0.5 Acre</span>
            <span>5 Acres</span>
            <span>15 Acres</span>
            <span>25+ Acres</span>
          </div>
        </div>

        {/* Density Toggle */}
        <div className="mb-6">
          <label className="block text-xs font-semibold uppercase text-stone-500 tracking-wider mb-2">
            3. Plantation Method:
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setDensity("high")}
              className={`p-3 rounded-2xl text-left border transition-all ${
                density === "high"
                  ? "bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/20 text-emerald-950"
                  : "bg-white border-stone-200 text-stone-700 hover:border-stone-300"
              }`}
            >
              <div className="text-xs font-bold flex items-center justify-between">
                <span>High-Density (UHDP)</span>
                {density === "high" && <CheckIcon className="w-3.5 h-3.5 text-emerald-700" />}
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Maximum commercial yield per acre with precision canopy pruning.
              </p>
            </button>

            <button
              onClick={() => setDensity("standard")}
              className={`p-3 rounded-2xl text-left border transition-all ${
                density === "standard"
                  ? "bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/20 text-emerald-950"
                  : "bg-white border-stone-200 text-stone-700 hover:border-stone-300"
              }`}
            >
              <div className="text-xs font-bold flex items-center justify-between">
                <span>Traditional / Wide Canopy</span>
                {density === "standard" && <CheckIcon className="w-3.5 h-3.5 text-emerald-700" />}
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Spacious layout allowing tractor tilling & seasonal inter-cropping.
              </p>
            </button>
          </div>
        </div>

        {/* Live Calculation Results Card */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-950 to-stone-900 text-emerald-50 shadow-xl mb-6">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <span className="text-xs text-emerald-300/90 uppercase tracking-widest font-mono">
              Certified Allocation Estimate
            </span>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              99.2% Survival Verified
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-xs text-emerald-300/70 mb-0.5">Primary Saplings</div>
              <div className="text-3xl font-serif font-bold text-white">
                {totalSaplings.toLocaleString()}
              </div>
              <div className="text-[10px] text-emerald-300/60 mt-0.5">
                +{extraBufferSaplings} recommended buffer
              </div>
            </div>

            <div>
              <div className="text-xs text-emerald-300/70 mb-0.5">Pit Spacing Grid</div>
              <div className="text-sm sm:text-base font-semibold text-white mt-1">
                {spacingText}
              </div>
              <div className="text-[10px] text-emerald-300/60 mt-0.5">
                Pit size: 2x2x2 ft ideal
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs text-emerald-300/70 mb-0.5">First Commercial Crop</div>
              <div className="text-sm sm:text-base font-semibold text-white mt-1">
                {firstHarvestYears}
              </div>
              <div className="text-[10px] text-emerald-300/60 mt-0.5">
                Certified disease-free stock
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs flex items-center justify-between">
            <span className="text-emerald-200/80">Projected Return Horizon:</span>
            <span className="font-semibold text-amber-300">{returnMetric}</span>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/919422000000?text=${whatsAppText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-6 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-all"
          >
            <span>Reserve {totalSaplings} Saplings for Dispatch</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium transition-colors"
          >
            Adjust Options
          </button>
        </div>
      </div>
    </div>
  );
}
