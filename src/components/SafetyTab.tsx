import React from 'react';
import styles from './SafetyTab.module.scss';

const SafetyTab: React.FC = () => {
  const handleDownloadDocument = (documentName: string) => {
    // В реальном приложении здесь был бы API вызов для скачивания документа
    alert(`Скачивание документа: ${documentName}`);
  };

  const documents = [
    {
      icon: "📄",
      title: "MSDS",
      description: "Паспорт безопасности материала",
      fileType: "PDF",
      size: "2.3 MB",
      updated: "15.03.2024"
    },
    {
      icon: "📋",
      title: "COA",
      description: "Сертификат анализа",
      fileType: "PDF",
      size: "1.8 MB",
      updated: "10.03.2024"
    },
    {
      icon: "📊",
      title: "TDS",
      description: "Технический паспорт",
      fileType: "PDF",
      size: "3.1 MB",
      updated: "20.03.2024"
    },
    {
      icon: "⚠️",
      title: "Allergen Statement",
      description: "Декларация об аллергенах",
      fileType: "PDF",
      size: "0.9 MB",
      updated: "05.03.2024"
    },
    {
      icon: "🌿",
      title: "COSMOS Certificate",
      description: "Сертификат COSMOS",
      fileType: "PDF",
      size: "1.5 MB",
      updated: "12.03.2024"
    },
    {
      icon: "☪️",
      title: "Halal Certificate",
      description: "Халяльный сертификат",
      fileType: "PDF",
      size: "1.2 MB",
      updated: "08.03.2024"
    }
  ];

  return (
    <div className={styles.tabContent}>
      <div className={styles.safetySection}>
        <div className={styles.documentsSection}>
          <h3>Документация и сертификаты</h3>
          <div className={styles.documentsList}>
            {documents.map((doc, index) => (
              <div key={index} className={styles.documentItem}>
                <div className={styles.documentIcon}>
                  <span>{doc.icon}</span>
                </div>
                <div className={styles.documentInfo}>
                  <div className={styles.documentDetails}>
                    <h4>{doc.title}</h4>
                    <p>{doc.description}</p>
                    <div className={styles.fileInfo}>
                      <span className={styles.fileType}>{doc.fileType}</span>
                      <span className={styles.fileSize}>{doc.size}</span>
                      <span className={styles.fileDate}>Обновлено: {doc.updated}</span>
                    </div>
                  </div>
                  <button 
                    className={styles.downloadButton}
                    onClick={() => handleDownloadDocument(doc.title)}
                  >
                    Скачать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.safetyInfo}>
          <div className={styles.safetyIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V12" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16H12.01" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.safetyContent}>
            <h4>Информация по безопасности</h4>
            <p>
              Продукт прошел все необходимые тесты на безопасность и соответствует 
              международным стандартам качества. Рекомендуется соблюдать стандартные 
              меры предосторожности при работе с косметическими ингредиентами. 
              Хранить в сухом, прохладном месте вдали от прямых солнечных лучей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyTab;
