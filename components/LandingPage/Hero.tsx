"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Preloader from '../ui/Preloader';
import heroTranslations from '@/translations/LandingPage/hero.json';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const { language } = useLanguage();
  const currentLang = heroTranslations[language as keyof typeof heroTranslations];
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);
  
  // Scale video from 1 to 1.18 as you scroll through the hero section
  const scale = useTransform(scrollY, [0, 400], [1, 1.18]);
  // Fade out text as you scroll through the hero section
  const opacity = useTransform(scrollY, [0, 250], [1, 0]);
  // Scale content container from 1 to 0.85 as you scroll (opposite of video scale)
  const contentScale = useTransform(scrollY, [0, 400], [1, 0.85]);
  // Scale background elements down to create white space reveal effect
  const backgroundScale = useTransform(scrollY, [0, 400], [1, 0.85]);
  // Increase border radius as you scroll to create rounded edges effect
  const borderRadius = useTransform(scrollY, [0, 400], [0, 48]);

  useEffect(() => {
    // Start preloading video immediately when component mounts
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  useEffect(() => {
    // Intersection Observer to detect when hero is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setHeroVisible(true);
    }, 100);
  };

  // Show preloader until video is loaded or there's an error
  useEffect(() => {
    if (videoLoaded || videoError) {
      // Add a minimum delay to show preloader for better UX
      const timer = setTimeout(() => {
        setShowPreloader(false);
        setTimeout(() => {
          setHeroVisible(true);
        }, 100);
      }, 1500); // Minimum 1.5 seconds for preloader

      return () => clearTimeout(timer);
    }
  }, [videoLoaded, videoError]);

  return (
    <>
      <AnimatePresence>
        {showPreloader && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      <motion.section 
        ref={ref} 
        className={`relative w-full h-screen overflow-hidden flex items-center ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroVisible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Background Video - Always load but only show when ready */}
        <motion.video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/Hero.webm"
          poster="/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto" // Preload the entire video
          style={{ 
            scale: backgroundScale, 
            borderRadius 
          }}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        />
        
        {/* Fallback background for video error */}
        {videoError && (
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 z-0"
            style={{ scale: backgroundScale, borderRadius }}
          />
        )}
        
        {/* Overlay */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"
          style={{ scale: backgroundScale, borderRadius }}
        />
        
        {/* Content */}
        <motion.div
          style={{ opacity, scale: contentScale }}
          className={`relative z-20 flex flex-col items-${language === 'ar' ? 'end' : 'start'} justify-center h-full px-4 md:px-24 max-w-full md:max-w-4xl w-full`}
        >
          <motion.h1
            className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 break-words flex flex-wrap ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
            initial="hidden"
            animate={heroVisible ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {currentLang.heading.map((word, i) => (
              <motion.span
                key={i}
                className={language === 'ar' ? 'ml-2' : 'mr-2'}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: currentLang.heading.length * 0.12 + 0.2, duration: 0.6, ease: 'easeOut' }}
            className="w-full"
          >
            <p className={`text-white text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-full ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {currentLang.description}
            </p>
            <a
              href="/contact"
              className={`inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition border border-white ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
            >
              {currentLang.cta}
              <span className={language === 'ar' ? 'mr-2' : 'ml-2'}>
                {language === 'ar' ? '←' : '→'}
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll below message */}
        <motion.div
          style={{ opacity }}
          className={`absolute bottom-16 z-20 px-4 md:px-24 ${language === 'ar' ? 'left-0' : 'right-0'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
        >
          <div className={`flex flex-col items-center text-white/80 text-sm md:text-base ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            <span className="mb-2">{currentLang.scrollText}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-8 h-12 border-2 border-white/60 rounded-full flex items-center justify-center"
            >
              <div className="w-1 h-2 bg-white/60 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero; 