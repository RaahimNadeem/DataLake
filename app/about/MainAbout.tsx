import React, { useState, useEffect } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/AboutUs/Slide1.jpg",
    "/AboutUs/Slide2.jpg", 
    "/AboutUs/Slide3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full min-h-screen flex pt-12 items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-24 px-4 md:pl-8 md:pr-0 w-full">
        {/* Left: Text */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full md:w-1/2 flex flex-col justify-center items-start"
        >
          <div className="mb-6 w-full max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm font-semibold text-gray-700 tracking-widest uppercase mb-6"
            >
              {currentLang.subtitle}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-8xl font-bold text-black leading-tight mb-8"
            >
              {currentLang.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-700 max-w-xl"
            >
              {currentLang.description}
            </motion.p>
          </div>
        </motion.div>
        {/* Right: Slideshow */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[50vw] h-[340px] md:h-[520px] flex flex-col items-center md:items-start md:pt-20 relative"
        >
          <div className="w-full h-[340px] md:h-[520px] relative overflow-hidden rounded-l-3xl md:rounded-l-3xl md:rounded-r-none md:rounded-t-none md:rounded-b-none">
            {slides.map((slide, index) => (
              <motion.img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.05
                }}
                transition={{ 
                  opacity: { duration: 0.8, ease: "easeInOut" },
                  scale: { duration: 0.8, ease: "easeInOut" }
                }}
              />
            ))}
            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainAbout; 