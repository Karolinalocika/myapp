import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export default function AboutMeSection() {
  return (
    <section
      id="o-mne"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-fuchsia-100 to-sky-50 overflow-hidden"
    >
    

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Mascot at top */}
        <div className="mb-8">
          <span className="inline-block p-4 bg-white/80 rounded-full shadow-lg">
            <img
              src="/cattle.svg"
              alt="Maskot Karolíny"
              className="w-40 h-40 object-contain"
            />
          </span>
        </div>

        {/* Header and intro text */}
        <div className="space-y-4 px-4 mb-12">
          <Sparkles className="text-purple-500 w-6 h-6 mx-auto animate-pulse" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001336] leading-tight">
            Jsem Karolína,<br /> grafická designérka<br /> a ilustrátorka
          </h2>
          <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Věnuji se tvorbě log, tiskovin, grafických příspěvků a ilustraci. Mým cílem je vytvořit
            vám vizuální identitu, která odráží osobnost a hodnoty vašeho projektu, nebo<br /> v rámci vaší značky pracovat na další vizuální prezentaci.
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Absolvovala jsem SPŠ a VOŠ grafickou v Praze se zaměřením na propagační výtvarnictví a knižní grafiku.
          </p>
        </div>

        {/* Divider graphic */}
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded mb-8" />

        {/* Tools with icons */}
        <div className="flex flex-wrap justify-center gap-8 px-6 mb-10">
          {[
            { src: '/icons/affinitydesigner.png', alt: 'Affinity Designer' },
            { src: '/icons/affinityphoto.png', alt: 'Affinity Photo' },

          ].map((tool, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={tool.src} alt={tool.alt} className="w-12 h-12 mb-2" />
              <span className="text-sm text-[#001336]">{tool.alt}</span>
            </div>
          ))}
        </div>

        {/* Second divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mb-8" />

        {/* Collaboration process */}
        <div className="space-y-6 px-6 text-left sm:text-center">
          {[
            'Konzultace k definici cílů a stylu projektu',
            'Vytvoření moodboardu, skic a prvků, s nimiž je třeba počítat',
            'Vytvoření návrhu',
            'Příprava finálních podkladů v potřebných formátech (PDF, SVG, PNG, WEBP atp.)',
            'Podpora i po dokončení projektu pro úpravy a rozšíření grafiky',
          ].map((step, i) => (
            <p key={i} className="flex items-start max-w-3xl mx-auto text-slate-600 text-lg">
              <ChevronRight className="w-5 h-5 text-fuchsia-500 mr-3 mt-1" />
              {step}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
