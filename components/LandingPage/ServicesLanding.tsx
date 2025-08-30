import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import servicesLandingTranslations from '@/translations/LandingPage/servicesLanding.json';

function toKebabCase(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
}

const ServicesLanding = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const currentLang = servicesLandingTranslations[language as keyof typeof servicesLandingTranslations];

  const renderTitle = (text: string) => {
    if (language === 'en') {
      return text.split(' ').map((word, index) => {
        if (word === 'Enterprise' || word === 'Solutions') {
          return <span key={index} style={{ color: '#e08d37' }}>{word} </span>;
        }
        return word + (index < text.split(' ').length - 1 ? ' ' : '');
      });
    } else if (language === 'ar') {
      // For Arabic, we need to handle the text differently since it might contain prefixes/suffixes
      const words = text.split(' ');
      return words.map((word, index) => {
        // Check if the word contains the target Arabic words for "Enterprise Solutions"
        if (word.includes('المؤسسات') || word.includes('المتطورة')) {
          return <span key={index} style={{ color: '#e08d37' }}>{word} </span>;
        }
        return word + (index < words.length - 1 ? ' ' : '');
      });
    }
    return text;
  };

  return (
    <section id="services" className={`w-full min-h-[70vh] py-16 md:py-12 ${language === 'ar' ? 'font-arabic' : 'font-sans'} bg-[#edf4f9] `} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <motion.div
        ref={ref}
        initial={{ x: language === 'ar' ? 60 : -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 500, damping: 40, duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-24  md:pt-16  max-w-[1800px] mx-auto mb-4 md:mb-24"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-sm font-semibold text-gray-700 mb-4 ${language === 'ar' ? 'text-right' : 'tracking-widest uppercase'}`}
          >
            {currentLang.header.subtitle}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-6xl font-bold text-black leading-tight max-w-3xl whitespace-pre-line"
          >
            {renderTitle(currentLang.header.title)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-700 max-w-xl mt-6"
          >
            {currentLang.header.description}
          </motion.p>
        </div>
      </motion.div>
      {/* Services Grid */}
      <div className="w-full">
        {/* Mobile: horizontal scrollable carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex md:hidden gap-4 overflow-x-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-300 max-w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {currentLang.services.map((service, idx) => (
            <Link
              key={service.title}
              href={`/services/${encodeURIComponent(service.title)}`}
              className="relative group cursor-pointer overflow-hidden min-w-[80vw] max-w-[90vw] h-[60vw] max-h-[400px] rounded-xl flex-shrink-0"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />
              {/* Title */}
              <div className="absolute top-6 left-6 right-6 z-10">
                <h2 className="text-white text-xl font-bold drop-shadow-lg">{service.title}</h2>
              </div>
              {/* Description (on hover) */}
              <div className="absolute left-6 right-6 bottom-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-base font-normal drop-shadow-lg">{service.description}</p>
              </div>
            </Link>
          ))}
        </motion.div>
        {/* Desktop: expanding flex grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="hidden md:flex w-full h-[80vw] min-h-[300px] max-h-[500px]"
        >
          {currentLang.services.map((service, idx) => (
            <Link
              key={service.title}
              href={`${service.link}`}
              className={`relative group cursor-pointer overflow-hidden transition-all duration-300 flex-1 ${
                hovered === idx ? 'flex-[3]' : hovered === null ? 'flex-1' : 'flex-[0.7]'
              }`}
              style={{ minWidth: 0, willChange: 'transform, opacity' }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Overlay */}
              <div className={`absolute inset-0 transition-colors duration-500 ${hovered === idx ? 'bg-black/60' : 'bg-black/20'}`} />
              {/* Title */}
              <div className="absolute top-6 left-6 right-6 z-10">
                <h2 className="text-white text-xl font-bold drop-shadow-lg">{service.title}</h2>
              </div>
              {/* Description (on hover) */}
              <div className={`absolute left-6 right-6 bottom-6 z-10 transition-opacity duration-500 ${hovered === idx ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-white text-base font-normal drop-shadow-lg">{service.description}</p>
              </div>
            </Link>
          ))}
        </motion.div>
        {/* Add margin below grid: more on desktop, less on mobile */}
        <div className="mb-4 md:mb-24" />
      </div>
    </section>
  );
};

export default ServicesLanding; 