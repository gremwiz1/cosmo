import React, { useState } from 'react';
import styles from './RecipesTab.module.scss';

const RecipesTab: React.FC = () => {
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const recipes = [
    {
      id: 1,
      title: "Gentle Daily Shampoo for All Hair Types",
      badges: ["Shampoo", "Haircare", "Room Temperature"],
      description: "A sulfate-free shampoo with excellent foam and gentle cleansing properties. Perfect for daily use on all hair types including color-treated hair.",
      ingredients: [
        { phase: "Phase A", name: "Water", percentage: "68.50%" },
        { phase: "Phase A", name: "Cocamidopropyl Betaine", brand: "CocoSoft™ CAB Premium", percentage: "12.00%", highlighted: true },
        { phase: "Phase A", name: "Sodium Cocoyl Isethionate", percentage: "8.00%" },
        { phase: "Phase A", name: "Glycerin", percentage: "3.00%" },
        { phase: "Phase B", name: "Polyquaternium-10", percentage: "1.00%" },
        { phase: "Phase B", name: "Panthenol", percentage: "0.50%" },
        { phase: "Phase C", name: "Fragrance", percentage: "0.50%" },
        { phase: "Phase C", name: "Citric Acid", percentage: "0.30%" },
        { phase: "Phase C", name: "Phenoxyethanol", percentage: "0.80%" },
        { phase: "Phase C", name: "Ethylhexylglycerin", percentage: "0.20%" }
      ],
      characteristics: {
        "Final pH": "5.5 - 6.0",
        "Viscosity": "3,000 - 5,000 cPs",
        "Appearance": "Clear to slightly hazy liquid",
        "Shelf Life": "24 months"
      },
      sensory: {
        "Texture": "Smooth, rich lather",
        "Absorption": "Easy rinse-off",
        "Skin Feel": "Clean, non-stripping",
        "Scent": "Light fragrance"
      },
      steps: [
        {
          number: 1,
          description: "Combine water and all Phase A ingredients in main vessel",
          details: ["Room temperature", "5 minutes", "Overhead mixer"]
        },
        {
          number: 2,
          description: "Mix at medium speed until homogeneous and clear",
          details: ["10-15 minutes"]
        },
        {
          number: 3,
          description: "Add Phase B ingredients one at a time with continuous mixing",
          details: ["5 minutes"]
        },
        {
          number: 4,
          description: "Add Phase C ingredients (preservative system and fragrance)",
          details: ["Below 40°C", "5 minutes"]
        },
        {
          number: 5,
          description: "Adjust pH to 5.5-6.0 with citric acid if needed",
          details: ["2 minutes"]
        },
        {
          number: 6,
          description: "Mix for final 5 minutes and allow to rest overnight for optimal viscosity development",
          details: ["5 minutes"]
        }
      ],
      compliance: ["EU", "US", "China", "Japan"],
      claims: ["Sulfate-Free Formula", "Gentle Daily Cleansing", "Safe for Color-Treated Hair", "Rich, Creamy Lather", "pH Balanced"],
      tips: [
        "CocoSoft™ CAB Premium provides excellent foam boosting even at low concentrations",
        "The formula can be thickened further by increasing salt (NaCl) up to 2%",
        "For extra conditioning, consider adding 0.5% hydrolyzed proteins",
        "This formula is compatible with most essential oils and fragrances"
      ],
      additionalInfo: {
        "Est. Cost per 100g": "$0.85",
        "Target Skin Type": "All Skin Types",
        "Season": "All Season",
        "Preservation": "Phenoxyethanol + Ethylhexylglycerin"
      }
    }
  ];

  const allRecipes = [
    { id: 1, title: "Gentle Daily Shampoo for All Hair Types", badges: ["Shampoo", "Beginner"], active: true },
    { id: 2, title: "Soothing Baby Wash - Ultra Mild Formula", badges: ["Body Wash", "Beginner"], active: false },
    { id: 3, title: "Refreshing Micellar Cleansing Water", badges: ["Micellar Water", "Intermediate"], active: false }
  ];

  const handleCopyToFormulator = () => {
    const recipe = recipes[currentRecipe];
    const recipeText = `
${recipe.title}

Ингредиенты:
${recipe.ingredients.map(ing => `- ${ing.name}: ${ing.percentage}`).join('\n')}

Характеристики:
${Object.entries(recipe.characteristics).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

Шаги приготовления:
${recipe.steps.map(step => `${step.number}. ${step.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(recipeText).then(() => {
      alert('Рецепт скопирован в буфер обмена!');
    }).catch(() => {
      alert('Ошибка при копировании рецепта');
    });
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    
    try {
      // Имитация загрузки PDF
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Создаем простой PDF контент (в реальном приложении здесь был бы API вызов)
      const recipe = recipes[currentRecipe];
      const pdfContent = `
        Рецепт: ${recipe.title}
        
        Ингредиенты:
        ${recipe.ingredients.map(ing => `- ${ing.name}: ${ing.percentage}`).join('\n')}
        
        Характеристики:
        ${Object.entries(recipe.characteristics).map(([key, value]) => `- ${key}: ${value}`).join('\n')}
        
        Шаги приготовления:
        ${recipe.steps.map(step => `${step.number}. ${step.description}`).join('\n')}
      `;
      
      // Создаем и скачиваем файл
      const blob = new Blob([pdfContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${recipe.title.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      alert('PDF файл скачан!');
    } catch (error) {
      alert('Ошибка при скачивании PDF');
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrevRecipe = () => {
    if (currentRecipe > 0) {
      setCurrentRecipe(currentRecipe - 1);
    }
  };

  const handleNextRecipe = () => {
    if (currentRecipe < recipes.length - 1) {
      setCurrentRecipe(currentRecipe + 1);
    }
  };

  const currentRecipeData = recipes[currentRecipe];

  return (
    <div className={styles.tabContent}>
      <div className={styles.recipesHeader}>
        <div className={styles.recipesTitleSection}>
          <h3>Примеры рецептур от поставщика</h3>
          <p>Образцы рецептур, показывающие как использовать CocoSoft™ CAB Premium в ваших продуктах</p>
        </div>
        <div className={styles.recipesNavigation}>
          <button 
            className={styles.navButton} 
            disabled={currentRecipe === 0}
            onClick={handlePrevRecipe}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className={styles.navCounter}>{currentRecipe + 1} / {recipes.length}</span>
          <button 
            className={styles.navButton}
            disabled={currentRecipe === recipes.length - 1}
            onClick={handleNextRecipe}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className={styles.recipeCard}>
        <div className={styles.recipeHeader}>
          <div className={styles.recipeTitleSection}>
            <h2>{currentRecipeData.title}</h2>
            <div className={styles.recipeBadges}>
              {currentRecipeData.badges.map((badge, index) => (
                <span key={index} className={styles.badge}>{badge}</span>
              ))}
            </div>
            <p>{currentRecipeData.description}</p>
          </div>
          <div className={styles.recipeActions}>
            <button className={styles.copyButton} onClick={handleCopyToFormulator}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 6.5L13.5 1.5C13.5 0.671573 12.8284 0 12 0L1.5 0C0.671573 0 0 0.671573 0 1.5L0 12C0 12.8284 0.671573 13.5 1.5 13.5L6.5 13.5" stroke="#155DFC" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 4.5L16 15C16 15.8284 15.3284 16.5 14.5 16.5L4 16.5C3.17157 16.5 2.5 15.8284 2.5 15L2.5 4.5C2.5 3.67157 3.17157 3 4 3L14.5 3C15.3284 3 16 3.67157 16 4.5Z" stroke="#155DFC" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Скопировать в формулятор
            </button>
            <button 
              className={styles.downloadButton} 
              onClick={handleDownloadPDF}
              disabled={isDownloading}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
              {isDownloading ? 'Скачивание...' : 'Скачать PDF'}
            </button>
          </div>
        </div>
        
        <div className={styles.recipeContent}>
          <div className={styles.ingredientsSection}>
            <div className={styles.sectionHeader}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1L12.5 6.5L18.5 6.5L14 10L15.5 16L10 12.5L4.5 16L6 10L1.5 6.5L7.5 6.5L10 1Z" stroke="#155DFC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4>Ингредиенты (100% Итого)</h4>
            </div>
            
            <div className={styles.ingredientsList}>
              {currentRecipeData.ingredients.map((ingredient, index) => (
                <div key={index} className={`${styles.ingredientItem} ${ingredient.highlighted ? styles.highlighted : ''}`}>
                  <div className={styles.ingredientInfo}>
                    <span className={styles.phaseBadge}>{ingredient.phase}</span>
                    <div className={styles.ingredientDetails}>
                      <span className={styles.ingredientName}>{ingredient.name}</span>
                      {ingredient.brand && (
                        <span className={styles.ingredientBrand}>{ingredient.brand}</span>
                      )}
                    </div>
                  </div>
                  <span className={styles.ingredientPercentage}>{ingredient.percentage}</span>
                </div>
              ))}
            </div>
            
            <div className="ingredient-highlight">
              <div className="highlight-content">
                <div className="highlight-text">
                  <strong>CocoSoft™ CAB Premium:</strong>
                  <span>12% of formula</span>
                </div>
                <div className="highlight-cost">
                  <strong>18.5%</strong>
                  <span>of cost</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="recipe-details">
            <div className="product-characteristics">
              <h4>Product Characteristics</h4>
              <div className="characteristics-grid">
                {Object.entries(currentRecipeData.characteristics).map(([key, value]) => (
                  <div key={key} className="characteristic-item">
                    <span className="characteristic-label">{key}</span>
                    <span className="characteristic-value">{value}</span>
                  </div>
                ))}
              </div>
              
              <div className="divider"></div>
              
              <h5>Sensory Profile</h5>
              <div className="sensory-grid">
                {Object.entries(currentRecipeData.sensory).map(([key, value]) => (
                  <div key={key} className="sensory-item">
                    <span className="sensory-label">{key}:</span>
                    <span className="sensory-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="preparation-steps">
              <h4>Preparation Steps</h4>
              <div className="steps-list">
                {currentRecipeData.steps.map((step, index) => (
                  <div key={index} className="step-item">
                    <div className="step-number">{step.number}</div>
                    <div className="step-content">
                      <p>{step.description}</p>
                      <div className="step-details">
                        {step.details.map((detail, detailIndex) => (
                          <span key={detailIndex} className="step-detail">{detail}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="compliance-section">
              <h4>Regional Compliance</h4>
              <div className="compliance-badges">
                {currentRecipeData.compliance.map((region, index) => (
                  <div key={index} className="compliance-badge">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#00A63E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{region}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="marketing-claims">
              <h4>Marketing Claims</h4>
              <div className="claims-badges">
                {currentRecipeData.claims.map((claim, index) => (
                  <span key={index} className="claim-badge">{claim}</span>
                ))}
              </div>
            </div>
            
            <div className="supplier-tips">
              <div className={styles.sectionHeader}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L12.5 6.5L18.5 6.5L14 10L15.5 16L10 12.5L4.5 16L6 10L1.5 6.5L7.5 6.5L10 1Z" stroke="#733E0A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4>Supplier Tips & Notes</h4>
              </div>
              <ul className="tips-list">
                {currentRecipeData.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="additional-info">
              <h4>Additional Information</h4>
              <div className="info-grid">
                {Object.entries(currentRecipeData.additionalInfo).map(([key, value]) => (
                  <div key={key} className="info-item">
                    <span className="info-label">{key}:</span>
                    <span className="info-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="all-recipes-section">
        <h4>All Available Formulations for CocoSoft™ CAB Premium</h4>
        <div className="all-recipes-list">
          {allRecipes.map((recipe) => (
            <div key={recipe.id} className={`recipe-preview ${recipe.active ? 'active' : ''}`}>
              <div className="preview-content">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L12.5 6.5L18.5 6.5L14 10L15.5 16L10 12.5L4.5 16L6 10L1.5 6.5L7.5 6.5L10 1Z" stroke={recipe.active ? "#1C398E" : "#4A5565"} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h5>{recipe.title}</h5>
              </div>
              <div className="preview-badges">
                {recipe.badges.map((badge, index) => (
                  <span key={index} className={styles.badge}>{badge}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesTab;
