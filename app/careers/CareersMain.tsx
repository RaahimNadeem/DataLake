import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaRocket, FaUsers } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import careersMainTranslations from '@/translations/CareersPage/careersMain.json';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' }
  })
};

const Careers = () => {
  const { language } = useLanguage();
  const currentLang = careersMainTranslations[language as keyof typeof careersMainTranslations];

  // Scroll to JobListings section
  const scrollToJobListings = () => {
    if (typeof window === 'undefined') return;
    
    const jobListingsSection = document.querySelector('[data-section="job-listings"]');
    if (jobListingsSection) {
      jobListingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={`${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      {/* Hero Section with Background */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Careers/Slide2.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-5xl pt-20 font-extrabold text-white mb-6 drop-shadow-lg"
          >
            {currentLang.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white max-w-2xl mb-8 drop-shadow"
          >
            {currentLang.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <button 
              onClick={scrollToJobListings}
              className="bg-white text-[#19232e] px-6 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {currentLang.hero.exploreButton}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="w-full py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-24">
          <div className="flex-1 w-full md:w-2/3">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className={`text-4xl md:text-5xl font-bold text-black leading-tight mb-8 ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
            >
              {currentLang.culture.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className={`text-lg md:text-xl text-gray-700 max-w-4xl ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
            >
              {currentLang.culture.description}
            </motion.p>
          </div>
          <div className="w-full md:w-1/3">
            {/* Empty space for symmetry */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 