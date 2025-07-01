import React, { useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const content = {
    ru: {
      menu: [
        { key: 'home', label: 'Главная' },
        { key: 'article', label: 'Статьи' },
        { key: 'models', label: 'Модели' }
      ],
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
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const offersSection = document.getElementById('offers');
          if (offersSection) {
            offersSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const offersSection = document.getElementById('offers');
        if (offersSection) {
          offersSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setCurrentPage(itemKey as any);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => setCurrentPage('home')}>
            <img src={logo} alt="Undress Her" className="logo-image" />
          </div>
          
          <button 
            className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className="navigation desktop-nav">
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

          <nav className={`mobile-navigation ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-menu">
              {t.menu.map((item) => (
                <li key={item.key} className="mobile-nav-item">
                  <button
                    className={`mobile-nav-link ${currentPage === item.key ? 'active' : ''}`}
                    onClick={() => handleMenuClick(item.key)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-controls">
            {/* Закоментовані елементи можна розкоментувати за потреби */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;