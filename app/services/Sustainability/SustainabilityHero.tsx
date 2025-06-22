'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const images = ['/services/Data.jpg', '/services/Data.jpg', '/services/Data.jpg'];
const SLIDE_DURATION = 4000;

const translations = {
  en: {
    title: "Sustainability",
    subtitle: "Enabled by Digital.",
    description: "Realise better change in a responsible way. Foster sustainable digital transformation. Understand your impact, adapt information systems to environmental challenges, and leverage digital tools to build responsible digital services.",
    cta: "Start Your Sustainable Journey",
    imageAlt: "Sustainability background"
  },
  ar: {
    title: "الاستدامة",
    subtitle: "ممكنة رقمياً.",
    description: "حقق تغييراً أفضل بطريقة مسؤولة. عزز التحول الرقمي المستدام. افهم تأثيرك، وعدل أنظمة المعلومات لتحديات البيئة، واستفد من الأدوات الرقمية لبناء خدمات رقمية مسؤولة.",
    cta: "ابدأ رحلتك المستدامة",
    imageAlt: "خلفية الاستدامة"
  }
};


const SustainabilityHero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});
  const { language } = useLanguage();
  const currentLang = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [current]);

  const handleIndicatorClick = (index: number) => {
    if (index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 500);
  };

  const handleImageError = (src: string) => {
    console.error(`Failed to load image: ${src}`);
    setImageError(prev => ({...prev, [src]: true}));
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden flex items-center font-sans" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Slideshow Background */}
        <div className="absolute top-0 left-0 w-full h-full">
        <Image
            src="/services/Sustainable.jpg"
            alt={currentLang.imageAlt}
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
        
        {/* Content */}
        <div className={`relative z-20 flex flex-col items-start justify-center h-full pl-4 pr-4 md:px-24 max-w-full md:max-w-4xl w-full ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <RevealAnimation direction="up" delay={0.2}>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6">
              {currentLang.title}<br />
              {currentLang.subtitle}
            </h1>
          </RevealAnimation>
          
          <RevealAnimation direction="up" delay={0.4}>
            <p className="text-white text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-full">
              {currentLang.description}
            </p>
          </RevealAnimation>
          
          <RevealAnimation direction="up" delay={0.6}>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition border border-white"
            >
              {currentLang.cta}
              <span className={language === 'ar' ? 'mr-2' : 'ml-2'}>→</span>
            </a>
          </RevealAnimation>
        </div>

       
      </section>
    </>
  );
};

export default SustainabilityHero; 