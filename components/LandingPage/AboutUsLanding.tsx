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
      className={`w-full min-h-[80vh] md:min-h-[100vh] pb-24 bg-white font-sans  ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* First Row: 80vh, 2 columns */}
      <div className="w-full min-h-[60vh] md:h-[70vh] flex flex-col md:flex-row items-stretch gap-8 md:gap-0 py-12 md:py-0">
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
            className="text-lg text-black mb-2 text-left w-full"
          >
            {currentLang.journey}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight whitespace-pre-line text-left w-full"
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

      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of images */}
            {slides.map((slide, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-64 h-48 md:w-80 md:h-64 lg:w-96 lg:h-80 xl:w-[500px] xl:h-[400px] mx-3 md:mx-4 lg:mx-6 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1} - First Set`}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={index < 2}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {slides.map((slide, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-64 h-48 md:w-80 md:h-64 lg:w-96 lg:h-80 xl:w-[500px] xl:h-[400px] mx-3 md:mx-4 lg:mx-6 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1} - Second Set`}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Second Row: 20vh, Marquee */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full h-[30vh] overflow-hidden bg-white flex items-center relative"
      >
        <div className="w-full absolute left-0 top-1/2 -translate-y-1/2">
          <div className="marquee whitespace-nowrap text-7xl lg:text-8xl xl:text-9xl font-bold text-[#101424] uppercase">
            {Array(10).fill('Datalake Way').map((text, i) => (
              <span key={i} className="mx-12 inline-block">{text}</span>
            ))}
          </div>
        </div>
        <style jsx>{`
          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 30s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </motion.div> */}
    </section>
  );
};

export default AboutUsLanding; 