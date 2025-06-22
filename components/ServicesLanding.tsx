import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    header: {
      subtitle: "OUR SERVICES",
      title: "Empowering Your Data\nWith Enterprise Solutions"
    },
    services: [
      {
        title: "AI Services",
        description: "Unlock insights and automation with advanced AI.",
        image: "/AI/AI-2.jpg",
        link: "/services/AI",
      },
      {
        title: "Business Automation",
        description: "Streamline operations and boost productivity.",
        image: "/services/BusinessAutomation.jpg",
        link: "/services/BusinessAutomation",
      },
      {
        title: "Cloud Services",
        description: "Scalable, secure cloud solutions for your business.",
        image: "/services/Cloud.jpg",
        link: "/services/Cloud",
      },
      {
        title: "Cybersecurity",
        description: "Protect your data and systems with robust security.",
        image: "/services/Cyber.jpg",
        link: "/services/Cyber",
      },
      {
        title: "Data-driven Intelligence",
        description: "Harness the power of your data for better decisions.",
        image: "/services/Data.jpg",
        link: "/services/Data",
      },
      {
        title: "Digital Business & Products",
        description: "Transform ideas into digital products and services.",
        image: "/services/Digital.jpg",
        link: "/services/DigitalBusinessProducts",
      },
      {
        title: "Sustainability",
        description: "Drive growth with sustainable business practices.",
        image: "/services/Sustainable.jpg",
        link: "/services/Sustainability",
      },
    ]
  },
  ar: {
    header: {
      subtitle: "خدماتنا",
      title: "تمكين بياناتك\nبحلول المؤسسات المتطورة"
    },
    services: [
      {
        title: "خدمات الذكاء الاصطناعي",
        description: "اكتشف الرؤى والأتمتة مع الذكاء الاصطناعي المتقدم.",
        image: "/services/AI.jpg",
        link: "/services/AI",
      },
      {
        title: "أتمتة الأعمال",
        description: "تبسيط العمليات وتعزيز الإنتاجية.",
        image: "/services/BusinessAutomation.jpg",
        link: "/services/BusinessAutomation",
      },
      {
        title: "خدمات السحابة",
        description: "حلول سحابية قابلة للتطوير وآمنة لعملك.",
        image: "/services/Cloud.jpg",
        link: "/services/Cloud",
      },
      {
        title: "الأمن السيبراني",
        description: "حماية بياناتك وأنظمتك بأمان قوي.",
        image: "/services/Cyber.jpg",
        link: "/services/Cyber",
      },
      {
        title: "الذكاء القائم على البيانات",
        description: "استفد من قوة بياناتك لاتخاذ قرارات أفضل.",
        image: "/services/Data.jpg",
        link: "/services/Data",
      },
      {
        title: "الأعمال الرقمية والمنتجات",
        description: "تحويل الأفكار إلى منتجات وخدمات رقمية.",
        image: "/services/Digital.jpg",
        link: "/services/DigitalBusinessProducts",
      },
      {
        title: "الاستدامة",
        description: "دفع النمو بممارسات أعمال مستدامة.",
        image: "/services/Sustainable.jpg",
        link: "/services/Sustainability",
      },
    ]
  }
};

function toKebabCase(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
}

const ServicesLanding = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section id="services" className="w-full min-h-[70vh]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <motion.div
        ref={ref}
        initial={{ x: language === 'ar' ? 60 : -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 500, damping: 40, duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8 pt-4 md:pt-16 pb-2 md:pb-12 max-w-[1800px] mx-auto mb-4 md:mb-24"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-semibold text-gray-700 mb-4 tracking-widest uppercase"
          >
            {currentLang.header.subtitle}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-6xl font-bold text-black leading-tight max-w-3xl whitespace-pre-line"
          >
            {currentLang.header.title}
          </motion.h1>
        </div>
      </motion.div>
      {/* Services Grid */}
      <div className="w-full">
        {/* Mobile: horizontal scrollable carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex md:hidden gap-4 overflow-x-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-300 max-w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {currentLang.services.map((service, idx) => (
            <Link
              key={service.title}
              href={`/services/${encodeURIComponent(service.title)}`}
              className="relative group cursor-pointer overflow-hidden min-w-[80vw] max-w-[90vw] h-[60vw] max-h-[400px] rounded-xl flex-shrink-0"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />
              {/* Title */}
              <div className="absolute top-6 left-6 right-6 z-10">
                <h2 className="text-white text-xl font-bold drop-shadow-lg">{service.title}</h2>
              </div>
              {/* Description (on hover) */}
              <div className="absolute left-6 right-6 bottom-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-base font-normal drop-shadow-lg">{service.description}</p>
              </div>
            </Link>
          ))}
        </motion.div>
        {/* Desktop: expanding flex grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="hidden md:flex w-full h-[80vw] min-h-[300px] max-h-[500px]"
        >
          {currentLang.services.map((service, idx) => (
            <Link
              key={service.title}
              href={`${service.link}`}
              className={`relative group cursor-pointer overflow-hidden transition-all duration-300 flex-1 ${
                hovered === idx ? 'flex-[3]' : hovered === null ? 'flex-1' : 'flex-[0.7]'
              }`}
              style={{ minWidth: 0, willChange: 'transform, opacity' }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Overlay */}
              <div className={`absolute inset-0 transition-colors duration-500 ${hovered === idx ? 'bg-black/60' : 'bg-black/20'}`} />
              {/* Title */}
              <div className="absolute top-6 left-6 right-6 z-10">
                <h2 className="text-white text-xl font-bold drop-shadow-lg">{service.title}</h2>
              </div>
              {/* Description (on hover) */}
              <div className={`absolute left-6 right-6 bottom-6 z-10 transition-opacity duration-500 ${hovered === idx ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-white text-base font-normal drop-shadow-lg">{service.description}</p>
              </div>
            </Link>
          ))}
        </motion.div>
        {/* Add margin below grid: more on desktop, less on mobile */}
        <div className="mb-4 md:mb-24" />
      </div>
    </section>
  );
};

export default ServicesLanding; 