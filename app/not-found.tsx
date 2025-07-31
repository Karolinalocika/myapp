// app/not-found.tsx
import React from 'react';
import Link from 'next/link';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function NotFound() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <Navbar />

      <main className="pt-16 flex-grow flex flex-col items-center justify-center prose lg:prose-xl max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">Omlouváme se, tato stránka nebyla nalezena.</p>
        <p className="mt-2">Možná byla přesunuta nebo neexistuje.</p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-gradient-to-br from-purple-400 to-pink-400 text-white rounded-xl font-semibold hover:scale-105 transition"
        >
          Zpět na domovskou stránku
        </Link>
      </main>

      <Footer />
    </div>
);
}
