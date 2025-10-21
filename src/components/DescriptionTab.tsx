import React from 'react';
import './DescriptionTab.css';

const DescriptionTab: React.FC = () => {
  return (
    <div className="tab-content">
      <div className="description-section">
        <h3>Описание продукта</h3>
        <div className="description-content">
          <p>
            CocoSoft™ CAB Premium — это высококачественный кокосовый амфотерный сурфактант, 
            специально разработанный для косметической промышленности. Продукт обеспечивает 
            отличное пенообразование, мягкое очищение и превосходную совместимость с кожей.
          </p>
          
          <h4>Ключевые преимущества:</h4>
          <ul>
            <li>Высокое качество пены с кремовой текстурой</li>
            <li>Мягкое воздействие на кожу и волосы</li>
            <li>Отличная совместимость с другими ингредиентами</li>
            <li>Стабильность в широком диапазоне pH</li>
            <li>Подходит для чувствительной кожи</li>
            <li>Биоразлагаемый и экологически безопасный</li>
          </ul>
          
          <h4>Применение:</h4>
          <p>
            Рекомендуется для использования в шампунях, гелях для душа, очищающих средствах 
            для лица, детских продуктах и других косметических средствах, требующих мягкого 
            очищения с хорошим пенообразованием.
          </p>
          
          <h4>Технические характеристики:</h4>
          <div className="tech-specs">
            <div className="spec-item">
              <span className="spec-label">Внешний вид:</span>
              <span className="spec-value">Прозрачная или слегка мутная жидкость</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">pH (5% раствор):</span>
              <span className="spec-value">5.5 - 7.0</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Вязкость (25°C):</span>
              <span className="spec-value">500 - 2000 мПа·с</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Растворимость:</span>
              <span className="spec-value">Хорошо растворим в воде</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTab;
