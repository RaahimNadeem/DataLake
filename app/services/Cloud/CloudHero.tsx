'use client'

import React from 'react';
import ServiceHero from '../../../components/ui/ServiceHero';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations/Services/Cloud/cloudHero.json';

const CloudHero = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <ServiceHero
      backgroundImage="/services/Cloud.jpg"
      title={currentLang.title}
      description={currentLang.description}
      ctaText={currentLang.button}
      backgroundAlt={language === 'ar' ? 'خلفية الخدمات السحابية' : 'Cloud Services background'}
    />
  );
};

export default CloudHero; 