import React, { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: "Open Positions",
    subtitle: "Join our team and help shape the future of AI",
    filters: {
      title: "Filters",
      location: "Location",
      team: "Team",
      allLocations: "All Locations",
      allTeams: "All Teams",
      clearFilters: "Clear Filters"
    },
    jobs: [
      {
        title: "Senior AI Engineer",
        location: "Tunisia",
        type: "Full-time",
        team: "Engineering",
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
        location: "France",
        type: "Full-time",
        team: "Data Science",
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
        location: "Morocco",
        type: "Full-time",
        team: "Product",
        description: "Lead the development of our AI products from conception to launch, working closely with engineering and design teams.",
        requirements: [
          "4+ years of product management experience",
          "Background in AI/ML products",
          "Strong analytical and strategic thinking",
          "Excellent leadership skills"
        ]
      },
      {
        title: "Frontend Developer",
        location: "Saudi Arabia",
        type: "Full-time",
        team: "Engineering",
        description: "Build beautiful and responsive user interfaces for our AI-powered applications using modern web technologies.",
        requirements: [
          "3+ years of frontend development experience",
          "Proficiency in React, TypeScript, and modern CSS",
          "Experience with responsive design and accessibility",
          "Strong collaboration skills"
        ]
      },
      {
        title: "UX Designer",
        location: "Tunisia",
        type: "Full-time",
        team: "Design",
        description: "Create intuitive and engaging user experiences for our AI products through user research and design thinking.",
        requirements: [
          "4+ years of UX design experience",
          "Proficiency in design tools (Figma, Sketch)",
          "Experience with user research and testing",
          "Strong portfolio showcasing AI/ML products"
        ]
      },
      {
        title: "DevOps Engineer",
        location: "France",
        type: "Full-time",
        team: "Engineering",
        description: "Build and maintain our cloud infrastructure to support scalable AI applications and machine learning pipelines.",
        requirements: [
          "3+ years of DevOps experience",
          "Experience with AWS, Docker, and Kubernetes",
          "Knowledge of CI/CD pipelines",
          "Experience with monitoring and logging tools"
        ]
      }
    ],
    apply: "Apply Now",
    requirements: "Requirements",
    viewDetails: "View Details",
    noJobsFound: "No jobs found matching your filters"
  },
  ar: {
    title: "الوظائف الشاغرة",
    subtitle: "انضم إلى فريقنا وساعد في تشكيل مستقبل الذكاء الاصطناعي",
    filters: {
      title: "المرشحات",
      location: "الموقع",
      team: "الفريق",
      allLocations: "جميع المواقع",
      allTeams: "جميع الفرق",
      clearFilters: "مسح المرشحات"
    },
    jobs: [
      {
        title: "مهندس ذكاء اصطناعي كبير",
        location: "تونس",
        type: "دوام كامل",
        team: "الهندسة",
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
        location: "فرنسا",
        type: "دوام كامل",
        team: "علوم البيانات",
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
        location: "المغرب",
        type: "دوام كامل",
        team: "المنتجات",
        description: "قاد تطوير منتجات الذكاء الاصطناعي لدينا من التصور إلى الإطلاق، بالعمل عن كثب مع فرق الهندسة والتصميم.",
        requirements: [
          "4+ سنوات من الخبرة في إدارة المنتجات",
          "خلفية في منتجات الذكاء الاصطناعي/التعلم الآلي",
          "تفكير تحليلي واستراتيجي قوي",
          "مهارات قيادية ممتازة"
        ]
      },
      {
        title: "مطور واجهة أمامية",
        location: "المملكة العربية السعودية",
        type: "دوام كامل",
        team: "الهندسة",
        description: "ابني واجهات مستخدم جميلة ومتجاوبة لتطبيقاتنا المدعومة بالذكاء الاصطناعي باستخدام تقنيات الويب الحديثة.",
        requirements: [
          "3+ سنوات من الخبرة في تطوير الواجهة الأمامية",
          "إتقان React و TypeScript و CSS الحديث",
          "خبرة في التصميم المتجاوب وإمكانية الوصول",
          "مهارات تعاون قوية"
        ]
      },
      {
        title: "مصمم تجربة المستخدم",
        location: "تونس",
        type: "دوام كامل",
        team: "التصميم",
        description: "أنشئ تجارب مستخدم بديهية وجذابة لمنتجات الذكاء الاصطناعي لدينا من خلال البحث عن المستخدم والتفكير التصميمي.",
        requirements: [
          "4+ سنوات من الخبرة في تصميم تجربة المستخدم",
          "إتقان أدوات التصميم (Figma, Sketch)",
          "خبرة في البحث عن المستخدم والاختبار",
          "محفظة قوية تعرض منتجات الذكاء الاصطناعي/التعلم الآلي"
        ]
      },
      {
        title: "مهندس DevOps",
        location: "فرنسا",
        type: "دوام كامل",
        team: "الهندسة",
        description: "ابني وصيانة البنية التحتية السحابية لدينا لدعم تطبيقات الذكاء الاصطناعي القابلة للتطوير وخطوط أنابيب التعلم الآلي.",
        requirements: [
          "3+ سنوات من الخبرة في DevOps",
          "خبرة في AWS و Docker و Kubernetes",
          "معرفة بخطوط أنابيب CI/CD",
          "خبرة في أدوات المراقبة والتسجيل"
        ]
      }
    ],
    apply: "تقدم الآن",
    requirements: "المتطلبات",
    viewDetails: "عرض التفاصيل",
    noJobsFound: "لم يتم العثور على وظائف تطابق مرشحاتك"
  }
};

const locations = ["Tunisia", "France", "Morocco", "Saudi Arabia"];
const teams = ["Engineering", "Product", "Data Science", "Design"];

const JobListings = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter jobs based on selected filters
  const filteredJobs = currentLang.jobs.filter(job => {
    const locationMatch = !selectedLocation || job.location === selectedLocation;
    const teamMatch = !selectedTeam || job.team === selectedTeam;
    return locationMatch && teamMatch;
  });

  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedTeam("");
  };

  return (
    <section className="w-full py-20 px-4 md:px-20" dir={language === 'ar' ? 'rtl' : 'ltr'} data-section="job-listings">
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

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">{currentLang.filters.title}</h3>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Location Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentLang.filters.location}
                      </label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">{currentLang.filters.allLocations}</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Team Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentLang.filters.team}
                      </label>
                      <select
                        value={selectedTeam}
                        onChange={(e) => setSelectedTeam(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">{currentLang.filters.allTeams}</option>
                        {teams.map((team) => (
                          <option key={team} value={team}>
                            {team}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Clear Filters Button */}
                  {(selectedLocation || selectedTeam) && (
                    <button
                      onClick={clearFilters}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      {currentLang.filters.clearFilters}
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
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
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-2">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span className="text-blue-600 font-medium">{job.team}</span>
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
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">{currentLang.noJobsFound}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings; 