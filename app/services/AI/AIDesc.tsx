import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    mainTitle: "Why Use AI in Your Business?",
    subtitle: "Unlock speed, insight, and growth—effortlessly.",
    points: [
      {
        title: 'Automate Smarter',
        desc: 'Empower your team to focus on creative and strategic work by letting AI take care of repetitive, time-consuming tasks. From data entry to scheduling and customer support, automation streamlines your operations and reduces human error, saving you time and money.'
      },
      {
        title: 'See the Future',
        desc: 'Leverage advanced AI analytics to uncover hidden patterns, forecast trends, and anticipate market changes before they happen. Make proactive, data-driven decisions with confidence, and stay ahead of your competition in a rapidly evolving business landscape.'
      },
      {
        title: 'Delight Customers',
        desc: 'Deliver hyper-personalized experiences at scale. AI enables you to understand customer needs, predict preferences, and provide instant, tailored recommendations and support—building loyalty and driving satisfaction with every interaction.'
      },
      {
        title: 'Grow Without Limits',
        desc: 'Scale your business seamlessly without a linear increase in resources or costs. AI optimizes workflows, adapts to new challenges, and helps you expand into new markets, all while maintaining efficiency and quality as you grow.'
      }
    ]
  },
  ar: {
    mainTitle: "لماذا تستخدم الذكاء الاصطناعي في عملك؟",
    subtitle: "أطلق العنان للسرعة والبصيرة والنمو - دون عناء.",
    points: [
      {
        title: 'أتمتة أذكى',
        desc: 'مكّن فريقك من التركيز على العمل الإبداعي والاستراتيجي من خلال السماح للذكاء الاصطناعي بالاهتمام بالمهام المتكررة والمستهلكة للوقت. من إدخال البيانات إلى الجدولة ودعم العملاء ، تعمل الأتمتة على تبسيط عملياتك وتقليل الخطأ البشري ، مما يوفر لك الوقت والمال.'
      },
      {
        title: 'رؤية المستقبل',
        desc: 'استفد من تحليلات الذكاء الاصطناعي المتقدمة للكشف عن الأنماط الخفية ، والتنبؤ بالاتجاهات ، وتوقع تغييرات السوق قبل حدوثها. اتخذ قرارات استباقية قائمة على البيانات بثقة ، وابق في صدارة منافسيك في مشهد أعمال سريع التطور.'
      },
      {
        title: 'إسعاد العملاء',
        desc: 'قدّم تجارب مخصصة للغاية على نطاق واسع. يمكّنك الذكاء الاصطناعي من فهم احتياجات العملاء ، والتنبؤ بالتفضيلات ، وتقديم توصيات ودعم فوري ومخصص - بناء الولاء وزيادة الرضا مع كل تفاعل.'
      },
      {
        title: 'النمو بلا حدود',
        desc: 'وسّع نطاق عملك بسلاسة دون زيادة خطية في الموارد أو التكاليف. يعمل الذكاء الاصطناعي على تحسين سير العمل ، والتكيف مع التحديات الجديدة ، ويساعدك على التوسع في أسواق جديدة ، كل ذلك مع الحفاظ على الكفاءة والجودة أثناء نموك.'
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

const AIDesc = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className={`w-full flex flex-col rounded-t-3xl md:flex-row bg-white font-sans min-h-[120vh] ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
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

export default AIDesc;
