import React from 'react';
import { FaSearch, FaLightbulb, FaCogs, FaRocket, FaHandsHelping } from 'react-icons/fa';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Our Digital Product Development Process",
    steps: [
      {
        title: 'Discovery',
        desc: 'Research market opportunities, understand user needs, and define product requirements and success metrics.'
      },
      {
        title: 'Design',
        desc: 'Create user-centered designs, wireframes, and prototypes that validate concepts and guide development.'
      },
      {
        title: 'Development',
        desc: 'Build your digital product using modern technologies and best practices for performance, security, and scalability.'
      },
      {
        title: 'Testing',
        desc: 'Rigorous testing ensures quality, usability, and performance across all devices and platforms.'
      },
      {
        title: 'Launch',
        desc: 'Deploy your product to market with comprehensive launch support, monitoring, and optimization strategies.'
      }
    ]
  },
  ar: {
    title: "عملية تطوير المنتجات الرقمية لدينا",
    steps: [
      {
        title: 'الاكتشاف',
        desc: 'البحث عن فرص السوق، فهم احتياجات المستخدمين، وتحديد متطلبات المنتج ومقاييس النجاح.'
      },
      {
        title: 'التصميم',
        desc: 'إنشاء تصاميم متمحورة حول المستخدم، وأطر سلكية، ونماذج أولية تتحقق من المفاهيم وتوجه التطوير.'
      },
      {
        title: 'التطوير',
        desc: 'بناء منتجك الرقمي باستخدام التقنيات الحديثة وأفضل الممارسات للأداء والأمان والقابلية للتطوير.'
      },
      {
        title: 'الاختبار',
        desc: 'الاختبار الصارم يضمن الجودة وسهولة الاستخدام والأداء عبر جميع الأجهزة والمنصات.'
      },
      {
        title: 'الإطلاق',
        desc: 'نشر منتجك في السوق بدعم شامل للإطلاق والمراقبة واستراتيجيات التحسين.'
      }
    ]
  }
};

const DigitalProcess = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];
  const steps = currentLang.steps;

  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <RevealAnimation direction="up" delay={0.2}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 text-[#101424]">
          {currentLang.title}
        </h2>
      </RevealAnimation>
      <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-300 via-blue-100 to-blue-300 z-0" style={{ transform: 'translateX(-50%)' }} />
        <div className="flex flex-col gap-16 w-full z-10">
          {steps.map((step, idx) => (
            <RevealAnimation
              key={step.title}
              direction={idx % 2 === 0 ? "right" : "left"}
              delay={0.2 * idx}
              className={`flex items-center w-full ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} style={{ minWidth: 0 }}>
                {/* Icon in circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-blue-200 z-10">
                  {React.createElement([FaSearch, FaLightbulb, FaCogs, FaRocket, FaHandsHelping][idx], { size: 24, className: "text-blue-700" })}
                </div>
                {/* Connecting arrow */}
                {idx < steps.length - 1 && (
                  <div className={`absolute ${idx % 2 === 0 ? 'right-[-60px]' : 'left-[-60px]'} top-1/2 transform -translate-y-1/2`}> 
                    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12 Q30 0 60 12 Q30 24 0 12" stroke="#60a5fa" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                )}
                {/* Step content */}
                <div className={`ml-8 mr-8 max-w-xs bg-[#fafafb] rounded-2xl shadow-md px-6 py-4 ${idx % 2 === 0 ? '' : 'order-first'}`}> 
                  <h3 className="text-xl font-bold mb-2 text-[#101424]">{step.title}</h3>
                  <p className="text-md text-[#4a6d8c]">{step.desc}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProcess;