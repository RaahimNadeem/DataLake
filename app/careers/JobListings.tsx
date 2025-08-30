import React, { useState, useEffect } from "react";
import { ChevronDown, Filter, MapPin, Clock, Building, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { getJobsFromAPI, getUniqueTeams, Job } from '@/lib/jobs';
import jobListingsTranslations from '@/translations/CareersPage/jobListings.json';

const JobListings = () => {
  const { language } = useLanguage();
  const currentLang = jobListingsTranslations[language as keyof typeof jobListingsTranslations];
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch jobs from Airtable API
  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const jobsData = await getJobsFromAPI(language === 'ar' ? 'Arabic' : 'English');
        setJobs(jobsData);
      } catch (error) {
        console.error('Error loading jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [language]);

  // Get unique values for filters from the loaded jobs
  const teams = [...new Set(jobs.map(job => job.team))];

  // Filter jobs based on selected filters and search
  const filteredJobs = jobs.filter(job => {
    const teamMatch = !selectedTeam || job.team === selectedTeam;
    const searchMatch = !searchTerm || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.team.toLowerCase().includes(searchTerm.toLowerCase());
    return teamMatch && searchMatch;
  });

  const clearFilters = () => {
    setSelectedTeam("");
    setSearchTerm("");
  };

  const hasActiveFilters = selectedTeam || searchTerm;

  return (
    <section className={`w-full py-24 px-4 md:px-8 lg:px-16 xl:px-24 ${language === 'ar' ? 'font-arabic' : 'font-sans'} bg-gradient-to-b from-gray-50 to-white`} dir={language === 'ar' ? 'rtl' : 'ltr'} data-section="job-listings">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            {currentLang.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentLang.subtitle}
          </p>
        </motion.div>

        {/* Search and Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={currentLang.searchPlaceholder || "Search jobs, teams, or keywords..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#4a6d8c]/20 focus:border-[#4a6d8c] transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-[#4a6d8c]" />
                <h3 className="text-lg font-semibold text-gray-900">{currentLang.filters.title}</h3>
                {hasActiveFilters && (
                  <span className="bg-[#4a6d8c]/10 text-[#4a6d8c] text-sm font-medium px-3 py-1 rounded-full">
                    {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors"
                  >
                    <X className="w-4 h-4" />
                    {currentLang.filters.clearFilters}
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 text-[#4a6d8c] hover:text-[#3a5d7c] font-medium transition-colors"
                >
                  {showFilters ? currentLang.filters.hideFilters : currentLang.filters.showFilters}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-100"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Team Filter */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {currentLang.filters.team}
                      </label>
                      <select
                        value={selectedTeam}
                        onChange={(e) => setSelectedTeam(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#4a6d8c]/20 focus:border-[#4a6d8c] transition-all duration-200 bg-white"
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a6d8c] mb-4"></div>
              <p className="text-gray-500 text-lg">{currentLang.loading || "Loading opportunities..."}</p>
            </motion.div>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#4a6d8c]/20 transition-all duration-300"
              >
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#4a6d8c] transition-colors duration-200">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-[#4a6d8c]" />
                          <span className="font-medium text-[#4a6d8c]">{job.team}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>Remote / Hybrid</span>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed line-clamp-2">
                        {job.description.substring(0, 200)}...
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:items-end">
                      <button 
                        className="px-8 py-3 bg-gradient-to-r from-[#4a6d8c] to-[#3a5d7c] text-white rounded-2xl hover:from-[#3a5d7c] hover:to-[#2a4d6c] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        onClick={(e) => {
                          e.stopPropagation();
                          const subject = encodeURIComponent(`Job Application: ${job.title}`);
                          const body = encodeURIComponent(`Dear HR Team,\n\nI am interested in applying for the position of ${job.title} at Datalake.\n\nPlease find my application attached.\n\nBest regards,\n[Your Name]`);
                          window.open(`mailto:HR@datalake.sa?subject=${subject}&body=${body}`, '_blank');
                        }}
                      >
                        {currentLang.apply}
                      </button>
                      
                      <button
                        onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                        className="text-[#4a6d8c] hover:text-[#3a5d7c] font-medium text-sm transition-colors"
                      >
                        {expandedJob === index ? currentLang.viewLess || "View Less" : currentLang.viewDetails}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedJob === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 pt-8 border-t border-gray-100"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{currentLang.description || "Job Description"}</h4>
                            <p className="text-gray-700 leading-relaxed">{job.description}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{currentLang.requirements}:</h4>
                            <ul className="space-y-3">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-[#4a6d8c] rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700 leading-relaxed">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentLang.noJobsFoundTitle || "No jobs found"}</h3>
                <p className="text-gray-600">{currentLang.noJobsFound}</p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-[#4a6d8c] hover:text-[#3a5d7c] font-medium"
                  >
                    {currentLang.clearFiltersAndTryAgain || "Clear filters and try again"}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings; 