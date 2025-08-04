import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import clientLogosMarqueeTranslations from '@/translations/common/clientLogosMarquee.json';

const clientLogos = [
  { src: '/Clients/Paribas.png', name: 'BNP Paribas' },
  { src: '/Clients/Monoprix_logo.svg', name: 'Monoprix' },
  { src: '/Clients/societe-generale-2.svg', name: 'Société Générale' },
  { src: '/Clients/Renault.png', name: 'Renault' },
  { src: '/Clients/Sopra.jpg', name: 'Sopra' },
  { src: '/Clients/Atos.svg.png', name: 'Atos' },
  { src: '/Clients/attijariwafa-bank-logo-png_seeklogo-176188.png', name: 'Attijariwafa Bank' },
  { src: '/Clients/233_pagesdynaparags57bc16be63262.png', name: 'Pages Dyna' },
  { src: '/Clients/channels4_profile.jpg', name: 'Channels4' },
  { src: '/Clients/logo-Safran.jpg', name: 'Safran' },
  { src: '/Clients/Logo-engie.svg', name: 'Engie' },
  { src: '/Clients/2000px-banque_de_france_logo-svg_1-1.png', name: 'Banque de France' },
  { src: '/Clients/Bpifrance_VI_SS_FB_RVB.png', name: 'Bpifrance' },
  { src: '/Clients/Infotel.png', name: 'Infotel' },
  { src: '/Clients/Generali.png', name: 'Generali' },
  { src: '/Clients/TEKSystems.png', name: 'Client 16' }
];

export default function ClientLogosMarquee() {
  const { language } = useLanguage();
  const currentLang = clientLogosMarqueeTranslations[language as keyof typeof clientLogosMarqueeTranslations];

  const renderTitle = (text: string) => {
    if (language === 'en') {
      return text.split(' ').map((word, index) => {
        if (word === 'Trusted') {
          return <span key={index} style={{ color: '#2254a0' }}>{word} </span>;
        } else if (word === 'Success') {
          return <span key={index} style={{ color: '#e08d37' }}>{word} </span>;
        }
        return word + (index < text.split(' ').length - 1 ? ' ' : '');
      });
    } else if (language === 'ar') {
      // For Arabic, we need to handle the text differently since it might contain prefixes/suffixes
      const words = text.split(' ');
      return words.map((word, index) => {
        // Check if the word contains the target Arabic words
        if (word.includes('الموثوقون')) {
          return <span key={index} style={{ color: '#2254a0' }}>{word} </span>;
        } else if (word.includes('النجاح')) {
          return <span key={index} style={{ color: '#e08d37' }}>{word} </span>;
        }
        return word + (index < words.length - 1 ? ' ' : '');
      });
    }
    return text;
  };

  // Create different logo sets for each row to avoid overlap
  // Duplicate logos multiple times to ensure seamless infinite scrolling
  const firstRowLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];
  
  // Second row uses a different arrangement - start from middle and wrap around
  const secondRowLogos = [
    ...clientLogos.slice(8), // Start from middle
    ...clientLogos.slice(0, 8), // Then first half
    ...clientLogos.slice(8), // Repeat pattern
    ...clientLogos.slice(0, 8),
    ...clientLogos.slice(8),
    ...clientLogos.slice(0, 8),
    ...clientLogos.slice(8),
    ...clientLogos.slice(0, 8),
    ...clientLogos.slice(8),
    ...clientLogos.slice(0, 8),
    ...clientLogos.slice(8),
    ...clientLogos.slice(0, 8)
  ];

  return (
    <section className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} relative w-full py-12 md:py-16 pb-20 md:pb-24 bg-white overflow-hidden`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <motion.div
        initial={{ x: language === 'ar' ? 60 : -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 500, damping: 40, duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-24 md:pt-16 max-w-[1800px] mx-auto mb-4 md:mb-24"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-semibold text-gray-700 mb-4 tracking-widest uppercase"
          >
            {currentLang.header.subtitle}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-6xl font-bold text-black leading-tight max-w-3xl whitespace-pre-line"
          >
            {renderTitle(currentLang.header.title)}
          </motion.h1>
        </div>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* First row - moving left */}
        <motion.div
          animate={{ x: '-50%' }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="flex items-center gap-12 md:gap-16 whitespace-nowrap"
          style={{ direction: 'ltr' }}
        >
          {firstRowLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-40 md:w-48 h-20 md:h-24 bg-white rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={160}
                height={80}
                className="max-w-full max-h-full object-contain transition-all duration-300"
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo.src}`);
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Second row - moving right */}
        <motion.div
          initial={{ x: '-50%' }}
          animate={{ x: '0%' }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="flex items-center gap-12 md:gap-16 whitespace-nowrap mt-8 mb-8"
          style={{ direction: 'ltr' }}
        >
          {secondRowLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-40 md:w-48 h-20 md:h-24 bg-white rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={160}
                height={80}
                className="max-w-full max-h-full object-contain transition-all duration-300"
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo.src}`);
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
    </section>
  );
} 