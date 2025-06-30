import React from 'react';
import './TermsPopup.css';

interface TermsPopupProps {
  language: 'ru' | 'en';
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

const TermsPopup: React.FC<TermsPopupProps> = ({ language, onClose, onAccept, onDecline }) => {
  const content = {
    ru: {
      title: 'Условия использования',
      message: 'Перед использованием сервиса согласитесь с условиями:',
      terms: [
        'Вам должно быть более 18 лет',
        'Запрещено использование фотографий других лиц без согласия',
        'Вы несете ответственность за создаваемые изображения',
        'Сервис предназначен для личного использования'
      ],
      decline: 'Отклонить',
      accept: 'Принять'
    },
    en: {
      title: 'Terms of Use',
      message: 'Please agree to the terms before using the service:',
      terms: [
        'You must be over 18 years old',
        'Using photos of others without consent is prohibited',
        'You are responsible for the images you create',
        'Service is intended for personal use only'
      ],
      decline: 'Decline',
      accept: 'Accept'
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <div className="terms-overlay" onClick={onClose}>
      <div className="terms-popup" onClick={(e) => e.stopPropagation()}>
        <button className="terms-close" onClick={onClose}>
          ×
        </button>
        
        <div className="terms-header">
          <h2 className="terms-title">{currentContent.title}</h2>
        </div>
        
        <div className="terms-content">
          <p className="terms-message">{currentContent.message}</p>
          
          <ul className="terms-list">
            {currentContent.terms.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        </div>
        
        <div className="terms-actions">
          <button className="terms-button terms-decline" onClick={onDecline}>
            {currentContent.decline}
          </button>
          <button className="terms-button terms-accept" onClick={onAccept}>
            {currentContent.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsPopup;