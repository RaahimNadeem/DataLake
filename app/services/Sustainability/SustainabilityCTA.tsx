import React from "react";
import RevealAnimation from "../../components/ui/RevealAnimation";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "At Datalake, we help you understand your environmental impact, adapt information systems to environmental challenges, and leverage digital tools to build responsible digital services that drive sustainable growth.",
    subtitle: "Think sustainable. Act responsibly. Build for the future."
  },
  ar: {
    title: "في Datalake، نساعدك في فهم تأثيرك البيئي، وتكيف أنظمة المعلومات مع التحديات البيئية، والاستفادة من الأدوات الرقمية لبناء خدمات رقمية مسؤولة تدفع النمو المستدام.",
    subtitle: "فكر بشكل مستدام. تصرف بمسؤولية. ابنِ للمستقبل."
  }
};

const SustainabilityCTA = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
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

export default SustainabilityCTA;
