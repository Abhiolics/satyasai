"use client";

import React, { useState } from "react";
import { HOTSPOTS } from "@/data/plantData";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface EstateHotspotsProps {
  activeTab: string;
  onSelectPlant: (plantId: string) => void;
}

export default function EstateHotspots({
  activeTab,
  onSelectPlant,
}: EstateHotspotsProps) {
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);

  return (
    <>
      {HOTSPOTS.map((spot) => {
        const isHighlighted = activeTab === "all" || activeTab === spot.plantId;
        const isHovered = hoveredHotspot === spot.id;

        return (
          <div
            key={spot.id}
            style={{ top: spot.top, left: spot.left }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${
              isHighlighted ? "opacity-100 scale-100" : "opacity-30 scale-75 pointer-events-none"
            }`}
          >
            {/* Pulsing Beacon Hotspot Button */}
            <button
              onClick={() => onSelectPlant(spot.plantId)}
              onMouseEnter={() => setHoveredHotspot(spot.id)}
              onMouseLeave={() => setHoveredHotspot(null)}
              aria-label={`Explore ${spot.title}`}
              className="group relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-transform active:scale-95"
            >
              {/* Outer pulsing ring */}
              <span
                className={`absolute inset-0 rounded-full beacon-ring ${
                  spot.pulseColor || "bg-emerald-400"
                }`}
              />
              
              {/* Frosted core disk */}
              <span className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-lg flex items-center justify-center text-stone-900 group-hover:scale-110 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-all">
                <span className="w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-emerald-400 transition-colors" />
              </span>
            </button>

            {/* Apple style floating preview card on hover */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 pointer-events-none transition-all duration-200 z-30 ${
                isHovered
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-95"
              }`}
            >
              <div className="glass-dark text-white rounded-2xl px-4 py-2.5 shadow-2xl whitespace-nowrap min-w-[210px] text-center border border-white/20">
                <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-semibold mb-0.5">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>Satyasai Rootstock</span>
                </div>
                <div className="text-xs font-semibold text-white">
                  {spot.title}
                </div>
                <div className="text-[11px] text-stone-300 font-light mt-0.5">
                  {spot.subtitle}
                </div>
                <div className="mt-1 text-[10px] text-emerald-300 font-medium flex items-center justify-center gap-1 pt-1 border-t border-white/10">
                  <span>Tap to inspect variety</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </div>
              </div>
              {/* Tooltip caret */}
              <div className="w-2.5 h-2.5 bg-stone-900 rotate-45 mx-auto -mt-1 border-r border-b border-white/20" />
            </div>
          </div>
        );
      })}
    </>
  );
}
