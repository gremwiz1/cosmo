import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#155DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#155DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#155DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="logo-text">
              <div className="logo-title">CosmoTech</div>
              <div className="logo-subtitle">by CosmoHome</div>
            </div>
          </div>
          
          <div className="nav-menu">
            <button className="nav-item">Панель</button>
            <button className="nav-item active">Маркетплейс</button>
            <button className="nav-item">Формулятор</button>
            <button className="nav-item">Обучение</button>
          </div>
        </div>
        
        <div className="nav-right">
          <button className="nav-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="nav-button primary">Поддержка</button>
          <div className="user-avatar">SJ</div>
          <button className="nav-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="#364153" strokeWidth="1.67" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
