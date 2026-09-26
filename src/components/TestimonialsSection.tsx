"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  MapPinIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  CalendarIcon,
  PhoneIcon,
  HandThumbUpIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarSolid,
  CheckBadgeIcon,
  HandThumbUpIcon as HandThumbUpSolid,
} from "@heroicons/react/24/solid";

interface ReviewSection {
  title: string;
  content: string;
}

interface ReviewGalleryItem {
  src: string;
  caption: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  acres: string;
  rating: string;
  reviewsCount: string;
  reviewTitle: string;
  reviewDate: string;
  orderId: string;
  variety: string;
  quantity: string;
  spacing: string;
  quote: string;
  yearPlanted: string;
  survivalRate: string;
  harvestMetric: string;
  verificationBadge: string;
  image: string;
  helpfulCount: number;
  ratingsBreakdown: {
    rootstock: number;
    transit: number;
    survival: number;
    support: number;
  };
  highlights: string[];
  detailedSections: ReviewSection[];
  nurseryResponse: {
    author: string;
    role: string;
    date: string;
    text: string;
  };
  gallery: ReviewGalleryItem[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "RAMESH CHANDRA VERMA",
    role: "Heritage Mango Orchardist",
    location: "Malihabad, Lucknow",
    acres: "14 Acres",
    rating: "5.0",
    reviewsCount: "29 REVIEWS",
    reviewTitle:
      "99.2% Field Survival in Malihabad Winter — Most Dependable Mango Grafts in Uttar Pradesh",
    reviewDate: "October 18, 2024",
    orderId: "SNK-2023-MLH8841",
    variety: "Gir Kesar & Alphonso Grafts",
    quantity: "1,200 Certified Grafts",
    spacing: "10 × 10 ft Semi-Meadow Grid",
    quote:
      "1,200 Gir Kesar & Alphonso grafts planted with 99% field survival. Heavy flowering arrived in the 2nd season.",
    yearPlanted: "Established July 2023",
    survivalRate: "99.2% Survival Verified",
    harvestMetric: "First Heavy Flowering in Season 2",
    verificationBadge: "Verified Malihabad Mango Grower",
    image: "/images/testimonial-ramesh.jpg",
    helpfulCount: 48,
    ratingsBreakdown: {
      rootstock: 5.0,
      transit: 5.0,
      survival: 4.9,
      support: 5.0,
    },
    highlights: [
      "Intact Root Ball in Cocopeat",
      "Zero Winter Shock in Lucknow",
      "2 Free Agronomist Field Visits",
      "Certified Polyembryonic Rootstock",
    ],
    detailedSections: [
      {
        title: "1. Rootstock Quality & Farm-Gate Delivery",
        content:
          "Our family has cultivated traditional Dussehri in Malihabad for three generations. In July 2023, we decided to diversify 14 acres into export-grade Gir Kesar and Ratnagiri Alphonso using Satyasai Navkisan's certified stone-grafted saplings. All 1,200 saplings arrived directly at our farm gate in Malihabad in shockproof ventilated crates. Every plant had a damp, intact coco-peat root ball with secondary lateral roots vigorous and white. The graft unions were clean, firmly healed, and free from any fungal collar rot.",
      },
      {
        title: "2. Surviving the Severe Lucknow Winter Cold Wave",
        content:
          "We followed the pit spacing and farmyard manure guidelines provided by their Lucknow office. Despite the severe cold wave and dense fog in Lucknow during December–January, survival exceeded 99.2%. Because the nursery conducts automated polyhouse micro-mist hardening prior to dispatch, our saplings showed zero transplant shock and resumed leaf flushing immediately with spring warming.",
      },
      {
        title: "3. Season 2 Flowering & Agronomy Support",
        content:
          "By the second season, vegetative growth was astonishingly uniform. We recorded heavy, healthy panicle flowering across the entire 14-acre block. Their senior agronomist visited our orchard twice to guide us on canopy pruning, blossom protection, and micronutrient spray. Satyasai Navkisan is hands down the most dependable nursery in Uttar Pradesh.",
      },
    ],
    nurseryResponse: {
      author: "Dr. R.K. Pandey",
      role: "Chief Horticulturist, Satyasai Navkisan Green India",
      date: "October 20, 2024",
      text: "Pranam Ramesh Chandra ji. We are honoured to support Malihabad's world-renowned horticultural legacy. Your 99.2% survival rate is a testament to both our polyhouse root-hardening protocols and your meticulous orchard management. Our technical team will visit again ahead of the summer fruit-sizing stage to monitor canopy architecture.",
    },
    gallery: [
      {
        src: "/images/mango-sapling.jpg",
        caption: "Certified stone-grafted saplings with intact root balls upon farm delivery in Malihabad",
      },
      {
        src: "/images/hero-estate.jpg",
        caption: "14-acre Malihabad orchard block established with high-density grid",
      },
      {
        src: "/images/tissue-culture.jpg",
        caption: "Polyhouse micro-mist hardening batch before Lucknow dispatch",
      },
    ],
  },
  {
    id: "2",
    name: "ADITYA PRATAP SINGH",
    role: "UHDP Agripreneur",
    location: "Mohanlalganj, Lucknow",
    acres: "8 Acres",
    rating: "4.9",
    reviewsCount: "34 REVIEWS",
    reviewTitle:
      "Commercial First Flush in Just 9 Months — 550g Average Fruit Weight in High-Density Grid",
    reviewDate: "November 04, 2024",
    orderId: "SNK-2024-MHL9102",
    variety: "Taiwan Pink & VNR Guava",
    quantity: "4,800 Meadow Saplings",
    spacing: "6 × 8 ft Ultra High Density (UHDP)",
    quote:
      "First harvest in just 9 months on high-density grid (6x8 ft). Jumbo 500g average fruit weight.",
    yearPlanted: "Established Feb 2024",
    survivalRate: "99.5% Survival Verified",
    harvestMetric: "First Commercial Harvest in 9 Months",
    verificationBadge: "Commercial UHDP Guava Estate",
    image: "/images/testimonial-aditya.jpg",
    helpfulCount: 39,
    ratingsBreakdown: {
      rootstock: 5.0,
      transit: 4.8,
      survival: 5.0,
      support: 5.0,
    },
    highlights: [
      "Rapid 9-Month Return",
      "Jumbo 500g+ Fruit Size",
      "Custom Drip Fertigation Chart",
      "99.5% Verified Field Survival",
    ],
    detailedSections: [
      {
        title: "1. High-Density Meadow Layout & Sapling Arrival",
        content:
          "Commercial UHDP (Ultra High Density Plantation) requires supreme root vigor, and Satyasai Navkisan delivered beyond expectations. We transplanted 4,800 Taiwan Pink guava saplings across 8 acres in Mohanlalganj at a tight 6x8 ft grid spacing. When the consignment arrived, each plant had clean foliage, no nematode galls, and a well-developed root plug ready for immediate mechanized trenching.",
      },
      {
        title: "2. Rapid Growth & Jumbo Fruit Flush",
        content:
          "Within 6 months, the plants achieved robust branch caliper and secondary branching. By the 9th month, our first commercial harvest flush began. The fruits averaged between 480g and 600g with a crisp pink core, minimal seeds, and high brix sweetness. We supplied directly to Lucknow's wholesale mandi and premium fruit outlets at Rs. 65/kg, yielding a faster break-even than any traditional crop.",
      },
      {
        title: "3. Technical Agronomy Backing",
        content:
          "Satyasai's Lucknow agronomist provided a weekly water-soluble fertigation chart calibrated for Mohanlalganj soil. Any commercial grower in UP seeking high cash-flow horticulture should partner with them without hesitation.",
      },
    ],
    nurseryResponse: {
      author: "Vikas Sharma",
      role: "UHDP Project Lead, Satyasai Navkisan Green India",
      date: "November 06, 2024",
      text: "Thank you Aditya ji! Achieving 550g average fruit weight at 9 months in Mohanlalganj demonstrates the superior vigor of our clonal mother blocks. We are glad our fertigation schedule yielded prime market returns for you.",
    },
    gallery: [
      {
        src: "/images/guava-sapling.jpg",
        caption: "Taiwan Pink guava sapling showing active apical shoot growth",
      },
      {
        src: "/images/hero-estate.jpg",
        caption: "8-acre Mohanlalganj orchard under automated drip irrigation",
      },
      {
        src: "/images/tissue-culture.jpg",
        caption: "Automated climate-controlled hardening bays at Satyasai nursery",
      },
    ],
  },
  {
    id: "3",
    name: "ANITA DEVI KUSHWAHA",
    role: "Horticulture Director",
    location: "Gomti Nagar, Lucknow",
    acres: "6 Acres",
    rating: "5.0",
    reviewsCount: "42 REVIEWS",
    reviewTitle:
      "Zero Transplant Shock & 100% Survival — True Polyhouse Bio-Hardened Nursery Stock",
    reviewDate: "January 22, 2025",
    orderId: "SNK-2023-GOM7721",
    variety: "Exotic Fruit Nursery Stock (Mango, Guava & Citrus)",
    quantity: "950 Multi-Variety Saplings",
    spacing: "12 × 12 ft Organic Layout",
    quote:
      "The mother stock vigor from Satyasai Navkisan is unmatched in UP. Polyhouse hardening ensures zero transplant shock.",
    yearPlanted: "Established Sept 2023",
    survivalRate: "100% Survival Verified",
    harvestMetric: "Zero Shock Bio-Hardened",
    verificationBadge: "Certified Organic Orchardist",
    image: "/images/testimonial-anita.jpg",
    helpfulCount: 56,
    ratingsBreakdown: {
      rootstock: 5.0,
      transit: 5.0,
      survival: 5.0,
      support: 5.0,
    },
    highlights: [
      "100% Field Survival",
      "Bio-Hardened Root Balls",
      "Certified Virus-Indexed Stock",
      "Doorstep Lucknow Farm Delivery",
    ],
    detailedSections: [
      {
        title: "1. Certified Disease-Free Nursery Stock",
        content:
          "As an organic orchard grower supplying certified produce, nursery stock certification and disease freedom are non-negotiable. Many local nurseries sell field-dug saplings with damaged taproots and soil-borne fungal pathogens. Satyasai Navkisan's automated polyhouse hardening facility in Uttar Pradesh guarantees virus-indexed rootstocks grown in sterilized media.",
      },
      {
        title: "2. Transplantation in Kakori & Gomti Nagar Belt",
        content:
          "The plants we received had well-established mycorrhizal roots in coco-peat cavities. Even during the post-monsoon transplanting window in our Kakori farm, we achieved 100% survival across all 950 plants. Not a single sapling wilted or experienced leaf drop.",
      },
      {
        title: "3. Service & Transparency",
        content:
          "Their prompt doorstep delivery right to our farm gate in Lucknow saved us huge logistical headaches. Their team is transparent, scientifically trained, and always available on WhatsApp for advisory support.",
      },
    ],
    nurseryResponse: {
      author: "Dr. R.K. Pandey",
      role: "Chief Horticulturist, Satyasai Navkisan Green India",
      date: "January 24, 2025",
      text: "Thank you Anita ji for your glowing validation. Our bio-hardening protocol in coco-peat plug trays was specifically engineered to eliminate transplant mortality for precision organic growers like yourself.",
    },
    gallery: [
      {
        src: "/images/tissue-culture.jpg",
        caption: "Virus-indexed mother stock hardening under micro-mist polyhouse",
      },
      {
        src: "/images/mango-sapling.jpg",
        caption: "Intact mycorrhizal root network ready for organic field planting",
      },
      {
        src: "/images/greenhouse-hero.jpg",
        caption: "Satyasai Navkisan climate-controlled research greenhouse",
      },
    ],
  },
  {
    id: "4",
    name: "VIRENDRA SINGH RAWAT",
    role: "Timber Plantation Owner",
    location: "Bakshi Ka Talab (BKT), Lucknow",
    acres: "22 Acres",
    rating: "4.8",
    reviewsCount: "37 REVIEWS",
    reviewTitle:
      "4,500 Tissue-Culture Burmese Teak Saplings — Knot-Free Boles & 28cm+ Girth in 24 Months",
    reviewDate: "December 12, 2024",
    orderId: "SNK-2022-BKT5401",
    variety: "Burmese Clonal Teak (Tectona grandis)",
    quantity: "4,500 Clonal Plants",
    spacing: "8 × 10 ft Agro-Forestry Grid",
    quote:
      "4,500 tissue-culture Burmese Teak saplings planted. Straight, knot-free boles with rapid girth expansion.",
    yearPlanted: "Established Aug 2022",
    survivalRate: "99.0% Survival Verified",
    harvestMetric: "Rapid 24-Mo Girth Growth (28cm+)",
    verificationBadge: "Registered Timber Agro-Forestry",
    image: "/images/testimonial-virendra.jpg",
    helpfulCount: 33,
    ratingsBreakdown: {
      rootstock: 5.0,
      transit: 4.7,
      survival: 4.9,
      support: 5.0,
    },
    highlights: [
      "Tissue-Cultured Clonal Purity",
      "Knot-Free Straight Timber Boles",
      "28cm+ Girth in 24 Months",
      "Generational Timber Investment",
    ],
    detailedSections: [
      {
        title: "1. Clonal Tissue-Culture Superiority",
        content:
          "Commercial timber is a generational asset, so choosing the right clone is paramount. Common wild seed-grown teak develops crooked boles and early lateral forks, which severely reduces timber board-feet value at harvest. Satyasai Navkisan supplied 4,500 clonal tissue-culture Burmese Teak plants for our 22-acre estate in Bakshi Ka Talab.",
      },
      {
        title: "2. 24-Month Growth Milestone",
        content:
          "After 24 months, the straightness and uniform cylindrical girth of the trees are exceptional. The average girth at breast height (GBH) has already crossed 28 centimeters. The clonal uniformity is striking — every row looks identical in height and vigor, with lush broad leaves and thick stems.",
      },
      {
        title: "3. Long-Term Timber Equity",
        content:
          "For any investor or landowner in Uttar Pradesh looking at commercial agro-forestry for long-term capital appreciation, Satyasai Navkisan's clonal teak is the indisputable benchmark in quality.",
      },
    ],
    nurseryResponse: {
      author: "Sunil Dwivedi",
      role: "Director of Silviculture, Satyasai Navkisan",
      date: "December 15, 2024",
      text: "Greetings Rawat ji. Clonal Burmese Teak propagation requires rigorous meristem micro-propagation to guarantee knot-free cylindrical trunks. Seeing 28cm+ GBH at 24 months in BKT confirms our elite mother tree selection.",
    },
    gallery: [
      {
        src: "/images/teak-sapling.jpg",
        caption: "Burmese clonal tissue-culture teak saplings in nursery secondary hardening",
      },
      {
        src: "/images/hero-estate.jpg",
        caption: "22-acre agro-forestry timber estate in Bakshi Ka Talab, Lucknow",
      },
      {
        src: "/images/tissue-culture.jpg",
        caption: "Sterile lab propagation bays for high-equity timber clones",
      },
    ],
  },
  {
    id: "5",
    name: "MOHD. RIZWAN USMANI",
    role: "Commercial Fruit Grower",
    location: "Chinhat, Lucknow",
    acres: "10 Acres",
    rating: "4.9",
    reviewsCount: "26 REVIEWS",
    reviewTitle:
      "Prompt Lucknow Farm Delivery — All-Season Baramasi Mangoes & Kagzi Limes Flawless",
    reviewDate: "February 28, 2025",
    orderId: "SNK-2023-CHT6904",
    variety: "All-Season Mango & Kagzi Lime Grafts",
    quantity: "1,400 Plants (Mixed Lot)",
    spacing: "10 × 12 ft Mixed Orchard",
    quote:
      "Direct farm gate delivery in Lucknow. Root balls arrived fresh and healthy with expert pit-spacing layout.",
    yearPlanted: "Established Oct 2023",
    survivalRate: "98.8% Survival Verified",
    harvestMetric: "Regular Multi-Season Yield",
    verificationBadge: "Verified Horticultural Grower",
    image: "/images/testimonial-rizwan.jpg",
    helpfulCount: 27,
    ratingsBreakdown: {
      rootstock: 5.0,
      transit: 5.0,
      survival: 4.8,
      support: 5.0,
    },
    highlights: [
      "Continuous All-Season Yield",
      "Kagzi Lime High Acidity Clone",
      "Expert Pit Spacing Manual",
      "98.8% Survival in Lucknow Soil",
    ],
    detailedSections: [
      {
        title: "1. Mixed Fruit Plantation Setup",
        content:
          "We ordered a mixed consignment of all-season Baramasi mangoes and Kagzi limes for our 10-acre plot near Chinhat. Because our goal was regular year-round cash flow, nursery reliability was vital. Every crate arrived in peak condition with damp root balls, clean graft unions, and zero mechanical damage.",
      },
      {
        title: "2. Plantation Pit Spacing & Planting Support",
        content:
          "The customer care team in Lucknow provided a comprehensive pit preparation manual detailing exact farmyard manure, neem cake, and micronutrient ratios. Two years later, our orchard is thriving and producing regular staggered fruit sets. The Kagzi limes are thin-skinned and heavily loaded.",
      },
      {
        title: "3. Strong Recommendation in Lucknow",
        content:
          "Satyasai Navkisan stands out because they are genuinely based in Lucknow and understand our local soil, climate, and mandi dynamics. I recommend them to all fellow farmers across Lucknow and adjoining districts.",
      },
    ],
    nurseryResponse: {
      author: "Dr. R.K. Pandey",
      role: "Chief Horticulturist, Satyasai Navkisan Green India",
      date: "March 02, 2025",
      text: "Shukriya Rizwan bhai. Mixed horticulture with all-season Baramasi mango and Kagzi lime is one of the smartest diversification strategies for Uttar Pradesh growers. We look forward to visiting your Chinhat orchard during the upcoming bloom.",
    },
    gallery: [
      {
        src: "/images/mango-sapling.jpg",
        caption: "Baramasi grafted mango stock ready for transplanting",
      },
      {
        src: "/images/guava-sapling.jpg",
        caption: "Certified root-hardened fruit saplings in transport crates",
      },
      {
        src: "/images/hero-estate.jpg",
        caption: "10-acre mixed orchard under cultivation near Chinhat, Lucknow",
      },
    ],
  },
];

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Testimonial | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [helpfulVoted, setHelpfulVoted] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-sliding animation by default
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.75;

    const step = () => {
      if (!isPaused && !selectedReview && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, selectedReview]);

  // Lock body scroll and listen for keyboard navigation when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedReview) return;
      if (e.key === "Escape") {
        setSelectedReview(null);
      } else if (e.key === "ArrowLeft") {
        handlePrevReview();
      } else if (e.key === "ArrowRight") {
        handleNextReview();
      }
    };

    if (selectedReview) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedReview]);

  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleOpenReview = (item: Testimonial) => {
    setSelectedReview(item);
    setSelectedPhotoIndex(0);
  };

  const handlePrevReview = () => {
    if (!selectedReview) return;
    const currentIndex = TESTIMONIALS.findIndex((t) => t.id === selectedReview.id);
    const prevIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    setSelectedReview(TESTIMONIALS[prevIndex]);
    setSelectedPhotoIndex(0);
  };

  const handleNextReview = () => {
    if (!selectedReview) return;
    const currentIndex = TESTIMONIALS.findIndex((t) => t.id === selectedReview.id);
    const nextIndex = (currentIndex + 1) % TESTIMONIALS.length;
    setSelectedReview(TESTIMONIALS[nextIndex]);
    setSelectedPhotoIndex(0);
  };

  const handleToggleHelpful = (id: string) => {
    setHelpfulVoted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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
              <span>Verified Grower Reviews • Lucknow & Uttar Pradesh</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-stone-950 font-normal tracking-tight">
              Cultivating Success, <span className="italic font-normal text-emerald-950">Grower by Grower.</span>
            </h2>
            <p className="text-xs text-stone-600 mt-1 max-w-xl font-normal leading-relaxed">
              Tap the arrow on any grower card to inspect full harvest verification, survival metrics, and verified feedback.
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

        {/* Sliding Card Reel (Compact Width & Spacing matching Reference) */}
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
              onClick={() => handleOpenReview(item)}
              className="group relative w-[210px] sm:w-[230px] md:w-[245px] shrink-0 rounded-2xl bg-white border border-stone-200/90 p-2.5 sm:p-3  transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Top: Compact Portrait Photo in Rounded Frame with Action Arrow */}
              <div className="relative w-full aspect-[4/4.5] rounded-xl overflow-hidden bg-stone-100 mb-2.5">
                <Image
                  src={item.image}
                  alt={`${item.name} - ${item.location}`}
                  fill
                  sizes="245px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Right Floating Arrow Button (Matches User Reference Image) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenReview(item);
                  }}
                  aria-label={`Read full review from ${item.name}`}
                  title="Click to view full review in modal"
                  className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-white/80 shadow-md flex items-center justify-center text-stone-900 group-hover:bg-emerald-950 group-hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 z-10"
                >
                  <ArrowUpRightIcon className="w-4 h-4 stroke-[2.5]" />
                </button>

                {/* Compact Plantation Acreage Chip */}
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-stone-950/75 backdrop-blur-md text-white text-[9px] font-medium tracking-wide">
                  {item.acres} • {item.variety}
                </div>
              </div>

              {/* Middle: Name, Role & Lucknow Location */}
              <div className="px-0.5">
                <h3 className="font-sans font-bold text-xs sm:text-[13px] text-stone-950 tracking-tight uppercase truncate">
                  {item.name}
                </h3>
                <p className="text-[10px] text-stone-500 font-medium mt-0.5 truncate">
                  {item.role} — <span className="text-emerald-900 font-semibold">{item.location}</span>
                </p>

                {/* Compact Rating Line ("5.0 / 29 REVIEWS") */}
                <div className="mt-2 flex items-baseline gap-1 border-t border-stone-100 pt-2">
                  <span className="text-lg sm:text-xl font-bold font-sans text-stone-950 tracking-tight">
                    {item.rating}
                  </span>
                  <span className="text-[8.5px] font-semibold text-stone-400 uppercase tracking-wider">
                    / {item.reviewsCount}
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
                  &ldquo;{item.quote}&rdquo;
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DETAILED PROPER REVIEW MODAL (Triggered on Arrow Click)                   */}
      {/* ========================================================================= */}
      {selectedReview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200 select-text"
        >
          {/* Dark Glassmorphic Backdrop */}
          <div
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 bg-stone-950/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#fbfbfa] border border-stone-200 shadow-2xl text-stone-900 z-10 flex flex-col">
            {/* Sticky Header with Navigation & Close */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-7 py-3.5 bg-white/95 backdrop-blur-md border-b border-stone-200">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10.5px] font-bold uppercase tracking-wider border border-emerald-200">
                  <CheckBadgeIcon className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified Customer Review</span>
                </span>
                <span className="hidden sm:inline text-xs text-stone-400">•</span>
                <span className="hidden sm:inline text-xs text-stone-500 font-medium">
                  {selectedReview.orderId}
                </span>
              </div>

              {/* Prev / Next & Close Action Controls */}
              <div className="flex items-center gap-2">
                <div className="flex items-center border border-stone-200 rounded-full bg-stone-50 p-0.5">
                  <button
                    onClick={handlePrevReview}
                    title="Previous Review (Left Arrow)"
                    className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 hover:text-stone-950 transition-colors"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-semibold text-stone-500 px-1">
                    {TESTIMONIALS.findIndex((t) => t.id === selectedReview.id) + 1} / {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={handleNextReview}
                    title="Next Review (Right Arrow)"
                    className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 hover:text-stone-950 transition-colors"
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => setSelectedReview(null)}
                  aria-label="Close review modal"
                  className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-5 sm:p-7 md:p-8 space-y-6">
              {/* Reviewer Profile Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-5 border-b border-stone-200">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200 shadow-sm">
                  <Image
                    src={selectedReview.image}
                    alt={selectedReview.name}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" title="Verified Customer" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-stone-950 tracking-tight">
                      {selectedReview.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{selectedReview.verificationBadge}</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-stone-600">
                    <span className="font-semibold text-emerald-950 flex items-center gap-1">
                      <MapPinIcon className="w-3.5 h-3.5 text-emerald-700" />
                      {selectedReview.location}
                    </span>
                    <span>•</span>
                    <span className="text-stone-700 font-medium">{selectedReview.role}</span>
                    <span>•</span>
                    <span className="text-stone-500 flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3 text-stone-400" />
                      {selectedReview.reviewDate}
                    </span>
                  </div>
                </div>

                {/* Overall Big Rating Score */}
                <div className="sm:self-center shrink-0 p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200 text-center min-w-[110px] shadow-xs">
                  <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold text-stone-950 font-sans tracking-tight">
                    <span>{selectedReview.rating}</span>
                    <StarSolid className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 mt-0.5 text-amber-500">
                    <StarSolid className="w-3 h-3" />
                    <StarSolid className="w-3 h-3" />
                    <StarSolid className="w-3 h-3" />
                    <StarSolid className="w-3 h-3" />
                    <StarSolid className="w-3 h-3" />
                  </div>
                  <div className="text-[10px] font-bold text-stone-400 mt-1 uppercase tracking-wider">
                    {selectedReview.reviewsCount}
                  </div>
                </div>
              </div>

              {/* Verified Order Specification Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Variety Ordered</span>
                  <span className="font-bold text-stone-950 mt-0.5 block">{selectedReview.variety}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Plantation Size</span>
                  <span className="font-bold text-stone-950 mt-0.5 block">{selectedReview.acres} ({selectedReview.quantity})</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Field Survival</span>
                  <span className="font-bold text-emerald-800 mt-0.5 block">{selectedReview.survivalRate}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Harvest Milestone</span>
                  <span className="font-bold text-stone-950 mt-0.5 block truncate">{selectedReview.harvestMetric}</span>
                </div>
              </div>

              {/* Performance Rating Progress Bars */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <SparklesIcon className="w-4 h-4 text-emerald-700" />
                  <span>Verified Performance Scorecard</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs">
                  <div>
                    <div className="flex justify-between items-center mb-1 text-stone-700 font-medium">
                      <span>Rootstock & Graft Health</span>
                      <span className="font-bold text-stone-950">{selectedReview.ratingsBreakdown.rootstock.toFixed(1)} / 5.0</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${(selectedReview.ratingsBreakdown.rootstock / 5) * 100}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1 text-stone-700 font-medium">
                      <span>Transit & Farm Delivery Condition</span>
                      <span className="font-bold text-stone-950">{selectedReview.ratingsBreakdown.transit.toFixed(1)} / 5.0</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${(selectedReview.ratingsBreakdown.transit / 5) * 100}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1 text-stone-700 font-medium">
                      <span>Field Survival in Lucknow Soil</span>
                      <span className="font-bold text-stone-950">{selectedReview.ratingsBreakdown.survival.toFixed(1)} / 5.0</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${(selectedReview.ratingsBreakdown.survival / 5) * 100}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1 text-stone-700 font-medium">
                      <span>Agronomist Guidance & Support</span>
                      <span className="font-bold text-stone-950">{selectedReview.ratingsBreakdown.support.toFixed(1)} / 5.0</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${(selectedReview.ratingsBreakdown.support / 5) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Full In-Depth Proper Review Content */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold font-editorial text-stone-950 tracking-tight leading-snug">
                    &ldquo;{selectedReview.reviewTitle}&rdquo;
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedReview.highlights.map((badge, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-[11px] font-medium border border-stone-200"
                      >
                        <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{badge}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Structured Review Paragraphs */}
                <div className="space-y-3.5 text-xs sm:text-[13px] text-stone-700 leading-relaxed font-normal">
                  {selectedReview.detailedSections.map((section, idx) => (
                    <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                      <h5 className="font-bold text-stone-950 mb-1.5 text-xs sm:text-[13px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                        {section.title}
                      </h5>
                      <p className="text-stone-600 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Field Inspection Photos Gallery */}
              {selectedReview.gallery && selectedReview.gallery.length > 0 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                      <BuildingStorefrontIcon className="w-4 h-4 text-emerald-700" />
                      <span>Verified Field & Plantation Photos</span>
                    </h4>
                    <span className="text-[11px] text-stone-400 font-medium">
                      {selectedPhotoIndex + 1} of {selectedReview.gallery.length}
                    </span>
                  </div>

                  {/* Main Active Photo Preview */}
                  <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 mb-3">
                    <Image
                      src={selectedReview.gallery[selectedPhotoIndex].src}
                      alt={selectedReview.gallery[selectedPhotoIndex].caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent p-3 text-white text-xs">
                      <p className="font-medium line-clamp-1">
                        {selectedReview.gallery[selectedPhotoIndex].caption}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-3 gap-2">
                    {selectedReview.gallery.map((photo, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => setSelectedPhotoIndex(pIdx)}
                        className={`relative aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${selectedPhotoIndex === pIdx
                            ? "border-emerald-700 ring-2 ring-emerald-500/30 scale-[1.02]"
                            : "border-stone-200 hover:border-stone-400 opacity-70 hover:opacity-100"
                          }`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.caption}
                          fill
                          sizes="150px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Nursery Response */}
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border-l-4 border-l-emerald-700 border border-emerald-200/80">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-950">
                    <CheckBadgeIcon className="w-4 h-4 text-emerald-700" />
                    <span>Official Response from Satyasai Navkisan Agronomy Desk</span>
                  </div>
                  <span className="text-[10px] text-emerald-800 font-medium">
                    {selectedReview.nurseryResponse.date}
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-normal italic">
                  &ldquo;{selectedReview.nurseryResponse.text}&rdquo;
                </p>
                <div className="mt-2 text-[10px] font-bold text-emerald-900 uppercase tracking-wide">
                  — {selectedReview.nurseryResponse.author}, {selectedReview.nurseryResponse.role}
                </div>
              </div>

              {/* Community Helpful Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-200 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-stone-500">Was this verified review helpful?</span>
                  <button
                    onClick={() => handleToggleHelpful(selectedReview.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold transition-all ${helpfulVoted[selectedReview.id]
                        ? "bg-emerald-950 text-white border-emerald-950 shadow-xs"
                        : "bg-white text-stone-700 border-stone-300 hover:bg-stone-50"
                      }`}
                  >
                    {helpfulVoted[selectedReview.id] ? (
                      <HandThumbUpSolid className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <HandThumbUpIcon className="w-3.5 h-3.5 text-stone-500" />
                    )}
                    <span>Helpful ({selectedReview.helpfulCount + (helpfulVoted[selectedReview.id] ? 1 : 0)})</span>
                  </button>
                </div>

                <div className="text-[11px] text-stone-400 font-medium">
                  Verified Order #{selectedReview.orderId} • Lucknow Mandi Network
                </div>
              </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-5 bg-white/95 backdrop-blur-md border-t border-stone-200">
              <div className="text-xs text-stone-600 hidden sm:block">
                Interested in planting <strong className="text-stone-950">{selectedReview.variety}</strong>?
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/919422000000?text=Hello%20Satyasai%20Navkisan%20Green%20India,%20I%20am%20interested%20in%20${encodeURIComponent(
                    selectedReview.variety
                  )}%20after%20reading%20the%20verified%20review%20from%20${encodeURIComponent(
                    selectedReview.name
                  )}%20(${encodeURIComponent(
                    selectedReview.location
                  )}).%20Please%20share%20booking%20and%20pricing%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none py-2.5 px-5 rounded-full bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/20 transition-all text-center"
                >
                  <span>Inquire on WhatsApp</span>
                  <span className="text-emerald-400">→</span>
                </a>

                <a
                  href="tel:+919422000000"
                  className="py-2.5 px-4 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-850 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Call Lucknow Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
