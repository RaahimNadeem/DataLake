import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import projectsLandingTranslations from '@/translations/LandingPage/projectsLanding.json';
import Image from 'next/image';

const ProjectsLanding = () => {
  const [activeProject, setActiveProject] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const currentLang = projectsLandingTranslations[language as keyof typeof projectsLandingTranslations];

    const projects = currentLang.projects;

  const currentProject = projects[activeProject];

  const renderTitle = (text: string) => {
    if (language === 'en') {
      return text.split(' ').map((word, index) => {
        if (word === 'Enterprise') {
          return <span key={index} style={{ color: '#2254a0' }}>{word} </span>;
        } else if (word === 'Portfolio') {
          return <span key={index} style={{ color: '#e08d37' }}>{word} </span>;
        }
        return word + (index < text.split(' ').length - 1 ? ' ' : '');
      });
    } else if (language === 'ar') {
      // For Arabic, we need to handle the text differently since it might contain prefixes/suffixes
      const words = text.split(' ');
      return words.map((word, index) => {
        // Check if the word contains the target Arabic words
        if (word.includes('المؤسسات')) {
          return <span key={index} style={{ color: '#2254a0' }}>{word} </span>;
        } else if (word.includes('محفظة')) {
          return <span key={index} style={{ color: '#e08d37' }}>{word} </span>;
        }
        return word + (index < words.length - 1 ? ' ' : '');
      });
    }
    return text;
  };

  return (
    <section id="projects" className={`w-full min-h-[60vh] py-12 md:py-16 ${language === 'ar' ? 'font-arabic' : 'font-sans'} bg-white`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-24">
        {/* Header Section - Consistent with other components */}
        <motion.div
          ref={ref}
          initial={{ x: language === 'ar' ? -60 : 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-24 md:pt-16 max-w-[1800px] mx-auto mb-4 md:mb-24"
        >
          {/* Empty left side for symmetry */}
          <div className="w-full md:w-1/2"></div>

          {/* Header Content - Right Side */}
          <div className={`w-full md:w-1/2 lg:w-3/4 md:pl-12`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-sm font-semibold text-gray-700 mb-4 ${language === 'ar' ? 'text-right' : 'tracking-widest uppercase'}`}
            >
              {currentLang.header.subtitle}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight max-w-3xl whitespace-pre-line"
            >
              {renderTitle(currentLang.header.title)}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-700 max-w-xl mt-6"
            >
              {currentLang.header.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Cards - Mobile Carousel & Desktop Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          {/* Mobile: horizontal scrollable carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex md:hidden gap-4 overflow-x-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-300 max-w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-50 group flex-shrink-0 w-80"
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.client} project`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 320px, 50vw"
                  />
                  {/* Subtle overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  {/* Client Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-[#edf4f9] text-[#4a6d8c] rounded-full text-xs font-semibold mb-3">
                    {project.client}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-black mb-3 leading-tight">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Technologies</h5>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop: grid layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-50 group"
              >
                {/* Project Image */}
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.client} project`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Client Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-[#edf4f9] text-[#4a6d8c] rounded-full text-xs font-semibold mb-4">
                    {project.client}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-black mb-3 leading-tight">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-5">
                    <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Technologies</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
};

export default ProjectsLanding; 