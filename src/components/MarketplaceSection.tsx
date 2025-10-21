import React from 'react';
import styles from './MarketplaceSection.module.scss';
import badgeIcon from '../assets/images/blue-cart.png';

const MarketplaceSection: React.FC = () => {
  return (
    <section className={styles.marketplaceHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Маркетплейс</h1>
          <p className={styles.headerDescription}>
            Найдите материалы, упаковку, производственных партнеров и тендеры
          </p>
        </div>
        
        <div className={styles.buyerModeBadge}>
          <img src={badgeIcon} alt="buyer mode" className={styles.badgeIcon}/>
          <span>Режим покупателя</span>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
