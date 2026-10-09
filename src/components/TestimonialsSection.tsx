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
              <span>Verified Reviews </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-stone-950 font-normal tracking-tight">
              Cultivating Success, <span className="italic font-normal text-emerald-950">Grower by Grower.</span>
            </h2>
            <p className="text-xs text-stone-600 mt-1 max-w-xl font-normal leading-relaxed">
Real stories and honest reviews from farmers who trust us.            </p>
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
              className="group relative w-[210px] sm:w-[230px] md:w-[245px] shrink-0 rounded-2xl bg-white border border-stone-200/90 p-2.5 sm:p-3 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top: Compact Portrait Photo in Rounded Frame */}
              <div className="relative w-full aspect-[4/4.5] rounded-xl overflow-hidden bg-stone-100 mb-2.5">
                <Image
                  src={item.image}
                  alt={`${item.name} - ${item.location}`}
                  fill
                  sizes="245px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Compact Plantation Acreage Chip */}
                {/* <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-stone-950/75 backdrop-blur-md text-white text-[9px] font-medium tracking-wide">
                  {item.acres} • {item.variety}
                </div> */}
              </div>

              {/* Middle: Name & Location */}
              <div className="px-0.5">
                <h3 className="font-sans font-bold text-xs sm:text-[13px] text-stone-950 tracking-tight uppercase truncate">
                  {item.name}
                </h3>
                <p className="text-[10px] text-emerald-900 font-semibold mt-0.5 truncate">
                  {item.location}
                </p>

                {/* Compact Rating Line */}
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

                {/* Bottom: Review Quote (Without quotation marks) */}
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
