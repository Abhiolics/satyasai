"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface HeroSectionProps {
  onOpenCalculator?: (plantId?: string) => void;
  onSelectPlant?: (plantId: string) => void;
  isAudioPlaying?: boolean;
  onToggleAudio?: () => void;
}

interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  categoryId: string;
  plantId?: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: "teak",
    tag: "Premium Quality Commercial Timber",
    title: "Teak Plants",
    subtitle:
      "Certified tissue-cultured & root-trained Burma teak saplings engineered for straight, knot-free timber boles with rapid girth expansion and 99.2% verified field survival.",
    image: "/images/hero-teak.jpg",
    buttonText: "Explore Now",
    categoryId: "teak",
    plantId: "teak",
  },
  {
    id: "guava",
    tag: "High Density Fruit Meadow",
    title: "Guava Plants",
    subtitle:
      "Fast-bearing, jumbo crisp pink-fleshed Taiwan Pink & Allahabadi guavas yielding in 8-10 months. Engineered for UHDP commercial meadow farming with 2-3 heavy harvest flushes annually.",
    image: "/images/hero-guava.jpg",
    buttonText: "Explore Now",
    categoryId: "guava",
    plantId: "guava",
  },
  {
    id: "mohgini",
    tag: "Generational Agroforestry Asset",
    title: "Mohgini Plants",
    subtitle:
      "Hardy African Mahogany saplings raised in root-trainer polybags. High disease resistance, natural termite immunity, and exponential timber valuation for visionary landowners.",
    image: "/images/hero-mohgini.jpg",
    buttonText: "Explore Now",
    categoryId: "mohgini",
    plantId: "nursery",
  },
  {
    id: "poplar",
    tag: "Rapid Growth Industrial Timber",
    title: "Poplar Plants",
    subtitle:
      "High-vigor commercial clones (109, 110 & 112) for industrial plywood, matchwood and particle board. Ready for commercial timber mandis in just 5 to 6 years with peak market pricing.",
    image: "/images/hero-poplar.jpg",
    buttonText: "Explore Now",
    categoryId: "poplar",
    plantId: "poplar",
  },
  {
    id: "lemon",
    tag: "Continuous Annual Cashflow",
    title: "Lemon Plants",
    subtitle:
      "Prolific Kagzi Baramasi & Kumbhakt high-juice varieties. Round-the-year heavy fruiting with robust resistance to citrus canker, root rot, and seasonal heat stress.",
    image: "/images/hero-lemon.jpg",
    buttonText: "Explore Now",
    categoryId: "lemon",
    plantId: "lemon",
  },
];

export default function HeroSection({
  onSelectPlant,
}: HeroSectionProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer (5.5s), pauses on hover or touch
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = SLIDES[currentIndex];

  const handleButtonClick = (slide: HeroSlide) => {
    // Redirect to respective category page as requested
    router.push(`/plants?category=${slide.categoryId}`);
  };

  return (
    <section
      aria-label="Hero Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[90vh] sm:min-h-[94vh] lg:min-h-[98vh] flex items-center overflow-hidden select-none bg-stone-950 pt-20 sm:pt-24 pb-16"
    >
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* High-legibility scrim overlays matching reference design */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 sm:from-black/80 sm:via-black/45 sm:to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Main Slide Content: Left-to-Center Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-start gap-3.5 sm:gap-5"
            >
              {/* Badge Tag matching reference */}
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-200 bg-white/10 backdrop-blur-md border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {currentSlide.tag}
              </span>

              {/* Slide Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                {currentSlide.title}
              </h1>

              {/* Subheading with rich agronomic and yield details */}
              <p className="text-white/95 text-sm sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                {currentSlide.subtitle}
              </p>

              {/* Call to Action Button - SAME VIBRANT GREEN COLOR ON ALL SLIDES */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="button"
                  onClick={() => handleButtonClick(currentSlide)}
                  className="group inline-flex items-center gap-2.5 sm:gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base sm:text-lg shadow-xl shadow-emerald-950/40 transition-all duration-200 transform hover:scale-[1.03] active:scale-95 cursor-pointer"
                >
                  <span>{currentSlide.buttonText}</span>
                  <ArrowRightIcon className="w-5 h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation: ONLY DOTS (NO CHEVRONS) */}
      <div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 sm:gap-3.5"
        role="tablist"
        aria-label="Carousel Slides"
      >
        {SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              onClick={() => goToSlide(index)}
              className="group relative p-2 focus:outline-hidden cursor-pointer"
            >
              <span
                className={`block transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/55 hover:bg-white/90 group-hover:scale-125"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
