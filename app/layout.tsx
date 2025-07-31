// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const montserratAlt = Montserrat_Alternates({
  variable: "--font-montserrat-alt",
  subsets: ["latin"],
  display: "swap",
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
});

export const metadata: Metadata = {
  // základní titulky
  title: {
    default: "Woofdesign – grafický design & ilustrace na míru",
    template: "%s | Woofdesign"
  },
  description:
    "Woofdesign – profesionální grafický design, tvorba loga, vizuální identita, tiskoviny a originální ilustrace na míru. Karolína Jurečka Krobová, Praha & ČR.",
  keywords: [
    "grafický designér",
    "grafická designérka",
    "ilustrátor",
    "ilustrátorka",
    "tvorba loga",
    "vizuální identita",
    "tiskoviny",
    "ilustrace na míru",
    "grafika pro sociální sítě"
  ],
  authors: [
    { name: "Karolína Jurečka Krobová", url: "https://www.woofdesign.art" }
  ],
  creator: "Karolína Jurečka Krobová",

  // ikony
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png"
  },

  // barva prohlížeče/předvolba motivu
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#001336" }
  ],

  // mobilní viewport
  viewport: {
    width: "device-width",
    initialScale: 1
  },

  // Open Graph pro sdílení
  openGraph: {
    title: "Woofdesign – grafický design & ilustrace na míru",
    description:
      "Tvorba loga, vizuální identity, tiskovin a originálních ilustrací pro firmy i jednotlivce. Karolína Jurečka Krobová.",
    url: "https://www.woofdesign.art",
    siteName: "Woofdesign",
    images: [
      {
        url: "https://www.woofdesign.art/hlavnistranka.webp",
        width: 1200,
        height: 630,
        alt: "Ukázka grafického designu a ilustrací Woofdesign"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Woofdesign – grafický design & ilustrace na míru",
    description:
      "Grafický design, tvorba loga, vizuální identita, tiskoviny a ilustrace od Karolíny Jurečky Krobové.",
    creator: "@karolina_krobova",
    images: ["https://www.woofdesign.art/hlavnistranka.webp"]
  },

  // pokyny pro roboty
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${montserratAlt.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
