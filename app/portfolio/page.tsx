// app/portfolio/page.tsx
import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Portfolio from "@/app/components/ukazka";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Portfolio | Woofdesign",
  description:
    "Prohlédněte si portfolio Karolíny Jurečky Krobové – ukázky grafického designu, log, vizuální identity a ilustrací vytvořených na míru.",
  keywords: [
    "portfolio",
    "grafický design portfolio",
    "ilustrace portfolio",
    "vizuální identita ukázky",
    "tvorba loga portfolio",
    "Karolína Jurečka Krobová",
    "Woofdesign",
  ],
  authors: [{ name: "Karolína Jurečka Krobová", url: "https://www.woofdesign.art" }],
  openGraph: {
    title: "Portfolio | Woofdesign",
    description:
      "Portfolio grafických prací a ilustrací Karolíny Jurečky Krobové. Inspirujte se originálními projekty Woofdesign.",
    url: "https://www.woofdesign.art/portfolio",
    siteName: "Woofdesign",
    images: [
      {
        url: "https://www.woofdesign.art/hlavniobrazek.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio grafického designu a ilustrací Woofdesign",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Woofdesign",
    description:
      "Portfolio grafických prací a ilustrací Karolíny Jurečky Krobové. Inspirujte se originálními projekty Woofdesign.",
    creator: "@karolina_krobova",
    images: ["https://www.woofdesign.art/hlavniobrazek.webp"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen w-full">
      <Navbar />

      <main className="pt-16 flex-grow w-full p-8">
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}
