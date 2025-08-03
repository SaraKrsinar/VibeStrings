import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { FaGlobe } from 'react-icons/fa';


function Footer() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="footer">
      <div className="footer-content">
        {/* Лого + Инфо */}
        <div className="footer-logo-section">
          <div className="logo-wrapper footer-logo">
            <div className="logo-shape">
              <div className="half-circle left"></div>
              <div className="half-circle right"></div>
            </div>
            <span className="logo-text2">VibeStrings</span>
          </div>
          <p className="footer-info">
            <img src="/icons/mail.png" alt="Email Icon" className="footer-icon" />
            Enquiry@VibeStrings.com
          </p>
          <p className="footer-info">
            <img src="/icons/location.png" alt="Location Icon" className="footer-icon" />
            San Francisco
          </p>
        </div>

        {/* Линкови */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>PAGES</h4>
            <p>Store</p>
            <p>Collections</p>
            <p>Support</p>
          </div>
          <div className="footer-column">
            <h4>PRODUCT</h4>
            <p>Terms</p>
            <p>Privacy Policy</p>
            <p>Copyright</p>
          </div>
          <div className="footer-column">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.png" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter.png" alt="Twitter" className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright и Language Switcher */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2022 Copyright. VibeStrings</p>

        <div className="language-switch-modern">
          <FaGlobe className="globe-icon" />
          <span>Language:</span>
          <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active-lang' : ''}>EN</button>
          <button onClick={() => changeLanguage('mk')} className={i18n.language === 'mk' ? 'active-lang' : ''}>MK</button>
          <button onClick={() => changeLanguage('al')} className={i18n.language === 'al' ? 'active-lang' : ''}>AL</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
