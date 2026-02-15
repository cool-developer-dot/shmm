import { useEffect, useRef, useState } from 'react';
import './GuideUs.css';

const GuideUs = () => {
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

  const videoGuides = [
    {
      id: 1,
      title: 'Getting Started Guide',
      description: 'Learn the basics of our platform and how to navigate through all the essential features to get you started quickly.',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Advanced Features Tutorial',
      description: 'Discover advanced features and tips to maximize your productivity and make the most out of our platform.',
      videoId: 'jNQXAC9IVRw',
    },
    {
      id: 3,
      title: 'Troubleshooting Common Issues',
      description: 'Find solutions to common problems and learn how to troubleshoot issues you might encounter.',
      videoId: '9bZkp7q19f0',
    },
    {
      id: 4,
      title: 'Best Practices & Tips',
      description: 'Explore best practices, expert tips, and strategies to enhance your experience and achieve better results.',
      videoId: 'kJQP7kiw5Fk',
    },
    {
      id: 5,
      title: 'Order Placement Walkthrough',
      description: 'Step-by-step guide on how to place orders, choose services, and track your order progress effectively.',
      videoId: 'RubBzkZzpUA',
    },
    {
      id: 6,
      title: 'Account & Security Setup',
      description: 'Learn how to set up your account, manage security settings, and protect your data on our platform.',
      videoId: 'dQw4w9WgXcQ',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="guide-us-section"
      className={`guide-us-section transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="guide-us-container">
        {/* Hero Section */}
        <div className="guide-us-hero">
          <h1 className="guide-us-title">
            Guide Us
          </h1>
          <p className="guide-us-subtitle">
            Explore our comprehensive video guides to help you get the most out of our platform.
          </p>
          <p className="guide-us-body">
            Whether you're a beginner or an advanced user, we have tutorials tailored for you.
          </p>
        </div>

        {/* Video Grid */}
        <div className="guide-us-grid">
          {videoGuides.map((guide, index) => (
            <VideoCard
              key={guide.id}
              guide={guide}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ guide, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`video-card-wrapper ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="video-card">
        {/* Video Container */}
        <div className="video-container">
          <iframe
            className={`video-iframe ${isHovered ? 'video-iframe-hover' : ''}`}
            src={`https://www.youtube.com/embed/${guide.videoId}`}
            title={guide.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div
            className={`video-overlay ${isHovered ? 'video-overlay-hover' : ''}`}
          ></div>
        </div>

        {/* Content */}
        <div className="video-content">
          <h3 className="video-title">
            {guide.title}
          </h3>
          <p className="video-description">
            {guide.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuideUs;
