import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MODEL_DETAILS } from '../queries/GET_MODEL_DETAILS';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft } from 'react-icons/fi';
import './GuitarDetailsPage.css';

function GuitarDetailsPage() {
  const { brandId, modelId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_MODEL_DETAILS, {
    variables: { brandId, modelId },
  });

  const [activeTab, setActiveTab] = useState('specs');
  const [visibleMusicians, setVisibleMusicians] = useState(2);

  if (loading) return <p>{t('loadingDetails')}</p>;
  if (error) return <p>{t('errorDetails')} {error.message}</p>;

  const model = data.findUniqueModel;

  return (
    <div className="details-page-container">
      <button className="back-home-button" onClick={() => navigate(-1)}>
        <FiArrowLeft className="back-arrow-icon" /> Back To List
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

      <div className="details-hero-wrapper">
        <div className="details-hero-left">
          <h1>{model.name}</h1>
        </div>
        <div className="details-hero-right">
          <div className="details-hero-image-mask">
            <img src={model.image} alt={model.name} className="model-overlay-image" />
          </div>
          <div className="bottom-logo">
            <div className="logo-shape">
              <div className="half-circle left"></div>
              <div className="half-circle right"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="details-tabs">
        <button onClick={() => setActiveTab('specs')} className={activeTab === 'specs' ? 'active-tab' : ''}>{t('specs')}</button>
        <button onClick={() => setActiveTab('musicians')} className={activeTab === 'musicians' ? 'active-tab' : ''}>{t('musicians')}</button>
      </div>

      {activeTab === 'specs' && (
        <div className="specs-section">
          {model.description && (
            <p className="model-description">{model.description}</p>
          )}
          <ul>
            <li><strong>Body Wood:</strong> "{model.specs.bodyWood}"</li>
            <li><strong>Neck Wood:</strong> "{model.specs.neckWood}"</li>
            <li><strong>Fingerboard:</strong> "{model.specs.fingerboardWood}"</li>
            <li><strong>Pickups:</strong> "{model.specs.pickups}"</li>
            <li><strong>Tuners:</strong> "{model.specs.tuners}"</li>
            <li><strong>Scale Length:</strong> "{model.specs.scaleLength}"</li>
            <li><strong>Bridge:</strong> "{model.specs.bridge}"</li>
          </ul>
        </div>
      )}

      {activeTab === 'musicians' && (
        <div className="musicians-section">
          {model.musicians.slice(0, visibleMusicians).map((m, i) => (
            <div key={i} className="musician-card">
              <img src={m.musicianImage} alt={m.name} className="musician-image" />
              <p><strong>{m.name}</strong></p>
              <p>{m.bands.join(', ')}</p>
            </div>
          ))}
          {visibleMusicians < model.musicians.length && (
            <button onClick={() => setVisibleMusicians((prev) => prev + 2)} className="show-more-button">
              {t('showMore') || 'Show More'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default GuitarDetailsPage;
