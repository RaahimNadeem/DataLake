'use client'

import React from 'react';
import Image from 'next/image';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Cloud Solutions for Scalable Growth",
    description: "Transform your business with enterprise-grade cloud infrastructure. We design, deploy, and manage scalable cloud solutions that drive efficiency, security, and innovation for your organization.",
    button: "Let's Talk"
  },
  ar: {
    title: "حلول الحوسبة السحابية للنمو القابل للتطوير",
    description: "حول عملك من خلال البنية التحتية السحابية على مستوى المؤسسات. نقوم بتصميم ونشر وإدارة حلول سحابية قابلة للتطوير تدفع الكفاءة والأمان والابتكار لمؤسستك.",
    button: "لنتحدث"
  }
};

const CloudHero = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <>
      <section className={` ${language === 'ar' ? 'font-arabic' : 'font-sans'} relative w-full h-screen overflow-hidden flex items-center font-sans`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Static Background Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/services/Cloud.jpg"
            alt={language === 'ar' ? 'خلفية الخدمات السحابية' : 'Cloud Services background'}
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
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 whitespace-pre-line">
              {currentLang.title}
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
              {currentLang.button}
              <span className={language === 'ar' ? 'mr-2' : 'ml-2'}>→</span>
            </a>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
};

export default CloudHero; 