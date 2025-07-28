import React from "react";

export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Ceník služeb</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Orientační ceny za kvalitní ilustrace, grafiku a vizuální komunikaci.
          Konečná cena se odvíjí od rozsahu a požadavků konkrétní zakázky.
        </p>

        <div className="space-y-16">
          {/* Ilustrace na míru */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">🎨 Ilustrace na míru</h3>
            <ul className="space-y-2">
              <li className="flex justify-between border-b py-2">
                <span>Jednoduchá ilustrace (1 motiv)</span>
                <span>od 2 500 Kč</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Komplexní ilustrace (více prvků, pozadí)</span>
                <span>od 5 000 Kč</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Série ilustrací (např. 3–5 prvků)</span>
                <span>od 9 000 Kč</span>
              </li>
            </ul>
          </div>

          {/* Obsah pro sociální sítě */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">🛍️ Obsah pro sociální sítě</h3>
            <ul className="space-y-2">
              <li className="flex justify-between border-b py-2">
                <span>Grafika pro příspěvek/stories (1 ks)</span>
                <span>od 1 000 Kč</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Balíček 5 příspěvků (vizuální série)</span>
                <span>od 2 900 Kč</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Šablona ve Canva / Figma (editable)</span>
                <span>od 1 800 Kč</span>
              </li>
            </ul>
          </div>

          {/* Ručně kreslené prvky pro weby */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">🖋️ Prvky pro weby / e-shopy</h3>
            <ul className="space-y-2">
              <li className="flex justify-between border-b py-2">
                <span>Ikonky nebo malé prvky (1–5 ks)</span>
                <span>od 1 500 Kč</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Obrázky do sekcí webu (např. hero)</span>
                <span>od 3 500 Kč</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Sada pro celý web (6–10 prvků)</span>
                <span>od 8 500 Kč</span>
              </li>
            </ul>
          </div>

          {/* Vizuální identita */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">🎭 Vizuální identita & branding</h3>
            <ul className="space-y-2">
              <li className="flex justify-between border-b py-2">
                <span>Ilustrované logo</span>
                <span>od 5 000 Kč</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Mini branding (logo + barvy + motivy)</span>
                <span>od 12 000 Kč</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span>Moodboard / stylová paleta</span>
                <span>od 3 000 Kč</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Informace o cenách a individuálním přístupu */}
        <div className="mt-16 text-center text-sm text-gray-500">
          Ceny jsou bez DPH. Pro přesnou kalkulaci mě prosím kontaktujte.
        </div>

        <div className="mt-6 text-center text-base text-gray-700">
          Máte specifický požadavek nebo jasně daný rozpočet? Ozvěte se – společně najdeme řešení na míru vašemu projektu i budgetu.
        </div>

        {/* CTA sekce */}
        <div className="mt-8 text-center">
          <a
            href="/kontakt" // uprav podle skutečné sekce nebo odkazu
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
          >
            Zadat poptávku
          </a>
        </div>
      </div>
    </section>
  );
}
