"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

const HeaderAlt = () => {
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
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 md:px-24 py-6 ${
        lastScrollY > 0 ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-[#101424] text-3xl font-bold tracking-widest hover:text-[#4a6d8c] transition-colors duration-300">DATALAKE</Link>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 text-[#101424] font-semibold text-lg">
        <Link href="/about" className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.about}</Link>
        <Link href="/#services" className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.services}</Link>
        <Link href="/consulting" className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.consulting}</Link>
        <Link href="/careers" className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.careers}</Link>
        <Link href="/contact" className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.contact}</Link>
        {/* Language Toggle */}
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm text-[#101424]">EN</span>
          <button
            onClick={toggleLanguage}
            className="relative w-14 h-7 bg-[#4a6d8c]/20 rounded-full transition-colors duration-300 focus:outline-none"
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-[#4a6d8c] rounded-full transition-transform duration-300 transform ${
                language === 'ar' ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className="text-sm text-[#101424]">عربي</span>
        </div>
      </nav>
      {/* Hamburger for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-8 h-1 bg-[#101424] rounded mb-1.5"></span>
        <span className="block w-8 h-1 bg-[#101424] rounded mb-1.5"></span>
        <span className="block w-8 h-1 bg-[#101424] rounded"></span>
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm flex flex-col"
        >
          <div className="flex justify-end p-4">
            <button
              className="text-[#101424] text-3xl hover:text-[#4a6d8c] transition-colors duration-300"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 mt-8 text-[#101424] font-semibold text-2xl">
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.about}</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.services}</Link>
            <Link href="/consulting" onClick={() => setMenuOpen(false)} className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.consulting}</Link>
            <Link href="/careers" onClick={() => setMenuOpen(false)} className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.careers}</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.contact}</Link>
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-[#101424]">EN</span>
              <button
                onClick={toggleLanguage}
                className="relative w-14 h-7 bg-[#4a6d8c]/20 rounded-full transition-colors duration-300 focus:outline-none"
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-[#4a6d8c] rounded-full transition-transform duration-300 transform ${
                    language === 'ar' ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className="text-sm text-[#101424]">عربي</span>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default HeaderAlt; 