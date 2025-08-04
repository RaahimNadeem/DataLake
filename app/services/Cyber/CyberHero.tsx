'use client'

import React from 'react';
import ServiceHero from '../../../components/ui/ServiceHero';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations/Services/Cyber/cyberHero.json';

const CyberHero = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <ServiceHero
      backgroundImage="/services/Cyber.jpg"
      title={currentLang.title}
      description={currentLang.description}
      ctaText={currentLang.button}
      backgroundAlt={language === 'ar' ? 'خلفية الأمن السيبراني' : 'Cybersecurity background'}
    />
  );
};

export default CyberHero; 