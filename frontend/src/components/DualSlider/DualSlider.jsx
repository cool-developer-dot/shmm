import React, { useMemo } from 'react';
import './DualSlider.css';
import { useI18n } from '../../contexts/I18nContext';
import logo34 from '../../assets/34.jpeg';
import logo35 from '../../assets/35.jpeg';
import logo36 from '../../assets/36.jpeg';
import logo37 from '../../assets/37.jpeg';
import logo38 from '../../assets/38.jpeg';
import logo39 from '../../assets/39.jpeg';
import logo40 from '../../assets/40.jpeg';

const DualSlider = () => {
  const { t, language } = useI18n();

  const projects = useMemo(() => [
    { id: 1, name: 'MSH Cloud Host', description: t('dualSlider.socialBoostDesc'), logo: logo34 },
    { id: 2, name: 'MSH Data Center', description: t('dualSlider.adMasterDesc'), logo: logo35 },
    { id: 3, name: 'MSH SMM', description: t('dualSlider.contentKingDesc'), logo: logo36 },
    { id: 4, name: 'Reseller MSH SMM', description: t('dualSlider.analyticsProDesc'), logo: logo37 },
    { id: 5, name: 'MSH Digital Tools', description: t('dualSlider.influenceHubDesc'), logo: logo38 },
    { id: 6, name: 'MSH Coin', description: t('dualSlider.brandBuilderDesc'), logo: logo39 },
    { id: 7, name: 'MSH Ads Network', description: t('dualSlider.viralWaveDesc'), logo: logo40 },
  ], [t, language]);
  return (
    <section className="dual-slider-section">
      <div className="dual-slider-background"></div>
      <div className="dual-slider-container">
        


        {/* Slider 2: Projects */}
        <div className="slider-wrapper">
          <h2 key={`our-projects-${language}`} className="slider-heading">{t('dualSlider.ourProjects')}</h2>
          <div className="slider-track-container">
            <div className="slider-track fast-slide-reverse">
              {[...projects, ...projects].map((project, index) => (
                <div key={`project-${index}`} className="project-card">
                  <div className="project-header">
                    <div className="project-logo">
                      <img src={project.logo} alt={project.name} className="project-logo-img" />
                    </div>
                    <div className="project-title-group">
                      <h3 className="project-name">{project.name}</h3>
                      <span className="project-status">{t('dualSlider.active')}</span>
                    </div>
                  </div>
                  <p className="project-desc">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DualSlider;

