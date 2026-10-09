"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BuildingStorefrontIcon,
  BriefcaseIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  DocumentDuplicateIcon,
  CheckIcon,
  ArrowTopRightOnSquareIcon,
  PhoneIcon,
  EnvelopeIcon,
  ShieldCheckIcon as ShieldCheckOutline,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function CompanyOverview() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="relative w-full bg-[#fafaf9] py-14 sm:py-20 border-b border-stone-200/90 text-stone-900 overflow-hidden">
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-100/60 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

        {/* Main Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Company Story & Direct Action Banner (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-stone-950 font-normal tracking-tight leading-[1.15]">
                Satyasai Navkisan Green India Private Limited
              </h2>

              <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                Established in year 2018,{" "}
                <strong className="text-stone-900 font-semibold">
                  “Satyasai Navkisan Green India Private Limited”
                </strong>{" "}
                is manufacturing Guava Plants, Fruit Plant, Teak Plant etc.
              </p>

              <div className="mt-4">
                <a
                  href="https://www.saigreenindia.in/profile.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-900 hover:text-emerald-950 group"
                >
                  <span className="border-b border-emerald-800/40 pb-0.5 group-hover:border-emerald-950 transition-colors">
                    Read More About Our Facilities & Vision
                  </span>
                  <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* GET IN TOUCH WITH US FOR BEST DEALS Card */}
            <div className="rounded-3xl bg-white border border-stone-200/90 p-5 sm:p-6 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full blur-xl pointer-events-none" />

              <div className="relative">
                <div className="text-[11px] font-bold text-emerald-850 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-700" />
                  <span>Wholesale Nursery Quotes</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-sans text-stone-950 tracking-tight">
                  GET IN TOUCH WITH US FOR BEST DEALS
                </h3>

                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Bulk sapling procurement, project pricing for orchards, agro-forestry estates, and government tenders.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  {/* <a
                    href="https://www.saigreenindia.in/enquiry.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-5 rounded-full bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <span>Contact Us</span>
                    
                  </a> */}

                  <a
                    href="tel:07942637905"
                    className="py-2.5 px-4 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-850 text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Call Desk</span>
                  </a>

                  <a
                    href="mailto:navikisan@gmail.com"
                    className="py-2.5 px-4 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-850 text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <EnvelopeIcon className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Corporate Dossier Grid (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-stone-200/90 shadow-xs p-5 sm:p-7">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                <div>
                  <h3 className="text-xs font-bold text-stone-400 uppercase ">
                   Business Details
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Official registration details.
                  </p>
                </div>
                
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Nature of Business */}
                <div className="p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-white hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-stone-400 mb-1">
                    <BuildingStorefrontIcon className="w-4 h-4 text-emerald-800" />
                    <span className="text-[10.5px] font-bold uppercase tracking-wider">
                      Nature of Business
                    </span>
                  </div>
                  <div className="text-sm font-bold text-stone-950 tracking-tight">
                    Trader - Wholesaler/Distributor
                  </div>
                </div>

                {/* 2. Legal Status of Firm */}
                <div className="p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-white hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-stone-400 mb-1">
                    <BriefcaseIcon className="w-4 h-4 text-emerald-800" />
                    <span className="text-[10.5px] font-bold uppercase tracking-wider">
                      Legal Status of Firm
                    </span>
                  </div>
                  <div className="text-sm font-bold text-stone-950 tracking-tight">
                    Limited Company (Pvt. Ltd.)
                  </div>
                </div>

                {/* 3. Total Number of Employees */}
                <div className="p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-white hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-stone-400 mb-1">
                    <UserGroupIcon className="w-4 h-4 text-emerald-800" />
                    <span className="text-[10.5px] font-bold uppercase tracking-wider">
                      Total Number of Employees
                    </span>
                  </div>
                  <div className="text-sm font-bold text-stone-950 tracking-tight">
                    51 to 100 People
                  </div>
                </div>

                {/* 4. Annual Turnover */}
                <div className="p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-white hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-stone-400 mb-1">
                    <BanknotesIcon className="w-4 h-4 text-emerald-800" />
                    <span className="text-[10.5px] font-bold uppercase tracking-wider">
                      Annual Turnover
                    </span>
                  </div>
                  <div className="text-sm font-bold text-stone-950 tracking-tight">
                    ~ 40 L
                  </div>
                </div>

                {/* 5. GST Registration Date */}
                <div className="p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-white hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-stone-400 mb-1">
                    <CalendarDaysIcon className="w-4 h-4 text-emerald-800" />
                    <span className="text-[10.5px] font-bold uppercase tracking-wider">
                      GST Registration Date
                    </span>
                  </div>
                  <div className="text-sm font-bold text-stone-950 tracking-tight">
                    30-05-2018
                  </div>
                </div>

                {/* 6. Trustseal Verification */}
                <div className="p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-white hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-stone-400 mb-1">
                    <CheckBadgeIcon className="w-4 h-4 text-emerald-700" />
                    <span className="text-[10.5px] font-bold uppercase tracking-wider">
                      Trustseal Status
                    </span>
                  </div>
                  <div className="text-sm font-bold text-emerald-950 tracking-tight flex items-center gap-1.5">
                    <span>Trustseal Verified</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  </div>
                </div>

                {/* 7. GST No. with Copy Button */}
                <div className="p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-white hover:border-emerald-300 transition-all flex items-center justify-between">
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-stone-400 mb-0.5">
                      GST No.
                    </div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-stone-950 tracking-tight">
                      09AAZCS8852J1Z6
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("09AAZCS8852J1Z6", "gst")}
                    title="Copy GST Number"
                    className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 transition-colors flex items-center gap-1 text-[10px] font-semibold"
                  >
                    {copiedField === "gst" ? (
                      <>
                        <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <DocumentDuplicateIcon className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 8. CIN No. with Copy Button */}
                <div className="p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-white hover:border-emerald-300 transition-all flex items-center justify-between">
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-stone-400 mb-0.5">
                      CIN No.
                    </div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-stone-950 tracking-tight truncate max-w-[170px] sm:max-w-none">
                      U01110UP2018PTC101289
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("U01110UP2018PTC101289", "cin")}
                    title="Copy CIN Number"
                    className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 transition-colors flex items-center gap-1 text-[10px] font-semibold"
                  >
                    {copiedField === "cin" ? (
                      <>
                        <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <DocumentDuplicateIcon className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
