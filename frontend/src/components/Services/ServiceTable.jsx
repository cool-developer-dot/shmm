import React from 'react';
import { useI18n } from '../../contexts/I18nContext';

const ServiceTable = () => {
  const { t } = useI18n();
  
  // Function to scroll to login card
  const scrollToLogin = () => {
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 2841,
      name: 'Telegram Members [Real] [Non-Drop]',
      rate: 4.50,
      min: 500,
      max: 20000,
      time: '1 hour'
    },
    {
      id: 3920,
      name: 'Instagram Likes [Instant] [High Quality]',
      rate: 0.85,
      min: 100,
      max: 50000,
      time: 'Instant'
    },
    {
      id: 1542,
      name: 'YouTube Views [Retention: 2-5 Mins]',
      rate: 2.20,
      min: 1000,
      max: 1000000,
      time: '12 hours'
    },
    {
      id: 4421,
      name: 'Discord Server Members [Offline]',
      rate: 1.50,
      min: 100,
      max: 5000,
      time: '24 hours'
    },
    {
      id: 5592,
      name: 'TikTok Followers [Refill 30 Days]',
      rate: 3.00,
      min: 100,
      max: 10000,
      time: '3 hours'
    },
    {
      id: 6103,
      name: 'Twitter Spaces Listeners [30 Mins]',
      rate: 15.00,
      min: 50,
      max: 2000,
      time: 'Instant'
    },
    {
      id: 7721,
      name: 'Snapchat Spotlight Views',
      rate: 1.20,
      min: 1000,
      max: 500000,
      time: '6 hours'
    },
    {
      id: 8894,
      name: 'Website Traffic [USA] [Organic]',
      rate: 0.60,
      min: 500,
      max: 100000,
      time: '24 hours'
    }
  ];

  return (
    <div className="table-container">
      <table className="services-table" aria-label="Services List">
        <thead>
          <tr>
            <th>{t('serviceTable.id')}</th>
            <th>{t('serviceTable.service')}</th>
            <th>{t('serviceTable.ratePer1000')}</th>
            <th>{t('serviceTable.minMaxOrder')}</th>
            <th>{t('serviceTable.avgTime')}</th>
            <th>{t('serviceTable.action')}</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td className="service-id">{service.id}</td>
              <td className="service-name">{service.name}</td>
              <td>
                <span className="rate-badge">${service.rate.toFixed(2)}</span>
              </td>
              <td style={{ color: '#94a3b8' }}>
                {service.min.toLocaleString()} / {service.max.toLocaleString()}
              </td>
              <td>
                <span className="time-badge">
                  ⏱ {service.time}
                </span>
              </td>
              <td>
                <div className="actions-cell">
                  <button 
                    className="btn-details" 
                    aria-label="View details"
                    onClick={scrollToLogin}
                  >
                    {t('serviceTable.details')}
                  </button>
                  <button 
                    className="btn-buy" 
                    aria-label="Buy now"
                    onClick={scrollToLogin}
                  >
                    {t('serviceTable.buyNow')}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;

