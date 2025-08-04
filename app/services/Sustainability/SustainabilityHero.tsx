'use client'

import React from 'react';
import ServiceHero from '../../../components/ui/ServiceHero';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations/Services/Sustainability/sustainabilityHero.json';

const SustainabilityHero = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <ServiceHero
      backgroundImage="/services/Sustainable.jpg"
      title={[currentLang.title, currentLang.subtitle]}
      description={currentLang.description}
      ctaText={currentLang.cta}
      backgroundAlt={currentLang.imageAlt}
    />
  );
};

export default SustainabilityHero; 