import React from 'react';
import './Header.css';

// @ts-ignore
import logo from '../../img/main/logo.png';

interface HeaderProps {
  currentPage: 'home' | 'offer' | 'article' | 'models';
  setCurrentPage: (page: 'home' | 'offer' | 'article' | 'models') => void;
  language: 'ru' | 'en' ;
  setLanguage: (lang: 'ru' | 'en' ) => void;
  onTermsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  setCurrentPage, 
  language, 
  setLanguage, 
  onTermsClick 
}) => {
  const content = {
    ru: {
      menu: [
        { key: 'home', label: 'Главная' },
        { key: 'offer', label: 'Предложения' },
        { key: 'article', label: 'Статьи' },
        { key: 'models', label: 'Модели' }
      ],
      terms: 'Условия использования'
    },
    en: {
      menu: [
        { key: 'home', label: 'Home' },
        { key: 'offer', label: 'Offers' },
        { key: 'article', label: 'Articles' },
        { key: 'models', label: 'Models' }
      ],
      terms: 'Terms of Use'
    }
  };

  const t = content[language];

  const handleMenuClick = (itemKey: string) => {
    if (itemKey === 'offer') {
      // Якщо не на головній сторінці, спочатку переходимо на неї
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Чекаємо поки сторінка завантажиться, потім прокручуємо
        setTimeout(() => {
          const offersSection = document.getElementById('offers');
          if (offersSection) {
            offersSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Якщо вже на головній сторінці, просто прокручуємо
        const offersSection = document.getElementById('offers');
        if (offersSection) {
          offersSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setCurrentPage(itemKey as any);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => setCurrentPage('home')}>
            <img src={logo} alt="Undress Her" className="logo-image" />
          </div>
          
          <nav className="navigation">
            <ul className="nav-menu">
              {t.menu.map((item) => (
                <li key={item.key} className="nav-item">
                  <button
                    className={`nav-link ${currentPage === item.key ? 'active' : ''}`}
                    onClick={() => handleMenuClick(item.key)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-controls">
            <button className="terms-link" onClick={onTermsClick}>
              {t.terms}
            </button>
            
            <div className="language-switcher">
              <button 
                className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => setLanguage('ru')}
              >
                RU
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;