import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    text: "Companies that delay automation waste time, money, and potential. Streamlined workflows, reduced errors, and faster decisions set successful businesses apart. \n\nStay ahead with Datalake and make automation your competitive edge."
  },
  ar: {
    text: "الشركات التي تؤخر الأتمتة تهدر الوقت والمال والإمكانات. سير العمل المبسط والأخطاء المقللة والقرارات الأسرع تميز الشركات الناجحة. \n\nابق في الطليعة مع Datalake واجعل الأتمتة ميزتك التنافسية."
  }
};

const BusinessAutomationCTA = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
        <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424] whitespace-pre-line">
          {currentLang.text}
        </h2>
      </RevealAnimation>
    </section>
  );
};

export default BusinessAutomationCTA; 