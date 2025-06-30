import React from 'react';
import './ArticlePage.css';

interface ArticlePageProps {
  language: 'ru' | 'en';
}

const ArticlePage: React.FC<ArticlePageProps> = ({ language }) => {
  const content = {
    ru: {
      title: 'СТАТЬИ И НОВОСТИ',
      subtitle: 'Последние обновления и полезная информация о технологиях ИИ',
      readMore: 'Читать далее',
      articles: [
        {
          title: 'Как работает технология Undress Her',
          excerpt: 'Подробное объяснение алгоритмов машинного обучения, используемых в нашей платформе для обработки изображений.',
          date: '15 декабря 2024',
          readTime: '5 мин'
        },
        {
          title: 'Безопасность и конфиденциальность',
          excerpt: 'Узнайте, как мы защищаем ваши данные и обеспечиваем полную анонимность при использовании сервиса.',
          date: '12 декабря 2024',
          readTime: '3 мин'
        },
        {
          title: 'Обновление алгоритмов v2.0',
          excerpt: 'Новые возможности и улучшения качества обработки изображений с использованием передовых технологий.',
          date: '10 декабря 2024',
          readTime: '4 мин'
        },
        {
          title: 'Этические аспекты ИИ',
          excerpt: 'Обсуждение ответственного использования технологий искусственного интеллекта в современном мире.',
          date: '8 декабря 2024',
          readTime: '7 мин'
        }
      ]
    },
    en: {
      title: 'ARTICLES & NEWS',
      subtitle: 'Latest updates and useful information about AI technologies',
      readMore: 'Read More',
      articles: [
        {
          title: 'How Undress Her Technology Works',
          excerpt: 'Detailed explanation of machine learning algorithms used in our platform for image processing.',
          date: 'December 15, 2024',
          readTime: '5 min'
        },
        {
          title: 'Security and Privacy',
          excerpt: 'Learn how we protect your data and ensure complete anonymity when using our service.',
          date: 'December 12, 2024',
          readTime: '3 min'
        },
        {
          title: 'Algorithm Update v2.0',
          excerpt: 'New features and improvements in image processing quality using cutting-edge technologies.',
          date: 'December 10, 2024',
          readTime: '4 min'
        },
        {
          title: 'Ethical Aspects of AI',
          excerpt: 'Discussion of responsible use of artificial intelligence technologies in the modern world.',
          date: 'December 8, 2024',
          readTime: '7 min'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="article-page">
      <div className="container">
        <div className="article-header">
          <h1 className="article-title">{t.title}</h1>
          <p className="article-subtitle">{t.subtitle}</p>
        </div>
        
        <div className="articles-grid">
          {t.articles.map((article, index) => (
            <article key={index} className="article-card">
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-read-time">{article.readTime}</span>
              </div>
              <h3 className="article-card-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <button className="article-read-btn">{t.readMore}</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;