"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import aboutUsLandingTranslations from '@/translations/LandingPage/aboutUsLanding.json';

    const AboutUsLanding = () => {

  const slides = [
    '/LandingPage/Slide1.jpg',
    '/LandingPage/Slide2.jpg',
    '/LandingPage/Slide3.jpg',
    '/LandingPage/Slide4.jpg',
    '/LandingPage/Slide5.jpg',
  ];


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const currentLang = aboutUsLandingTranslations[language as keyof typeof aboutUsLandingTranslations];

  const renderHeading = (text: string) => {
    if (language === 'en') {
      return text.split(' ').map((word, index) => {
        if (word === 'French') {
          return <span key={index} style={{ color: '#2254a0' }}>{word} </span>;
        } else if ((word === 'Saudi') || (word === 'Arabia'))  {
          return <span key={index} style={{ color: '#e08d37' }}>{word} </span>;
        }
        return word + (index < text.split(' ').length - 1 ? ' ' : '');
      });
    } else if (language === 'ar') {
      // For Arabic, we need to handle the text differently since it might contain prefixes/suffixes
      const words = text.split(' ');
      return words.map((word, index) => {
        // Check if the word contains the target Arabic words
        if (word.includes('الخبرة') || (word.includes('العالمية'))) {
          return <span key={index} style={{ color: '#2254a0' }}>{word} </span>;
        } else if (word.includes('الطموح') || (word.includes('السعودي'))) {
          return <span key={index} style={{ color: '#e08d37' }}>{word} </span>;
        }
        return word + (index < words.length - 1 ? ' ' : '');
      });
    }
    return text;
  };

  return (
    <section 
      ref={ref} 
      className={`w-full bg-white font-sans ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Main Content Row: Vertically centered, 2 columns */}
      <div className="w-full min-h-[60vh] flex flex-col md:flex-row items-stretch gap-8 md:gap-0 py-12 md:py-0">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: language === 'ar' ? 50 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex-1 flex flex-col justify-center items-center ${language === 'ar' ? 'font-arabic' : 'font-sans'} ${language === 'ar' ? 'pl-8 pr-8 md:pr-24 lg:pr-64' : 'pl-8 md:pl-24 lg:pl-64'}`}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-semibold text-gray-700 mb-4 tracking-widest uppercase w-full"
          >
            {currentLang.journey}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-black ${language === 'ar' ? 'leading-relaxed' : 'leading-tight'} whitespace-pre-line text-left w-full`}
          >
            {renderHeading(currentLang.heading)}
          </motion.h2>
        </motion.div>
        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: language === 'ar' ? -50 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex-1 ${language === 'ar' ? 'font-arabic' : 'font-sans'} flex flex-col justify-center items-start md:items-${language === 'ar' ? 'start' : 'end'} px-8 md:px-24 lg:px-64`}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 text-left leading-relaxed max-w-xl"
          >
            {currentLang.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Features Grid Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full pt-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t  border-dashed border-gray-300">
          {/* Feature 1: Global Expertise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="p-8 border-r border-dashed border-gray-300"
          >
            <div className="w-16 h-16 mb-16 flex items-center justify-center">
              <svg className="w-14 h-14 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3 text-left">Global Expertise</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              French innovation meets Saudi ambition — delivering world-class solutions with international standards and local insight.
            </p>
          </motion.div>

          {/* Feature 2: Data-Driven Intelligence */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="p-8 border-r border-dashed border-gray-300"
          >
            <div className="w-16 h-16 mb-16 flex items-center justify-center">
              <svg className="w-14 h-14 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3 text-left">Data-Driven Intelligence</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              Advanced analytics and AI-powered insights transform raw data into actionable business intelligence and strategic decisions.
            </p>
          </motion.div>

          {/* Feature 3: Tailored Solutions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="p-8 border-r border-dashed border-gray-300"
          >
            <div className="w-16 h-16 mb-16 flex items-center justify-center">
              <svg className="w-14 h-14 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3 text-left">Tailored Solutions</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              Every solution adapts to your unique business needs, industry requirements, and organizational culture — not generic templates.
            </p>
          </motion.div>

          {/* Feature 4: Continuous Innovation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="p-8"
          >
            <div className="w-16 h-16 mb-16 flex items-center justify-center">
              <svg className="w-14 h-14 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3 text-left">Continuous Innovation</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
              With each project, we evolve and improve. You see what's changing — and why it matters for your digital transformation journey.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsLanding; 