import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Datalake is powered by a team of data experts and industry veterans.",
    description: "Our leadership team brings decades of combined experience in data science, machine learning, and enterprise architecture. We're committed to delivering exceptional value through innovative data solutions, backed by a customer-first approach that ensures your success. At Datalake, we don't just process data – we transform it into a strategic asset for your business.",
  },
  ar: {
    title: "داتاليك مدعومة بفريق من خبراء البيانات والمحترفين في الصناعة.",
    description: "يجلب فريق قيادتنا عقودًا من الخبرة المشتركة في علوم البيانات والتعلم الآلي وهندسة المؤسسات. نحن ملتزمون بتقديم قيمة استثنائية من خلال حلول بيانات مبتكرة، مدعومة بنهج يركز على العميل يضمن نجاحك. في داتاليك، نحن لا نقوم فقط بمعالجة البيانات - نحن نحولها إلى أصل استراتيجي لعملك.",
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
          className="w-full md:w-1/2 bg-[#19232e] flex flex-col justify-center p-8 md:p-16 text-white"
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
         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Philosophy; 