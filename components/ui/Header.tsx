"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-4 md:px-24 py-6">
      <div className="flex items-center gap-2">
        {/* <img src="/logo.svg" alt="Trident Logo" className="h-10" /> */}
        <Link href="/" className="text-white text-3xl font-bold tracking-widest">DATALAKE</Link>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-white font-semibold text-lg">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/#services" className="hover:underline">Our Services</Link>
        <Link href="/consulting" className="hover:underline">Consulting</Link>
        <Link href="/careers" className="hover:underline">Careers</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
      {/* Hamburger for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-8 h-1 bg-white rounded mb-1.5"></span>
        <span className="block w-8 h-1 bg-white rounded mb-1.5"></span>
        <span className="block w-8 h-1 bg-white rounded"></span>
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              className="text-white text-3xl"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 mt-8 text-white font-semibold text-2xl">
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Our Services</Link>
            <Link href="/consulting" onClick={() => setMenuOpen(false)}>Consulting</Link>
            <Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 