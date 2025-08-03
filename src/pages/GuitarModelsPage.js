import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MODELS_BY_BRAND } from '../queries/GET_MODELS_BY_BRAND';
import { GET_BRAND_BY_ID } from '../queries/GET_BRAND_BY_ID';
import { useTranslation } from 'react-i18next';
import './GuitarModelsPage.css';
import { FiFilter, FiChevronDown, FiSearch, FiArrowLeft } from 'react-icons/fi';

function GuitarModelsPage() {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data, loading, error } = useQuery(GET_MODELS_BY_BRAND, {
    variables: { id: brandId }
  });

  const { data: brandData } = useQuery(GET_BRAND_BY_ID, {
    variables: { id: brandId }
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(6);
  const loadMoreRef = useRef(null);

  const options = [
    { value: 'ELECTRIC', label: t('electric') },
    { value: 'ACOUSTIC', label: 'Acoustic' },
    { value: 'BASS', label: t('bass') }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 6);
        }
      },
      { threshold: 1.0 }
    );

    const currentElement = loadMoreRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  if (loading) return <p>{t('loadingModels')}</p>;
  if (error) return <p>{t('errorModels')} {error.message}</p>;
  if (!brandData) return <p>Loading brand info...</p>;

  const brand = brandData?.findUniqueBrand;

  const filteredModels = data?.findBrandModels?.filter((model) => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === '' || model.type === filterType;
    return matchesSearch && matchesType;
  }) || [];

  const visibleModels = filteredModels.slice(0, visibleCount);

  return (
    <div className="models-page-container">

      <button className="back-home-button" onClick={() => navigate('/')}>
        <FiArrowLeft className="back-arrow-icon" /> Back To Home
      </button>

      <div className="logo-fixed">
        <div className="logo-wrapper">
          <div className="logo-shape">
            <div className="half-circle left"></div>
            <div className="half-circle right"></div>
          </div>
          <span className="logo-text">VibeStrings</span>
        </div>
      </div>

      <div className="models-hero-wrapper">
        <div className="models-hero-left">
          <h1>
            Play like a <span>Rock star</span>
          </h1>
          <p>
            With a legacy dating back to the 1950s, {brand?.name} blends expert craftsmanship
            with cutting-edge innovation to deliver guitars that inspire creativity and elevate your
            performance.
          </p>
          <a
            href="https://chat.openai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="chatgpt-link"
          >
            Ask ChatGPT
          </a>
        </div>

        <div className="models-hero-right">
          <div className="models-hero-image-mask">
            {brand?.image && (
              <img
                src={brand.image}
                alt={`${brand.name} Logo`}
                className="brand-overlay-logo"
              />
            )}
          </div>

          <div className="bottom-logo">
            <div className="logo-shape">
              <div className="half-circle left"></div>
              <div className="half-circle right"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="models-header">
        <h2>Check out the <span>Selection</span></h2>
      </div>

      <div className="custom-filter">
        <div ref={dropdownRef} className="filter-dropdown">
          <FiFilter className="filter-icon" />
          <div
            className="selected-text"
            onClick={(e) => {
              e.stopPropagation();
              setDropdownOpen((prev) => !prev);
            }}
          >
            {filterType === '' ? 'Filter by type' : options.find(opt => opt.value === filterType)?.label}
            <FiChevronDown className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
          </div>

          {dropdownOpen && (
            <ul className="custom-options">
              {options.map((opt) => (
                <li
                  key={opt.value}
                  className={filterType === opt.value ? 'active' : ''}
                  onClick={() => {
                    setFilterType(opt.value);
                    setDropdownOpen(false);
                  }}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="models-grid">
        {visibleModels.map((model) => (
          <div
            key={model.id}
            className="model-card"
            onClick={() => navigate(`/brands/${brandId}/models/${model.id}`)}
          >
            <img src={model.image} alt={model.name} className="model-image" />
            <h3>{model.name}</h3>
            <p>{t('type')}: {model.type}</p>
            <p>{t('price')}: ${model.price}</p>
          </div>
        ))}
      </div>

      {visibleCount < filteredModels.length && (
        <div ref={loadMoreRef} className="load-more-trigger"></div>
      )}
    </div>
  );
}

export default GuitarModelsPage;
