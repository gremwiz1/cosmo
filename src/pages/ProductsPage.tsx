import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductsPage.css';

// Mock данные товаров согласно макету Figma
const mockProducts = [
  {
    id: 1,
    name: "HyalMax™ HMW",
    description: "Гиалуронат натрия",
    cas: "CAS: 9067-32-7",
    rating: 4.9,
    category: "Активные ингредиенты",
    origin: "Биотехнологическое",
    availability: "В наличии",
    fullDescription: "Сверхчистая высокомолекулярная гиалуроновая кислота",
    price: 5250,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=301&h=192&fit=crop"
  },
  {
    id: 2,
    name: "НиациЧистый™ B3",
    description: "Ниацинамид",
    cas: "CAS: 98-92-0",
    rating: 4.8,
    category: "Активные ингредиенты",
    origin: "Синтетическое",
    availability: "В наличии",
    fullDescription: "Витамин B3 фармацевтического качества",
    price: 3500,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=301&h=192&fit=crop"
  },
  {
    id: 3,
    name: "Органическое масло шиповника",
    description: "Масло семян шиповника",
    cas: "CAS: 84696-47-9",
    rating: 4.7,
    category: "Масла",
    origin: "Натуральное",
    availability: "В наличии",
    fullDescription: "Органическое масло шиповника холодного отжима",
    price: 9500,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=301&h=192&fit=crop"
  }
];

const ProductsPage: React.FC = () => {
  const { subcategoryId } = useParams<{ subcategoryId: string }>();
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedOrigin, setSelectedOrigin] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleBackToCategories = () => {
    navigate('/');
  };

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleOriginToggle = (origin: string) => {
    setSelectedOrigin(prev => 
      prev.includes(origin) 
        ? prev.filter(o => o !== origin)
        : [...prev, origin]
    );
  };

  const handleProductClick = (product: any) => {
    // Переход к детальной странице товара
    navigate(`/product/${product.id}`);
  };

  const categories = [
    "Активные ингредиенты", "Масла", "Экстракты", "Эмульгаторы", 
    "ПАВ", "Загустители", "Консерванты", "Смягчители", 
    "УФ-фильтры", "Пептиды", "Масла и воски", "Успокаивающие агенты",
    "Сырье для отдушек", "Готовые отдушки"
  ];

  const origins = ["Натуральное", "Синтетическое", "Биотехнологическое"];

  return (
    <div className="products-page">
      {/* Кнопка назад */}
      <div className="back-button-container">
        <button className="back-button" onClick={handleBackToCategories}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Назад к категориям
        </button>
      </div>

      {/* Заголовок с поиском */}
      <div className="search-header">
        <div className="search-header-content">
          <h1 className="search-title">Сырьё / Raw Materials</h1>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Поиск по INCI, CAS или ключевому слову"
              className="search-input"
            />
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#99A1AF" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="products-layout">
        {/* Боковая панель фильтров */}
        <div className="filters-sidebar">
          <div className="filters-header">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
            </svg>
            <h3>Фильтры / Filters</h3>
          </div>

          <div className="filter-section">
            <h4 className="filter-label">Категория / Category</h4>
            <div className="filter-options">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-option ${selectedFilters.includes(category) ? 'active' : ''}`}
                  onClick={() => handleFilterToggle(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-divider"></div>

          <div className="filter-section">
            <h4 className="filter-label">Происхождение / Origin</h4>
            <div className="filter-options">
              {origins.map(origin => (
                <button
                  key={origin}
                  className={`filter-option ${selectedOrigin.includes(origin) ? 'active' : ''}`}
                  onClick={() => handleOriginToggle(origin)}
                >
                  {origin}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-divider"></div>

          <div className="filter-section">
            <button
              className={`filter-option ${inStockOnly ? 'active' : ''}`}
              onClick={() => setInStockOnly(!inStockOnly)}
            >
              Только в наличии / In Stock Only
            </button>
          </div>
        </div>

        {/* Основной контент */}
        <div className="main-content">
          <div className="results-header">
            <span className="results-count">3 материалов найдено</span>
            <div className="sort-container">
              <button className="sort-button">
                Самые релевантные
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="view-toggle">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="4" height="4" stroke="#D1D5DC" strokeWidth="1"/>
                  <rect x="8" y="2" width="4" height="4" stroke="#D1D5DC" strokeWidth="1"/>
                  <rect x="2" y="8" width="4" height="4" stroke="#D1D5DC" strokeWidth="1"/>
                  <rect x="8" y="8" width="4" height="4" stroke="#D1D5DC" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="products-grid">
            {mockProducts.map(product => (
              <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                
                <div className="product-content">
                  <div className="product-header">
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <p className="product-cas">{product.cas}</p>
                    </div>
                    <div className="product-rating">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1L9.5 5.5L14 5.5L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 5.5L6.5 5.5L8 1Z" fill="#FDC700" stroke="#FDC700" strokeWidth="1.33"/>
                      </svg>
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <div className="product-badges">
                    <span className="badge primary">{product.category}</span>
                    <span className="badge secondary">{product.origin}</span>
                    <span className="badge success">{product.availability}</span>
                  </div>

                  <p className="product-full-description">{product.fullDescription}</p>

                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price-amount">₽{product.price.toLocaleString()}</span>
                      <span className="price-unit">/{product.unit}</span>
                    </div>
                    <button className="add-to-cart-button">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4.67 13.33H12.67M4.67 13.33C4.67 13.33 1.37 1.37 13.36 9.33M4.67 13.33C4.67 13.33 1.37 1.37 13.36 9.33M12 13.33H4.67M12 13.33C12 13.33 15.3 1.37 3.31 9.33" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
