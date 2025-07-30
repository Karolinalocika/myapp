"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Palette,
  Users,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

const loopEase: Transition["ease"] = "linear";
const pulseEase: Transition["ease"] = "easeInOut";

const orbit = (dur: number, rev = false): Variants => ({
  animate: {
    rotate: rev ? [360, 0] : [0, 360],
    transition: { duration: dur, repeat: Infinity, ease: loopEase },
  },
});

const pulse: Variants = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.5, 1, 0.5],
    transition: { duration: 2, repeat: Infinity, ease: pulseEase },
  },
};

export default function ModernHeroIllustrator() {
  const services = [
    { text: "Ilustrace na míru", icon: Palette },
    { text: "Profesionální logo", icon: Sparkles },
    { text: "Tiskoviny", icon: Sparkles },
    { text: "Autorského maskota", icon: Users },
    { text: "Grafiku pro sociální sítě", icon: TrendingUp },
  ];

  const [currentService, setCurrentService] = useState(0);
  const CurrentIcon = services[currentService].icon;

  useEffect(() => {
    const iv = setInterval(
      () => setCurrentService((i) => (i + 1) % services.length),
      3000
    );
    return () => clearInterval(iv);
  }, [services.length]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#004A72] via-[#001336] to-[#4D1538] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/30 mb-8">
          <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
          <span className="text-sm font-medium text-slate-700">
            Profesionální ilustrace
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg mb-6">
          Vytvořím vám
        </h1>

        {/* Animated Service */}
        <div className="h-24 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={services[currentService].text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="p-3 bg-gradient-to-tr from-fuchsia-300 via-purple-400 to-fuchsia-500 rounded-2xl shadow-lg">
                <CurrentIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-fuchsia-400">
                {services[currentService].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-sm mb-12">
          Originální ilustrace a grafický design s důrazem na detail, kreativitu
          a vaše jedinečné potřeby. Každý projekt je pro mě příležitost vytvořit
          něco výjimečného.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            href="/portfolio"
            className="group relative px-8 py-4 bg-gradient-to-tr from-fuchsia-300 via-purple-400 to-fuchsia-500 text-[#001336] rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Prohlédnout portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="#kontakt"
            className="px-8 py-4 bg-white/90 backdrop-blur-sm text-[#001336] rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 transform hover:scale-105 hover:bg-white"
          >
            Nezávazná konzultace
          </Link>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">30+</div>
            <div className="text-slate-700">Spokojených klientů</div>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-700">Dokončených projektů</div>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">5★</div>
            <div className="text-slate-700">Průměrné hodnocení</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
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
