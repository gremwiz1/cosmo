import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DescriptionTab from "../components/DescriptionTab";
import SpecificationsTab from "../components/SpecificationsTab";
import SafetyTab from "../components/SafetyTab";
import ApplicationTab from "../components/ApplicationTab";
import RecipesTab from "../components/RecipesTab";
import SupplierTab from "../components/SupplierTab";
import SampleRequestModal from "../components/SampleRequestModal";
import PriceRequestModal from "../components/PriceRequestModal";
import styles from "./ProductDetailPage.module.scss";
import shareIcon from "../assets/images/share-icon.png";
import saveIcon from "../assets/images/save-icon.png";
import sampleIcon from "../assets/images/sample-icon.png";
import priceIcon from "../assets/images/price-icon.png";
import chatIcon from "../assets/images/chat-icon.png";
import supplierArrowIcon from "../assets/images/supplier-arrow-icon.png";
import starRatingIcon from "../assets/images/star-rating-icon.png";
import inciIcon from "../assets/images/inci-icon.png";
import casIcon from "../assets/images/cas-icon.png";
import ecIcon from "../assets/images/ec-icon.png";
import hsIcon from "../assets/images/hs-icon.png";
import originIcon from "../assets/images/origin-icon.png";
import sourceIcon from "../assets/images/source-icon.png";
import formIcon from "../assets/images/form-icon.png";
import solubilityIcon from "../assets/images/solubility-icon.png";
import phIcon from "../assets/images/ph-icon.png";
import dosageIcon from "../assets/images/dosage-icon.png";
import shelfLifeIcon from "../assets/images/shelf-life-icon.png";
import certificateIcon from "../assets/images/certificate-icon.png";
import volumePricesIcon from "../assets/images/volume-prices-icon.png";
import volumeArrowIcon from "../assets/images/volume-arrow-icon.png";
import availabilityIcon from "../assets/images/availability-icon.png";
import requestPriceIcon from "../assets/images/request-price-icon.png";
import requestSampleIcon from "../assets/images/request-sample-icon.png";
import chatSupplierIcon from "../assets/images/chat-supplier-icon.png";
import expertHelpIcon from "../assets/images/expert-help-icon.png";
import productImage from "../assets/images/product.png";

// Mock данные товара согласно макету Figma
const mockProduct = {
  id: 1,
  name: "CocoSoft™ CAB Premium",
  inci: "Cocamidopropyl Betaine",
  description:
    "Премиум-класс амфотерный ПАВ, полученный из кокосового масла и диметиламинопропиламина. Отличный бустер пены и загуститель с исключительной мягкостью.",
  cas: "61789-40-0",
  ec: "263-058-8",
  hs: "3402.11.00",
  rating: 4.8,
  reviewsCount: 234,
  category: "ПАВ",
  origin: "Натуральное происхождение",
  source: "Кокосовое масло",
  form: "Прозрачная жидкость",
  solubility: "Вода, Глицерин",
  ph: "5.0 - 7.0",
  dosage: "2% - 30%",
  shelfLife: "24 месяца",
  availability: "В наличии",
  image: productImage,
  supplier: {
    name: "CosmoHome",
    rating: 4.8,
    location: "Москва, Россия",
  },
  price: "$18.50",
  unit: "/ кг",
  volumeRange: "Для объёмов 1-4 кг",
  minOrder: "25 кг",
  deliveryTime: "2-3 недели",
  badges: ["ПАВ", "Натуральный", "Без сульфатов", "Мягкий"],
  certificates: ["COSMOS", "ECOCERT", "Halal", "Biodegradable"],
  benefits: [
    "Высокое качество пены и стабильность",
    "Отличные свойства для увеличения вязкости",
    "Снижает потенциал раздражения анионных ПАВ",
    "Совместим со всеми системами ПАВ",
    "Биологически разлагаемый и экологически чистый",
    "Улучшает расчесывание и ощущение волос",
  ],
  usage:
    "Наилучшие результаты достигаются при использовании в качестве вторичного ПАВ в сочетании с первичными анионными ПАВ. Добавлять на стадии охлаждения или при температуре ниже 40°C для сохранения функциональности.",
};

const ProductDetailPage: React.FC = () => {
  const { productId: _productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const tabsHeaderRef = useRef<HTMLDivElement>(null);

  const _handleBackToProducts = () => {
    navigate("/products/1"); // Возврат к списку товаров
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!tabsHeaderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - tabsHeaderRef.current.offsetLeft);
    setScrollLeft(tabsHeaderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !tabsHeaderRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsHeaderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Увеличиваем скорость прокрутки
    tabsHeaderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleSampleRequest = () => {
    setIsSampleModalOpen(true);
  };

  const handleCloseSampleModal = () => {
    setIsSampleModalOpen(false);
  };

  const handlePriceRequest = () => {
    setIsPriceModalOpen(true);
  };

  const handleClosePriceModal = () => {
    setIsPriceModalOpen(false);
  };

  const tabs = [
    { id: "description", label: "Описание" },
    { id: "specifications", label: "Спецификации / ТДС" },
    { id: "safety", label: "Безопасность и документы" },
    { id: "application", label: "Применение" },
    { id: "recipes", label: "Примеры рецептур", badge: "3" },
    { id: "supplier", label: "О поставщике" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <DescriptionTab />;

      case "specifications":
        return <SpecificationsTab />;

      case "safety":
        return <SafetyTab />;

      case "application":
        return <ApplicationTab />;

      case "recipes":
        return <RecipesTab />;

      case "supplier":
        return <SupplierTab />;

      default:
        return null;
    }
  };

  return (
    <div className={styles.productDetailPage}>
      {/* Хлебные крошки */}
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbLink}>Главная</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M5.25 3.5L8.75 7L5.25 10.5"
            stroke="#6B7280"
            strokeWidth="1.17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbLink}>Каталог</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M5.25 3.5L8.75 7L5.25 10.5"
            stroke="#6B7280"
            strokeWidth="1.17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbLink}>ПАВ</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M5.25 3.5L8.75 7L5.25 10.5"
            stroke="#6B7280"
            strokeWidth="1.17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbCurrent}>
            Cocamidopropyl Betaine
          </span>
        </div>
      </div>

      {/* Заголовок товара */}
      <div className={styles.productHeader}>
        <div className={styles.productHeaderContent}>
          <div className={styles.productTitleSection}>
            <h1 className={styles.productName}>{mockProduct.name}</h1>
            <p className={styles.productInci}>INCI: {mockProduct.inci}</p>

            <div className={styles.productBadges}>
              {mockProduct.badges.map((badge, index) => (
                <span key={index} className={styles.productBadge}>
                  {badge}
                </span>
              ))}
            </div>

            <div className={styles.supplierInfo}>
              <span className={styles.supplierLabel}>Поставщик:</span>
              <button className={styles.supplierLink}>
                {mockProduct.supplier.name}
                <img
                  src={supplierArrowIcon}
                  alt="arrow"
                  className={styles.supplierArrowIcon}
                />
              </button>

              <div className={styles.ratingInfo}>
                <img
                  src={starRatingIcon}
                  alt="star"
                  className={styles.starRatingIcon}
                />
                <span className={styles.ratingValue}>{mockProduct.rating}</span>
                <span className={styles.reviewsCount}>
                  ({mockProduct.reviewsCount} отзывов)
                </span>
              </div>
            </div>
          </div>

          <div className={styles.productActions}>
            <button className={`${styles.actionButtonTop} ${styles.secondary}`}>
              <img src={shareIcon} alt="share" className={styles.actionIcon} />
              Поделиться
            </button>
            <button className={`${styles.actionButtonTop} ${styles.secondary}`}>
              <img src={saveIcon} alt="save" className={styles.actionIcon} />
              Сохранить
            </button>
                  <button 
                    className={`${styles.actionButtonTop} ${styles.secondary}`}
                    onClick={handleSampleRequest}
                  >
                    <img
                      src={sampleIcon}
                      alt="sample"
                      className={styles.actionIcon}
                    />
                    Запросить образец
                  </button>
            <button 
              className={`${styles.actionButtonTop} ${styles.primary}`}
              onClick={handlePriceRequest}
            >
              <img src={priceIcon} alt="price" className={styles.actionIcon} />
              Запросить цену
            </button>
            <button className={`${styles.actionButtonTop} ${styles.secondary}`}>
              <img src={chatIcon} alt="chat" className={styles.actionIcon} />
              Чат с поставщиком
            </button>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className={styles.productDetailContent}>
        {/* Левая панель - изображение, характеристики и вкладки */}
        <div className={styles.productLeftPanel}>
          <div className={styles.productMainCard}>
            <div className={styles.productImageSection}>
              <div className={styles.productImage}>
                <img src={mockProduct.image} alt={mockProduct.name} />
              </div>
              <p className={styles.productDescription}>
                {mockProduct.description}
              </p>
            </div>

            <div className={styles.specificationsSection}>
              <h3>Ключевые характеристики</h3>
              <div className={styles.specificationsGrid}>
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={inciIcon}
                      alt="INCI"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>INCI название</span>
                    <span className={styles.specValue}>{mockProduct.inci}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={casIcon}
                      alt="CAS"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>CAS номер</span>
                    <span className={styles.specValue}>{mockProduct.cas}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={ecIcon}
                      alt="EC"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>EC номер</span>
                    <span className={styles.specValue}>{mockProduct.ec}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={hsIcon}
                      alt="HS"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>HS код</span>
                    <span className={styles.specValue}>{mockProduct.hs}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={originIcon}
                      alt="Origin"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Происхождение</span>
                    <span className={styles.specValue}>
                      {mockProduct.origin}
                    </span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={sourceIcon}
                      alt="Source"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Источник</span>
                    <span className={styles.specValue}>
                      {mockProduct.source}
                    </span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={formIcon}
                      alt="Form"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Форма</span>
                    <span className={styles.specValue}>{mockProduct.form}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={solubilityIcon}
                      alt="Solubility"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Растворимость</span>
                    <span className={styles.specValue}>
                      {mockProduct.solubility}
                    </span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={phIcon}
                      alt="pH"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>pH диапазон</span>
                    <span className={styles.specValue}>{mockProduct.ph}</span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={dosageIcon}
                      alt="Dosage"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Дозировка</span>
                    <span className={styles.specValue}>
                      {mockProduct.dosage}
                    </span>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <img
                      src={shelfLifeIcon}
                      alt="Shelf Life"
                      className={styles.specIconImage}
                    />
                  </div>
                  <div className={styles.specContent}>
                    <span className={styles.specLabel}>Срок годности</span>
                    <span className={styles.specValue}>
                      {mockProduct.shelfLife}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.certificatesSection}>
                <span className={styles.certificatesLabel}>Сертификаты</span>
                <div className={styles.certificatesList}>
                  {mockProduct.certificates.map((cert, index) => (
                    <span key={index} className={styles.certificateBadge}>
                      <img
                        src={certificateIcon}
                        alt="certificate"
                        className={styles.certificateIcon}
                      />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Секция с вкладками */}
          <div className={styles.tabsSection}>
            <div className={styles.tabsContainer}>
              <div 
                className={styles.tabsHeader}
                ref={tabsHeaderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`${styles.tabButton} ${
                      activeTab === tab.id ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                    {tab.badge && (
                      <span className={styles.tabBadge}>{tab.badge}</span>
                    )}
                  </button>
                ))}
              </div>

              <div className={styles.tabsContent}>{renderTabContent()}</div>
            </div>
          </div>
        </div>

        {/* Правая панель - цены и заказ */}
        <div className={styles.productRightPanel}>
          <div className={styles.pricingCard}>
            <h3>Цены и наличие</h3>

            <div className={styles.priceDisplay}>
              <div className={styles.priceMain}>
                <span className={styles.priceAmount}>{mockProduct.price}</span>
                <span className={styles.priceUnit}>{mockProduct.unit}</span>
              </div>
              <p className={styles.priceRange}>{mockProduct.volumeRange}</p>
            </div>

            <button className={styles.volumePricesButton}>
              <div className={styles.volumePricesButtonContent}>
                <img
                  src={volumePricesIcon}
                  alt="volume prices"
                  className={styles.volumePricesIcon}
                />
                Объёмные цены
              </div>
              <img
                src={volumeArrowIcon}
                alt="arrow"
                className={styles.volumeArrowIcon}
              />
            </button>

            <div className={styles.calculatorSection}>
              <label className={styles.calculatorLabel}>
                Рассчитать общую стоимость
              </label>
              <div className={styles.quantityInput}>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className={styles.quantityField}
                />
                <span className={styles.quantityUnit}>кг</span>
              </div>

              <div className={styles.priceBreakdown}>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>Цена за единицу:</span>
                  <span className={styles.priceValue}>
                    {mockProduct.price}/кг
                  </span>
                </div>
                <div className={`${styles.priceRow} ${styles.total}`}>
                  <span className={styles.priceLabel}>Итого:</span>
                  <span className={styles.priceTotal}>
                    $
                    {(
                      parseFloat(mockProduct.price.replace("$", "")) * quantity
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.orderInfo}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Минимальный заказ</span>
                <span className={styles.infoValue}>{mockProduct.minOrder}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Срок поставки</span>
                <span className={styles.infoValue}>
                  {mockProduct.deliveryTime}
                </span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Наличие</span>
                <span className={styles.availabilityBadge}>
                  <img
                    src={availabilityIcon}
                    alt="availability"
                    className={styles.availabilityIcon}
                  />
                  {mockProduct.availability}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={`${styles.actionButton} ${styles.primary}`}>
              <img
                src={requestPriceIcon}
                alt="request price"
                className={styles.actionButtonIcon}
              />
              Запросить цену
            </button>
            <button className={`${styles.actionButton} ${styles.secondary}`}>
              <img
                src={requestSampleIcon}
                alt="request sample"
                className={styles.actionButtonIcon}
              />
              Запросить образец
            </button>
            <button className={`${styles.actionButton} ${styles.secondary}`}>
              <img
                src={chatSupplierIcon}
                alt="chat supplier"
                className={styles.actionButtonIcon}
              />
              Чат с поставщиком
            </button>
          </div>

          <div className={styles.volumePricingSection}>
            <div className={styles.volumePricingCard}>
              <h4>Доступны объёмные цены</h4>
              <p>
                Получите лучшие расценки для больших заказов. Свяжитесь с нами
                для индивидуального предложения.
              </p>
              <button className={styles.volumeRequestButton}>
                Запросить объёмное предложение
              </button>
            </div>
          </div>

          <div className={styles.supportSection}>
            <div className={styles.supportCard}>
              <h4>Нужна техническая поддержка?</h4>
              <p>
                Наши эксперты по формулировкам готовы помочь с вашим проектом.
              </p>
              <button className={styles.supportButton}>
                <img
                  src={expertHelpIcon}
                  alt="expert help"
                  className={styles.supportButtonIcon}
                />
                Получите помощь эксперта
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Request Modal */}
      <SampleRequestModal
        isOpen={isSampleModalOpen}
        onClose={handleCloseSampleModal}
        productName={mockProduct.name}
        productInci={mockProduct.inci}
        supplierName={mockProduct.supplier.name}
        productPrice={mockProduct.price}
      />

      {/* Price Request Modal */}
      <PriceRequestModal
        isOpen={isPriceModalOpen}
        onClose={handleClosePriceModal}
        productName={mockProduct.name}
        productInci={mockProduct.inci}
        supplierName={mockProduct.supplier.name}
      />
    </div>
  );
};

export default ProductDetailPage;
