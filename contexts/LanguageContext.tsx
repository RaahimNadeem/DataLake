"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  cookieConsent: boolean | null;
  setCookieConsent: (consent: boolean) => void;
  showCookieBanner: boolean;
  setShowCookieBanner: (show: boolean) => void;
  cookiePreferences: {
    essential: boolean;
    functional: boolean;
    performance: boolean;
    marketing: boolean;
  };
  setCookiePreferences: (preferences: {
    essential: boolean;
    functional: boolean;
    performance: boolean;
    marketing: boolean;
  }) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Log data processing activity
const logDataActivity = async (activity: {
  type: string;
  description: string;
  dataType?: string;
  legalBasis?: string;
  consent?: boolean;
}) => {
  try {
    await fetch('/api/data-logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activity),
    });
  } catch (error) {
    console.error('Failed to log data activity:', error);
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [cookiePreferences, setCookiePreferencesState] = useState({
    essential: true,
    functional: false,
    performance: false,
    marketing: false
  });

  // Load language preference and cookie settings from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('datalake-language');
    if (savedLanguage === 'ar' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
    }

    // Check for cookie consent
    const savedConsent = localStorage.getItem('datalake-cookie-consent');
    if (savedConsent === null) {
      setShowCookieBanner(true);
    } else {
      setCookieConsent(savedConsent === 'true');
    }

    // Load cookie preferences
    const savedPreferences = localStorage.getItem('datalake-cookie-preferences');
    if (savedPreferences) {
      try {
        const preferences = JSON.parse(savedPreferences);
        setCookiePreferencesState({
          essential: preferences.essential ?? true,
          functional: preferences.functional ?? false,
          performance: preferences.performance ?? false,
          marketing: preferences.marketing ?? false
        });
      } catch (error) {
        console.error('Failed to parse cookie preferences:', error);
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    // Save to localStorage if functional cookies are accepted
    if (cookiePreferences.functional) {
      localStorage.setItem('datalake-language', newLanguage);
      
      // Log language preference change
      logDataActivity({
        type: 'LANGUAGE_PREFERENCE_UPDATE',
        description: `Language preference changed to ${newLanguage}`,
        dataType: 'User preference',
        legalBasis: 'Consent',
        consent: true
      });
    }
  };

  const handleSetCookieConsent = (consent: boolean) => {
    setCookieConsent(consent);
    setShowCookieBanner(false);
    localStorage.setItem('datalake-cookie-consent', consent.toString());
    
    // Log cookie consent decision
    logDataActivity({
      type: 'COOKIE_CONSENT',
      description: `Cookie consent ${consent ? 'granted' : 'denied'}`,
      dataType: 'Cookie preferences',
      legalBasis: 'Consent',
      consent: consent
    });
    
    // If consent is given, save current language preference
    if (consent) {
      localStorage.setItem('datalake-language', language);
      
      // Log initial language preference
      logDataActivity({
        type: 'LANGUAGE_PREFERENCE_SAVE',
        description: `Initial language preference saved: ${language}`,
        dataType: 'User preference',
        legalBasis: 'Consent',
        consent: true
      });
    }
  };

  const handleSetCookiePreferences = (preferences: {
    essential: boolean;
    functional: boolean;
    performance: boolean;
    marketing: boolean;
  }) => {
    setCookiePreferencesState(preferences);
    
    // Save preferences to localStorage
    localStorage.setItem('datalake-cookie-preferences', JSON.stringify(preferences));
    
    // Set consent based on essential cookies (always required)
    const hasConsent = preferences.essential;
    setCookieConsent(hasConsent);
    setShowCookieBanner(false);
    localStorage.setItem('datalake-cookie-consent', hasConsent.toString());
    
    // Log detailed cookie preferences
    logDataActivity({
      type: 'COOKIE_PREFERENCES_UPDATE',
      description: `Cookie preferences updated: Essential=${preferences.essential}, Functional=${preferences.functional}, Performance=${preferences.performance}, Marketing=${preferences.marketing}`,
      dataType: 'Cookie preferences',
      legalBasis: 'Consent',
      consent: hasConsent
    });
    
    // Save language preference if functional cookies are accepted
    if (preferences.functional) {
      localStorage.setItem('datalake-language', language);
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      cookieConsent, 
      setCookieConsent: handleSetCookieConsent,
      showCookieBanner,
      setShowCookieBanner,
      cookiePreferences,
      setCookiePreferences: handleSetCookiePreferences
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 