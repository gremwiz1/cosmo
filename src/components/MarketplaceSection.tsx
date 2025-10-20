import React from 'react';
import './MarketplaceSection.css';

const MarketplaceSection: React.FC = () => {
  return (
    <section className="marketplace-header">
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Маркетплейс</h1>
          <p className="header-description">
            Найдите материалы, упаковку, производственных партнеров и тендеры
          </p>
        </div>
        
        <div className="buyer-mode-badge">
          <div className="badge-icon">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L8 4L11 4.5L9 7L9.5 10L6 8.5L2.5 10L3 7L1 4.5L4 4L6 1Z" fill="#1447E6"/>
            </svg>
          </div>
          <span>Режим покупателя</span>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
