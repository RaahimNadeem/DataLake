import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import HeaderAlt from '@/components/ui/HeaderAlt';
import Footer from '@/components/ui/footer';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    services: [
      'AI',
      'Cloud Services',
      'Business Automation',
      'Cyber',
      'Data',
      'Digital Business & Products',
      'Sustainability'
    ],
    getInTouch: {
      title: "Get in touch with us",
      description: "Would you like to discuss your next project with us? Do you have any questions or need support? Whatever the case, we look forward to hearing from you."
    },
    contactInfo: {
      title: "Contact Information",
      email: "Email",
      address: "Address",
      phone: "Phone",
      workingHours: "Working Hours",
      socialMedia: "Follow Us"
    },
    companyInfo: {
      email: "Info@datalake.sa",
      address: "King Fahd Road, Riyadh, Saudi Arabia",
      phone: "+966 11 123 4567",
      workingHours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
      socialMedia: {
        linkedin: "LinkedIn",
        twitter: "Twitter",
        instagram: "Instagram"
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about working with DataLake",
      items: [
        {
          question: "What services does DataLake offer?",
          answer: "We offer comprehensive digital solutions including AI, Cloud Services, Business Automation, Cybersecurity, Data Analytics, Digital Business & Products, and Sustainability services."
        },
        {
          question: "How can I get started with DataLake?",
          answer: "Simply reach out to us via email or phone, and our team will schedule a consultation to understand your needs and provide tailored solutions."
        },
        {
          question: "Do you work with international clients?",
          answer: "Yes, we serve clients both locally in Saudi Arabia and internationally, providing remote and on-site support as needed."
        },
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary depending on complexity. Small projects may take 2-4 weeks, while larger enterprise solutions can take 3-6 months or more."
        },
        {
          question: "Do you provide ongoing support?",
          answer: "Yes, we offer comprehensive support packages including maintenance, updates, and 24/7 technical assistance for critical systems."
        }
      ]
    },
    gallery: {
      title: "Our Workspace",
      subtitle: "Take a look at our modern office and team"
    }
  },
  ar: {
    services: [
      'الذكاء الاصطناعي',
      'خدمات السحابة',
      'أتمتة الأعمال',
      'الأمن السيبراني',
      'البيانات',
      'الأعمال الرقمية والمنتجات',
      'الاستدامة'
    ],
    getInTouch: {
      title: "تواصل معنا",
      description: "هل ترغب في مناقشة مشروعك القادم معنا؟ هل لديك أي أسئلة أو تحتاج إلى دعم؟ في كل الحالات، نتطلع إلى سماع منك."
    },
    contactInfo: {
      title: "معلومات الاتصال",
      email: "البريد الإلكتروني",
      address: "العنوان",
      phone: "الهاتف",
      workingHours: "ساعات العمل",
      socialMedia: "تابعنا"
    },
    companyInfo: {
      email: "Info@datalake.sa",
      address: "طريق الملك فهد، الرياض، المملكة العربية السعودية",
      phone: "+966 11 123 4567",
      workingHours: "الأحد - الخميس: 9:00 ص - 6:00 م",
      socialMedia: {
        linkedin: "لينكد إن",
        twitter: "تويتر",
        instagram: "إنستغرام"
      }
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج لمعرفته حول العمل مع DataLake",
      items: [
        {
          question: "ما هي الخدمات التي تقدمها DataLake؟",
          answer: "نقدم حلول رقمية شاملة تشمل الذكاء الاصطناعي، خدمات السحابة، أتمتة الأعمال، الأمن السيبراني، تحليل البيانات، الأعمال الرقمية والمنتجات، وخدمات الاستدامة."
        },
        {
          question: "كيف يمكنني البدء مع DataLake؟",
          answer: "ما عليك سوى التواصل معنا عبر البريد الإلكتروني أو الهاتف، وسيقوم فريقنا بجدولة استشارة لفهم احتياجاتك وتقديم حلول مخصصة."
        },
        {
          question: "هل تعملون مع عملاء دوليين؟",
          answer: "نعم، نخدم العملاء محلياً في المملكة العربية السعودية ودولياً، ونقدم الدعم عن بُعد وفي الموقع حسب الحاجة."
        },
        {
          question: "ما هو الجدول الزمني النموذجي للمشروع؟",
          answer: "تختلف الجداول الزمنية للمشاريع حسب التعقيد. قد تستغرق المشاريع الصغيرة 2-4 أسابيع، بينما قد تستغرق حلول المؤسسات الكبيرة 3-6 أشهر أو أكثر."
        },
        {
          question: "هل تقدمون دعم مستمر؟",
          answer: "نعم، نقدم حزم دعم شاملة تشمل الصيانة والتحديثات والمساعدة التقنية على مدار الساعة طوال أيام الأسبوع للأنظمة الحرجة."
        }
      ]
    },
    gallery: {
      title: "مساحة عملنا",
      subtitle: "ألق نظرة على مكتبنا الحديث وفريقنا"
    }
  }
};

const Contact = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];
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
    <div className="min-h-screen flex pt-12 sm:pt-16 flex-col bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <HeaderAlt />
      
      {/* Main Contact Section */}
      <section className="w-full mx-auto flex flex-col items-stretch md:flex-row gap-6 sm:gap-8 md:gap-12 py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Left: Semi-circle Card */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/3 flex flex-col items-start justify-start"
        >
          <div className="relative w-full sm:w-[90%] h-56 sm:h-64 md:h-72 lg:h-[300px] flex items-center justify-center">
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
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#4a6d8c] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#19232e] text-base sm:text-lg mb-1">{currentLang.contactInfo.phone}</h3>
                  <a href={`tel:${currentLang.companyInfo.phone}`} className="text-[#4a6d8c] hover:text-[#19232e] transition-colors text-sm sm:text-base">
                    {currentLang.companyInfo.phone}
                  </a>
                </div>
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

              {/* Social Media */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-2 sm:pt-4"
              >
                <h3 className="font-semibold text-[#19232e] text-base sm:text-lg mb-3">{currentLang.contactInfo.socialMedia}</h3>
                <div className="flex space-x-3 sm:space-x-4 rtl:space-x-reverse">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-[#4a6d8c] rounded-lg flex items-center justify-center hover:bg-[#19232e] transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-[#4a6d8c] rounded-lg flex items-center justify-center hover:bg-[#19232e] transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-[#4a6d8c] rounded-lg flex items-center justify-center hover:bg-[#19232e] transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </motion.a>
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
              <h3 className="font-semibold text-[#19232e] text-lg sm:text-xl mb-3 sm:mb-4">Location</h3>
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
                <h3 className="font-semibold text-[#19232e] text-lg sm:text-xl mb-3 sm:mb-4">Services We Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {currentLang.services.map((service, index) => (
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
            {currentLang.faq.items.map((item, index) => (
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