// app/kontakt/page.tsx
import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ContactForm from "@/app/components/contactform";

export const metadata: Metadata = {
  title: "Kontakt | Woofdesign",
  description:
    "Kontaktujte Karolínu Jurečku Krobovou – grafickou designérku a ilustrátorku. Ráda vám pomohu s tvorbou loga, vizuální identity, tiskovin či ilustrací na míru.",
  keywords: [
    "kontakt",
    "kontaktní formulář",
    "grafický designérka kontakt",
    "ilustrátorka kontakt",
    "Woofdesign",
    "Karolína Jurečka Krobová",
    "grafický design Praha",
    "ilustrace na zakázku",
  ],
  authors: [{ name: "Karolína Jurečka Krobová", url: "https://www.woofdesign.art" }],
  openGraph: {
    title: "Kontakt | Woofdesign",
    description:
      "Máte dotaz či chcete poptat grafické služby? Kontaktujte Karolínu Jurečku Krobovou přes kontaktní formulář nebo e-mailem: karolina.krob@gmail.com.",
    url: "https://www.woofdesign.art/kontakt",
    siteName: "Woofdesign",
    images: [
      {
        url: "https://www.woofdesign.art/hlavniobrazek_kontakt.webp",
        width: 1200,
        height: 630,
        alt: "Kontaktujte Woofdesign – grafický design a ilustrace",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Woofdesign",
    description:
      "Kontaktujte Karolínu Jurečku Krobovou – grafickou designérku a ilustrátorku. Odeslat poptávku přes kontaktní formulář.",
    creator: "@karolina_krobova",
    images: ["https://www.woofdesign.art/hlavniobrazek_kontakt.webp"],
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen w-full">
      <Navbar />

        <ContactForm />


      <Footer />
    </div>
  );
}
