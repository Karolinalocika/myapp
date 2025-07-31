import React from 'react';
import { Sparkles } from 'lucide-react';

type WorkCategory = {
  title: string;
  works: {
    title: string;
    img: string;
  }[];
};

const portfolioData: WorkCategory[] = [
  {
    title: 'Ilustrace na míru',
    works: [
      { title: 'Osobní novoročenky mýtické', img: 'doportfolia/ctverecpfmyticke.webp' },
      { title: 'Tiskoviny s portrétní ilustrací', img: 'doportfolia/ctvereckp2025.webp' },
      { title: 'Svatební oznámení', img: 'doportfolia/ctverecsvatebko.webp' },
      { title: 'Zvířecí ilustrace', img: 'doportfolia/garajaka.webp' },
      { title: 'Návrh ilustrovaného leporela', img: 'doportfolia/leporelocervotoc.webp' },
      { title: 'Tématická ilustrace', img: 'doportfolia/ctverecrepliconplacky.webp' },
    ],
  },
  {
    title: 'Logo a firemní tiskoviny',
    works: [
      { title: 'Logo Autodoprava Novotný', img: 'doportfolia/ctvereclogonovotny.webp' },
      { title: 'Logo pro stavební firmu', img: 'doportfolia/ctverecsabden.webp' },
      { title: 'Tiskoviny pro kadeřnický salón', img: 'doportfolia/letakylafa.webp' },
      { title: 'Logo pro cukrářku', img: 'doportfolia/ctverecdorty.webp' },
    ],
  },
  {
    title: 'Obsah pro sociální sítě',
    works: [
      { title: 'Propojené Instagram posty', img: 'doportfolia/ctverecIGposty3.webp' },
      { title: 'Ilustrované citáty pro golfový IG', img: 'doportfolia/ctvereccitaty.webp' },
      { title: 'Letáky chovatelské stanice Karmapa', img: 'doportfolia/ctverecboxeri.webp' },
    ],
  },
  {
    title: 'Volná tvorba',
    works: [
      { title: 'Obraz jako svatební dar', img: 'doportfolia/ctverecobrproK.webp' },
      { title: 'Obraz jako "Cestovní vzpomínka"', img: 'doportfolia/ctverecobrmexiko.webp' },
      { title: 'Malba na keramice', img: 'https://via.placeholder.com/600?text=Keramika' },
      { title: '"Uvnitř džungle" obraz 50x50 cm', img: 'doportfolia/ctverecdzungle.webp' },
    ],
  },
];

export default function PortfolioStyledSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-4">
            <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-[#001336]">Ukázka práce</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#001336]">
            Prezentace dokončených prací
          </h2>
        </div>

        {/* Categories */}
        {portfolioData.map((category, catIdx) => (
          <div key={catIdx} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#001336]">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.works.map((work, workIdx) => (
                <div
                  key={workIdx}
                  className="group relative overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                >
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4">
                    <p className="text-sm font-medium text-white">{work.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
