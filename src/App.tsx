import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TermsPopup from './components/TermsPopup/TermsPopup';
import HomePage from './components/pages/HomePage/HomePage';
import OfferPage from './components/pages/OfferPage/OfferPage';
import ArticlePage from './components/pages/ArticlePage/ArticlePage';
import ModelPage from './components/pages/ModelPage/ModelPage';

type PageType = 'home' | 'offer' | 'article' | 'models';
type LanguageType = 'ru' | 'en';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [language, setLanguage] = useState<LanguageType>('ru');
  const [showTerms, setShowTerms] = useState(false);

  // Перевірка на вік юзера
  useEffect(() => {
    const termsAccepted = localStorage.getItem('termsAccepted');
    if (!termsAccepted) {
      setShowTerms(true);
    }
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const handleTermsAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setShowTerms(false);
  };

  const handleTermsDecline = () => {
    setShowTerms(false);
    alert('Для використання сайту необхідно прийняти умови використання.');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage language={language} />;
      case 'offer':
        return <OfferPage language={language} />;
      case 'article':
        return <ArticlePage language={language} />;
      case 'models':
        return <ModelPage language={language} />;
      default:
        return <HomePage language={language} />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
        onTermsClick={() => setShowTerms(true)}
      />
      
      <main className="main-content">
        {renderPage()}
      </main>
      
      <Footer 
        language={language}
        setCurrentPage={handlePageChange}
        onTermsClick={() => setShowTerms(true)}
      />
      
      {showTerms && (
        <TermsPopup 
          language={language}
          onClose={() => setShowTerms(false)}
          onAccept={handleTermsAccept}
          onDecline={handleTermsDecline}
        />
      )}
    </div>
  );
}

export default App;