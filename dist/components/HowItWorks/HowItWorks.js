
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./HowItWorks.css");
var _imgDressed = _interopRequireDefault(require("../../img/models/img-dressed.jpg"));
var _imgUndressed = _interopRequireDefault(require("../../img/models/img-undressed.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

// @ts-ignore

const HowItWorks = _ref => {
  let {
    language
  } = _ref;
  const content = {
    ru: {
      title: 'Как работает Undress Her',
      description: 'Снимки с девушкой одеждой в пару кликов!',
      features: ['Undress AI является инструментом для создания изображений. Загрузите фотографию и пользователь сможет увидеть результат.', 'Искусственный интеллект видит обнаженное тело того, что изображено на снимке.', 'Технология DeepNude все популярнее среди пользователей, так как позволяет создавать фото обнаженного тела.', 'Undress AI App обучен на сотнях тысяч фотографий. AI создает реалистичный и максимально правдоподобный результат за несколько секунд.']
    },
    en: {
      title: 'How does Undress Her work?',
      description: 'Photos with a girl dressed in a couple of clicks!',
      features: ['Undress AI is a tool for creating images. Upload a photo and the user will be able to see the result.', 'Artificial intelligence sees the naked body of what is depicted in the picture.', 'DeepNude technology is becoming more popular among users, as it allows you to create photos of naked bodies.', 'Undress AI App is trained on hundreds of thousands of photos. AI creates realistic and most plausible results in seconds.']
    }
  };
  const t = content[language];
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "how-it-works-section section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "how-it-works-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "how-it-works-text"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "how-it-works-title"
  }, t.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "how-it-works-description"
  }, t.description), /*#__PURE__*/_react.default.createElement("div", {
    className: "how-it-works-features"
  }, t.features.map((feature, index) => /*#__PURE__*/_react.default.createElement("p", {
    key: index,
    className: "feature-text"
  }, feature)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "how-it-works-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "demo-image-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _imgDressed.default,
    alt: "Demo Dressed",
    className: "demo-image demo-image-dressed"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: _imgUndressed.default,
    alt: "Demo Undressed",
    className: "demo-image demo-image-undressed"
  }))))));
};
var _default = exports.default = HowItWorks;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = HowItWorks;
  } else if (typeof window !== 'undefined') {
    window.HowItWorks = HowItWorks;
  }
})();
