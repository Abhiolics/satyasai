"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlantDetailModal from "@/components/PlantDetailModal";
import {
  CATEGORIES_LIST,
  PRODUCTS_BY_CATEGORY,
  ProductItem,
  CategoryId,
  getAllProducts,
} from "@/data/categoriesProductData";
import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
  FunnelIcon,
  SparklesIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

function PlantsCatalogContent() {
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get("category") as CategoryId | null;
  const initialSearch = searchParams.get("search") || "";

  // Active Category State
  const [activeCategory, setActiveCategory] = useState<CategoryId>(
    queryCategory && CATEGORIES_LIST.some((c) => c.id === queryCategory)
      ? queryCategory
      : "teak"
  );

  // Search filter query
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Selected product for Panel 4 modal
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Cart count state for visual feedback
  const [cartCount, setCartCount] = useState(0);

  // Update active category when query param changes
  useEffect(() => {
    if (queryCategory && CATEGORIES_LIST.some((c) => c.id === queryCategory)) {
      setActiveCategory(queryCategory);
    }
  }, [queryCategory]);

  useEffect(() => {
    if (initialSearch) {
      setSearchQuery(initialSearch);
    }
  }, [initialSearch]);

  const currentCategoryInfo = useMemo(() => {
    return (
      CATEGORIES_LIST.find((c) => c.id === activeCategory) || CATEGORIES_LIST[0]
    );
  }, [activeCategory]);

  // Filter products based on active category and optional search
  const displayedProducts = useMemo(() => {
    const categoryProducts = PRODUCTS_BY_CATEGORY[activeCategory] || [];
    if (!searchQuery.trim()) {
      return categoryProducts;
    }
    const q = searchQuery.toLowerCase().trim();
    // If user is searching, also allow finding matching plants across categories if none in active
    const inCategory = categoryProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.variety.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
    );
    if (inCategory.length > 0) return inCategory;

    // Search across all products
    return getAllProducts().filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.variety.toLowerCase().includes(q) ||
        p.categoryId.toLowerCase().includes(q)
    );
  }, [activeCategory, searchQuery]);

  const handleAddToCart = (product: ProductItem, qty: number) => {
    setCartCount((prev) => prev + qty);
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col justify-between selection:bg-emerald-950 selection:text-emerald-100">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        {/* Breadcrumb Navigation matching Panel 2 & 3 */}
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 mb-6 font-medium"
        >
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            Home
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-emerald-800 font-semibold">
            {currentCategoryInfo.name}
          </span>
          {searchQuery && (
            <>
              <ChevronRightIcon className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-stone-700">Search: &quot;{searchQuery}&quot;</span>
            </>
          )}
        </nav>

        {/* Category Header Banner matching Panel 2 & 3 */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-stone-900 text-white p-6 sm:p-10 mb-8 sm:mb-10 shadow-xl shadow-stone-900/10 min-h-[160px] sm:min-h-[200px] flex flex-col justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={currentCategoryInfo.bannerImage || currentCategoryInfo.image}
              alt={currentCategoryInfo.name}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/65 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-white/10 backdrop-blur-md mb-2">
              <SparklesIcon className="w-3.5 h-3.5" />
              Certified Nursery Strains
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {currentCategoryInfo.name}
            </h1>
            <p className="mt-2 text-white/90 text-sm sm:text-base leading-relaxed">
              {currentCategoryInfo.description || currentCategoryInfo.subtitle}
            </p>
          </div>
        </div>

        {/* 2-Column Catalog Layout: Left Categories Sidebar + Right Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT SIDEBAR: Categories list matching Panel 2 & 3 */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-stone-200/90 p-4 sm:p-5 shadow-xs sticky top-28">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200">
                <h2 className="font-bold text-stone-900 text-base tracking-tight flex items-center gap-2">
                  <FunnelIcon className="w-4 h-4 text-emerald-700" />
                  <span>Categories</span>
                </h2>
                <span className="text-xs font-semibold text-stone-400">
                  {CATEGORIES_LIST.length} Strains
                </span>
              </div>

              {/* Category Buttons List with Green Active Pill */}
              <div className="flex flex-col gap-1.5">
                {CATEGORIES_LIST.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setSearchQuery("");
                        window.history.pushState({}, "", `/plants?category=${cat.id}`);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-emerald-100/80 text-emerald-950 font-bold border border-emerald-300/80 shadow-xs"
                          : "text-stone-700 hover:text-stone-950 hover:bg-stone-50 border border-transparent"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-emerald-700 text-white font-bold"
                            : "bg-stone-100 text-stone-500"
                        }`}
                      >
                        {cat.itemCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT: Header & Product Grid */}
          <section className="lg:col-span-3 flex flex-col">
            {/* Header with Title and Search Input */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">
                  {currentCategoryInfo.name} Varieties ({displayedProducts.length})
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  Click any variety to inspect rootstock specs, spacing, and live ordering.
                </p>
              </div>

              {/* In-page live search input */}
              <div className="relative w-full sm:w-72">
                <MagnifyingGlassIcon className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search varieties..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white border border-stone-300 focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 shadow-xs"
                />
              </div>
            </div>

            {/* Product Cards Grid matching Panels 2 & 3 */}
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {displayedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group flex flex-col rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex-1 justify-between"
                  >
                    <div>
                      {/* Variety Photo */}
                      <div className="relative w-full aspect-square bg-stone-100 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.badge && (
                          <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-950 bg-emerald-100/90 border border-emerald-200">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Variety Details */}
                      <div className="p-4">
                        <h3 className="font-bold text-stone-950 text-base group-hover:text-emerald-700 transition-colors line-clamp-1">
                          {product.variety}
                        </h3>
                        <p className="text-xs text-stone-500 mt-0.5">
                          {currentCategoryInfo.name}
                        </p>

                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-xs text-stone-500 font-medium">From</span>
                          <span className="text-lg font-extrabold text-stone-950">
                            ₹{product.price}
                          </span>
                          <span className="text-xs text-stone-400">/{product.priceUnit || "plant"}</span>
                        </div>
                      </div>
                    </div>

                    {/* View Details Button matching Panel 2 & 3 */}
                    <div className="p-4 pt-0">
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-emerald-900/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>View Details</span>
                        <ChevronRightIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-stone-200 p-10 text-center flex flex-col items-center justify-center my-8">
                <MagnifyingGlassIcon className="w-10 h-10 text-stone-300 mb-3" />
                <h3 className="font-bold text-stone-800 text-lg">No matching plants found</h3>
                <p className="text-stone-500 text-sm mt-1 max-w-md">
                  No plants matched &quot;{searchQuery}&quot; in this category. Try clearing your search query or explore other categories.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold"
                >
                  Clear Search
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Product Detail Modal (Panel 4) */}
      <PlantDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <Footer />
    </main>
  );
}

export default function PlantsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fafaf9] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin" />
        </div>
      }
    >
      <PlantsCatalogContent />
    </Suspense>
  );
}
