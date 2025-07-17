import React, { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { getJobs, getUniqueTeams, getUniqueLocations, Job } from '@/lib/jobs';

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
    apply: "تقدم الآن",
    requirements: "المتطلبات",
    viewDetails: "عرض التفاصيل",
    noJobsFound: "لم يتم العثور على وظائف تطابق مرشحاتك"
  }
};

const JobListings = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  // Get jobs data and unique values for filters
  const jobs = getJobs();
  const locations = getUniqueLocations();
  const teams = getUniqueTeams();

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter(job => {
    const locationMatch = !selectedLocation || job.location === selectedLocation;
    const teamMatch = !selectedTeam || job.team === selectedTeam;
    return locationMatch && teamMatch;
  });

  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedTeam("");
  };

  return (
    <section className={`w-full py-20 px-4 md:px-20 ${language === 'ar' ? 'font-arabic' : 'font-sans'} `} dir={language === 'ar' ? 'rtl' : 'ltr'} data-section="job-listings">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
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
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#2454a1]" />
                <h3 className="text-lg font-semibold">{currentLang.filters.title}</h3>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-[#2454a1] hover:text-[#294b81] font-medium"
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
                      className="text-[#2454a1] hover:text-[#284b81] font-medium text-sm"
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
                viewport={{ once: true, amount: 0.1, margin: "-50px" }}
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
                        <span className="text-[#2454a1] font-medium">{job.team}</span>
                      </div>
                    </div>
                    <button 
                      className="px-6 py-2 bg-[#2454a1] text-white rounded-full hover:bg-[#284b81] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(job.link, '_blank');
                      }}
                    >
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
                      className="mt-4 text-[#2454a1] hover:text-[#284b81] font-medium"
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