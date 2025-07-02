
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./HomePage.css");
var _BeforeAfterSlider = _interopRequireDefault(require("../../BeforeAfterSlider/BeforeAfterSlider"));
var _Benefits = _interopRequireDefault(require("../../Benefits/Benefits"));
var _HowItWorks = _interopRequireDefault(require("../../HowItWorks/HowItWorks"));
var _PhotoResults = _interopRequireDefault(require("../../PhotoResults/PhotoResults"));
var _Gallery = _interopRequireDefault(require("../../Gallery/Gallery"));
var _Security = _interopRequireDefault(require("../../Security/Security"));
var _ScrollToTopButton = _interopRequireDefault(require("../../ScrollToTopButton/ScrollToTopButton"));
var _imgDressed = _interopRequireDefault(require("../../../img/models/img-dressed.jpg"));
var _imgUndressed = _interopRequireDefault(require("../../../img/models/img-undressed.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

// @ts-ignore

// import OfferPage from '../OfferPage/OfferPage';

const HomePage = _ref => {
  let {
    language
  } = _ref;
  const content = {
    ru: {
      heroTitle: 'Undress Her',
      heroSubtitle: 'Революционная технология искусственного интеллекта',
      heroDescription: 'Создавайте потрясающие изображения с помощью передовых алгоритмов ИИ',
      tryButton: 'ПОПРОБОВАТЬ СЕЙЧАС',
      offersTitle: 'НАШИ ПРЕДЛОЖЕНИЯ',
      offersSubtitle: 'Выберите подходящий тариф',
      plans: [{
        name: 'БАЗОВЫЙ',
        price: 'БЕСПЛАТНО',
        features: ['3 изображения в день', 'Стандартное качество', 'Базовая обработка', 'Реклама'],
        button: 'НАЧАТЬ'
      }, {
        name: 'ПРЕМИУМ',
        price: '$9.99/мес',
        features: ['Безлимитные изображения', 'HD качество', 'Быстрая обработка', 'Без рекламы', 'Пrioритетная поддержка'],
        button: 'ВЫБРАТЬ',
        popular: true
      }, {
        name: 'ПРО',
        price: '$19.99/мес',
        features: ['Все функции Премиум', '4K качество', 'Мгновенная обработка', 'API доступ', 'Персональный менеджер'],
        button: 'ВЫБРАТЬ'
      }]
    },
    en: {
      heroTitle: 'Undress Her',
      heroSubtitle: 'Revolutionary Artificial Intelligence Technology',
      heroDescription: 'Create stunning images with advanced AI algorithms',
      tryButton: 'TRY NOW',
      offersTitle: 'OUR OFFERS',
      offersSubtitle: 'Choose the right plan',
      plans: [{
        name: 'BASIC',
        price: 'FREE',
        features: ['3 images per day', 'Standard quality', 'Basic processing', 'Ads'],
        button: 'START'
      }, {
        name: 'PREMIUM',
        price: '$9.99/mo',
        features: ['Unlimited images', 'HD quality', 'Fast processing', 'No ads', 'Priority support'],
        button: 'CHOOSE',
        popular: true
      }, {
        name: 'PRO',
        price: '$19.99/mo',
        features: ['All Premium features', '4K quality', 'Instant processing', 'API access', 'Personal manager'],
        button: 'CHOOSE'
      }]
    }
  };
  const t = content[language];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "home-page"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "hero-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "hero-title neon-text"
  }, t.heroTitle), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-subtitle"
  }, t.heroSubtitle), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-description"
  }, t.heroDescription), /*#__PURE__*/_react.default.createElement("button", {
    className: "neon-button hero-button"
  }, t.tryButton)))), /*#__PURE__*/_react.default.createElement("section", {
    className: "slider-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_BeforeAfterSlider.default, {
    beforeImage: _imgDressed.default,
    afterImage: _imgUndressed.default
  }))), /*#__PURE__*/_react.default.createElement(_Benefits.default, {
    language: language
  }), /*#__PURE__*/_react.default.createElement(_HowItWorks.default, {
    language: language
  }), /*#__PURE__*/_react.default.createElement(_PhotoResults.default, {
    language: language
  }), /*#__PURE__*/_react.default.createElement(_Gallery.default, {
    language: language
  }), /*#__PURE__*/_react.default.createElement(_Security.default, {
    language: language
  }), /*#__PURE__*/_react.default.createElement(_ScrollToTopButton.default, null));
};
var _default = exports.default = HomePage;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = HomePage;
  } else if (typeof window !== 'undefined') {
    window.HomePage = HomePage;
  }
})();
