import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    slogan: "Cloud is not just technology, it's a business transformation.",
    subtitle: "Let us help you navigate your cloud journey with confidence and expertise."
  },
  ar: {
    slogan: "السحابة ليست مجرد تقنية، بل هي تحول في الأعمال.",
    subtitle: "دعنا نساعدك في التنقل في رحلتك السحابية بثقة وخبرة."
  }
};

const CloudSlogan = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full py-16 md:py-24  bg-[#19232e] text-[#28394b]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold  mb-6 text-white">
            "{currentLang.slogan}"
          </h2>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.4}>
          <p className="text-xl text-[#4a6d8c]">
            {currentLang.subtitle}
          </p>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CloudSlogan; 