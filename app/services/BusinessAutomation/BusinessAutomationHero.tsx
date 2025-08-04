'use client'

import React from 'react';
import ServiceHero from '../../../components/ui/ServiceHero';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations/Services/BusinessAutomation/businessAutomationHero.json';

const BusinessAutomationHero = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <ServiceHero
      backgroundImage="/services/BusinessAutomation.jpg"
      title={currentLang.title}
      description={currentLang.description}
      ctaText={currentLang.button}
      backgroundAlt={language === 'ar' ? 'خلفية أتمتة الأعمال' : 'Business Automation background'}
    />
  );
};

export default BusinessAutomationHero; 