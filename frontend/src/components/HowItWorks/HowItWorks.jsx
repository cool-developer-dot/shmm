import React, { useEffect, useRef, useState } from 'react';
import './HowItWorks.css';
import { useI18n } from '../../contexts/I18nContext';

const HowItWorks = ({ onSignup, onViewServices }) => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  const steps = [
    {
      id: 1,
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Desc'),
      buttonText: t('howItWorks.step1Button'),
      action: onSignup,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
      )
    },
    {
      id: 2,
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Desc'),
      buttonText: t('howItWorks.step2Button'),
      action: onSignup, // Redirect to signup/login first usually
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    },
    {
      id: 3,
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Desc'),
      buttonText: t('howItWorks.step3Button'),
      action: onViewServices,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        </svg>
      )
    },
    {
      id: 4,
      title: t('howItWorks.step4Title'),
      description: t('howItWorks.step4Desc'),
      buttonText: t('howItWorks.step4Button'),
      action: onSignup,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="how-it-works-section" ref={sectionRef}>
      <div className="hiw-background-glow"></div>
      
      <div className="hiw-container">
        <div className={`hiw-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <span className="hiw-label">{t('howItWorks.label')}</span>
          <h2 className="hiw-title">{t('howItWorks.title')}</h2>
          <p className="hiw-subtitle">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="hiw-steps-grid">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`hiw-card ${isVisible ? 'animate-card-enter' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="hiw-card-content">
                <div className="hiw-number-wrapper">
                  <span className="hiw-number">{step.id}</span>
                  <div className="hiw-icon-circle">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.description}</p>
                
                <button 
                  className="hiw-action-btn"
                  onClick={step.action}
                >
                  {step.buttonText}
                </button>
              </div>
              <div className="hiw-card-border"></div>
            </div>
          ))}
          
          {/* Connecting line for desktop */}
          <div className={`hiw-connector ${isVisible ? 'animate-connector' : ''}`}></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

