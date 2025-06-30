import React from 'react';
import './OfferPage.css';

interface OfferPageProps {
  language: 'ru' | 'en' ;
}

const OfferPage: React.FC<OfferPageProps> = ({ language }) => {
  const content = {
    ru: {
      title: 'НАШИ ПРЕДЛОЖЕНИЯ',
      subtitle: 'Выберите подходящий тариф',
      plans: [
        {
          name: 'БАЗОВЫЙ',
          price: 'БЕСПЛАТНО',
          features: [
            '3 изображения в день',
            'Стандартное качество',
            'Базовая обработка',
            'Реклама'
          ],
          button: 'НАЧАТЬ'
        },
        {
          name: 'ПРЕМИУМ',
          price: '$9.99/мес',
          features: [
            'Безлимитные изображения',
            'HD качество',
            'Быстрая обработка',
            'Без рекламы',
            'Пrioритетная поддержка'
          ],
          button: 'ВЫБРАТЬ',
          popular: true
        },
        {
          name: 'ПРО',
          price: '$19.99/мес',
          features: [
            'Все функции Премиум',
            '4K качество',
            'Мгновенная обработка',
            'API доступ',
            'Персональный менеджер'
          ],
          button: 'ВЫБРАТЬ'
        }
      ]
    },
    en: {
      title: 'OUR OFFERS',
      subtitle: 'Choose the right plan',
      plans: [
        {
          name: 'BASIC',
          price: 'FREE',
          features: [
            '3 images per day',
            'Standard quality',
            'Basic processing',
            'Ads'
          ],
          button: 'START'
        },
        {
          name: 'PREMIUM',
          price: '$9.99/mo',
          features: [
            'Unlimited images',
            'HD quality',
            'Fast processing',
            'No ads',
            'Priority support'
          ],
          button: 'CHOOSE',
          popular: true
        },
        {
          name: 'PRO',
          price: '$19.99/mo',
          features: [
            'All Premium features',
            '4K quality',
            'Instant processing',
            'API access',
            'Personal manager'
          ],
          button: 'CHOOSE'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="offer-page" id="offers">
      <div className="container">
        <div className="offer-header">
          <h1 className="offer-title neon-text">{t.title}</h1>
          <p className="offer-subtitle">{t.subtitle}</p>
        </div>
        
        <div className="plans-grid">
          {t.plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">ПОПУЛЯРНЫЙ</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="neon-button plan-button">{plan.button}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferPage;