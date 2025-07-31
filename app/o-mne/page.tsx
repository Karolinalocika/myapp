// app/o-mne/page.tsx
import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import About from "@/app/components/about";

export const metadata: Metadata = {
  title: "O mně | Woofdesign",
  description:
    "Jsem Karolína Jurečka Krobová, grafická designérka a ilustrátorka z Prahy. Působím po celé ČR a vytvářím originální loga, vizuální identity, tiskoviny i ilustrace na míru.",
  keywords: [
    "o mně",
    "grafický designérka",
    "ilustrátorka",
    "Karolína Jurečka Krobová",
    "Woofdesign",
    "grafický design Praha",
    "ilustrace na zakázku",
    "vizuální identita",
  ],
  authors: [{ name: "Karolína Jurečka Krobová", url: "https://www.woofdesign.art" }],
  openGraph: {
    title: "O mně | Woofdesign",
    description:
      "Poznejte Karolínu Jurečku Krobovou – grafickou designérku & ilustrátorku. Podívejte se na mou filozofii, zkušenosti a ukázky práce.",
    url: "https://www.woofdesign.art/o-mne",
    siteName: "Woofdesign",
    images: [
      {
        url: "https://www.woofdesign.art/hlavniobrazek_o_mne.webp",
        width: 1200,
        height: 630,
        alt: "Karolína Jurečka Krobová – o mně",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "O mně | Woofdesign",
    description:
      "Jsem Karolína Jurečka Krobová, grafická designérka a ilustrátorka. Přečtěte si mé zkušenosti, přístup a hodnoty ve světě designu.",
    creator: "@karolina_krobova",
    images: ["https://www.woofdesign.art/hlavniobrazek_o_mne.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen w-full">
      <Navbar />

      <main className="pt-16 flex-grow w-full p-8">
        <About />
      </main>

      <Footer />
    </div>
  );
}
