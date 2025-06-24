import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    text: "Don't let your business fall behind—embracing AI is no longer optional, it's essential. Companies that ignore AI risk losing their competitive edge, missing out on efficiency, innovation, and growth. \n\nStay ahead with Datalake and make AI your advantage."
  },
  ar: {
    text: "لا تدع عملك يتخلف عن الركب - لم يعد تبني الذكاء الاصطناعي اختياريًا ، بل هو ضروري. الشركات التي تتجاهل الذكاء الاصطناعي تخاطر بفقدان ميزتها التنافسية ، وتفويت الكفاءة والابتكار والنمو. \n\nابق في الطليعة مع Datalake واجعل الذكاء الاصطناعي ميزتك."
  }
};

const AICTA = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className={`w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa] ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
        <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424] whitespace-pre-line">
          {currentLang.text}
        </h2>
      </RevealAnimation>
    </section>
  );
};

export default AICTA; 