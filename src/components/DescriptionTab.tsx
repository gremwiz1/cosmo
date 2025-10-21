import React from 'react';
import styles from './DescriptionTab.module.scss';

const DescriptionTab: React.FC = () => {
  return (
    <div className={styles.tabContent}>
      <div className={styles.descriptionSection}>
        <h3>Описание продукта</h3>
        <div className={styles.descriptionContent}>
          <p>
            CocoSoft™ CAB Premium — это высококачественный кокосовый амфотерный сурфактант, 
            специально разработанный для косметической промышленности. Продукт обеспечивает 
            отличное пенообразование, мягкое очищение и превосходную совместимость с кожей.
          </p>
          
          <h4>Ключевые преимущества:</h4>
          <ul>
            <li>Высокое качество пены с кремовой текстурой</li>
            <li>Мягкое воздействие на кожу и волосы</li>
            <li>Отличная совместимость с другими ингредиентами</li>
            <li>Стабильность в широком диапазоне pH</li>
            <li>Подходит для чувствительной кожи</li>
            <li>Биоразлагаемый и экологически безопасный</li>
          </ul>
          
          <h4>Применение:</h4>
          <p>
            Рекомендуется для использования в шампунях, гелях для душа, очищающих средствах 
            для лица, детских продуктах и других косметических средствах, требующих мягкого 
            очищения с хорошим пенообразованием.
          </p>
          
          <h4>Технические характеристики:</h4>
          <div className={styles.techSpecs}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Внешний вид:</span>
              <span className={styles.specValue}>Прозрачная или слегка мутная жидкость</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>pH (5% раствор):</span>
              <span className={styles.specValue}>5.5 - 7.0</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Вязкость (25°C):</span>
              <span className={styles.specValue}>500 - 2000 мПа·с</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Растворимость:</span>
              <span className={styles.specValue}>Хорошо растворим в воде</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTab;
