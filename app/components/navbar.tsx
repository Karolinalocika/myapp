"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { name: 'Domů', href: '#home' },
    { name: 'O mně', href: '#about' },
    { name: 'Služby', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reference', href: '#reference' }
  ];

  return (
    <>
      

      <nav className={`${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-white/20' 
          : 'bg-transparent backdrop-blur-sm'
      } sticky top-0 z-50 transition-all duration-300 ease-out`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={handleLogoClick}
                className="group flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
                  isScrolled 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500'
                    : 'text-white drop-shadow-lg'
                }`}>
                  Karolína
                </div>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ease-out hover:scale-105 backdrop-blur-sm border border-transparent ${
                    isScrolled
                      ? 'text-slate-700 hover:text-slate-900 hover:bg-white/80 hover:shadow-lg hover:border-white/40'
                      : 'text-white hover:text-white hover:bg-white/20 hover:shadow-lg hover:border-white/30 drop-shadow-sm'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:block">
              <a 
                href="#kontakt"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 inline-flex items-center space-x-2"
              >
                <span>Kontaktovat</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2.5 rounded-xl transition-all duration-200 backdrop-blur-sm border shadow-lg ${
                  isScrolled
                    ? 'text-slate-600 hover:text-slate-800 hover:bg-white/80 border-white/30'
                    : 'text-white hover:text-white hover:bg-white/20 border-white/30'
                }`}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/90 backdrop-blur-lg border-t border-white/20 shadow-2xl">
            <div className="px-4 py-6 space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-slate-700 hover:text-slate-900 hover:bg-white/90 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-white/40 ${
                    isMenuOpen ? 'animate-in slide-in-from-top-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <a 
                  href="#kontakt"
                  className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] border border-white/20 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontaktovat
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}