import React from 'react';
import ServiceCard from './ServiceCard';
import FilterBar from './FilterBar';
import ServiceTable from './ServiceTable';
import './Services.css';
import { useI18n } from '../../contexts/I18nContext';
import youtubeIcon from '../../assets/youtube.jpg';
import facebookIcon from '../../assets/facebook.png';
import tiktokIcon from '../../assets/tiktok.png';

const Services = () => {
  const { t } = useI18n();
  
  const categories = [
    {
      title: t('services.youtube'),
      icon: youtubeIcon,
      isImage: true,
      description: t('services.viewsSubscribersLikes'),
      color: '#FF0000'
    },
    {
      title: t('services.websiteTraffic'),
      icon: null,
      isImage: false,
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      description: t('services.organicDirectSocial'),
      color: '#10b981'
    },
    {
      title: t('services.facebook'),
      icon: facebookIcon,
      isImage: true,
      description: t('services.likesFollowersShares'),
      color: '#1877F2'
    },
    {
      title: t('services.tiktok'),
      icon: tiktokIcon,
      isImage: true,
      description: t('services.viewsFollowersLikes'),
      color: '#FF0050'
    }
  ];

  return (
    <div className="services-page">
      <div className="services-container">
        <header className="page-header">
          <h1 className="page-title">{t('services.title')}</h1>
          <p className="page-subtitle">{t('services.subtitle')}</p>
        </header>

        <section className="category-grid" aria-label="Service Categories">
          {categories.map((category, index) => (
            <ServiceCard 
              key={index}
              title={category.title}
              icon={category.icon}
              isImage={category.isImage}
              svgIcon={category.svgIcon}
              description={category.description}
              color={category.color}
            />
          ))}
        </section>

        <section aria-label="Filter Services">
          <FilterBar />
        </section>

        <section aria-label="Services Table">
          <ServiceTable />
        </section>
      </div>
    </div>
  );
};

export default Services;

