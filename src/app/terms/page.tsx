import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | Satyasai Navkisan Green India Private Limited",
  description:
    "Terms and conditions for using the Satyasai Navkisan Green India Private Limited website, purchasing certified nursery saplings, and agro-forestry services.",
};

export default function TermsPage() {
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
          <span className="text-stone-800">Terms of Use</span>
        </nav>

        {/* Header */}
        <div className="border-b border-stone-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Terms of Use
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Last Updated: October 2026 • Satyasai Navkisan Green India Private Limited
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs space-y-8 text-sm leading-relaxed text-stone-700">
          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, inquiring about nursery inventory, or placing an order with Satyasai Navkisan Green India Private Limited (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you agree to comply with and be bound by the following Terms of Use. If you do not agree to these terms, please do not use this website or our commercial services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              2. Botanical & Nursery Products
            </h2>
            <p className="mb-3">
              We specialize in propagating certified fruit plant grafts (including Mango, Taiwan Pink Guava, Lemon) and commercial agro-forestry saplings (Tissue-Cultured Burma Teak, Poplar, etc.).
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Live Plant Nature:</strong> Plants are living organisms. Variations in foliage, branching, height, and seasonal dormancy are natural and do not constitute defective goods.
              </li>
              <li>
                <strong>Catalog Specifications:</strong> Product photographs, specifications, and growth timelines shown on our website represent typical healthy specimens grown under standard scientific nursery practices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              3. Orders, Inquiries & Farm-Gate Pricing
            </h2>
            <p className="mb-3">
              All quotes provided via our website, phone desk, or WhatsApp are farm-gate estimates based on batch availability at our Lucknow polyhouses.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Orders are confirmed upon mutual agreement on batch specifications, quantity, and payment terms.
              </li>
              <li>
                Minimum order quantities (MOQ) may apply for commercial orchard shipments and interstate logistical freight.
              </li>
              <li>
                Applicable taxes, GST, loading charges, and transportation freight will be explicitly detailed in commercial invoices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              4. Transportation, Dispatch & Delivery
            </h2>
            <p className="mb-3">
              We coordinate dispatch across India using specialized root-ball packing and ventilated vehicle carriers to ensure transit safety.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Buyers are responsible for inspecting sapling condition immediately upon arrival at the destination site.
              </li>
              <li>
                Any transit damage or discrepancy must be reported within 24 hours of unloading with photographic verification.
              </li>
              <li>
                Unloading at the buyer&apos;s site is the responsibility of the consignee unless full turnkey unloading was contracted in writing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              5. Field Care & Plantation Disclaimers
            </h2>
            <p>
              While our certified strains undergo rigorous mother-block indexing and hardening, ultimate crop yields and plantation survival rates depend on environmental factors outside our control, including soil preparation, irrigation, local climate, water pH, and timely agrochemical management. Agronomy guidance provided by our staff is advisory in nature and based on standard good agricultural practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website, including nursery catalogs, plant specifications, logos, brand names, blueprints, images, and text, is the property of Satyasai Navkisan Green India Private Limited and protected under applicable intellectual property laws. Unauthorized reproduction or commercial distribution without written consent is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising from transactions or use of this website shall be subject to the exclusive jurisdiction of the competent courts in Lucknow, Uttar Pradesh.
            </p>
          </section>

          <section className="pt-4 border-t border-stone-200">
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              8. Contact Information
            </h2>
            <p className="mb-3">
              If you have any questions or require clarifications regarding these terms, please contact our administrative desk:
            </p>
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-1.5 text-xs text-stone-800">
              <p className="font-semibold text-stone-950">
                Satyasai Navkisan Green India Private Limited
              </p>
              <p>CIN: U01110UP2018PTC101289 • GST: 09AAZCS8852J1Z6</p>
              <p>Registered Office: Lucknow, Uttar Pradesh, India</p>
              <p>Phone: 07942637905</p>
              <p>Email: navikisan@gmail.com</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
