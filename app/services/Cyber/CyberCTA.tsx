import React from "react";
import RevealAnimation from "../../components/ui/RevealAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    text: "Businesses that overlook security face threats to their data, reputation, and bottom line. In a world of rising digital risks, protection isn't a feature—it's a foundation. \n\nStay secure with Datalake and make cybersecurity your first line of defense."
  },
  ar: {
    text: "الشركات التي تتجاهل الأمن تواجه تهديدات لبياناتها وسمعتها وأرباحها. في عالم تتزايد فيه المخاطر الرقمية، الحماية ليست ميزة - إنها أساس. \n\nابق آمنًا مع Datalake واجعل الأمن السيبراني خط دفاعك الأول."
  }
};

const CyberCTA = () => {
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

export default CyberCTA;
