import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Why Choose Datalake for Sustainability?",
    slides: [
      {
        title: 'Sustainability Experts',
        desc: 'Our team brings deep expertise in ESG frameworks, carbon accounting, and sustainable business practices across industries.'
      },
      {
        title: 'Holistic Approach',
        desc: 'We integrate sustainability into every aspect of your business strategy, from operations to product development and stakeholder engagement.'
      },
      {
        title: 'Measurable Impact',
        desc: 'We help you set meaningful sustainability goals, track progress, and communicate your impact with transparent reporting and analytics.'
      }
    ]
  },
  ar: {
    title: "لماذا تختار Datalake للاستدامة؟",
    slides: [
      {
        title: 'خبراء الاستدامة',
        desc: 'يجلب فريقنا خبرة عميقة في أطر ESG، والمحاسبة الكربونية، والممارسات التجارية المستدامة عبر الصناعات.'
      },
      {
        title: 'النهج الشامل',
        desc: 'ندمج الاستدامة في كل جانب من جوانب استراتيجية عملك، من العمليات إلى تطوير المنتجات والمشاركة مع أصحاب المصلحة.'
      },
      {
        title: 'التأثير القابل للقياس',
        desc: 'نساعدك في تحديد أهداف الاستدامة الهادفة، وتتبع التقدم، والتواصل حول تأثيرك مع التقارير والتحليلات الشفافة.'
      }
    ]
  }
};

const SustainabilityWhyUS = () => {
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();
  const currentLang = translations[language];
  const slides = currentLang.slides;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full flex flex-col items-center py-12 lg:py-24 px-2" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Section Heading */}
      <RevealAnimation direction="up" delay={0.2}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#101424]">
          {currentLang.title}
        </h2>
      </RevealAnimation>
      
      <RevealAnimation direction="up" delay={0.4} className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg min-h-[400px] bg-[#d3deeb]">
          {/* Text Left */}
          <div className={`w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 text-[#101424] ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <AnimatePresence mode="wait">
              <div
                key={slides[current].title}
                className="animate-fade-in"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {slides[current].title}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-[#4a6d8c]">
                  {slides[current].desc}
                </p>
              </div>
            </AnimatePresence>
            {/* Controls */}
            <div className="flex gap-4 items-center mt-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#eaf1f7] text-[#4a6d8c] flex items-center justify-center text-2xl font-bold hover:bg-[#dbeafe] transition"
                aria-label="Previous slide"
              >
                {language === 'ar' ? '→' : '←'}
              </button>
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === current ? 'bg-[#4a6d8c]' : 'bg-[#eaf1f7]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#eaf1f7] text-[#4a6d8c] flex items-center justify-center text-2xl font-bold hover:bg-[#dbeafe] transition"
                aria-label="Next slide"
              >
                {language === 'ar' ? '←' : '→'}
              </button>
            </div>
          </div>
          {/* Image Right */}
          <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
            <AnimatePresence mode="wait">
              <img
                key={slides[current].title}
                src="/services/Sustainable2.jpg"
                alt={slides[current].title}
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

export default SustainabilityWhyUS;