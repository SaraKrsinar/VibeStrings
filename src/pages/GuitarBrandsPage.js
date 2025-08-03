import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_BRANDS } from '../queries/GET_BRANDS';
import { useTranslation } from 'react-i18next';
import './GuitarBrandsPage.css';

function GuitarBrandsPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data, loading, error } = useQuery(GET_BRANDS);

  if (loading) return <p>{t('loadingBrands')}</p>;
  if (error) return <p>{t('errorBrands')}</p>;

  return (
    <div className="page-container">

      <div className="logo-fixed">
        <div className="logo-wrapper">
          <div className="logo-shape">
            <div className="half-circle left"></div>
            <div className="half-circle right"></div>
          </div>
          <span className="logo-text">VibeStrings</span>
        </div>
      </div>

      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>
            Browse top quality <span>Guitars</span> online
          </h1>
          <p>{t('exploreCollections')}</p>
        </div>

        <div className="hero-right">
          <div className="hero-image-mask">
            <img src="/images/image1.png" alt="Hero Guitar" className="hero-image" />
          </div>

          <div className="bottom-logo">
            <div className="logo-shape">
              <div className="half-circle left"></div>
              <div className="half-circle right"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-section">
        <h2>
          Featuring the <span>Best Brands</span>
        </h2>
        <p>Select your preferred brand and explore our exquisite collection.</p>
        <div className="brand-logos">
          {data.findAllBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => navigate(`/brands/${brand.id}/models`)}
              className="brand-card"
            >
              <img src={brand.image} alt={brand.name} />
              <h3>{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="why-section">
        <h2 className="why-title">
          Why try <span>VibeStrings</span>?
        </h2>
        <div className="why-features">
          <div className="why-feature">
            <div className="icon-circle">
              <img src="/icons/browser.png" alt="Smooth Browsing" />
            </div>
            <h3>SMOOTH BROWSING</h3>
            <p>Experience lightning-fast navigation with clear categories.</p>
          </div>

          <div className="why-feature">
            <div className="icon-circle">
              <img src="/icons/delivery.png" alt="Easy Delivery" />
            </div>
            <h3>EASY DELIVERY</h3>
            <p>Get your dream guitar at your doorstep with ease.</p>
          </div>

          <div className="why-feature">
            <div className="icon-circle">
              <img src="/icons/payment.png" alt="Swift Payments" />
            </div>
            <h3>SWIFT PAYMENTS</h3>
            <p>Use your preferred payment method with full security.</p>
          </div>
        </div>
      </div>

      <div className="app-section">
        <div className="app-left">
          <h2 className="browse">
            Browse and buy your <span>favorite guitars</span> with VibeStrings.
          </h2>
          <div className="store-buttons">
            <a
              href="https://play.google.com/store/games?device=windows"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/google.png" alt="Google Play" />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/apple.png" alt="App Store" />
            </a>
          </div>

        </div>

      <div className="app-right-wrapper">
        <div className="ellipse-background"></div>

        <div className="app-right">
          <div className="mobile-image left">
            <img src="/images/image2.png" alt="Mobile App Left" />
          </div>
          <div className="mobile-image right">
            <img src="/images/image3.png" alt="Mobile App Right" />
          </div>
        </div>
      </div>

    </div>
  </div>
  );
}

export default GuitarBrandsPage;
