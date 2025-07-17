import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    mainTitle: "Why Invest in Cybersecurity?",
    subtitle: "Protect your business, data, and reputation.",
    points: [
      {
        title: 'Protect Critical Assets',
        desc: 'Safeguard your sensitive data, intellectual property, and customer information with enterprise-grade security measures that adapt to evolving threats.'
      },
      {
        title: 'Compliance & Trust',
        desc: 'Meet regulatory requirements and build customer trust with comprehensive security frameworks that demonstrate your commitment to data protection.'
      },
      {
        title: 'Threat Detection',
        desc: 'Identify and respond to security threats in real-time with advanced monitoring and detection systems that keep you ahead of cyber attacks.'
      },
      {
        title: 'Business Continuity',
        desc: 'Ensure your business operations continue uninterrupted with robust incident response plans and disaster recovery strategies.'
      }
    ]
  },
  ar: {
    mainTitle: "لماذا الاستثمار في الأمن السيبراني؟",
    subtitle: "قم بحماية عملك وبياناتك وسمعتك.",
    points: [
      {
        title: 'حماية الأصول الحيوية',
        desc: 'قم بحماية بياناتك الحساسة والملكية الفكرية ومعلومات العملاء من خلال تدابير أمنية على مستوى المؤسسات تتكيف مع التهديدات المتطورة.'
      },
      {
        title: 'الامتثال والثقة',
        desc: 'تلبية المتطلبات التنظيمية وبناء ثقة العملاء من خلال أطر أمنية شاملة توضح التزامك بحماية البيانات.'
      },
      {
        title: 'كشف التهديدات',
        desc: 'تحديد التهديدات الأمنية والاستجابة لها في الوقت الفعلي من خلال أنظمة المراقبة والكشف المتقدمة التي تبقيك في صدارة الهجمات الإلكترونية.'
      },
      {
        title: 'استمرارية الأعمال',
        desc: 'ضمان استمرار عمليات عملك دون انقطاع من خلال خطط الاستجابة للحوادث القوية واستراتيجيات التعافي من الكوارث.'
      }
    ]
  }
};

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

const CyberDesc = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} w-full flex flex-col md:flex-row bg-white font-sans min-h-[120vh]`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Sticky Left Column */}
      <div className="md:w-1/2 flex flex-col justify-start items-start px-4 md:pl-24 pt-16 md:pt-32 sticky top-0 h-fit md:h-screen z-10">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-6xl font-extrabold text-black leading-tight mb-3 text-left max-w-lg">
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
      <div className="md:w-1/2 flex flex-col gap-40 px-4 md:pr-24 py-16 md:py-32">
        {currentLang.points.map((point, index) => (
          <AnimatedPoint key={point.title} title={point.title} desc={point.desc} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CyberDesc; 