
// Auto-generated vanilla JS from React component
(function() {
  'use strict';
  
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Footer.css");
var _logo = _interopRequireDefault(require("../../img/main/logo.png"));
var _telegram = _interopRequireDefault(require("../../img/icons/telegram.png"));
var _twitter = _interopRequireDefault(require("../../img/icons/twitter.png"));
var _discord = _interopRequireDefault(require("../../img/icons/discord.png"));
var _facebook = _interopRequireDefault(require("../../img/icons/facebook.png"));
var _instagram = _interopRequireDefault(require("../../img/icons/instagram.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

const SiteFooter = _ref => {
  let {
    language,
    setCurrentPage,
    onTermsClick
  } = _ref;
  const footerContent = {
    ru: {
      brandName: 'Undress Her',
      brandDescription: 'Революционная технология искусственного интеллекта для создания потрясающих изображений.',
      mainNavigation: {
        heading: 'Навигация',
        menuItems: [{
          key: 'home',
          label: 'Главная'
        },
        // { key: 'offer', label: 'Предложения' },
        {
          key: 'article',
          label: 'Статьи'
        }, {
          key: 'models',
          label: 'Модели'
        }]
      },
      featuredModels: {
        heading: 'Топ Модели',
        items: ['Реалистичные', 'Художественные', 'Фэнтези', 'Классические']
      },
      artGenres: {
        heading: 'Жанры',
        items: ['Портреты', 'Пейзажи', 'Абстракция', 'Минимализм']
      },
      contentCategories: {
        heading: 'Категории',
        items: ['Новые', 'Популярные', 'Рекомендуемые', 'Избранные']
      },
      socialPlatforms: {
        items: [{
          name: 'Telegram',
          icon: _telegram.default
        }, {
          name: 'Twitter',
          icon: _twitter.default
        }, {
          name: 'Discord',
          icon: _discord.default
        }, {
          name: 'FaceBook',
          icon: _facebook.default
        }, {
          name: 'Instagram',
          icon: _instagram.default
        }]
      },
      legalInfo: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        compliance: '2257 Соответствие',
        dmca: 'DMCA Соответствие'
      },
      copyrightText: '© 2024 Undress Her. Все права защищены.'
    },
    en: {
      brandName: 'Undress Her',
      brandDescription: 'Revolutionary artificial intelligence technology for creating stunning images.',
      mainNavigation: {
        heading: 'Navigation',
        menuItems: [{
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
        }]
      },
      featuredModels: {
        heading: 'Top Models',
        items: ['Realistic', 'Artistic', 'Fantasy', 'Classic']
      },
      artGenres: {
        heading: 'Genres',
        items: ['Portraits', 'Landscapes', 'Abstract', 'Minimalism']
      },
      contentCategories: {
        heading: 'Categories',
        items: ['New', 'Popular', 'Recommended', 'Favorites']
      },
      socialPlatforms: {
        items: [{
          name: 'Telegram',
          icon: _telegram.default
        }, {
          name: 'Twitter',
          icon: _twitter.default
        }, {
          name: 'Discord',
          icon: _discord.default
        }, {
          name: 'FaceBook',
          icon: _facebook.default
        }, {
          name: 'Instagram',
          icon: _instagram.default
        }]
      },
      legalInfo: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        compliance: '2257 Compliance',
        dmca: 'DMCA Compliance'
      },
      copyrightText: '© 2024 Undress Her. All rights reserved.'
    }
  };
  const currentContent = footerContent[language];
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__brand-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__brand-logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "Logo",
    className: "site-footer__logo-image"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "site-footer__brand-description"
  }, currentContent.brandDescription), /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__social-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__social-grid"
  }, currentContent.socialPlatforms.items.map((platform, index) => /*#__PURE__*/_react.default.createElement("a", {
    key: index,
    href: "#",
    className: "site-footer__social-item"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: platform.icon,
    alt: platform.name,
    className: "site-footer__social-icon"
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__nav-sections"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__nav-column"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "site-footer__column-heading"
  }, currentContent.mainNavigation.heading), /*#__PURE__*/_react.default.createElement("ul", {
    className: "site-footer__nav-list"
  }, currentContent.mainNavigation.menuItems.map(item => /*#__PURE__*/_react.default.createElement("li", {
    key: item.key,
    className: "site-footer__nav-item"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "site-footer__nav-button",
    onClick: () => setCurrentPage(item.key)
  }, item.label))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__nav-column"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "site-footer__column-heading"
  }, currentContent.featuredModels.heading), /*#__PURE__*/_react.default.createElement("ul", {
    className: "site-footer__nav-list"
  }, currentContent.featuredModels.items.map((item, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    className: "site-footer__nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "site-footer__nav-link"
  }, item))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__nav-column"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "site-footer__column-heading"
  }, currentContent.artGenres.heading), /*#__PURE__*/_react.default.createElement("ul", {
    className: "site-footer__nav-list"
  }, currentContent.artGenres.items.map((item, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    className: "site-footer__nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "site-footer__nav-link"
  }, item))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__nav-column"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "site-footer__column-heading"
  }, currentContent.contentCategories.heading), /*#__PURE__*/_react.default.createElement("ul", {
    className: "site-footer__nav-list"
  }, currentContent.contentCategories.items.map((item, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    className: "site-footer__nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "site-footer__nav-link"
  }, item))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__bottom-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__bottom-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__legal-links"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "site-footer__legal-button",
    onClick: onTermsClick
  }, currentContent.legalInfo.privacy), /*#__PURE__*/_react.default.createElement("button", {
    className: "site-footer__legal-button",
    onClick: onTermsClick
  }, currentContent.legalInfo.terms), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "site-footer__legal-link"
  }, currentContent.legalInfo.compliance), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "site-footer__legal-link"
  }, currentContent.legalInfo.dmca)), /*#__PURE__*/_react.default.createElement("div", {
    className: "site-footer__copyright-wrapper"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "site-footer__copyright-text"
  }, currentContent.copyrightText)))));
};
var _default = exports.default = SiteFooter;
  
  // Експорт компонента для використання
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Footer;
  } else if (typeof window !== 'undefined') {
    window.Footer = Footer;
  }
})();
