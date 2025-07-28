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
    contact: 'Contact',
    sustainability: 'Sustainability',
    digitalBusiness: 'Digital Business & Products',
    dataIntelligence: 'Data-driven Intelligence',
    cloud: 'Distributed Cloud',
    automation: 'Business Automation',
    cybersecurity: 'Trust & Cybersecurity',
    ai: 'AI Services'
  },
  ar: {
    about: 'من نحن',
    services: 'خدماتنا',
    consulting: 'الاستشارات',
    careers: 'وظائف',
    contact: 'اتصل بنا',
    sustainability: 'الاستدامة',
    digitalBusiness: 'الأعمال الرقمية والمنتجات',
    dataIntelligence: 'الذكاء القائم على البيانات',
    cloud: 'خدمات السحابة',
    automation: 'أتمتة الأعمال',
    cybersecurity: 'الأمن السيبراني',
    ai: 'خدمات الذكاء الاصطناعي'
  }
};

const services = [
  { name: 'ai', path: '/services/AI', en: 'AI Services', ar: 'خدمات الذكاء الاصطناعي' },
  { name: 'automation', path: '/services/BusinessAutomation', en: 'Business Automation', ar: 'أتمتة الأعمال' },
  { name: 'cloud', path: '/services/Cloud', en: 'Cloud Services', ar: 'خدمات السحابة' },
  { name: 'cybersecurity', path: '/services/Cyber', en: 'Cybersecurity', ar: 'الأمن السيبراني' },
  { name: 'dataIntelligence', path: '/services/Data', en: 'Data-driven Intelligence', ar: 'الذكاء القائم على البيانات' },
  { name: 'digitalBusiness', path: '/services/DigitalBusinessProducts', en: 'Digital Business & Products', ar: 'الأعمال الرقمية والمنتجات' },
  { name: 'sustainability', path: '/services/Sustainability', en: 'Sustainability', ar: 'الاستدامة' },
];

const HeaderAlt = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const currentLang = translations[language];

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

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
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0  ${language === 'ar' ? 'font-arabic' : 'font-sans'} left-0 w-full z-30 flex items-center justify-between px-4 md:px-24 py-6 ${
          lastScrollY > 0 ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-2">
          {/* <img src="/logo.svg" alt="Trident Logo" className="h-10" /> */}
          {/* <Link href="/" className="text-white text-3xl font-bold tracking-widest">
            <img src="/Logo.svg" alt="DataLake Logo" className="h-16" />
          </Link> */}
          {/* <Link href="/" className="text-black text-3xl font-bold tracking-widest"> */}
            {/* <img src="/Logo.svg" alt="DataLake Logo" className="h-12 md:h-16" /> */}
            {/* <h1>DATALAKE</h1> */}
          {/* </Link>         */}
          <Link href="/" className="cursor-pointer">
            <img src="/DataLakeLogo.svg" alt="DataLake Logo" className="h-12 sm:h-16 md:h-24" />
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[#101424] font-semibold text-lg">
          <Link href="/about" className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.about}</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => {
              // Add a small delay to prevent immediate closing
              setTimeout(() => setServicesDropdownOpen(false), 100000);
            }}
          >
            <button className="hover:text-[#4a6d8c] transition-colors duration-300 flex items-center gap-1">
              {currentLang.services}
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: servicesDropdownOpen ? 1 : 0,
                y: servicesDropdownOpen ? 0 : -10
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200"
              style={{ pointerEvents: servicesDropdownOpen ? 'auto' : 'none' }}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="py-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.path}
                    className="block px-4 py-3 text-[#101424] hover:bg-[#4a6d8c]/10 hover:text-[#4a6d8c] transition-colors duration-200 text-left"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="font-medium">{language === 'ar' ? service.ar : service.en}</div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
          
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
      </motion.header>

      {/* Spacer to prevent content overlap */}
      <div className="h-24 md:h-28"></div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm flex flex-col"
        >
          <div className="flex justify-end p-6 pt-16">
            <button
              className="text-[#101424] text-4xl hover:text-[#4a6d8c] transition-colors duration-300 w-12 h-12 flex items-center justify-center"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col items-start gap-8 mt-8 text-[#101424] font-semibold text-2xl px-12 pb-12">
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.about}</Link>
            
            {/* Mobile Services Dropdown */}
            <div className="relative w-full max-w-xs">
              <button 
                className="flex items-center gap-2 hover:text-[#4a6d8c] transition-colors duration-300"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                {currentLang.services}
                <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex flex-col gap-4 text-lg bg-[#4a6d8c]/10 rounded-lg p-4"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.path}
                      className="text-[#4a6d8c] hover:text-[#101424] transition-colors duration-300"
                      onClick={() => {
                        setMenuOpen(false);
                        setServicesDropdownOpen(false);
                      }}
                    >
                      {language === 'ar' ? service.ar : service.en}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
            
            <Link href="/consulting" onClick={() => setMenuOpen(false)} className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.consulting}</Link>
            <Link href="/careers" onClick={() => setMenuOpen(false)} className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.careers}</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#4a6d8c] transition-colors duration-300">{currentLang.contact}</Link>
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-2 mt-8">
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
    </>
  );
};

export default HeaderAlt; 