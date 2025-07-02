import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ModelPage.css';
// @ts-ignore

import asian1Image from '../../../img/models/gallery/asian-1-dressed.jpg';
// @ts-ignore
import asian2Image from '../../../img/models/gallery/asian-2-dressed.jpg';
// @ts-ignore

import officeImage from '../../../img/models/gallery/office-dressed.jpg';
// @ts-ignore

import gymImage from '../../../img/models/gallery/gym-dressed.jpg';
// @ts-ignore

import gardenImage from '../../../img/models/gallery/garden-dressed.jpg';
// @ts-ignore

import schImage from '../../../img/models/gallery/sch-dressed.jpg';

interface ModelPageProps {
  language: 'ru' | 'en';
}

interface ModelData {
  id: number;
  category: string;
  title: string;
  views: string;
  image: string;
  age: string;
  country: string;
  zodiac: string;
  description: string;
  slug?: string; // Додаємо slug для URL
}

// Виносимо дані за межі компонента
const modelsData = {
  ru: {
    title: 'МОДЕЛИ',
    subtitle: 'Галерея наших лучших работ',
    viewBtn: 'Просмотр',
    viewsText: 'просмотров',
    backBtn: 'Назад',
    age: 'Возраст',
    country: 'Страна',
    zodiac: 'Знак зодиака',
    description: 'Описание',
    models: [
      {
        id: 1,
        category: 'asian',
        title: 'Азиатская модель 1',
        views: '12.5K',
        image: asian1Image,
        age: '23',
        country: 'Япония',
        zodiac: 'Близнецы',
        description: 'Элегантная азиатская модель с утонченными чертами лица',
        slug: 'asian-model-1'
      },
      {
        id: 2,
        category: 'asian',
        title: 'Азиатская модель 2',
        views: '8.3K',
        image: asian2Image,
        age: '25',
        country: 'Корея',
        zodiac: 'Лев',
        description: 'Стильная корейская модель с современным образом',
        slug: 'asian-model-2'
      },
      {
        id: 3,
        category: 'office',
        title: 'Офисная леди',
        views: '15.7K',
        image: officeImage,
        age: '28',
        country: 'США',
        zodiac: 'Дева',
        description: 'Профессиональная бизнес-леди в элегантном костюме',
        slug: 'office-lady'
      },
      {
        id: 4,
        category: 'gym',
        title: 'Спортивная модель',
        views: '9.1K',
        image: gymImage,
        age: '24',
        country: 'Германия',
        zodiac: 'Овен',
        description: 'Атлетичная модель в спортивной форме',
        slug: 'gym-model'
      },
      {
        id: 5,
        category: 'garden',
        title: 'Садовая фея',
        views: '11.2K',
        image: gardenImage,
        age: '22',
        country: 'Франция',
        zodiac: 'Рыбы',
        description: 'Романтичная модель в саду среди цветов',
        slug: 'garden-fairy'
      },
      {
        id: 6,
        category: 'office',
        title: 'Школьница',
        views: '13.8K',
        image: schImage,
        age: '19',
        country: 'Великобритания',
        zodiac: 'Весы',
        description: 'Молодая студентка в школьной форме',
        slug: 'school-girl'
      }
    ]
  },
  en: {
    title: 'MODELS',
    subtitle: 'Gallery of our best works',
    viewBtn: 'View',
    viewsText: 'views',
    backBtn: 'Back',
    age: 'Age',
    country: 'Country',
    zodiac: 'Zodiac',
    description: 'Description',
    models: [
      {
        id: 1,
        category: 'asian',
        title: 'Asian Model 1',
        views: '12.5K',
        image: asian1Image,
        age: '23',
        country: 'Japan',
        zodiac: 'Gemini',
        description: 'Elegant Asian model with refined facial features',
        slug: 'asian-model-1'
      },
      {
        id: 2,
        category: 'asian',
        title: 'Asian Model 2',
        views: '8.3K',
        image: asian2Image,
        age: '25',
        country: 'Korea',
        zodiac: 'Leo',
        description: 'Stylish Korean model with modern look',
        slug: 'asian-model-2'
      },
      {
        id: 3,
        category: 'office',
        title: 'Office Lady',
        views: '15.7K',
        image: officeImage,
        age: '28',
        country: 'USA',
        zodiac: 'Virgo',
        description: 'Professional businesswoman in elegant suit',
        slug: 'office-lady'
      },
      {
        id: 4,
        category: 'gym',
        title: 'Gym Model',
        views: '9.1K',
        image: gymImage,
        age: '24',
        country: 'Germany',
        zodiac: 'Aries',
        description: 'Athletic model in sportswear',
        slug: 'gym-model'
      },
      {
        id: 5,
        category: 'garden',
        title: 'Garden Fairy',
        views: '11.2K',
        image: gardenImage,
        age: '22',
        country: 'France',
        zodiac: 'Pisces',
        description: 'Romantic model in garden among flowers',
        slug: 'garden-fairy'
      },
      {
        id: 6,
        category: 'office',
        title: 'School Girl',
        views: '13.8K',
        image: schImage,
        age: '19',
        country: 'UK',
        zodiac: 'Libra',
        description: 'Young student in school uniform',
        slug: 'school-girl'
      }
    ]
  }
};

const ModelPage: React.FC<ModelPageProps> = ({ language }) => {
  const [selectedModel, setSelectedModel] = useState<ModelData | null>(null);
  const navigate = useNavigate();
  const { modelSlug } = useParams<{ modelSlug: string }>();

  const t = modelsData[language];

  useEffect(() => {
    if (modelSlug) {
      const model = t.models.find(m => m.slug === modelSlug);
      if (model) {
        setSelectedModel(model);
      } else {
        navigate('/models', { replace: true });
      }
    } else {
      setSelectedModel(null);
    }
  }, [modelSlug, t.models, navigate]); // Тепер t.models стабільний

  const handleModelClick = (model: ModelData) => {
    if (model.slug) {
      navigate(`/models/${model.slug}`);
    }
  };

  const handleBackClick = () => {
    setSelectedModel(null);
    navigate('/models');
  };

  if (selectedModel) {
    return (
      <div className="model-page">
        <div className="container">
          <div className="model-detail">
            <div className="model-detail-full-width">
              <div className="model-detail-main-content">
                <div className="model-detail-image">
                  <img src={selectedModel.image} alt={selectedModel.title} />
                </div>
                
                <div className="model-detail-info">
                  <h1 className="model-detail-title">{selectedModel.title}</h1>
                  
                  <div className="model-detail-table">
                    <table>
                      <tbody>
                        <tr>
                          <td className="table-label">{t.age}:</td>
                          <td className="table-value">{selectedModel.age}</td>
                        </tr>
                        <tr>
                          <td className="table-label">{t.country}:</td>
                          <td className="table-value">{selectedModel.country}</td>
                        </tr>
                        <tr>
                          <td className="table-label">{t.zodiac}:</td>
                          <td className="table-value">{selectedModel.zodiac}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="model-detail-description-full">
                <h3>{t.description}</h3>
                <p>{selectedModel.description}</p>
              </div>
            </div>
            
            <div className="back-btn-container">
              <button className="back-btn" onClick={handleBackClick}>
                ← {t.backBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="model-page">
      <div className="container">
        <div className="model-header">
          <h1 className="model-title neon-text">{t.title}</h1>
          <p className="model-subtitle">{t.subtitle}</p>
        </div>
        
        <div className="models-grid">
          {t.models.map(model => (
            <div key={model.id} className="model-card" onClick={() => handleModelClick(model)}>
              <div className="model-image">
                <img src={model.image} alt={model.title} />
                <div className="model-overlay">
                  <button className="view-btn">{t.viewBtn}</button>
                </div>
              </div>
              <div className="model-info">
                <h3 className="model-name">{model.title}</h3>
                {/* <span className="model-views">{model.views} {t.viewsText}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelPage;