import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import FreeOffers from './components/FreeOffers/FreeOffers'
import Testimonials from './components/Testimonials/Testimonials'
import Stats from './components/Stats/Stats'
import PaymentMethods from './components/PaymentMethods/PaymentMethods'
import ResellerPartner from './components/ResellerPartner/ResellerPartner'
import HowItWorks from './components/HowItWorks/HowItWorks'
import DualSlider from './components/DualSlider/DualSlider'
import Team from './components/Team/Team'
import AffiliateProgram from './components/AffiliateProgram/AffiliateProgram'
import ContactUs from './components/ContactUs/ContactUs'
import GuideUs from './components/GuideUs/GuideUs'
import PrivacyPolicy from './components/Policies/PrivacyPolicy'
import RefundPolicy from './components/Policies/RefundPolicy'
import Announcements from './components/Policies/Announcements'
import Footer from './components/Footer/Footer'
import HeroSlider from './components/HeroSlider/HeroSlider'
import './App.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleShowLogin = () => {
    setIsFlipped(false);
    scrollToHome();
  };

  const handleShowSignup = () => {
    setIsFlipped(true);
    scrollToHome();
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleShowServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowFreeOffers = () => {
    const freeOffersSection = document.getElementById('free-offers-section');
    if (freeOffersSection) {
      freeOffersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowHome = () => {
    scrollToHome();
  };

  const handleShowAffiliate = () => {
    const affiliateSection = document.getElementById('affiliate-section');
    if (affiliateSection) {
      affiliateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowGuideUs = () => {
    const guideUsSection = document.getElementById('guide-us-section');
    if (guideUsSection) {
      guideUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header 
        onShowLogin={handleShowLogin}
        onShowSignup={handleShowSignup}
        onShowServices={handleShowServices}
        onShowAbout={handleShowAbout}
        onShowFreeOffers={handleShowFreeOffers}
        onShowHome={handleShowHome}
        onShowAffiliate={handleShowAffiliate}
        onShowContact={handleShowContact}
        onShowGuideUs={handleShowGuideUs}
      />
      <div id="home-section">
        <HeroSlider />
        <Home />
      </div>
      <div id="about-section">
        <AboutUs />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div id="free-offers-section">
        <FreeOffers onSignup={handleShowSignup} />
      </div>
      <div id="testimonials-section">
        <Testimonials />
      </div>
      <div id="stats-section">
        <Stats />
      </div>
      <div id="payment-section">
        <PaymentMethods />
      </div>
      <div id="reseller-section">
        <ResellerPartner onJoinClick={handleShowSignup} />
      </div>
      <div id="how-it-works-section">
        <HowItWorks 
          onSignup={handleShowSignup} 
          onViewServices={handleShowServices} 
        />
      </div>
      <div id="dual-slider-section">
        <DualSlider />
      </div>
      <div id="team-section">
        <Team />
      </div>
      <div id="affiliate-section">
        <AffiliateProgram onJoinClick={handleShowSignup} />
      </div>
      <div id="guide-us-section">
        <GuideUs />
      </div>
      <div id="contact-section">
        <ContactUs />
      </div>
      <PrivacyPolicy />
      <RefundPolicy />
      <Announcements />
      <Footer />
    </>
  )
}

export default App
