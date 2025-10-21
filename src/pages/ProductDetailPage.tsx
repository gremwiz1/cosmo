import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DescriptionTab from '../components/DescriptionTab';
import SpecificationsTab from '../components/SpecificationsTab';
import SafetyTab from '../components/SafetyTab';
import ApplicationTab from '../components/ApplicationTab';
import RecipesTab from '../components/RecipesTab';
import SupplierTab from '../components/SupplierTab';
import styles from './ProductDetailPage.module.scss';

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
    <div className={styles.productDetailPage}>
      {/* Хлебные крошки */}
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbLink}>Главная</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbLink}>Каталог</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbLink}>ПАВ</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbCurrent}>Cocamidopropyl Betaine</span>
        </div>
      </div>

      {/* Заголовок товара */}
      <div className={styles.productHeader}>
        <div className={styles.productHeaderContent}>
          <div className={styles.productTitleSection}>
            <h1 className={styles.productName}>{mockProduct.name}</h1>
            <p className={styles.productInci}>INCI: {mockProduct.inci}</p>
            
            <div className={styles.productBadges}>
              {mockProduct.badges.map((badge, index) => (
                <span key={index} className={styles.productBadge}>{badge}</span>
              ))}
            </div>
            
            <div className={styles.supplierInfo}>
              <span className={styles.supplierLabel}>Поставщик:</span>
              <button className={styles.supplierLink}>
                {mockProduct.supplier.name}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 3L7.5 6L4.5 9" stroke="#155DFC" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className={styles.ratingInfo}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L9.5 5.5L14 5.5L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 5.5L6.5 5.5L8 1Z" fill="#FDC700" stroke="#FDC700" strokeWidth="1.33"/>
                </svg>
                <span className={styles.ratingValue}>{mockProduct.rating}</span>
                <span className={styles.reviewsCount}>({mockProduct.reviewsCount} отзывов)</span>
              </div>
            </div>
          </div>
          
          <div className={styles.productActions}>
            <button className={`${styles.actionButton} ${styles.secondary}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Поделиться
            </button>
            <button className={`${styles.actionButton} ${styles.secondary}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Сохранить
            </button>
            <button className={`${styles.actionButton} ${styles.secondary}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Запросить образец
            </button>
            <button className={`${styles.actionButton} ${styles.primary}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="white" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Запросить цену
            </button>
            <button className={`${styles.actionButton} ${styles.secondary}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Чат с поставщиком
            </button>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className={styles.productDetailContent}>
        {/* Левая панель - изображение, характеристики и вкладки */}
        <div className={styles.productLeftPanel}>
          <div className={styles.productMainCard}>
            <div className={styles.productImageSection}>
              <div className={styles.productImage}>
                <img src={mockProduct.image} alt={mockProduct.name} />
              </div>
              <p className={styles.productDescription}>{mockProduct.description}</p>
            </div>
            
            <div className={styles.specificationsSection}>
              <h3>Ключевые характеристики</h3>
              <div className={styles.specificationsGrid}>
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>INCI название</span>
                    <span className={styles.specValue}>{mockProduct.inci}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>CAS номер</span>
                    <span className={styles.specValue}>{mockProduct.cas}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>EC номер</span>
                    <span className={styles.specValue}>{mockProduct.ec}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>HS код</span>
                    <span className={styles.specValue}>{mockProduct.hs}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Происхождение</span>
                    <span className={styles.specValue}>{mockProduct.origin}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Источник</span>
                    <span className={styles.specValue}>{mockProduct.source}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Форма</span>
                    <span className={styles.specValue}>{mockProduct.form}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Растворимость</span>
                    <span className={styles.specValue}>{mockProduct.solubility}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>pH диапазон</span>
                    <span className={styles.specValue}>{mockProduct.ph}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Дозировка</span>
                    <span className={styles.specValue}>{mockProduct.dosage}</span>
                  </div>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="8" fill="#F3F4F6"/>
                      <path d="M8 8L24 8M8 16L24 16M8 24L24 24" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Срок годности</span>
                    <span className={styles.specValue}>{mockProduct.shelfLife}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.certificatesSection}>
                <span className={styles.certificatesLabel}>Сертификаты</span>
                <div className={styles.certificatesList}>
                  {mockProduct.certificates.map((cert, index) => (
                    <span key={index} className={styles.certificateBadge}>
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
          <div className={styles.tabsSection}>
            <div className={styles.tabsContainer}>
              <div className={styles.tabsHeader}>
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                    {tab.badge && <span className={styles.tabBadge}>{tab.badge}</span>}
                  </button>
                ))}
              </div>
              
              <div className={styles.tabsContent}>
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>

        {/* Правая панель - цены и заказ */}
        <div className={styles.productRightPanel}>
          <div className={styles.pricingCard}>
            <h3>Цены и наличие</h3>
            
            <div className={styles.priceDisplay}>
              <div className={styles.priceMain}>
                <span className={styles.priceAmount}>{mockProduct.price}</span>
                <span className={styles.priceUnit}>{mockProduct.unit}</span>
              </div>
              <p className={styles.priceRange}>{mockProduct.volumeRange}</p>
            </div>
            
            <button className={styles.volumePricesButton}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Объёмные цены
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={styles.calculatorSection}>
              <label className={styles.calculatorLabel}>Рассчитать общую стоимость</label>
              <div className={styles.quantityInput}>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className={styles.quantityField}
                />
                <span className={styles.quantityUnit}>кг</span>
              </div>
              
              <div className={styles.priceBreakdown}>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>Цена за единицу:</span>
                  <span className={styles.priceValue}>{mockProduct.price}/кг</span>
                </div>
                <div className={`${styles.priceRow} ${styles.total}`}>
                  <span className={styles.priceLabel}>Итого:</span>
                  <span className={styles.priceTotal}>${(parseFloat(mockProduct.price.replace('$', '')) * quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className={styles.orderInfo}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Минимальный заказ</span>
                <span className={styles.infoValue}>{mockProduct.minOrder}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Срок поставки</span>
                <span className={styles.infoValue}>{mockProduct.deliveryTime}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Наличие</span>
                <span className={styles.availabilityBadge}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L7.5 4.5L11 4.5L8.5 7L9.5 10.5L6 8.5L2.5 10.5L3.5 7L1 4.5L4.5 4.5L6 1Z" fill="#008236"/>
                  </svg>
                  {mockProduct.availability}
                </span>
              </div>
            </div>
          </div>
          
          <div className={styles.actionButtons}>
            <button className={`${styles.actionButton} ${styles.primary}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="white" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Запросить цену
            </button>
            <button className={`${styles.actionButton} ${styles.secondary}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Запросить образец
            </button>
            <button className={`${styles.actionButton} ${styles.secondary}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              Чат с поставщиком
            </button>
          </div>
          
          <div className={styles.volumePricingCard}>
            <h4>Доступны объёмные цены</h4>
            <p>Получите лучшие расценки для больших заказов. Свяжитесь с нами для индивидуального предложения.</p>
            <button className={styles.volumeRequestButton}>Запросить объёмное предложение</button>
          </div>
          
          <div className={styles.supportCard}>
            <h4>Нужна техническая поддержка?</h4>
            <p>Наши эксперты по формулировкам готовы помочь с вашим проектом.</p>
            <button className={styles.supportButton}>
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
