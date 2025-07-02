
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
require("./ArticlePage.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ArticlePage = _ref => {
  let {
    language
  } = _ref;
  const navigate = (0, _reactRouterDom.useNavigate)();
  const content = {
    ru: {
      title: 'СТАТЬИ И НОВОСТИ',
      subtitle: 'Последние обновления и полезная информация о технологиях ИИ',
      readMore: 'Читать далее',
      articles: [{
        id: 'undress-her-technology',
        title: 'Как работает технология Undress Her',
        excerpt: 'Подробное объяснение алгоритмов машинного обучения, используемых в нашей платформе для обработки изображений.',
        date: '15 декабря 2024',
        readTime: '5 мин'
      }, {
        id: 'security-privacy',
        title: 'Безопасность и конфиденциальность',
        excerpt: 'Узнайте, как мы защищаем ваши данные и обеспечиваем полную анонимность при использовании сервиса.',
        date: '12 декабря 2024',
        readTime: '3 мин'
      }, {
        id: 'algorithm-update',
        title: 'Обновление алгоритмов v2.0',
        excerpt: 'Новые возможности и улучшения качества обработки изображений с использованием передовых технологий.',
        date: '10 декабря 2024',
        readTime: '4 мин'
      }, {
        id: 'ai-ethics',
        title: 'Этические аспекты ИИ',
        excerpt: 'Обсуждение ответственного использования технологий искусственного интеллекта в современном мире.',
        date: '8 декабря 2024',
        readTime: '7 мин'
      }]
    },
    en: {
      title: 'ARTICLES & NEWS',
      subtitle: 'Latest updates and useful information about AI technologies',
      readMore: 'Read More',
      articles: [{
        id: 'undress-her-technology',
        title: 'How Undress Her Technology Works',
        excerpt: 'Detailed explanation of machine learning algorithms used in our platform for image processing.',
        date: 'December 15, 2024',
        readTime: '5 min'
      }, {
        id: 'security-privacy',
        title: 'Security and Privacy',
        excerpt: 'Learn how we protect your data and ensure complete anonymity when using our service.',
        date: 'December 12, 2024',
        readTime: '3 min'
      }, {
        id: 'algorithm-update',
        title: 'Algorithm Update v2.0',
        excerpt: 'New features and improvements in image processing quality using cutting-edge technologies.',
        date: 'December 10, 2024',
        readTime: '4 min'
      }, {
        id: 'ai-ethics',
        title: 'Ethical Aspects of AI',
        excerpt: 'Discussion of responsible use of artificial intelligence technologies in the modern world.',
        date: 'December 8, 2024',
        readTime: '7 min'
      }]
    }
  };
  const t = content[language];
  const handleReadMore = articleId => {
    navigate("/articles/".concat(articleId));
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "article-page"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "article-header"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "article-title"
  }, t.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "article-subtitle"
  }, t.subtitle)), /*#__PURE__*/_react.default.createElement("div", {
    className: "articles-grid"
  }, t.articles.map((article, index) => /*#__PURE__*/_react.default.createElement("article", {
    key: index,
    className: "article-card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "article-meta"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "article-date"
  }, article.date), /*#__PURE__*/_react.default.createElement("span", {
    className: "article-read-time"
  }, article.readTime)), /*#__PURE__*/_react.default.createElement("h3", {
    className: "article-card-title"
  }, article.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "article-excerpt"
  }, article.excerpt), /*#__PURE__*/_react.default.createElement("button", {
    className: "article-read-btn",
    onClick: () => handleReadMore(article.id)
  }, t.readMore))))));
};
var _default = exports.default = ArticlePage;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ArticlePage;
  } else if (typeof window !== 'undefined') {
    window.ArticlePage = ArticlePage;
  }
})();
