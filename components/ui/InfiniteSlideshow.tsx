"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    header: {
      subtitle: "INSIDE DATALAKE",
      title: "Technology Powered by\nPassionate People",
      description: "From collaborative brainstorming sessions to celebrating milestones together, our team culture drives the innovation that transforms businesses."
    }
  },
  ar: {
    header: {
      subtitle: "داخل داتاليك",
      title: "تقنية مدعومة\nبأشخاص متحمسين",
      description: "من جلسات العصف الذهني التعاونية إلى الاحتفال بالمعالم المهمة معاً، ثقافة فريقنا تقود الابتكار الذي يحول الأعمال."
    }
  }
};

const InfiniteSlideshow = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];
  
  const slides = [
    '/LandingPage/Slide1.jpg',
    '/LandingPage/Slide2.jpg',
    '/LandingPage/Slide3.jpg',
    '/LandingPage/Slide4.jpg',
    '/LandingPage/Slide5.jpg',
  ];

  return (
    <section className="w-full overflow-hidden pb-24 pt-24 md:pt-0" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Header Section - Right Aligned */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 500, damping: 40, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-end items-start md:items-center px-4 md:px-8 pt-4 md:pt-16 pb-2 md:pb-12 max-w-[1800px] mx-auto mb-4 md:mb-24"
        >
          <div className="text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm font-semibold text-gray-700 mb-4 tracking-widest uppercase"
            >
              {currentLang.header.subtitle}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl md:text-6xl font-bold text-black leading-tight max-w-3xl whitespace-pre-line mb-8"
            >
              {currentLang.header.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-600 max-w-3xl text-right"
            >
              {currentLang.header.description}
            </motion.p>
          </div>
        </motion.div>
        
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
    </section>
  );
};

export default InfiniteSlideshow; 