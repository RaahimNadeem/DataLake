'use client'

import React from 'react';
import ServiceHero from '../../../components/ui/ServiceHero';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations/Services/Data/dataHero.json';

const DataHero = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <ServiceHero
      backgroundImage="/services/Data.jpg"
      title={[currentLang.title.part1, currentLang.title.part2]}
      description={currentLang.description}
      ctaText={currentLang.cta}
      backgroundAlt={language === 'ar' ? 'خلفية الذكاء القائم على البيانات' : 'Data-Driven Intelligence background'}
    />
  );
};

export default DataHero; 