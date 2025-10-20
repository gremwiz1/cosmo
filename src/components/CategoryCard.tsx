import React from 'react';
import './CategoryCard.css';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onCategoryClick: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onCategoryClick }) => {
  return (
    <div 
      className="category-card" 
      style={{ background: category.gradient }}
      onClick={() => onCategoryClick(category)}
    >
      <div className="category-icon" style={{ color: category.color }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="16" fill="currentColor" opacity="0.1"/>
          <path d="M16 8L20 12L16 16L12 12L16 8Z" fill="currentColor"/>
          <path d="M8 16L12 20L16 16L12 12L8 16Z" fill="currentColor"/>
          <path d="M16 16L20 20L16 24L12 20L16 16Z" fill="currentColor"/>
          <path d="M24 16L28 20L24 24L20 20L24 16Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="category-content">
        <h3 className="category-name">{category.name}</h3>
        <p className="category-description">{category.description}</p>
        
        <div className="category-footer">
          <span className="category-count" style={{ color: category.color }}>
            {category.productCount.toLocaleString()} товаров
          </span>
          <button className="category-button" style={{ color: category.color }}>
            Открыть →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
