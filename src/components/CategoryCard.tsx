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
      <div className={styles.categoryIcon}>
        <img src={category.icon} alt={category.name} className={styles.iconImage} />
      </div>
      
      <div className={styles.categoryContent}>
        <h3 className={styles.categoryName}>{category.name}</h3>
        <p className={styles.categoryDescription}>{category.description}</p>
        
        <div className={styles.categoryFooter}>
          <span className={styles.categoryCount} style={{ color: category.color }}>
            {category.productCountText}
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
