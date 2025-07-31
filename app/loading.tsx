// app/loading.tsx
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Loading() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <Navbar />

      <main className="pt-16 flex-grow flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-400 border-opacity-75"></div>
        <p className="mt-4 text-lg font-medium">Načítání...</p>
      </main>

      <Footer />
    </div>
  );
}
