// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/50 text-white">
        {/* Logo */}
        <h1 className="text-xl font-bold">Karolína Jurečka Krobová</h1>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex space-x-8 text-sm justify-center flex-1">
          <li>
            <Link
              href="/"
              className="hover:underline hover:text-gray-300 transition"
            >
              Domů
            </Link>
          </li>
          <li>
            <Link
              href="#o-nas"
              className="hover:underline hover:text-gray-300 transition"
            >
              O nás
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="hover:underline hover:text-gray-300 transition"
            >
              Portfolio
            </Link>
          </li>
        </ul>

        {/* Kontakt button (desktop) */}
        <div className="hidden lg:block">
          <Link
            href="#kontakt"
            className="bg-white text-black font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Kontaktovat
          </Link>
        </div>

        {/* Hamburger menu (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black/80 backdrop-blur-sm text-white px-6 py-4 z-40">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Domů
              </Link>
            </li>
            <li>
              <Link href="#o-nas" onClick={() => setIsOpen(false)}>
                O nás
              </Link>
            </li>
            <li>
              <Link href="#portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                className="block bg-white text-black font-medium px-4 py-2 rounded-full text-center mt-4"
              >
                Kontaktovat
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
