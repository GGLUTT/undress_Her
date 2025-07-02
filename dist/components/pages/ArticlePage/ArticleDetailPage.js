
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
require("./ArticleDetailPage.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ArticleDetailPage = _ref => {
  let {
    language
  } = _ref;
  const {
    articleId
  } = (0, _reactRouterDom.useParams)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const articles = {
    ru: {
      'undress-her-technology': {
        title: 'Как работает технология Undress Her',
        date: '15 декабря 2024',
        readTime: '5 мин',
        content: "\n          <p>\u041D\u0430\u0448\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u044B\u0435 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B \u043C\u0430\u0448\u0438\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439. \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0445 \u043D\u0435\u0439\u0440\u043E\u043D\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445.</p>\n          \n          <p>\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043C\u043E\u0434\u0443\u043B\u044F \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u043D\u0435\u0439\u0440\u043E\u043D\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0438 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430.</p>\n          \n          <p>\u0412\u0441\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E \u0438 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445. \u041C\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043F\u043E\u043B\u043D\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.</p>\n        "
      },
      'security-privacy': {
        title: 'Безопасность и конфиденциальность',
        date: '12 декабря 2024',
        readTime: '3 мин',
        content: "\n          <p>\u041C\u044B \u0441\u0435\u0440\u044C\u0435\u0437\u043D\u043E \u043E\u0442\u043D\u043E\u0441\u0438\u043C\u0441\u044F \u043A \u0437\u0430\u0449\u0438\u0442\u0435 \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.</p>\n          \n          <p>\u0412\u0441\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435. \u041C\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0438 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C \u0432\u0430\u0448\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.</p>\n          \n          <p>\u0412\u0441\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u0430 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0430\u043C\u0438 \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u044F SSL/TLS.</p>\n        "
      },
      'algorithm-update': {
        title: 'Обновление алгоритмов v2.0',
        date: '10 декабря 2024',
        readTime: '4 мин',
        content: "\n          <p>\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430\u0448\u0438\u0445 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u043E\u0432 \u0441 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E\u043C \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0439.</p>\n          \n          <p>\u041D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043D\u0430 40% \u0431\u043E\u043B\u0435\u0435 \u0442\u043E\u0447\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0438 \u0432 2 \u0440\u0430\u0437\u0430 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443.</p>\n          \n          <p>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0432 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u0432\u043A\u043B\u044E\u0447\u0430\u044F HEIC \u0438 WebP.</p>\n        "
      },
      'ai-ethics': {
        title: 'Этические аспекты ИИ',
        date: '8 декабря 2024',
        readTime: '7 мин',
        content: "\n          <p>\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0430 \u0441\u0442\u0430\u0432\u0438\u0442 \u043F\u0435\u0440\u0435\u0434 \u043D\u0430\u043C\u0438 \u0432\u0430\u0436\u043D\u044B\u0435 \u044D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.</p>\n          \n          <p>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0434\u043E\u043B\u0436\u043D\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u044F\u0432\u043D\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432.</p>\n          \n          <p>\u041C\u044B \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435\u043C \u043E\u0441\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u0445 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F\u0445 \u0418\u0418.</p>\n        "
      }
    },
    en: {
      'undress-her-technology': {
        title: 'How Undress Her Technology Works',
        date: 'December 15, 2024',
        readTime: '5 min',
        content: "\n          <p>Our platform uses advanced machine learning algorithms for image processing based on deep neural networks.</p>\n          \n          <p>The system consists of preprocessing module, neural network for analysis and result generation algorithm.</p>\n          \n          <p>All images are processed locally and not stored on our servers. We guarantee complete data confidentiality.</p>\n        "
      },
      'security-privacy': {
        title: 'Security and Privacy',
        date: 'December 12, 2024',
        readTime: '3 min',
        content: "\n          <p>We take the protection of your personal data and privacy seriously.</p>\n          \n          <p>All images are processed exclusively on your device. We do not upload or store your images.</p>\n          \n          <p>All data transmission is protected by modern SSL/TLS encryption protocols.</p>\n        "
      },
      'algorithm-update': {
        title: 'Algorithm Update v2.0',
        date: 'December 10, 2024',
        readTime: '4 min',
        content: "\n          <p>We introduce a significant update to our algorithms with numerous improvements.</p>\n          \n          <p>The new version provides 40% more accurate results and 2x faster processing.</p>\n          \n          <p>Added support for additional image formats, including HEIC and WebP.</p>\n        "
      },
      'ai-ethics': {
        title: 'Ethical Aspects of AI',
        date: 'December 8, 2024',
        readTime: '7 min',
        content: "\n          <p>AI technology development raises important ethical questions that require consideration.</p>\n          \n          <p>Image processing technologies should only be used with explicit consent from participants.</p>\n          \n          <p>We actively work to raise user awareness about AI capabilities and limitations.</p>\n        "
      }
    }
  };
  const currentArticles = articles[language];
  const article = articleId ? currentArticles[articleId] : null;
  if (!article) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "article-detail-page"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "article-not-found"
    }, /*#__PURE__*/_react.default.createElement("h1", null, language === 'ru' ? 'Статья не найдена' : 'Article not found'), /*#__PURE__*/_react.default.createElement("button", {
      onClick: () => navigate('/articles'),
      className: "back-btn"
    }, language === 'ru' ? 'Вернуться к статьям' : 'Back to articles'))));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "article-detail-page"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => navigate('/articles'),
    className: "back-btn"
  }, "\u2190 ", language === 'ru' ? 'Назад к статьям' : 'Back to articles'), /*#__PURE__*/_react.default.createElement("article", {
    className: "article-detail"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "article-detail-title"
  }, article.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "article-detail-meta"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "article-detail-date"
  }, article.date), /*#__PURE__*/_react.default.createElement("span", {
    className: "article-detail-read-time"
  }, article.readTime)), /*#__PURE__*/_react.default.createElement("div", {
    className: "article-detail-content",
    dangerouslySetInnerHTML: {
      __html: article.content
    }
  }))));
};
var _default = exports.default = ArticleDetailPage;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ArticleDetailPage;
  } else if (typeof window !== 'undefined') {
    window.ArticleDetailPage = ArticleDetailPage;
  }
})();
