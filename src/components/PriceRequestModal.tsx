import React, { useState } from "react";
import styles from "./PriceRequestModal.module.scss";
import productIcon from "../assets/images/modals/price-modal-product-icon.png";
import responseTimeIcon from "../assets/images/modals/response-time-icon.png";
import fileUploadIcon from "../assets/images/modals/file-upload-icon.png";
import checkIcon from "../assets/images/modals/check-icon.png";

interface PriceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productInci: string;
  supplierName: string;
}

const PriceRequestModal: React.FC<PriceRequestModalProps> = ({
  isOpen,
  onClose,
  productName,
  productInci,
  supplierName,
}) => {
  const [volume, setVolume] = useState("");
  const [deliveryTerms, setDeliveryTerms] = useState("EXW (С завода)");
  const [deliveryCountry, setDeliveryCountry] = useState("Соединенные Штаты");
  const [orderFrequency, setOrderFrequency] = useState("Однократно");
  const [selectedCertificates, setSelectedCertificates] = useState<string[]>(
    []
  );
  const [requirements, setRequirements] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = () => {
    // Здесь будет логика отправки запроса
    console.log("Price request submitted:", {
      volume,
      deliveryTerms,
      deliveryCountry,
      orderFrequency,
      selectedCertificates,
      requirements,
      files,
    });
    onClose();
  };

  const handleCertificateToggle = (certificate: string) => {
    setSelectedCertificates((prev) =>
      prev.includes(certificate)
        ? prev.filter((c) => c !== certificate)
        : [...prev, certificate]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const certificates = ["COSMOS", "ECOCERT", "Халяль"];

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h2>Запросить ценовое предложение</h2>
          <p>Получите индивидуальное предложение от {supplierName}</p>
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
          </div>

          {/* Form Fields */}
          <div className={styles.formFields}>
            {/* Volume and Delivery Terms */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label>Необходимый объем</label>
                <div className={styles.volumeInputGroup}>
                  <input
                    type="text"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder="например, 500"
                    className={styles.volumeInput}
                  />
                  <div className={styles.unitSelect}>
                    <span>кг</span>
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
              </div>

              <div className={styles.fieldGroup}>
                <label>Условия доставки</label>
                <div className={styles.selectField}>
                  <span>{deliveryTerms}</span>
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
            </div>

            {/* Delivery Country and Order Frequency */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label>Страна доставки</label>
                <div className={styles.selectField}>
                  <span>{deliveryCountry}</span>
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

              <div className={styles.fieldGroup}>
                <label>Частота заказов</label>
                <div className={styles.selectField}>
                  <span>{orderFrequency}</span>
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
            </div>

            {/* Certificates */}
            <div className={styles.fieldGroup}>
              <label>Необходимые сертификаты (по желанию)</label>
              <div className={styles.certificatesList}>
                {certificates.map((certificate) => (
                  <div key={certificate} className={styles.certificateItem}>
                    <button
                      className={`${styles.certificateCheckbox} ${
                        selectedCertificates.includes(certificate)
                          ? styles.checked
                          : ""
                      }`}
                      onClick={() => handleCertificateToggle(certificate)}
                    >
                      {selectedCertificates.includes(certificate) && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#155DFC"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                    <span className={styles.certificateLabel}>
                      {certificate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className={styles.fieldGroup}>
              <label>
                Дополнительные требования / Технические спецификации
              </label>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Укажите любые технические требования, стандарты качества или специальные условия..."
                className={styles.requirementsTextarea}
                rows={4}
              />
            </div>

            {/* File Upload */}
            <div className={styles.fieldGroup}>
              <label>Прикрепить документы (по желанию)</label>
              <div className={styles.fileUploadArea}>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  onChange={handleFileUpload}
                  className={styles.fileInput}
                  id="file-upload"
                />
                <label htmlFor="file-upload" className={styles.fileUploadLabel}>
                  <img
                    src={fileUploadIcon}
                    alt="Upload"
                    className={styles.fileUploadIcon}
                  />
                  <div className={styles.fileUploadText}>
                    <p>Нажмите, чтобы загрузить или перетащите и отпустите</p>
                    <span>PDF, DOC, XLS (макс. 10 МБ)</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Response Time Info */}
          <div className={styles.responseInfo}>
            <img
              src={responseTimeIcon}
              alt="Response Time"
              className={styles.responseTimeIcon}
            />
            <div>
              <p className={styles.responseLabel}>Ожидаемое время ответа</p>
              <p className={styles.responseText}>
                Поставщик обычно отвечает на запросы цен в течение 1-3 рабочих
                дней. Вы получите уведомление, когда они ответят.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <button className={styles.cancelButton} onClick={onClose}>
            Отменить
          </button>
          <button className={styles.submitButton} onClick={handleSubmit}>
            <img src={checkIcon} alt="Check" className={styles.checkIcon} />
            Отправить запрос на предложение
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceRequestModal;
