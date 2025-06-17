import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Open Positions",
    subtitle: "Join our team and help shape the future of AI",
    jobs: [
      {
        title: "Senior AI Engineer",
        location: "Remote / Hybrid",
        type: "Full-time",
        description: "We're looking for a Senior AI Engineer to lead our machine learning initiatives and help build next-generation AI solutions.",
        requirements: [
          "5+ years of experience in AI/ML development",
          "Strong background in Python and deep learning frameworks",
          "Experience with large language models and NLP",
          "Excellent problem-solving skills"
        ]
      },
      {
        title: "Data Scientist",
        location: "Remote",
        type: "Full-time",
        description: "Join our data science team to develop innovative solutions that drive business value through advanced analytics.",
        requirements: [
          "3+ years of experience in data science",
          "Proficiency in statistical analysis and machine learning",
          "Experience with big data technologies",
          "Strong communication skills"
        ]
      },
      {
        title: "AI Product Manager",
        location: "Hybrid",
        type: "Full-time",
        description: "Lead the development of our AI products from conception to launch, working closely with engineering and design teams.",
        requirements: [
          "4+ years of product management experience",
          "Background in AI/ML products",
          "Strong analytical and strategic thinking",
          "Excellent leadership skills"
        ]
      }
    ],
    apply: "Apply Now",
    requirements: "Requirements",
    viewDetails: "View Details"
  },
  ar: {
    title: "الوظائف الشاغرة",
    subtitle: "انضم إلى فريقنا وساعد في تشكيل مستقبل الذكاء الاصطناعي",
    jobs: [
      {
        title: "مهندس ذكاء اصطناعي كبير",
        location: "عن بعد / هجين",
        type: "دوام كامل",
        description: "نبحث عن مهندس ذكاء اصطناعي كبير لقيادة مبادرات التعلم الآلي لدينا ومساعدة في بناء حلول الذكاء الاصطناعي من الجيل التالي.",
        requirements: [
          "5+ سنوات من الخبرة في تطوير الذكاء الاصطناعي/التعلم الآلي",
          "خلفية قوية في بايثون وأطر التعلم العميق",
          "خبرة في نماذج اللغة الكبيرة ومعالجة اللغة الطبيعية",
          "مهارات ممتازة في حل المشكلات"
        ]
      },
      {
        title: "عالم بيانات",
        location: "عن بعد",
        type: "دوام كامل",
        description: "انضم إلى فريق علوم البيانات لدينا لتطوير حلول مبتكرة تدفع القيمة التجارية من خلال التحليلات المتقدمة.",
        requirements: [
          "3+ سنوات من الخبرة في علوم البيانات",
          "إتقان التحليل الإحصائي والتعلم الآلي",
          "خبرة في تقنيات البيانات الضخمة",
          "مهارات تواصل قوية"
        ]
      },
      {
        title: "مدير منتجات الذكاء الاصطناعي",
        location: "هجين",
        type: "دوام كامل",
        description: "قاد تطوير منتجات الذكاء الاصطناعي لدينا من التصور إلى الإطلاق، بالعمل عن كثب مع فرق الهندسة والتصميم.",
        requirements: [
          "4+ سنوات من الخبرة في إدارة المنتجات",
          "خلفية في منتجات الذكاء الاصطناعي/التعلم الآلي",
          "تفكير تحليلي واستراتيجي قوي",
          "مهارات قيادية ممتازة"
        ]
      }
    ],
    apply: "تقدم الآن",
    requirements: "المتطلبات",
    viewDetails: "عرض التفاصيل"
  }
};

const JobListings = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <section className="w-full py-20 px-4 md:px-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {currentLang.title}
          </h2>
          <p className="text-xl text-gray-600">
            {currentLang.subtitle}
          </p>
        </motion.div>

        <div className="space-y-6">
          {currentLang.jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedJob(expandedJob === index ? null : index)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    {currentLang.apply}
                  </button>
                </div>

                <AnimatePresence>
                  {expandedJob === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t"
                    >
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">{currentLang.requirements}:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {expandedJob !== index && (
                  <button
                    onClick={() => setExpandedJob(index)}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {currentLang.viewDetails}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings; 