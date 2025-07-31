// app/cenik/page.tsx
import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Pricing from "@/app/components/cenik";

export const metadata: Metadata = {
  title: "Ceník | Woofdesign",
  description:
    "Zjistěte orientační ceny za služby grafického designu a ilustrací od Karolíny Jurečky Krobové. Tvorba loga, vizuální identity, tiskovin, bannerů a originálních ilustrací na míru.",
  keywords: [
    "ceník",
    "ceny grafického designu",
    "cena loga",
    "cena vizuální identity",
    "cena ilustrace",
    "grafický design ceník",
    "Woofdesign",
    "Karolína Jurečka Krobová",
  ],
  authors: [{ name: "Karolína Jurečka Krobová", url: "https://www.woofdesign.art" }],
  openGraph: {
    title: "Ceník | Woofdesign",
    description:
      "Zjistěte orientační ceny za služby grafického designu a ilustrací od Karolíny Jurečky Krobové. Tvorba loga, tiskovin, bannerů a ilustrací na míru.",
    url: "https://www.woofdesign.art/cenik",
    siteName: "Woofdesign",
    images: [
      {
        url: "https://www.woofdesign.art/hlavniobrazek_pricing.webp",
        width: 1200,
        height: 630,
        alt: "Ceník služeb grafického designu a ilustrací Woofdesign",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceník | Woofdesign",
    description:
      "Prohlédněte si orientační ceník služeb: tvorba loga, vizuální identity, tiskoviny, bannery a ilustrace na míru od Woofdesign.",
    creator: "@karolina_krobova",
    images: ["https://www.woofdesign.art/hlavniobrazek_pricing.webp"],
  },
};

export default function PricingPage() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen w-full">
      <Navbar />

      <main className="pt-16 flex-grow w-full p-8">
        <h1 className="text-4xl font-bold mb-6">Ceník</h1>
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
