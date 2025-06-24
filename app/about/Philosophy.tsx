import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Empowering Organizations Through Strategic Technology Consulting",
    description: "At Datalake, we believe that successful digital transformation requires more than just technology implementation.",
    description2: "Our approach combines deep industry knowledge with cutting-edge technical expertise to deliver comprehensive solutions that drive measurable business outcomes.",
    description3: "Since our founding in Paris, we've built a reputation for excellence in data management, digital strategy, and technological innovation, helping organizations navigate the complexities of the digital landscape with confidence and precision.",
  },
  ar: {
    title: "تمكين المؤسسات من خلال الاستشارات التقنية الاستراتيجية",
    description: "في داتاليك، نؤمن بأن التحول الرقمي الناجح يتطلب أكثر من مجرد تنفيذ التكنولوجيا.",
    description2: "يجمع نهجنا بين المعرفة العميقة بالصناعة والخبرة التقنية المتطورة لتقديم حلول شاملة تدفع النتائج التجارية القابلة للقياس.",
    description3: "منذ تأسيسنا في باريس، بنينا سمعة في التميز في إدارة البيانات والاستراتيجية الرقمية والابتكار التكنولوجي، مما يساعد المؤسسات على التنقل في تعقيدات المشهد الرقمي بثقة ودقة.",
  }
};

const Philosophy = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full flex justify-center items-center py-12 lg:py-36 px-2" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg min-h-[480px]"
      >
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full md:w-1/2 h-[300px] md:h-auto"
        >
          <img
            src="/AboutUsPhilosophy.jpg"
            alt={language === 'ar' ? "الفلسفة" : "Philosophy"}
            className={`w-full h-full object-cover ${language === 'ar' ? 'md:rounded-r-3xl md:rounded-l-none' : 'md:rounded-l-3xl md:rounded-r-none'}`}
          />
          <div className={`absolute inset-0 bg-black/30 ${language === 'ar' ? 'md:rounded-r-3xl' : 'md:rounded-l-3xl'}`} />
        </motion.div>
        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`w-full md:w-1/2 bg-[#19232e] flex flex-col justify-center p-8 md:p-16 text-white ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
          >
            {currentLang.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl mb-8 text-gray-200"
          >
            {currentLang.description}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-lg md:text-xl mb-8 text-gray-200"
          >
            {currentLang.description2}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-lg md:text-xl mb-8 text-gray-200"
          >
            {currentLang.description3}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Philosophy; 