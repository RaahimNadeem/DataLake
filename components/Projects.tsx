"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Lenis from 'lenis';

const translations = {
  en: {
    title: "Our Projects",
    subtitle: "Transforming businesses through innovative data solutions",
    seeMore: "See more"
  },
  ar: {
    title: "مشاريعنا",
    subtitle: "تحويل الأعمال من خلال حلول البيانات المبتكرة",
    seeMore: "شاهد المزيد"
  }
};

const projects = [
  {
    title: "Enterprise Analytics Platform",
    description: "Built a comprehensive data analytics platform for a Fortune 500 company, processing over 10TB of data daily and providing real-time insights to 50,000+ users across the organization.",
    src: "gradient-1",
    link: "/projects/analytics-platform",
    color: "#1a2230"
  },
  {
    title: "AI-Powered Customer Insights",
    description: "Developed an AI system that analyzes customer behavior patterns, providing predictive analytics that increased customer retention by 35% and revenue by 28% for a leading e-commerce platform.",
    src: "gradient-2",
    link: "/projects/ai-insights",
    color: "#2d3748"
  },
  {
    title: "Cloud Migration Strategy",
    description: "Orchestrated the complete migration of legacy systems to cloud infrastructure for a healthcare provider, reducing costs by 40% while improving system reliability and security compliance.",
    src: "gradient-3",
    link: "/projects/cloud-migration",
    color: "#4a5568"
  },
  {
    title: "Real-time Data Pipeline",
    description: "Engineered a real-time data processing pipeline handling 1M+ events per second for a fintech startup, enabling instant fraud detection and risk assessment capabilities.",
    src: "gradient-4",
    link: "/projects/data-pipeline",
    color: "#2d3748"
  },
  {
    title: "Predictive Maintenance System",
    description: "Implemented IoT-based predictive maintenance for manufacturing equipment, reducing downtime by 60% and saving millions in operational costs for an industrial manufacturer.",
    src: "gradient-5",
    link: "/projects/predictive-maintenance",
    color: "#1a2230"
  }
];

const ProjectCard = ({ i, title, description, src, link, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <div ref={container} className="relative h-screen w-full">
      <motion.div 
        className="sticky top-0 h-screen w-full flex items-center justify-center"
        style={{
          backgroundColor: color, 
          scale, 
          top: `calc(-5vh + ${i * 25}px)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`text-white ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                {description}
              </p>
              <a
                href={link}
                className={`inline-flex items-center text-white/90 hover:text-white transition-colors duration-300 text-lg font-medium ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
              >
                {currentLang.seeMore}
                <svg 
                  className={`w-6 h-6 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <motion.div 
                className="absolute inset-0"
                style={{ scale: imageScale }}
              >
                {src.startsWith('gradient') ? (
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: src === 'gradient-1' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
                                src === 'gradient-2' ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                                src === 'gradient-3' ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' :
                                src === 'gradient-4' ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' :
                                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                    }}
                  />
                ) : (
                  <Image
                    fill
                    src={src}
                    alt={title}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  const { language } = useLanguage();
  const currentLang = translations[language];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section className="relative bg-[#19232e]">
      {/* Header */}
      <div className="relative z-20 pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {currentLang.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl text-white/70 ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {currentLang.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Projects Cards */}
      <main ref={container} className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <ProjectCard
              key={`project_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default Projects; 