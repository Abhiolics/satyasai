"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRightIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  SunIcon,
  MoonIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import VarietyDock from "./VarietyDock";

interface HeroSectionProps {
  onOpenCalculator?: (plantId?: string) => void;
  onSelectPlant: (plantId: string) => void;
  isAudioPlaying?: boolean;
  onToggleAudio?: () => void;
}

const HEADLINE_OPTIONS = [
  {
    prefix: "Beyond harvest,",
    highlight: "we build the eternal.",
    subtitle:
      "Cultivating high-yielding fruit orchards and timber forestry for visionary growers. From certified mango and guava grafts to tissue-cultured teak estates.",
  },
  {
    prefix: "Rooted in earth,",
    highlight: "we nurture living legacies.",
    subtitle:
      "India's premier certified botanical nursery. Empowering modern agriculture with high-density fruit orchards and generational teak equity.",
  },
  {
    prefix: "Beyond silence,",
    highlight: "we cultivate the eternal green.",
    subtitle:
      "45+ acres of certified mother blocks and automated polyhouses. Precision-engineered rootstocks for guaranteed field survival.",
  },
];

export default function HeroSection({
  onSelectPlant,
  isAudioPlaying,
  onToggleAudio,
}: HeroSectionProps) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lightingMode, setLightingMode] = useState<"day" | "golden" | "dusk">("day");
  // Default background is the user-uploaded greenhouse conservatory image
  const [backgroundScene, setBackgroundScene] = useState<"greenhouse" | "estate">("greenhouse");

  const currentHeadline = HEADLINE_OPTIONS[headlineIndex];

  const handleNextHeadline = () => {
    setHeadlineIndex((prev) => (prev + 1) % HEADLINE_OPTIONS.length);
  };

  const getLightingFilter = () => {
    switch (lightingMode) {
      case "golden":
        return "sepia(20%) saturate(125%) hue-rotate(-8deg) brightness(1.03)";
      case "dusk":
        return "brightness(0.85) contrast(1.1) saturate(115%) hue-rotate(12deg)";
      default:
        return "none";
    }
  };

  const bgImageSrc =
    backgroundScene === "greenhouse"
      ? "/images/greenhouse-hero.jpg"
      : "/images/hero-estate.jpg";

  return (
    <section
      className={`relative w-full overflow-hidden select-none transition-all duration-500 flex flex-col justify-between ${
        isFullscreen
          ? "fixed inset-0 z-50 h-screen w-screen"
          : "min-h-[100vh] lg:min-h-[105vh] pt-24 sm:pt-28 pb-10"
      }`}
    >
      {/* 1. USER'S BOTANICAL CONSERVATORY BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <div
          className="relative w-full h-full transition-all duration-700 ease-out"
          style={{ filter: getLightingFilter() }}
        >
          <Image
            src={bgImageSrc}
            alt="Satyasai Navkisan Green India Botanical Conservatory & Polyhouse"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center sm:object-[center_35%]"
          />
        </div>

        {/* Soft atmospheric upper gradient for pristine typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf9]/94 via-[#fafaf9]/65 to-transparent h-[58%] pointer-events-none" />

        {/* Dynamic lighting overlays */}
        {lightingMode === "golden" && (
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-transparent to-amber-200/10 pointer-events-none mix-blend-screen" />
        )}
        {lightingMode === "dusk" && (
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-blue-950/20 to-transparent pointer-events-none" />
        )}

        {/* Bottom subtle gradient */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-stone-950/45 via-stone-950/15 to-transparent pointer-events-none" />
      </div>

      {/* 2. TEXT DIRECTLY ON TOP OF IMAGE */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Big Editorial Headline */}
        <div
          onClick={handleNextHeadline}
          className="group cursor-pointer transition-transform duration-300 active:scale-[0.99] mt-12"
        >
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.4rem] leading-[1.05] tracking-[-0.03em] text-stone-950 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)] transition-all duration-300">
            {currentHeadline.prefix}{" "}
            <span className="italic font-normal text-emerald-950">
              {currentHeadline.highlight}
            </span>
          </h1>
        </div>

        {/* Editorial Subtitle */}
        <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base md:text-lg text-stone-800 max-w-2xl mx-auto leading-relaxed font-normal px-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
          {currentHeadline.subtitle}
        </p>

        {/* Explore Products Button */}
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("products");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.hash = "#products";
              }
            }}
            className="px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-stone-950 hover:bg-stone-900 text-white font-semibold text-sm sm:text-base shadow-xl shadow-stone-950/25 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore Products</span>
            <ArrowRightIcon className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 3. Bottom Right Floating Controls */}
      <div className="absolute bottom-5 sm:bottom-8 right-4 sm:right-8 z-30 flex flex-col gap-2.5">
        {/* Expand / Minimize Fullscreen Toggle */}
       

        {/* Scene Switcher */}
        {/* <button
          onClick={() =>
            setBackgroundScene(
              backgroundScene === "greenhouse" ? "estate" : "greenhouse"
            )
          }
          aria-label="Switch Background View"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/70 flex items-center justify-center text-stone-850 hover:text-stone-950 hover:bg-white shadow-xl transition-all active:scale-95 group"
          title={
            backgroundScene === "greenhouse"
              ? "Current: Botanical Conservatory (Click for Valley Estate)"
              : "Current: Valley Estate (Click for Botanical Conservatory)"
          }
        >
          <Square2StackIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-800 group-hover:scale-110 transition-transform" />
        </button> */}

        {/* Atmosphere Time of Day Toggle */}
        {/* <button
          onClick={() => {
            if (lightingMode === "day") setLightingMode("golden");
            else if (lightingMode === "golden") setLightingMode("dusk");
            else setLightingMode("day");
          }}
          aria-label="Toggle Atmosphere Lighting"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/70 flex items-center justify-center text-stone-850 hover:text-stone-950 hover:bg-white shadow-xl transition-all active:scale-95 group"
          title={`Lighting: ${lightingMode.toUpperCase()}`}
        >
          {lightingMode === "day" && (
            <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 group-hover:rotate-45 transition-transform" />
          )}
          {lightingMode === "golden" && (
            <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 group-hover:scale-110 transition-transform" />
          )}
          {lightingMode === "dusk" && (
            <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 group-hover:-rotate-12 transition-transform" />
          )}
        </button> */}
      </div>

    
    </section>
  );
}
