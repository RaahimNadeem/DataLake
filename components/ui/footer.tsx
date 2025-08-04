"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLanguage } from '@/contexts/LanguageContext';
import footerTranslations from '@/translations/common/footer.json';

const services = [
  { name: 'ai', path: '/services/AI', translationKey: 'ai' },
  { name: 'automation', path: '/services/BusinessAutomation', translationKey: 'automation' },
  { name: 'cloud', path: '/services/Cloud', translationKey: 'cloud' },
  { name: 'cybersecurity', path: '/services/Cyber', translationKey: 'cybersecurity' },
  { name: 'dataIntelligence', path: '/services/Data', translationKey: 'dataIntelligence' },
  { name: 'digitalBusiness', path: '/services/DigitalBusinessProducts', translationKey: 'digitalBusiness' },
  { name: 'sustainability', path: '/services/Sustainability', translationKey: 'sustainability' }
];

const company = [
  { name: 'about', path: '/about', translationKey: 'about' },
  { name: 'careers', path: '/careers', translationKey: 'careers' },
  { name: 'consulting', path: '/consulting', translationKey: 'consulting' },
  { name: 'contact', path: '/contact', translationKey: 'contact' },
];

const Footer = () => {
  const { language } = useLanguage();
  const currentLang = footerTranslations[language as keyof typeof footerTranslations];

  return (
    <footer className={`w-full bg-[#19232e]  ${language === 'ar' ? 'font-arabic' : 'font-sans'} text-white pt-12 md:pt-16 pb-6 px-4 md:px-12`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start">
        {/* Left: Heading and Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-start justify-between h-full min-h-[280px] md:min-h-[320px]"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8"
          >
            {currentLang.readyToTransform}<br />{currentLang.yourData}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center mb-8"
          >
            <Link href="/contact">
              <button className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border border-white flex flex-col items-center justify-center text-center text-base md:text-lg font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#101424] hover:scale-105">
                {currentLang.startYourJourney.split('\n').map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
                <span className="mt-2 text-2xl">&darr;</span>
              </button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs text-gray-400 flex flex-wrap gap-4 mt-8"
          >
            <span>{currentLang.allRightsReserved}</span>
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">{currentLang.privacyPolicy}</Link>
            <Link href="/cookies" className="hover:text-white transition-colors duration-300">{currentLang.cookiePolicy}</Link>
          </motion.div>
          <div className="mt-6 text-sm text-gray-400">
            <span className="block">Datalake</span>
            <span className="block">{currentLang.address}</span>
            <span className="block">{currentLang.email} <a href="mailto:HR@datalake.sa" className="underline hover:text-white">HR@datalake.sa</a></span>
          </div>
        </motion.div>

        {/* Right: Links and Reviews */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col md:flex-row justify-between w-full md:w-auto gap-8 md:gap-24"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="font-bold mb-4">{currentLang.services}</div>
              <ul className="space-y-2 text-gray-200">
                {services.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <Link href={item.path}>{currentLang[item.translationKey as keyof typeof currentLang]}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="font-bold mb-4">{currentLang.company}</div>
              <ul className="space-y-2 text-gray-200">
                {company.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <Link href={item.path}>{currentLang[item.translationKey as keyof typeof currentLang]}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social Icons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto flex justify-end items-center gap-4 mt-8 pr-2"
      >
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://linkedin.com/company/datalake-ai" 
          target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </motion.a>
       
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:HR@datalake.sa" 
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;
