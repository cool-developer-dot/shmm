import React, { useState, useEffect, useRef } from 'react';
import './ContactUs.css';
import { useI18n } from '../../contexts/I18nContext';

const ContactUs = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.emailInvalid');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.subjectRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.messageMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic would go here
      console.log('Form submitted:', formData);
      alert(t('contact.thankYouMessage'));
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-bg-glow"></div>
      
      <div className="contact-container">
        {/* Hero Section */}
        <div className={`contact-hero ${isVisible ? 'animate-fade-up' : ''}`}>
          <h1 className="contact-hero-title">{t('contact.title')}</h1>
          <p className="contact-hero-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className={`contact-form-wrapper ${isVisible ? 'animate-fade-in' : ''}`}>
            <h2 className="form-title">{t('contact.sendMessage')}</h2>
            <p className="form-description">{t('contact.formDescription')}</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {t('contact.name')} <span className="required">{t('contact.required')}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder={t('contact.yourFullName')}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t('contact.email')} <span className="required">{t('contact.required')}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder={t('contact.yourEmailExample')}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  {t('contact.subject')} <span className="required">{t('contact.required')}</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder={t('contact.whatIsThisRegarding')}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t('contact.message')} <span className="required">{t('contact.required')}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder={t('contact.tellUsHowWeCanHelp')}
                  rows="6"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-button">
                {t('contact.sendMessageButton')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
            <p className="form-footer-note">{t('contact.formFooterNote')}</p>
          </div>

          {/* Contact Information */}
          <div className={`contact-info-wrapper ${isVisible ? 'animate-fade-in' : ''}`}>
            <h2 className="info-title">{t('contact.getInTouch')}</h2>
            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-icon phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="info-card-title">{t('contact.uanHelpline')}</h3>
                <a href="tel:+923363333442" className="info-link">
                  +92-336-3333-442
                </a>
                <p className="info-description">{t('contact.uanClickToCall')}</p>
              </div>

              <div className="info-card">
                <div className="info-icon email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 className="info-card-title">{t('contact.emailSupport')}</h3>
                <a href="mailto: support@mshsmm.com" className="info-link">
                support@mshsmm.com
                </a>
                <p className="info-description">{t('contact.respondWithin24Hours')}</p>
              </div>

              <div className="info-card">
                <div className="info-icon chat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="info-card-title">{t('contact.liveChat')}</h3>
                <a href="https://wa.me/923373333442" className="info-link" target="_blank" rel="noopener noreferrer">
                  {t('contact.chatOnWhatsApp')}
                </a>
                <p className="info-description">{t('contact.available247')}</p>
              </div>

              <div className="info-card">
                <div className="info-icon hours">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="info-card-title">{t('contact.businessHours')}</h3>
                <div className="business-hours">
                  <p className="hours-text">{t('contact.mondayFriday')}</p>
                  <p className="hours-text">{t('contact.saturday')}</p>
                  <p className="hours-text">{t('contact.sunday')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

