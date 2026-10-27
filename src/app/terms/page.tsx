import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  BanknotesIcon,
  TruckIcon,
  DocumentTextIcon,
  ScaleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Terms & Conditions Policy | Satyasai Navkisan Green India Private Limited",
  description:
    "Official Terms and Conditions policy for plant orders, advance booking, delivery, payment terms, mortality replacement, and technical agronomy services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] font-sans text-stone-900">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-stone-500 font-medium flex items-center gap-2">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <span className="text-stone-400">/</span>
          <span className="text-emerald-800 font-semibold">Terms & Conditions</span>
        </nav>

        {/* Header */}
        <div className="border-b border-stone-200 pb-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 border border-emerald-200 mb-3">
            <DocumentTextIcon className="w-4 h-4" />
            Official Company Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Terms &amp; Conditions Policy
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Satyasai Navkisan Green India Private Limited • Registered in Lucknow, Uttar Pradesh
          </p>
        </div>

        {/* Highlight Summary Card */}
        <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-xl shadow-emerald-950/20">
          <div className="flex items-start gap-3.5 mb-4">
            <InformationCircleIcon className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Key Order &amp; Delivery Terms Summary
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200/90 mt-1">
                Please review our verified commercial purchase and delivery guidelines before placing your sapling booking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-200">
            <div className="flex items-center gap-2 bg-emerald-900/60 p-3 rounded-xl border border-emerald-800/80">
              <span className="text-emerald-400 font-bold">•</span>
              <span>₹500/- advance per unit (valid 3 months, non-refundable).</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-900/60 p-3 rounded-xl border border-emerald-800/80">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Balance payable against delivery at prevailing rates.</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-900/60 p-3 rounded-xl border border-emerald-800/80">
              <span className="text-emerald-400 font-bold">•</span>
              <span>DD in the name of SATYASAI NAVKISAN GREEN INDIA PVT. LTD.</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-900/60 p-3 rounded-xl border border-emerald-800/80">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Subject to exclusive Lucknow Jurisdiction only.</span>
            </div>
          </div>
        </div>

        {/* Detailed Clauses Body */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs space-y-8 text-sm leading-relaxed text-stone-700">
          {/* Clause 1: Delivery Cancellation & Postponement */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <TruckIcon className="w-5 h-5 text-emerald-700" />
              <span>1. Delivery Cancellation &amp; Postponement</span>
            </h2>
            <p className="text-stone-700 pl-7">
              The company shall be entitled to cancel or postpone delivery in any event or circumstances arising beyond its control (including adverse weather, transporter delays, governmental restrictions, or natural calamities).
            </p>
          </section>

          {/* Clause 2: Terms of Payment & Advance */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <BanknotesIcon className="w-5 h-5 text-emerald-700" />
              <span>2. Terms of Payment &amp; Advance Validity</span>
            </h2>
            <div className="pl-7 space-y-2">
              <p>
                <strong>Advance Amount:</strong> Terms of payment are <strong>Rs. 500/- advance per unit</strong>, and the balance amount is payable against delivery.
              </p>
              <p>
                <strong>Validity Period:</strong> Advance payment received is valid for a <strong>three-month period only</strong> from the date of deposit and is strictly <strong>non-refundable</strong>.
              </p>
              <p>
                <strong>Prevailing Rate:</strong> Payment should be made by the customer as per the rate in force at the time of delivery.
              </p>
            </div>
          </section>

          {/* Clause 3: Title & Property Ownership */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-700" />
              <span>3. Product Ownership &amp; Title</span>
            </h2>
            <p className="text-stone-700 pl-7">
              Product supplied to the customer shall remain the exclusive property of the company until the full sale amount is completely realized and cleared.
            </p>
          </section>

          {/* Clause 4: Non-Returnable & Non-Refundable Policy */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <ExclamationTriangleIcon className="w-5 h-5 text-amber-600" />
              <span>4. Final Sale Policy (No Return &amp; Non-Refundable)</span>
            </h2>
            <p className="text-stone-700 pl-7">
              Products once sold will not be taken back under any circumstances and the amount paid is non-refundable. Due to the biological and perishable nature of living rootstocks, saplings once dispatched cannot be returned.
            </p>
          </section>

          {/* Clause 5: Payment Mode & Demand Draft Instructions */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5 text-emerald-700" />
              <span>5. Demand Draft &amp; Payment Mode</span>
            </h2>
            <div className="pl-7 bg-stone-50 border border-stone-200 rounded-xl p-4">
              <p className="font-semibold text-stone-900 mb-1">
                Official Payee Details:
              </p>
              <p className="text-stone-700">
                Demand Draft (DD) should be drawn strictly in the name of:
              </p>
              <p className="text-base font-bold text-emerald-950 tracking-wide mt-1">
                SATYASAI NAVKISAN GREEN INDIA PVT. LTD.
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Payment payable at our branch office in Lucknow.
              </p>
            </div>
          </section>

          {/* Clause 6: Crop Growth & Yield Disclaimer */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <ScaleIcon className="w-5 h-5 text-emerald-700" />
              <span>6. Crop Growth &amp; Yield Disclaimer</span>
            </h2>
            <p className="text-stone-700 pl-7">
              The company is in no way responsible for fluctuations in growth and yield of the crop. Since the growth and yield of agricultural crops depend entirely on the quality and suitability of soil, irrigation water, climatic conditions, pest management, and cultivation practices undertaken by the grower, results may vary.
            </p>
          </section>

          {/* Clause 7: No Buy-Back Policy */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <ExclamationTriangleIcon className="w-5 h-5 text-amber-600" />
              <span>7. No Buy-Back Policy</span>
            </h2>
            <p className="text-stone-700 pl-7">
              The company will not buy the crop against purchase (<strong>Strictly No Buy-Back Policy</strong>). The company acts solely as a certified nursery producer and horticultural supplier.
            </p>
          </section>

          {/* Clause 8: Plantation Work Disclaimer */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <InformationCircleIcon className="w-5 h-5 text-emerald-700" />
              <span>8. Plantation Work Responsibility</span>
            </h2>
            <p className="text-stone-700 pl-7">
              The company will not be responsible for plantation work, digging of pits, field transplantation, or physical labor at the buyer&apos;s site unless explicitly agreed in writing under a separate contractual turnkey agreement.
            </p>
          </section>

          {/* Clause 9: Plant Mortality Replacement (10% Cap) */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-700" />
              <span>9. Plant Mortality Replacement Policy</span>
            </h2>
            <p className="text-stone-700 pl-7">
              The company shall not replace more than <strong>10% of mortality</strong> of the plants within <strong>three months</strong> from the date of purchase of the plants, and any replacement is strictly subject to prior inspection and verification by the technical personnel / agriculture officers of the company.
            </p>
          </section>

          {/* Clause 10: Technical Advisory Service */}
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-emerald-700" />
              <span>10. Technical Service &amp; Agronomy Advisory</span>
            </h2>
            <p className="text-stone-700 pl-7">
              Technical advisory service will be provided through our certified <strong>Agriculture Officers</strong> for customers purchasing <strong>10 units and above</strong>, for up to <strong>two (2) years</strong> from the date of purchase.
            </p>
          </section>

          {/* Clause 11: Legal Jurisdiction */}
          <section className="space-y-2 pt-4 border-t border-stone-200">
            <h2 className="text-base sm:text-lg font-bold text-stone-950 flex items-center gap-2">
              <ScaleIcon className="w-5 h-5 text-emerald-800" />
              <span>11. Legal Jurisdiction</span>
            </h2>
            <p className="text-stone-800 pl-7 font-semibold">
              &ldquo;All disputes, claims, or transactions are subject to Lucknow Jurisdiction only.&rdquo;
            </p>
          </section>

          {/* Corporate Identification */}
          <section className="pt-6 border-t border-stone-200">
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/90 text-xs text-stone-700 space-y-1">
              <p className="font-bold text-stone-950 text-sm">
                SATYASAI NAVKISAN GREEN INDIA PRIVATE LIMITED
              </p>
              <p>CIN: U01110UP2018PTC101289 • GST: 09AAZCS8852J1Z6</p>
              <p>Registered Office: Lucknow, Uttar Pradesh, India</p>
              <p>Phone: 07942637905 • Email: navikisan@gmail.com</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
