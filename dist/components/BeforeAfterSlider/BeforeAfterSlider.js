
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./BeforeAfterSlider.css");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BeforeAfterSlider = _ref => {
  let {
    beforeImage,
    afterImage,
    className = ''
  } = _ref;
  const [sliderPosition, setSliderPosition] = (0, _react.useState)(50);
  const [isDragging, setIsDragging] = (0, _react.useState)(false);
  const containerRef = (0, _react.useRef)(null);
  const updateSliderPosition = clientX => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = x / rect.width * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };
  const handleMouseDown = e => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleTouchStart = e => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleMouseMove = e => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.clientX);
  };
  const handleTouchMove = e => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0].clientX);
  };
  const handleEnd = () => {
    setIsDragging(false);
  };

  // Додаємо глобальні обробники подій для кращої роботи перетягування
  (0, _react.useEffect)(() => {
    const handleGlobalMouseMove = e => {
      if (!isDragging) return;
      e.preventDefault();
      updateSliderPosition(e.clientX);
    };
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    const handleGlobalTouchMove = e => {
      if (!isDragging) return;
      e.preventDefault();
      updateSliderPosition(e.touches[0].clientX);
    };
    const handleGlobalTouchEnd = () => {
      setIsDragging(false);
    };
    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalTouchMove, {
        passive: false
      });
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "before-after-slider ".concat(className),
    ref: containerRef,
    onMouseMove: handleMouseMove,
    onMouseUp: handleEnd,
    onMouseLeave: handleEnd,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleEnd
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "before-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: beforeImage,
    alt: "Before"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "after-image",
    style: {
      clipPath: "inset(0 ".concat(100 - sliderPosition, "% 0 0)")
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: afterImage,
    alt: "After"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-handle",
    style: {
      left: "".concat(sliderPosition, "%")
    },
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "handle-line"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "handle-circle"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 4l-4 4 4 4V4zm4 12l4-4-4-4v8z"
  }))))));
};
var _default = exports.default = BeforeAfterSlider;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = BeforeAfterSlider;
  } else if (typeof window !== 'undefined') {
    window.BeforeAfterSlider = BeforeAfterSlider;
  }
})();
