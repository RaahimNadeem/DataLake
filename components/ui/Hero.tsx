"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: ['Data', ' ', 'Analytics', ' ', 'for', ' ', 'Modern', ' ', 'Enterprises'],
    description: 'We proudly architect, analyze, and deliver enterprise-grade data solutions for innovators and industry leaders across every sector.',
    cta: 'Get in Touch'
  },
  ar: {
    heading: ['تحليلات', ' ', 'البيانات', ' ', 'للشركات', ' ', 'الحديثة'],
    description: 'نحن نقوم بتصميم وتحليل وتقديم حلول بيانات على مستوى المؤسسات للمبتكرين وقادة الصناعة في جميع القطاعات.',
    cta: 'تواصل معنا'
  }
};

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const { language } = useLanguage();
  const currentLang = translations[language];
  
  // Scale video from 1 to 1.18 as you scroll through the hero section
  const scale = useTransform(scrollY, [0, 400], [1, 1.18]);
  // Fade out text as you scroll through the hero section
  const opacity = useTransform(scrollY, [0, 250], [1, 0]);

  return (
    <section 
      ref={ref} 
      className="relative w-full h-screen overflow-hidden flex items-center font-sans"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Video */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ scale }}
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
      {/* Content */}
      <motion.div
        style={{ opacity }}
        className={`relative z-20 flex flex-col items-${language === 'ar' ? 'end' : 'start'} justify-center h-full px-4 md:px-24 max-w-full md:max-w-4xl w-full`}
      >
        <motion.h1
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 break-words flex flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {currentLang.heading.map((word, i) => (
            <motion.span
              key={i}
              className={language === 'ar' ? 'ml-2' : 'mr-2'}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: currentLang.heading.length * 0.12 + 0.2, duration: 0.6, ease: 'easeOut' }}
          className="w-full"
        >
          <p className="text-white text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-full">
            {currentLang.description}
          </p>
          <a
            href="#more"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition border border-white"
          >
            {currentLang.cta}
            <span className={language === 'ar' ? 'mr-2' : 'ml-2'}>
              {language === 'ar' ? '←' : '→'}
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 