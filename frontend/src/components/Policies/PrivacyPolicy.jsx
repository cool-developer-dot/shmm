import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import './Policies.css';

const PrivacyPolicy = () => {
  const { t } = useI18n();
  const s = (key) => t(`policies.privacySections.${key}`);

  return (
    <section id="privacy-policy-section" className="policy-section">
      <div className="policy-container">
        <h1 className="policy-title">{t('policies.privacyTitle')}</h1>
        <p className="policy-intro">{t('policies.privacyIntro')}</p>
        <div className="policy-content">
          <h2 className="policy-heading">{s('collection')}</h2>
          <p>{s('collectionText')}</p>
          <h2 className="policy-heading">{s('use')}</h2>
          <p>{s('useText')}</p>
          <h2 className="policy-heading">{s('security')}</h2>
          <p>{s('securityText')}</p>
          <h2 className="policy-heading">{s('cookies')}</h2>
          <p>{s('cookiesText')}</p>
          <h2 className="policy-heading">{s('thirdParty')}</h2>
          <p>{s('thirdPartyText')}</p>
        </div>
        <p className="policy-contact">
          {s('contact')}: <a href="#contact-section">{t('contact.title')}</a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
