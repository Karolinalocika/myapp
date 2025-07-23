'use client';
import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="text-left text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
              Kresby & grafika pro váš projekt
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md max-w-lg">
              Ilustrace na míru, vizuální identita a příspěvky na sítě. Vše ručně a s citem pro detail.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#portfolio"
                className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition shadow-lg"
              >
                Ukázky prací
              </a>
              <a
                href="https://www.instagram.com/locika74"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition shadow-lg"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Logo Section with Animated Elements */}
          <div className="relative flex justify-center md:justify-end">
            {/* Štětec */}
            <motion.div
              className="absolute -top-10 left-10 md:left-20"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" className="drop-shadow-lg">
                  <path
                    d="M15 45 L15 15 Q15 5 25 5 Q35 5 35 15 L35 45 L25 55 Z"
                    fill="#FF6B6B"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <rect x="20" y="5" width="10" height="20" fill="#8B4513" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Tužka */}
            <motion.div
              className="absolute -top-5 right-10 md:right-20"
              animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <svg width="50" height="80" viewBox="0 0 50 80" className="drop-shadow-lg">
                <rect x="15" y="10" width="20" height="50" fill="#FFD93D" stroke="#fff" strokeWidth="2" rx="2" />
                <path d="M15 60 L25 75 L35 60 Z" fill="#333" />
                <rect x="20" y="15" width="10" height="5" fill="#FF6B6B" />
              </svg>
            </motion.div>

            {/* Kapka vlevo dole */}
            <motion.div
              className="absolute bottom-10 left-5 md:left-10"
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8], y: [0, 100] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeOut" }}
              initial={{ opacity: 0 }}
            >
              <svg width="40" height="50" viewBox="0 0 40 50" className="drop-shadow-lg">
                <path
                  d="M20 5 Q10 15 10 25 Q10 35 20 35 Q30 35 30 25 Q30 15 20 5 Z"
                  fill="#4ECDC4"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>

            {/* Paleta barev */}
            <motion.div
              className="absolute bottom-20 right-5 md:right-10"
              animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <svg width="70" height="70" viewBox="0 0 70 70" className="drop-shadow-lg">
                <circle cx="35" cy="35" r="30" fill="#F8F8F8" stroke="#333" strokeWidth="2" />
                <circle cx="25" cy="25" r="8" fill="#FF6B6B" />
                <circle cx="45" cy="25" r="8" fill="#4ECDC4" />
                <circle cx="25" cy="45" r="8" fill="#FFD93D" />
                <circle cx="45" cy="45" r="8" fill="#95E1D3" />
                <circle cx="35" cy="50" r="5" fill="#333" />
              </svg>
            </motion.div>

            {/* Animované čáry */}
            <motion.svg
              className="absolute top-1/2 left-0 w-full h-32 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.path
                d="M 50,50 Q 150,30 250,50 T 450,50"
                stroke="#FF6B6B"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  opacity: { duration: 2.5, times: [0, 0.1, 0.9, 1] },
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.svg>

            <motion.svg
              className="absolute top-1/3 left-0 w-full h-32 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.path
                d="M 450,30 Q 350,50 250,30 T 50,30"
                stroke="#4ECDC4"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  opacity: { duration: 2.5, times: [0, 0.1, 0.9, 1] },
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: 1,
                }}
              />
            </motion.svg>

            {/* Hvězdičky/tečky */}
            <motion.div
              className="absolute top-1/4 left-1/4"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-3 h-3 bg-yellow-300 rounded-full" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/3 right-1/4"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <div className="w-2 h-2 bg-pink-300 rounded-full" />
            </motion.div>

            <motion.div
              className="absolute top-1/3 right-1/3"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <div className="w-4 h-4 bg-cyan-300 rounded-full" />
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
    </section>
  );
}
