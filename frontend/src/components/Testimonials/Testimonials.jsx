import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Testimonials.css';
import { useI18n } from '../../contexts/I18nContext';

const Testimonials = () => {
  const { t, language } = useI18n();
  
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: "Alex Morgan",
      role: t('testimonials.smmReseller'),
      text: "The API speed is incredible. My orders are processed instantly, and the support team is always there when I need them.",
      rating: 5,
      avatar: "AM",
      email: "alex.morgan@example.com",
      company: "SocialBoost Agency",
      location: "New York, USA",
      joinDate: "2023-01-15",
      totalOrders: 1250
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: t('testimonials.digitalMarketer'),
      text: "Best panel I've used in years. The drip-feed feature works perfectly for my clients' organic growth strategies.",
      rating: 5,
      avatar: "SC",
      email: "sarah.chen@example.com",
      company: "Digital Growth Co.",
      location: "San Francisco, USA",
      joinDate: "2022-11-20",
      totalOrders: 890
    },
    {
      id: 3,
      name: "Mike Ross",
      role: t('testimonials.contentCreator'),
      text: "Affordable prices without compromising quality. The analytics dashboard helps me track everything effortlessly.",
      rating: 4,
      avatar: "MR",
      email: "mike.ross@example.com",
      company: "Creative Studio",
      location: "Los Angeles, USA",
      joinDate: "2023-03-10",
      totalOrders: 650
    },
    {
      id: 4,
      name: "David Lee",
      role: t('testimonials.agencyOwner'),
      text: "Reliable service is key for my agency, and this panel delivers consistently. Highly recommended!",
      rating: 5,
      avatar: "DL",
      email: "david.lee@example.com",
      company: "Lee Marketing Group",
      location: "Chicago, USA",
      joinDate: "2022-08-05",
      totalOrders: 2100
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: t('testimonials.influencer'),
      text: "My engagement rates skyrocketed thanks to the high-quality services provided here. A game changer.",
      rating: 5,
      avatar: "EW",
      email: "emma.wilson@example.com",
      company: "Influence Network",
      location: "Miami, USA",
      joinDate: "2023-05-22",
      totalOrders: 450
    },
    {
      id: 6,
      name: "James Bond",
      role: t('testimonials.secretAgent'),
      text: "Top secret growth strategies worked perfectly. Nobody suspects a thing.",
      rating: 4,
      avatar: "JB",
      email: "james.bond@example.com",
      company: "MI6 Digital",
      location: "London, UK",
      joinDate: "2023-02-14",
      totalOrders: 320
    }
  ], [t, language]);

  const [isVisible, setIsVisible] = useState(false);
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

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-background"></div>
      <div className="testimonials-container">
        <div className={`testimonials-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2 key={`testimonials-title-${language}`} className="section-title">{t('testimonials.title')}</h2>
          <p key={`testimonials-subtitle-${language}`} className="section-subtitle">{t('testimonials.subtitle')}</p>
        </div>

        <div key={`testimonials-track-${language}`} className="testimonials-track-container">
          <div className={`testimonials-track ${isVisible ? 'testimonials-slide' : ''}`}>
            {duplicatedTestimonials.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className={`testimonial-card ${isVisible ? 'animate-card' : ''}`}
              >
                <div className="card-header">
                  <div className="avatar">{item.avatar}</div>
                  <div className="user-info">
                    <h3 className="user-name">{item.name}</h3>
                    <span className="user-role">{item.role}</span>
                  </div>
                </div>
                
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`star ${i < item.rating ? 'filled' : ''} ${isVisible ? 'animate-star' : ''}`}
                      style={{ animationDelay: `${(i * 0.1) + 0.5}s` }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="testimonial-text">"{item.text}"</p>

                <div className="card-expanded-details">
                  <div className="detail-row">
                    <span className="detail-label">{t('testimonials.email')}</span>
                    <span className="detail-value">{item.email}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">{t('testimonials.company')}</span>
                    <span className="detail-value">{item.company}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">{t('testimonials.location')}</span>
                    <span className="detail-value">{item.location}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">{t('testimonials.memberSince')}</span>
                    <span className="detail-value">{new Date(item.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">{t('testimonials.totalOrders')}</span>
                    <span className="detail-value">{item.totalOrders.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="card-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

