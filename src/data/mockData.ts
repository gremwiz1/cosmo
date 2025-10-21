import { Category } from '../types';
import rawMaterialsIcon from '../assets/images/raw-materials-icon.png';
import packagingIcon from '../assets/images/packaging-icon.png';
import productionIcon from '../assets/images/production-icon.png';
import tendersIcon from '../assets/images/tenders-icon.png';
import fragrancesIcon from '../assets/images/fragrances-icon.png';
import aromaticSubstancesIcon from '../assets/images/aromatic-substances-icon.png';

// Mock данные для категорий
export const categories: Category[] = [
  {
    id: 1,
    name: "Сырье",
    description: "Химические ингредиенты, экстракты и компоненты для формул",
    productCount: 2847,
    productCountText: "2,847 товаров",
    color: "#155DFC",
    gradient: "linear-gradient(135deg, rgba(239, 246, 255, 1) 0%, rgba(236, 254, 255, 1) 100%)",
    icon: rawMaterialsIcon
  },
  {
    id: 2,
    name: "Упаковка",
    description: "Бутылки, банки, тюбики и индивидуальные решения",
    productCount: 1234,
    productCountText: "1,234 товара",
    color: "#9810FA",
    gradient: "linear-gradient(135deg, rgba(250, 245, 255, 1) 0%, rgba(253, 242, 248, 1) 100%)",
    icon: packagingIcon
  },
  {
    id: 3,
    name: "Производства",
    description: "Контрактные производители и производственные мощности",
    productCount: 156,
    productCountText: "156 объектов",
    color: "#00A63E",
    gradient: "linear-gradient(135deg, rgba(240, 253, 244, 1) 0%, rgba(236, 253, 245, 1) 100%)",
    icon: productionIcon
  },
  {
    id: 4,
    name: "Тендеры и запросы",
    description: "Просматривайте открытые тендеры или создайте свой запрос на предложение",
    productCount: 43,
    productCountText: "43 активных",
    color: "#F54900",
    gradient: "linear-gradient(135deg, rgba(255, 247, 237, 1) 0%, rgba(255, 251, 235, 1) 100%)",
    icon: tendersIcon
  },
  {
    id: 5,
    name: "Готовые отдушки",
    description: "Готовые ароматические решения для различных применений",
    productCount: 500,
    productCountText: "500 смесей",
    color: "#E60076",
    gradient: "linear-gradient(135deg, rgba(253, 242, 248, 1) 0%, rgba(250, 245, 255, 1) 100%)",
    icon: fragrancesIcon
  },
  {
    id: 6,
    name: "Душистые вещества",
    description: "Индивидуальные ароматические компоненты для кастомных формул",
    productCount: 1000,
    productCountText: "1,000 компонентов",
    color: "#009689",
    gradient: "linear-gradient(135deg, rgba(240, 253, 250, 1) 0%, rgba(236, 253, 245, 1) 100%)",
    icon: aromaticSubstancesIcon
  }
];
