import React from 'react';
import './Footer.css';
// @ts-ignore
import logo from '../../img/main/logo.png';

interface SiteFooterProps {
  language: 'ru' | 'en';
  setCurrentPage: (page: string) => void;
  onTermsClick: () => void;
}

const SiteFooter: React.FC<SiteFooterProps> = ({ language, setCurrentPage, onTermsClick }) => {
  const footerContent = {
    ru: {
      brandName: 'Undress Her',
      brandDescription: 'Революционная технология искусственного интеллекта для создания потрясающих изображений.',
      mainNavigation: {
        heading: 'Навигация',
        menuItems: [
          { key: 'home', label: 'Главная' },
          { key: 'offer', label: 'Предложения' },
          { key: 'article', label: 'Статьи' },
          { key: 'models', label: 'Модели' }
        ]
      },
      featuredModels: {
        heading: 'Топ Модели',
        items: ['Реалистичные', 'Художественные', 'Фэнтези', 'Классические']
      },
      artGenres: {
        heading: 'Жанры',
        items: ['Портреты', 'Пейзажи', 'Абстракция', 'Минимализм']
      },
      contentCategories: {
        heading: 'Категории',
        items: ['Новые', 'Популярные', 'Рекомендуемые', 'Избранные']
      },
      socialPlatforms: {
        items: ['Telegram', 'Twitter', 'Discord', 'Reddit']
      },
      legalInfo: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        compliance: '2257 Соответствие',
        dmca: 'DMCA Соответствие'
      },
      copyrightText: '© 2024 Undress Her. Все права защищены.'
    },
    en: {
      brandName: 'Undress Her',
      brandDescription: 'Revolutionary artificial intelligence technology for creating stunning images.',
      mainNavigation: {
        heading: 'Navigation',
        menuItems: [
          { key: 'home', label: 'Home' },
          { key: 'offer', label: 'Offers' },
          { key: 'article', label: 'Articles' },
          { key: 'models', label: 'Models' }
        ]
      },
      featuredModels: {
        heading: 'Top Models',
        items: ['Realistic', 'Artistic', 'Fantasy', 'Classic']
      },
      artGenres: {
        heading: 'Genres',
        items: ['Portraits', 'Landscapes', 'Abstract', 'Minimalism']
      },
      contentCategories: {
        heading: 'Categories',
        items: ['New', 'Popular', 'Recommended', 'Favorites']
      },
      socialPlatforms: {
        items: ['Telegram', 'Twitter', 'Discord', 'Reddit']
      },
      legalInfo: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        compliance: '2257 Compliance',
        dmca: 'DMCA Compliance'
      },
      copyrightText: '© 2024 Undress Her. All rights reserved.'
    }
  };

  const currentContent = footerContent[language];

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        {/* Brand Section */}
        <div className="site-footer__brand-section">
          <div className="site-footer__brand-logo">
            <img src={logo} alt="Logo" className="site-footer__logo-image" />
          </div>
          <p className="site-footer__brand-description">{currentContent.brandDescription}</p>
          
          {/* Social Media */}
          <div className="site-footer__social-wrapper">
            <div className="site-footer__social-grid">
              {currentContent.socialPlatforms.items.map((platform, index) => (
                <a key={index} href="#" className="site-footer__social-item">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="site-footer__nav-sections">
          {/* Main Navigation */}
          <div className="site-footer__nav-column">
            <h4 className="site-footer__column-heading">{currentContent.mainNavigation.heading}</h4>
            <ul className="site-footer__nav-list">
              {currentContent.mainNavigation.menuItems.map((item) => (
                <li key={item.key} className="site-footer__nav-item">
                  <button 
                    className="site-footer__nav-button"
                    onClick={() => setCurrentPage(item.key as any)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Models */}
          <div className="site-footer__nav-column">
            <h4 className="site-footer__column-heading">{currentContent.featuredModels.heading}</h4>
            <ul className="site-footer__nav-list">
              {currentContent.featuredModels.items.map((item, index) => (
                <li key={index} className="site-footer__nav-item">
                  <a href="#" className="site-footer__nav-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Art Genres */}
          <div className="site-footer__nav-column">
            <h4 className="site-footer__column-heading">{currentContent.artGenres.heading}</h4>
            <ul className="site-footer__nav-list">
              {currentContent.artGenres.items.map((item, index) => (
                <li key={index} className="site-footer__nav-item">
                  <a href="#" className="site-footer__nav-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Categories */}
          <div className="site-footer__nav-column">
            <h4 className="site-footer__column-heading">{currentContent.contentCategories.heading}</h4>
            <ul className="site-footer__nav-list">
              {currentContent.contentCategories.items.map((item, index) => (
                <li key={index} className="site-footer__nav-item">
                  <a href="#" className="site-footer__nav-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="site-footer__bottom-section">
        <div className="site-footer__bottom-container">
          <div className="site-footer__legal-links">
            <button className="site-footer__legal-button" onClick={onTermsClick}>
              {currentContent.legalInfo.privacy}
            </button>
            <button className="site-footer__legal-button" onClick={onTermsClick}>
              {currentContent.legalInfo.terms}
            </button>
            <a href="#" className="site-footer__legal-link">{currentContent.legalInfo.compliance}</a>
            <a href="#" className="site-footer__legal-link">{currentContent.legalInfo.dmca}</a>
          </div>
          <div className="site-footer__copyright-wrapper">
            <p className="site-footer__copyright-text">{currentContent.copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;