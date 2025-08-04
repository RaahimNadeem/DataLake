'use client'

import React from 'react';
import ServiceHero from '../../../components/ui/ServiceHero';
import { useLanguage } from '@/contexts/LanguageContext';
import aiHeroTranslations from '@/translations/Services/AI/aiHero.json';

const AIHero = () => {
  const { language } = useLanguage();
  const currentLang = aiHeroTranslations[language as keyof typeof aiHeroTranslations];

  return (
    <ServiceHero
      backgroundImage="/AI/AI-2.jpg"
      title={currentLang.title}
      description={currentLang.description}
      ctaText={currentLang.button}
      backgroundAlt={language === 'ar' ? 'خلفية الذكاء الاصطناعي' : 'AI background'}
    />
  );
};

export default AIHero; 