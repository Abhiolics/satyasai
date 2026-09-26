"use client";

import React from "react";

interface VarietyDockProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onSelectPlant: (plantId: string) => void;
}

export default function VarietyDock({
  activeTab,
  onTabChange,
  onSelectPlant,
}: VarietyDockProps) {
  const tabs = [
    { id: "all", label: "Overview", icon: "🍃" },
    { id: "mango", label: "Mango Grafts", icon: "🥭" },
    { id: "guava", label: "Taiwan Guava", icon: "🍐" },
    { id: "teak", label: "Burma Teak", icon: "🌲" },
    { id: "nursery", label: "Polyhouse Lab", icon: "🌱" },
  ];

  return (
    <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 max-w-[92vw]">
      <div className="glass-pill rounded-full p-1.5 sm:p-2 flex items-center gap-1 sm:gap-1.5 shadow-2xl border border-white/80">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onTabChange(tab.id);
                if (tab.id !== "all") {
                  onSelectPlant(tab.id);
                }
              }}
              className={`relative px-3 sm:px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                isActive
                  ? "bg-emerald-950 text-white shadow-md shadow-emerald-950/25 font-semibold"
                  : "text-stone-700 hover:text-stone-950 hover:bg-white/60"
              }`}
            >
              <span className="text-sm">{tab.icon}</span>
              <span className="hidden xs:inline">{tab.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
