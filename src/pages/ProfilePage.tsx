import React from 'react';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <div className="profile-page-header">
        <h1 className="profile-page-title">Профиль пользователя</h1>
        <p className="profile-page-description">
          Управляйте своими данными и настройками
        </p>
      </div>
      
      <div className="profile-page-content">
        <div className="profile-sidebar">
          <div className="profile-avatar">
            <div className="avatar-circle">SJ</div>
            <h3>Сергей Иванов</h3>
            <p>sergey.ivanov@company.com</p>
          </div>
          
          <nav className="profile-nav">
            <a href="#" className="nav-item active">Личные данные</a>
            <a href="#" className="nav-item">Компания</a>
            <a href="#" className="nav-item">Заказы</a>
            <a href="#" className="nav-item">Настройки</a>
          </nav>
        </div>
        
        <div className="profile-main">
          <div className="profile-section">
            <h2>Личные данные</h2>
            <form className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Имя</label>
                  <input type="text" defaultValue="Сергей" />
                </div>
                <div className="form-group">
                  <label>Фамилия</label>
                  <input type="text" defaultValue="Иванов" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="sergey.ivanov@company.com" />
              </div>
              
              <div className="form-group">
                <label>Телефон</label>
                <input type="tel" defaultValue="+7 (999) 123-45-67" />
              </div>
              
              <div className="form-group">
                <label>Должность</label>
                <input type="text" defaultValue="Менеджер по закупкам" />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Сохранить изменения</button>
                <button type="button" className="btn btn-secondary">Отмена</button>
              </div>
            </form>
          </div>
          
          <div className="profile-section">
            <h2>Статистика</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">24</div>
                <div className="stat-label">Заказов</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">₽156,000</div>
                <div className="stat-label">Потрачено</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">12</div>
                <div className="stat-label">Поставщиков</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Категорий</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

