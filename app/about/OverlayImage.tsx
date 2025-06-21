import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    expertise: {
      subtitle: "OUR EXPERTISE",
      title: "Transforming Data into Business Intelligence",
      description: "From data lakes to AI-powered analytics, we help enterprises harness the full potential of their data. Our comprehensive suite of services includes data engineering, machine learning implementation, and custom analytics solutions designed to drive growth and innovation."
    },
    clients: {
      subtitle: "OUR CLIENTS",
      title: "We work with the best"
    }
  },
  ar: {
    expertise: {
      subtitle: "خبرتنا",
      title: "تحويل البيانات إلى ذكاء تجاري",
      description: "من بحيرات البيانات إلى التحليلات المدعومة بالذكاء الاصطناعي، نساعد المؤسسات على استغلال الإمكانات الكاملة لبياناتها. تتضمن مجموعة خدماتنا الشاملة هندسة البيانات، وتنفيذ التعلم الآلي، وحلول تحليلات مخصصة مصممة لدفع النمو والابتكار."
    },
    clients: {
      subtitle: "عملاؤنا",
      title: "نعمل مع الأفضل"
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
          className="relative z-10 px-8 md:px-16 lg:px-32 ml-auto w-full md:w-1/2 flex flex-col items-start"
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
            transition={{ duration: 0.5, delay: 1 }}
            className="text-lg md:text-xl text-white"
          >
            {currentLang.expertise.description}
          </motion.p>
        </motion.div>
      </motion.div>
      {/* Logos Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="w-full py-16 bg-white flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm font-semibold text-gray-700 tracking-widest uppercase mb-4"
        >
          {currentLang.clients.subtitle}
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl md:text-6xl font-bold text-black leading-tight mb-24"
        >
          {currentLang.clients.title}
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12 w-full max-w-6xl px-4 justify-items-center"
        >
          {/* 12 Placeholder logos */}
          <img src="https://logo.clearbit.com/edf.com" alt="EDF" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/monzo.com" alt="Monzo" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/themacallan.com" alt="The Macallan" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/irn-bru.co.uk" alt="Irn Bru" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/vodafone.com" alt="Vodafone" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/vorboss.com" alt="Vorboss" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/kopparberg.com" alt="Kopparberg" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/natwest.com" alt="NatWest" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/mrporter.com" alt="Mr Porter" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/rolex.com" alt="Rolex" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/coop.co.uk" alt="Coop" className="h-16 object-contain" />
          <img src="https://logo.clearbit.com/starlingbank.com" alt="Starling Bank" className="h-16 object-contain" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OverlayImageSection;