import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Our Experts",
    expertise: [
      { label: 'Big Data Architect' },
      { label: 'Administrator' },
      { label: 'Hadoop' },
      { label: 'DevOps' },
      { label: 'Project Manager' },
      { label: 'Agile Coach' },
      { label: 'Data Engineer' },
      { label: 'Data Analyst' },
      { label: 'Data Scientist' }
    ]
  },
  ar: {
    title: "خبراؤنا",
    expertise: [
      { label: 'Big Data Architect' },
      { label: 'Administrator' },
      { label: 'Hadoop' },
      { label: 'DevOps' },
      { label: 'Project Manager' },
      { label: 'Agile Coach' },
      { label: 'Data Engineer' },
      { label: 'Data Analyst' },
      { label: 'Data Scientist' }
    ]
  }
};

const expertiseIcons = [
  { icon: (
    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
  ) },
  { icon: (
    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /></svg>
  ) },
  { icon: (
    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
  ) },
  { icon: (
    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m-4-4h8" /><circle cx="12" cy="12" r="10" /></svg>
  ) },
  { icon: (
    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
  ) },
  { icon: (
    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
  ) },
  { icon: (
    <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 4v16M16 4v16" /></svg>
  ) },
  { icon: (
    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><circle cx="19" cy="5" r="2" /></svg>
  ) },
  { icon: (
    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
  ) }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ConsultingExpertise() {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 py-16 md:py-24 lg:py-36 px-4 md:px-10 overflow-hidden rounded-3xl mt-8 md:mt-16 shadow-2xl mb-16 md:mb-24 bg-gradient-to-br from-[#eaf1f7] via-[#f7fafc] to-[#dbeafe]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Large faint SVG background */}
      <motion.svg 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 z-0" 
        width="700" 
        height="700" 
        viewBox="0 0 700 700"
      >
        <circle cx="350" cy="350" r="320" fill="#4a6d8c" />
      </motion.svg>

      {/* Left: Bubble Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:w-2/3 flex flex-wrap gap-4 md:gap-8 z-10 justify-center md:justify-start"
      >
        {currentLang.expertise.map((item, i) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            className={`flex flex-col items-center justify-center bg-white/90 rounded-full shadow-xl p-6 md:p-8 w-32 md:w-40 h-32 md:h-40 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-[#eaf1f7] ${i % 2 === 0 ? 'mt-0' : 'mt-8 md:mt-12'}`}
          >
            {expertiseIcons[i].icon}
            <span className="mt-3 md:mt-4 text-sm md:text-lg font-bold text-[#28394b] text-center">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Right: Floating Orb */}
      <motion.div 
        initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-60 md:w-72 h-80 md:h-96 flex items-center justify-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4a6d8c] via-[#a7c7e7] to-[#eaf1f7] blur-2xl animate-pulse"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 w-48 md:w-60 h-64 md:h-80 rounded-3xl bg-white/80 shadow-2xl flex flex-col items-center justify-center"
        >
          <svg width="80" height="80" viewBox="0 0 100 100" className="opacity-40 mb-4">
            <circle cx="50" cy="50" r="48" stroke="#4a6d8c" strokeWidth="4" fill="none" />
          </svg>
          <span className="text-xl md:text-3xl font-extrabold text-[#4a6d8c] text-center leading-tight drop-shadow-lg">{currentLang.title}</span>
        </motion.div>
      </motion.div>
    </section>
  );
} 