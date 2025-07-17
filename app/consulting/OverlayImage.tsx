import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    expertise: {
      subtitle: "OUR EXPERTISE",
      title: "Comprehensive Technology Consulting Services",
      description2: "Our expertise spans data strategy, digital infrastructure, cloud solutions, and technological innovation, helping organizations navigate the digital landscape with confidence and achieve sustainable competitive advantages."
    },
    clients: {
      subtitle: "TRUSTED BY LEADING ORGANIZATIONS",
      title: "Partnering with Industry Leaders"
    }
  },
  ar: {
    expertise: {
      subtitle: "خبرتنا",
      title: "خدمات استشارات تقنية شاملة",
      description2: "تمتد خبرتنا لتشمل استراتيجية البيانات والبنية التحتية الرقمية وحلول السحابة والابتكار التكنولوجي، مما يساعد المؤسسات على التنقل في المشهد الرقمي بثقة وتحقيق مزايا تنافسية مستدامة."
    },
    clients: {
      subtitle: "موثوق به من قبل المؤسسات الرائدة",
      title: "شراكة مع قادة الصناعة"
    }
  }
};

const OverlayImageSection = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="relative w-full my-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[70vh] overflow-hidden flex items-center"
      >
        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="AboutUs/Banner.jpg"
          alt={language === 'ar' ? "قسم التراكب" : "Banner"}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-[#19232e]/90" />
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`relative z-10 px-8 md:px-16 lg:px-32 ml-auto w-full md:w-1/2 flex flex-col items-start ${language === 'ar' ? 'font-arabic' : 'font-sans'}` }
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm font-semibold text-gray-200 tracking-widest uppercase mb-6"
          >
            {currentLang.expertise.subtitle}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-3xl md:text-6xl font-bold text-white leading-tight mb-8"
          >
            {currentLang.expertise.title}
          </motion.h2>
         
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-lg md:text-xl text-white"
          >
            {currentLang.expertise.description2}
          </motion.p>
        </motion.div>
      </motion.div>
    
    </section>
  );
};

export default OverlayImageSection;