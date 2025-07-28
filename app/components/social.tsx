import React from 'react';
import { Quote, Star, Heart, Users } from 'lucide-react';

export default function ModernSocialProof() {
  const feedback = [
    {
      name: "Petra Nováková",
      role: "Zakladatelka značky PetArt",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Spolupráce byla fantastická. Kresba pro naše produkty se skvěle hodila a zákazníci ji milují!",
      rating: 5,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Tomáš Havel",
      role: "Marketingový manažer GolfClub CZ",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Díky profesionálním návrhům jsme posílili identitu značky a zaujali nové klienty.",
      rating: 5,
      gradient: "from-sky-500 to-cyan-500"
    },
    {
      name: "Lucie Bílá",
      role: "Tvůrkyně obsahu na IG",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      text: "Grafické posty pro sociální sítě mi šetří čas a skvěle reprezentují moji značku.",
      rating: 5,
      gradient: "from-indigo-500 to-purple-500"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-sky-50 relative overflow-hidden" id="reference">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-16 w-64 h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-64 h-64 bg-gradient-to-br from-cyan-100 to-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-6">
            <Heart className="w-4 h-4 text-pink-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Spokojenost klientů</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Zkušenosti mých klientů
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Každý spokojený klient je pro mě potvrzením, že má práce má smysl. 
            Podívejte se, co říkají o naší spolupráci.
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-1">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-slate-600 text-sm">Průměrné hodnocení</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-1">50+</div>
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-slate-600 text-sm">Spokojených klientů</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedback.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/80"
            >
              {/* Quote Icon */}
              <div className={`absolute top-6 right-6 p-2 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}>
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                "{item.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-200/50">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover shadow-lg ring-4 ring-white/50 group-hover:ring-white/80 transition-all duration-300"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg flex items-center justify-center`}>
                    <Heart className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-lg">{item.name}</p>
                  <p className="text-slate-600 text-sm">{item.role}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Staňte se dalším spokojeným klientem
            </h3>
            <p className="text-slate-600 mb-6">
              Pojďme společně vytvořit něco výjimečného pro vaši značku
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Začněme spolupráci
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl border border-white/40 transition-all duration-300 transform hover:scale-105 hover:bg-white">
                Podívat se na portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}