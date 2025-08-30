import React from 'react';
import { FaSearch, FaLightbulb, FaCogs, FaRocket, FaHandsHelping } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations/Services/Sustainability/sustainabilityProcess.json';

const iconMap = {
  FaSearch,
  FaLightbulb,
  FaCogs,
  FaRocket,
  FaHandsHelping
};

const SustainabilityProcess = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-6 from-gray-50 via-white to-blue-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentLang.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2454a1] to-[#4a6d8c] mx-auto rounded-full"></div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Central Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2454a1] via-[#4a6d8c] to-[#2454a1] transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-8 md:space-y-12">
            {currentLang.steps.map((step, idx) => (
              <div
                key={step.title}
                className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8 gap-6`}
                style={{ direction: 'ltr' }} // Force LTR for layout consistency
              >
                {/* Step Number Badge */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-10 h-10 rounded-full bg-white border-3 border-[#2454a1] shadow-lg flex items-center justify-center">
                    <span className="text-base font-bold text-[#2454a1]">{idx + 1}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} text-center md:text-left`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] mb-4">
                      {React.createElement(iconMap[step.icon as keyof typeof iconMap], { 
                        size: 24, 
                        className: "text-[#2454a1]" 
                      })}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Connecting Line - Only show if not the last step */}
                {idx < currentLang.steps.length - 1 && (
                  <div className="absolute left-1/2 top-full w-1 h-8 md:h-12 bg-gradient-to-b from-[#2454a1] to-[#4a6d8c] transform -translate-x-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2454a1] to-[#4a6d8c] shadow-lg">
            <FaRocket size={24} className="text-white" />
          </div>
          <p className="text-lg text-gray-600 mt-4 font-medium">
            {language === 'ar' ? 'جاهز لتحويل استراتيجية الاستدامة الخاصة بك؟' : 'Ready to transform your sustainability strategy?'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityProcess;