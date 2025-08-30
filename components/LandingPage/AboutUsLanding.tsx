"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import aboutUsLandingTranslations from '@/translations/LandingPage/aboutUsLanding.json';

// Interactive Icon Components
const GlobalExpertiseIcon = ({ isHovered }: { isHovered: boolean }) => (
  <motion.div
    className="relative w-16 h-16"
    animate={{ rotate: isHovered ? 360 : 0 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    <motion.div
      className="absolute inset-0 bg-white border-2 border-gray-200 rounded-full"
      animate={{ 
        scale: isHovered ? 1.05 : 1,
        borderColor: isHovered ? "#374151" : "#e5e7eb"
      }}
      transition={{ duration: 0.4 }}
    />
    <motion.div
      className="absolute inset-2 bg-gray-50 rounded-full flex items-center justify-center"
      animate={{ scale: isHovered ? 0.95 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    </motion.div>
  </motion.div>
);

const DataIntelligenceIcon = ({ isHovered }: { isHovered: boolean }) => (
  <motion.div
    className="relative w-16 h-16"
    animate={{ y: isHovered ? -2 : 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    <motion.div
      className="absolute inset-0 bg-white border-2 border-gray-200 rounded-lg"
      animate={{ 
        scale: isHovered ? 1.05 : 1,
        rotate: isHovered ? 1 : 0,
        borderColor: isHovered ? "#374151" : "#e5e7eb"
      }}
      transition={{ duration: 0.4 }}
    />
    <motion.div
      className="absolute inset-2 bg-gray-50 rounded-lg flex items-center justify-center"
      animate={{ scale: isHovered ? 0.95 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    </motion.div>
  </motion.div>
);

const TailoredSolutionsIcon = ({ isHovered }: { isHovered: boolean }) => (
  <motion.div
    className="relative w-16 h-16"
    animate={{ scale: isHovered ? 1.02 : 1 }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className="absolute inset-0 bg-white border-2 border-gray-200 rounded-lg"
      animate={{ 
        rotate: isHovered ? -1 : 0,
        borderColor: isHovered ? "#374151" : "#e5e7eb"
      }}
      transition={{ duration: 0.4 }}
    />
    <motion.div
      className="absolute inset-2 bg-gray-50 rounded-lg flex items-center justify-center"
      animate={{ 
        rotate: isHovered ? 1 : 0
      }}
      transition={{ duration: 0.4 }}
    >
      <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm0 3.24L9.91 9.5 12 13.77l2.09-4.27L12 5.24z"/>
      </svg>
    </motion.div>
  </motion.div>
);

const InnovationIcon = ({ isHovered }: { isHovered: boolean }) => (
  <motion.div
    className="relative w-16 h-16"
    animate={{ rotate: isHovered ? 180 : 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <motion.div
      className="absolute inset-0 bg-white border-2 border-gray-200 rounded-full"
      animate={{ 
        scale: isHovered ? 1.05 : 1,
        borderColor: isHovered ? "#374151" : "#e5e7eb"
      }}
      transition={{ duration: 0.4 }}
    />
    <motion.div
      className="absolute inset-2 bg-gray-50 rounded-full flex items-center justify-center"
      animate={{ scale: isHovered ? 0.95 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </motion.div>
  </motion.div>
);

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
  
  // State for icon hover effects
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

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
            className={`text-sm font-semibold text-gray-700 mb-4 w-full ${language === 'ar' ? 'text-right' : 'tracking-widest uppercase'}`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-dashed border-gray-300">
          {/* Feature 1: Global Expertise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="p-8 border-r border-dashed border-gray-300 group cursor-pointer"
            onMouseEnter={() => setHoveredIcon(0)}
            onMouseLeave={() => setHoveredIcon(null)}
            whileHover={{ 
              backgroundColor: "rgba(0, 0, 0, 0.02)",
              y: -1
            }}
          >
            <div className="w-16 h-16 mb-16 flex items-center justify-center">
              <GlobalExpertiseIcon isHovered={hoveredIcon === 0} />
            </div>
            <h3 className={`text-xl font-bold text-slate-800 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-slate-900 transition-colors duration-300`}>
              {currentLang.features.globalExpertise.title}
            </h3>
            <p className={`text-sm text-gray-600 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-gray-800 transition-colors duration-300`}>
              {currentLang.features.globalExpertise.description}
            </p>
          </motion.div>

          {/* Feature 2: Data-Driven Intelligence */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="p-8 border-r border-dashed border-gray-300 group cursor-pointer"
            onMouseEnter={() => setHoveredIcon(1)}
            onMouseLeave={() => setHoveredIcon(null)}
            whileHover={{ 
              backgroundColor: "rgba(0, 0, 0, 0.02)",
              y: -1
            }}
          >
            <div className="w-16 h-16 mb-16 flex items-center justify-center">
              <DataIntelligenceIcon isHovered={hoveredIcon === 1} />
            </div>
            <h3 className={`text-xl font-bold text-slate-800 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-slate-900 transition-colors duration-300`}>
              {currentLang.features.dataDrivenIntelligence.title}
            </h3>
            <p className={`text-sm text-gray-600 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-gray-800 transition-colors duration-300`}>
              {currentLang.features.dataDrivenIntelligence.description}
            </p>
          </motion.div>

          {/* Feature 3: Tailored Solutions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="p-8 border-r border-dashed border-gray-300 group cursor-pointer"
            onMouseEnter={() => setHoveredIcon(2)}
            onMouseLeave={() => setHoveredIcon(null)}
            whileHover={{ 
              backgroundColor: "rgba(0, 0, 0, 0.02)",
              y: -1
            }}
          >
            <div className="w-16 h-16 mb-16 flex items-center justify-center">
              <TailoredSolutionsIcon isHovered={hoveredIcon === 2} />
            </div>
            <h3 className={`text-xl font-bold text-slate-800 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-slate-900 transition-colors duration-300`}>
              {currentLang.features.tailoredSolutions.title}
            </h3>
            <p className={`text-sm text-gray-600 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-gray-800 transition-colors duration-300`}>
              {currentLang.features.tailoredSolutions.description}
            </p>
          </motion.div>

          {/* Feature 4: Continuous Innovation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="p-8 group cursor-pointer"
            onMouseEnter={() => setHoveredIcon(3)}
            onMouseLeave={() => setHoveredIcon(null)}
            whileHover={{ 
              backgroundColor: "rgba(0, 0, 0, 0.02)",
              y: -1
            }}
          >
            <div className="w-16 h-16 mb-16 flex items-center justify-center">
              <InnovationIcon isHovered={hoveredIcon === 3} />
            </div>
            <h3 className={`text-xl font-bold text-slate-800 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-slate-900 transition-colors duration-300`}>
              {currentLang.features.continuousInnovation.title}
            </h3>
            <p className={`text-sm text-gray-600 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-gray-800 transition-colors duration-300`}>
              {currentLang.features.continuousInnovation.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsLanding; 