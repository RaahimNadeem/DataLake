"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const CookieBanner = () => {
  const { 
    language, 
    showCookieBanner, 
    setCookieConsent, 
    cookiePreferences, 
    setCookiePreferences 
  } = useLanguage();
  const [showConfig, setShowConfig] = useState(false);
  const [localPreferences, setLocalPreferences] = useState(cookiePreferences);

  const content = {
    en: {
      title: "Cookie Settings",
      message: "We use cookies to enhance your experience",
      accept: "Accept All",
      decline: "Decline",
      configure: "Configure",
      save: "Save Preferences",
      cancel: "Cancel",
      learnMore: "Learn More",
      essential: "Essential cookies",
      functional: "Functional cookies",
      performance: "Performance cookies", 
      marketing: "Marketing cookies",
      essentialDesc: "Required for the website to function properly",
      functionalDesc: "Remember your preferences and settings",
      performanceDesc: "Help us understand how visitors use our site",
      marketingDesc: "Used for targeted advertising (not currently used)",
      cannotDisable: "Cannot be disabled"
    },
    ar: {
      title: "إعدادات ملفات تعريف الارتباط",
      message: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك",
      accept: "قبول الكل",
      decline: "رفض",
      configure: "تكوين",
      save: "حفظ التفضيلات",
      cancel: "إلغاء",
      learnMore: "اعرف المزيد",
      essential: "ملفات تعريف الارتباط الأساسية",
      functional: "ملفات تعريف الارتباط الوظيفية",
      performance: "ملفات تعريف الارتباط الخاصة بالأداء",
      marketing: "ملفات تعريف الارتباط التسويقية",
      essentialDesc: "مطلوبة لكي يعمل الموقع بشكل صحيح",
      functionalDesc: "تتذكر تفضيلاتك وإعداداتك",
      performanceDesc: "تساعدنا في فهم كيفية استخدام الزوار لموقعنا",
      marketingDesc: "تُستخدم للإعلانات المستهدفة (غير مستخدمة حاليًا)",
      cannotDisable: "لا يمكن تعطيلها"
    }
  };

  const currentContent = content[language as keyof typeof content];

  if (!showCookieBanner) return null;

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      performance: true,
      marketing: true
    };
    setCookiePreferences(allAccepted);
  };

  const handleDecline = () => {
    const onlyEssential = {
      essential: true,
      functional: false,
      performance: false,
      marketing: false
    };
    setCookiePreferences(onlyEssential);
  };

  const handleSavePreferences = () => {
    // Only save if at least essential cookies are accepted
    if (localPreferences.essential) {
      setCookiePreferences(localPreferences);
    }
    setShowConfig(false);
  };

  const handleConfigureChange = (type: string, value: boolean) => {
    if (type === 'essential') return; // Cannot disable essential
    setLocalPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleOpenConfig = () => {
    setLocalPreferences(cookiePreferences);
    setShowConfig(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-4 left-4 z-50 max-w-sm ${
          language === 'ar' ? 'font-arabic' : 'font-sans'
        }`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        {!showConfig ? (
          // Compact banner
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-lg shadow-lg border border-gray-200 p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {currentContent.title}
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  {currentContent.message}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
                  >
                    {currentContent.accept}
                  </button>
                  <button
                    onClick={handleOpenConfig}
                    className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                  >
                    {currentContent.configure}
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    {currentContent.decline}
                  </button>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        ) : (
          // Configuration panel
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">
                {currentContent.title}
              </h3>
              <button
                onClick={() => setShowConfig(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3 mb-4">
              {/* Essential Cookies */}
              <div className="flex items-start gap-3 p-2 bg-gray-50 rounded-md">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-900">
                      {currentContent.essential}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({currentContent.cannotDisable})
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    {currentContent.essentialDesc}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start gap-3 p-2">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-900">
                    {currentContent.functional}
                  </span>
                  <p className="text-xs text-gray-600 mt-1">
                    {currentContent.functionalDesc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localPreferences.functional}
                    onChange={(e) => handleConfigureChange('functional', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-6 h-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Performance Cookies */}
              <div className="flex items-start gap-3 p-2">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-900">
                    {currentContent.performance}
                  </span>
                  <p className="text-xs text-gray-600 mt-1">
                    {currentContent.performanceDesc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localPreferences.performance}
                    onChange={(e) => handleConfigureChange('performance', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-6 h-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-3 p-2">
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-900">
                    {currentContent.marketing}
                  </span>
                  <p className="text-xs text-gray-600 mt-1">
                    {currentContent.marketingDesc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localPreferences.marketing}
                    onChange={(e) => handleConfigureChange('marketing', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-6 h-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleSavePreferences}
                className="w-full px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
              >
                {currentContent.save}
              </button>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setShowConfig(false)}
                  className="text-xs text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  {currentContent.cancel}
                </button>
                <a
                  href="/cookies"
                  className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {currentContent.learnMore}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner; 