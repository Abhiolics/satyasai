import type { Metadata, Viewport } from "next";
import "./globals.css";
import MobileBottomNav from "@/components/MobileBottomNav";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Satyasai Navkisan Green India | Elite Botanical Nursery & Fruit Plant Grafts",
  description:
    "India's premier certified botanical nursery & agro-forestry estate. High-yielding grafted Mango, Taiwan Pink Guava, Tissue-Cultured Burma Teak, and elite horticulture saplings.",
  keywords: [
    "Satyasai Navkisan Green India",
    "fruit plants nursery",
    "mango plants graft",
    "guava plants Taiwan Pink",
    "teak plants tissue culture",
    "certified nursery India",
    "agro forestry plants",
  ],
  authors: [{ name: "Satyasai Navkisan Green India Private Limited" }],
  icons: {
    icon: [
      { url: "/images/logo.jpg" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/logo.jpg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fafaf9] text-stone-900 selection:bg-emerald-900 selection:text-emerald-100">
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}

