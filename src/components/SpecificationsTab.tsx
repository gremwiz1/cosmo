import React from 'react';
import './SpecificationsTab.css';

const SpecificationsTab: React.FC = () => {
  const handleDownloadTDS = () => {
    // В реальном приложении здесь был бы API вызов для скачивания TDS
    alert('Скачивание TDS документа...');
  };

  const specifications = [
    { parameter: "Внешний вид", specification: "Прозрачная или слегка мутная жидкость", testMethod: "Визуально" },
    { parameter: "pH (5% раствор)", specification: "5.5 - 7.0", testMethod: "ASTM E70" },
    { parameter: "Вязкость (25°C)", specification: "500 - 2000 мПа·с", testMethod: "Brookfield LV" },
    { parameter: "Сухой остаток", specification: "28.0 - 32.0%", testMethod: "ASTM D1644" },
    { parameter: "Содержание хлорида натрия", specification: "≤ 6.0%", testMethod: "ASTM D1681" },
    { parameter: "Содержание свободного амина", specification: "≤ 0.1%", testMethod: "Титрование" },
    { parameter: "Цвет (APHA)", specification: "≤ 100", testMethod: "ASTM D1209" },
    { parameter: "Растворимость в воде", specification: "Полная", testMethod: "Визуально" },
    { parameter: "Поверхностное натяжение", specification: "30-35 мН/м", testMethod: "Du Noüy Ring" },
    { parameter: "Критическая концентрация мицеллообразования", specification: "0.1-0.3 г/л", testMethod: "Кондуктометрия" }
  ];

  return (
    <div className="tab-content">
      <div className="specifications-section">
        <div className="specifications-header">
          <h3>Технические характеристики</h3>
          <button className="download-tds-button" onClick={handleDownloadTDS}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1V15M1 8H15" stroke="#155DFC" strokeWidth="1.33" strokeLinecap="round"/>
            </svg>
            Скачать ТДС
          </button>
        </div>
        
        <div className="specifications-table">
          <div className="table-header">
            <div className="table-cell header-cell">Параметр</div>
            <div className="table-cell header-cell">Спецификации / ТДС</div>
            <div className="table-cell header-cell">Метод испытания</div>
          </div>
          
          <div className="table-body">
            {specifications.map((spec, index) => (
              <div key={index} className="table-row">
                <div className="table-cell">{spec.parameter}</div>
                <div className="table-cell">{spec.specification}</div>
                <div className="table-cell">{spec.testMethod}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificationsTab;
