import React from 'react';
import styles from './DescriptionTab.module.scss';
import benefitIcon from '../assets/images/benefit-icon.png';
import benefitIcon2 from '../assets/images/benefit-icon-2.png';
import benefitIcon3 from '../assets/images/benefit-icon-3.png';
import benefitIcon4 from '../assets/images/benefit-icon-4.png';
import benefitIcon5 from '../assets/images/benefit-icon-5.png';
import benefitIcon6 from '../assets/images/benefit-icon-6.png';

const DescriptionTab: React.FC = () => {
  return (
    <div className={styles.tabContent}>
      <div className={styles.descriptionSection}>
        <h3>Описание продукта</h3>
        <div className={styles.descriptionContent}>
          <p>
            CocoSoft™ CAB Premium — это высококачественный амфотерный ПАВ, который сочетает в себе отличные очищающие свойства и выдающуюся совместимость с кожей. Полученный из возобновляемых кокосовых источников, он является идеальным вторичным ПАВ в формулах для личной гигиены. Его уникальная молекулярная структура обеспечивает превосходную стабильность пены, увеличение вязкости и кондиционирующие свойства, сохраняя при этом мягкость продукта. Особенно эффективен в формулах без сульфатов, где он помогает компенсировать снижение пенообразования от более мягких первичных ПАВ.
          </p>
          
          <h4>Ключевые преимущества:</h4>
          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <img src={benefitIcon} alt="benefit" className={styles.benefitIcon} />
              <span>Высокое качество пены и стабильность</span>
            </li>
            <li className={styles.benefitItem}>
              <img src={benefitIcon2} alt="benefit" className={styles.benefitIcon} />
              <span>Отличные свойства для увеличения вязкости</span>
            </li>
            <li className={styles.benefitItem}>
              <img src={benefitIcon3} alt="benefit" className={styles.benefitIcon} />
              <span>Снижает потенциал раздражения анионных ПАВ</span>
            </li>
            <li className={styles.benefitItem}>
              <img src={benefitIcon4} alt="benefit" className={styles.benefitIcon} />
              <span>Совместим со всеми системами ПАВ</span>
            </li>
            <li className={styles.benefitItem}>
              <img src={benefitIcon5} alt="benefit" className={styles.benefitIcon} />
              <span>Биологически разлагаемый и экологически чистый</span>
            </li>
            <li className={styles.benefitItem}>
              <img src={benefitIcon6} alt="benefit" className={styles.benefitIcon} />
              <span>Улучшает расчесывание и ощущение волос</span>
            </li>
          </ul>
          
          <h4>Recommended Usage</h4>
          <div className={styles.usageSection}>
            <div className={styles.dosageInfo}>
              <span className={styles.dosageLabel}>Типичная дозировка:</span>
              <span className={styles.dosageValue}>2% - 30%</span>
            </div>
            <p className={styles.usageText}>
              Наилучшие результаты достигаются при использовании в качестве вторичного ПАВ в сочетании с первичными анионными ПАВ. Добавлять на стадии охлаждения или при температуре ниже 40°C для сохранения функциональности.
            </p>
          </div>
          
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
