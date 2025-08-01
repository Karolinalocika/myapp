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
    { name: 'Domů', href: '/' },
    { name: 'O mně', href: '/o-mne' },
    { name: 'Ceník', href: '/cenik' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <>
      <nav className={`${isScrolled 
          ? 'bg-white/10 backdrop-blur-md shadow-lg' 
          : 'bg-transparent backdrop-blur-sm'
        } fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={handleLogoClick}
                className="group flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="p-2 bg-[linear-gradient(40deg,theme(colors.fuchsia.300),theme(colors.purple.400),theme(colors.fuchsia.500))] rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold tracking-tight transition-all duration-300 text-fuchsia-400 drop-shadow-lg">
                  Karolína J. K.
                </div>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ease-out hover:scale-105 backdrop-blur-sm border border-white/30 text-fuchsia-400 hover:text-fuchsia-400 hover:ring-2 hover:ring-fuchsia-400 hover:shadow-lg drop-shadow-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:block">
              <a 
                href="/kontakt"
                className="bg-[linear-gradient(40deg,theme(colors.fuchsia.300),theme(colors.purple.400),theme(colors.fuchsia.500))] hover:from-purple-600 hover:to-pink-600 text-[#001336] px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 inline-flex items-center space-x-2"
              >
                <span>Kontaktovat</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2.5 rounded-xl transition-all duration-200 backdrop-blur-sm border shadow-lg text-fuchsia-400 hover:text-fuchsia-400 hover:bg-white/20 border-white/30"
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
          <div className="bg-white/10 backdrop-blur-lg border-t border-white/20 shadow-2xl">
            <div className="px-4 py-6 space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ease-out border border-white/30 bg-white text-fuchsia-400 hover:text-fuchsia-400 hover:ring-2 hover:ring-fuchsia-400 hover:shadow-lg transform hover:scale-[1.02] drop-shadow-sm ${
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
                  className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-[#001336] px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] border border-white/20 text-center"
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
