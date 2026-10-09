"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutJourneySection from "@/components/AboutJourneySection";
import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import {
  MapPinIcon,
  UserIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  BanknotesIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
  MagnifyingGlassPlusIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col justify-between selection:bg-emerald-950 selection:text-emerald-100 relative overflow-hidden">
      {/* Dynamic Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] rounded-full bg-amber-100/30 blur-3xl"
        />
      </div>

      {/* Top Navbar */}
      <Navbar />

      {/* Hero Header Space with Motion */}
      <div className="pt-28 sm:pt-36 pb-12 bg-gradient-to-b from-stone-100/80 via-[#fafaf9] to-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4"
          >
            <Link href="/" className="hover:text-emerald-950 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-900">About Us</span>
          </motion.nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200 shadow-2xs">
                <CheckBadgeIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>Established 2018 • 8 Years of Agricultural Excellence</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial text-stone-950 font-normal tracking-tight leading-[1.1]">
                Pioneering Scientific Nursery <br className="hidden sm:inline" />
                Cultivation in North India.
              </h1>
            </motion.div>

           
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: "ABOUT THE COMPANY" & OPERATIONAL MILESTONES (NEW SECTION)     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 bg-white border-b border-stone-200/90 text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
              <SparklesIcon className="w-3.5 h-3.5 text-emerald-700" />
              <span>Company Profile </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-stone-950 font-normal tracking-tight leading-[1.15]">
              About The <span className="italic font-serif">Company</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Satysai Navkisan Green India Pvt Ltd has successfully completed 8 years of operation under the dynamic leadership of Mr Ravindra Kumar Singh who is having 18 years of experience in this industry along with supported by Pankaj Singh . Our significant achievements during the last eight years have helped us to build an organization and infrastructure across India to meet the needs of the upcoming decades.
            </p>
          </div>

          {/* 3 Pillars Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            
            {/* Pillar 1: Leadership & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="p-7 rounded-[2rem] bg-stone-50 border border-stone-200/90 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-white flex items-center justify-center mb-5 shadow-xs">
                  <UserIcon className="w-6 h-6 text-emerald-300" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                  Leadership
                </div>
                <h3 className="text-xl font-editorial font-bold text-stone-950 tracking-tight mb-2">
                  Visionary Leadership
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Steered by <strong>Mr. Ravindra Kumar Singh</strong>, possessing 18+ years of dedicated agricultural expertise, with strategic operations supported by <strong>Mr. Pankaj Singh</strong>. Built on 8 years of proven field execution across Uttar Pradesh and nationwide.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500 font-medium">
                <span>18+ Yrs Experience</span>
                <span className="font-mono text-emerald-900 font-bold">Lucknow, UP</span>
              </div>
            </motion.div>

            {/* Pillar 2: Modern Farming Revolution */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="p-7 rounded-[2rem] bg-stone-50 border border-stone-200/90 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-white flex items-center justify-center mb-5 shadow-xs">
                  <SparklesIcon className="w-6 h-6 text-amber-300" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                  Innovation
                </div>
                <h3 className="text-xl font-editorial font-bold text-stone-950 tracking-tight mb-2">
                  Revolutionizing Modern Farming
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Satyasai Navkisan Green India Pvt. Ltd. has revolutionized the way of modern farming by carried out with its production and marketing of horticulture, commercial and ornamental plants.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500 font-medium">
                <span>Horticulture & Teak</span>
                <span className="text-emerald-900 font-bold">Bio-Hardened Stock</span>
              </div>
            </motion.div>

            {/* Pillar 3: Farmers Trust & Agricultural Economy */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="p-7 rounded-[2rem] bg-stone-50 border border-stone-200/90 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-white flex items-center justify-center mb-5 shadow-xs">
                  <ShieldCheckIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                  Core Motto
                </div>
                <h3 className="text-xl font-editorial font-bold text-stone-950 tracking-tight mb-2">
                  Farmers Credibility & Trust
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Satyasai Navkisan Green India has been widely acclaimed for its pioneering efforts in developing the best quality yielding plants and gained farmers credibility and trust. Motto is to help in building a better agricultural economy by providing affordable solutions for farming communities.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500 font-medium">
                <span>High-Yield Strains</span>
                <span className="text-emerald-900 font-bold">Affordable Solutions</span>
              </div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* BASIC INFORMATION DOSSIER & ISO 9001:2015 CERTIFICATION SPLIT            */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 7 Columns: Basic Information Dossier Table/Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-7 sm:p-9 rounded-[2.5rem] bg-[#fafaf9] border border-stone-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                  <div>
                 
                    <h3 className="text-2xl font-editorial font-bold text-stone-950 tracking-tight mt-0.5">
                      Basic Information
                    </h3>
                  </div>
               
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nature of Business */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Nature of Business
                    </div>
                    <div className="text-sm font-semibold text-stone-900 mt-1">
                      Trader - Wholesaler / Distributor
                    </div>
                  </div>

                  {/* Additional Business */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Additional Business
                    </div>
                    <div className="text-sm font-semibold text-stone-900 mt-1">
                      Wholesale Business, Retail Business
                    </div>
                  </div>

                  {/* Company CEO */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Company CEO
                    </div>
                    <div className="text-sm font-semibold text-emerald-950 mt-1 flex items-center gap-1.5">
                      <UserIcon className="w-4 h-4 text-emerald-700" />
                      <span>Ravindra Kumar Singh</span>
                    </div>
                  </div>

                  {/* GST Partners */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      GST Partner Name
                    </div>
                    <div className="text-sm font-semibold text-stone-900 mt-1">
                      Tahiya Javed, Ravindra Kumar Singh
                    </div>
                  </div>

                  {/* Legal Status of Firm */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Legal Status of Firm
                    </div>
                    <div className="text-sm font-semibold text-stone-900 mt-1 flex items-center gap-1.5">
                      <BuildingOffice2Icon className="w-4 h-4 text-stone-500" />
                      <span>Limited Company</span>
                    </div>
                  </div>

                  {/* Total Employees */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Total Number of Employees
                    </div>
                    <div className="text-sm font-semibold text-stone-900 mt-1 flex items-center gap-1.5">
                      <UserGroupIcon className="w-4 h-4 text-stone-500" />
                      <span>51 to 100 People</span>
                    </div>
                  </div>

                  {/* GST Registration Date */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      GST Registration Date
                    </div>
                    <div className="text-sm font-mono font-semibold text-stone-900 mt-1 flex items-center gap-1.5">
                      <CalendarDaysIcon className="w-4 h-4 text-stone-500" />
                      <span>30-05-2018</span>
                    </div>
                  </div>

                  {/* Annual Turnover */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Annual Turnover
                    </div>
                    <div className="text-sm font-semibold text-emerald-900 mt-1 flex items-center gap-1.5">
                      <BanknotesIcon className="w-4 h-4 text-emerald-700" />
                      <span>₹ 0 - 40 L</span>
                    </div>
                  </div>
                </div>

                {/* Registered Address Row */}
                <div className="mt-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Registered Corporate Address
                    </div>
                    <a
                      href="https://maps.google.com/?q=26.86279000,80.99733000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 transition-colors"
                    >
                      <MapPinIcon className="w-3 h-3 text-emerald-700" />
                      <span>Open Google Maps</span>
                    </a>
                  </div>
                  <div className="text-sm font-semibold text-stone-900 leading-relaxed">
                    D-29, Vibhuti Khand, Gomti Nagar, Lucknow- 226010, Uttar Pradesh, India
                  </div>
                </div>

                {/* Registration Identifiers Strip */}
                <div className="mt-4 pt-4 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-600">
                  <div>
                    <span className="text-stone-400 font-sans font-medium">CIN:</span>{" "}
                    <span className="font-bold text-stone-900">U01110UP2018PTC101289</span>
                  </div>
                  <div>
                    <span className="text-stone-400 font-sans font-medium">GSTIN:</span>{" "}
                    <span className="font-bold text-stone-900">09AAZCS8852J1Z6</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Official ISO 9001:2015 Quality Management Certificate Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-7 rounded-[2.5rem] bg-gradient-to-b from-stone-900 via-stone-950 to-emerald-950 text-white shadow-xl relative overflow-hidden group"
              >
                {/* Certificate Eyebrow */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                    <DocumentCheckIcon className="w-4 h-4 text-amber-400" />
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">
                    Cert No: 22EQHX41
                  </span>
                </div>

                <h3 className="text-2xl font-editorial font-bold text-white tracking-tight">
                  Certificate of Registration
                </h3>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Certified Quality Management System for selling teak plants, horticultural plants, and bio-organic agro products.
                </p>

                {/* Certificate Image Frame with Hover Zoom Prompt */}
                <div
                  onClick={() => setIsCertModalOpen(true)}
                  className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/20 mt-5 cursor-pointer group shadow-2xl"
                >
                  <Image
                    src="/images/iso-certificate.png"
                    alt="Satyasai Navkisan Green India Pvt Ltd ISO 9001:2015 Certificate of Registration"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 bg-white"
                  />
                  
                  {/* Floating Click to Inspect Badge */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                    <div className="px-4 py-2 rounded-full bg-stone-950/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-white/20">
                      <MagnifyingGlassPlusIcon className="w-4 h-4 text-amber-400" />
                      <span>Click to Inspect Full Certificate</span>
                    </div>
                  </div>
                </div>

           
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: "OUR JOURNEY AND VALUES" WITH SKETCHY ICONS & MOTION           */}
      {/* ========================================================================= */}
      <AboutJourneySection />

      {/* ========================================================================= */}
      {/* SECTION 3: NURSERY INFRASTRUCTURE & FACILITY MOSAIC                       */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 bg-white border-b border-stone-200/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Mosaic of Facilities with Staggered Motion */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm transition-transform"
              >
                <Image
                  src="/images/greenhouse-hero.jpg"
                  alt="Satyasai Navkisan Automated Greenhouse in Lucknow"
                  fill
                 
                  className=""
                />
              
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm mt-6 transition-transform"
              >
                <Image
                  src="/images/tissue-culture.jpg"
                  alt="Tissue Culture Propagation Lab"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-white text-[10.5px] font-medium">
                  Micro-Propagation Lab
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm transition-transform"
              >
                <Image
                  src="/images/category-mango.jpg"
                  alt="Certified Stone Grafted Mango Nursery"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-white text-[10.5px] font-medium">
                  Certified Stone Grafts
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm mt-6 transition-transform"
              >
                <Image
                  src="/images/hero-estate.jpg"
                  alt="Commercial Orchard Development"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-white text-[10.5px] font-medium">
                  5,000+ Acres Planted
                </div>
              </motion.div>
            </div>

            {/* Narrative Editorial Column with Motion */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-850 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Our Genesis & Mission
                </span>
                <h2 className="text-3xl sm:text-4xl font-editorial text-stone-950 font-normal tracking-tight mt-3 leading-snug">
                  Built to Eliminate Crop Mortality, <br />
                  <span className="italic text-emerald-950">Engineered for Lifelong Yield.</span>
                </h2>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                Incorporated in 2018 under the Companies Act in Uttar Pradesh,{" "}
                <strong className="text-stone-950">
                  Satyasai Navkisan Green India Private Limited
                </strong>{" "}
                was founded to solve a critical bottleneck in Indian agriculture: the rampant 30% to 40% field mortality caused by unhardened, field-dug nursery plants with damaged root balls.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                By investing in automated micro-mist polyhouses and standardized coco-peat plug technology in the Lucknow horticulture belt, we transformed plant propagation. Every graft and clonal seedling develops a dense, active mycorrhizal secondary root system before leaving our facility, ensuring over 99% field survival even under challenging regional climates.
              </p>

              {/* Statutory Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-950 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold tracking-tight shadow-md hover:shadow-xl transition-all cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-emerald-400" />
                </Link>

                <a
                  href="https://maps.google.com/?q=26.86279000,80.99733000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold tracking-tight transition-all"
                >
                  <MapPinIcon className="w-4 h-4 text-emerald-700" />
                  <span>Visit Office</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ISO CERTIFICATE MODAL (Interactive Click to Zoom)                         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isCertModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCertModalOpen(false)}
              className="fixed inset-0 bg-stone-950/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative w-full max-w-2xl max-h-[92vh] rounded-[2rem] bg-stone-900 border border-white/20 p-5 sm:p-7 text-white z-10 overflow-y-auto flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-amber-400" />
                  <div>
                    <h3 className="font-editorial text-lg font-bold">
                      ISO 9001:2015 Certificate of Registration
                    </h3>
                    <p className="text-[11px] text-stone-400 font-mono">
                      Certificate No: 22EQHX41 • Satyasai Navkisan Green India Pvt. Ltd.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close Certificate View"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-white shadow-inner">
                <Image
                  src="/images/iso-certificate.png"
                  alt="Official ISO 9001:2015 Certificate"
                  fill
                  sizes="(max-width: 768px) 95vw, 650px"
                  className="object-contain p-2"
                />
              </div>

             
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Botanical Footer */}
      <Footer />
    </main>
  );
}
