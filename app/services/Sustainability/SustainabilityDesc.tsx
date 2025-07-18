import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations/Services/Sustainability/sustainabilityDesc.json';

const AnimatedPoint = ({ title, desc, index }: { title: string; desc: string; index: number }) => {
  return (
    <RevealAnimation direction="right" delay={0.2 * index} className="w-full">
      <div>
        <h3 className="text-4xl md:text-5xl font-medium text-[#101424] mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-2xl md:text-3xl text-[#4a6d8c] font-light max-w-3xl">
          {desc}
        </p>
      </div>
    </RevealAnimation>
  );
};

const SustainabilityDesc = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full flex flex-col md:flex-row bg-white min-h-[120vh]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Sticky Left Column */}
      <div className={`md:w-1/2 flex flex-col justify-start items-start px-4 md:px-24 pt-16 md:pt-32 sticky top-0 h-fit md:h-screen z-10 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-6xl font-extrabold text-black leading-tight mb-3 max-w-lg">
            {currentLang.mainTitle}
          </h2>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.4}>
          <p className="text-lg md:text-2xl text-[#4a6d8c] font-light max-w-md mb-0 md:mb-2">
            {currentLang.subtitle}
          </p>
        </RevealAnimation>
      </div>
      {/* Right Column: Vertically spaced points */}
      <div className={`md:w-1/2 flex flex-col gap-40 px-4 md:px-24 py-16 md:py-32 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        {currentLang.points.map((point, index) => (
          <AnimatedPoint key={point.title} title={point.title} desc={point.desc} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SustainabilityDesc; 