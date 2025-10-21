import React from 'react';
import styles from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePageHeader}>
        <h1 className={styles.profilePageTitle}>Профиль пользователя</h1>
        <p className={styles.profilePageDescription}>
          Управляйте своими данными и настройками
        </p>
      </div>
      
      <div className={styles.profilePageContent}>
        <div className={styles.profileSidebar}>
          <div className={styles.profileAvatar}>
            <div className={styles.avatarCircle}>SJ</div>
            <h3>Сергей Иванов</h3>
            <p>sergey.ivanov@company.com</p>
          </div>
          
          <nav className={styles.profileNav}>
            <a href="#" className={`${styles.navItem} ${styles.active}`}>Личные данные</a>
            <a href="#" className={styles.navItem}>Компания</a>
            <a href="#" className={styles.navItem}>Заказы</a>
            <a href="#" className={styles.navItem}>Настройки</a>
          </nav>
        </div>
        
        <div className={styles.profileMain}>
          <div className={styles.profileSection}>
            <h2>Личные данные</h2>
            <form className={styles.profileForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Имя</label>
                  <input type="text" defaultValue="Сергей" />
                </div>
                <div className={styles.formGroup}>
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
              
              <div className={styles.formActions}>
                <button type="submit" className={`${styles.btn} ${styles.primary}`}>Сохранить изменения</button>
                <button type="button" className={`${styles.btn} ${styles.secondary}`}>Отмена</button>
              </div>
            </form>
          </div>
          
          <div className={styles.profileSection}>
            <h2>Статистика</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>24</div>
                <div className={styles.statLabel}>Заказов</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>₽156,000</div>
                <div className={styles.statLabel}>Потрачено</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>12</div>
                <div className={styles.statLabel}>Поставщиков</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>8</div>
                <div className={styles.statLabel}>Категорий</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

