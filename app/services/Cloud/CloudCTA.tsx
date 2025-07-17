import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    text: "Companies that resist the cloud risk slower operations, higher costs, and limited scalability. Modern businesses are built in the cloud—secure, agile, and ready for anything. \n\nStay future-proof with Datalake and unlock the full potential of cloud computing."
  },
  ar: {
    text: "الشركات التي تقاوم السحابة تخاطر بعمليات أبطأ وتكاليف أعلى وقابلية تطوير محدودة. الأعمال الحديثة مبنية في السحابة - آمنة ورشيقة ومستعدة لأي شيء. \n\nابق محميًا من المستقبل مع Datalake وأطلق العنان للإمكانات الكاملة للحوسبة السحابية."
  }
};

const CloudCTA = () => {
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

export default CloudCTA; 