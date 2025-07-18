import React from "react";
import RevealAnimation from "../../components/ui/RevealAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from '@/translations/Services/Cyber/cyberCTA.json';

const CyberCTA = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className={`w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
        <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424] whitespace-pre-line">
          {currentLang.text}
        </h2>
      </RevealAnimation>
    </section>
  );
};

export default CyberCTA;
