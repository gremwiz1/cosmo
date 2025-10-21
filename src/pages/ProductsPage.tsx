import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductsPage.module.scss';
import productImage from '../assets/images/product-icon.png';
import backButtonIcon from '../assets/images/left-arrow.png';
import sortArrowIcon from '../assets/images/sort-arrow.png';
import viewToggleIcon from '../assets/images/view-toggle.png';
import cartIconButton from '../assets/images/cart-icon-button.png';
import searchIcon from '../assets/images/search-icon.png';
import filterIcon from '../assets/images/filter-icon.png';
// Mock данные товаров 
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
    image: productImage,
    background: "linear-gradient(135deg, rgba(219, 234, 254, 1) 0%, rgba(224, 231, 255, 1) 100%)"
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
    image: productImage,
    background: "linear-gradient(135deg, #F3E8FF 0%, #FCE7F3 100%)"
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
    image: productImage,
    background: "linear-gradient(135deg, #FFEDD4 0%, #FFE2E2 100%)"
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

  const handleBackToSubcategories = () => {
    navigate('/category/1'); // Возврат к подкатегориям сырья
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
      {/* Кнопки назад */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handleBackToSubcategories}>
          <img src={backButtonIcon} alt="back" className={styles.backButtonIcon}/>
          Назад к категориям
        </button>
      </div>
      <div className={styles.backButtonContainerSecondary}>
        <button className={styles.backButton} onClick={handleBackToCategories}>
          <img src={backButtonIcon} alt="back" className={styles.backButtonIcon}/>
          Назад к категориям
        </button>
      </div>

      {/* Заголовок с поиском */}
      <div className={styles.searchHeader}>
        <div className={styles.searchHeaderContent}>
          <h1 className={styles.searchTitle}>
            {subcategoryId ? `Подкатегория ${subcategoryId}` : 'Сырьё / Raw Materials'}
          </h1>
          <div className={styles.searchContainer}>
            <img src={searchIcon} alt="search" className={styles.searchIcon}/>
            <input 
              type="text" 
              placeholder="Поиск по INCI, CAS или ключевому слову"
              className={styles.searchInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.productsLayout}>
        {/* Боковая панель фильтров */}
        <div className={styles.filtersSidebar}>
          <div className={styles.filtersHeader}>
            <img src={filterIcon} alt="filter" className={styles.filterIcon} />
            <h3>Фильтры / Filters</h3>
          </div>

          <div className={styles.filterSection}>
            <h4 className={styles.filterLabel}>Категория / Category</h4>
            <div className={styles.filterOptions}>
              {categories.map(category => (
                <div
                  key={category}
                  className={styles.filterOption}
                  onClick={() => handleFilterToggle(category)}
                >
                  <div className={`${styles.checkbox} ${selectedFilters.includes(category) ? styles.checked : ''}`}>
                    {selectedFilters.includes(category) && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span className={styles.filterText}>{category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.filterDivider}></div>

          <div className={styles.filterSection}>
            <h4 className={styles.filterLabel}>Происхождение / Origin</h4>
            <div className={styles.filterOptions}>
              {origins.map(origin => (
                <div
                  key={origin}
                  className={styles.filterOption}
                  onClick={() => handleOriginToggle(origin)}
                >
                  <div className={`${styles.checkbox} ${selectedOrigin.includes(origin) ? styles.checked : ''}`}>
                    {selectedOrigin.includes(origin) && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span className={styles.filterText}>{origin}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.filterDivider}></div>

          <div className={styles.filterSection}>
            <div
              className={styles.filterOption}
              onClick={() => setInStockOnly(!inStockOnly)}
            >
              <div className={`${styles.checkbox} ${inStockOnly ? styles.checked : ''}`}>
                {inStockOnly && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className={styles.filterText}>Только в наличии / In Stock Only</span>
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className={styles.mainContent}>
          <div className={styles.resultsHeader}>
            <span className={styles.resultsCount}>3 материалов найдено</span>
            <div className={styles.sortContainer}>
              <button className={styles.sortButton}>
                Самые релевантные
                <img src={sortArrowIcon} alt="sort" className={styles.sortIcon} />
              </button>
              <div className={styles.viewToggle}>
                <img src={viewToggleIcon} alt="view toggle" className={styles.viewToggleIcon} />
              </div>
            </div>
          </div>

          <div className={styles.productsGrid}>
            {mockProducts.map(product => (
              <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product)}>
                <div className={styles.productImage} style={{ background: product.background }}>
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
                      <img src={cartIconButton} alt="cart" className={styles.cartButtonIcon} />
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
