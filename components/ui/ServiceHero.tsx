'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RevealAnimation from './RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceHeroProps {
  backgroundImage: string;
  title: string | string[];
  description: string;
  ctaText: string;
  ctaLink?: string;
  backgroundAlt?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  backgroundImage,
  title,
  description,
  ctaText,
  ctaLink = "/contact",
  backgroundAlt = "Service background"
}) => {
  const { language } = useLanguage();

  const renderTitle = () => {
    if (Array.isArray(title)) {
      return title.map((word, i) => (
        <motion.span
          key={i}
          className={language === 'ar' ? 'ml-2' : 'mr-2'}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
        >
          {word}
        </motion.span>
      ));
    } else {
      return (
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        >
          {title}
        </motion.span>
      );
    }
  };

  return (
    <section className={`relative w-full h-screen overflow-hidden flex items-center ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
      
      {/* Content */}
      <motion.div
        className={`relative z-20 flex flex-col items-${language === 'ar' ? 'end' : 'start'} justify-center h-full px-4 md:px-24 max-w-full md:max-w-[65rem] w-full`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 break-words flex flex-wrap ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {renderTitle()}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="w-full"
        >
          <p className={`text-white text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-full ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {description}
          </p>
          <a
            href={ctaLink}
            className={`inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition border border-white ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
          >
            {ctaText}
            <span className={language === 'ar' ? 'mr-2' : 'ml-2'}>
              {language === 'ar' ? '←' : '→'}
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className={`absolute bottom-16 z-20 px-4 md:px-24 ${language === 'ar' ? 'left-0' : 'right-0'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
      >
        <div className={`flex flex-col items-center text-white/80 text-sm md:text-base ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          <span className="mb-2">
            {language === 'ar' ? 'مرر للأسفل' : 'Scroll down'}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-12 border-2 border-white/60 rounded-full flex items-center justify-center"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceHero; 