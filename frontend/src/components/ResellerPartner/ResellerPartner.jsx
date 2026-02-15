import React, { useEffect, useRef, useState } from 'react';
import './ResellerPartner.css';
import { useI18n } from '../../contexts/I18nContext';

const ResellerPartner = ({ onJoinClick }) => {
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
      { threshold: 0.2 }
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

  const benefits = [
    {
      title: t('reseller.wholesalePrices'),
      desc: t('reseller.wholesalePricesDesc'),
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: t('reseller.highSpeedAPI'),
      desc: t('reseller.highSpeedAPIDesc'),
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    },
    {
      title: t('reseller.prioritySupport'),
      desc: t('reseller.prioritySupportDesc'),
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    }
  ];

  const steps = [
    { num: "01", title: t('reseller.step1Title'), desc: t('reseller.step1Desc') },
    { num: "02", title: t('reseller.step2Title'), desc: t('reseller.step2Desc') },
    { num: "03", title: t('reseller.step3Title'), desc: t('reseller.step3Desc') }
  ];

  return (
    <section className="reseller-section" ref={sectionRef}>
      <div className="reseller-bg-glow"></div>
      
      <div className="reseller-container">
        <div className={`reseller-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2 className="reseller-title">{t('reseller.title')}</h2>
          <p className="reseller-subtitle">
            {t('reseller.subtitle')}
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`benefit-card benefit-card-${index} ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--benefit-color': benefit.color,
                '--benefit-gradient': benefit.gradient
              }}
            >
              <div className="benefit-image-wrapper">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="benefit-image"
                  loading="lazy"
                />
                <div className="benefit-image-overlay"></div>
              </div>
              <div className="benefit-content">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
              <div className="benefit-shine"></div>
              <div className="benefit-glow"></div>
            </div>
          ))}
        </div>

        <div className={`steps-container ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="steps-line"></div>
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-item"
              style={{ animationDelay: `${0.4 + (index * 0.2)}s` }}
            >
              <div className="step-circle">
                <span>{step.num}</span>
              </div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`cta-container ${isVisible ? 'animate-scale-up' : ''}`}>
          <a 
            href="https://reseller.mshsmm.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="reseller-btn"
          >
            <span>{t('reseller.startResellingNow')}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResellerPartner;

