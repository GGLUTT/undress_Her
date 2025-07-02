
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./ModelPage.css");
var _asian1Dressed = _interopRequireDefault(require("../../../img/models/gallery/asian-1-dressed.jpg"));
var _asian2Dressed = _interopRequireDefault(require("../../../img/models/gallery/asian-2-dressed.jpg"));
var _officeDressed = _interopRequireDefault(require("../../../img/models/gallery/office-dressed.jpg"));
var _gymDressed = _interopRequireDefault(require("../../../img/models/gallery/gym-dressed.jpg"));
var _gardenDressed = _interopRequireDefault(require("../../../img/models/gallery/garden-dressed.jpg"));
var _schDressed = _interopRequireDefault(require("../../../img/models/gallery/sch-dressed.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

const ModelPage = _ref => {
  let {
    language
  } = _ref;
  const [selectedModel, setSelectedModel] = (0, _react.useState)(null);
  const content = {
    ru: {
      title: 'МОДЕЛИ',
      subtitle: 'Галерея наших лучших работ',
      viewBtn: 'Просмотр',
      viewsText: 'просмотров',
      backBtn: 'Назад',
      age: 'Возраст',
      country: 'Страна',
      zodiac: 'Знак зодиака',
      description: 'Описание',
      models: [{
        id: 1,
        category: 'asian',
        title: 'Азиатская модель 1',
        views: '12.5K',
        image: _asian1Dressed.default,
        age: '23',
        country: 'Япония',
        zodiac: 'Близнецы',
        description: 'Элегантная азиатская модель с утонченными чертами лица'
      }, {
        id: 2,
        category: 'asian',
        title: 'Азиатская модель 2',
        views: '8.3K',
        image: _asian2Dressed.default,
        age: '25',
        country: 'Корея',
        zodiac: 'Лев',
        description: 'Стильная корейская модель с современным образом'
      }, {
        id: 3,
        category: 'office',
        title: 'Офисная леди',
        views: '15.7K',
        image: _officeDressed.default,
        age: '28',
        country: 'США',
        zodiac: 'Дева',
        description: 'Профессиональная бизнес-леди в элегантном костюме'
      }, {
        id: 4,
        category: 'gym',
        title: 'Спортивная модель',
        views: '9.1K',
        image: _gymDressed.default,
        age: '24',
        country: 'Германия',
        zodiac: 'Овен',
        description: 'Атлетичная модель в спортивной форме'
      }, {
        id: 5,
        category: 'garden',
        title: 'Садовая фея',
        views: '11.2K',
        image: _gardenDressed.default,
        age: '22',
        country: 'Франция',
        zodiac: 'Рыбы',
        description: 'Романтичная модель в саду среди цветов'
      }, {
        id: 6,
        category: 'office',
        title: 'Школьница',
        views: '13.8K',
        image: _schDressed.default,
        age: '19',
        country: 'Великобритания',
        zodiac: 'Весы',
        description: 'Молодая студентка в школьной форме'
      }]
    },
    en: {
      title: 'MODELS',
      subtitle: 'Gallery of our best works',
      viewBtn: 'View',
      viewsText: 'views',
      backBtn: 'Back',
      age: 'Age',
      country: 'Country',
      zodiac: 'Zodiac',
      description: 'Description',
      models: [{
        id: 1,
        category: 'asian',
        title: 'Asian Model 1',
        views: '12.5K',
        image: _asian1Dressed.default,
        age: '23',
        country: 'Japan',
        zodiac: 'Gemini',
        description: 'Elegant Asian model with refined facial features'
      }, {
        id: 2,
        category: 'asian',
        title: 'Asian Model 2',
        views: '8.3K',
        image: _asian2Dressed.default,
        age: '25',
        country: 'Korea',
        zodiac: 'Leo',
        description: 'Stylish Korean model with modern look'
      }, {
        id: 3,
        category: 'office',
        title: 'Office Lady',
        views: '15.7K',
        image: _officeDressed.default,
        age: '28',
        country: 'USA',
        zodiac: 'Virgo',
        description: 'Professional businesswoman in elegant suit'
      }, {
        id: 4,
        category: 'gym',
        title: 'Gym Model',
        views: '9.1K',
        image: _gymDressed.default,
        age: '24',
        country: 'Germany',
        zodiac: 'Aries',
        description: 'Athletic model in sportswear'
      }, {
        id: 5,
        category: 'garden',
        title: 'Garden Fairy',
        views: '11.2K',
        image: _gardenDressed.default,
        age: '22',
        country: 'France',
        zodiac: 'Pisces',
        description: 'Romantic model in garden among flowers'
      }, {
        id: 6,
        category: 'office',
        title: 'School Girl',
        views: '13.8K',
        image: _schDressed.default,
        age: '19',
        country: 'UK',
        zodiac: 'Libra',
        description: 'Young student in school uniform'
      }]
    }
  };
  const t = content[language];
  const handleModelClick = model => {
    setSelectedModel(model);
  };
  const handleBackClick = () => {
    setSelectedModel(null);
  };
  if (selectedModel) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "model-page"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "model-detail"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "back-btn-container"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "back-btn",
      onClick: handleBackClick
    }, "\u2190 ", t.backBtn)), /*#__PURE__*/_react.default.createElement("div", {
      className: "model-detail-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "model-detail-image"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: selectedModel.image,
      alt: selectedModel.title
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "model-detail-info"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "model-detail-title"
    }, selectedModel.title), /*#__PURE__*/_react.default.createElement("div", {
      className: "model-detail-table"
    }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "table-label"
    }, t.age, ":"), /*#__PURE__*/_react.default.createElement("td", {
      className: "table-value"
    }, selectedModel.age)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "table-label"
    }, t.country, ":"), /*#__PURE__*/_react.default.createElement("td", {
      className: "table-value"
    }, selectedModel.country)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "table-label"
    }, t.zodiac, ":"), /*#__PURE__*/_react.default.createElement("td", {
      className: "table-value"
    }, selectedModel.zodiac)), /*#__PURE__*/_react.default.createElement("tr", null)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "model-description"
    }, /*#__PURE__*/_react.default.createElement("h3", null, t.description), /*#__PURE__*/_react.default.createElement("p", null, selectedModel.description)))))));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "model-page"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "model-header"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "model-title neon-text"
  }, t.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "model-subtitle"
  }, t.subtitle)), /*#__PURE__*/_react.default.createElement("div", {
    className: "models-grid"
  }, t.models.map(model => /*#__PURE__*/_react.default.createElement("div", {
    key: model.id,
    className: "model-card",
    onClick: () => handleModelClick(model)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "model-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: model.image,
    alt: model.title
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "model-overlay"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "view-btn"
  }, t.viewBtn))), /*#__PURE__*/_react.default.createElement("div", {
    className: "model-info"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "model-name"
  }, model.title)))))));
};
var _default = exports.default = ModelPage;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModelPage;
  } else if (typeof window !== 'undefined') {
    window.ModelPage = ModelPage;
  }
})();
