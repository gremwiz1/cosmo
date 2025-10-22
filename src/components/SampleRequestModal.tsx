import React, { useState } from "react";
import styles from "./SampleRequestModal.module.scss";
import productIcon from "../assets/images/modals/sample-modal-product-icon.png";
import deliveryInfoIcon from "../assets/images/modals/delivery-info-icon.png";

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productInci: string;
  supplierName: string;
  productPrice: string;
}

const SampleRequestModal: React.FC<SampleRequestModalProps> = ({
  isOpen,
  onClose,
  productName,
  productInci,
  supplierName,
  productPrice,
}) => {
  const [sampleSize, setSampleSize] = useState("100g");
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState(
    "123 Innovation Drive, San Francisco, CA 94107"
  );
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = () => {
    // Здесь будет логика отправки запроса
    console.log("Sample request submitted:", {
      sampleSize,
      quantity,
      deliveryAddress,
      comment,
    });
    onClose();
  };

  const totalPrice = parseFloat(productPrice.replace("$", "")) * quantity;
  const shippingPrice = 12.0;
  const finalTotal = totalPrice + shippingPrice;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h2>Запросить образец</h2>
          <p>
            Запросить образец {productName} от {supplierName}
          </p>
        </div>

        {/* Close button */}
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="#0A0A0A"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Content */}
        <div className={styles.modalContent}>
          {/* Product Info */}
          <div className={styles.productInfo}>
            <div className={styles.productImage}>
              <img
                src={productIcon}
                alt="Product"
                className={styles.productIconImage}
              />
            </div>
            <div className={styles.productDetails}>
              <h4>{productName}</h4>
              <p>INCI: {productInci}</p>
              <p>Продавец: {supplierName}</p>
            </div>
            <div className={styles.productPrice}>
              <span className={styles.price}>{productPrice}</span>
              <span className={styles.shipping}>+ shipping</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className={styles.formFields}>
            {/* Sample Size */}
            <div className={styles.sampleSizeGroup}>
              <div className={styles.fieldGroup}>
                <label>Размер образца</label>
                <div className={styles.selectField}>
                  <span>{sampleSize}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#6B7280"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Quantity */}
              <div className={styles.fieldGroup}>
                <label>Количество</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className={styles.quantityInput}
                  min="1"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div className={styles.fieldGroup}>
              <label>Адрес доставки</label>
              <div className={styles.selectField}>
                <span>{deliveryAddress}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#6B7280"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Comment */}
            <div className={styles.fieldGroup}>
              <label>Комментарий для продавца (опционально)</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Есть ли конкретные требования или вопросы по образцу..."
                className={styles.commentTextarea}
                rows={4}
              />
            </div>
          </div>

          {/* Delivery Info */}
          <div className={styles.deliveryInfo}>
            <img
              src={deliveryInfoIcon}
              alt="Delivery Info"
              className={styles.deliveryInfoIcon}
            />
            <div>
              <p className={styles.deliveryLabel}>Ожидаемая доставка</p>
              <p className={styles.deliveryTime}>3-5 рабочих дней</p>
            </div>
          </div>

          {/* Price Summary */}
          <div className={styles.priceSummary}>
            <div className={styles.priceRow}>
              <span>
                Образец ({sampleSize} × {quantity})
              </span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.priceRow}>
              <span>Доставка</span>
              <span>${shippingPrice.toFixed(2)}</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.totalRow}>
              <span>Итого</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <button className={styles.cancelButton} onClick={onClose}>
            Отмена
          </button>
          <button className={styles.submitButton} onClick={handleSubmit}>
            Подтвердить запрос образца
          </button>
        </div>
      </div>
    </div>
  );
};

export default SampleRequestModal;
