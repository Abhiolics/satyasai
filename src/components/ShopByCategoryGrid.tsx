"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CATEGORIES_LIST } from "@/data/categoriesProductData";

export default function ShopByCategoryGrid() {
  return (
    <section className="relative w-full py-14 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Panel 1 of diagram */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
            Portfolio Categories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Shop by Plant Category
          </h2>
          <p className="mt-2.5 text-stone-600 text-sm sm:text-base">
            Explore our wide range of premium quality certified commercial plants & fruit orchards.
          </p>
        </div>

        {/* 5-column / responsive category grid matching diagram */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {CATEGORIES_LIST.map((category) => (
            <Link
              key={category.id}
              href={`/plants?category=${category.id}`}
              className="group flex flex-col rounded-2xl bg-[#fafaf9] border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-500/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Category Image */}
              <div className="relative w-full aspect-[4/3] bg-stone-100 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title & Variety count matching reference */}
              <div className="p-3 sm:p-4 text-center flex flex-col justify-between flex-1">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                  {category.name}
                </h3>
                <span className="mt-1 text-xs text-stone-500 font-medium">
                  ({category.itemCount} {category.itemCount === 1 ? "Variety" : "Varieties"})
                </span>

                <div className="mt-2.5 inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View All</span>
                  <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
