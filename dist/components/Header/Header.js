
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Header.css");
var _logo = _interopRequireDefault(require("../../img/main/logo.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// @ts-ignore

const Header = _ref => {
  let {
    currentPage,
    setCurrentPage,
    language,
    setLanguage,
    onTermsClick
  } = _ref;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, _react.useState)(false);
  const content = {
    ru: {
      menu: [{
        key: 'home',
        label: 'Главная'
      }, {
        key: 'article',
        label: 'Статьи'
      }, {
        key: 'models',
        label: 'Модели'
      }]
    },
    en: {
      menu: [{
        key: 'home',
        label: 'Home'
      }, {
        key: 'offer',
        label: 'Offers'
      }, {
        key: 'article',
        label: 'Articles'
      }, {
        key: 'models',
        label: 'Models'
      }],
      terms: 'Terms of Use'
    }
  };
  const t = content[language];
  const handleMenuClick = itemKey => {
    if (itemKey === 'offer') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const offersSection = document.getElementById('offers');
          if (offersSection) {
            offersSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        const offersSection = document.getElementById('offers');
        if (offersSection) {
          offersSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    } else {
      setCurrentPage(itemKey);
    }
    setIsMobileMenuOpen(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo",
    onClick: () => setCurrentPage('home')
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "Undress Her",
    className: "logo-image"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "burger-menu ".concat(isMobileMenuOpen ? 'active' : ''),
    onClick: toggleMobileMenu,
    "aria-label": "Toggle menu"
  }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null)), /*#__PURE__*/_react.default.createElement("nav", {
    className: "navigation desktop-nav"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav-menu"
  }, t.menu.map(item => /*#__PURE__*/_react.default.createElement("li", {
    key: item.key,
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "nav-link ".concat(currentPage === item.key ? 'active' : ''),
    onClick: () => handleMenuClick(item.key)
  }, item.label))))), /*#__PURE__*/_react.default.createElement("nav", {
    className: "mobile-navigation ".concat(isMobileMenuOpen ? 'open' : '')
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "mobile-nav-menu"
  }, t.menu.map(item => /*#__PURE__*/_react.default.createElement("li", {
    key: item.key,
    className: "mobile-nav-item"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "mobile-nav-link ".concat(currentPage === item.key ? 'active' : ''),
    onClick: () => handleMenuClick(item.key)
  }, item.label))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "header-controls"
  }))));
};
var _default = exports.default = Header;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Header;
  } else if (typeof window !== 'undefined') {
    window.Header = Header;
  }
})();
