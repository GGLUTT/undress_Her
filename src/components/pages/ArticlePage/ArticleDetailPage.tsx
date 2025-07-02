import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArticleDetailPage.css';

interface ArticleDetailPageProps {
  language: 'ru' | 'en';
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ language }) => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  const articles = {
    ru: {
      'undress-her-technology': {
        title: 'Как работает технология Undress Her',
        date: '15 декабря 2024',
        readTime: '5 мин',
        content: `
          <p>Наша платформа использует передовые алгоритмы машинного обучения для обработки изображений. Технология основана на глубоких нейронных сетях.</p>
          
          <p>Система состоит из модуля предварительной обработки, нейронной сети для анализа и алгоритма генерации результата.</p>
          
          <p>Все изображения обрабатываются локально и не сохраняются на наших серверах. Мы гарантируем полную конфиденциальность ваших данных.</p>
        `
      },
      'security-privacy': {
        title: 'Безопасность и конфиденциальность',
        date: '12 декабря 2024',
        readTime: '3 мин',
        content: `
          <p>Мы серьезно относимся к защите ваших персональных данных и конфиденциальности.</p>
          
          <p>Все изображения обрабатываются исключительно на вашем устройстве. Мы не загружаем и не сохраняем ваши изображения.</p>
          
          <p>Вся передача данных защищена современными протоколами шифрования SSL/TLS.</p>
        `
      },
      'algorithm-update': {
        title: 'Обновление алгоритмов v2.0',
        date: '10 декабря 2024',
        readTime: '4 мин',
        content: `
          <p>Представляем значительное обновление наших алгоритмов с множеством улучшений.</p>
          
          <p>Новая версия обеспечивает на 40% более точные результаты и в 2 раза быстрее обработку.</p>
          
          <p>Добавлена поддержка дополнительных форматов изображений, включая HEIC и WebP.</p>
        `
      },
      'ai-ethics': {
        title: 'Этические аспекты ИИ',
        date: '8 декабря 2024',
        readTime: '7 мин',
        content: `
          <p>Развитие технологий искусственного интеллекта ставит перед нами важные этические вопросы.</p>
          
          <p>Использование технологий обработки изображений должно происходить только с явного согласия участников.</p>
          
          <p>Мы активно работаем над повышением осведомленности пользователей о возможностях и ограничениях ИИ.</p>
        `
      }
    },
    en: {
      'undress-her-technology': {
        title: 'How Undress Her Technology Works',
        date: 'December 15, 2024',
        readTime: '5 min',
        content: `
          <p>Our platform uses advanced machine learning algorithms for image processing based on deep neural networks.</p>
          
          <p>The system consists of preprocessing module, neural network for analysis and result generation algorithm.</p>
          
          <p>All images are processed locally and not stored on our servers. We guarantee complete data confidentiality.</p>
        `
      },
      'security-privacy': {
        title: 'Security and Privacy',
        date: 'December 12, 2024',
        readTime: '3 min',
        content: `
          <p>We take the protection of your personal data and privacy seriously.</p>
          
          <p>All images are processed exclusively on your device. We do not upload or store your images.</p>
          
          <p>All data transmission is protected by modern SSL/TLS encryption protocols.</p>
        `
      },
      'algorithm-update': {
        title: 'Algorithm Update v2.0',
        date: 'December 10, 2024',
        readTime: '4 min',
        content: `
          <p>We introduce a significant update to our algorithms with numerous improvements.</p>
          
          <p>The new version provides 40% more accurate results and 2x faster processing.</p>
          
          <p>Added support for additional image formats, including HEIC and WebP.</p>
        `
      },
      'ai-ethics': {
        title: 'Ethical Aspects of AI',
        date: 'December 8, 2024',
        readTime: '7 min',
        content: `
          <p>AI technology development raises important ethical questions that require consideration.</p>
          
          <p>Image processing technologies should only be used with explicit consent from participants.</p>
          
          <p>We actively work to raise user awareness about AI capabilities and limitations.</p>
        `
      }
    }
  };

  const currentArticles = articles[language];
  const article = articleId ? currentArticles[articleId as keyof typeof currentArticles] : null;

  if (!article) {
    return (
      <div className="article-detail-page">
        <div className="container">
          <div className="article-not-found">
            <h1>{language === 'ru' ? 'Статья не найдена' : 'Article not found'}</h1>
            <button onClick={() => navigate('/articles')} className="back-btn">
              {language === 'ru' ? 'Вернуться к статьям' : 'Back to articles'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <div className="container">
        <button onClick={() => navigate('/articles')} className="back-btn">
          ← {language === 'ru' ? 'Назад к статьям' : 'Back to articles'}
        </button>
        
        <article className="article-detail">
          <h1 className="article-detail-title">{article.title}</h1>
          
          <div className="article-detail-meta">
            <span className="article-detail-date">{article.date}</span>
            <span className="article-detail-read-time">{article.readTime}</span>
          </div>
          
          <div 
            className="article-detail-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default ArticleDetailPage;