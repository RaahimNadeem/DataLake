import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import RevealAnimation from "../../components/ui/RevealAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/translations/Services/Data/dataWhyUS.json";

const DataWhyUS = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % currentLang.slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + currentLang.slides.length) % currentLang.slides.length);

  return (
    <section className="w-full flex flex-col items-center py-12 lg:py-24 px-2" dir={language === "ar" ? "rtl" : "ltr"}>
      <RevealAnimation direction="up" delay={0.2}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#101424]">
          {currentLang.mainTitle}
        </h2>
      </RevealAnimation>
      
      <RevealAnimation direction="up" delay={0.4} className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg min-h-[400px] bg-[#d3deeb]">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 text-[#101424]">
            <AnimatePresence mode="wait">
              <div key={currentLang.slides[current].title} className="animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {currentLang.slides[current].title}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-[#4a6d8c]">
                  {currentLang.slides[current].desc}
                </p>
              </div>
            </AnimatePresence>
            <div className="flex gap-4 items-center mt-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#eaf1f7] text-[#4a6d8c] flex items-center justify-center text-2xl font-bold hover:bg-[#dbeafe] transition"
                aria-label={language === "ar" ? "الشريحة السابقة" : "Previous slide"}
              >
                {language === "ar" ? "→" : "←"}
              </button>
              <div className="flex gap-2">
                {currentLang.slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === current ? "bg-[#4a6d8c]" : "bg-[#eaf1f7]"
                    }`}
                    aria-label={language === "ar" ? `اذهب إلى الشريحة ${idx + 1}` : `Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#eaf1f7] text-[#4a6d8c] flex items-center justify-center text-2xl font-bold hover:bg-[#dbeafe] transition"
                aria-label={language === "ar" ? "الشريحة التالية" : "Next slide"}
              >
                {language === "ar" ? "←" : "→"}
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
            <AnimatePresence mode="wait">
              <img
                key={currentLang.slides[current].image}
                src={currentLang.slides[current].image}
                alt={currentLang.slides[current].title}
                className="w-full h-full object-cover md:rounded-r-3xl md:rounded-l-none animate-fade-in"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20 md:rounded-r-3xl" />
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default DataWhyUS;
