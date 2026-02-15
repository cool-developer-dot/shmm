import React, { useEffect, useRef, useState, useMemo } from 'react';
import './AboutUs.css';
import { useI18n } from '../../contexts/I18nContext';
import companyLogo1 from '../../assets/3.png';
import companyLogo2 from '../../assets/18.png';
import companyLogo3 from '../../assets/19.png';
import companyLogo4 from '../../assets/20.png';

const AboutUs = () => {
  const { t, language } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const modalRef = useRef(null);

  const companiesData = useMemo(() => {
    const getCompanyKey = (companyName) => {
      const keyMap = {
        'MSH TECH GROUP OF COMPANIES': 'mshTechGroup',
        'MSH DIGITAL SOLUTIONS': 'mshDigitalSolutions',
        'MSH TELECOM NETWORK': 'mshTelecomNetwork',
        'MSH DIGITAL HUB': 'mshDigitalHub'
      };
      return keyMap[companyName] || companyName;
    };

    const getServices = (companyKey) => {
      const services = {};
      const serviceCategories = t(`about.companies.${companyKey}.serviceCategories`, { returnObjects: true });
      if (Array.isArray(serviceCategories)) {
        serviceCategories.forEach((category, index) => {
          const categoryKey = t(`about.companies.${companyKey}.serviceCategories.${index}.name`);
          const items = t(`about.companies.${companyKey}.serviceCategories.${index}.items`, { returnObjects: true });
          if (Array.isArray(items)) {
            services[categoryKey] = items;
          }
        });
      }
      return services;
    };

    return {
      'MSH TECH GROUP OF COMPANIES': {
        name: t('about.companies.mshTechGroup.name'),
        logo: companyLogo1,
        description: t('about.companies.mshTechGroup.description'),
        registration: t('about.companies.mshTechGroup.registration'),
        services: {
          [t('about.companies.mshTechGroup.services.techDev.name')]: t('about.companies.mshTechGroup.services.techDev.items', { returnObjects: true }),
          [t('about.companies.mshTechGroup.services.hosting.name')]: t('about.companies.mshTechGroup.services.hosting.items', { returnObjects: true }),
          [t('about.companies.mshTechGroup.services.digitalMarketing.name')]: t('about.companies.mshTechGroup.services.digitalMarketing.items', { returnObjects: true }),
          [t('about.companies.mshTechGroup.services.creative.name')]: t('about.companies.mshTechGroup.services.creative.items', { returnObjects: true }),
          [t('about.companies.mshTechGroup.services.education.name')]: t('about.companies.mshTechGroup.services.education.items', { returnObjects: true })
        },
        leadership: {
          ceo: t('about.companies.mshTechGroup.leadership.ceo'),
          ceoTitle: t('about.companies.mshTechGroup.leadership.ceoTitle'),
          team: t('about.companies.mshTechGroup.leadership.team', { returnObjects: true })
        },
        workforce: {
          employees: t('about.companies.mshTechGroup.workforce.employees'),
          users: t('about.companies.mshTechGroup.workforce.users')
        },
        mission: t('about.companies.mshTechGroup.mission'),
        vision: t('about.companies.mshTechGroup.vision'),
        values: t('about.companies.mshTechGroup.values', { returnObjects: true })
      },
      'MSH DIGITAL SOLUTIONS': {
        name: t('about.companies.mshDigitalSolutions.name'),
        logo: companyLogo4,
        description: t('about.companies.mshDigitalSolutions.description'),
        registration: t('about.companies.mshDigitalSolutions.registration'),
        services: {
          [t('about.companies.mshDigitalSolutions.services.development.name')]: t('about.companies.mshDigitalSolutions.services.development.items', { returnObjects: true }),
          [t('about.companies.mshDigitalSolutions.services.digitalMarketing.name')]: t('about.companies.mshDigitalSolutions.services.digitalMarketing.items', { returnObjects: true }),
          [t('about.companies.mshDigitalSolutions.services.creative.name')]: t('about.companies.mshDigitalSolutions.services.creative.items', { returnObjects: true }),
          [t('about.companies.mshDigitalSolutions.services.media.name')]: t('about.companies.mshDigitalSolutions.services.media.items', { returnObjects: true })
        },
        leadership: {
          ceo: t('about.companies.mshDigitalSolutions.leadership.ceo'),
          ceoTitle: t('about.companies.mshDigitalSolutions.leadership.ceoTitle'),
          team: t('about.companies.mshDigitalSolutions.leadership.team', { returnObjects: true })
        },
        workforce: {
          employees: t('about.companies.mshDigitalSolutions.workforce.employees')
        }
      },
      'MSH TELECOM NETWORK': {
        name: t('about.companies.mshTelecomNetwork.name'),
        logo: companyLogo2,
        description: t('about.companies.mshTelecomNetwork.description'),
        registration: t('about.companies.mshTelecomNetwork.registration'),
        services: {
          [t('about.companies.mshTelecomNetwork.services.telecom.name')]: t('about.companies.mshTelecomNetwork.services.telecom.items', { returnObjects: true })
        },
        leadership: {
          ceo: t('about.companies.mshTelecomNetwork.leadership.ceo'),
          ceoTitle: t('about.companies.mshTelecomNetwork.leadership.ceoTitle'),
          description: t('about.companies.mshTelecomNetwork.leadership.description')
        },
        workforce: {
          users: t('about.companies.mshTelecomNetwork.workforce.users')
        }
      },
      'MSH DIGITAL HUB': {
        name: t('about.companies.mshDigitalHub.name'),
        logo: companyLogo3,
        description: t('about.companies.mshDigitalHub.description'),
        services: {
          [t('about.companies.mshDigitalHub.services.education.name')]: t('about.companies.mshDigitalHub.services.education.items', { returnObjects: true }),
          [t('about.companies.mshDigitalHub.services.creative.name')]: t('about.companies.mshDigitalHub.services.creative.items', { returnObjects: true }),
          [t('about.companies.mshDigitalHub.services.automation.name')]: t('about.companies.mshDigitalHub.services.automation.items', { returnObjects: true })
        },
        leadership: {
          ceo: t('about.companies.mshDigitalHub.leadership.ceo'),
          ceoTitle: t('about.companies.mshDigitalHub.leadership.ceoTitle'),
          description: t('about.companies.mshDigitalHub.leadership.description')
        },
        workforce: {
          users: t('about.companies.mshDigitalHub.workforce.users'),
          employees: t('about.companies.mshDigitalHub.workforce.employees')
        }
      }
    };
  }, [t, language]);

  const handleCompanyClick = (companyName) => {
    setSelectedCompany(companiesData[companyName]);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      setSelectedCompany(null);
    }, 500);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target) && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

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

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className={`about-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>

        <div className="about-content">
          {/* Who We Are */}
          <div className={`about-block who-we-are ${isVisible ? 'animate-fade-in delay-1' : ''}`}>
            <h3>{t('about.whoWeAre')}</h3>
            <p>
              {t('about.whoWeAreDesc')}
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision-grid">
            <div className={`mv-card mission ${isVisible ? 'animate-slide-up delay-2' : ''}`}>
              <div className="mv-icon">🎯</div>
              <h3>{t('about.ourMission')}</h3>
              <p>{t('about.missionDesc')}</p>
            </div>
            <div className={`mv-card vision ${isVisible ? 'animate-slide-up delay-3' : ''}`}>
              <div className="mv-icon">👁️</div>
              <h3>{t('about.ourVision')}</h3>
              <p>{t('about.visionDesc')}</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className={`why-choose-us ${isVisible ? 'animate-fade-up delay-4' : ''}`}>
            <h3>{t('about.whyChooseUs')}</h3>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <h4>{t('about.instantDelivery')}</h4>
                <p>{t('about.instantDeliveryDesc')}</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <h4>{t('about.secureSafe')}</h4>
                <p>{t('about.secureSafeDesc')}</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎧</span>
                <h4>{t('about.support247')}</h4>
                <p>{t('about.support247Desc')}</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💎</span>
                <h4>{t('about.premiumQuality')}</h4>
                <p>{t('about.premiumQualityDesc')}</p>
              </div>
            </div>
          </div>
          
           {/* Our Values */}
           <div className={`our-values ${isVisible ? 'animate-fade-up delay-5' : ''}`}>
            <h3>{t('about.ourValues')}</h3>
            <div className="values-list">
                <span className="value-tag">{t('about.integrity')}</span>
                <span className="value-tag">{t('about.innovation')}</span>
                <span className="value-tag">{t('about.customerFirst')}</span>
                <span className="value-tag">{t('about.excellence')}</span>
            </div>
           </div>

           {/* Our parent Companies */}
           <div className={`our-companies ${isVisible ? 'animate-fade-up delay-6' : ''}`}>
            <h3>Our Parent Companies</h3>
            <div className="companies-grid">
              <div className="company-card" onClick={() => handleCompanyClick('MSH TECH GROUP OF COMPANIES')}>
                <div className="company-logo-wrapper">
                  <img src={companyLogo1} alt="MSH TECH GROUP OF COMPANIES" className="company-logo" />
                </div>
                <h4 className="company-name">MSH TECH GROUP OF COMPANIES</h4>
              </div>
              <div className="company-card" onClick={() => handleCompanyClick('MSH DIGITAL SOLUTIONS')}>
                <div className="company-logo-wrapper">
                  <img src={companyLogo4} alt="MSH DIGITAL SOLUTIONS" className="company-logo" />
                </div>
                <h4 className="company-name">MSH DIGITAL SOLUTIONS</h4>
              </div>
              <div className="company-card" onClick={() => handleCompanyClick('MSH TELECOM NETWORK')}>
                <div className="company-logo-wrapper">
                  <img src={companyLogo2} alt="MSH TELECOM NETWORK" className="company-logo" />
                </div>
                <h4 className="company-name">MSH TELECOM NETWORK</h4>
              </div>
              <div className="company-card" onClick={() => handleCompanyClick('MSH DIGITAL HUB')}>
                <div className="company-logo-wrapper">
                  <img src={companyLogo3} alt="MSH DIGITAL HUB" className="company-logo" />
                </div>
                <h4 className="company-name">MSH DIGITAL HUB</h4>
              </div>
            </div>
           </div>

        {/* Company Details Modal */}
        {isModalOpen && selectedCompany && (
          <div className={`company-modal-overlay ${isModalOpen ? 'modal-open' : ''}`} onClick={handleCloseModal}>
            <div 
              className={`company-modal ${isModalOpen ? 'modal-visible' : ''}`}
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
              
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title">{selectedCompany.name}</h2>
                  <div className="modal-divider"></div>
                </div>

                <div className="modal-body">
                  <div className="modal-section">
                    <p className="company-description">{selectedCompany.description}</p>
                    {selectedCompany.registration && (
                      <p className="company-registration">{selectedCompany.registration}</p>
                    )}
                  </div>

                  {selectedCompany.services && (
                    <div className="modal-section">
                      <h3 className="section-heading">{t('about.modal.ourServices')}</h3>
                      {Object.entries(selectedCompany.services).map(([category, items]) => (
                        <div key={category} className="service-category">
                          <h4 className="category-title">{category}</h4>
                          <ul className="service-list">
                            {Array.isArray(items) && items.map((item, index) => (
                              <li key={index} className="service-item">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedCompany.leadership && (
                    <div className="modal-section">
                      <h3 className="section-heading">{t('about.modal.leadershipTeam')}</h3>
                      <div className="leadership-info">
                        <div className="ceo-info">
                          <strong>{selectedCompany.leadership.ceo}</strong>
                          {selectedCompany.leadership.ceoTitle && (
                            <span className="ceo-title"> - {selectedCompany.leadership.ceoTitle}</span>
                          )}
                        </div>
                        {selectedCompany.leadership.team && Array.isArray(selectedCompany.leadership.team) && (
                          <div className="team-list">
                            <p className="team-label">{t('about.modal.coreManagementTeam')}</p>
                            <ul className="team-members">
                              {selectedCompany.leadership.team.map((member, index) => (
                                <li key={index}>{member}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {selectedCompany.leadership.description && (
                          <p className="leadership-description">{selectedCompany.leadership.description}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedCompany.workforce && (
                    <div className="modal-section">
                      <h3 className="section-heading">{t('about.modal.workforceCommunity')}</h3>
                      <div className="workforce-info">
                        {selectedCompany.workforce.employees && (
                          <p className="workforce-item">{selectedCompany.workforce.employees}</p>
                        )}
                        {selectedCompany.workforce.users && (
                          <p className="workforce-item">{selectedCompany.workforce.users}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedCompany.mission && (
                    <div className="modal-section">
                      <h3 className="section-heading">{t('about.modal.mission')}</h3>
                      <p className="mission-text">{selectedCompany.mission}</p>
                    </div>
                  )}

                  {selectedCompany.vision && (
                    <div className="modal-section">
                      <h3 className="section-heading">{t('about.modal.vision')}</h3>
                      <p className="vision-text">{selectedCompany.vision}</p>
                    </div>
                  )}

                  {selectedCompany.values && Array.isArray(selectedCompany.values) && (
                    <div className="modal-section">
                      <h3 className="section-heading">{t('about.modal.coreValues')}</h3>
                      <div className="values-display">
                        {selectedCompany.values.map((value, index) => (
                          <span key={index} className="value-badge">{value}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        </div>
      </div>
    </section>
  );
};

export default AboutUs;

