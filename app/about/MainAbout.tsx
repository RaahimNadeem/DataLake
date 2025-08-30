import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import mainAboutTranslations from '@/translations/AboutPage/mainAbout.json';

const MainAbout = () => {
  const { language } = useLanguage();
  const currentLang = mainAboutTranslations[language as keyof typeof mainAboutTranslations];

  return (
    <section className="w-full min-h-screen flex items-center "  dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-24 px-4 md:pl-8 md:pr-0 w-full">
        {/* Left: Text */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full md:w-1/2 flex flex-col justify-center items-start"
        >
          <div className="mb-6 w-full max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-sm ${language === 'ar' ? 'font-arabic' : 'font-sans'} font-semibold text-gray-700 tracking-widest uppercase mb-6`}
            
            >
              {currentLang.subtitle}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-4xl md:text-6xl font-bold text-black leading-tight mb-8 ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
            >
              {currentLang.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`text-lg md:text-xl text-gray-700 max-w-xl ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
            >
              {currentLang.description}
            </motion.p>
          </div>
        </motion.div>
        {/* Right: Static Image */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[50vw] h-[340px] md:h-[520px] flex flex-col items-center md:items-start md:pt-20 relative"
        >
          <div className="w-full h-[340px] md:h-[520px] relative overflow-hidden rounded-l-3xl md:rounded-l-3xl md:rounded-r-none md:rounded-t-none md:rounded-b-none">
            <img
              src="/AboutUs/Slide1.jpg"
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainAbout; 