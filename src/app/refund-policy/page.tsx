import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cancellation, Return & Refund Policy | Satyasai Navkisan Green India Private Limited",
  description:
    "Transparent return, transit damage claims, cancellation, and refund policies for certified nursery saplings and agricultural plant orders.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] font-sans text-stone-900">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-stone-500 font-medium">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-stone-400">/</span>
          <span className="text-stone-800">Return & Refund Policy</span>
        </nav>

        {/* Header */}
        <div className="border-b border-stone-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Cancellation, Return & Refund Policy
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Last Updated: October 2026 • Satyasai Navkisan Green India Private Limited
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs space-y-8 text-sm leading-relaxed text-stone-700">
          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              1. Nature of Living Botanical Inventory
            </h2>
            <p>
              Satyasai Navkisan Green India Private Limited (&ldquo;we&rdquo;, &ldquo;our&rdquo;) cultivates and supplies perishable biological agricultural products, specifically grafted fruit trees (Mango, Guava, Lemon) and tissue-cultured timber saplings (Burma Teak). Unlike non-perishable manufactured consumer goods, live rootstock and vegetative buds require specialized biological custody. Consequently, standard return shipping is biologically impractical due to mortality risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              2. Order Cancellation Policy
            </h2>
            <div className="space-y-3">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <p className="font-semibold text-stone-950 mb-1">
                  A. Prior to Nursery Extraction & Vehicle Loading (Full Refund / Rescheduling)
                </p>
                <p className="text-xs sm:text-sm text-stone-600">
                  You may cancel or postpone your order at any time before saplings have been pulled from growing beds, bundled, and loaded onto the dispatch truck. Upon receipt of written or verbal cancellation via phone/WhatsApp, 100% of any advance payment will be refunded within 5–7 business days or credited toward future nursery inventory.
                </p>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <p className="font-semibold text-stone-950 mb-1">
                  B. Post-Loading & In-Transit (Non-Cancellable)
                </p>
                <p className="text-xs sm:text-sm text-stone-600">
                  Once living plants have been extracted, root-wrapped, palletized, and secured inside a transit transport vehicle with a generated E-Way Bill, orders cannot be cancelled mid-transit due to severe biological perishability.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              3. Transit Damage & Dead-On-Arrival (DOA) Guarantee
            </h2>
            <p className="mb-3">
              We stand firmly behind the health of every specimen dispatched from our Mohanlalganj, Lucknow nursery estate. If plants arrive with severe transit-induced damage:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Eligible Transit Damage:</strong> Severed main graft union, crushed root-balls resulting in complete root exposure, or vehicular transport collapse.
              </li>
              <li>
                <strong>24-Hour Notice Window:</strong> Claims must be registered within 24 hours of vehicle arrival by submitting clear date-stamped photographs or brief video evidence showing the damaged specimens.
              </li>
              <li>
                <strong>Remedy & Resolution:</strong> Upon agronomic review of your submission, we will promptly provide one of the following:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Priority replacement saplings dispatched at zero additional plant cost.</li>
                  <li>A direct credit adjustment note for your next seasonal plantation.</li>
                  <li>A prorated refund for the verified damaged count via original payment mode.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              4. Normal Botanical Observations (Non-Defective)
            </h2>
            <p className="mb-2">
              The following natural botanical phenomena are standard biological reactions to transport and do NOT qualify as damaged goods:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>Minor shedding of lower mature leaves (plants enter light dormancy to conserve root moisture).</li>
              <li>Natural curvature of tender top shoots (realigns within 7–10 days post-watering and planting).</li>
              <li>Slight soil shedding from poly-bags during vehicular vibration.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              5. Plant Mortality Replacement Policy (10% Cap) &amp; Field Care
            </h2>
            <div className="space-y-3">
              <p>
                The company shall not replace more than <strong>10% of mortality</strong> of the plants within <strong>three (3) months</strong> from the date of purchase of the plants, subject to physical verification and confirmation by the technical personnel / agriculture officers of the company.
              </p>
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-1">
                <p>• <strong>No Buy-Back Policy:</strong> The company will not buy the crop against purchase.</p>
                <p>• <strong>Plantation Work:</strong> The company is not responsible for field plantation labor.</p>
                <p>• <strong>Crop Yield:</strong> Growth and yield depend on soil, water, climate, and cultivation practices.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              6. Refund Execution & Timelines
            </h2>
            <p>
              All authorized refunds are processed within 5 to 7 working days through direct NEFT/RTGS bank transfer or original UPI source. Written confirmation and transaction receipt copies will be shared immediately via email or WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              7. How to File a Claim
            </h2>
            <p className="mb-2">
              To submit a claim, please reach out with your order invoice number and unboxing photographs:
            </p>
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/70 text-emerald-950 space-y-1">
              <p className="font-semibold">Claims & Quality Assurance Desk</p>
              <p>Email: <a href="mailto:navikisan@gmail.com" className="font-bold underline">navikisan@gmail.com</a></p>
              <p>Direct Call / WhatsApp: <a href="tel:07942637905" className="font-bold underline">07942637905</a></p>
              <p>Operating Hours: Monday – Saturday (8:00 AM – 7:00 PM IST)</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
