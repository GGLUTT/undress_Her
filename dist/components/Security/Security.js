
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Security.css");
var _key = _interopRequireDefault(require("../../img/icons/key.png"));
var _laptop = _interopRequireDefault(require("../../img/icons/laptop.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

// @ts-ignore

const Security = _ref => {
  let {
    language
  } = _ref;
  const content = {
    ru: {
      title: 'Безопасность и надежность сервиса',
      subtitle: 'При выборе онлайн-сервиса для создания DeepNude изображений отдавайте предпочтение тем, которые предлагают надежные меры безопасности и защиты.',
      description: 'Наш сервис использует передовые технологии искусственного интеллекта для обеспечения исключительного редактирования изображений без хранения ваших изображений или личных данных.',
      additionalText: 'Это означает, что вы можете редактировать со спокойной душой, зная, что ваша конфиденциальность защищена. Ваши изображения обрабатываются в режиме реального времени, а затем сразу же удаляются, не оставляя никаких следов вашей работы. Такой подход обеспечивает максимальную безопасность и исключает риск утечки данных или несанкционированного доступа.',
      features: ['Локальная обработка изображений', 'Отсутствие хранения данных', 'Шифрование всех передач', 'Анонимность пользователей']
    },
    en: {
      title: 'Security and Service Reliability',
      subtitle: 'When choosing an online service for creating DeepNude images, give preference to those that offer reliable security and protection measures.',
      description: 'Our service uses advanced artificial intelligence technologies to provide exceptional image editing without storing your images or personal data.',
      additionalText: 'This means you can edit with peace of mind, knowing that your privacy is protected. Your images are processed in real time and then immediately deleted, leaving no traces of your work. This approach ensures maximum security and eliminates the risk of data leaks or unauthorized access.',
      features: ['Local image processing', 'No data storage', 'Encryption of all transfers', 'User anonymity']
    }
  };
  const t = content[language];
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "security-reliability-section section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-text-content"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "security-reliability-title neon-text"
  }, t.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "security-reliability-subtitle"
  }, t.subtitle), /*#__PURE__*/_react.default.createElement("p", {
    className: "security-reliability-description"
  }, t.description), /*#__PURE__*/_react.default.createElement("p", {
    className: "security-reliability-additional"
  }, t.additionalText), /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-features"
  }, t.features.map((feature, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "security-reliability-feature"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _key.default,
    alt: "Security",
    className: "security-reliability-feature-icon"
  }), /*#__PURE__*/_react.default.createElement("span", null, feature))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-visual"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-illustration"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _laptop.default,
    alt: "Secure laptop",
    className: "security-reliability-laptop-icon"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-particles"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-particle"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-particle"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-particle"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "security-reliability-particle"
  })))))));
};
var _default = exports.default = Security;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Security;
  } else if (typeof window !== 'undefined') {
    window.Security = Security;
  }
})();
