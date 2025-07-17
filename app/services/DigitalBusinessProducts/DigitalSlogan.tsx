import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    slogan: "The best digital products don't just solve problems, they create possibilities.",
    subtitle: "Let us help you build digital solutions that transform your business and delight your users."
  },
  ar: {
    slogan: "أفضل المنتجات الرقمية لا تحل المشاكل فحسب، بل تخلق الإمكانيات.",
    subtitle: "دعنا نساعدك في بناء حلول رقمية تحول عملك وتسعد مستخدميك."
  }
};

const DigitalSlogan = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full py-16 md:py-24 bg-[#19232e] text-[#28394b]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
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

export default DigitalSlogan;