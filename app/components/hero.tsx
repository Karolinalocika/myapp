'use client';
import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';

const loopEase: Transition['ease'] = 'linear';        // nebo [0, 0, 1, 1]
const pulseEase: Transition['ease'] = 'easeInOut';    // nebo [0.42, 0, 0.58, 1]

const orbitAnimation = (duration: number, reverse = false): Variants => ({
  animate: {
    rotate: reverse ? [360, 0] : [0, 360],
    transition: {
      duration,
      repeat: Infinity,
      ease: loopEase,
    },
  },
});

const bubblePulse: Variants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.6, 0.9, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: pulseEase,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/Comp10.webp"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video1.webm" type="video/webm" />
        Váš prohlížeč nepodporuje video tag.
      </video>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-6">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center justify-center h-full space-y-4">
          {/* Logo psa pro mobil */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Orbitující bublinky - menší pro mobil */}
            <motion.div
              className="absolute inset-0"
              variants={orbitAnimation(15)}
              animate="animate"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <motion.div
                  className="w-6 h-6 bg-blue-400/70 rounded-full"
                  variants={bubblePulse}
                  animate="animate"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <motion.div
                  className="w-8 h-8 bg-blue-300/70 rounded-full"
                  variants={bubblePulse}
                  animate="animate"
                  transition={{ delay: 0.5 }}
                />
              </div>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <motion.div
                  className="w-5 h-5 bg-blue-500/70 rounded-full"
                  variants={bubblePulse}
                  animate="animate"
                  transition={{ delay: 1 }}
                />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <motion.div
                  className="w-7 h-7 bg-blue-400/70 rounded-full"
                  variants={bubblePulse}
                  animate="animate"
                  transition={{ delay: 1.5 }}
                />
              </div>
            </motion.div>

            <motion.img
              src="/shepard.svg"
              alt="Logo Karolína Jurečka Krobová"
              className="w-48 drop-shadow-lg relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Text sekce pro mobil */}
          <div className="text-center text-gray-800 space-y-4 max-w-sm">
            <h1 className="text-3xl font-extrabold leading-tight">
              Kresby & grafika pro váš projekt
            </h1>
            <p className="text-base text-gray-600">
              Ilustrace na míru, vizuální identita a příspěvky na sítě. Vše ručně a s citem pro detail.
            </p>
          </div>

          {/* CTA tlačítka pro mobil */}
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="#portfolio"
              className="bg-gray-800 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-gray-700 transition shadow-lg text-sm"
            >
              Ukázky prací
            </a>
            <a
              href="https://www.instagram.com/locika74"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 text-gray-800 px-5 py-2.5 rounded-full hover:bg-gray-800 hover:text-white transition shadow-lg text-sm"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="text-left text-gray-800 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Kresby & grafika pro váš projekt
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Ilustrace na míru, vizuální identita a příspěvky na sítě. Vše ručně a s citem pro detail.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#portfolio"
                className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition shadow-lg"
              >
                Ukázky prací
              </a>
              <a
                href="https://www.instagram.com/locika74"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition shadow-lg"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Logo Section s orbitujícími bublinkami */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* První orbita */}
              <motion.div
                className="absolute inset-0"
                variants={orbitAnimation(20)}
                animate="animate"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <motion.div
                    className="w-10 h-10 bg-blue-400/70 rounded-full shadow-lg"
                    variants={bubblePulse}
                    animate="animate"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <motion.div
                    className="w-12 h-12 bg-blue-300/70 rounded-full shadow-lg"
                    variants={bubblePulse}
                    animate="animate"
                    transition={{ delay: 0.5 }}
                  />
                </div>
                <div className="absolute -left-8 top-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-8 h-8 bg-blue-500/70 rounded-full shadow-lg"
                    variants={bubblePulse}
                    animate="animate"
                    transition={{ delay: 1 }}
                  />
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-11 h-11 bg-blue-400/70 rounded-full shadow-lg"
                    variants={bubblePulse}
                    animate="animate"
                    transition={{ delay: 1.5 }}
                  />
                </div>
              </motion.div>

              {/* Druhá orbita */}
              <motion.div
                className="absolute inset-12"
                variants={orbitAnimation(15, true)}
                animate="animate"
              >
                <div className="absolute -top-2 -right-2">
                  <motion.div
                    className="w-6 h-6 bg-cyan-400/70 rounded-full shadow-lg"
                    variants={bubblePulse}
                    animate="animate"
                    transition={{ delay: 0.3 }}
                  />
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <motion.div
                    className="w-7 h-7 bg-cyan-300/70 rounded-full shadow-lg"
                    variants={bubblePulse}
                    animate="animate"
                    transition={{ delay: 0.8 }}
                  />
                </div>
                <div className="absolute -top-2 -left-2">
                  <motion.div
                    className="w-5 h-5 bg-cyan-500/70 rounded-full shadow-lg"
                    variants={bubblePulse}
                    animate="animate"
                    transition={{ delay: 1.3 }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <motion.div
                    className="w-8 h-8 bg-cyan-400/70 rounded-full shadow-lg"
                    variants={bubblePulse}
                    animate="animate"
                    transition={{ delay: 1.8 }}
                  />
                </div>
              </motion.div>

              {/* Logo psa */}
              <motion.img
                src="/shepard.svg"
                alt="Logo Karolína Jurečka Krobová"
                className="w-64 md:w-80 drop-shadow-lg relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
