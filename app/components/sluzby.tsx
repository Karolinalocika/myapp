import React from 'react';
import { Feather, Palette, FileText, Instagram, ArrowRight, Sparkles } from 'lucide-react';

export default function ModernServicesSection() {
  const sluzby = [
    {
      title: "Kresba na míru",
      desc: "Originální kresby zvířat nebo osob dle přání. Každá kresba je jedinečná a vytvořená s láskou k detailu.",
      icon: Feather,
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "from-purple-600 to-pink-600",
      image: "/images/boydrawingwithcrayon.webp",
    },
    {
      title: "Logo a identita",
      desc: "Vytvoření loga a uceleného vzhledu vaší značky. Kompletní vizuální identita od návrhu po finální podobu.",
      icon: Palette,
      gradient: "from-sky-500 to-cyan-500",
      hoverGradient: "from-sky-600 to-cyan-600",
      image: "/images/journeyguidedestinationlocationdirection.webp",
    },
    {
      title: "Tiskové materiály",
      desc: "Letáky, vizitky, brožury a další tiskové produkty. Profesionální design pro vaše marketingové potřeby.",
      icon: FileText,
      gradient: "from-indigo-500 to-purple-500",
      hoverGradient: "from-indigo-600 to-purple-600",
      image: "/images/englishbookrestingtableworkingspace.webp",
    },
    {
      title: "Online příspěvky",
      desc: "Design Instagramových a jiných online postů. Kreativní obsah pro vaše sociální sítě a online prezenci.",
      icon: Instagram,
      gradient: "from-pink-500 to-rose-500",
      hoverGradient: "from-pink-600 to-rose-600",
      image: "/images/handholdingsmartphonesocialmediaconcept.webp",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-sky-50 relative overflow-hidden" id="sluzby">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-64 h-64 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Moje služby</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Co vám mohu nabídnout
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Každý projekt je pro mě příležitost vytvořit něco výjimečného. 
            Specializuji se na originální ilustrace a grafický design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {sluzby.map((sluzba, index) => {
            const IconComponent = sluzba.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/80"
              >
                {/* Service Card Content */}
                <div className="space-y-6">
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${sluzba.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                      {sluzba.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {sluzba.desc}
                    </p>
                  </div>

                  {/* Service Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={sluzba.image}
                      alt={sluzba.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4">
                    <button className={`flex items-center text-transparent bg-clip-text bg-gradient-to-r ${sluzba.gradient} font-semibold group-hover:text-slate-700 transition-all duration-300`}>
                      Zjistit více
                      <ArrowRight className={`ml-2 w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform`} />
                    </button>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sluzba.gradient} animate-pulse`}></div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${sluzba.hoverGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Konzultace zdarma
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl border border-white/40 transition-all duration-300 transform hover:scale-105 hover:bg-white">
              Zobrazit portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}