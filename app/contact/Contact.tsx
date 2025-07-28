import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import HeaderAlt from '@/components/ui/HeaderAlt';
import Footer from '@/components/ui/footer';
import { useLanguage } from '@/contexts/LanguageContext';
import contactTranslations from '@/translations/ContactPage/contact.json';

const Contact = () => {
  const { language } = useLanguage();
  const currentLang = contactTranslations[language as keyof typeof contactTranslations];
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqRef = React.useRef(null);
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Sample gallery images (replace with actual office photos)
  const galleryImages = [
    { src: '/api/placeholder/400/300', alt: 'Modern office space' },
    { src: '/api/placeholder/400/300', alt: 'Team collaboration area' },
    { src: '/api/placeholder/400/300', alt: 'Meeting room' },
    { src: '/api/placeholder/400/300', alt: 'Workstation setup' },
    { src: '/api/placeholder/400/300', alt: 'Reception area' },
    { src: '/api/placeholder/400/300', alt: 'Break room' }
  ];

  return (
    <div className={`flex pt-0 sm:pt-8 flex-col bg-white ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <HeaderAlt />
      
      {/* Main Contact Section */}
      <section className="w-full mx-auto flex flex-col items-stretch md:flex-row gap-4 sm:gap-8 md:gap-12 py-0 sm:py-8 md:py-16 lg:py-24 px-2 sm:px-6 md:px-8 lg:px-12">
        {/* Left: Semi-circle Card */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/3 flex flex-col items-start justify-start"
        >
          <div className="relative w-full sm:w-[90%] h-fit sm:h-64 md:h-72 lg:h-[300px] flex items-start justify-start">
            {/* Semi-circle for desktop, regular card for mobile */}
            <div className="absolute inset-0 hidden md:block">
              <div className={`h-full w-[90%] bg-[#19232e] ${language === 'ar' ? 'rounded-l-3xl' : 'rounded-r-3xl'} shadow-lg`} />
            </div>
            <div className="relative z-10 flex flex-col items-start justify-center h-full w-full sm:w-2/3 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-0 text-white">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{currentLang.getInTouch.title}</h2>
              <p className="text-sm sm:text-base font-medium">
                {currentLang.getInTouch.description}
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Right: Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-2/3 flex flex-col"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-[#19232e] mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight">{currentLang.contactInfo.title}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start space-x-3 sm:space-x-4 rtl:space-x-reverse"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#4a6d8c] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#19232e] text-base sm:text-lg mb-1">{currentLang.contactInfo.email}</h3>
                  <a href={`mailto:${currentLang.companyInfo.email}`} className="text-[#4a6d8c] hover:text-[#19232e] transition-colors text-sm sm:text-base">
                    {currentLang.companyInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start space-x-3 sm:space-x-4 rtl:space-x-reverse"
              >
               
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start space-x-3 sm:space-x-4 rtl:space-x-reverse"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#4a6d8c] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#19232e] text-base sm:text-lg mb-1">{currentLang.contactInfo.workingHours}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{currentLang.companyInfo.workingHours}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start space-x-3 sm:space-x-4 rtl:space-x-reverse"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#4a6d8c] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#19232e] text-base sm:text-lg mb-1">{currentLang.contactInfo.address}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{currentLang.companyInfo.address}</p>
                </div>
              </motion.div>

             
            </div>

            {/* Google Maps */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="font-semibold text-[#19232e] text-lg sm:text-xl mb-3 sm:mb-4">{currentLang.location}</h3>
              <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.698!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03735a8e5a7f%3A0x2b066d4e1b3b3b3b!2sKing%20Fahd%20Road%2C%20Riyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DataLake Location"
                ></iframe>
              </div>
              
              {/* Services We Offer */}
              <div>
                <h3 className="font-semibold text-[#19232e] text-lg sm:text-xl mb-3 sm:mb-4">{currentLang.servicesWeOffer}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {currentLang.services.map((service: string, index: number) => (
                    <motion.div 
                      key={service} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-center space-x-2 rtl:space-x-reverse"
                    >
                      <div className="w-2 h-2 bg-[#4a6d8c] rounded-full"></div>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="w-full mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br ">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#19232e] mb-4 sm:mb-6">
              {currentLang.faq.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              {currentLang.faq.subtitle}
            </p>
          </motion.div>
          
          <div className="space-y-4 sm:space-y-6">
            {currentLang.faq.items.map((item: { question: string; answer: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="font-semibold text-[#19232e] text-base sm:text-lg pr-4 leading-relaxed">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-[#4a6d8c] rounded-full flex items-center justify-center group-hover:bg-[#19232e] transition-colors"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ 
                    height: { duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.2, ease: "easeInOut" }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="w-12 h-0.5 bg-[#4a6d8c] mb-4 rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   

      <Footer />
    </div>
  );
};

export default Contact; 