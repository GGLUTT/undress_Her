
// Розширені можливості
class I18n {
  constructor() {
    this.translations = {
      ru: {
        heroTitle: 'Undress Her',
        heroDescription: 'Революційна AI технологія',
        home: 'Головна',
        offer: 'Пропозиція',
        articles: 'Статті',
        models: 'Моделі'
      },
      en: {
        heroTitle: 'Undress Her',
        heroDescription: 'Revolutionary AI technology',
        home: 'Home',
        offer: 'Offer',
        articles: 'Articles',
        models: 'Models'
      }
    };
    this.currentLanguage = 'ru';
  }

  t(key, lang = this.currentLanguage) {
    return this.translations[lang]?.[key] || key;
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    globalLanguage = lang;
    if (typeof updateContent === 'function') {
      updateContent();
    }
  }
}

const i18n = new I18n();

// Компонентна система
class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.element = null;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    return createElement('div');
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }

  unmount() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}
