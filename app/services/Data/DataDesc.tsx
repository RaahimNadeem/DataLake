import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    mainTitle: 'Making Data Your Business Driver',
    subtitle: 'Transform your organization with data-driven insights.',
    dataPoints: [
      {
        title: 'Data Strategy',
        desc: 'Develop a comprehensive data-led business model that maximizes value creation and ensures continued competitiveness in your market.'
      },
      {
        title: 'Business Intelligence',
        desc: 'Enable your business users with actionable insights through advanced analytics, dashboards, and reporting solutions.'
      },
      {
        title: 'Data Foundation',
        desc: 'Build strong data foundations with scalable infrastructure, data governance, and quality management systems.'
      },
      {
        title: 'Predictive Analytics',
        desc: 'Leverage machine learning and AI to predict trends, identify opportunities, and make data-driven decisions with confidence.'
      }
    ]
  },
  ar: {
    mainTitle: 'جعل البيانات محرك عملك',
    subtitle: 'حول مؤسستك بالرؤى القائمة على البيانات.',
    dataPoints: [
      {
        title: 'استراتيجية البيانات',
        desc: 'طور نموذج عمل شامل قائم على البيانات يزيد من خلق القيمة ويضمن الاستمرارية في التنافسية في سوقك.'
      },
      {
        title: 'ذكاء الأعمال',
        desc: 'مكن مستخدمي عملك من الرؤى القابلة للتنفيذ من خلال التحليلات المتقدمة واللوحات الإعلامية وحلول التقارير.'
      },
      {
        title: 'أساس البيانات',
        desc: 'ابن أساسات بيانات قوية مع بنية تحتية قابلة للتطوير وأطر حوكمة البيانات وأنظمة إدارة الجودة.'
      },
      {
        title: 'التحليلات التنبؤية',
        desc: 'استفد من التعلم الآلي والذكاء الاصطناعي للتنبؤ بالاتجاهات وتحديد الفرص واتخاذ قرارات قائمة على البيانات بثقة.'
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

const DataDesc = () => {
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
        {currentLang.dataPoints.map((point, index) => (
          <AnimatedPoint key={point.title} title={point.title} desc={point.desc} index={index} />
        ))}
      </div>
    </section>
  );
};

export default DataDesc; 