import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import careersPhilosophyTranslations from '@/translations/CareersPage/careersPhilosophy.json';

const CareersPhilosophy = () => {
  const { language } = useLanguage();
  const currentLang = careersPhilosophyTranslations[language as keyof typeof careersPhilosophyTranslations];

  return (
    <section className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} w-full py-20 px-4 md:px-20 bg-[#f6f8fa]`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="Careers/Careers3.jpg" 
              alt={currentLang.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: language === 'ar' ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-[#101424]">
            {currentLang.title}
          </h2>
          <p className="text-xl text-[#4a6d8c] font-semibold mb-8">
            {currentLang.subtitle}
          </p>
          <ul className="space-y-4">
            {currentLang.benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 text-lg text-gray-700"
              >
                <div className="w-2 h-2 bg-[#4a6d8c] rounded-full mt-3 flex-shrink-0"></div>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersPhilosophy; 