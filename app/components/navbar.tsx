"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  /** Výška vlnky (a tím i headeru) v pixelech */
  waveHeight?: number;
}

export default function Navbar({ waveHeight = 150 }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    ["/", "Domů"],
    ["/cenik", "Ceník"],
    ["/o-mne", "O mně"],
    ["/portfolio", "Portfolio"],
  ] as const;

  return (
    <header
      className="relative w-full overflow-hidden"
      style={{ height: waveHeight }}
    >
      {/* animovaná vlnka jako pozadí */}
      <object
        type="image/svg+xml"
        data="/wavemodra.svg"
        aria-label="Animated wave background"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* obsah navrchu vlnky */}
      <nav className="relative z-10 container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo/text */}
        <Link
          href="/"
          className="flex items-center text-white text-xl font-bold"
        >
          <img
            src="/lib/LOGO.svg"
            alt="Logo"
            className="h-8 w-auto mr-2"
          />
          Karolína Jurečka Krobová
        </Link>

        {/* desktop menu */}
        <ul className="hidden sm:flex space-x-8 text-white text-sm">
          {links.map(([href, label]) => (
            <li key={label}>
              <Link
                href={href}
                className="hover:text-gray-200 transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* desktop Kontakt */}
        <Link
          href="/kontakt"
          className="hidden sm:inline-block bg-white text-black font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Kontaktovat
        </Link>

        {/* mobile toggle */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu – průhledné, nad vlnkou */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full z-10">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-white text-lg">
            {links.map(([href, label]) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:underline transition"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/kontakt"
                onClick={() => setIsOpen(false)}
                className="block bg-white text-black font-medium px-4 py-2 rounded-full text-center mt-4 hover:bg-gray-200 transition"
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
