"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  PhoneIcon,
  XMarkIcon,
  CheckCircleIcon,
  MapPinIcon,
  UserIcon,
  SparklesIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

// =========================================================================
// MAIN COMPONENT: ABOUT US / OUR JOURNEY AND VALUES
// =========================================================================

export default function AboutJourneySection() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [visitorName, setVisitorName] = useState("");
  const [visitorPhone, setVisitorPhone] = useState("");
  const [visitorDate, setVisitorDate] = useState("");
  const [visitorPlotSize, setVisitorPlotSize] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🌿 *NURSERY APPOINTMENT & VISIT REQUEST*\n*Satyasai Navkisan Green India Private Limited*\n────────────────────────────\n👤 *Visitor Name:* ${visitorName.trim()}\n📞 *Phone:* ${visitorPhone.trim()}\n📅 *Preferred Visit Date:* ${visitorDate || "Earliest available"}\n🏡 *Plantation / Land Area:* ${visitorPlotSize || "Not specified"}\n\n📍 *Purpose:* Nursery Polyhouse Tour & Farm Project Advisory at Lucknow.\n\nPlease confirm agronomist availability and Google Map location pin.`;
    const url = `https://wa.me/917942637905?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setIsAppointmentModalOpen(false);
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 border-b border-stone-200/90 text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header matching Reference Image with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="block font-serif italic text-stone-500 text-sm sm:text-base mb-2 tracking-wide">
            About Us
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-editorial text-stone-950 font-normal tracking-tight leading-[1.1]">
            Our Journey And Values
          </h2>

          <p className="mt-3.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal max-w-lg mx-auto">
At NaviKisan, we help farmers grow healthy fruit trees, get better harvests, and earn more from their land with quality plants and expert support.          </p>

          {/* Center Pill Button matching Reference Image */}
          <div className="mt-6 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAppointmentModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-900 text-white text-xs sm:text-sm font-semibold tracking-tight shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Book an Appointment</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-stone-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 4 ORGANIC SQUIRCLE BENTO CARDS (PREMIUM IMAGES & POLISHED METRICS)       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {/* ---------------------------------------------------- */}
          {/* CARD 1: TALL PINK SQUIRCLE (Expertise with Experience)*/}
          {/* ---------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-[2.5rem] bg-[#feeaf2] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 min-h-[380px]"
            style={{ borderRadius: "2.5rem" }}
          >
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal leading-[1.15] tracking-tight">
                Expertise with <br />
                Experience
              </h3>
              <p className="text-xs text-stone-600 font-medium mt-2 leading-relaxed">
                8+ years propagating certified elite strains in Lucknow, Uttar Pradesh.
              </p>
            </div>

            {/* Clean Rounded Image Preview with Heritage Badge */}
            <div className="mt-6 relative w-full h-44 sm:h-48 rounded-3xl overflow-hidden border-2 border-white/90 shadow-sm group-hover:shadow-md transition-all">
              <Image
                src="/images/tissue-culture.jpg"
                alt="Elite strain propagation at Satyasai Navkisan Nursery"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                
                
              </div>
            </div>
          </motion.div>

          {/* ---------------------------------------------------- */}
          {/* CARD 2: MIDDLE COLUMN (Two Stacked Cards)            */}
          {/* ---------------------------------------------------- */}
          <div className="flex flex-col justify-between gap-5 sm:gap-6">
            {/* Top Mint Squircle: 200+ Trusted Cultivators */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[2.5rem] bg-[#bbf7d0] p-6 flex items-center justify-between overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex-1 min-h-[180px]"
              style={{ borderRadius: "2.2rem" }}
            >
              <div className="pr-2 z-10">
                <div className="font-sans font-bold text-3xl sm:text-4xl text-stone-950 tracking-tight">
                  200+
                </div>
                <p className="text-xs font-medium text-stone-800 leading-snug mt-1">
                  Trusted Clients & Commercial Growers work with us.
                </p>
              </div>

              {/* Verified Cultivator Avatars & Badge */}
              <div className="shrink-0 flex flex-col items-end gap-1.5">
                <div className="flex -space-x-2.5 overflow-hidden p-0.5">
                  <img
                    src="/images/testimonial-ramesh.jpg"
                    alt="Cultivator"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  />
                  <img
                    src="/images/testimonial-aditya.jpg"
                    alt="Cultivator"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  />
                  <img
                    src="/images/testimonial-virendra.jpg"
                    alt="Cultivator"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  />
                </div>
                
              </div>
            </motion.div>

            {/* Bottom Gray Squircle: Team (45+ Members) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[2.5rem] bg-[#f1f5f9] p-6 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex-1 min-h-[180px]"
              style={{ borderRadius: "2.2rem" }}
            >
              <h4 className="font-editorial text-2xl text-stone-950 font-normal tracking-tight">
                Team
              </h4>

              <div className="flex items-center justify-between gap-3 mt-4">
                {/* Modern Clean Team Icon in white card */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-center text-stone-800 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                  <UserGroupIcon className="w-6 h-6 sm:w-7 sm:h-7 text-stone-800" />
                </div>

                {/* Team Pill Count */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-2xl bg-[#6ee7b7] text-stone-950 font-sans shadow-2xs text-right"
                >
                  <div className="text-lg font-bold leading-none">50+</div>
                  <div className="text-[10px] font-medium leading-tight mt-0.5 whitespace-nowrap">
                    Team Members
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* CARD 3: TALL BUTTER YELLOW SQUIRCLE (Nursery Solutions) */}
          {/* ---------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.4 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-[2.5rem] bg-[#fef08a] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 min-h-[380px]"
            style={{ borderRadius: "2.5rem" }}
          >
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal leading-[1.15] tracking-tight">
                Providing <br />
                personalized <br />
                and effective <br />
                nursery <br />
                solutions.
              </h3>
              <p className="text-xs text-stone-700 font-medium mt-2 leading-relaxed">
                Custom orchard blueprints, pit spacing, and on-site agronomist visits.
              </p>
            </div>

            {/* Clean Greenhouse Consultation Photo Preview */}
            <div className="mt-6 relative w-full h-44 sm:h-48 rounded-3xl overflow-hidden border-2 border-white/90 shadow-sm group-hover:shadow-md transition-all">
              <Image
                src="/images/greenhouse-hero.jpg"
                alt="Personalized nursery greenhouse advisory and blueprints"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                
                
              </div>
            </div>
          </motion.div>

          {/* ---------------------------------------------------- */}
          {/* CARD 4: TALL SKY BLUE SQUIRCLE (Proven Results)      */}
          {/* ---------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-[2.5rem] bg-[#bae6fd] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 min-h-[380px]"
            style={{ borderRadius: "2.5rem" }}
          >
            {/* Clean KPI Results Card */}
            <div className="w-full rounded-3xl bg-white/85 backdrop-blur-xs border-2 border-white/80 p-5 shadow-xs group-hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/15 text-sky-700 flex items-center justify-center">
                  <ArrowTrendingUpIcon className="w-5 h-5 text-sky-700" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  <CheckCircleIcon className="w-3 h-3 text-emerald-600" /> Verified Rate
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-sans">
                  99.2%
                </span>
                <span className="text-xs font-semibold text-stone-600">Survival</span>
              </div>
              
            </div>

            <div className="mt-auto pt-6">
              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal leading-[1.15] tracking-tight">
                Proven <br />
                Results that <br />
                Matters
              </h3>
              <p className="text-xs text-stone-700 font-medium mt-2 leading-relaxed">
                99.2% verified field survival and accelerated 9-month initial harvests in Uttar Pradesh.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Nursery Assurance Ribbon with Motion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500 font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Satyasai Navkisan Green India Private Limited • Lucknow, Uttar Pradesh</span>
          </div>
          <div className="flex items-center gap-4">
            <span>GST: 09AAZCS8852J1Z6</span>
            <span>•</span>
            <span>CIN: U01110UP2018PTC101289</span>
           
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* BOOK AN APPOINTMENT MODAL (Animated with AnimatePresence)                 */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isAppointmentModalOpen && (
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
              transition={{ duration: 0.2 }}
              onClick={() => setIsAppointmentModalOpen(false)}
              className="fixed inset-0 bg-stone-950/75 backdrop-blur-md transition-opacity"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#fafaf9] border border-stone-200 shadow-2xl p-6 sm:p-8 text-stone-900 z-10"
            >
            <button
              onClick={() => setIsAppointmentModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-800 transition-colors cursor-pointer"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-950 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Nursery Tour & Advisory
              </span>
            </div>

            <h3 className="text-2xl font-editorial font-bold text-stone-950 tracking-tight">
              Book a Nursery Appointment
            </h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Schedule an in-person tour of our automated polyhouses in Lucknow or book a 1-on-1 agronomy consultation for your plantation project.
            </p>

            <form onSubmit={handleBookingSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra Verma"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <div className="relative">
                  <PhoneIcon className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={visitorPhone}
                    onChange={(e) => setVisitorPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <CalendarDaysIcon className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="date"
                      value={visitorDate}
                      onChange={(e) => setVisitorDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                    Plantation Acreage (Optional)
                  </label>
                  <div className="relative">
                    <MapPinIcon className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. 10 Acres in Malihabad"
                      value={visitorPlotSize}
                      onChange={(e) => setVisitorPlotSize(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-hidden focus:border-emerald-700"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-full bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Confirm Appointment on WhatsApp</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-emerald-400" />
                </button>
                <p className="text-[10px] text-center text-stone-500 mt-2">
                  Direct connection with Satyasai Navkisan Nursery Desk (07942637905).
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </section>
  );
}
