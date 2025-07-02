
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./OfferPage.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const OfferPage = _ref => {
  let {
    language
  } = _ref;
  const content = {
    ru: {
      title: 'НАШИ ПРЕДЛОЖЕНИЯ',
      subtitle: 'Выберите подходящий тариф',
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
      title: 'OUR OFFERS',
      subtitle: 'Choose the right plan',
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
    className: "offer-page",
    id: "offers"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "offer-header"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "offer-title neon-text"
  }, t.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "offer-subtitle"
  }, t.subtitle)), /*#__PURE__*/_react.default.createElement("div", {
    className: "plans-grid"
  }, t.plans.map((plan, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "plan-card ".concat(plan.popular ? 'popular' : '')
  }, plan.popular && /*#__PURE__*/_react.default.createElement("div", {
    className: "popular-badge"
  }, "\u041F\u041E\u041F\u0423\u041B\u042F\u0420\u041D\u042B\u0419"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "plan-name"
  }, plan.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "plan-price"
  }, plan.price), /*#__PURE__*/_react.default.createElement("ul", {
    className: "plan-features"
  }, plan.features.map((feature, idx) => /*#__PURE__*/_react.default.createElement("li", {
    key: idx
  }, feature))), /*#__PURE__*/_react.default.createElement("button", {
    className: "neon-button plan-button"
  }, plan.button))))));
};
var _default = exports.default = OfferPage;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = OfferPage;
  } else if (typeof window !== 'undefined') {
    window.OfferPage = OfferPage;
  }
})();
