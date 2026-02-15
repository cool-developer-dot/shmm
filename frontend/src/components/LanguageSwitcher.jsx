import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ mobile = false }) => {
  const { language, changeLanguage, availableLanguages } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = availableLanguages.find(lang => lang.code === language) || availableLanguages[0];

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  if (mobile) {
    return (
      <div className="language-switcher mobile-language-switcher" ref={dropdownRef}>
        <button
          type="button"
          className="mobile-language-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Change language"
        >
          <span className="language-icon">🌐</span>
          <span className="language-label">{currentLanguage.name}</span>
          <span className={`language-arrow ${isOpen ? 'open' : ''}`}>▼</span>
        </button>
        
        {isOpen && (
          <div className="mobile-language-dropdown">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className={`mobile-language-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        type="button"
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <span className="language-icon">🌐</span>
        <span className="language-label">{currentLanguage.name}</span>
        <span className={`language-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

