"use client";

import React, { useEffect, useState } from "react";
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
    scale: [1, 1.3, 1],
    opacity: [0.6, 0.9, 0.6],
    transition: { duration: 2, repeat: Infinity, ease: pulseEase },
  },
};

const services = [
  "Ilustrace na míru",
  "Design log",
  "Autorskí maskoti",
  "Grafika pro sociální sítě",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setIdx((i) => (i + 1) % services.length), 3000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #53B8FE 0%, #8E2DE2 100%)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-8">
        {/* TEXT BLOCK */}
        <div className="w-full lg:w-1/2 text-white space-y-4 lg:space-y-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Vytvořím Vám
          </h1>

          {/* Cycling services: same size as headline, tinted gradient */}
          <div className="h-20 relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={services[idx]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B95BFE] to-[#8E2DE2]"
              >
                {services[idx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-lg lg:text-xl text-white/80 max-w-md">
            Originální ilustrace, jedinečná loga, maskoti a grafika pro sociální síť –
            vše s důrazem na detail a vysokou kvalitu.
          </p>

          {/* CTA: larger buttons */}
          <div className="flex flex-wrap gap-6 mt-4 lg:mt-6">
            <a
              href="#portfolio"
              className="bg-white text-[#8E2DE2] px-8 py-4 rounded-full font-medium hover:opacity-90 transition text-lg"
            >
              Portfolio
            </a>
            <a
              href="#kontakt"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#8E2DE2] transition text-lg"
            >
              Kontakt
            </a>
          </div>
        </div>

        {/* MASCOT & BUBBLES */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Outer bubbles */}
            <motion.div variants={orbit(20)} animate="animate" className="absolute inset-0">
              {[
                { top: "-15%", size: 16, delay: 0 },
                { right: "-15%", size: 14, delay: 0.5 },
                { bottom: "-15%", size: 18, delay: 1 },
                { left: "-15%", size: 15, delay: 1.5 },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  variants={pulse}
                  animate="animate"
                  transition={{ delay: b.delay }}
                  className="absolute bg-white/50 rounded-full"
                  style={{ width: b.size, height: b.size, top: b.top, right: b.right, bottom: b.bottom, left: b.left }}
                />
              ))}
            </motion.div>

            {/* Inner bubbles */}
            <motion.div variants={orbit(15, true)} animate="animate" className="absolute inset-12">
              {[
                { top: "-5%", left: "-5%", size: 8, delay: 0.3 },
                { bottom: "-5%", right: "-5%", size: 10, delay: 0.8 },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  variants={pulse}
                  animate="animate"
                  transition={{ delay: b.delay }}
                  className="absolute bg-white/30 rounded-full"
                  style={{ width: b.size, height: b.size, top: b.top, right: b.right, bottom: b.bottom, left: b.left }}
                />
              ))}
            </motion.div>

            {/* Mascot image */}
            <motion.img
              src="/cattle.svg"
              alt="Maskot"
              className="w-64 lg:w-80 drop-shadow-2xl relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM FADE {/* blend to white so next heading won’t peek */}{"}"}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
