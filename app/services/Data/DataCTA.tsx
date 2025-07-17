import React from "react";
import RevealAnimation from "../../components/ui/RevealAnimation";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Businesses that ignore data miss critical insights, make slower decisions, and fall behind faster. Real growth comes from smart, informed action.",
    subtitle: "Stay ahead with Datalake and turn your data into your sharpest advantage."
  },
  ar: {
    title: "الشركات التي تتجاهل البيانات تفوت الرؤى الحاسمة، وتتخذ قرارات أبطأ، وتتخلف بسرعة أكبر. النمو الحقيقي يأتي من العمل الذكي والمستنير.",
    subtitle: "ابق متقدماً مع Datalake وحول بياناتك إلى أقوى ميزة تنافسية لك."
  }
};

const DataCTA = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
        <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424]">
          {currentLang.title} <br />
          <br />
          {currentLang.subtitle}
        </h2>
      </RevealAnimation>
    </section>
  );
};

export default DataCTA;
