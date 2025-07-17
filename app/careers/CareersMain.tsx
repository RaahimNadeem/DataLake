import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaRocket, FaUsers } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const translations = {
  en: {
    hero: {
      title: "Careers at Datalake",
      subtitle: "Build the future of AI with us. Dream big, grow fast, and make a real impact.",
      exploreButton: "Explore Open Roles"
    },
    culture: {
      title: "A Culture of Innovation & Belonging",
      description: "At Datalake, we believe the best ideas come from diverse minds working together. Our culture is built on trust, curiosity, and a relentless drive to learn. We celebrate every win, support each other through challenges, and make sure every voice is heard. If you want to shape the future of AI in a place where you truly belong, you'll thrive here.",
      quote: {
        text: "Datalake is the first place I've worked where I feel my ideas matter. The energy is contagious and the support is real.",
        author: "— Team Member"
      }
    },
    positions: [
      {
        title: 'AI Dreamer',
        desc: 'Imagine, design, and prototype the next wave of intelligent solutions.'
      },
      {
        title: 'Machine Learning Magician',
        desc: 'Turn data into magic with cutting-edge ML models and creative thinking.'
      },
      {
        title: 'Innovation Pilot',
        desc: 'Lead bold experiments and launch new AI-powered products.'
      },
      {
        title: 'Culture Champion',
        desc: 'Shape our team spirit and make Datalake the best place to grow.'
      }
    ]
  },
  ar: {
    hero: {
      title: "وظائف في داتاليك",
      subtitle: "ساعدنا في بناء مستقبل الذكاء الاصطناعي. احلم كبيراً، نم بسرعة، واصنع تأثيراً حقيقياً.",
      exploreButton: "استكشف الوظائف المفتوحة"
    },
    culture: {
      title: "ثقافة الابتكار والانتماء",
      description: "في داتاليك، نؤمن بأن أفضل الأفكار تأتي من عقول متنوعة تعمل معاً. ثقافتنا مبنية على الثقة والفضول والرغبة المستمرة في التعلم. نحتفل بكل نجاح، ندعم بعضنا البعض في التحديات، ونتأكد من أن كل صوت يُسمع. إذا كنت تريد تشكيل مستقبل الذكاء الاصطناعي في مكان تشعر فيه بالانتماء الحقيقي، فستزدهر هنا.",
      quote: {
        text: "داتاليك هو أول مكان عمل أشعر فيه أن أفكاري مهمة. الطاقة معدية والدعم حقيقي.",
        author: "— عضو الفريق"
      }
    },
    positions: [
      {
        title: 'حالم الذكاء الاصطناعي',
        desc: 'تخيل، صمم، وطور النموذج الأولي للجيل القادم من الحلول الذكية.'
      },
      {
        title: 'ساحر التعلم الآلي',
        desc: 'حول البيانات إلى سحر باستخدام نماذج التعلم الآلي المتطورة والتفكير الإبداعي.'
      },
      {
        title: 'طيار الابتكار',
        desc: 'قاد التجارب الجريئة وأطلق منتجات جديدة مدعومة بالذكاء الاصطناعي.'
      },
      {
        title: 'بطل الثقافة',
        desc: 'شكل روح فريقنا واجعل داتاليك أفضل مكان للنمو.'
      }
    ]
  }
};

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' }
  })
};

const Careers = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];
  
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/Careers/Slide1.jpg',
    '/Careers/Slide2.jpg',
    '/Careers/Slide3.jpg'
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Scroll to JobListings section
  const scrollToJobListings = () => {
    const jobListingsSection = document.querySelector('[data-section="job-listings"]');
    if (jobListingsSection) {
      jobListingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={`${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      {/* Hero Section with Slideshow Background */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${slide}')` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
          >
            {currentLang.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-white max-w-2xl mb-8 drop-shadow"
          >
            {currentLang.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <button 
              onClick={scrollToJobListings}
              className="bg-white text-[#19232e] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {currentLang.hero.exploreButton}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch py-20 px-4 md:px-20">
        <div className="md:w-2/3 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
          >
            {currentLang.culture.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-lg md:text-xl mb-8 max-w-2xl"
          >
            {currentLang.culture.description}
          </motion.p>
         
        </div>
        <div className="md:w-1/3 flex items-center justify-center mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="Careers/Careers2.jpg" 
              alt={language === 'ar' ? "وظائف" : "Career"} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 