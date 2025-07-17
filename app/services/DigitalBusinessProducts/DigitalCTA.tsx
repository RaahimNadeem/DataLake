import React from "react";
import RevealAnimation from "../../components/ui/RevealAnimation";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Transform your business with cutting-edge digital solutions. At Datalake, we help you craft innovative products, design standout customer experiences, and build scalable digital capabilities that fuel long-term growth in a fast-changing world.",
    subtitle: "Stay relevant. Stay agile. Stay ahead."
  },
  ar: {
    title: "حول عملك باستخدام الحلول الرقمية المتطورة. في Datalake، نساعدك في صنع منتجات مبتكرة، وتصميم تجارب عملاء متميزة، وبناء قدرات رقمية قابلة للتطوير تغذي النمو طويل المدى في عالم سريع التغير.",
    subtitle: "ابق ذا صلة. كن رشيقاً. ابق متقدماً."
  }
};

const DigitalCTA = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <RevealAnimation direction="up" delay={0.2} className={`w-full ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424]">
          {currentLang.title}
          <br />
          <br />
          {currentLang.subtitle}
        </h2>
      </RevealAnimation>
    </section>
  );
};

export default DigitalCTA;
