const fs = require('fs');
const path = require('path');

// Конфігурація
const config = {
  srcDir: './src',
  outputDir: './vanilla-build',
  publicDir: './public',
  componentsDir: './src/components'
};

class AdvancedReactConverter {
  constructor() {
    this.components = new Map();
    this.styles = [];
    this.scripts = [];
    this.translations = {
      ru: {},
      en: {}
    };
  }

  // Очищення та створення директорії
  setupOutputDir() {
    if (fs.existsSync(config.outputDir)) {
      fs.rmSync(config.outputDir, { recursive: true });
    }
    fs.mkdirSync(config.outputDir, { recursive: true });
    fs.mkdirSync(path.join(config.outputDir, 'css'), { recursive: true });
    fs.mkdirSync(path.join(config.outputDir, 'js'), { recursive: true });
    fs.mkdirSync(path.join(config.outputDir, 'img'), { recursive: true });
  }

  // Копіювання статичних файлів
  copyStaticFiles() {
    // Копіювання зображень
    if (fs.existsSync('./src/img')) {
      this.copyDirectory('./src/img', path.join(config.outputDir, 'img'));
    }
    
    // Копіювання публічних файлів
    if (fs.existsSync(config.publicDir)) {
      const publicFiles = fs.readdirSync(config.publicDir);
      publicFiles.forEach(file => {
        if (file !== 'index.html') {
          fs.copyFileSync(
            path.join(config.publicDir, file),
            path.join(config.outputDir, file)
          );
        }
      });
    }
  }

  copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        this.copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }

  // Витягування перекладів з компонентів
  extractTranslations(componentCode) {
    const contentMatches = componentCode.match(/const\s+content\s*=\s*\{([\s\S]*?)\};/g);
    
    if (contentMatches) {
      contentMatches.forEach(match => {
        try {
          // Спрощене витягування перекладів
          if (match.includes('ru:') && match.includes('en:')) {
            console.log('Знайдено переклади в компоненті');
          }
        } catch (e) {
          console.warn('Не вдалося витягти переклади:', e.message);
        }
      });
    }
  }

  // Обробка CSS файлів
  processCSS(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.processCSS(filePath);
      } else if (file.endsWith('.css')) {
        const cssContent = fs.readFileSync(filePath, 'utf8');
        this.styles.push(cssContent);
      }
    });
  }

  // Генерація головного HTML файлу
  generateMainHTML() {
    const htmlTemplate = `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Undress Her - Vanilla JS</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="favicon.ico">
</head>
<body>
    <div id="root">
        <!-- Контент буде згенеровано JavaScript -->
    </div>
    
    <!-- Скрипти -->
    <script src="js/utils.js"></script>
    <script src="js/components.js"></script>
    <script src="js/router.js"></script>
    <script src="js/advanced.js"></script>
    <script src="js/app.js"></script>
</body>
</html>`;

    fs.writeFileSync(path.join(config.outputDir, 'index.html'), htmlTemplate);
  }

  // Генерація CSS файлу
  generateCSS() {
    const combinedCSS = this.styles.join('\n\n');
    fs.writeFileSync(path.join(config.outputDir, 'css', 'styles.css'), combinedCSS);
  }

  // Генерація утилітарних функцій
  generateUtils() {
    const utilsJS = `
// Утилітарні функції
class VanillaRouter {
  constructor() {
    this.routes = new Map();
    this.currentRoute = '/';
    this.language = 'ru';
    
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname);
    });
  }

  addRoute(path, component) {
    this.routes.set(path, component);
  }

  navigate(path) {
    this.currentRoute = path;
    window.history.pushState({}, '', path);
    this.render();
  }

  render() {
    const component = this.routes.get(this.currentRoute) || this.routes.get('/');
    if (component) {
      const root = document.getElementById('root');
      root.innerHTML = '';
      root.appendChild(component());
    }
  }
}

// Глобальні змінні
const router = new VanillaRouter();
let globalLanguage = 'ru';
let showTerms = false;

// Функції для роботи з localStorage
function getFromStorage(key) {
  return localStorage.getItem(key);
}

function setToStorage(key, value) {
  localStorage.setItem(key, value);
}

// Функція для створення елементів
function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);
  
  Object.keys(attributes).forEach(key => {
    if (key === 'className') {
      element.className = attributes[key];
    } else if (key.startsWith('on')) {
      const event = key.substring(2).toLowerCase();
      element.addEventListener(event, attributes[key]);
    } else {
      element.setAttribute(key, attributes[key]);
    }
  });
  
  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
  
  return element;
}

// Функція для оновлення контенту
function updateContent() {
  router.render();
}
`;

    fs.writeFileSync(path.join(config.outputDir, 'js', 'utils.js'), utilsJS);
  }

  // Генерація компонентів
  generateComponents() {
    const componentsJS = `
// Компоненти
function Header() {
  const content = {
    ru: {
      home: 'Головна',
      offer: 'Пропозиція',
      articles: 'Статті',
      models: 'Моделі'
    },
    en: {
      home: 'Home',
      offer: 'Offer', 
      articles: 'Articles',
      models: 'Models'
    }
  };

  const header = createElement('header', { className: 'header' });
  const nav = createElement('nav', { className: 'nav' });
  
  const menuItems = ['home', 'offer', 'articles', 'models'];
  menuItems.forEach(item => {
    const link = createElement('a', {
      href: '#',
      className: 'nav-link',
      onclick: (e) => {
        e.preventDefault();
        router.navigate('/' + item);
      }
    }, [content[globalLanguage][item]]);
    nav.appendChild(link);
  });
  
  header.appendChild(nav);
  return header;
}

function HomePage() {
  const content = {
    ru: {
      heroTitle: 'Undress Her',
      heroDescription: 'Революційна AI технологія для створення унікальних зображень'
    },
    en: {
      heroTitle: 'Undress Her',
      heroDescription: 'Revolutionary AI technology for creating unique images'
    }
  };

  const page = createElement('div', { className: 'home-page' });
  const hero = createElement('section', { className: 'hero' });
  const title = createElement('h1', { className: 'hero-title' }, [content[globalLanguage].heroTitle]);
  const description = createElement('p', { className: 'hero-description' }, [content[globalLanguage].heroDescription]);
  
  hero.appendChild(title);
  hero.appendChild(description);
  page.appendChild(hero);
  
  return page;
}

function OfferPage() {
  const page = createElement('div', { className: 'offer-page' });
  const title = createElement('h1', {}, ['Пропозиція']);
  page.appendChild(title);
  return page;
}

function ArticlePage() {
  const page = createElement('div', { className: 'article-page' });
  const title = createElement('h1', {}, ['Статті']);
  page.appendChild(title);
  return page;
}

function ModelPage() {
  const page = createElement('div', { className: 'model-page' });
  const title = createElement('h1', {}, ['Моделі']);
  page.appendChild(title);
  return page;
}

function Footer() {
  const footer = createElement('footer', { className: 'footer' });
  const text = createElement('p', {}, ['© 2024 Undress Her. Всі права захищені.']);
  footer.appendChild(text);
  return footer;
}
`;

    fs.writeFileSync(path.join(config.outputDir, 'js', 'components.js'), componentsJS);
  }

  // Генерація роутера
  generateRouter() {
    const routerJS = `
// Ініціалізація роутів
function initializeRoutes() {
  router.addRoute('/', HomePage);
  router.addRoute('/home', HomePage);
  router.addRoute('/offer', OfferPage);
  router.addRoute('/articles', ArticlePage);
  router.addRoute('/models', ModelPage);
}

// Функція для рендерингу повної сторінки
function renderPage() {
  const root = document.getElementById('root');
  root.innerHTML = '';
  
  const app = createElement('div', { className: 'App' });
  
  // Додавання хедера
  app.appendChild(Header());
  
  // Додавання основного контенту
  const main = createElement('main', { className: 'main-content' });
  const component = router.routes.get(router.currentRoute) || router.routes.get('/');
  if (component) {
    main.appendChild(component());
  }
  app.appendChild(main);
  
  // Додавання футера
  app.appendChild(Footer());
  
  root.appendChild(app);
}

// Перевизначення методу render роутера
router.render = renderPage;
`;

    fs.writeFileSync(path.join(config.outputDir, 'js', 'router.js'), routerJS);
  }

  // Генерація розширених можливостей
  generateAdvanced() {
    const advancedJS = `
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
`;

    fs.writeFileSync(path.join(config.outputDir, 'js', 'advanced.js'), advancedJS);
  }

  // Генерація головного app.js
  generateApp() {
    const appJS = `
// Головний файл додатку
document.addEventListener('DOMContentLoaded', function() {
  // Ініціалізація
  initializeRoutes();
  
  // Перевірка умов використання
  const termsAccepted = getFromStorage('termsAccepted');
  if (!termsAccepted) {
    showTerms = true;
  }
  
  // Початковий рендеринг
  const currentPath = window.location.pathname;
  router.currentRoute = currentPath === '/' ? '/home' : currentPath;
  router.render();
  
  // Обробка зміни мови
  window.changeLanguage = function(lang) {
    globalLanguage = lang;
    i18n.setLanguage(lang);
    router.render();
  };
  
  console.log('Advanced Vanilla JS додаток ініціалізовано!');
});
`;

    fs.writeFileSync(path.join(config.outputDir, 'js', 'app.js'), appJS);
  }

  // Основний метод конвертації
  async fullConvert() {
    console.log('🚀 Розширена конвертація React проекту...');
    
    try {
      // 1. Підготовка
      this.setupOutputDir();
      console.log('✅ Директорія підготовлена');
      
      // 2. Копіювання статичних файлів
      this.copyStaticFiles();
      console.log('✅ Статичні файли скопійовані');
      
      // 3. Обробка CSS
      this.processCSS('./src');
      console.log('✅ CSS оброблено');
      
      // 4. Генерація файлів
      this.generateMainHTML();
      this.generateCSS();
      this.generateUtils();
      this.generateComponents();
      this.generateRouter();
      this.generateAdvanced();
      this.generateApp();
      console.log('✅ Файли згенеровані');
      
      console.log('🎉 Розширена конвертація завершена!');
      console.log('📁 Файли знаходяться в папці vanilla-build/');
      console.log('🚀 Для запуску: npm run serve-vanilla');
      
    } catch (error) {
      console.error('❌ Помилка під час конвертації:', error);
      throw error;
    }
  }
}

// Запуск розширеної конвертації
if (require.main === module) {
  const advancedConverter = new AdvancedReactConverter();
  advancedConverter.fullConvert().catch(console.error);
}

module.exports = AdvancedReactConverter;