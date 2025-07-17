import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext';
import sloganTranslations from '@/translations/common/slogan.json';

const Slogan = () => {
  const { language } = useLanguage();
  const currentLang = sloganTranslations[language as keyof typeof sloganTranslations];

  return (
    <div className="min-h-[20vh] bg-[#19232e] flex items-center justify-center">
      <h1 className={`text-[#28394b] text-[5rem] sm:text-[12rem] md:text-[16rem] lg:text-[19rem] xl:text-[21rem] font-extrabold tracking-wide leading-none ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
        {currentLang.slogan}
      </h1>
    </div>
  )
}

export default Slogan
