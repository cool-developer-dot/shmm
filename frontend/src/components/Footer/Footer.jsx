import React from 'react';
import './Footer.css';
import { useI18n } from '../../contexts/I18nContext';

const FOOTER_MAP_URL = 'https://www.google.com/maps/search/MSH+TECH+GROUP+Head+Office+Riaz+Town+Khan+Pur+Punjab+Pakistan';

const Footer = () => {
  const { t } = useI18n();
  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="newsletter-section">
          <h2 className="newsletter-heading">{t('footer.subscribeNewsletter')}</h2>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder={t('footer.enterEmailAddress')}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                {t('footer.subscribe')}
              </button>
            </div>
          </form>
        </div>

        <div className="footer-content">
          <div className="footer-column footer-column-first">
            <h3 className="footer-logo">{t('footer.smmPanel')}</h3>
            <p className="footer-smm-about">{t('footer.smmAbout')}</p>
            <p className="footer-privacy-text">{t('footer.privacyText')}</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">{t('footer.usefulLinks')}</h4>
            <ul className="footer-links">
              <li><a href="#home-section" onClick={scrollToSection('home-section')}>{t('footer.home')}</a></li>
              <li><a href="#about-section" onClick={scrollToSection('about-section')}>{t('footer.aboutUs')}</a></li>
              <li><a href="#services-section" onClick={scrollToSection('services-section')}>{t('footer.services')}</a></li>
              <li><a href="#testimonials-section" onClick={scrollToSection('testimonials-section')}>{t('footer.testimonials')}</a></li>
              <li><a href="#team-section" onClick={scrollToSection('team-section')}>{t('footer.ourTeam')}</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">{t('footer.services')}</h4>
            <ul className="footer-links">
              <li><a href="#services-section" onClick={scrollToSection('services-section')}>{t('footer.socialMediaGrowth')}</a></li>
              <li><a href="#services-section" onClick={scrollToSection('services-section')}>{t('footer.contentCreation')}</a></li>
              <li><a href="#services-section" onClick={scrollToSection('services-section')}>{t('footer.analyticsReporting')}</a></li>
              <li><a href="#services-section" onClick={scrollToSection('services-section')}>{t('footer.brandManagement')}</a></li>
              <li><a href="#services-section" onClick={scrollToSection('services-section')}>{t('footer.influencerMarketing')}</a></li>
              <li><a href="#announcements-section" onClick={scrollToSection('announcements-section')}>{t('footer.announcement')}</a></li>
              <li><a href="#refund-policy-section" onClick={scrollToSection('refund-policy-section')}>{t('footer.paymentRefundPolicy')}</a></li>
              <li><a href="#privacy-policy-section" onClick={scrollToSection('privacy-policy-section')}>{t('footer.privacyPolicy')}</a></li>
            </ul>
          </div>

          <div className="footer-column footer-column-last">
            <h4 className="footer-column-title">{t('footer.ourLocation')}</h4>
            <div className="location-info">
              <div className="location-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="location-address">{t('footer.locationAddress')}</p>
              <a href="tel:+923363333442" className="footer-uan-in-location" aria-label={t('contact.uanClickToCall')}>
                <span className="footer-uan-icon-small">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>{t('footer.uanHelpline')}: +92-336-3333-442</span>
              </a>
              <a href={FOOTER_MAP_URL} target="_blank" rel="noopener noreferrer" className="location-link">
                {t('footer.viewOnMap')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <h4 className="footer-column-title footer-column-title-sub">{t('footer.followUs')}</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61583594009160" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@mshsmmpanel" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="footer-legal">
              <a href="#refund-policy-section" onClick={scrollToSection('refund-policy-section')} className="footer-legal-link">{t('footer.termsConditions')}</a>
              <span className="footer-legal-separator">|</span>
              <a href="#privacy-policy-section" onClick={scrollToSection('privacy-policy-section')} className="footer-legal-link">{t('footer.privacyPolicy')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
