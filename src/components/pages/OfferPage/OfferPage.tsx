import React from 'react';
import './OfferPage.css';
import BeforeAfterSlider from '../../BeforeAfterSlider/BeforeAfterSlider';
// @ts-ignore
import imgDressed from '../../../img/models/img-dressed.jpg';
// @ts-ignore
import imgUndressed from '../../../img/models/img-undressed.jpg';

interface OfferPageProps {
  language: 'ru' | 'en';
}

const OfferPage: React.FC<OfferPageProps> = ({ language }) => {
  const content = {
    ru: {
      heroTitle: 'Undress Her',
      heroSubtitle: 'Революционная технология искусственного интеллекта',
      heroDescription: 'Создавайте потрясающие изображения с помощью передовых алгоритмов ИИ',
      tryButton: 'ПОПРОБОВАТЬ СЕЙЧАС',
      textBlockTitle: 'Почему выбирают нас?',
      textBlockContent: 'Наша платформа использует самые современные технологии искусственного интеллекта для создания высококачественных изображений. Мы гарантируем полную конфиденциальность и безопасность ваших данных. Присоединяйтесь к тысячам довольных пользователей, которые уже оценили возможности нашего сервиса.'
    },
    en: {
      heroTitle: 'Undress Her',
      heroSubtitle: 'Revolutionary Artificial Intelligence Technology',
      heroDescription: 'Create stunning images with advanced AI algorithms',
      tryButton: 'TRY NOW',
      textBlockTitle: 'Why choose us?',
      textBlockContent: 'Our platform uses the most advanced artificial intelligence technologies to create high-quality images. We guarantee complete confidentiality and security of your data. Join thousands of satisfied users who have already appreciated the capabilities of our service.'
    }
  };

  const t = content[language];

  return (
    <div className="offer-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title neon-text">{t.heroTitle}</h1>
            <h2 className="hero-subtitle">{t.heroSubtitle}</h2>
            <p className="hero-description">{t.heroDescription}</p>
            <button className="neon-button hero-button">{t.tryButton}</button>
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="slider-section">
        <div className="container">
          <BeforeAfterSlider 
            beforeImage={imgDressed}
            afterImage={imgUndressed}
          />
        </div>
      </section>

      {/* Text Block Section */}
      <section className="text-block-section">
        <div className="container">
          <div className="text-block-content">
            <h2 className="text-block-title">{t.textBlockTitle}</h2>
            <p className="text-block-text">{t.textBlockContent}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferPage;