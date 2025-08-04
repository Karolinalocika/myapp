import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export default function AboutMeSection() {
  return (
    <section
      id="o-mne"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-fuchsia-100 to-sky-50"
    >
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Mascot back in white circle with shadow */}
        <div className="mb-8">
          <span className="inline-block p-4 bg-white rounded-full shadow-lg">
            <img
              src="/cattle.svg"
              alt="Maskot Karolíny"
              className="w-40 h-40 object-contain"
            />
          </span>
        </div>

        {/* Header with gradient text effect */}
        <div className="px-4 mb-12">
          <Sparkles className="text-purple-500 w-6 h-6 mx-auto animate-pulse mb-4" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001336] leading-normal">
            Jsem Karolína,
            <span
              className="block text-2xl sm:text-3xl lg:text-4xl font-semibold
                         bg-gradient-to-r from-[#6100B0] to-[#4D1538]
                         bg-clip-text text-transparent
                         min-h-[1.2em] pb-1"
            >
              grafická designérka a ilustrátorka
            </span>
          </h2>
        </div>

        {/* Main text block */}
        <div className="space-y-6 px-4 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          <p>
            Věnuji se tvorbě{' '}
            <span className="font-semibold text-[#6100B0]">log</span>,{' '}
            <span className="font-semibold text-[#6100B0]">tiskovin</span>,{' '}
            <span className="font-semibold text-[#6100B0]">
              grafických příspěvků
            </span>{' '}
            a{' '}
            <span className="font-semibold text-[#6100B0]">ilustraci</span>. Mým
            cílem je vytvořit vám{' '}
            <span className="font-semibold text-[#6100B0]">vizuální identitu</span>, která odráží{' '}
            <span className="font-semibold text-[#6100B0]">osobnost</span> a{' '}
            <span className="font-semibold text-[#6100B0]">hodnoty</span> vašeho
            projektu.
          </p>
          <p>
            Absolvovala jsem{' '}
            <span className="font-semibold text-[#6100B0]">
              SPŠ a VOŠ grafickou
            </span>{' '}
            v Praze se zaměřením na{' '}
            <span className="font-semibold text-[#6100B0]">
              propagační výtvarnictví
            </span>{' '}
            a{' '}
            <span className="font-semibold text-[#6100B0]">knižní grafiku</span>.
          </p>
          <p>
            V grafické práci se snažím o{' '}
            <span className="font-semibold text-[#6100B0]">originální</span> a{' '}
            <span className="font-semibold text-[#6100B0]">autorskou tvorbu</span>, protože{' '}
            <span className="font-semibold text-[#6100B0]">logo navržené na míru</span> je
            zásadním prvkem{' '}
            <span className="font-semibold text-[#6100B0]">vizuální identity</span>.
          </p>
          <p>
            Dobře navržené{' '}
            <span className="font-semibold text-[#6100B0]">firemní logo</span> je tváří firmy a
            klíčovou součástí{' '}
            <span className="font-semibold text-[#6100B0]">vizuální komunikace</span> se
            zákazníky.
          </p>
          <p>
            Při vytváření grafických návrhů kladu důraz na{' '}
            <span className="font-semibold text-[#6100B0]">kvalitu</span> a{' '}
            <span className="font-semibold text-[#6100B0]">detail</span>, aby každá
            práce splňovala{' '}
            <span className="font-semibold text-[#6100B0]">vysoké standardy</span>{' '}
            a očekávání klientů. Poskytuji návrhy{' '}
            <span className="font-semibold text-[#6100B0]">log, vizitek, vizuálu webových stránek, obalů produktů</span>,{' '}
            <span className="font-semibold text-[#6100B0]">reklamních materiálů</span> i{' '}
            <span className="font-semibold text-[#6100B0]">banerové reklamy</span>.
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded my-12" />

        {/* Tools with icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
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
        <div className="space-y-6 px-6 text-left sm:text-center text-lg text-slate-600">
          {[
            'Konzultace k definici cílů a stylu projektu',
            'Vytvoření moodboardu, skic a prvků, s nimiž je třeba počítat',
            'Vytvoření návrhu',
            'Příprava finálních podkladů v potřebných formátech (PDF, SVG, PNG, WEBP atp.)',
            'Podpora i po dokončení projektu pro úpravy a rozšíření grafiky',
          ].map((step, i) => (
            <p key={i} className="flex items-start max-w-3xl mx-auto">
              <ChevronRight className="w-5 h-5 text-[#6100B0] mr-3 mt-1" />
              {step}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
