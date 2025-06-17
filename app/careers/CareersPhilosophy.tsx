import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    title: "Our Philosophy",
    description: "At Datalake, we believe in creating an environment where innovation thrives and every team member can reach their full potential. We're not just building AI solutions – we're building a future where technology empowers human creativity and growth.",
    imageAlt: "Team collaboration"
  },
  ar: {
    title: "فلسفتنا",
    description: "في داتاليك، نؤمن بخلق بيئة تزدهر فيها الابتكارات ويمكن لكل عضو في الفريق الوصول إلى إمكاناته الكاملة. نحن لا نبني حلول الذكاء الاصطناعي فقط - نحن نبني مستقبلاً حيث تمكّن التكنولوجيا الإبداع والنمو البشري.",
    imageAlt: "تعاون الفريق"
  }
};

const CareersPhilosophy = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full py-20 px-4 md:px-20 bg-[#f6f8fa]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            {currentLang.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {currentLang.description}
          </p>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: language === 'ar' ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/Career4.jpg" 
              alt={currentLang.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersPhilosophy; 