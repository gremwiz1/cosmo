import React from 'react';
import './ApplicationTab.css';

const ApplicationTab: React.FC = () => {
  const handleContactSupport = () => {
    // В реальном приложении здесь был бы переход к форме связи с поддержкой
    alert('Переход к форме связи с технической поддержкой');
  };

  const applications = [
    {
      icon: "🧴",
      title: "Шампуни",
      description: "Идеально подходит для создания мягких шампуней с богатой пеной",
      usage: "Типичное использование: 8-15%"
    },
    {
      icon: "🚿",
      title: "Гель для душа",
      description: "Обеспечивает мягкое очищение и приятные тактильные ощущения",
      usage: "Типичное использование: 10-20%"
    },
    {
      icon: "🧼",
      title: "Очищающие средства для лица",
      description: "Мягкое очищение без пересушивания кожи",
      usage: "Типичное использование: 5-12%"
    },
    {
      icon: "👶",
      title: "Детские продукты",
      description: "Безопасен для нежной детской кожи",
      usage: "Типичное использование: 3-8%"
    },
    {
      icon: "💧",
      title: "Мицеллярная вода",
      description: "Создает мягкие мицеллы для эффективного очищения",
      usage: "Типичное использование: 2-5%"
    }
  ];

  return (
    <div className="tab-content">
      <div className="application-section">
        <div className="applications-section">
          <h3>Типичные применения</h3>
          <div className="applications-list">
            {applications.map((app, index) => (
              <div key={index} className="application-card">
                <div className="application-icon">
                  <span>{app.icon}</span>
                </div>
                <div className="application-content">
                  <h4>{app.title}</h4>
                  <p>{app.description}</p>
                  <div className="usage-badge">
                    {app.usage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="formulation-support">
          <h4>Поддержка формулировки</h4>
          <p>
            Наша команда технических специалистов готова помочь вам в разработке 
            оптимальных рецептур с использованием CocoSoft™ CAB Premium. Мы предоставляем 
            консультации по совместимости ингредиентов, оптимизации концентраций и 
            достижению желаемых свойств продукта.
          </p>
          <button className="support-button" onClick={handleContactSupport}>
            Связаться с технической поддержкой
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTab;
