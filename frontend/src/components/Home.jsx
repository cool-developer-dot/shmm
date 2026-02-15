import './Home.css';
import logoImage from '../assets/5.png';
import { useI18n } from '../contexts/I18nContext';

const Home = () => {
  const { t } = useI18n();

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Left Side */}
        <div className="home-left">
          <div className="animated-image-container">
            <div className="animated-logo">
              <img
                src={logoImage}
                alt="Animated Logo"
                className="logo-image"
              />
            </div>
            <div className="floating-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Professional Hero Card */}
        <div className="home-right">
          <div className="hero-card">
            {/* Animated border glow */}
            <div className="hero-card-glow"></div>
            
            {/* Background effects */}
            <div className="hero-card-bg">
              <div className="hero-card-orb hero-card-orb-1"></div>
              <div className="hero-card-orb hero-card-orb-2"></div>
              <div className="hero-card-grid"></div>
            </div>

            {/* Content */}
            <div className="hero-card-content">
              {/* Badge */}
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                <span className="hero-badge-text">#1 SMM Platform</span>
              </div>

              {/* Title */}
              <h1 className="hero-title">
                <span className="hero-title-line">Welcome to</span>
                <span className="hero-title-brand">MSH SMM</span>
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle">
                Your trusted partner for social media growth, delivering premium services worldwide.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-group">
                <a
                  href="https://www.mshsmm.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-primary"
                >
                  Get Started Free
                  <svg className="hero-cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#services-section"
                  className="hero-cta-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('services-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Services
                </a>
              </div>

              {/* Divider */}
              <div className="hero-divider"></div>

              {/* Stats */}
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-number">10K+</span>
                  <span className="hero-stat-label">Happy Clients</span>
                </div>
                <div className="hero-stat-sep"></div>
                <div className="hero-stat">
                  <span className="hero-stat-number">50M+</span>
                  <span className="hero-stat-label">Orders Delivered</span>
                </div>
                <div className="hero-stat-sep"></div>
                <div className="hero-stat">
                  <span className="hero-stat-number">99.9%</span>
                  <span className="hero-stat-label">Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
