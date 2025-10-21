import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../data/mockData';
import './CategoryPage.css';

// Подкатегории для сырья согласно макету Figma
const rawMaterialSubcategories = [
  {
    id: 1,
    name: "Активные ингредиенты",
    productCount: 423,
    color: "#155DFC",
    gradient: "linear-gradient(135deg, rgba(239, 246, 255, 1) 0%, rgba(236, 254, 255, 1) 100%)",
    borderColor: "#BEDBFF"
  },
  {
    id: 2,
    name: "Базовые масла",
    productCount: 287,
    color: "#E17100",
    gradient: "linear-gradient(135deg, rgba(255, 251, 235, 1) 0%, rgba(254, 252, 232, 1) 100%)",
    borderColor: "#FEE685"
  },
  {
    id: 3,
    name: "Растительные экстракты",
    productCount: 354,
    color: "#00A63E",
    gradient: "linear-gradient(135deg, rgba(240, 253, 244, 1) 0%, rgba(236, 253, 245, 1) 100%)",
    borderColor: "#B9F8CF"
  },
  {
    id: 4,
    name: "Эмульгаторы",
    productCount: 156,
    color: "#9810FA",
    gradient: "linear-gradient(135deg, rgba(250, 245, 255, 1) 0%, rgba(253, 242, 248, 1) 100%)",
    borderColor: "#E9D4FF"
  },
  {
    id: 5,
    name: "ПАВ",
    productCount: 198,
    color: "#0092B8",
    gradient: "linear-gradient(135deg, rgba(236, 254, 255, 1) 0%, rgba(240, 249, 255, 1) 100%)",
    borderColor: "#A2F4FD"
  },
  {
    id: 6,
    name: "Загустители",
    productCount: 123,
    color: "#4F39F6",
    gradient: "linear-gradient(135deg, rgba(238, 242, 255, 1) 0%, rgba(250, 245, 255, 1) 100%)",
    borderColor: "#C6D2FF"
  },
  {
    id: 7,
    name: "Консерванты",
    productCount: 89,
    color: "#E7000B",
    gradient: "linear-gradient(135deg, rgba(254, 242, 242, 1) 0%, rgba(253, 242, 248, 1) 100%)",
    borderColor: "#FFC9C9"
  },
  {
    id: 8,
    name: "Смягчители",
    productCount: 267,
    color: "#009689",
    gradient: "linear-gradient(135deg, rgba(240, 253, 250, 1) 0%, rgba(236, 254, 255, 1) 100%)",
    borderColor: "#96F7E4"
  },
  {
    id: 9,
    name: "УФ-фильтры",
    productCount: 67,
    color: "#F54900",
    gradient: "linear-gradient(135deg, rgba(255, 247, 237, 1) 0%, rgba(255, 251, 235, 1) 100%)",
    borderColor: "#FFD6A7"
  },
  {
    id: 10,
    name: "Пептиды",
    productCount: 145,
    color: "#7F22FE",
    gradient: "linear-gradient(135deg, rgba(245, 243, 255, 1) 0%, rgba(250, 245, 255, 1) 100%)",
    borderColor: "#DDD6FF"
  },
  {
    id: 11,
    name: "Масла и воски",
    productCount: 234,
    color: "#D08700",
    gradient: "linear-gradient(135deg, rgba(254, 252, 232, 1) 0%, rgba(255, 251, 235, 1) 100%)",
    borderColor: "#FFF085"
  },
  {
    id: 12,
    name: "Успокаивающие агенты",
    productCount: 112,
    color: "#009966",
    gradient: "linear-gradient(135deg, rgba(236, 253, 245, 1) 0%, rgba(240, 253, 244, 1) 100%)",
    borderColor: "#A4F4CF"
  }
];

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  // Найти категорию по ID
  const category = categories.find(cat => cat.id === parseInt(categoryId || '1'));
  
  const handleBackToCategories = () => {
    navigate('/');
  };

  const handleSubcategoryClick = (subcategory: any) => {
    // Переход к странице товаров подкатегории
    navigate(`/products/${subcategory.id}`);
  };

  return (
    <div className="category-page">
      {/* Кнопка назад */}
      <div className="back-button-container">
        <button className="back-button" onClick={handleBackToCategories}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Назад к категориям
        </button>
      </div>

      {/* Заголовок категории */}
      <div className="category-page-header">
        <div className="category-header-content">
          <h1 className="category-page-title">{category?.name || 'Сырьё'}</h1>
          <p className="category-page-description">
            {category?.description || 'Химические ингредиенты, экстракты и компоненты для формул'}
          </p>
        </div>
      </div>
      
      {/* Подкатегории товаров */}
      <div className="subcategories-section">
        <div className="subcategories-header">
          <h2 className="subcategories-title">Категории товаров</h2>
          <p className="subcategories-description">Выберите категорию для просмотра товаров</p>
        </div>
        
        <div className="subcategories-grid">
          {rawMaterialSubcategories.map(subcategory => (
            <div 
              key={subcategory.id}
              className="subcategory-card"
              style={{ 
                background: subcategory.gradient,
                borderColor: subcategory.borderColor
              }}
              onClick={() => handleSubcategoryClick(subcategory)}
            >
              <div className="subcategory-icon" style={{ backgroundColor: subcategory.color }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="currentColor" opacity="0.1"/>
                  <path d="M16 8L20 12L16 16L12 12L16 8Z" fill="currentColor"/>
                  <path d="M8 20L12 24L8 28L4 24L8 20Z" fill="currentColor"/>
                  <path d="M24 20L28 24L24 28L20 24L24 20Z" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="subcategory-content">
                <h3 className="subcategory-name">{subcategory.name}</h3>
                <div className="subcategory-footer">
                  <span className="subcategory-count" style={{ color: subcategory.color }}>
                    {subcategory.productCount} товаров
                  </span>
                  <button className="subcategory-button" style={{ color: subcategory.color }}>
                    Открыть →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
