
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Gallery.css");
var _asian1Dressed = _interopRequireDefault(require("../../img/models/gallery/asian-1-dressed.jpg"));
var _asian1Undressed = _interopRequireDefault(require("../../img/models/gallery/asian-1-undressed.jpg"));
var _asian2Dressed = _interopRequireDefault(require("../../img/models/gallery/asian-2-dressed.jpg"));
var _asian2Undressed = _interopRequireDefault(require("../../img/models/gallery/asian-2-undressed.jpg"));
var _blackDressed = _interopRequireDefault(require("../../img/models/gallery/black-dressed.jpg"));
var _blackUndressed = _interopRequireDefault(require("../../img/models/gallery/black-undressed.jpg"));
var _gardenDressed = _interopRequireDefault(require("../../img/models/gallery/garden-dressed.jpg"));
var _gardenUndressed = _interopRequireDefault(require("../../img/models/gallery/garden-undressed.jpg"));
var _gymDressed = _interopRequireDefault(require("../../img/models/gallery/gym-dressed.jpg"));
var _gymUndressed = _interopRequireDefault(require("../../img/models/gallery/gym-undressed.jpg"));
var _officeDressed = _interopRequireDefault(require("../../img/models/gallery/office-dressed.jpg"));
var _officeUndressed = _interopRequireDefault(require("../../img/models/gallery/office-undressed.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

const Gallery = _ref => {
  let {
    language
  } = _ref;
  const content = {
    ru: {
      galleryTitle: 'ГАЛЕРЕЯ'
    },
    en: {
      galleryTitle: 'GALLERY'
    }
  };
  const galleryImages = [{
    dressed: _asian1Dressed.default,
    undressed: _asian1Undressed.default,
    alt: 'Asian Model 1'
  }, {
    dressed: _asian2Dressed.default,
    undressed: _asian2Undressed.default,
    alt: 'Asian Model 2'
  }, {
    dressed: _blackDressed.default,
    undressed: _blackUndressed.default,
    alt: 'Black Model'
  }, {
    dressed: _gardenDressed.default,
    undressed: _gardenUndressed.default,
    alt: 'Garden Scene'
  }, {
    dressed: _gymDressed.default,
    undressed: _gymUndressed.default,
    alt: 'Gym Scene'
  }, {
    dressed: _officeDressed.default,
    undressed: _officeUndressed.default,
    alt: 'Office Scene'
  }];
  const t = content[language];
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "gallery-section section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "section-title neon-text"
  }, t.galleryTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "gallery-grid"
  }, galleryImages.map((item, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "gallery-item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "gallery-image-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: item.dressed,
    alt: item.alt,
    className: "gallery-image gallery-image-dressed"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: item.undressed,
    alt: "".concat(item.alt, " - Undressed"),
    className: "gallery-image gallery-image-undressed"
  })))))));
};
var _default = exports.default = Gallery;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Gallery;
  } else if (typeof window !== 'undefined') {
    window.Gallery = Gallery;
  }
})();
