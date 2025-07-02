
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./TermsPopup.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TermsPopup = _ref => {
  let {
    language,
    onClose,
    onAccept,
    onDecline
  } = _ref;
  const content = {
    ru: {
      title: 'Условия использования',
      message: 'Перед использованием сервиса согласитесь с условиями:',
      terms: ['Вам должно быть более 18 лет', 'Запрещено использование фотографий других лиц без согласия', 'Вы несете ответственность за создаваемые изображения', 'Сервис предназначен для личного использования'],
      decline: 'Отклонить',
      accept: 'Принять'
    },
    en: {
      title: 'Terms of Use',
      message: 'Please agree to the terms before using the service:',
      terms: ['You must be over 18 years old', 'Using photos of others without consent is prohibited', 'You are responsible for the images you create', 'Service is intended for personal use only'],
      decline: 'Decline',
      accept: 'Accept'
    }
  };
  const currentContent = content[language] || content.en;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "terms-overlay",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "terms-popup",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "terms-close",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("div", {
    className: "terms-header"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "terms-title"
  }, currentContent.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "terms-content"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "terms-message"
  }, currentContent.message), /*#__PURE__*/_react.default.createElement("ul", {
    className: "terms-list"
  }, currentContent.terms.map((term, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index
  }, term)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "terms-actions"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "terms-button terms-decline",
    onClick: onDecline
  }, currentContent.decline), /*#__PURE__*/_react.default.createElement("button", {
    className: "terms-button terms-accept",
    onClick: onAccept
  }, currentContent.accept))));
};
var _default = exports.default = TermsPopup;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TermsPopup;
  } else if (typeof window !== 'undefined') {
    window.TermsPopup = TermsPopup;
  }
})();
