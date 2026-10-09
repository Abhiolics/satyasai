import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Satyasai Navkisan Green India Private Limited",
  description:
    "Privacy Policy for Satyasai Navkisan Green India Private Limited explaining how we collect, handle, and protect your information.",
};

export default function PrivacyPage() {
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
          <span className="text-stone-800">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="border-b border-stone-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Last Updated: October 2026 • Satyasai Navkisan Green India Private Limited
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs space-y-8 text-sm leading-relaxed text-stone-700">
          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              1. Introduction
            </h2>
            <p>
              Satyasai Navkisan Green India Private Limited (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your details when you visit our website, submit quotation requests, or contact our farm agronomy desk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information that you voluntarily provide when interacting with our nursery services, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Contact Details:</strong> Your name, mobile/WhatsApp telephone number, and email address.
              </li>
              <li>
                <strong>Plantation & Project Details:</strong> Target acreage, location/district for delivery, selected plant varieties (Mango, Guava, Teak, etc.), and estimated batch volume.
              </li>
              <li>
                <strong>Inquiry Communications:</strong> Messages or notes submitted through our contact and appointment booking forms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">
              The information we collect is strictly used to deliver agricultural solutions and customer support:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                To generate accurate farm-gate quotations and plant dispatch estimates.
              </li>
              <li>
                To coordinate root-ball packing, truck loading, and inter-state logistics to your plantation site.
              </li>
              <li>
                To provide post-planting agronomy guidance, pit spacing blueprints, and orchard management advice.
              </li>
              <li>
                To respond to inquiries and booking requests submitted via WhatsApp, phone, or email.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              4. Data Sharing & Security
            </h2>
            <p className="mb-3">
              We value your trust. We do not sell, rent, or trade your personal information to third-party marketing companies.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Logistics Partners:</strong> Delivery details (name, phone number, and drop-off coordinates) may be shared with trusted transport carriers solely to execute nursery plant deliveries.
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose information if required to comply with applicable Indian laws, tax regulations, or lawful court directives.
              </li>
              <li>
                <strong>Security Measures:</strong> We employ administrative and technical safeguards to protect your personal details against unauthorized access or disclosure.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              5. Cookies and Technical Data
            </h2>
            <p>
              Our website may use standard functional cookies or analytical tools to improve site loading speed, maintain navigation preferences, and ensure seamless performance across devices. These cookies do not collect sensitive personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              6. Your Privacy Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to inaccurate details, or request deletion of your contact records from our advisory list. To exercise any of these rights, please reach out using the contact information below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may periodically update this Privacy Policy to reflect operational or regulatory changes. Any updates will be posted directly on this page with the corresponding &ldquo;Last Updated&rdquo; date.
            </p>
          </section>

          <section className="pt-4 border-t border-stone-200">
            <h2 className="text-lg font-bold text-stone-950 mb-3">
              8. Contact Us
            </h2>
            <p className="mb-3">
              If you have any questions or feedback regarding our privacy practices, please contact us:
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
