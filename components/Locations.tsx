// @ts-ignore: No types for react-world-flags
import Flag from "react-world-flags";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    header: {
      subtitle: "OUR LOCATIONS",
      title: "Global Presence",
      description: "We are proud to serve clients across multiple regions, bringing our expertise and solutions to businesses in:"
    },
    locations: [
      { country: "France", code: "FR" },
      { country: "Saudi Arabia", code: "SA" },
      { country: "Tunisia", code: "TN" },
      { country: "Morocco", code: "MA" },
    ]
  },
  ar: {
    header: {
      subtitle: "مواقعنا",
      title: "تواجد عالمي",
      description: "نحن فخورون بخدمة العملاء في مناطق متعددة، حيث نقدم خبرتنا وحلولنا للشركات في:"
    },
    locations: [
      { country: "فرنسا", code: "FR" },
      { country: "المملكة العربية السعودية", code: "SA" },
      { country: "تونس", code: "TN" },
      { country: "المغرب", code: "MA" },
    ]
  }
};

const Locations = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full md:py-24 min-h-[80vh] flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 px-4 md:px-8">
        {/* Left: Text and Locations */}
        <motion.div
          className="flex-1 w-full md:w-1/2 flex flex-col justify-center"
          initial={{ x: language === 'ar' ? 60 : -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          }}
        >
          <div className="mb-6">
            <div className="text-sm font-semibold text-gray-700 tracking-widest uppercase mb-2">
              {currentLang.header.subtitle}
            </div>
            <div className="h-0.5 w-16 bg-gray-300 mb-6" />
            <h2 className="text-3xl md:text-6xl font-bold text-black leading-tight mb-6">
              {currentLang.header.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              {currentLang.header.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {currentLang.locations.map((loc) => (
                <div
                  key={loc.country}
                  className="flex flex-col items-center bg-white rounded-xl shadow p-4"
                >
                  <span className="text-base font-medium text-gray-800 flex items-center gap-2">
                    {loc.country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Right: Map and Button */}
        <motion.div
          className="flex-1 w-full md:w-1/2 flex flex-col items-center md:items-end"
          initial={{ x: language === 'ar' ? -60 : 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <img
            src="/Countries.png"
            alt={language === 'ar' ? "خريطة العالم مع إبراز مواقع الشركة" : "World map highlighting company locations"}
            className="w-full max-w-xl rounded-2xl shadow-md object-cover mb-8 md:mb-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
