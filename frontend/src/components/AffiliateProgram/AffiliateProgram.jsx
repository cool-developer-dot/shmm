import React, { useEffect, useRef, useState } from 'react';
import './AffiliateProgram.css';
import { useI18n } from '../../contexts/I18nContext';

const AffiliateProgram = ({ onJoinClick }) => {
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

  const steps = [
    {
      number: '01',
      title: t('affiliate.signUp'),
      description: t('affiliate.signUpDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      number: '02',
      title: t('affiliate.getYourLink'),
      description: t('affiliate.getYourLinkDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    },
    {
      number: '03',
      title: t('affiliate.promote'),
      description: t('affiliate.promoteDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      number: '04',
      title: t('affiliate.earnCommission'),
      description: t('affiliate.earnCommissionDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: t('affiliate.upTo30Commission'),
      description: t('affiliate.upTo30CommissionDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: t('affiliate.weeklyPayouts'),
      description: t('affiliate.weeklyPayoutsDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: t('affiliate.marketingMaterials'),
      description: t('affiliate.marketingMaterialsDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      )
    },
    {
      title: t('affiliate.dedicatedSupport'),
      description: t('affiliate.dedicatedSupportDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    },
    {
      title: t('affiliate.realTimeAnalytics'),
      description: t('affiliate.realTimeAnalyticsDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: t('affiliate.noMinimumThreshold'),
      description: t('affiliate.noMinimumThresholdDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ];

  const whyJoin = [
    {
      title: t('affiliate.trustedPlatform'),
      description: t('affiliate.trustedPlatformDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
          <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3" />
        </svg>
      )
    },
    {
      title: t('affiliate.highConversionRates'),
      description: t('affiliate.highConversionRatesDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: t('affiliate.dedicatedSupport24'),
      description: t('affiliate.dedicatedSupport24Desc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    },
    {
      title: t('affiliate.marketingTools'),
      description: t('affiliate.marketingToolsDesc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      )
    }
  ];

  return (
    <section className="affiliate-section" ref={sectionRef}>
      <div className="affiliate-bg-glow"></div>
      
      <div className="affiliate-container">
        {/* Hero Section */}
        <div className={`affiliate-hero ${isVisible ? 'animate-fade-up' : ''}`}>
          <h1 className="affiliate-hero-title">{t('affiliate.heroTitle')}</h1>
          <p className="affiliate-hero-description">
            {t('affiliate.heroDescription')}
          </p>
          <button className="affiliate-cta-button" onClick={onJoinClick}>
            {t('affiliate.joinAffiliateProgram')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* How It Works */}
        <div className={`affiliate-section-block ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="section-title">{t('affiliate.howItWorks')}</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`step-card ${isVisible ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commission & Benefits */}
        <div className={`affiliate-section-block ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="section-title">{t('affiliate.commissionBenefits')}</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`benefit-card ${isVisible ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Join Us */}
        <div className={`affiliate-section-block ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="section-title">{t('affiliate.whyJoinUs')}</h2>
          <div className="why-join-grid">
            {whyJoin.map((item, index) => (
              <div 
                key={index}
                className={`why-join-card ${isVisible ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="why-join-icon">{item.icon}</div>
                <h3 className="why-join-title">{item.title}</h3>
                <p className="why-join-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate Dashboard Preview */}
        <div className={`affiliate-section-block ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="section-title">{t('affiliate.dashboardPreview')}</h2>
          <div className="dashboard-preview">
            <div className="dashboard-card">
              <div className="dashboard-stat">
                <div className="stat-icon earnings">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div className="stat-content">
                  <p className="stat-label">{t('affiliate.totalEarnings')}</p>
                  <p className="stat-value">$12,450.00</p>
                  <p className="stat-change">+15.2% this month</p>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-stat">
                <div className="stat-icon clicks">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                  </svg>
                </div>
                <div className="stat-content">
                  <p className="stat-label">{t('affiliate.totalClicks')}</p>
                  <p className="stat-value">8,234</p>
                  <p className="stat-change">+8.5% this month</p>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-stat">
                <div className="stat-icon conversions">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="stat-content">
                  <p className="stat-label">{t('affiliate.conversions')}</p>
                  <p className="stat-value">342</p>
                  <p className="stat-change">+12.3% this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`affiliate-cta-section ${isVisible ? 'animate-scale-up' : ''}`}>
          <h2 className="cta-title">{t('affiliate.readyToStartEarning')}</h2>
          <p className="cta-description">
            {t('affiliate.readyToStartEarningDesc')}
          </p>
          <button className="affiliate-cta-button large" onClick={onJoinClick}>
            {t('affiliate.startEarningToday')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProgram;

