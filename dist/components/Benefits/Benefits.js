
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Benefits.css");
var _check = _interopRequireDefault(require("../../img/icons/check.png"));
var _bulb = _interopRequireDefault(require("../../img/icons/bulb.png"));
var _key = _interopRequireDefault(require("../../img/icons/key.png"));
var _loveYourself = _interopRequireDefault(require("../../img/icons/love-yourself.png"));
var _donut = _interopRequireDefault(require("../../img/icons/donut.png"));
var _money = _interopRequireDefault(require("../../img/icons/money.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

const Benefits = _ref => {
  let {
    language
  } = _ref;
  const content = {
    ru: {
      title: 'ПРЕИМУЩЕСТВА UNDRESS HER',
      subtitle: 'Сервис Undress Her имеет множество преимуществ перед конкурентами, которые делают его лучшим. Вот некоторые из них:',
      benefits: [{
        icon: _check.default,
        title: 'Простой и удобный интерфейс',
        description: 'Раздень девушку одним нажатием кнопки! Nude photo maker имеет интуитивно понятный интерфейс и множество опций кастомизации.'
      }, {
        icon: _bulb.default,
        title: 'Высокое качество',
        description: 'В базе редактора обнаженных фото более 15 миллионов изображений и свыше 5 тысяч часов обучения ИИ.'
      }, {
        icon: _loveYourself.default,
        title: 'Любимчик пользователей',
        description: 'Более 8 тысяч довольных клиентов и множество восторженных отзывов.'
      }, {
        icon: _key.default,
        title: 'Безопасность и конфиденциальность',
        description: 'Мы не храним данные и фото пользователей.'
      }, {
        icon: _donut.default,
        title: 'Уникальные изображения',
        description: 'Каждое изображение уникально и не встречается больше нигде в Интернете. Мы воссоздаем анатомию тела на основе загруженной фотографии, чтобы обеспечить максимальный результат.'
      }, {
        icon: _money.default,
        title: 'Доступные цены',
        description: 'Мы предлагаем различные пакеты, включая бесплатное использование, чтобы каждый мог попробовать наш сервис. Наши цены самые низкие на рынке.'
      }]
    },
    en: {
      title: 'UNDRESS AI ADVANTAGES',
      subtitle: 'Undress AI service has many advantages over competitors that make it the best. Here are some of them:',
      benefits: [{
        icon: _check.default,
        title: 'Simple and Convenient Interface',
        description: 'Undress a girl with one click! Nude photo maker has an intuitive interface and many customization options.'
      }, {
        icon: _bulb.default,
        title: 'High Quality',
        description: 'The nude photo editor database contains over 15 million images and over 5 thousand hours of AI training.'
      }, {
        icon: _loveYourself.default,
        title: 'User Favorite',
        description: 'More than 8 thousand satisfied customers and many enthusiastic reviews.'
      }, {
        icon: _key.default,
        title: 'Security and Privacy',
        description: 'We do not store user data and photos.'
      }, {
        icon: _donut.default,
        title: 'Unique Images',
        description: 'Each image is unique and not found anywhere else on the Internet. We recreate body anatomy based on uploaded photos to ensure maximum results.'
      }, {
        icon: _money.default,
        title: 'Affordable Prices',
        description: 'We offer various packages, including free usage, so everyone can try our service. Our prices are the lowest on the market.'
      }]
    }
  };
  const t = content[language];
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "benefits-section section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "benefits-header"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "section-title neon-text"
  }, t.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "benefits-subtitle"
  }, t.subtitle)), /*#__PURE__*/_react.default.createElement("div", {
    className: "benefits-grid"
  }, t.benefits.map((benefit, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "benefit-card",
    "data-aos": "fade-up",
    "data-aos-delay": index * 100
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "benefit-icon"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: benefit.icon,
    alt: benefit.title
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "benefit-content"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "benefit-title"
  }, benefit.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "benefit-desc"
  }, benefit.description)))))));
};
var _default = exports.default = Benefits;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Benefits;
  } else if (typeof window !== 'undefined') {
    window.Benefits = Benefits;
  }
})();
