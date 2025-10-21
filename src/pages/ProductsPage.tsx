import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductsPage.module.scss';

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
    <div className={styles.productsPage}>
      {/* Кнопка назад */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handleBackToCategories}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Назад к категориям
        </button>
      </div>

      {/* Заголовок с поиском */}
      <div className={styles.searchHeader}>
        <div className={styles.searchHeaderContent}>
          <h1 className={styles.searchTitle}>Сырьё / Raw Materials</h1>
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Поиск по INCI, CAS или ключевому слову"
              className={styles.searchInput}
            />
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#99A1AF" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.productsLayout}>
        {/* Боковая панель фильтров */}
        <div className={styles.filtersSidebar}>
          <div className={styles.filtersHeader}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round"/>
            </svg>
            <h3>Фильтры / Filters</h3>
          </div>

          <div className={styles.filterSection}>
            <h4 className={styles.filterLabel}>Категория / Category</h4>
            <div className={styles.filterOptions}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.filterOption} ${selectedFilters.includes(category) ? styles.active : ''}`}
                  onClick={() => handleFilterToggle(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterDivider}></div>

          <div className={styles.filterSection}>
            <h4 className={styles.filterLabel}>Происхождение / Origin</h4>
            <div className={styles.filterOptions}>
              {origins.map(origin => (
                <button
                  key={origin}
                  className={`${styles.filterOption} ${selectedOrigin.includes(origin) ? styles.active : ''}`}
                  onClick={() => handleOriginToggle(origin)}
                >
                  {origin}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterDivider}></div>

          <div className={styles.filterSection}>
            <button
              className={`${styles.filterOption} ${inStockOnly ? styles.active : ''}`}
              onClick={() => setInStockOnly(!inStockOnly)}
            >
              Только в наличии / In Stock Only
            </button>
          </div>
        </div>

        {/* Основной контент */}
        <div className={styles.mainContent}>
          <div className={styles.resultsHeader}>
            <span className={styles.resultsCount}>3 материалов найдено</span>
            <div className={styles.sortContainer}>
              <button className={styles.sortButton}>
                Самые релевантные
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={styles.viewToggle}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="4" height="4" stroke="#D1D5DC" strokeWidth="1"/>
                  <rect x="8" y="2" width="4" height="4" stroke="#D1D5DC" strokeWidth="1"/>
                  <rect x="2" y="8" width="4" height="4" stroke="#D1D5DC" strokeWidth="1"/>
                  <rect x="8" y="8" width="4" height="4" stroke="#D1D5DC" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.productsGrid}>
            {mockProducts.map(product => (
              <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product)}>
                <div className={styles.productImage}>
                  <img src={product.image} alt={product.name} />
                </div>
                
                <div className={styles.productContent}>
                  <div className={styles.productHeader}>
                    <div className={styles.productInfo}>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productDescription}>{product.description}</p>
                      <p className={styles.productCas}>{product.cas}</p>
                    </div>
                    <div className={styles.productRating}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1L9.5 5.5L14 5.5L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 5.5L6.5 5.5L8 1Z" fill="#FDC700" stroke="#FDC700" strokeWidth="1.33"/>
                      </svg>
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <div className={styles.productBadges}>
                    <span className={`${styles.badge} ${styles.primary}`}>{product.category}</span>
                    <span className={`${styles.badge} ${styles.secondary}`}>{product.origin}</span>
                    <span className={`${styles.badge} ${styles.success}`}>{product.availability}</span>
                  </div>

                  <p className={styles.productFullDescription}>{product.fullDescription}</p>

                  <div className={styles.productFooter}>
                    <div className={styles.productPrice}>
                      <span className={styles.priceAmount}>₽{product.price.toLocaleString()}</span>
                      <span className={styles.priceUnit}>/{product.unit}</span>
                    </div>
                    <button className={styles.addToCartButton}>
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
