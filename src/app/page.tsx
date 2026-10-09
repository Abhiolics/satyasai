"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlantDetailModal from "@/components/PlantDetailModal";
import AcreageCalculatorModal from "@/components/AcreageCalculatorModal";
import { PLANT_VARIETIES } from "@/data/plantData";
import TestimonialsSection from "@/components/TestimonialsSection";
import CategoriesSection from "@/components/CategoriesSection";
import CompanyOverview from "@/components/CompanyOverview";
import AboutJourneySection from "@/components/AboutJourneySection";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorPlantId, setCalculatorPlantId] = useState<string>("mango");

  const handleOpenCalculator = (plantId?: string) => {
    if (plantId) setCalculatorPlantId(plantId);
    setIsCalculatorOpen(true);
  };

  const selectedPlant = selectedPlantId ? PLANT_VARIETIES[selectedPlantId] : null;

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col justify-between selection:bg-emerald-950 selection:text-emerald-100">
      {/* Navigation */}
      <Navbar
        onOpenCalculator={handleOpenCalculator}
        onSelectPlant={(id) => setSelectedPlantId(id)}
      />

      {/* Hero Section with Full-Bleed Image Background */}
      <HeroSection
        onOpenCalculator={handleOpenCalculator}
        onSelectPlant={(id) => setSelectedPlantId(id)}
      />

      {/* Categories Bar & 3x3 Product Catalog with Multi-Quantity & WhatsApp Checkout */}
      <CategoriesSection />

      {/* Verified Company Overview & Corporate Credentials */}
      <CompanyOverview />

      {/* Our Journey And Values with Sketchy Icons */}
      <AboutJourneySection />

      {/* 4 Horticultural Excellence Pillars Below Hero */}
      {/* <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-widest bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Certified Nursery Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 mt-2">
            Elite Horticultural Strains
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Tap any variety to inspect rootstock age, spacing, and commercial yield.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => setSelectedPlantId("mango")}
            className="group cursor-pointer p-5 rounded-3xl bg-white border border-stone-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
              <span className="font-mono text-emerald-800 font-bold">01</span>
              <span className="text-2xl group-hover:scale-125 transition-transform">🥭</span>
            </div>
            <h3 className="text-base font-semibold text-stone-900 group-hover:text-emerald-950 transition-colors">
              Grafted Mangoes
            </h3>
            <p className="text-xs text-stone-500 mt-1 leading-relaxed">
              Gir Kesar & Ratnagiri Alphonso. Resilient polyembryonic rootstocks.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Inspect specs & spacing</span>
              <span className="ml-1">→</span>
            </div>
          </div>

          <div
            onClick={() => setSelectedPlantId("guava")}
            className="group cursor-pointer p-5 rounded-3xl bg-white border border-stone-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
              <span className="font-mono text-emerald-800 font-bold">02</span>
              <span className="text-2xl group-hover:scale-125 transition-transform">🍐</span>
            </div>
            <h3 className="text-base font-semibold text-stone-900 group-hover:text-emerald-950 transition-colors">
              Taiwan Pink Guava
            </h3>
            <p className="text-xs text-stone-500 mt-1 leading-relaxed">
              Rapid 9-month fruiting. High-density commercial meadow (UHDP).
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Inspect specs & spacing</span>
              <span className="ml-1">→</span>
            </div>
          </div>

          <div
            onClick={() => setSelectedPlantId("teak")}
            className="group cursor-pointer p-5 rounded-3xl bg-white border border-stone-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
              <span className="font-mono text-emerald-800 font-bold">03</span>
              <span className="text-2xl group-hover:scale-125 transition-transform">🌲</span>
            </div>
            <h3 className="text-base font-semibold text-stone-900 group-hover:text-emerald-950 transition-colors">
              Burma Clonal Teak
            </h3>
            <p className="text-xs text-stone-500 mt-1 leading-relaxed">
              Tissue-cultured knot-free timber boles. 14-year timber equity.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Inspect specs & spacing</span>
              <span className="ml-1">→</span>
            </div>
          </div>

          <div
            onClick={() => setSelectedPlantId("nursery")}
            className="group cursor-pointer p-5 rounded-3xl bg-white border border-stone-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
              <span className="font-mono text-emerald-800 font-bold">04</span>
              <span className="text-2xl group-hover:scale-125 transition-transform">🌱</span>
            </div>
            <h3 className="text-base font-semibold text-stone-900 group-hover:text-emerald-950 transition-colors">
              Mother Polyhouse Lab
            </h3>
            <p className="text-xs text-stone-500 mt-1 leading-relaxed">
              Automated micro-mist hardening with 99.2% field survival.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Inspect specs & spacing</span>
              <span className="ml-1">→</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Auto-Sliding Testimonials with Smooth Fog Fade */}
      <TestimonialsSection />

      {/* Botanical Forest Canopy Footer */}
      <Footer />

      {/* Modals */}
      <PlantDetailModal
        plant={selectedPlant}
        onClose={() => setSelectedPlantId(null)}
        onOpenCalculator={(id) => handleOpenCalculator(id)}
      />

      <AcreageCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        defaultPlantId={calculatorPlantId}
      />
    </main>
  );
}
