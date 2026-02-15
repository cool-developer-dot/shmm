import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle link click
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false); // Close mobile menu when link is clicked
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    'HOME',
    'ABOUT US',
    'SERVICES',
    'FREE OFFERS',
    'AFFILIATE',
    'CONTACT US',
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home" onClick={() => handleLinkClick('HOME')}>
            Logo
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link} className="navbar-item">
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`navbar-link ${activeLink === link ? 'active' : ''}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <a
            href="https://www.mshsmm.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-login"
          >
            LOGIN
          </a>
          <a
            href="https://www.mshsmm.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-signup"
          >
            SIGN UP
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu-list">
          {navLinks.map((link) => (
            <li key={link} className="mobile-menu-item">
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`mobile-menu-link ${activeLink === link ? 'active' : ''}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            </li>
          ))}
          <li className="mobile-menu-item">
            <a
              href="https://www.mshsmm.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-btn-login"
            >
              LOGIN
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="https://www.mshsmm.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-btn-signup"
            >
              SIGN UP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

