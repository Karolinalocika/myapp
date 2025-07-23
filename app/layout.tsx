// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserratAlt = Montserrat_Alternates({
  variable: "--font-montserrat-alt",
  subsets: ["latin"],
  display: "swap",
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ], // ✅ Všechny dostupné váhy
});

export const metadata: Metadata = {
  title: "Moje Studio",
  description: "Tvoříme vizuální identitu – profesionální grafický design.",
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
      </body>
    </html>
  );
}
