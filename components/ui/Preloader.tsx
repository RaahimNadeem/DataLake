"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    loading: 'Loading...',
    preparing: 'Preparing your experience...'
  },
  ar: {
    loading: 'جاري التحميل...',
    preparing: 'نحضر تجربتك...'
  }
};

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const { language } = useLanguage();
  const currentLang = translations[language];
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(currentLang.loading);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Change loading text at different progress levels
    const textInterval = setInterval(() => {
      if (progress > 50) {
        setLoadingText(currentLang.preparing);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [progress, onComplete, currentLang]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#19232e] z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dark overlay for consistency with hero */}
      {/* <div className="absolute inset-0 bg-" /> */}
      
      <div className={`relative z-10 text-center ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Logo or Brand */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          <div className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            DataLake
          </div>
          <div className="text-white/70 text-lg md:text-xl font-medium">
            Enterprise Data Solutions
          </div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="relative w-80 h-1 bg-white/20 rounded-full overflow-hidden mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-white/80 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          key={loadingText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-white/90 text-xl md:text-2xl font-medium mb-4"
        >
          {loadingText}
        </motion.p>

        {/* Progress Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/60 text-sm md:text-base font-medium"
        >
          {Math.round(progress)}%
        </motion.div>

        {/* Animated Dots */}
        <motion.div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader; 