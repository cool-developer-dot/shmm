import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Team.css';
import { useI18n } from '../../contexts/I18nContext';
import teamImage11 from '../../assets/11.jpeg';
import teamImage12 from '../../assets/12.jpeg';
import teamImage13 from '../../assets/13.jpeg';
import teamImage14 from '../../assets/14.jpeg';
import teamImage15 from '../../assets/15.jpeg';
import teamImage16 from '../../assets/16.jpeg';

const Team = () => {
  const { t, language } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const teamMembers = useMemo(() => [
    {
      id: 1,
      name: t('team.member1Name'),
      role: t('team.influencerMarketingManager'),
      image: teamImage11,
    },
    {
      id: 2,
      name: t('team.member2Name'),
      role: t('team.founderCeo'),
      image: teamImage12,
    },
    {
      id: 3,
      name: t('team.member3Name'),
      role: t('team.headOfSocialMedia'),
      image: teamImage13,
    },
    {
      id: 4,
      name: t('team.member4Name'),
      role: t('team.operationsManager'),
      image: teamImage14,
    },
    {
      id: 5,
      name: t('team.member5Name'),
      role: t('team.brandCommunicationsManager'),
      image: teamImage15,
    },
    {
      id: 6,
      name: t('team.member6Name'),
      role: t('team.performanceMarketingSpecialist'),
      image: teamImage16,
    },
  ], [t, language]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const member = teamMembers[currentIndex];

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        <div className={`team-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2 key={`team-title-${language}`} className="section-title">{t('team.title')}</h2>
          <p key={`team-subtitle-${language}`} className="section-subtitle">{t('team.subtitle')}</p>
        </div>

        <div key={`team-slider-${language}`} className={`team-slider-wrapper team-carousel ${isVisible ? 'animate-fade-in' : ''}`}>
          <button
            type="button"
            className="team-arrow team-arrow-prev"
            onClick={goToPrev}
            aria-label="Previous member"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="team-carousel-card-wrapper">
            <div className="team-card team-card-single">
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
                <div className="member-overlay">
                  <div className="social-links">
                    <a href="#" className="social-icon" aria-label="LinkedIn">IN</a>
                    <a href="#" className="social-icon" aria-label="Twitter">TW</a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="team-arrow team-arrow-next"
            onClick={goToNext}
            aria-label="Next member"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="team-dots">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`team-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
