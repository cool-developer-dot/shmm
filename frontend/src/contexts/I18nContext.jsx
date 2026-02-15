import { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '../translations/en.json';
import urTranslations from '../translations/ur.json';
import hiTranslations from '../translations/hi.json';
import arTranslations from '../translations/ar.json';
import zhTranslations from '../translations/zh.json';

const translations = {
  en: enTranslations,
  ur: urTranslations,
  hi: hiTranslations,
  ar: arTranslations,
  zh: zhTranslations,
};

const I18nContext = createContext();

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
      // Set initial direction - RTL for Arabic and Urdu
      if (savedLanguage === 'ar' || savedLanguage === 'ur') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }
  }, []);

  // Save language to localStorage and update document direction whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Set RTL for Arabic and Urdu, LTR for others
    if (language === 'ar' || language === 'ur') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        // Fallback to English if translation is missing
        let fallbackValue = translations.en;
        for (const fk of keys) {
          fallbackValue = fallbackValue?.[fk];
        }
        value = fallbackValue || key;
        break;
      }
    }
    
    // Replace parameters in the translation string
    if (typeof value === 'string' && params) {
      Object.keys(params).forEach(param => {
        value = value.replace(`{${param}}`, params[param]);
      });
    }
    
    return value || key;
  };

  const value = {
    language,
    changeLanguage,
    t,
    availableLanguages: [
      { code: 'en', name: 'English' },
      { code: 'ur', name: 'اردو' },
      { code: 'hi', name: 'हिंदी' },
      { code: 'ar', name: 'العربية' },
      { code: 'zh', name: '中文' },
    ],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

