
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./ScrollToTopButton.css");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  (0, _react.useEffect)(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isVisible && /*#__PURE__*/_react.default.createElement("button", {
    className: "scroll-to-top-button",
    onClick: scrollToTop,
    "aria-label": "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u0432\u0433\u043E\u0440\u0443"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 14L12 9L17 14",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
};
var _default = exports.default = ScrollToTopButton;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollToTopButton;
  } else if (typeof window !== 'undefined') {
    window.ScrollToTopButton = ScrollToTopButton;
  }
})();
