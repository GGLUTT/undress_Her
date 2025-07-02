import React from 'react';
import './HomePage.css';
import BeforeAfterSlider from '../../BeforeAfterSlider/BeforeAfterSlider';
import Benefits from '../../Benefits/Benefits';
import HowItWorks from '../../HowItWorks/HowItWorks';
import PhotoResults from '../../PhotoResults/PhotoResults';
import Gallery from '../../Gallery/Gallery';
import Security from '../../Security/Security';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
// @ts-ignore
import imgDressed from '../../../img/models/img-dressed.jpg';
// @ts-ignore
import imgUndressed from '../../../img/models/img-undressed.jpg';
// import OfferPage from '../OfferPage/OfferPage';

interface HomePageProps {
  language: 'ru' | 'en' ;
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const content = {
    ru: {
      heroTitle: 'Undress Her',
      heroSubtitle: 'Революционная технология искусственного интеллекта',
      heroDescription: 'Создавайте потрясающие изображения с помощью передовых алгоритмов ИИ',
      tryButton: 'ПОПРОБОВАТЬ СЕЙЧАС',
      offersTitle: 'НАШИ ПРЕДЛОЖЕНИЯ',
      offersSubtitle: 'Выберите подходящий тариф',
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
      heroTitle: 'Undress Her',
      heroSubtitle: 'Revolutionary Artificial Intelligence Technology',
      heroDescription: 'Create stunning images with advanced AI algorithms',
      tryButton: 'TRY NOW',
      offersTitle: 'OUR OFFERS',
      offersSubtitle: 'Choose the right plan',
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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title neon-text">{t.heroTitle}</h1>
            <h2 className="hero-subtitle">{t.heroSubtitle}</h2>
            <p className="hero-description">{t.heroDescription}</p>
            <button className="neon-button hero-button">{t.tryButton}</button>
          </div>
          
          {/* Slider для мобільних в hero-section */}
          <div className="hero-slider mobile-only">
            <BeforeAfterSlider 
              beforeImage={imgDressed}
              afterImage={imgUndressed}
            />
          </div>
        </div>
      </section>

      {/* Before/After Slider для десктопу */}
      <section className="slider-section desktop-only">
        <div className="container">
          <BeforeAfterSlider 
            beforeImage={imgDressed}
            afterImage={imgUndressed}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <Benefits language={language} />

      {/* How It Works Section */}
      <HowItWorks language={language} />

      {/* Photo Results Section */}
      <PhotoResults language={language} />

      {/* Gallery Section */}
      <Gallery language={language} />

      {/* <OfferPage language={language} /> */}
      
      <Security language={language} />


      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;