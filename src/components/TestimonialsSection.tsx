"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarSolid,
} from "@heroicons/react/24/solid";

interface Testimonial {
  id: string;
  name: string;
  initial: string;
  location: string;
  productName: string;
  rating: string;
  reviewDate: string;
  quote: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Samim",
    initial: "S",
    location: "Malda, West Bengal",
    productName: "Garden Maintenance",
    rating: "5.0",
    reviewDate: "15-August-26",
    quote: "Very reliable and expert garden maintenance team. Timely seasonal pruning and prompt organic care.",
    image: "/images/hero-estate.jpg",
  },
  {
    id: "2",
    name: "Juned Khan",
    initial: "J",
    location: "Sawai Madhopur, Rajasthan",
    productName: "Poplar Plant",
    rating: "5.0",
    reviewDate: "30-July-26",
    quote: "Top quality poplar saplings delivered directly to our farm. Straight boles and over 99% field survival.",
    image: "/images/hero-poplar.jpg",
  },
  {
    id: "3",
    name: "Shri Kant Sharma",
    initial: "S",
    location: "Bilhaur, Uttar Pradesh",
    productName: "Banana Tissue Culture Plants",
    rating: "5.0",
    reviewDate: "10-July-26",
    quote: "G-9 tissue culture banana plants showed rapid establishment and uniform growth across my Bilhaur plot.",
    image: "/images/tissue-culture.jpg",
  },
  {
    id: "4",
    name: "RAM RamMohan",
    initial: "R",
    location: "Prayagraj, Uttar Pradesh",
    productName: "Papaya Plant",
    rating: "5.0",
    reviewDate: "05-July-26",
    quote: "Taiwan Red Lady 786 papaya plants started vigorous vegetative growth immediately with zero root shock.",
    image: "/images/category-fresh.jpg",
  },
  {
    id: "5",
    name: "Audhesh Kumar Srivastava",
    initial: "A",
    location: "Prayagraj, Uttar Pradesh",
    productName: "Teak Plants",
    rating: "5.0",
    reviewDate: "09-June-26",
    quote: "Tissue-culture Burmese teak saplings arrived in prime condition. Remarkable stem girth and zero mortality.",
    image: "/images/teak-sapling.jpg",
  },
  {
    id: "6",
    name: "Lucky Anna",
    initial: "L",
    location: "Khatima, Uttarakhand",
    productName: "Sandalwood Plant",
    rating: "5.0",
    reviewDate: "07-June-26",
    quote: "Certified white sandalwood saplings with healthy host plants. Clear technical advice on pit preparation.",
    image: "/images/category-chandan.jpg",
  },
  {
    id: "7",
    name: "Dharmendra Singh",
    initial: "D",
    location: "Lucknow, Uttar Pradesh",
    productName: "Tissue Culture Pomegranate Plants",
    rating: "5.0",
    reviewDate: "06-June-26",
    quote: "Bhagwa tissue culture pomegranate plants arrived fresh with intact coco-peat plugs. Highly recommended.",
    image: "/images/category-fruit.jpg",
  },
  {
    id: "8",
    name: "Sushil",
    initial: "S",
    location: "Raipur, Chhattisgarh",
    productName: "Mango Plant",
    rating: "5.0",
    reviewDate: "31-May-26",
    quote: "Grafted mango saplings with clean graft unions delivered safely to Raipur. Healthy foliage and rapid flushing.",
    image: "/images/mango-sapling.jpg",
  },
  {
    id: "9",
    name: "AMIT KUMAR VERMA",
    initial: "A",
    location: "Lucknow, Uttar Pradesh",
    productName: "Commercial Plantation Stock",
    rating: "5.0",
    reviewDate: "13-May-26",
    quote: "Direct farm gate delivery in Lucknow. Genuine certified nursery stock with personalized agronomy support.",
    image: "/images/greenhouse-hero.jpg",
  },
  {
    id: "10",
    name: "Aman Verma",
    initial: "A",
    location: "Utraula, Uttar Pradesh",
    productName: "Papaya Plant",
    rating: "5.0",
    reviewDate: "21-February-26",
    quote: "High-yield papaya saplings with robust root systems. Fast canopy growth and valuable drip fertigation guidance.",
    image: "/images/category-fruit.jpg",
  },
  {
    id: "11",
    name: "Sapna",
    initial: "S",
    location: "Aligarh, Uttar Pradesh",
    productName: "Guava Plants",
    rating: "5.0",
    reviewDate: "20-February-26",
    quote: "VNR Bihi and Taiwan Pink guava saplings in great condition. Plants took root quickly with 100% survival.",
    image: "/images/guava-sapling.jpg",
  },
];

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-sliding animation by default
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.75;

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Double items for seamless infinite marquee gliding
  const displayItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative w-full py-12 sm:py-16 bg-[#fafaf9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-900 text-[11px] font-semibold uppercase tracking-wider mb-1.5 border border-emerald-200">
              <StarSolid className="w-3 h-3 text-amber-500" />
              <span>Verified Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-stone-950 font-normal tracking-tight">
              Cultivating Success, <span className="italic font-normal text-emerald-950">Grower by Grower.</span>
            </h2>
            <p className="text-xs text-stone-600 mt-1 max-w-xl font-normal leading-relaxed">
              Real stories and honest reviews from farmers and growers who trust us.
            </p>
          </div>

          {/* Compact Manual Navigation Chevrons */}
          <div className="flex items-center gap-1.5 self-start md:self-end">
            <button
              onClick={() => handleManualScroll("left")}
              aria-label="Previous Testimonial"
              className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 hover:text-stone-950 transition-all active:scale-95 shadow-xs"
            >
              <ChevronLeftIcon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              aria-label="Next Testimonial"
              className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 hover:text-stone-950 transition-all active:scale-95 shadow-xs"
            >
              <ChevronRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* COMPACT CAROUSEL CONTAINER WITH SMOOTH LEFT & RIGHT FOG OVERLAYS          */}
      {/* ========================================================================= */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Fog Effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-[#fafaf9] via-[#fafaf9]/90 to-transparent z-20" />

        {/* Right Fog Effect */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-[#fafaf9] via-[#fafaf9]/90 to-transparent z-20" />

        {/* Sliding Card Reel */}
        <div
          ref={scrollRef}
          className="flex gap-3.5 sm:gap-4.5 overflow-x-auto scrollbar-none px-4 sm:px-8 py-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {displayItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative w-[215px] sm:w-[235px] md:w-[250px] shrink-0 rounded-2xl bg-white border border-stone-200/90 p-2.5 sm:p-3 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top: Photo with Initial Avatar Badge & Product Name */}
              <div className="relative w-full aspect-[4/4.5] rounded-xl overflow-hidden bg-stone-100 mb-2.5">
                <Image
                  src={item.image}
                  alt={`${item.name} - ${item.location}`}
                  fill
                  sizes="250px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Initial Avatar Letter */}
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-emerald-950/90 backdrop-blur-md text-white font-bold text-xs flex items-center justify-center border border-white/30 shadow-xs">
                  {item.initial}
                </div>

                {/* Product Name & Date Pill */}
                <div className="absolute bottom-2 inset-x-2 px-2 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md text-white text-[9px] font-medium tracking-wide flex items-center justify-between">
                  <span className="truncate max-w-[130px]">{item.productName}</span>
                  <span className="text-[8.5px] text-stone-300 shrink-0 font-normal">{item.reviewDate}</span>
                </div>
              </div>

              {/* Middle: Name & Location */}
              <div className="px-0.5">
                <h3 className="font-sans font-bold text-xs sm:text-[13px] text-stone-950 tracking-tight uppercase truncate">
                  {item.name}
                </h3>
                <p className="text-[10px] text-emerald-900 font-semibold mt-0.5 truncate">
                  {item.location}
                </p>

                {/* Rating Line */}
                <div className="mt-2 flex items-baseline gap-1 border-t border-stone-100 pt-2">
                  <span className="text-lg sm:text-xl font-bold font-sans text-stone-950 tracking-tight">
                    {item.rating}
                  </span>
                  <div className="ml-auto flex items-center text-amber-500 gap-0.5">
                    <StarSolid className="w-2.5 h-2.5" />
                    <StarSolid className="w-2.5 h-2.5" />
                    <StarSolid className="w-2.5 h-2.5" />
                    <StarSolid className="w-2.5 h-2.5" />
                    <StarSolid className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Bottom: Review Quote */}
                <p className="mt-1.5 text-[11px] text-stone-600 leading-snug font-normal line-clamp-2">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
