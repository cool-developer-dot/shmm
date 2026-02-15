import { useState, useEffect, useRef, useCallback } from 'react';
import './HeroSlider.css';
import slide1 from '../../assets/42.jpeg';
import slide2 from '../../assets/43.jpeg';
import slide3 from '../../assets/44.jpeg';
import slide4 from '../../assets/45.jpeg';
import slide5 from '../../assets/46.jpeg';

const slides = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
  { id: 4, image: slide4 },
  { id: 5, image: slide5 },
];

const SLIDE_DURATION = 4000;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  const startAutoPlay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setPrevSlideIndex((prev) => prev);
      setCurrentSlide((prev) => {
        setPrevSlideIndex(prev);
        return (prev + 1) % slides.length;
      });
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setPrevSlideIndex(null);
      }, 800);
    }, SLIDE_DURATION);
  }, []);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    clearInterval(intervalRef.current);
    setPrevSlideIndex(currentSlide);
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => {
      setIsTransitioning(false);
      setPrevSlideIndex(null);
    }, 800);
    if (!isPaused) startAutoPlay();
  }, [isTransitioning, currentSlide, isPaused, startAutoPlay]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoPlay]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoPlay();
  };

  return (
    <section
      className="hero-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="hero-slider-viewport">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              index === currentSlide ? 'active' : ''
            } ${index === prevSlideIndex ? 'leaving' : ''}`}
          >
            <div className="hero-slide-img-wrapper">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="hero-slide-image"
                draggable="false"
              />
            </div>
          </div>
        ))}

        {/* Bottom gradient overlay for controls */}
        <div className="hero-slider-overlay-bottom" />
      </div>

      {/* Arrow Controls */}
      <button
        className="hero-arrow hero-arrow--prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="hero-arrow hero-arrow--next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Bottom Controls Bar */}
      <div className="hero-controls">
        {/* Slide Counter */}
        <div className="hero-counter">
          <span className="hero-counter-current">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="hero-counter-sep">/</span>
          <span className="hero-counter-total">{String(slides.length).padStart(2, '0')}</span>
        </div>

        {/* Progress Dots */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="hero-dot-fill" key={index === currentSlide ? `active-${currentSlide}` : `inactive-${index}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
