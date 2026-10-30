import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Satyasai Navkisan Green India Private Limited",
  description:
    "Comprehensive shipping, packaging, and logistics policy for live horticulture saplings, grafted fruit plants, and agro-forestry species from Satyasai Navkisan Green India.",
};

export default function ShippingPolicyPage() {
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
          <span className="text-stone-800">Shipping & Delivery Policy</span>
        </nav>

        {/* Header */}
        <div className="border-b border-stone-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Shipping & Delivery Policy
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Last Updated: October 2026 • Satyasai Navkisan Green India Private Limited
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs space-y-8 text-sm leading-relaxed text-stone-700">
          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              1. Overview & Live Biological Logistics
            </h2>
            <p>
              At Satyasai Navkisan Green India Private Limited (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;), we take extraordinary care in transporting live botanical horticulture & plantation stock, high-density fruit grafts, and tissue-cultured timber saplings. Because living plants require continuous aeration, root-ball hydration, and physical stability during transit, all logistics are handled under specialized horticultural shipping protocols.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              2. Packaging & Rootstock Hydration Protocols
            </h2>
            <p className="mb-3">
              To guarantee maximum field survival and eliminate transit desiccation shock, every consignment undergoes rigorous horticulture dispatch preparation:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Hydrated Root-Ball Wrapping:</strong> Each root zone is pre-treated with anti-fungal bio-solution, enriched with premium coco-peat moisture retention media, and securely wrapped in breathable poly-netting.
              </li>
              <li>
                <strong>Graft Union Protection:</strong> Graft joints of stone-grafted Mango, Guava, and Citrus plants are fortified with protective support collars to prevent shear fractures during vehicular transit.
              </li>
              <li>
                <strong>Ventilated Crating & Stacking:</strong> Bulk orders are palletized and transported in ventilated, shaded agricultural transport crates to preserve foliar health and allow natural airflow.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              3. Dispatch Modes & Delivery Timelines
            </h2>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 mb-4 text-emerald-950">
              <span className="font-bold block text-sm mb-1">Standard Delivery Timelines:</span>
              <p className="text-xs sm:text-sm">
                • <strong>Within UP:</strong> 2–3 days<br />
                • <strong>Outside UP:</strong> approximately 1 week
              </p>
            </div>
            <p className="mb-3">
              We offer flexible shipping arrangements tailored to consignment size, destination, and grower requirements:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-stone-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-900 font-semibold">
                    <th className="p-3 border-r border-stone-200">Dispatch Mode</th>
                    <th className="p-3 border-r border-stone-200">Coverage Zone</th>
                    <th className="p-3">Estimated Transit Window</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-3 font-medium text-stone-950 border-r border-stone-200">Farm-Gate Self Pickup</td>
                    <td className="p-3 border-r border-stone-200">Lucknow Estate Plantation (Mohanlalganj)</td>
                    <td className="p-3">Same Day / Immediate Loading upon inspection</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-stone-950 border-r border-stone-200">Dedicated Agri-Truck / Tempo</td>
                    <td className="p-3 border-r border-stone-200">Within Uttar Pradesh (UP) & NCR</td>
                    <td className="p-3 font-semibold text-emerald-950">2–3 Days</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-stone-950 border-r border-stone-200">Interstate Long-Haul Logistics</td>
                    <td className="p-3 border-r border-stone-200">Outside UP (Central, Western, Southern & Eastern India)</td>
                    <td className="p-3 font-semibold text-emerald-950">Approximately 1 Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              4. Statutory Documentation & E-Way Bills
            </h2>
            <p>
              All dispatches are fully compliant with Indian agricultural transit regulations and state quarantine guidelines. Shipments are accompanied by official Tax Invoices (GST: 09AAZCS8852J1Z6), statutory GST E-Way Bills, botanical transport declarations, and consignment manifests detailing exact plant varieties and counts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              5. Delivery Inspection & Unloading Guidelines
            </h2>
            <p className="mb-3">
              Upon the arrival of your transport vehicle at the designated orchard or farm boundary, the consignee or their authorized estate manager must:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Immediate Count & Quality Check:</strong> Verify the count of plant crates and overall foliar health alongside the driver or delivery executive.
              </li>
              <li>
                <strong>Immediate Hydration:</strong> Live saplings should be unloaded into a shaded location and lightly sprinkled with fresh water within 2 hours of arrival to counter travel warmth.
              </li>
              <li>
                <strong>Report Any Transit Damage Within 24 Hours:</strong> In the rare instance of vehicular overturning, crate collapse, or mechanical damage to root-balls during transit, take clear date-stamped photographs or videos and contact our logistics coordinator immediately at +91 99568 79905 / +91 96444 15555 or navikisan@gmail.com.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              6. Force Majeure & Weather Holds
            </h2>
            <p>
              Living plants cannot be dispatched during severe meteorological anomalies such as extreme heatwaves (&gt;45°C), active severe frost alerts, or flooded national arterial highways. In such circumstances, our chief agronomist reserves the right to momentarily hold dispatch until safe travel temperatures resume to preserve your crop investment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              7. Contact Logistics & Dispatch Helpdesk
            </h2>
            <p className="mb-2">
              For live dispatch tracking, vehicle allocation status, or driver contact coordinates:
            </p>
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/70 text-emerald-950 space-y-1">
              <p className="font-semibold">Satyasai Navkisan Green India Private Limited — Logistics Desk</p>
              <p>Estate Office: Lucknow, Uttar Pradesh - India</p>
              <p>Helpline: <a href="tel:+91 99568 79905" className="font-bold underline">+91 99568 79905</a> • <a href="tel:+91 96444 15555" className="font-bold underline">+91 96444 15555</a></p>
              <p>Email: <a href="mailto:navikisan@gmail.com" className="font-bold underline">navikisan@gmail.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
