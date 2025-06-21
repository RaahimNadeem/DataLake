import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    mainTitle: "Why Choose Datalake for Your AI Implementation?",
    slides: [
      {
        image: '/AI/Slide2.jpg',
        title: 'Proven AI Expertise',
        desc: 'Our team brings years of hands-on experience delivering AI solutions across industries. We turn complex challenges into simple, scalable systems that drive real business value.'
      },
      {
        image: '/AI/Slide2.jpg',
        title: 'End-to-End Partnership',
        desc: 'From strategy to deployment and beyond, we guide you at every step. Our collaborative approach ensures your AI journey is seamless, transparent, and tailored to your needs.'
      },
      {
        image: '/AI/Slide2.jpg',
        title: 'Cutting-Edge Technology',
        desc: 'We leverage the latest advancements in AI, machine learning, and data engineering to build future-proof solutions that keep you ahead of the curve.'
      }
    ]
  },
  ar: {
    mainTitle: "لماذا تختار Datalake لتنفيذ الذكاء الاصطناعي الخاص بك؟",
    slides: [
      {
        image: '/AI/Slide2.jpg',
        title: 'خبرة مثبتة في الذكاء الاصطناعي',
        desc: 'يقدم فريقنا سنوات من الخبرة العملية في تقديم حلول الذكاء الاصطناعي عبر الصناعات. نحول التحديات المعقدة إلى أنظمة بسيطة وقابلة للتطوير تدفع قيمة الأعمال الحقيقية.'
      },
      {
        image: '/AI/Slide2.jpg',
        title: 'شراكة شاملة',
        desc: 'من الاستراتيجية إلى النشر وما بعده ، نوجهك في كل خطوة. يضمن نهجنا التعاوني أن تكون رحلة الذكاء الاصطناعي الخاصة بك سلسة وشفافة ومصممة خصيصًا لاحتياجاتك.'
      },
      {
        image: '/AI/Slide2.jpg',
        title: 'أحدث التقنيات',
        desc: 'نستفيد من أحدث التطورات في الذكاء الاصطناعي والتعلم الآلي وهندسة البيانات لبناء حلول مستقبلية تبقيك في الطليعة.'
      }
    ]
  }
};

const AIWhyUS = () => {
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
          {currentLang.mainTitle}
        </h2>
      </RevealAnimation>
      
      <RevealAnimation direction="up" delay={0.4} className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg min-h-[400px] bg-[#d3deeb]">
          {/* Text Left */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 text-[#101424]">
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
                aria-label={language === 'ar' ? 'الشريحة السابقة' : 'Previous slide'}
              >
                &#8592;
              </button>
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === current ? 'bg-[#4a6d8c]' : 'bg-[#eaf1f7]'
                    }`}
                    aria-label={`${language === 'ar' ? 'اذهب للشريحة' : 'Go to slide'} ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#eaf1f7] text-[#4a6d8c] flex items-center justify-center text-2xl font-bold hover:bg-[#dbeafe] transition"
                aria-label={language === 'ar' ? 'الشريحة التالية' : 'Next slide'}
              >
                &#8594;
              </button>
            </div>
          </div>
          {/* Image Right */}
          <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
            <AnimatePresence mode="wait">
              <img
                key={slides[current].image}
                src={slides[current].image}
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

export default AIWhyUS; 