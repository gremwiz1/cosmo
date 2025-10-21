import React from 'react';
import './SupplierTab.css';

const SupplierTab: React.FC = () => {
  const handleViewAllMaterials = () => {
    // В реальном приложении здесь был бы переход на страницу всех материалов поставщика
    alert('Переход к списку всех материалов ChemPure Industries');
  };

  const handleMaterialClick = (materialName: string) => {
    // В реальном приложении здесь был бы переход к детальной странице материала
    alert(`Переход к материалу: ${materialName}`);
  };

  return (
    <div className="tab-content">
      <div className="supplier-card">
        <div className="supplier-header">
          <div className="supplier-logo">
            <div className="logo-circle">
              <span>CPI</span>
            </div>
          </div>
          <div className="supplier-info">
            <h3>ChemPure Industries</h3>
            <div className="supplier-details">
              <div className="detail-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L10.5 6.5L16 6.5L11.5 10L13 16L8 12.5L3 16L4.5 10L0 6.5L5.5 6.5L8 1Z" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Lyon, France</span>
              </div>
              <div className="divider"></div>
              <div className="detail-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L10.5 6.5L16 6.5L11.5 10L13 16L8 12.5L3 16L4.5 10L0 6.5L5.5 6.5L8 1Z" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Est. 1998</span>
              </div>
            </div>
            <div className="supplier-rating">
              <div className="rating-stars">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L10.5 6.5L16 6.5L11.5 10L13 16L8 12.5L3 16L4.5 10L0 6.5L5.5 6.5L8 1Z" fill="#FDC700" stroke="#FDC700" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="rating-score">4.8</span>
              </div>
              <span className="rating-reviews">(234 reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="certifications-section">
          <h4>Company Certifications</h4>
          <div className="certifications-list">
            <div className="certification-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 3L4.5 8.5L2 6" stroke="#008236" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>ISO 9001</span>
            </div>
            <div className="certification-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 3L4.5 8.5L2 6" stroke="#008236" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>GMP</span>
            </div>
            <div className="certification-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 3L4.5 8.5L2 6" stroke="#008236" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>COSMOS</span>
            </div>
            <div className="certification-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 3L4.5 8.5L2 6" stroke="#008236" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>ECOCERT</span>
            </div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="other-materials-section">
          <h4>Other Materials from This Supplier</h4>
          <div className="materials-grid">
            <div className="material-card" onClick={() => handleMaterialClick("Sodium Lauryl Sulfoacetate")}>
              <h5>Sodium Lauryl Sulfoacetate</h5>
              <p>Mild surfactant</p>
            </div>
            <div className="material-card" onClick={() => handleMaterialClick("Cetearyl Alcohol")}>
              <h5>Cetearyl Alcohol</h5>
              <p>Emulsifier</p>
            </div>
            <div className="material-card" onClick={() => handleMaterialClick("Glyceryl Stearate")}>
              <h5>Glyceryl Stearate</h5>
              <p>Emollient</p>
            </div>
            <div className="material-card" onClick={() => handleMaterialClick("Xanthan Gum")}>
              <h5>Xanthan Gum</h5>
              <p>Thickener</p>
            </div>
          </div>
          <button className="view-all-button" onClick={handleViewAllMaterials}>
            View All Materials from ChemPure Industries
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierTab;
