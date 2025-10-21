import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../data/mockData";
import styles from "./CategoryPage.module.scss";
import backButtonIcon from "../assets/images/left-arrow.png";
import activeIngredientsIcon from "../assets/images/subcategories/active-ingredients.png";
import baseOilsIcon from "../assets/images/subcategories/base-oils.png";
import plantExtractsIcon from "../assets/images/subcategories/plant-extracts.png";
import PavIcon from "../assets/images/subcategories/pav.png";
import surfactantsIcon from "../assets/images/subcategories/surfactants.png";
import EmulsifiersIcon from "../assets/images/subcategories/emulsifiersIcon.png";
import ConsevanantsIcon from "../assets/images/subcategories/consevanantsIcon.png";
import SoftenersIcon from "../assets/images/subcategories/softenersIcon.png";
import UvFiltersIcon from "../assets/images/subcategories/uv-filtersIcon.png";
import PeptidesIcon from "../assets/images/subcategories/peptidesIcon.png";
import OilsAndWaxesIcon from "../assets/images/subcategories/oils-and-waxesIcon.png";
import RelaxingAgentsIcon from "../assets/images/subcategories/relaxing-agentsIcon.png";
// Подкатегории для сырья согласно макету Figma
const rawMaterialSubcategories = [
  {
    id: 1,
    name: "Активные ингредиенты",
    productCount: 423,
    color: "#155DFC",
    gradient:
      "linear-gradient(135deg, rgba(239, 246, 255, 1) 0%, rgba(236, 254, 255, 1) 100%)",
    borderColor: "#BEDBFF",
    icon: activeIngredientsIcon,
  },
  {
    id: 2,
    name: "Базовые масла",
    productCount: 287,
    color: "#E17100",
    gradient:
      "linear-gradient(135deg, rgba(255, 251, 235, 1) 0%, rgba(254, 252, 232, 1) 100%)",
    borderColor: "#FEE685",
    icon: baseOilsIcon,
  },
  {
    id: 3,
    name: "Растительные экстракты",
    productCount: 354,
    color: "#00A63E",
    gradient:
      "linear-gradient(135deg, rgba(240, 253, 244, 1) 0%, rgba(236, 253, 245, 1) 100%)",
    borderColor: "#B9F8CF",
    icon: plantExtractsIcon,
  },
  {
    id: 4,
    name: "Эмульгаторы",
    productCount: 156,
    color: "#9810FA",
    gradient:
      "linear-gradient(135deg, rgba(250, 245, 255, 1) 0%, rgba(253, 242, 248, 1) 100%)",
    borderColor: "#E9D4FF",
    icon: EmulsifiersIcon,
  },
  {
    id: 5,
    name: "ПАВ",
    productCount: 198,
    color: "#0092B8",
    gradient:
      "linear-gradient(135deg, rgba(236, 254, 255, 1) 0%, rgba(240, 249, 255, 1) 100%)",
    borderColor: "#A2F4FD",
    icon: PavIcon,
  },
  {
    id: 6,
    name: "Загустители",
    productCount: 123,
    color: "#4F39F6",
    gradient:
      "linear-gradient(135deg, rgba(238, 242, 255, 1) 0%, rgba(250, 245, 255, 1) 100%)",
    borderColor: "#C6D2FF",
    icon: surfactantsIcon,
  },
  {
    id: 7,
    name: "Консерванты",
    productCount: 89,
    color: "#E7000B",
    gradient:
      "linear-gradient(135deg, rgba(254, 242, 242, 1) 0%, rgba(253, 242, 248, 1) 100%)",
    borderColor: "#FFC9C9",
    icon: ConsevanantsIcon,
  },
  {
    id: 8,
    name: "Смягчители",
    productCount: 267,
    color: "#009689",
    gradient:
      "linear-gradient(135deg, rgba(240, 253, 250, 1) 0%, rgba(236, 254, 255, 1) 100%)",
    borderColor: "#96F7E4",
    icon: SoftenersIcon,
  },
  {
    id: 9,
    name: "УФ-фильтры",
    productCount: 67,
    color: "#F54900",
    gradient:
      "linear-gradient(135deg, rgba(255, 247, 237, 1) 0%, rgba(255, 251, 235, 1) 100%)",
    borderColor: "#FFD6A7",
    icon: UvFiltersIcon,
  },
  {
    id: 10,
    name: "Пептиды",
    productCount: 145,
    color: "#7F22FE",
    gradient:
      "linear-gradient(135deg, rgba(245, 243, 255, 1) 0%, rgba(250, 245, 255, 1) 100%)",
    borderColor: "#DDD6FF",
    icon: PeptidesIcon,
  },
  {
    id: 11,
    name: "Масла и воски",
    productCount: 234,
    color: "#D08700",
    gradient:
      "linear-gradient(135deg, rgba(254, 252, 232, 1) 0%, rgba(255, 251, 235, 1) 100%)",
    borderColor: "#FFF085",
    icon: OilsAndWaxesIcon,
  },
  {
    id: 12,
    name: "Успокаивающие агенты",
    productCount: 112,
    color: "#009966",
    gradient:
      "linear-gradient(135deg, rgba(236, 253, 245, 1) 0%, rgba(240, 253, 244, 1) 100%)",
    borderColor: "#A4F4CF",
    icon: RelaxingAgentsIcon,
  },
];

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  // Найти категорию по ID
  const category = categories.find(
    (cat) => cat.id === parseInt(categoryId || "1")
  );

  const handleBackToCategories = () => {
    navigate("/");
  };

  const handleSubcategoryClick = (subcategory: any) => {
    // Переход к странице товаров подкатегории
    navigate(`/products/${subcategory.id}`);
  };

  return (
    <div className={styles.categoryPage}>
      {/* Кнопка назад */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handleBackToCategories}>
          <img
            src={backButtonIcon}
            alt="back"
            className={styles.backButtonIcon}
          />
          Назад к категориям
        </button>
      </div>

      {/* Заголовок категории */}
      <div className={styles.categoryPageHeader}>
        <div className={styles.categoryHeaderContent}>
          <h1 className={styles.categoryPageTitle}>
            {category?.name || "Сырьё"}
          </h1>
          <p className={styles.categoryPageDescription}>
            {category?.description ||
              "Химические ингредиенты, экстракты и компоненты для формул"}
          </p>
        </div>
      </div>

      {/* Подкатегории товаров */}
      <div className={styles.subcategoriesSection}>
        <div className={styles.subcategoriesHeader}>
          <h2 className={styles.subcategoriesTitle}>Категории товаров</h2>
          <p className={styles.subcategoriesDescription}>
            Выберите категорию для просмотра товаров
          </p>
        </div>

        <div className={styles.subcategoriesGrid}>
          {rawMaterialSubcategories.map((subcategory) => (
            <div
              key={subcategory.id}
              className={styles.subcategoryCard}
              style={{
                background: subcategory.gradient,
                borderColor: subcategory.borderColor,
              }}
              onClick={() => handleSubcategoryClick(subcategory)}
            >
              <div
                className={styles.subcategoryIcon}
                style={{ backgroundColor: subcategory.color }}
              >
                {subcategory.icon ? (
                  <img
                    src={subcategory.icon}
                    alt={subcategory.name}
                    className={styles.subcategoryIconImage}
                  />
                ) : (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <path
                      d="M16 8L20 12L16 16L12 12L16 8Z"
                      fill="currentColor"
                    />
                    <path d="M8 20L12 24L8 28L4 24L8 20Z" fill="currentColor" />
                    <path
                      d="M24 20L28 24L24 28L20 24L24 20Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </div>

              <div className={styles.subcategoryContent}>
                <h3 className={styles.subcategoryName}>{subcategory.name}</h3>
                <div className={styles.subcategoryFooter}>
                  <span
                    className={styles.subcategoryCount}
                    style={{ color: subcategory.color }}
                  >
                    {subcategory.productCount} товаров
                  </span>
                  <button
                    className={styles.subcategoryButton}
                    style={{ color: subcategory.color }}
                  >
                    Открыть →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
