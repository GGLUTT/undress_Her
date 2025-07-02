
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
require("./App.css");
var _Header = _interopRequireDefault(require("./components/Header/Header"));
var _Footer = _interopRequireDefault(require("./components/Footer/Footer"));
var _TermsPopup = _interopRequireDefault(require("./components/TermsPopup/TermsPopup"));
var _HomePage = _interopRequireDefault(require("./components/pages/HomePage/HomePage"));
var _OfferPage = _interopRequireDefault(require("./components/pages/OfferPage/OfferPage"));
var _ArticlePage = _interopRequireDefault(require("./components/pages/ArticlePage/ArticlePage"));
var _ArticleDetailPage = _interopRequireDefault(require("./components/pages/ArticlePage/ArticleDetailPage"));
var _ModelPage = _interopRequireDefault(require("./components/pages/ModelPage/ModelPage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function AppContent() {
  const [language, setLanguage] = (0, _react.useState)('ru');
  const [showTerms, setShowTerms] = (0, _react.useState)(false);
  const navigate = (0, _reactRouterDom.useNavigate)();
  const location = (0, _reactRouterDom.useLocation)();

  // Визначаємо поточну сторінку на основі URL
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/home' || path === '/') return 'home';
    if (path === '/offer') return 'offer';
    if (path === '/articles' || path.startsWith('/articles/')) return 'article';
    if (path === '/models') return 'models';
    return 'home';
  };
  const currentPage = getCurrentPage();

  // Перевірка на вік юзера
  (0, _react.useEffect)(() => {
    const termsAccepted = localStorage.getItem('termsAccepted');
    if (!termsAccepted) {
      setShowTerms(true);
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (location.pathname === '/' || location.pathname === '') {
      navigate('/home', {
        replace: true
      });
    }
  }, [location.pathname, navigate]);
  const handlePageChange = page => {
    switch (page) {
      case 'home':
        navigate('/home');
        break;
      case 'offer':
        navigate('/offer');
        break;
      case 'article':
        navigate('/articles');
        break;
      case 'models':
        navigate('/models');
        break;
    }
  };
  const handleTermsAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setShowTerms(false);
  };
  const handleTermsDecline = () => {
    setShowTerms(false);
    alert('Для використання сайту необхідно прийняти умови використання.');
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    currentPage: currentPage,
    setCurrentPage: handlePageChange,
    language: language,
    setLanguage: setLanguage,
    onTermsClick: () => setShowTerms(true)
  }), /*#__PURE__*/_react.default.createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_HomePage.default, {
      language: language
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/home",
    element: /*#__PURE__*/_react.default.createElement(_HomePage.default, {
      language: language
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/offer",
    element: /*#__PURE__*/_react.default.createElement(_OfferPage.default, {
      language: language
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/articles",
    element: /*#__PURE__*/_react.default.createElement(_ArticlePage.default, {
      language: language
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/articles/:articleId",
    element: /*#__PURE__*/_react.default.createElement(_ArticleDetailPage.default, {
      language: language
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/models",
    element: /*#__PURE__*/_react.default.createElement(_ModelPage.default, {
      language: language
    })
  }))), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    language: language,
    setCurrentPage: handlePageChange,
    onTermsClick: () => setShowTerms(true)
  }), showTerms && /*#__PURE__*/_react.default.createElement(_TermsPopup.default, {
    language: language,
    onClose: () => setShowTerms(false),
    onAccept: handleTermsAccept,
    onDecline: handleTermsDecline
  }));
}
function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, {
    basename: "/undress_Her"
  }, /*#__PURE__*/_react.default.createElement(AppContent, null));
}
var _default = exports.default = App;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
  } else if (typeof window !== 'undefined') {
    window.App = App;
  }
})();
