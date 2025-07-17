"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import headerTranslations from '@/translations/common/header.json';
import servicesData from '@/translations/common/services.json';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const currentLang = headerTranslations[language as keyof typeof headerTranslations];

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
    <>
      <header 
        className={`fixed  ${language === 'ar' ? 'font-arabic' : 'font-sans'} top-0 left-0 w-full z-30 flex items-center justify-between px-6 md:px-24 py-6 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          lastScrollY > 0 ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="cursor-pointer">
            <img src="/DataLakeLogo.svg" alt="DataLake Logo" className="h-12 sm:h-16 md:h-24" />
          </Link>
          {/* <Link href="/" className="text-white text-3xl font-bold tracking-widest"> */}
            {/* <img src="/Logo.svg" alt="DataLake Logo" className="h-12 md:h-16" /> */}
            {/* <h1>DATALAKE</h1> */}
          {/* </Link> */}
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white font-semibold text-lg">
          <Link href="/about" className="hover:underline">{currentLang.about}</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="hover:underline flex items-center gap-1">
              {currentLang.services}
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ${
              servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <div className="py-2">
                {servicesData.map((service) => (
                  <Link
                    key={service.name}
                    href={service.path}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200 text-left"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="font-medium">{language === 'ar' ? service.ar : service.en}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
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
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block w-8 h-1 bg-white rounded mb-1.5"></span>
          <span className="block w-8 h-1 bg-white rounded mb-1.5"></span>
          <span className="block w-8 h-1 bg-white rounded"></span>
        </button>
      </header>

      {/* Mobile Menu Overlay - Full Screen */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col">
          <div className="flex justify-end p-6 pt-16">
            <button
              className="text-white text-4xl hover:text-gray-300 transition-colors duration-300 w-12 h-12 flex items-center justify-center"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col items-start gap-8 mt-8 text-white font-semibold text-2xl px-12">
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">{currentLang.about}</Link>
            
            {/* Mobile Services Dropdown */}
            <div className="relative w-full max-w-xs">
              <button 
                className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                {currentLang.services}
                <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesDropdownOpen && (
                <div className="mt-4 flex flex-col gap-4 text-lg bg-white/10 rounded-lg p-4">
                  {servicesData.map((service) => (
                    <Link
                      key={service.name}
                      href={service.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      onClick={() => {
                        setMenuOpen(false);
                        setServicesDropdownOpen(false);
                      }}
                    >
                      {language === 'ar' ? service.ar : service.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/consulting" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">{currentLang.consulting}</Link>
            <Link href="/careers" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">{currentLang.careers}</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">{currentLang.contact}</Link>
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-2 mt-8">
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
    </>
  );
};

export default Header; 