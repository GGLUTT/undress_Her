import React from 'react';
import './Benefits.css';

// @ts-ignore
import checkIcon from '../../img/icons/check.png';
// @ts-ignore
import bulbIcon from '../../img/icons/bulb.png';
// @ts-ignore
import keyIcon from '../../img/icons/key.png';
// @ts-ignore
import loveIcon from '../../img/icons/love-yourself.png';
// @ts-ignore
import donutIcon from '../../img/icons/donut.png';
// @ts-ignore
import moneyIcon from '../../img/icons/money.png';

interface BenefitsProps {
  language: 'ru' | 'en';
}

const Benefits: React.FC<BenefitsProps> = ({ language }) => {
  const content = {
    ru: {
      title: 'ПРЕИМУЩЕСТВА UNDRESS HER',
      subtitle: 'Сервис Undress Her имеет множество преимуществ перед конкурентами, которые делают его лучшим. Вот некоторые из них:',
      benefits: [
        {
          icon: checkIcon,
          title: 'Простой и удобный интерфейс',
          description: 'Раздень девушку одним нажатием кнопки! Nude photo maker имеет интуитивно понятный интерфейс и множество опций кастомизации.'
        },
        {
          icon: bulbIcon,
          title: 'Высокое качество',
          description: 'В базе редактора обнаженных фото более 15 миллионов изображений и свыше 5 тысяч часов обучения ИИ.'
        },
        {
          icon: loveIcon,
          title: 'Любимчик пользователей',
          description: 'Более 8 тысяч довольных клиентов и множество восторженных отзывов.'
        },
        {
          icon: keyIcon,
          title: 'Безопасность и конфиденциальность',
          description: 'Мы не храним данные и фото пользователей.'
        },
        {
          icon: donutIcon,
          title: 'Уникальные изображения',
          description: 'Каждое изображение уникально и не встречается больше нигде в Интернете. Мы воссоздаем анатомию тела на основе загруженной фотографии, чтобы обеспечить максимальный результат.'
        },
        {
          icon: moneyIcon,
          title: 'Доступные цены',
          description: 'Мы предлагаем различные пакеты, включая бесплатное использование, чтобы каждый мог попробовать наш сервис. Наши цены самые низкие на рынке.'
        }
      ]
    },
    en: {
      title: 'UNDRESS AI ADVANTAGES',
      subtitle: 'Undress AI service has many advantages over competitors that make it the best. Here are some of them:',
      benefits: [
        {
          icon: checkIcon,
          title: 'Simple and Convenient Interface',
          description: 'Undress a girl with one click! Nude photo maker has an intuitive interface and many customization options.'
        },
        {
          icon: bulbIcon,
          title: 'High Quality',
          description: 'The nude photo editor database contains over 15 million images and over 5 thousand hours of AI training.'
        },
        {
          icon: loveIcon,
          title: 'User Favorite',
          description: 'More than 8 thousand satisfied customers and many enthusiastic reviews.'
        },
        {
          icon: keyIcon,
          title: 'Security and Privacy',
          description: 'We do not store user data and photos.'
        },
        {
          icon: donutIcon,
          title: 'Unique Images',
          description: 'Each image is unique and not found anywhere else on the Internet. We recreate body anatomy based on uploaded photos to ensure maximum results.'
        },
        {
          icon: moneyIcon,
          title: 'Affordable Prices',
          description: 'We offer various packages, including free usage, so everyone can try our service. Our prices are the lowest on the market.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="benefits-section section">
      <div className="container">
        <div className="benefits-header">
          <h2 className="section-title neon-text">{t.title}</h2>
          <p className="benefits-subtitle">{t.subtitle}</p>
        </div>
        <div className="benefits-grid">
          {t.benefits.map((benefit, index) => (
            <div key={index} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="benefit-icon">
                <img src={benefit.icon} alt={benefit.title} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;