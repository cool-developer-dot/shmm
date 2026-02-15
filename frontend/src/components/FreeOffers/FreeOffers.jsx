import React, { useEffect, useRef, useState } from 'react';
import './FreeOffers.css';
import { useI18n } from '../../contexts/I18nContext';
import instaIcon from '../../assets/insta.jpg';
import tiktokIcon from '../../assets/tiktok.png';
import youtubeIcon from '../../assets/youtube.jpg';

const FreeOffers = ({ onSignup }) => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
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

  const offers = [
    {
      id: 1,
      platform: t('freeOffers.instagram'),
      service: t('freeOffers.freeLikes'),
      amount: t('freeOffers.likesAmount'),
      iconImg: instaIcon,
      gradient: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
      description: t('freeOffers.boostEngagement'),
    },
    {
      id: 2,
      platform: t('freeOffers.tiktok'),
      service: t('freeOffers.freeViews'),
      amount: t('freeOffers.viewsAmount'),
      iconImg: tiktokIcon,
      gradient: 'linear-gradient(135deg, #000000, #25f4ee, #fe2c55)',
      description: t('freeOffers.getContentSeen'),
    },
    {
      id: 3,
      platform: t('freeOffers.youtube'),
      service: t('freeOffers.freeSubscribers'),
      amount: t('freeOffers.subsAmount'),
      iconImg: youtubeIcon,
      gradient: 'linear-gradient(135deg, #ff0000, #cc0000)',
      description: t('freeOffers.kickstartGrowth'),
    },
  ];

  return (
    <section className="free-offers-section" ref={sectionRef}>
      <div className="free-offers-container">
        <div className={`section-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2 className="section-title">{t('freeOffers.title')}</h2>
          <p className="section-subtitle">{t('freeOffers.subtitle')}</p>
        </div>

        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div 
              key={offer.id} 
              className={`offer-card ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="offer-glow" style={{ background: offer.gradient }}></div>
              <div className="offer-content">
                <div className="offer-icon-wrapper">
                  <img src={offer.iconImg} alt={offer.platform} className="offer-icon-img" />
                </div>
                <h3 className="offer-platform">{offer.platform}</h3>
                <div className="offer-service">{offer.service}</div>
                <div className="offer-amount">{offer.amount}</div>
                <p className="offer-description">{offer.description}</p>
                <button 
                  className="claim-btn"
                  onClick={onSignup}
                >
                  {t('freeOffers.claimNow')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`trial-banner ${isVisible ? 'animate-fade-in delay-3' : ''}`}>
          <div className="banner-content">
            <h3>{t('freeOffers.readyForMore')}</h3>
            <p>{t('freeOffers.signUpUnlock')}</p>
          </div>
          <button className="banner-btn" onClick={onSignup}>
            {t('freeOffers.getStarted')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeOffers;

