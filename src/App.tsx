import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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
      <div className="App">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <MarketplaceSection />
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
