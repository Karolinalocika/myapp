// app/error.tsx
'use client';

import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <Navbar />

      <main className="pt-16 flex-grow flex flex-col items-center justify-center prose lg:prose-xl max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold">Něco se pokazilo</h1>
        <p className="mt-4">{error.message}</p>
        <button
          onClick={() => reset()}
          className="mt-6 px-6 py-3 bg-gradient-to-br from-sky-500 to-cyan-500 text-white rounded-xl font-semibold hover:scale-105 transition"
        >
          Zkusit znovu
        </button>
      </main>

      <Footer />
    </div>
  );
}
