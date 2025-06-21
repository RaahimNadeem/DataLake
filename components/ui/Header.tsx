"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    about: 'About',
    services: 'Our Services',
    consulting: 'Consulting',
    careers: 'Careers',
    contact: 'Contact'
  },
  ar: {
    about: 'من نحن',
    services: 'خدماتنا',
    consulting: 'الاستشارات',
    careers: 'وظائف',
    contact: 'اتصل بنا'
  }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, toggleLanguage } = useLanguage();
  const currentLang = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Approximate hero height

      // Show header when scrolling up or when at the top
      if (currentScrollY < heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY < lastScrollY);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 md:px-24 py-6 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        lastScrollY > 0 ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2">
        {/* <img src="/logo.svg" alt="Trident Logo" className="h-10" /> */}
        <Link href="/" className="text-white text-3xl font-bold tracking-widest">
          <img src="/Logo.svg" alt="DataLake Logo" className="h-16" />
        </Link>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 text-white font-semibold text-lg">
        <Link href="/about" className="hover:underline">{currentLang.about}</Link>
        <Link href="/services" className="hover:underline">{currentLang.services}</Link>
        <Link href="/consulting" className="hover:underline">{currentLang.consulting}</Link>
        <Link href="/careers" className="hover:underline">{currentLang.careers}</Link>
        <Link href="/contact" className="hover:underline">{currentLang.contact}</Link>
        {/* Language Toggle */}
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm">EN</span>
          <button
            onClick={toggleLanguage}
            className="relative w-14 h-7 bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none"
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform ${
                language === 'ar' ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className="text-sm">عربي</span>
        </div>
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
            <Link href="/about" onClick={() => setMenuOpen(false)}>{currentLang.about}</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>{currentLang.services}</Link>
            <Link href="/consulting" onClick={() => setMenuOpen(false)}>{currentLang.consulting}</Link>
            <Link href="/careers" onClick={() => setMenuOpen(false)}>{currentLang.careers}</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>{currentLang.contact}</Link>
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm">EN</span>
              <button
                onClick={toggleLanguage}
                className="relative w-14 h-7 bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none"
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform ${
                    language === 'ar' ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className="text-sm">عربي</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 