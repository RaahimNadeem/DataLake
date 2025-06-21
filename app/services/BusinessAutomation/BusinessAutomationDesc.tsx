import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    mainTitle: "Why Automate Your Business?",
    subtitle: "Unlock efficiency, accuracy, and growth.",
    points: [
      {
        title: 'Eliminate Manual Work',
        desc: 'Automate repetitive tasks and processes to free up your team for strategic work. Reduce human error and increase consistency across all operations while saving time and resources.'
      },
      {
        title: 'Boost Productivity',
        desc: 'Streamline workflows and eliminate bottlenecks with intelligent automation. Your team can focus on high-value activities while automated systems handle routine tasks efficiently.'
      },
      {
        title: 'Improve Accuracy',
        desc: 'Reduce errors and ensure consistency with automated processes that follow predefined rules and workflows. Achieve higher quality outputs and better compliance.'
      },
      {
        title: 'Scale Operations',
        desc: 'Handle increased workloads without proportional increases in staff or resources. Automation scales with your business, maintaining efficiency as you grow.'
      }
    ]
  },
  ar: {
    mainTitle: "لماذا تقوم بأتمتة أعمالك؟",
    subtitle: "أطلق العنان للكفاءة والدقة والنمو.",
    points: [
      {
        title: 'التخلص من العمل اليدوي',
        desc: 'أتمتة المهام والعمليات المتكررة لتحرير فريقك للعمل الاستراتيجي. قلل من الخطأ البشري وزد من الاتساق عبر جميع العمليات مع توفير الوقت والموارد.'
      },
      {
        title: 'زيادة الإنتاجية',
        desc: 'قم بتبسيط سير العمل والقضاء على الاختناقات باستخدام الأتمتة الذكية. يمكن لفريقك التركيز على الأنشطة عالية القيمة بينما تتعامل الأنظمة الآلية مع المهام الروتينية بكفاءة.'
      },
      {
        title: 'تحسين الدقة',
        desc: 'قلل الأخطاء واضمن الاتساق مع العمليات الآلية التي تتبع قواعد وسير عمل محددة مسبقًا. حقق مخرجات عالية الجودة وامتثالًا أفضل.'
      },
      {
        title: 'توسيع نطاق العمليات',
        desc: 'تعامل مع أعباء العمل المتزايدة دون زيادات متناسبة في الموظفين أو الموارد. تتوسع الأتمتة مع عملك ، مع الحفاظ على الكفاءة أثناء نموك.'
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

const BusinessAutomationDesc = () => {
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

export default BusinessAutomationDesc; 