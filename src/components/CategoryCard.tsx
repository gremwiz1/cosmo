import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CategoryCard.module.scss';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onCategoryClick: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onCategoryClick }) => {
  const navigate = useNavigate();
  return (
    <div 
      className={styles.categoryCard} 
      style={{ background: category.gradient }}
      onClick={() => {
        onCategoryClick(category);
        navigate(`/category/${category.id}`);
      }}
    >
      <div className={styles.categoryIcon} style={{ color: category.color }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="16" fill="currentColor" opacity="0.1"/>
          <path d="M16 8L20 12L16 16L12 12L16 8Z" fill="currentColor"/>
          <path d="M8 16L12 20L16 16L12 12L8 16Z" fill="currentColor"/>
          <path d="M16 16L20 20L16 24L12 20L16 16Z" fill="currentColor"/>
          <path d="M24 16L28 20L24 24L20 20L24 16Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className={styles.categoryContent}>
        <h3 className={styles.categoryName}>{category.name}</h3>
        <p className={styles.categoryDescription}>{category.description}</p>
        
        <div className={styles.categoryFooter}>
          <span className={styles.categoryCount} style={{ color: category.color }}>
            {category.productCount.toLocaleString()} товаров
          </span>
          <button className={styles.categoryButton} style={{ color: category.color }}>
            Открыть →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
