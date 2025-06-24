import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    mainTitle: "Why Choose Datalake for Your Cloud Solutions?",
    slides: [
      {
        image: '/services/Cloud2.jpg',
        title: 'Cloud Infrastructure Experts',
        desc: 'Our certified cloud architects and engineers have extensive experience designing and implementing scalable cloud solutions. We ensure your infrastructure is optimized for performance, security, and cost efficiency.'
      },
      {
        image: '/services/Cloud2.jpg',
        title: 'Comprehensive Cloud Strategy',
        desc: 'We develop holistic cloud strategies that align with your business objectives. From migration planning to ongoing optimization, we guide your cloud journey every step of the way.'
      },
      {
        image: '/services/Cloud2.jpg',
        title: 'Multi-Cloud Excellence',
        desc: 'Leverage the best of multiple cloud providers with our multi-cloud expertise. We help you avoid vendor lock-in while optimizing costs and performance across different platforms.'
      }
    ]
  },
  ar: {
    mainTitle: "لماذا تختار Datalake لحلولك السحابية؟",
    slides: [
      {
        image: '/services/Cloud2.jpg',
        title: 'خبراء البنية التحتية السحابية',
        desc: 'يتمتع مهندسو ومصممو السحابة المعتمدون لدينا بخبرة واسعة في تصميم وتنفيذ الحلول السحابية القابلة للتطوير. نضمن تحسين بنيتك التحتية للأداء والأمان وكفاءة التكلفة.'
      },
      {
        image: '/services/Cloud2.jpg',
        title: 'استراتيجية سحابية شاملة',
        desc: 'نطور استراتيجيات سحابية شاملة تتماشى مع أهداف عملك. من تخطيط الهجرة إلى التحسين المستمر، نوجه رحلتك السحابية في كل خطوة.'
      },
      {
        image: '/services/Cloud2.jpg',
        title: 'التميز متعدد السحابة',
        desc: 'استفد من أفضل مزودي السحابة المتعددين من خلال خبرتنا في السحابة المتعددة. نساعدك على تجنب الاعتماد على مورد واحد مع تحسين التكاليف والأداء عبر منصات مختلفة.'
      }
    ]
  }
};

const CloudWhyUS = () => {
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();
  const currentLang = translations[language];
  const slides = currentLang.slides;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} w-full flex flex-col items-center py-12 lg:py-24 px-2`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
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

export default CloudWhyUS; 