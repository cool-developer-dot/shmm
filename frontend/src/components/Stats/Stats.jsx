import React, { useEffect, useState, useRef } from 'react';
import './Stats.css';
import { useI18n } from '../../contexts/I18nContext';

const StatItem = ({ icon, number, label, heading, suffix = "", prefix = "", delay, color }) => {
  const { t } = useI18n();
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    const target = parseInt(number.toString().replace(/,/g, ''));
    
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease out quart: 1 - (1 - t)^4
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.min(Math.floor(easeProgress * target), target);
      setCount(currentCount);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div 
      className={`stat-card stat-card-${color} ${hasAnimated ? 'animate-in' : ''}`} 
      ref={elementRef}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="stat-header">
        <div className="stat-icon-wrapper">
          {icon}
        </div>
        <h2 className="stat-heading">{heading}</h2>
      </div>
      <div className="stat-content">
        <h3 className="stat-number">
          {prefix}{formatNumber(count)}{suffix}
        </h3>
        <p className="stat-label">{label}</p>
      </div>
      <div className="stat-glow"></div>
    </div>
  );
};

const Stats = () => {
  const { t } = useI18n();
  
  const statsData = [
    {
      id: 1,
      heading: t('stats.ordersDelivered'),
      label: t('stats.orderCompleted'),
      number: "3547099",
      color: "orange",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      delay: 0
    },
    {
      id: 2,
      heading: t('stats.globalCommunity'),
      label: t('stats.activeUsers'),
      number: "23",
      suffix: "K",
      color: "blue",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      delay: 0.2
    },
    {
      id: 3,
      heading: t('stats.serviceNetwork'),
      label: t('stats.activeServices'),
      number: "735",
      color: "purple",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      delay: 0.4
    },
    {
      id: 4,
      heading: t('stats.topRanking'),
      label: t('stats.worldWidePositions'),
      number: "1",
      prefix: "#",
      color: "gold",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
      delay: 0.6
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat) => (
          <StatItem 
            key={stat.id}
            {...stat}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;

