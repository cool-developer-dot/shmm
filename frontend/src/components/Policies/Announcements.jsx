import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import './Policies.css';

const Announcements = () => {
  const { t } = useI18n();

  return (
    <section id="announcements-section" className="policy-section">
      <div className="policy-container">
        <h1 className="policy-title">{t('policies.announcementsTitle')}</h1>
        <p className="policy-intro">{t('policies.announcementsIntro')}</p>
        <div className="policy-content announcements-list">
          <div className="announcement-item">
            <h2 className="policy-heading">{t('policies.announcementItem1Title')}</h2>
            <p>{t('policies.announcementItem1Text')}</p>
          </div>
          <div className="announcement-item">
            <h2 className="policy-heading">{t('policies.announcementItem2Title')}</h2>
            <p>{t('policies.announcementItem2Text')}</p>
          </div>
          <div className="announcement-item">
            <h2 className="policy-heading">{t('policies.announcementItem3Title')}</h2>
            <p>{t('policies.announcementItem3Text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
