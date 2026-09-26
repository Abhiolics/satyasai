export interface PlantVariety {
  id: string;
  name: string;
  botanicalName: string;
  category: "mango" | "guava" | "teak" | "nursery";
  badge: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  firstHarvest: string;
  spacing: string;
  yieldPerTree: string;
  survivalRate: string;
  idealSoil: string;
  highlightSpecs: { label: string; value: string }[];
  varietiesAvailable: string[];
}

export const PLANT_VARIETIES: Record<string, PlantVariety> = {
  mango: {
    id: "mango",
    name: "Elite Grafted Mango Grafts",
    botanicalName: "Mangifera indica (Certified Rootstocks)",
    category: "mango",
    badge: "Most Popular Horticultural Graft",
    image: "/images/mango-sapling.jpg",
    shortDesc: "Vigorous epicotyl & stone-grafted saplings with acclimatized rootstocks for early flowering and heavy fruit set.",
    fullDesc: "Satyasai Navkisan's certified mango grafts are propagated from verified 20+ year disease-free mother trees. We graft onto sturdy native polyembryonic rootstocks that develop an assertive taproot, giving each tree high resistance to drought and soil pathogens while ensuring true-to-type sweetness and aroma.",
    firstHarvest: "2.5 – 3 Years",
    spacing: "10x10 ft (UHDP) or 15x15 ft",
    yieldPerTree: "120 – 180 kg at peak",
    survivalRate: "98.8% in field testing",
    idealSoil: "Well-drained red loamy or alluvial soil (pH 6.5 – 7.5)",
    highlightSpecs: [
      { label: "Graft Technique", value: "Stone & Epicotyl Wedge" },
      { label: "Canopy Arch", value: "Compact & Prunable" },
      { label: "Fruiting Cycle", value: "Summer Annual / Extended" },
      { label: "Target Yield", value: "10-14 Tons / Acre" },
    ],
    varietiesAvailable: [
      "Gir Kesar (Export Gold)",
      "Ratnagiri Alphonso (Hapus)",
      "VNR Amrapali (Ultra Dense)",
      "Mallika & Dasheri",
      "Banganapalli (Benishan)",
      "Baramasi All-Season Mango",
    ],
  },
  guava: {
    id: "guava",
    name: "Taiwan Pink & VNR Bihi Guava",
    botanicalName: "Psidium guajava (Tissue & Air-Layered)",
    category: "guava",
    badge: "High Cash Flow • Rapid Return",
    image: "/images/guava-sapling.jpg",
    shortDesc: "Fast-bearing, jumbo fruit-yielding guava trees that begin flowering within 8 to 10 months of field transplantation.",
    fullDesc: "Engineered for modern high-density farming (UHDP), our Taiwan Pink and VNR Bihi guava plants feature exceptional vigor, thick crisp fruit flesh with few soft seeds, and remarkable shelf life. Farmers achieve commercial revenues in under a year with continuous 2-to-3 harvest flushes annually.",
    firstHarvest: "8 – 10 Months",
    spacing: "6x8 ft or 8x10 ft",
    yieldPerTree: "45 – 65 kg / year",
    survivalRate: "99.2% guaranteed",
    idealSoil: "All soil types, thrives even in semi-arid and clayey loams",
    highlightSpecs: [
      { label: "Fruiting Speed", value: "First season blooming" },
      { label: "Average Fruit Wt.", value: "350g – 750g per fruit" },
      { label: "Brix Sugar Level", value: "12.5° – 14.5° Brix" },
      { label: "UHDP Density", value: "550 – 700 trees/acre" },
    ],
    varietiesAvailable: [
      "Taiwan Pink Jumbo (Crisp & Sweet)",
      "VNR Bihi (Giant 800g Fruit)",
      "Lucknow-49 (Sardar Guava)",
      "Allahabad Safeda (Snow White)",
      "Red Diamond Seedless",
    ],
  },
  teak: {
    id: "teak",
    name: "Tissue-Cultured Burmese Teak",
    botanicalName: "Tectona grandis (Micropropagated Clones)",
    category: "teak",
    badge: "Generational Wealth Forestry",
    image: "/images/teak-sapling.jpg",
    shortDesc: "Uniform, knot-free vertical timber saplings cloned from elite plus-trees for high commercial heartwood density.",
    fullDesc: "Navkisan tissue-cultured teak plants eliminate genetic variability. Every tree develops a straight cylindrical bole without early branching, achieving timber-grade harvestable girth in 12 to 14 years instead of 30+ years required by common wild seedlings. Ideal for both block plantations and farm boundary fencing.",
    firstHarvest: "12 – 14 Years (Thinnings at 5 & 9 yrs)",
    spacing: "8x8 ft or 9x9 ft",
    yieldPerTree: "18 – 24 cu. ft. high-grade heartwood",
    survivalRate: "99.5% clonal vigor",
    idealSoil: "Deep well-drained alluvial, red loam with good aeration",
    highlightSpecs: [
      { label: "Propagation", value: "Virus-Indexed Clonal Lab" },
      { label: "Bole Shape", value: "Cylindrical & Knot-Free" },
      { label: "Heartwood Ratio", value: "82% - 88% at maturity" },
      { label: "Commercial Est.", value: "₹35,000 – ₹55,000 / tree" },
    ],
    varietiesAvailable: [
      "Burmese Elite Clone T-1",
      "Nilambur Golden Teak Clone",
      "Bio-Hardened Root Trainer Teak",
      "Boundary Agro-Forestry Pack",
    ],
  },
  nursery: {
    id: "nursery",
    name: "Navkisan Micropropagation Nursery",
    botanicalName: "Biotech Propagation & Rootstock Hardening",
    category: "nursery",
    badge: "Hi-Tech Hardened Nursery",
    image: "/images/tissue-culture.jpg",
    shortDesc: "Climate-controlled polyhouses and mist chambers preparing virus-indexed saplings with secondary root hardening.",
    fullDesc: "Spanning over 45 acres of dedicated mother blocks and automated mist chambers, Satyasai Navkisan Green India operates with state-of-the-art horticultural protocols. Every batch undergoes mycorrhizal bio-priming and strict phytosanitary inspection before farm dispatch.",
    firstHarvest: "Ready for field transplant",
    spacing: "Tailored to plantation plan",
    yieldPerTree: "Certified 100% true-to-type",
    survivalRate: "99.4% post-transport survival",
    idealSoil: "Pre-acclimatized in coco-peat root-trainer cavities",
    highlightSpecs: [
      { label: "Mother Blocks", value: "45+ Acres Certified" },
      { label: "Annual Capacity", value: "3.5 Million Saplings" },
      { label: "Packaging", value: "Shockproof Root Crates" },
      { label: "Dispatch Scope", value: "Pan-India Doorstep Farm Delivery" },
    ],
    varietiesAvailable: [
      "Kagzi Lime (Acid Lime / Baramasi)",
      "Bhagwa Pomegranate Grafts",
      "Kashmiri Apple Ber",
      "Red Heart Dragon Fruit",
      "Hass Avocado Acclimatized",
      "Sandalwood (Santalum album)",
    ],
  },
};

export const HOTSPOTS = [
  {
    id: "mango-grove",
    title: "Grafted Mango Mother Block",
    plantId: "mango",
    subtitle: "Stone-Grafted Saplings • Acclimatized in Polyhouse",
    top: "56%",
    left: "18%",
    pulseColor: "bg-amber-400",
  },
  {
    id: "guava-plot",
    title: "Taiwan Pink & VNR Guava Pots",
    plantId: "guava",
    subtitle: "Root-Trained Meadow Stock • Ready for UHDP Dispatch",
    top: "84%",
    left: "44%",
    pulseColor: "bg-emerald-400",
  },
  {
    id: "teak-forest",
    title: "Tissue-Culture Burmese Teak",
    plantId: "teak",
    subtitle: "Elite Clonal Plus-Trees • High-Density Heartwood",
    top: "46%",
    left: "84%",
    pulseColor: "bg-lime-400",
  },
  {
    id: "nursery-lab",
    title: "High-Tech Conservatory Apex",
    plantId: "nursery",
    subtitle: "Automated Micro-Mist & Climate-Controlled Rafters",
    top: "32%",
    left: "50%",
    pulseColor: "bg-cyan-400",
  },
];

