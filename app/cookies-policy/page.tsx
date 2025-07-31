// app/cookies-policy/page.tsx
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function CookiesPolicyPage() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <Navbar />

      <main className="pt-16 flex-grow prose lg:prose-xl max-w-4xl mx-auto p-8 mt-12">
        <h1>Zásady používání cookies</h1>

        <p>
          Tato stránka popisuje, jak a proč používáme cookies a podobné technologie na našem webu.
        </p>

        <h2>Co jsou cookies?</h2>
        <p>
          Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení při návštěvě webu.
          Pomáhají nám zapamatovat si vaše preference a zlepšit funkčnost a analýzu.
        </p>

        <h2>Kategorie cookies</h2>
        <ul>
          <li>
            <strong>Nutné cookies:</strong> Zajišťují základní fungování webu (např. uložení stavu nákupního košíku).
          </li>
          <li>
            <strong>Analytické cookies:</strong> Sledují návštěvnost a chování uživatelů k optimalizaci obsahu.
          </li>
          <li>
            <strong>Marketingové cookies:</strong> Umožňují zobrazování personalizovaných reklam.
          </li>
        </ul>

        <h2>Seznam používaných cookies</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b pb-2">Název</th>
              <th className="border-b pb-2">Účel</th>
              <th className="border-b pb-2">Doba platnosti</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">cookieConsent</td>
              <td className="py-2">Uložení rozhodnutí o souhlasu s cookies</td>
              <td className="py-2">1 rok</td>
            </tr>
            {/* Další cookies lze přidat zde */}
          </tbody>
        </table>

        <h2>Jak cookies spravovat</h2>
        <p>
          Svůj souhlas můžete kdykoli změnit v nastavení prohlížeče nebo odstranit jednotlivé cookies.
          Pro více informací navštivte nápovědu k vašemu prohlížeči.
        </p>

        <h2>Kontakt</h2>
        <p>
          Pokud máte jakékoli dotazy k používání cookies,
          kontaktujte nás na{' '}
          <a href="mailto:karolina.krob@gmail.com" className="underline">
            karolina.krob@gmail.com
          </a>.
        </p>
      </main>

      <Footer />
    </div>
  );
}
