import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DescriptionTab from '../components/DescriptionTab';
import SpecificationsTab from '../components/SpecificationsTab';
import SafetyTab from '../components/SafetyTab';
import ApplicationTab from '../components/ApplicationTab';
import RecipesTab from '../components/RecipesTab';
import SupplierTab from '../components/SupplierTab';
import './ProductDetailPage.css';

// Mock данные товара согласно макету Figma
const mockProduct = {
  id: 1,
  name: "CocoSoft™ CAB Premium",
  inci: "Cocamidopropyl Betaine",
  description: "Премиум-класс амфотерный ПАВ, полученный из кокосового масла и диметиламинопропиламина. Отличный бустер пены и загуститель с исключительной мягкостью.",
  cas: "61789-40-0",
  ec: "263-058-8",
  hs: "3402.11.00",
  rating: 4.8,
  reviewsCount: 234,
  category: "ПАВ",
  origin: "Натуральное происхождение",
  source: "Кокосовое масло",
  form: "Прозрачная жидкость",
  solubility: "Вода, Глицерин",
  ph: "5.0 - 7.0",
  dosage: "2% - 30%",
  shelfLife: "24 месяца",
  availability: "В наличии",
  image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=301&h=192&fit=crop",
  supplier: {
    name: "CosmoHome",
    rating: 4.8,
    location: "Москва, Россия"
  },
  price: "$18.50",
  unit: "/ кг",
  volumeRange: "Для объёмов 1-4 кг",
  minOrder: "25 кг",
  deliveryTime: "2-3 недели",
  badges: ["ПАВ", "Натуральный", "Без сульфатов", "Мягкий"],
  certificates: ["COSMOS", "ECOCERT", "Halal", "Biodegradable"],
  benefits: [
    "Высокое качество пены и стабильность",
    "Отличные свойства для увеличения вязкости",
    "Снижает потенциал раздражения анионных ПАВ",
    "Совместим со всеми системами ПАВ",
    "Биологически разлагаемый и экологически чистый",
    "Улучшает расчесывание и ощущение волос"
  ],
  usage: "Наилучшие результаты достигаются при использовании в качестве вторичного ПАВ в сочетании с первичными анионными ПАВ. Добавлять на стадии охлаждения или при температуре ниже 40°C для сохранения функциональности."
};

const ProductDetailPage: React.FC = () => {
  const { productId: _productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const _handleBackToProducts = () => {
    navigate('/products/1'); // Возврат к списку товаров
  };

  const tabs = [
    { id: 'description', label: 'Описание' },
    { id: 'specifications', label: 'Спецификации / ТДС' },
    { id: 'safety', label: 'Безопасность и документы' },
    { id: 'application', label: 'Применение' },
    { id: 'recipes', label: 'Примеры рецептур', badge: '3' },
    { id: 'supplier', label: 'О поставщике' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <DescriptionTab />;
      
      case 'specifications':
        return <SpecificationsTab />;
      
      case 'safety':
        return <SafetyTab />;
      
      case 'application':
        return <ApplicationTab />;
      
      case 'recipes':
        return <RecipesTab />;
      
      case 'supplier':
        return <SupplierTab />;
      
      default:
        return null;
    }
  };

  return (
    <div className="product-detail-page">
      {/* Хлебные крошки */}
      <div className="breadcrumbs">
        <div className="breadcrumb-item">
          <span className="breadcrumb-link">Главная</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="breadcrumb-item">
          <span className="breadcrumb-link">Каталог</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="breadcrumb-item">
          <span className="breadcrumb-link">ПАВ</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="breadcrumb-item">
          <span className="breadcrumb-current">Cocamidopropyl Betaine</span>
        </div>
      </div>

      {/* Заголовок товара */}
      <div className="product-header">
        <div className="product-header-content">
          <div className="product-title-section">
            <h1 className="product-name">{mockProduct.name}</h1>
            <p className="product-inci">INCI: {mockProduct.inci}</p>
            
            <div className="product-badges">
              {mockProduct.badges.map((badge, index) => (
                <span key={index} className="product-badge">{badge}</span>
              ))}
            </div>
            
            <div className="supplier-info">
              <span className="supplier-label">Поставщик:</span>
              <button className="supplier-link">
                {mockProduct.supplier.name}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 3L7.5 6L4.5 9" stroke="#155DFC" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="rating-info">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L9.5 5.5L14 5.5L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 5.5L6.5 5.5L8 1Z" fill="#FDC700" stroke="#FDC700" strokeWidth="1.33"/>
                </svg>
                <span className="rating-value">{mockProduct.rating}</span>
                <span className="reviews-count">({mockProduct.reviewsCount} отзывов)</span>
              </div>
            </div>
          </div>
          
          <div className="product-actions">
            <button className="action-button secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Поделиться
            </button>
            <button className="action-button secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Сохранить
            </button>
            <button className="action-button secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Запросить образец
            </button>
            <button className="action-button primary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="white" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Запросить цену
            </button>
            <button className="action-button secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Чат с поставщиком
            </button>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="product-detail-content">
        {/* Левая панель - изображение, характеристики и вкладки */}
        <div className="product-left-panel">
          <div className="product-main-card">
            <div className="product-image-section">
              <div className="product-image">
                <img src={mockProduct.image} alt={mockProduct.name} />
              </div>
              <p className="product-description">{mockProduct.description}</p>
            </div>
            
            <div className="specifications-section">
              <h3>Ключевые характеристики</h3>
              <div className="specifications-grid">
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">INCI название</span>
                    <span className="spec-value">{mockProduct.inci}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">CAS номер</span>
                    <span className="spec-value">{mockProduct.cas}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">EC номер</span>
                    <span className="spec-value">{mockProduct.ec}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">HS код</span>
                    <span className="spec-value">{mockProduct.hs}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Происхождение</span>
                    <span className="spec-value">{mockProduct.origin}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Источник</span>
                    <span className="spec-value">{mockProduct.source}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Форма</span>
                    <span className="spec-value">{mockProduct.form}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Растворимость</span>
                    <span className="spec-value">{mockProduct.solubility}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">pH диапазон</span>
                    <span className="spec-value">{mockProduct.ph}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Дозировка</span>
                    <span className="spec-value">{mockProduct.dosage}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Срок годности</span>
                    <span className="spec-value">{mockProduct.shelfLife}</span>
                  </div>
                </div>
              </div>
              
              <div className="certificates-section">
                <span className="certificates-label">Сертификаты</span>
                <div className="certificates-list">
                  {mockProduct.certificates.map((cert, index) => (
                    <span key={index} className="certificate-badge">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1L7.5 4.5L11 4.5L8.5 7L9.5 10.5L6 8.5L2.5 10.5L3.5 7L1 4.5L4.5 4.5L6 1Z" fill="#008236"/>
                      </svg>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Секция с вкладками */}
          <div className="tabs-section">
            <div className="tabs-container">
              <div className="tabs-header">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                    {tab.badge && <span className="tab-badge">{tab.badge}</span>}
                  </button>
                ))}
              </div>
              
              <div className="tabs-content">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>

        {/* Правая панель - цены и заказ */}
        <div className="product-right-panel">
          <div className="pricing-card">
            <h3>Цены и наличие</h3>
            
            <div className="price-display">
              <div className="price-main">
                <span className="price-amount">{mockProduct.price}</span>
                <span className="price-unit">{mockProduct.unit}</span>
              </div>
              <p className="price-range">{mockProduct.volumeRange}</p>
            </div>
            
            <button className="volume-prices-button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Объёмные цены
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="calculator-section">
              <label className="calculator-label">Рассчитать общую стоимость</label>
              <div className="quantity-input">
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="quantity-field"
                />
                <span className="quantity-unit">кг</span>
              </div>
              
              <div className="price-breakdown">
                <div className="price-row">
                  <span className="price-label">Цена за единицу:</span>
                  <span className="price-value">{mockProduct.price}/кг</span>
                </div>
                <div className="price-row total">
                  <span className="price-label">Итого:</span>
                  <span className="price-total">${(parseFloat(mockProduct.price.replace('$', '')) * quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="order-info">
              <div className="info-row">
                <span className="info-label">Минимальный заказ</span>
                <span className="info-value">{mockProduct.minOrder}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Срок поставки</span>
                <span className="info-value">{mockProduct.deliveryTime}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Наличие</span>
                <span className="availability-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L7.5 4.5L11 4.5L8.5 7L9.5 10.5L6 8.5L2.5 10.5L3.5 7L1 4.5L4.5 4.5L6 1Z" fill="#008236"/>
                  </svg>
                  {mockProduct.availability}
                </span>
              </div>
            </div>
          </div>
          
          <div className="action-buttons">
            <button className="action-button primary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="white" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Запросить цену
            </button>
            <button className="action-button secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Запросить образец
            </button>
            <button className="action-button secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Чат с поставщиком
            </button>
          </div>
          
          <div className="volume-pricing-card">
            <h4>Доступны объёмные цены</h4>
            <p>Получите лучшие расценки для больших заказов. Свяжитесь с нами для индивидуального предложения.</p>
            <button className="volume-request-button">Запросить объёмное предложение</button>
          </div>
          
          <div className="support-card">
            <h4>Нужна техническая поддержка?</h4>
            <p>Наши эксперты по формулировкам готовы помочь с вашим проектом.</p>
            <button className="support-button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Получите помощь эксперта
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
