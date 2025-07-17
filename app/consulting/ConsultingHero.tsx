import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import consultingHeroTranslations from '@/translations/ConsultingPage/consultingHero.json';

export default function ConsultingHero() {
  const { language } = useLanguage();
  const currentLang = consultingHeroTranslations[language as keyof typeof consultingHeroTranslations];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/Consulting/Slide1.jpg",
    "/Consulting/Slide2.jpg", 
    "/Consulting/Slide3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12 md:gap-24 py-16 md:py-24 lg:py-32 px-4 md:px-6 min-h-[500px] ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Left: Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 flex flex-col justify-center h-full"
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
      {/* Right: Slideshow */}
      <motion.div 
        initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 flex items-center justify-center"
      >
        <div className="w-full max-w-[600px] aspect-[4/5] h-full flex items-center justify-center relative overflow-hidden rounded-3xl shadow-lg">
          {slides.map((slide, index) => (
            <motion.img
              key={index}
              src={slide}
              alt={`Consulting Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.05
              }}
              transition={{ 
                opacity: { duration: 0.8, ease: "easeInOut" },
                scale: { duration: 0.8, ease: "easeInOut" }
              }}
            />
          ))}
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-110' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 