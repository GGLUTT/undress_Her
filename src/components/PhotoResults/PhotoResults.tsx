import React from 'react';
import './PhotoResults.css';
// @ts-ignore
import gardenDressed from '../../img/models/gallery/garden-dressed.jpg';
// @ts-ignore
import gardenUndressed from '../../img/models/gallery/garden-undressed.jpg';

interface PhotoResultsProps {
  language: 'ru' | 'en';
}

const PhotoResults: React.FC<PhotoResultsProps> = ({ language }) => {
  const content = {
    ru: {
      title: 'Как выглядят фото после обработки?',
      description: 'На сайте мы предлагаем ознакомиться с примерами работ AI.',
      subtitle: 'После обработки фотоснимка пользователь получает максимально реалистичный вариант обнаженного тела с предоставленного фото.',
      features: [
        'Мгновенно обрабатывает полученное фото, искусственный интеллект воссоздает особенности фигуры, скрытые под одеждой, чтобы создать достоверный образ человека на фотоснимке.'
      ]
    },
    en: {
      title: 'How do photos look after processing?',
      description: 'On the site we offer to get acquainted with examples of AI work.',
      subtitle: 'After processing the photo, the user receives the most realistic version of the naked body from the provided photo.',
      features: [
        'Instantly processes the received photo, artificial intelligence recreates the features of the figure hidden under clothes to create a reliable image of a person in the photo.'
      ]
    }
  };

  const t = content[language];

  return (
    <section className="photo-results-section section">
      <div className="container">
        <div className="photo-results-content">
          <div className="photo-results-image">
            <div className="result-image-container">
              <img 
                src={gardenDressed} 
                alt="Result Demo Dressed" 
                className="result-image result-image-dressed"
              />
              <img 
                src={gardenUndressed} 
                alt="Result Demo Undressed" 
                className="result-image result-image-undressed"
              />
             
             
            </div>
          </div>
          <div className="photo-results-text">
            <h2 className="photo-results-title">{t.title}</h2>
            <p className="photo-results-description">{t.description}</p>
            <p className="photo-results-subtitle">{t.subtitle}</p>
            <div className="photo-results-features">
              {t.features.map((feature, index) => (
                <p key={index} className="feature-text">{feature}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoResults;