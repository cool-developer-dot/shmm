import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import './Policies.css';

const RefundPolicy = () => {
  const { t } = useI18n();
  const s = (key) => t(`policies.refundSections.${key}`);

  return (
    <section id="refund-policy-section" className="policy-section">
      <div className="policy-container">
        <h1 className="policy-title">{t('policies.refundTitle')}</h1>
        <p className="policy-intro">{t('policies.refundIntro')}</p>
        <div className="policy-content">
          <h2 className="policy-heading">{s('paymentMethods')}</h2>
          <p>{s('paymentMethodsText')}</p>
          <h2 className="policy-heading">{s('pricing')}</h2>
          <p>{s('pricingText')}</p>
          <h2 className="policy-heading">{s('refundEligibility')}</h2>
          <p>{s('refundEligibilityText')}</p>
          <h2 className="policy-heading">{s('refundProcess')}</h2>
          <p>{s('refundProcessText')}</p>
          <h2 className="policy-heading">{s('disputes')}</h2>
          <p>{s('disputesText')}</p>
        </div>
        <p className="policy-contact">
          {s('contact')}: <a href="#contact-section">{t('contact.title')}</a>
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;
