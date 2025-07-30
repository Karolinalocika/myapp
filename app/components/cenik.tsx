import React from 'react';
import { Feather, Instagram, FileText, Palette, Sparkles, ArrowRight } from 'lucide-react';

export default function PricingStyledSection() {
  const categories = [
    {
      title: 'Ilustrace na míru',
      icon: Feather,
      gradient: 'from-purple-500 to-pink-500',
      hoverGradient: 'from-purple-600 to-pink-600',
      items: [
        { label: 'Jednoduchá ilustrace (1 motiv)', price: 'od 2 500 Kč' },
        { label: 'Komplexní ilustrace (více prvků, pozadí)', price: 'od 5 000 Kč' },
        { label: 'Série ilustrací (např. 3–5 prvků)', price: 'od 9 000 Kč' },
      ],
    },
    {
      title: 'Obsah pro sociální sítě',
      icon: Instagram,
      gradient: 'from-pink-500 to-rose-500',
      hoverGradient: 'from-pink-600 to-rose-600',
      items: [
        { label: 'Grafika pro příspěvek/stories (1 ks)', price: 'od 1 000 Kč' },
        { label: 'Balíček 5 příspěvků (vizuální série)', price: 'od 2 900 Kč' },
        { label: 'Šablona v Affinity (editable)', price: 'od 1 800 Kč' },
      ],
    },
    {
      title: 'Prvky pro weby / e-shopy',
      icon: FileText,
      gradient: 'from-indigo-500 to-purple-500',
      hoverGradient: 'from-indigo-600 to-purple-600',
      items: [
        { label: 'Ikonky nebo malé prvky (1–5 ks)', price: 'od 1 500 Kč' },
        { label: 'Obrázky do sekcí webu (např. hero)', price: 'od 3 500 Kč' },
        { label: 'Sada pro celý web (6–10 prvků)', price: 'od 8 500 Kč' },
      ],
    },
    {
      title: 'Vizuální identita & branding',
      icon: Palette,
      gradient: 'from-sky-500 to-cyan-500',
      hoverGradient: 'from-sky-600 to-cyan-600',
      items: [
        { label: 'Ilustrované logo', price: 'od 5 000 Kč' },
        { label: 'Mini branding (logo + barvy + motivy)', price: 'od 12 000 Kč' },
        { label: 'Moodboard / stylová paleta', price: 'od 3 000 Kč' },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" id="cenik">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-4">
            <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-[#001336]">Ceník služeb</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#001336] mb-4">
            Orientační ceny
          </h2>
          <p className="text-center text-[#001336] mb-12">
            za ilustrace, grafiku a vizuální komunikaci. Konečná cena se odvíjí od rozsahu a požadavků konkrétní zakázky či předchozí domluvy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 bg-white shadow-lg rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="space-y-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${cat.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, idy) => (
                      <li key={idy} className="flex justify-between border-b py-2">
                        <span className="text-[#001336]">{item.label}</span>
                        <span className="text-[#001336]">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <a
                      href="/kontakt"
                      className={`inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${cat.gradient} font-semibold group-hover:text-[#001336] transition-all duration-300`}
                    >
                      Zadat poptávku
                      <ArrowRight className="ml-2 w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cat.hoverGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="/kontakt"
            className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#001336] rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl border border-white/40 transition-all duration-300 transform hover:scale-105 hover:bg-white"
          >
            Máte dotaz? Kontaktujte mě
          </a>
        </div>
      </div>
    </section>
  );
}
