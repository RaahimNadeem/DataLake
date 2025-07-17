import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import missionTranslations from '@/translations/AboutPage/mission.json';

const Mission = () => {
  const { language } = useLanguage();
  const currentLang = missionTranslations[language as keyof typeof missionTranslations];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
    }
  }, []);

  return (
    <section className="w-full min-h-[70vh] flex justify-center items-center py-16 lg:py-24 bg-[#edf4f9]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 md:px-16 w-full">
        <div className="w-full flex items-center gap-12 lg:gap-24">
          {/* Left: Video Animation */}
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 hidden lg:flex justify-center"
          >
            <div className="relative w-96 h-96 rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                onEnded={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                  }
                }}
                className="w-full h-full object-cover"
              >
                <source src="/AboutUs/Animation.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex-1 flex justify-end ${language === 'ar' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-2xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-sm ${language === 'ar' ? 'font-arabic' : 'font-sans'} font-semibold  text-gray-700  tracking-widest uppercase mb-6`}
              >
                {currentLang.subtitle}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8 ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
              >
                {currentLang.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`text-xl md:text-2xl text-gray-700 mb-6 ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
              >
                {currentLang.description}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className={`text-lg md:text-xl text-gray-600 ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
              >
                {currentLang.description2}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 