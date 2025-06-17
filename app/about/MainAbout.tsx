import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    subtitle: "ABOUT DATALAKE",
    title: "Intelligent Data\nfor Smart Decisions",
    description: "We are a leading data analytics company specializing in enterprise-grade data solutions, AI-driven insights, and scalable data infrastructure. Our team of experts helps organizations transform their data into actionable intelligence, driving innovation and growth in the digital age."
  },
  ar: {
    subtitle: "عن داتاليك",
    title: "بيانات ذكية\nلقرارات ذكية",
    description: "نحن شركة رائدة في تحليل البيانات متخصصة في حلول البيانات على مستوى المؤسسات، والرؤى المدعومة بالذكاء الاصطناعي، وبنية البيانات التحتية القابلة للتطوير. يساعد فريقنا من الخبراء المؤسسات على تحويل بياناتها إلى ذكاء قابل للتنفيذ، مما يدفع الابتكار والنمو في العصر الرقمي."
  }
};

const MainAbout = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full min-h-screen bg-[#f5f6f7] flex pt-12 items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-24 px-4 md:pl-8 md:pr-0 w-full">
        {/* Left: Text */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full md:w-1/2 flex flex-col justify-center items-start"
        >
          <div className="mb-6 w-full max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm font-semibold text-gray-700 tracking-widest uppercase mb-6"
            >
              {currentLang.subtitle}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-8xl font-bold text-black leading-tight mb-8"
            >
              {currentLang.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-700 max-w-xl"
            >
              {currentLang.description}
            </motion.p>
          </div>
        </motion.div>
        {/* Right: Video */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[50vw] h-[340px] md:h-[520px] flex flex-col items-center md:items-end md:pr-0"
        >
          <video
            src="/About.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[340px] md:h-[520px] object-cover rounded-l-3xl md:rounded-l-3xl md:rounded-r-none md:rounded-t-none md:rounded-b-none shadow-none"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MainAbout; 