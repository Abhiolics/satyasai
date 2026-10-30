import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Graft Purity & Botanical Guarantee | Satyasai Navkisan Green India Private Limited",
  description:
    "100% True-to-Type Variety Graft Guarantee, phytosanitary standards, and rootstock quality warranty from Satyasai Navkisan Green India Private Limited.",
};

export default function PlantGuaranteePage() {
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
          <span className="text-stone-800">Botanical Guarantee</span>
        </nav>

        {/* Header */}
        <div className="border-b border-stone-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Graft Purity & Botanical Guarantee
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Last Updated: October 2026 • Certified Horticultural Assurance • ISO 9001:2015 Standard
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs space-y-8 text-sm leading-relaxed text-stone-700">
          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              1. Our Botanical Quality Commitment
            </h2>
            <p>
              Establishing a commercial fruit orchard or an agro-forestry plantation is a generational financial commitment. At Satyasai Navkisan Green India Private Limited, we protect your orchard investment by applying institutional scientific propagation methods. Every grafted plant, clonal rootstock, and tissue-cultured sapling produced at our Lucknow mother estate is certified true-to-type, disease-tested, and propagated from verified parent gene stock.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              2. 100% True-to-Type Scion Guarantee
            </h2>
            <p className="mb-3">
              We certify that every graft corresponds strictly to the named horticultural variety ordered:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Heritage Mango Varieties:</strong> Scion wood for Gir Kesar, Ratnagiri Alphonso, Malihabadi Dussehri, Baramasi, Amrapali, Langra, Chausa, Mallika, and Totapuri is harvested exclusively from indexed, bearing mother orchards.
              </li>
              <li>
                <strong>Taiwan Pink Guava:</strong> Clonal air-layers and wedge grafts propagated from high-yield, pink-fleshed mother lines known for early bearing and exceptional TSS sugar content.
              </li>
              <li>
                <strong>Tissue-Cultured Burma Teak:</strong> Laboratory-micropropagated from elite candidate plus trees (CPTs), guaranteeing straight bole formation, rapid girth expansion, and absence of hereditary heartwood hollowness.
              </li>
              <li>
                <strong>Seedless Lemon & Citrus:</strong> Clonal budwood free from citrus tristeza virus (CTV) and bacterial canker strains.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              3. Graft Union Health & Physical Quality Standards
            </h2>
            <p className="mb-3">
              Prior to clearance for client delivery, each batch must satisfy strict physical nursery benchmarks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-950 block mb-1">Graft Union Strength</span>
                <p className="text-stone-600">100% healed callused graft union with no mechanical fissure, structural instability, or parasitic undergrowth.</p>
              </div>
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-950 block mb-1">Root System Vigor</span>
                <p className="text-stone-600">Dense fibrous white feeder root development; absence of root girdling, taproot damage, or waterlogged rot.</p>
              </div>
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-950 block mb-1">Age & Height Specifications</span>
                <p className="text-stone-600">6 to 14 months nursery-hardened specimens measuring 70cm to 130cm, hardened under open sunlight before transport.</p>
              </div>
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-950 block mb-1">Phytosanitary Clearance</span>
                <p className="text-stone-600">Certified free from active scale insects, mealybugs, leaf miners, anthrax, and soil nematode infections.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              4. Botanical Warranty Protocol & Replacement
            </h2>
            <p className="mb-3">
              If, upon bearing maturity, any tree supplied by us produces fruit fundamentally different in botanical cultivar characteristics from the invoiced variety (variety misrepresentation):
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We will provide 100% free botanical replacement stock for all misidentified specimens.
              </li>
              <li>
                Provide expert on-site or virtual top-working / rebudding assistance using verified scion wood.
              </li>
              <li>
                Issue a commercial credit voucher equivalent to the purchase price of the affected specimens.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              5. Ongoing Agronomy Support & Grower Advisory
            </h2>
            <p>
              We believe a nursery&apos;s responsibility extends far beyond the farm gate. All growers and orchardists ordering from Satyasai Navkisan receive direct seasonal advisory support covering pit excavation dimensions (1m x 1m x 1m), organic FYM soil preparation, drip irrigation scheduling, micronutrient foliar sprays, and scientific formative canopy pruning.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              6. Horticultural Certification & Verification Desk
            </h2>
            <p className="mb-2">
              For batch certificate inquiries or technical variety authentication:
            </p>
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/70 text-emerald-950 space-y-1">
              <p className="font-semibold">Botanical Certification Office</p>
              <p>Satyasai Navkisan Green India Private Limited</p>
              <p>Estate: Mohanlalganj / Lucknow, Uttar Pradesh - India</p>
              <p>Horticulture Desk: <a href="tel:+91 99568 79905" className="font-bold underline">+91 99568 79905</a></p>
              <p>Email: <a href="mailto:navikisan@gmail.com" className="font-bold underline">navikisan@gmail.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
