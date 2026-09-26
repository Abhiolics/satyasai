"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  PhoneIcon,
  XMarkIcon,
  CheckCircleIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// =========================================================================
// AUTHENTIC HAND-DRAWN SKETCHY SVG ICONS (Matching User Reference Image)
// =========================================================================

export function SketchyCelebration({ className = "w-40 h-48" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <path
        d="M65 190 C65 175, 95 175, 95 190 C95 205, 65 205, 65 190 Z"
        strokeWidth="3.2"
        fill="#feeaf2"
      />
      {/* Eyes & Mouth */}
      <ellipse cx="74" cy="188" rx="2" ry="2.5" fill="currentColor" stroke="none" />
      <ellipse cx="86" cy="188" rx="2" ry="2.5" fill="currentColor" stroke="none" />
      <path d="M76 198 Q80 200 84 198" strokeWidth="2.8" />

      {/* Torso */}
      <path d="M60 220 L65 195 M100 195 L105 220" strokeWidth="3.2" />

      {/* Left Arm reaching way up */}
      <path
        d="M66 182 C60 140, 58 80, 62 35 M62 35 C63 25, 65 20, 68 25 M68 25 L70 36 M70 36 C71 22, 74 18, 77 24 M77 24 L79 38 M79 38 C80 25, 84 22, 86 28 M86 28 L87 45"
        strokeWidth="3.2"
      />
      {/* Left arm inner contour */}
      <path d="M72 178 C68 135, 70 85, 75 48" strokeWidth="3" />

      {/* Right Arm reaching way up */}
      <path
        d="M94 182 C100 140, 102 80, 98 35 M98 35 C97 25, 95 20, 92 25 M92 25 L90 36 M90 36 C89 22, 86 18, 83 24 M83 24 L81 38 M81 38 C80 25, 76 22, 74 28 M74 28 L73 45"
        strokeWidth="3.2"
      />
      {/* Right arm inner contour */}
      <path d="M88 178 C92 135, 90 85, 85 48" strokeWidth="3" />

      {/* Whimsical growth / energy sparkles */}
      <path d="M38 45 L42 55 M40 50 L48 48" strokeWidth="2" />
      <path d="M120 40 L115 50 M118 45 L110 44" strokeWidth="2" />
      <path d="M78 8 L80 16 M74 12 L84 12" strokeWidth="2.2" />
    </svg>
  );
}

export function SketchyEnvelopeSprout({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Envelope Body */}
      <path
        d="M12 42 L88 42 L88 88 L12 88 Z"
        strokeWidth="2.8"
        fill="#bbf7d0"
        fillOpacity="0.3"
      />
      {/* Envelope Flap Folded Down */}
      <path d="M12 42 L50 68 L88 42" strokeWidth="2.8" />
      {/* Envelope Bottom Folds */}
      <path d="M12 88 L42 60 M88 88 L58 60" strokeWidth="2.4" />

      {/* Plants & Leaves sprouting out of envelope */}
      <path d="M50 42 C50 25, 42 16, 32 18 C28 28, 38 35, 48 40" strokeWidth="2.8" fill="none" />
      <path d="M50 36 C55 22, 68 18, 72 26 C66 34, 58 38, 50 42" strokeWidth="2.8" fill="none" />
      <path d="M50 42 L50 14 M50 14 C46 10, 54 8, 50 4" strokeWidth="2.8" />

      {/* Sprout side shoots */}
      <path d="M42 28 C34 26, 30 32, 40 36" strokeWidth="2.2" />
      <path d="M58 28 C66 26, 70 32, 60 36" strokeWidth="2.2" />

      {/* Sketchy Sparkles */}
      <path d="M82 18 L86 26 M80 22 L88 22" strokeWidth="2" />
      <path d="M22 24 L24 30 M20 27 L26 27" strokeWidth="1.8" />
      <circle cx="86" cy="32" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function SketchyWalkingLegs({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Upper Torso hint */}
      <path d="M38 12 C34 14, 46 14, 42 12" strokeWidth="2.5" />
      {/* Cute sketchy legs in walking strides */}
      <path
        d="M32 15 C34 28, 22 45, 18 62 C16 66, 12 68, 8 68 L22 68 C22 64, 26 50, 34 38"
        strokeWidth="2.8"
      />
      <path
        d="M44 15 C42 26, 52 42, 60 56 C64 62, 70 66, 74 66 L60 66 C54 62, 46 48, 40 35"
        strokeWidth="2.8"
      />
      {/* Movement action dash lines */}
      <path d="M2 72 L18 72 M62 72 L78 72" strokeWidth="2.2" />
      <path d="M6 56 C10 58, 8 64, 4 64" strokeWidth="1.8" />
    </svg>
  );
}

export function SketchyGardenerWatering({ className = "w-44 h-48" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <path
        d="M130 92 C130 76, 154 76, 154 92 C154 108, 130 108, 130 92 Z"
        strokeWidth="3.2"
        fill="#fef08a"
      />
      {/* Eyes & Smile */}
      <ellipse cx="138" cy="90" rx="1.8" ry="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="147" cy="90" rx="1.8" ry="2.2" fill="currentColor" stroke="none" />
      <path d="M139 99 Q143 103 148 99" strokeWidth="2.6" />

      {/* Torso with Checked / Plaid Shirt */}
      <path
        d="M125 110 L115 170 L175 170 L162 110 Z"
        strokeWidth="3.2"
        fill="#fef9c3"
      />
      {/* Checked lines */}
      <path d="M130 115 L125 170 M145 112 L145 170 M160 115 L165 170" strokeWidth="2.4" />
      <path d="M120 128 L168 128 M118 145 L172 145 M116 160 L174 160" strokeWidth="2.4" />

      {/* Right Arm holding Watering Can */}
      <path d="M160 120 C180 125, 192 135, 185 155 L168 152" strokeWidth="3.2" />

      {/* Watering Can */}
      <path
        d="M165 130 C162 115, 185 110, 185 125 L182 132"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M162 130 L195 130 L192 155 L160 155 Z"
        strokeWidth="3.2"
        fill="#fef08a"
      />
      {/* Spout pouring water */}
      <path d="M162 145 L145 140 L140 148" strokeWidth="3" />
      {/* Water Drops */}
      <circle cx="135" cy="154" r="2" fill="currentColor" />
      <circle cx="128" cy="162" r="2.2" fill="currentColor" />
      <circle cx="122" cy="172" r="1.8" fill="currentColor" />

      {/* Left Arm holding Blooming Flower Plant */}
      <path d="M125 120 C100 120, 75 135, 55 140 L50 152" strokeWidth="3.2" />

      {/* Hand grasping stem */}
      <path d="M48 148 C42 145, 40 155, 48 155" strokeWidth="3" />

      {/* Stem & Leaves */}
      <path d="M45 170 L48 115" strokeWidth="3.4" />
      <path d="M48 135 C38 128, 30 132, 46 142" strokeWidth="2.8" />
      <path d="M48 125 C58 120, 62 126, 48 132" strokeWidth="2.8" />

      {/* Blooming Flower Petals */}
      <circle cx="48" cy="110" r="6" fill="#fef08a" strokeWidth="3.2" />
      <circle cx="48" cy="98" r="5" strokeWidth="2.6" fill="#fef08a" />
      <circle cx="60" cy="106" r="5" strokeWidth="2.6" fill="#fef08a" />
      <circle cx="56" cy="118" r="5" strokeWidth="2.6" fill="#fef08a" />
      <circle cx="40" cy="118" r="5" strokeWidth="2.6" fill="#fef08a" />
      <circle cx="36" cy="106" r="5" strokeWidth="2.6" fill="#fef08a" />
    </svg>
  );
}

export function SketchyStopwatch({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top Stem & Push Button */}
      <path d="M45 16 L55 16 M50 16 L50 24" strokeWidth="3.2" />
      <path d="M40 12 L60 12" strokeWidth="3.2" />
      {/* Diagonal Lap button */}
      <path d="M68 22 L74 16" strokeWidth="3" />

      {/* Clock Outer Rim with organic hand-drawn imperfection */}
      <path
        d="M50 24 C72 24, 88 40, 88 62 C88 84, 70 96, 50 96 C28 96, 12 82, 12 60 C12 38, 28 24, 50 24 Z"
        strokeWidth="3.6"
        fill="#bae6fd"
        fillOpacity="0.25"
      />
      <circle cx="50" cy="62" r="3" fill="currentColor" stroke="none" />

      {/* Clock Hands pointing to rapid time */}
      <path d="M50 62 L60 42" strokeWidth="3.8" />
      <path d="M50 62 L38 56" strokeWidth="3.2" />

      {/* Internal Dial Tick Marks */}
      <path d="M50 30 L50 34" strokeWidth="2.4" />
      <path d="M80 62 L76 62" strokeWidth="2.4" />
      <path d="M50 90 L50 86" strokeWidth="2.4" />
      <path d="M20 62 L24 62" strokeWidth="2.4" />

      {/* Radiating Speed / Energy Lines */}
      <path d="M50 2 L50 8" strokeWidth="2.4" />
      <path d="M30 6 L34 12" strokeWidth="2.4" />
      <path d="M12 20 L18 24" strokeWidth="2.4" />
      <path d="M6 36 L12 38" strokeWidth="2.4" />
      <path d="M72 6 L68 12" strokeWidth="2.4" />
      <path d="M92 26 L86 30" strokeWidth="2.4" />
    </svg>
  );
}

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
    const url = `https://wa.me/919412742566?text=${encodeURIComponent(msg)}`;
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
            Strategically engineered horticultural solutions for high-yield commercial orchards. Unlock your agricultural land’s full equity with scientifically hardened mother stock.
          </p>

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
        {/* 4 ORGANIC SQUIRCLE BENTO CARDS WITH SKETCHY DOODLES & MOTION             */}
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

            {/* Sketchy Arms Reaching Celebration Doodle with gentle float */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-auto flex justify-center text-stone-900 group-hover:scale-105 transition-transform duration-500 pt-6"
            >
              <SketchyCelebration className="w-36 h-44 sm:w-40 sm:h-48" />
            </motion.div>
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

              {/* Sketchy Envelope Sprout Doodle with gentle pulse */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-stone-950 shrink-0 group-hover:scale-115 transition-transform duration-300"
              >
                <SketchyEnvelopeSprout className="w-18 h-18 sm:w-20 sm:h-20" />
              </motion.div>
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
                {/* Sketchy Walking Legs Doodle with subtle step animation */}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-stone-900 group-hover:translate-x-1 transition-transform"
                >
                  <SketchyWalkingLegs className="w-12 h-12 sm:w-14 sm:h-14" />
                </motion.div>

                {/* Team Pill Count */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-2xl bg-[#6ee7b7] text-stone-950 font-sans shadow-2xs"
                >
                  <div className="text-lg font-bold leading-none">45+</div>
                  <div className="text-[10px] font-medium leading-tight mt-0.5 whitespace-nowrap">
                    Team Members
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* CARD 3: TALL BUTTER YELLOW SQUIRCLE (Gardener Doodle) */}
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

            {/* Sketchy Gardener Watering Flower Doodle with gentle tilt motion */}
            <motion.div
              animate={{ rotate: [0, -2, 0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-auto flex justify-center text-stone-900 group-hover:scale-105 transition-transform duration-500 pt-4"
            >
              <SketchyGardenerWatering className="w-40 h-44 sm:w-44 sm:h-48" />
            </motion.div>
          </motion.div>

          {/* ---------------------------------------------------- */}
          {/* CARD 4: TALL SKY BLUE SQUIRCLE (Stopwatch Timer)     */}
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
            {/* Sketchy Stopwatch / Speed Timer Doodle at Top */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-end text-stone-950 group-hover:rotate-6 transition-transform duration-500 pt-1"
            >
              <SketchyStopwatch className="w-20 h-20 sm:w-24 sm:h-24" />
            </motion.div>

            <div className="mt-auto">
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
            <span>•</span>
            <span className="text-emerald-900 font-bold">Trustseal Verified</span>
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
                  Direct connection with Satyasai Navkisan Nursery Desk (+91 9412742566).
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
