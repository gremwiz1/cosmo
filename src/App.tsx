import React from 'react';
import './App.css';
import Header from './components/Header';
import MarketplaceSection from './components/MarketplaceSection';
import CategoryCard from './components/CategoryCard';
import { categories } from './data/mockData';
import { Category } from './types';

const App: React.FC = () => {
  const handleCategoryClick = (category: Category): void => {
    // Здесь можно добавить логику для перехода к товарам категории
    console.log('Category clicked:', category.name);
    // Например, можно показать товары этой категории или перейти на другую страницу
  };

  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <MarketplaceSection />

        {/* Categories Section */}
        <section className="categories-section">
          <div className="categories-container">
            <div className="categories-header">
              <h2 className="categories-title">Обзор категорий</h2>
              <p className="categories-description">Выберите категорию для начала</p>
            </div>
            
            <div className="categories-grid">
              {categories.map(category => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default App;
