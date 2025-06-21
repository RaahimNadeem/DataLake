import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    header: {
      subtitle: "OUR SERVICES",
      title: "Empowering Your Data\nWith Enterprise Solutions",
      description: "Discover our comprehensive suite of services designed to transform your business through innovative technology solutions."
    },
    services: [
      {
        title: "AI",
        description: "Unlock insights and automation with advanced AI.",
        longDescription: "Transform your business with cutting-edge artificial intelligence solutions. From machine learning models to natural language processing, we help you harness the power of AI to drive innovation and efficiency.",
        image: "/services/AI.jpg",
        features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Automation", "Intelligent Chatbots"]
      },
      {
        title: "Cloud Services",
        description: "Scalable, secure cloud solutions for your business.",
        longDescription: "Build and scale your applications with our comprehensive cloud services. From infrastructure management to serverless computing, we provide secure and reliable cloud solutions tailored to your needs.",
        image: "/services/Cloud.jpg",
        features: ["Cloud Migration", "Infrastructure as Code", "Serverless Computing", "Container Orchestration", "Multi-Cloud Strategy", "Cloud Security"]
      },
      {
        title: "Business Automation",
        description: "Streamline operations and boost productivity.",
        longDescription: "Automate your business processes to increase efficiency and reduce manual work. Our automation solutions help you focus on what matters most while improving accuracy and speed.",
        image: "/services/BusinessAutomation.jpg",
        features: ["Process Automation", "Workflow Optimization", "RPA Solutions", "Integration Services", "Business Intelligence", "Performance Monitoring"]
      },
      {
        title: "Cyber",
        description: "Protect your data and systems with robust security.",
        longDescription: "Safeguard your digital assets with our comprehensive cybersecurity services. From threat detection to compliance management, we ensure your business stays protected in an evolving threat landscape.",
        image: "/services/Cyber.jpg",
        features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response", "Security Training", "Vulnerability Assessment"]
      },
      {
        title: "Data",
        description: "Harness the power of your data for better decisions.",
        longDescription: "Turn your data into actionable insights with our data analytics and management services. We help you collect, process, and analyze data to drive informed business decisions.",
        image: "/services/Data.jpg",
        features: ["Data Analytics", "Data Warehousing", "Business Intelligence", "Data Governance", "ETL Processes", "Real-time Analytics"]
      },
      {
        title: "Digital Business & Products",
        description: "Transform ideas into digital products and services.",
        longDescription: "Bring your digital vision to life with our product development services. From concept to launch, we help you create innovative digital solutions that meet market demands.",
        image: "/services/Digital.jpg",
        features: ["Product Strategy", "UX/UI Design", "Development", "Testing & QA", "Launch Support", "Product Maintenance"]
      },
      {
        title: "Sustainability",
        description: "Drive growth with sustainable business practices.",
        longDescription: "Integrate sustainability into your business strategy with our environmental and social impact solutions. We help you create value while contributing to a sustainable future.",
        image: "/services/Sustainable.jpg",
        features: ["ESG Strategy", "Carbon Footprint Analysis", "Sustainable Technology", "Green Infrastructure", "Compliance Reporting", "Impact Measurement"]
      },
    ]
  },
  ar: {
    header: {
      subtitle: "خدماتنا",
      title: "تمكين بياناتك\nبحلول المؤسسات المتطورة",
      description: "اكتشف مجموعة خدماتنا الشاملة المصممة لتحويل عملك من خلال حلول التكنولوجيا المبتكرة."
    },
    services: [
      {
        title: "الذكاء الاصطناعي",
        description: "اكتشف الرؤى والأتمتة مع الذكاء الاصطناعي المتقدم.",
        longDescription: "حول عملك بحلول الذكاء الاصطناعي المتطورة. من نماذج التعلم الآلي إلى معالجة اللغة الطبيعية، نساعدك في تسخير قوة الذكاء الاصطناعي لدفع الابتكار والكفاءة.",
        image: "/services/AI.jpg",
        features: ["نماذج التعلم الآلي", "معالجة اللغة الطبيعية", "رؤية الحاسوب", "التحليلات التنبؤية", "أتمتة الذكاء الاصطناعي", "روبوتات المحادثة الذكية"]
      },
      {
        title: "خدمات السحابة",
        description: "حلول سحابية قابلة للتطوير وآمنة لعملك.",
        longDescription: "ابنِ ووسع تطبيقاتك مع خدمات السحابة الشاملة. من إدارة البنية التحتية إلى الحوسبة بدون خوادم، نقدم حلول سحابية آمنة وموثوقة مصممة لاحتياجاتك.",
        image: "/services/Cloud.jpg",
        features: ["الهجرة إلى السحابة", "البنية التحتية كرمز", "الحوسبة بدون خوادم", "تنسيق الحاويات", "استراتيجية متعددة السحابات", "أمان السحابة"]
      },
      {
        title: "أتمتة الأعمال",
        description: "تبسيط العمليات وتعزيز الإنتاجية.",
        longDescription: "أتمتة عمليات عملك لزيادة الكفاءة وتقليل العمل اليدوي. تساعد حلول الأتمتة لدينا في التركيز على ما يهم أكثر مع تحسين الدقة والسرعة.",
        image: "/services/BusinessAutomation.jpg",
        features: ["أتمتة العمليات", "تحسين سير العمل", "حلول RPA", "خدمات التكامل", "ذكاء الأعمال", "مراقبة الأداء"]
      },
      {
        title: "الأمن السيبراني",
        description: "حماية بياناتك وأنظمتك بأمان قوي.",
        longDescription: "حماية أصولك الرقمية مع خدمات الأمن السيبراني الشاملة. من اكتشاف التهديدات إلى إدارة الامتثال، نضمن بقاء عملك محمياً في بيئة التهديدات المتطورة.",
        image: "/services/Cyber.jpg",
        features: ["اكتشاف التهديدات", "تدقيق الأمان", "إدارة الامتثال", "الاستجابة للحوادث", "تدريب الأمان", "تقييم نقاط الضعف"]
      },
      {
        title: "البيانات",
        description: "استفد من قوة بياناتك لاتخاذ قرارات أفضل.",
        longDescription: "حول بياناتك إلى رؤى قابلة للتنفيذ مع خدمات تحليلات وإدارة البيانات. نساعدك في جمع ومعالجة وتحليل البيانات لدفع قرارات الأعمال المدروسة.",
        image: "/services/Data.jpg",
        features: ["تحليلات البيانات", "مستودعات البيانات", "ذكاء الأعمال", "حوكمة البيانات", "عمليات ETL", "التحليلات في الوقت الفعلي"]
      },
      {
        title: "الأعمال والمنتجات الرقمية",
        description: "تحويل الأفكار إلى منتجات وخدمات رقمية.",
        longDescription: "أحضر رؤيتك الرقمية إلى الحياة مع خدمات تطوير المنتجات. من المفهوم إلى الإطلاق، نساعدك في إنشاء حلول رقمية مبتكرة تلبي متطلبات السوق.",
        image: "/services/Digital.jpg",
        features: ["استراتيجية المنتج", "تصميم UX/UI", "التطوير", "الاختبار وضمان الجودة", "دعم الإطلاق", "صيانة المنتج"]
      },
      {
        title: "الاستدامة",
        description: "دفع النمو بممارسات أعمال مستدامة.",
        longDescription: "دمج الاستدامة في استراتيجية عملك مع حلول التأثير البيئي والاجتماعي. نساعدك في خلق قيمة مع المساهمة في مستقبل مستدام.",
        image: "/services/Sustainable.jpg",
        features: ["استراتيجية ESG", "تحليل البصمة الكربونية", "التكنولوجيا المستدامة", "البنية التحتية الخضراء", "تقارير الامتثال", "قياس التأثير"]
      },
    ]
  }
};

const ServicesMain = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <div className="w-full min-h-screen bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-sm font-semibold text-blue-600 mb-4 tracking-widest uppercase">
              {currentLang.header.subtitle}
            </h2>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 whitespace-pre-line">
              {currentLang.header.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentLang.header.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentLang.services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedService(selectedService === idx ? null : idx)}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                  
                  {/* Expandable Content */}
                  {selectedService === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-100"
                    >
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {service.longDescription}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/services/${encodeURIComponent(service.title)}`}
                        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  )}
                  
                  {/* Expand/Collapse Button */}
                  <button
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(selectedService === idx ? null : idx);
                    }}
                  >
                    {selectedService === idx ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link
                href="/consulting"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesMain;
