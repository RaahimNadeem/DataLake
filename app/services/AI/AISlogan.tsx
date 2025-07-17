import React from 'react'
import RevealAnimation from '../../components/ui/RevealAnimation'
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    slogan: "Think AI"
  },
  ar: {
    slogan: "Think AI"
  }
};

const Slogan = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <div className="min-h-[20vh] bg-[#19232e] flex items-center justify-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <RevealAnimation direction="up" delay={0.2}>
        <h1 className="text-[#28394b] text-[5rem] sm:text-[12rem] md:text-[16rem] lg:text-[19rem] xl:text-[21rem] font-extrabold tracking-wide leading-none">
          {currentLang.slogan}
        </h1>
      </RevealAnimation>
    </div>
  )
}

export default Slogan
