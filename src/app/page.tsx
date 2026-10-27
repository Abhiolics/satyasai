"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopByCategoryGrid from "@/components/ShopByCategoryGrid";
import CategoriesSection from "@/components/CategoriesSection";
import CompanyOverview from "@/components/CompanyOverview";
import AboutJourneySection from "@/components/AboutJourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AcreageCalculatorModal from "@/components/AcreageCalculatorModal";

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorPlantId, setCalculatorPlantId] = useState<string>("teak");

  const handleOpenCalculator = (plantId?: string) => {
    if (plantId) setCalculatorPlantId(plantId);
    setIsCalculatorOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col justify-between selection:bg-emerald-950 selection:text-emerald-100">
      {/* Navigation Header with Working Real-time Search */}
      <Navbar />

      {/* 5-Slide Auto Hero Carousel with Same Green CTA & Category Redirects */}
      <HeroSection />

      {/* Panel 1: Shop by Plant Category Grid */}
      <ShopByCategoryGrid />

      {/* Full Product Catalog with Multi-Quantity & WhatsApp Ordering */}
      <CategoriesSection />

      {/* Verified Company Overview & Corporate Credentials */}
      <CompanyOverview />

      {/* Our Journey And Values */}
      <AboutJourneySection />

      {/* Auto-Sliding Customer Testimonials */}
      <TestimonialsSection />

      {/* Botanical Forest Canopy Footer */}
      <Footer />

      {/* Acreage Calculator Modal */}
      <AcreageCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        defaultPlantId={calculatorPlantId}
      />
    </main>
  );
}
