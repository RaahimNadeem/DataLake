"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-4 md:px-24 py-4 md:py-6"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2"
      >
        {/* <img src="/logo.svg" alt="Trident Logo" className="h-10" /> */}
        <Link href="/" className="text-[#101424] text-2xl md:text-3xl font-bold tracking-widest hover:text-[#4a6d8c] transition-colors duration-300">DATALAKE</Link>
      </motion.div>

      {/* Desktop Nav */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="hidden md:flex items-center gap-6 lg:gap-8 text-[#101424] font-semibold text-base lg:text-lg"
      >
        <Link href="/about" className="hover:text-[#4a6d8c] transition-colors duration-300">About</Link>
        <Link href="/#services" className="hover:text-[#4a6d8c] transition-colors duration-300">Our Services</Link>
        <Link href="/consulting" className="hover:text-[#4a6d8c] transition-colors duration-300">Consulting</Link>
        <Link href="/careers" className="hover:text-[#4a6d8c] transition-colors duration-300">Careers</Link>
        <Link href="/contact" className="hover:text-[#4a6d8c] transition-colors duration-300">Contact</Link>
        {/* Language Toggle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 ml-4"
        >
          <span className="text-sm text-[#101424]">EN</span>
          <motion.button
            onClick={toggleLanguage}
            className="relative w-14 h-7 bg-[#4a6d8c]/20 rounded-full focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 left-1 w-5 h-5 bg-[#4a6d8c] rounded-full"
              animate={{ x: language === 'ar' ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.button>
          <span className="text-sm text-[#101424]">عربي</span>
        </motion.div>
      </motion.nav>

      {/* Hamburger for Mobile */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-8 h-1 bg-[#101424] rounded mb-1.5 transition-transform duration-300"></span>
        <span className="block w-8 h-1 bg-[#101424] rounded mb-1.5 transition-transform duration-300"></span>
        <span className="block w-8 h-1 bg-[#101424] rounded transition-transform duration-300"></span>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/70 flex flex-col"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex justify-end p-4"
            >
              <button
                className="text-white text-3xl hover:text-gray-300 transition-colors duration-300"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
            </motion.div>
            <motion.nav 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-6 mt-8 text-white font-semibold text-xl md:text-2xl"
            >
              <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">About</Link>
              <Link href="/#services" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">Our Services</Link>
              <Link href="/consulting" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">Consulting</Link>
              <Link href="/careers" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">Careers</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">Contact</Link>
              {/* Mobile Language Toggle */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 mt-4"
              >
                <span className="text-sm text-white">EN</span>
                <motion.button
                  onClick={toggleLanguage}
                  className="relative w-14 h-7 bg-white/20 rounded-full focus:outline-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full"
                    animate={{ x: language === 'ar' ? 28 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
                <span className="text-sm text-white">عربي</span>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 