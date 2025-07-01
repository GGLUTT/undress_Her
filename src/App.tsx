import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

function AppContent() {
  const [language, setLanguage] = useState<LanguageType>('ru');
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Визначаємо поточну сторінку на основі URL
  const getCurrentPage = (): PageType => {
    const path = location.pathname;
    if (path === '/home' || path === '/') return 'home';
    if (path === '/offer') return 'offer';
    if (path === '/articles') return 'article';
    if (path === '/models') return 'models';
    return 'home';
  };

  const currentPage = getCurrentPage();

  // Перевірка на вік юзера
  useEffect(() => {
    const termsAccepted = localStorage.getItem('termsAccepted');
    if (!termsAccepted) {
      setShowTerms(true);
    }
  }, []);

  // Редірект з / на /home (оновлено для HashRouter)
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '') {
      navigate('/home', { replace: true });
    }
  }, [location.pathname, navigate]);

  const handlePageChange = (page: PageType) => {
    switch (page) {
      case 'home':
        navigate('/home');
        break;
      case 'offer':
        navigate('/offer');
        break;
      case 'article':
        navigate('/articles');
        break;
      case 'models':
        navigate('/models');
        break;
    }
  };

  const handleTermsAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setShowTerms(false);
  };

  const handleTermsDecline = () => {
    setShowTerms(false);
    alert('Для використання сайту необхідно прийняти умови використання.');
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        language={language}
        setLanguage={setLanguage}
        onTermsClick={() => setShowTerms(true)}
      />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/home" element={<HomePage language={language} />} />
          <Route path="/offer" element={<OfferPage language={language} />} />
          <Route path="/articles" element={<ArticlePage language={language} />} />
          <Route path="/models" element={<ModelPage language={language} />} />
        </Routes>
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

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;