
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./PhotoResults.css");
var _gardenDressed = _interopRequireDefault(require("../../img/models/gallery/garden-dressed.jpg"));
var _gardenUndressed = _interopRequireDefault(require("../../img/models/gallery/garden-undressed.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

// @ts-ignore

const PhotoResults = _ref => {
  let {
    language
  } = _ref;
  const content = {
    ru: {
      title: 'Как выглядят фото после обработки?',
      description: 'На сайте мы предлагаем ознакомиться с примерами работ AI.',
      subtitle: 'После обработки фотоснимка пользователь получает максимально реалистичный вариант обнаженного тела с предоставленного фото.',
      features: ['Мгновенно обрабатывает полученное фото, искусственный интеллект воссоздает особенности фигуры, скрытые под одеждой, чтобы создать достоверный образ человека на фотоснимке.']
    },
    en: {
      title: 'How do photos look after processing?',
      description: 'On the site we offer to get acquainted with examples of AI work.',
      subtitle: 'After processing the photo, the user receives the most realistic version of the naked body from the provided photo.',
      features: ['Instantly processes the received photo, artificial intelligence recreates the features of the figure hidden under clothes to create a reliable image of a person in the photo.']
    }
  };
  const t = content[language];
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "photo-results-section section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-results-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-results-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "result-image-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _gardenDressed.default,
    alt: "Result Demo Dressed",
    className: "result-image result-image-dressed"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: _gardenUndressed.default,
    alt: "Result Demo Undressed",
    className: "result-image result-image-undressed"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-results-text"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "photo-results-title"
  }, t.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "photo-results-description"
  }, t.description), /*#__PURE__*/_react.default.createElement("p", {
    className: "photo-results-subtitle"
  }, t.subtitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-results-features"
  }, t.features.map((feature, index) => /*#__PURE__*/_react.default.createElement("p", {
    key: index,
    className: "feature-text"
  }, feature)))))));
};
var _default = exports.default = PhotoResults;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = PhotoResults;
  } else if (typeof window !== 'undefined') {
    window.PhotoResults = PhotoResults;
  }
})();
