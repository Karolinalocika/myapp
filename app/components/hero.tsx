"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Palette, Users, TrendingUp } from 'lucide-react';

export default function ModernHeroIllustrator() {
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    { text: "Ilustrace na míru", icon: Palette },
    { text: "Jedinečná loga", icon: Sparkles },
    { text: "Autorské maskoty", icon: Users },
    { text: "Grafiku pro sociální sítě", icon: TrendingUp }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = services[currentService].icon;

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#004A72] via-[#001336] to-[#4D1538] relative overflow-hidden">

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/30">
            <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Profesionální ilustrace</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Vytvořím vám
            </h1>
            
            {/* Animated Service */}
            <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center">
              <div className="flex items-center space-x-4 transition-all duration-700 ease-out">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                  <CurrentIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 animate-gradient">
                  {services[currentService].text}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-sm">
            Originální ilustrace a grafický design s důrazem na detail, kreativitu a vaše jedinečné potřeby. 
            Každý projekt je pro mě příležitost vytvořit něco výjimečného.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center">
                Prohlédnout portfolio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-slate-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 transform hover:scale-105 hover:bg-white">
              Nezávazná konzultace
            </button>
          </div>

          {/* Social Proof */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40">
              <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-700">Spokojených klientů</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40">
              <div className="text-3xl font-bold text-slate-900 mb-2">200+</div>
              <div className="text-slate-700">Dokončených projektů</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40">
              <div className="text-3xl font-bold text-slate-900 mb-2">5★</div>
              <div className="text-slate-700">Průměrné hodnocení</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs text-slate-500 font-medium">Scroll</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}