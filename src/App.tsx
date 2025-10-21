import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header';
import MarketplaceSection from './components/MarketplaceSection';
import CategoryCard from './components/CategoryCard';
import CategoryPage from './pages/CategoryPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProfilePage from './pages/ProfilePage';
import { categories } from './data/mockData';
import { Category } from './types';

const App: React.FC = () => {
  const handleCategoryClick = (category: Category): void => {
    // Здесь можно добавить логику для перехода к товарам категории
    console.log('Category clicked:', category.name);
    // Например, можно показать товары этой категории или перейти на другую страницу
  };

  return (
    <Router>
      <div className={styles.app}>
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <MarketplaceSection />
                <section className={styles.categoriesSection}>
                  <div className={styles.categoriesContainer}>
                    <div className={styles.categoriesHeader}>
                      <h2 className={styles.categoriesTitle}>Обзор категорий</h2>
                      <p className={styles.categoriesDescription}>Выберите категорию для начала</p>
                    </div>

                    <div className={styles.categoriesGrid}>
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
              </>
            } />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/products/:subcategoryId" element={<ProductsPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
