import React, { useEffect, useRef, useState } from 'react';
import './PaymentMethods.css';
import mshCoinImage from '../../assets/41.png';
import easyPaisaLogo from '../../assets/21.png';
import jazzCashLogo from '../../assets/22.png';
import paypalLogo from '../../assets/23.png';
import sadapayLogo from '../../assets/24.png';
import { useI18n } from '../../contexts/I18nContext';

const PaymentMethods = () => {
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
      { threshold: 0.2 }
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

  const methods = [
    {
      id: 'bank-wire',
      name: t('payment.bankWire'),
      heading: t('payment.bankTransfer'),
      color: '#2563eb',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop&q=80',
      description: t('payment.bankTransferDesc')
    },
    {
      id: 'easy-paisa',
      name: t('payment.easyPaisa'),
      heading: t('payment.easyPaisa'),
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      image: easyPaisaLogo,
      description: t('payment.easyPaisaDesc'),
      isLocalImage: true
    },
    {
      id: 'jazz-cash',
      name: t('payment.jazzCash'),
      heading: t('payment.jazzCash'),
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      image: jazzCashLogo,
      description: t('payment.jazzCashDesc'),
      isLocalImage: true
    },
    {
      id: 'paypal',
      name: t('payment.paypal'),
      heading: t('payment.paypal'),
      color: '#0070ba',
      gradient: 'linear-gradient(135deg, #0070ba 0%, #003087 100%)',
      image: paypalLogo,
      description: t('payment.paypalDesc'),
      isLocalImage: true
    },
    {
      id: 'msh-coin',
      name: t('payment.mshCoin'),
      heading: t('payment.mshCoin'),
      color: '#fbbf24',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      image: mshCoinImage,
      description: t('payment.mshCoinDesc'),
      isLocalImage: true
    },
    {
      id: 'sadapay',
      name: t('payment.sadapay'),
      heading: t('payment.sadapay'),
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      image: sadapayLogo,
      description: t('payment.sadapayDesc'),
      isLocalImage: true
    }
  ];

  return (
    <section className="payment-section" ref={sectionRef}>
      <div className="payment-background-glow"></div>
      
      <div className="payment-container">
        <div className={`payment-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2 className="payment-title">{t('payment.title')}</h2>
          <p className="payment-subtitle">
            {t('payment.subtitle')}
          </p>
        </div>

        <div className="payment-grid">
          {methods.map((method, index) => (
            <div 
              key={method.id}
              className={`payment-card payment-card-${method.id} ${isVisible ? 'animate-pop-in' : ''}`}
              style={{ 
                '--hover-color': method.color,
                '--gradient': method.gradient,
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <div className="payment-image-wrapper">
                <img 
                  src={method.image} 
                  alt={method.name}
                  className={`payment-image ${method.isLocalImage ? 'payment-logo' : ''}`}
                  loading="lazy"
                />
                <div className="payment-image-overlay"></div>
              </div>
              <div className="payment-content">
                <h3 className="payment-heading">{method.heading}</h3>
                <span className="payment-name">{method.name}</span>
                <p className="payment-description">{method.description}</p>
              </div>
              <div className="payment-shine"></div>
              <div className="payment-glow"></div>
            </div>
          ))}
        </div>

        <div className={`trust-badges ${isVisible ? 'animate-fade-up-delay' : ''}`}>
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span>{t('payment.sslSecured')}</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⚡</span>
            <span>{t('payment.instantDeposit')}</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🛡️</span>
            <span>{t('payment.buyerProtection')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;

