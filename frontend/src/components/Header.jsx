import { useState, useEffect } from 'react';
import './Header.css';
import logoImage from '../assets/lgg.png';
import { useI18n } from '../contexts/I18nContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ onShowLogin, onShowSignup, onShowServices, onShowAbout, onShowFreeOffers, onShowHome, onShowAffiliate, onShowContact, onShowGuideUs }) => {
  const { t } = useI18n();
  const [activeLink, setActiveLink] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Read theme from localStorage on mount and apply it
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'gray')) 
      ? savedTheme 
      : 'dark'; // Default to dark theme
    
    setTheme(initialTheme);
    
    // Apply theme immediately on mount
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-gray');
    document.body.classList.add(`theme-${initialTheme}`);
  }, []);

  // Apply theme to body and save to localStorage whenever theme changes
  useEffect(() => {
    // Remove all existing theme classes
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-gray');
    // Add the current theme class
    document.body.classList.add(`theme-${theme}`);
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle scroll behavior - show header when scrolling up, hide when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header at the top
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header (only after 100px)
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const themes = ['light', 'dark', 'gray'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    setTheme(newTheme);
  };

  const navLinks = [
    { key: 'HOME', translationKey: 'nav.home' },
    { key: 'ABOUT US', translationKey: 'nav.aboutUs' },
    { key: 'SERVICES', translationKey: 'nav.services' },
    { key: 'FREE OFFERS', translationKey: 'nav.freeOffers' },
    { key: 'GUIDE US', translationKey: 'nav.guideUs' },
    { key: 'AFFILIATE', translationKey: 'nav.affiliate' },
    { key: 'CONTACT US', translationKey: 'nav.contactUs' },
  ];

  const handleLinkClick = (linkKey) => {
    setActiveLink(linkKey);
    setIsMenuOpen(false);

    if (linkKey === 'SERVICES') {
      if (onShowServices) onShowServices();
    } else if (linkKey === 'ABOUT US') {
      if (onShowAbout) onShowAbout();
    } else if (linkKey === 'FREE OFFERS') {
      if (onShowFreeOffers) onShowFreeOffers();
    } else if (linkKey === 'HOME') {
      if (onShowHome) onShowHome();
    } else if (linkKey === 'GUIDE US') {
      if (onShowGuideUs) onShowGuideUs();
    } else if (linkKey === 'AFFILIATE') {
      if (onShowAffiliate) onShowAffiliate();
    } else if (linkKey === 'CONTACT US') {
      if (onShowContact) onShowContact();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); handleLinkClick('HOME'); }}>
            <img src={logoImage} alt="MSH Telecom Network Logo" className="logo-img" />
          </a>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="header-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.key} className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${activeLink === link.key ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.key);
                  }}
                >
                  {t(link.translationKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="header-auth">
          <LanguageSwitcher />
          <button 
            type="button"
            className="theme-toggle" 
            onClick={handleThemeToggle} 
            aria-label="Toggle theme"
          >
            <span className="theme-icon">🎨</span>
            <span className="theme-label">{t(`theme.${theme}`)}</span>
          </button>
          <a 
            href="https://mshsmm.com/contact" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-free-games"
          >
            Free Games
          </a>
          <a 
            href="https://mshsmm.com/blog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-login"
          >
            {t('auth.login')}
          </a>
          <a 
            href="https://www.mshsmm.com/signup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-signup"
          >
            {t('auth.signUp')}
          </a>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.key} className="mobile-nav-item">
                <a
                  href="#"
                  className={`mobile-nav-link ${activeLink === link.key ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.key);
                  }}
                >
                  {t(link.translationKey)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-auth">
            <LanguageSwitcher mobile={true} />
            <button 
              type="button"
              className="mobile-theme-toggle" 
              onClick={handleThemeToggle} 
              aria-label="Toggle theme"
            >
              <span className="theme-icon">🎨</span>
              <span className="theme-label">{t(`theme.${theme}`)}</span>
            </button>
            <a 
              href="https://mshsmm.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-btn-free-games"
            >
              Free Games
            </a>
            <a 
              href="https://mshsmm.com/blog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-btn-login"
            >
              {t('auth.login')}
            </a>
            <a 
              href="https://www.mshsmm.com/signup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-btn-signup"
            >
              {t('auth.signUp')}
            </a>
          </div>
        </nav>  
      </div>
    </header>
  );
};

export default Header;
