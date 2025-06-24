import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    mainTitle: "Your Digital Reinvention Journey",
    subtitle: "Transform your business with innovative digital solutions.",
    points: [
      {
        title: 'Digital Strategy',
        desc: 'Develop comprehensive digital transformation roadmaps that align with your business objectives and drive sustainable competitive advantage.'
      },
      {
        title: 'Product Innovation',
        desc: 'Create cutting-edge digital products and services that meet evolving customer needs and position your business at the forefront of innovation.'
      },
      {
        title: 'Customer Experience',
        desc: 'Design and deliver exceptional digital experiences that engage customers, build loyalty, and drive measurable business outcomes.'
      },
      {
        title: 'Digital Capabilities',
        desc: 'Build scalable digital infrastructure and capabilities that enable rapid growth, operational efficiency, and continuous innovation.'
      }
    ]
  },
  ar: {
    mainTitle: "رحلة إعادة اختراعك الرقمي",
    subtitle: "حول عملك باستخدام الحلول الرقمية المبتكرة.",
    points: [
      {
        title: 'الاستراتيجية الرقمية',
        desc: 'طور خرائط طريق شاملة للتحول الرقمي تتوافق مع أهداف عملك وتدفع الميزة التنافسية المستدامة.'
      },
      {
        title: 'ابتكار المنتجات',
        desc: 'أنشئ منتجات وخدمات رقمية متطورة تلبي احتياجات العملاء المتطورة وتضع عملك في طليعة الابتكار.'
      },
      {
        title: 'تجربة العملاء',
        desc: 'صمم وقدم تجارب رقمية استثنائية تجذب العملاء وتبني الولاء وتدفع النتائج التجارية القابلة للقياس.'
      },
      {
        title: 'القدرات الرقمية',
        desc: 'ابنِ البنية التحتية الرقمية والقدرات القابلة للتطوير التي تمكن النمو السريع والكفاءة التشغيلية والابتكار المستمر.'
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

const DigitalDesc = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} w-full flex flex-col md:flex-row bg-white font-sans min-h-[120vh]`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
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

export default DigitalDesc;