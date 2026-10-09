"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  DocumentDuplicateIcon,
  CheckBadgeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import {
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

// Social Icons SVGs matching reference image
function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TiktokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("navikisan@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          phone: formData.number,
          email: formData.email,
          requirement: formData.requirement,
          message: formData.requirement,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit requirement");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMsg(
        error.message ||
          "There was an error routing your request. Please reach us directly at navikisan@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(
      `Plantation Requirement from ${formData.name || "Customer"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name || "N/A"}\nNumber: ${formData.number || "N/A"}\nEmail: ${formData.email || "N/A"}\n\nRequirement:\n${formData.requirement || "Please contact me regarding saplings."}\n\nRouted to: navikisan@gmail.com`
    );
    return `mailto:navikisan@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col justify-between selection:bg-emerald-950 selection:text-emerald-100 relative">
      {/* Responsive Navbar */}
      <Navbar />

      <div className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* ========================================================================= */}
        {/* TOP SECTION: WHITE CLEAN CARD CONTAINER MATCHING USER REFERENCE IMAGE    */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2.5rem] bg-white border border-stone-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-7 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Centered Editorial Header matching reference: "Contact Us" */}
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial text-stone-900 tracking-tight font-normal">
              Contact <span className="italic font-serif">Us</span>
            </h1>
            <p className="mt-3.5 text-xs sm:text-sm text-stone-500 leading-relaxed font-normal">
              We&apos;re here to help! Whether you have questions, feedback, or
              need agronomy support, our team is ready to assist you.
            </p>
          </div>

          {/* Two-Column Split Layout matching reference image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* ---------------------------------------------------- */}
            {/* LEFT COLUMN: "Get in touch" + Details                */}
            {/* ---------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-stone-900 tracking-tight font-normal">
                Get in <span className="italic font-serif">touch</span>
              </h2>

              <div className="space-y-5 text-left">
                {/* Email Item */}
                <div>
                  <div className="text-xs sm:text-sm text-stone-400 font-normal">
                    Email:
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base sm:text-lg font-semibold text-stone-900 tracking-tight select-all">
                      navikisan@gmail.com
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="text-stone-400 hover:text-emerald-900 p-1 rounded-md transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <DocumentDuplicateIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div>
                  <div className="text-xs sm:text-sm text-stone-400 font-normal">
                    Phone:
                  </div>
                  <a
                    href="tel:07942637905"
                    className="text-base sm:text-lg font-semibold text-stone-900 hover:text-emerald-950 transition-colors mt-1 block"
                  >
                    07942637905
                  </a>
                </div>

                {/* Address Item with Google Maps Link */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-stone-400 font-normal">
                      Address:
                    </span>
                    <a
                      href="https://maps.google.com/?q=26.86279000,80.99733000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-emerald-850 hover:text-emerald-950 inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200 transition-all cursor-pointer"
                    >
                      <MapPinIcon className="w-3 h-3 text-emerald-700" />
                      <span>Get Location</span>
                    </a>
                  </div>
                  <a
                    href="https://maps.google.com/?q=26.86279000,80.99733000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-stone-900 mt-1.5 leading-snug block hover:text-emerald-950 transition-colors"
                  >
                    Satyasai Navkisan Green India Private Limited
                    <br />
                    Lucknow, Uttar Pradesh - 226001
                    <br />
                    India
                  </a>
                </div>

                {/* Follow Us Social Icons */}
                <div className="pt-2">
                  <div className="text-xs sm:text-sm text-stone-400 font-normal mb-3">
                    Follow Us
                  </div>
                  <div className="flex items-center gap-4 text-stone-900">
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full hover:text-red-600 hover:scale-110 transition-all"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full hover:text-pink-600 hover:scale-110 transition-all"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full hover:text-emerald-700 hover:scale-110 transition-all"
                      aria-label="TikTok"
                    >
                      <TiktokIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full hover:text-stone-700 hover:scale-110 transition-all"
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ---------------------------------------------------- */}
            {/* RIGHT COLUMN: The Clean Rounded Form                */}
            {/* ---------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Animated Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 sm:p-12 text-center rounded-3xl bg-stone-50 border border-stone-200/80 space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                      <CheckCircleIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-editorial text-stone-900 font-normal">
                      Requirement Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                      Your plantation requirement has been recorded and routed directly to{" "}
                      <strong className="text-stone-900 font-mono">
                        navikisan@gmail.com
                      </strong>
                      . Our Lucknow nursery team will call you on{" "}
                      <span className="font-mono text-stone-900 font-semibold">{formData.number}</span> shortly.
                    </p>

                    {/* Summary Card */}
                    <div className="max-w-md mx-auto p-4 rounded-2xl bg-white border border-stone-200/90 text-left text-xs space-y-1.5 font-medium text-stone-700 shadow-2xs">
                      <div className="flex justify-between">
                        <span className="text-stone-400">Name:</span>
                        <span className="text-stone-900 font-semibold">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Number:</span>
                        <span className="text-stone-900 font-mono font-semibold">{formData.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Email:</span>
                        <span className="text-stone-900 font-semibold">{formData.email}</span>
                      </div>
                      <div className="border-t border-stone-100 pt-1.5">
                        <span className="text-stone-400 block mb-0.5">Requirement:</span>
                        <span className="text-stone-900 font-normal leading-relaxed">{formData.requirement}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", number: "", email: "", requirement: "" });
                        }}
                        className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-all cursor-pointer"
                      >
                        Send Another Requirement
                      </button>
                      <a
                        href={generateMailtoLink()}
                        className="px-5 py-2.5 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-all"
                      >
                        Open Mail App
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* Main Form */
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {errorMsg && (
                      <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
                        {errorMsg}
                      </div>
                    )}

                    {/* Form Fields: Name, Number, Email & Requirement */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-800 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your name"
                          className="w-full px-5 py-3.5 rounded-full bg-[#f3f4f6] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30 focus:bg-white transition-all placeholder:text-stone-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-800 mb-2">
                          Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.number}
                          onChange={(e) =>
                            setFormData({ ...formData, number: e.target.value })
                          }
                          placeholder="Phone / WhatsApp number"
                          className="w-full px-5 py-3.5 rounded-full bg-[#f3f4f6] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30 focus:bg-white transition-all placeholder:text-stone-400 font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-stone-800 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Your email address"
                        className="w-full px-5 py-3.5 rounded-full bg-[#f3f4f6] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30 focus:bg-white transition-all placeholder:text-stone-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-stone-800 mb-2">
                        Requirement
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.requirement}
                        onChange={(e) =>
                          setFormData({ ...formData, requirement: e.target.value })
                        }
                        placeholder="Tell us your requirement (e.g. sapling variety, quantity, acreage, delivery location)..."
                        className="w-full px-5 py-4 rounded-3xl bg-[#f3f4f6] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30 focus:bg-white transition-all placeholder:text-stone-400 resize-y"
                      />
                    </div>

                    {/* Deep Green Full-Width Pill Submit Button matching reference */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-full bg-[#0d4d34] hover:bg-[#0a3e2a] text-white text-sm sm:text-base font-medium tracking-tight shadow-md hover:shadow-xl transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Routing message to navikisan@gmail.com...</span>
                        </div>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

    
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
