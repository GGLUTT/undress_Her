import React from 'react';
import './HowItWorks.css';
// @ts-ignore
import imgDressed from '../../img/models/img-dressed.jpg';
// @ts-ignore
import imgUndressed from '../../img/models/img-undressed.jpg';

interface HowItWorksProps {
  language: 'ru' | 'en';
}

const HowItWorks: React.FC<HowItWorksProps> = ({ language }) => {
  const content = {
    ru: {
      title: 'Как работает Undress Her',
      description: 'Снимки с девушкой одеждой в пару кликов!',
      features: [
        'Undress AI является инструментом для создания изображений. Загрузите фотографию и пользователь сможет увидеть результат.',
        'Искусственный интеллект видит обнаженное тело того, что изображено на снимке.',
        'Технология DeepNude все популярнее среди пользователей, так как позволяет создавать фото обнаженного тела.',
        'Undress AI App обучен на сотнях тысяч фотографий. AI создает реалистичный и максимально правдоподобный результат за несколько секунд.'
      ]
    },
    en: {
      title: 'How does Undress Her work?',
      description: 'Photos with a girl dressed in a couple of clicks!',
      features: [
        'Undress AI is a tool for creating images. Upload a photo and the user will be able to see the result.',
        'Artificial intelligence sees the naked body of what is depicted in the picture.',
        'DeepNude technology is becoming more popular among users, as it allows you to create photos of naked bodies.',
        'Undress AI App is trained on hundreds of thousands of photos. AI creates realistic and most plausible results in seconds.'
      ]
    }
  };

  const t = content[language];

  return (
    <section className="how-it-works-section section">
      <div className="container">
        <div className="how-it-works-content">
          <div className="how-it-works-text">
            <h2 className="how-it-works-title">{t.title}</h2>
            <p className="how-it-works-description">{t.description}</p>
            <div className="how-it-works-features">
              {t.features.map((feature, index) => (
                <p key={index} className="feature-text">{feature}</p>
              ))}
            </div>
          </div>
          <div className="how-it-works-image">
            <div className="demo-image-container">
              <img 
                src={imgDressed} 
                alt="Demo Dressed" 
                className="demo-image demo-image-dressed"
              />
              <img 
                src={imgUndressed} 
                alt="Demo Undressed" 
                className="demo-image demo-image-undressed"
              />
              
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;