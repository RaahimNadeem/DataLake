import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import consultingHeroTranslations from '@/translations/ConsultingPage/consultingHero.json';

export default function ConsultingHero() {
  const { language } = useLanguage();
  const currentLang = consultingHeroTranslations[language as keyof typeof consultingHeroTranslations];

  return (
    <section className={`w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8 md:py-12 lg:py-24 px-4 md:px-6 min-h-[500px] ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="uppercase tracking-widest text-sm md:text-base text-[#7c7c7c] mb-4 font-medium"
        >
          {currentLang.subtitle}
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6 md:mb-8"
        >
          {currentLang.title.part1} <span className="text-[#4a6d8c]">{currentLang.title.part2}</span> <br className="hidden md:block" />
          <span className="text-[#4a6d8c]">{currentLang.title.part3}</span>
        </motion.h1>
        {currentLang.description.map((text, index) => (
          <motion.p 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
            className="text-base md:text-lg mb-4 text-gray-700"
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
} 