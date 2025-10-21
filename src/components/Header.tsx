import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/images/cart-icon.png";
import languageIcon from "../assets/images/language-icon.png";

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.navLeft}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="logo" className={styles.logoIcon} />
          </Link>

          <div className={styles.navMenu}>
            <Link
              to="/dashboard"
              className={`${styles.navItem} ${
                location.pathname === "/dashboard" ? styles.active : ""
              }`}
            >
              Панель
            </Link>
            <Link
              to="/"
              className={`${styles.navItem} ${
                location.pathname === "/" ? styles.active : ""
              }`}
            >
              Маркетплейс
            </Link>
            <Link
              to="/formulator"
              className={`${styles.navItem} ${
                location.pathname === "/formulator" ? styles.active : ""
              }`}
            >
              Формулятор
            </Link>
            <Link
              to="/education"
              className={`${styles.navItem} ${
                location.pathname === "/education" ? styles.active : ""
              }`}
            >
              Обучение
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <button className={styles.navButton}>
            <img src={languageIcon} alt="language" width="16" height="16" className={styles.languageIcon}/>
          </button>
          <button className={`${styles.navButton} ${styles.support}`}>
            Поддержка
          </button>
          <button className={styles.navButton}>
            <img src={cartIcon} alt="Cart" width="16" height="16" className={styles.cartIcon}/>
          </button>
          <Link to="/profile" className={styles.userAvatar}>
            SJ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
