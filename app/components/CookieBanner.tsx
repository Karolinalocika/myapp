'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'true' : 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-50 bg-white/80 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
      
      {/* Text GDPR */}
      <div className="text-[#001336] text-sm sm:text-base space-y-2">
        <p>
          Tento web používá cookies a podobné technologie pro:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Nutné fungování webu</li>
          <li>Analýzu návštěvnosti a zlepšování služeb</li>
          <li>Marketingové účely (pokud souhlasíte)</li>
        </ul>
        <p>
          Vaši volbu můžete kdykoli změnit v <em>nastavení prohlížeče</em> nebo
          si přečíst podrobně&nbsp;
          <Link href="/privacy-policy" className="underline hover:text-purple-500">
            Zásady ochrany osobních údajů
          </Link>
          &nbsp;a&nbsp;
          <Link href="/cookies-policy" className="underline hover:text-purple-500">
            Zásady používání cookies
          </Link>
          .
        </p>
      </div>

      {/* Tlačítka */}
      <div className="flex gap-3">
        <button
          onClick={() => handleConsent(true)}
          className="px-5 py-2 bg-gradient-to-br from-purple-400 to-pink-400 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          Souhlasím
        </button>
        <button
          onClick={() => handleConsent(false)}
          className="px-5 py-2 bg-white/90 text-[#001336] border border-white/40 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          Nesouhlasím
        </button>
      </div>
    </div>
  );
}
