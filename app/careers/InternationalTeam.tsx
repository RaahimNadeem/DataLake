import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import internationalTeamTranslations from '@/translations/CareersPage/internationalTeam.json';

// Interactive Icon Components
const TeamIcon = ({ isHovered }: { isHovered: boolean }) => (
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
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </motion.div>
  </motion.div>
);

const GlobalIcon = ({ isHovered }: { isHovered: boolean }) => (
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
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </motion.div>
  </motion.div>
);

const GrowthIcon = ({ isHovered }: { isHovered: boolean }) => (
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
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </motion.div>
  </motion.div>
);

export default function InternationalTeam() {
  const { language } = useLanguage();
  const currentLang = internationalTeamTranslations[language as keyof typeof internationalTeamTranslations];
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const iconComponents = [TeamIcon, GlobalIcon, GrowthIcon, InnovationIcon];

  return (
    <section className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} w-full bg-[#edf4f9]`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="w-full mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="py-12 md:py-20 px-4 md:px-8 lg:px-16 xl:px-24 "
        >
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold text-black leading-tight mb-4 md:mb-8 ${language === 'ar' ? 'text-left font-arabic' : 'text-right font-sans'}`}>
              {currentLang.header.title}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl ${language === 'ar' ? 'text-left mr-auto font-arabic' : 'text-right ml-auto font-sans'}`}>
              {currentLang.description}
            </p>
          </div>
        </motion.div>

        {/* Features Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-dashed border-gray-200">
            {currentLang.benefits.map((benefit, index) => {
              const IconComponent = iconComponents[index];
              return (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`p-12 ${index < 3 ? 'border-r border-gray-200' : ''} group cursor-pointer hover:bg-gray-50 transition-colors duration-300`}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  whileHover={{ 
                    y: -1,
                    scale: 1.02
                  }}
                >
                  <div className="w-16 h-16 mb-16 flex items-center justify-center">
                    <IconComponent isHovered={hoveredIcon === index} />
                  </div>
                  <h3 className={`text-xl font-bold text-slate-800 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-slate-900 transition-colors duration-300`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-sm text-gray-600 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'} group-hover:text-gray-800 transition-colors duration-300`}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 