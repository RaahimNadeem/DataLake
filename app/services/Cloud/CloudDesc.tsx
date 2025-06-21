import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    mainTitle: "Why Choose Cloud Solutions?",
    subtitle: "Unlock agility, security, and cost efficiency.",
    points: [
      {
        title: 'Scale Seamlessly',
        desc: 'Grow your infrastructure automatically to meet demand without the complexity of traditional scaling. Our cloud solutions adapt to your business needs, ensuring optimal performance during peak times and cost efficiency during quiet periods.'
      },
      {
        title: 'Secure by Design',
        desc: 'Protect your data with enterprise-grade security built into every layer of your cloud infrastructure. From encryption at rest and in transit to advanced threat detection, we ensure your applications and data remain secure and compliant.'
      },
      {
        title: 'Reduce Complexity',
        desc: 'Simplify your IT operations with managed cloud services that handle the heavy lifting. Focus on your core business while we manage infrastructure, updates, security, and performance optimization—allowing you to innovate faster.'
      },
      {
        title: 'Drive Innovation',
        desc: 'Accelerate your digital transformation with modern cloud-native technologies. Deploy applications faster, experiment with new features, and leverage cutting-edge services like serverless computing and container orchestration.'
      }
    ]
  },
  ar: {
    mainTitle: "لماذا تختار حلول الحوسبة السحابية؟",
    subtitle: "أطلق العنان للرشاقة والأمان وكفاءة التكلفة.",
    points: [
      {
        title: 'التطوير السلس',
        desc: 'نمّ بنيتك التحتية تلقائيًا لتلبية الطلب دون تعقيد التطوير التقليدي. تتكيف حلولنا السحابية مع احتياجات عملك، مما يضمن الأداء الأمثل خلال أوقات الذروة وكفاءة التكلفة خلال الفترات الهادئة.'
      },
      {
        title: 'آمن بالتصميم',
        desc: 'احمِ بياناتك بأمان على مستوى المؤسسات مدمج في كل طبقة من بنيتك التحتية السحابية. من التشفير في حالة الراحة وفي النقل إلى كشف التهديدات المتقدم، نضمن بقاء تطبيقاتك وبياناتك آمنة ومتوافقة.'
      },
      {
        title: 'تقليل التعقيد',
        desc: 'بسّط عمليات تكنولوجيا المعلومات الخاصة بك من خلال الخدمات السحابية المدارة التي تتعامل مع العمل الشاق. ركز على عملك الأساسي بينما ندير البنية التحتية والتحديثات والأمان وتحسين الأداء - مما يتيح لك الابتكار بشكل أسرع.'
      },
      {
        title: 'دفع الابتكار',
        desc: 'عجّل تحولك الرقمي من خلال تقنيات سحابية حديثة. انشر التطبيقات بشكل أسرع، وجرب الميزات الجديدة، واستفد من الخدمات المتطورة مثل الحوسبة بدون خادم وتنسيق الحاويات.'
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

const CloudDesc = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full flex flex-col md:flex-row bg-white font-sans min-h-[120vh]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
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

export default CloudDesc; 