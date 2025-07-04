const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Конфігурація
const config = {
  srcDir: './src',
  outputDir: './vanilla-build',
  publicDir: './public',
  componentsDir: './src/components'
};

// Утиліти
class ReactToVanillaConverter {
  constructor() {
    this.components = new Map();
    this.styles = [];
    this.scripts = [];
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

  // Конвертація TSX/JSX в HTML та JS
  convertComponent(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const componentName = path.basename(filePath, path.extname(filePath));
    
    // Витягування CSS імпортів
    const cssImports = content.match(/import\s+['"]\.\/[^'"]*\.css['"]/g) || [];
    cssImports.forEach(imp => {
      const cssPath = imp.match(/['"]([^'"]*)['"]$/)[1];
      const fullCssPath = path.resolve(path.dirname(filePath), cssPath);
      if (fs.existsSync(fullCssPath)) {
        this.styles.push(fs.readFileSync(fullCssPath, 'utf8'));
      }
    });

    // Конвертація JSX в HTML та JS
    const convertedComponent = this.convertJSXToVanilla(content, componentName);
    return convertedComponent;
  }

  convertJSXToVanilla(content, componentName) {
    // Видалення React імпортів
    let jsContent = content
      .replace(/import\s+React[^;]*;/g, '')
      .replace(/import\s+\{[^}]*\}\s+from\s+['"]react[^'"]*['"];/g, '')
      .replace(/import\s+[^;]*from\s+['"]react-router-dom['"];/g, '')
      .replace(/import\s+['"][^'"]*\.css['"]/g, '')
      .replace(/import\s+[^;]*from\s+['"]\.\/[^'"]*['"]/g, '');

    // Конвертація функціональних компонентів
    jsContent = jsContent.replace(
      /const\s+(\w+):\s*React\.FC<[^>]*>\s*=\s*\(([^)]*)\)\s*=>\s*\{/g,
      'function $1($2) {'
    );

    // Конвертація useState
    jsContent = jsContent.replace(
      /const\s+\[(\w+),\s*set(\w+)\]\s*=\s*useState\(([^)]+)\);/g,
      'let $1 = $3;\nfunction set$2(value) { $1 = value; render$1(); }'
    );

    // Конвертація useEffect
    jsContent = jsContent.replace(
      /useEffect\(\(\)\s*=>\s*\{([^}]+)\},\s*\[([^\]]*)\]\);/g,
      'function effect() { $1 } effect();'
    );

    // Конвертація JSX return в DOM створення
    const returnMatch = jsContent.match(/return\s*\((.*?)\);/s);
    if (returnMatch) {
      const jsx = returnMatch[1];
      const domCreation = this.convertJSXToDOM(jsx);
      jsContent = jsContent.replace(
        /return\s*\((.*?)\);/s,
        `return ${domCreation};`
      );
    }

    return {
      name: componentName,
      js: jsContent,
      html: this.extractHTMLStructure(jsContent)
    };
  }

  convertJSXToDOM(jsx) {
    // Спрощена конвертація JSX в DOM API
    let domCode = jsx
      .replace(/<(\w+)([^>]*)>/g, (match, tag, attrs) => {
        const element = `document.createElement('${tag}')`;
        const attrCode = this.convertAttributes(attrs);
        return `(() => { const el = ${element}; ${attrCode} return el; })()`;
      })
      .replace(/<\/(\w+)>/g, '')
      .replace(/\{([^}]+)\}/g, '${$1}');

    return `\`${domCode}\``;
  }

  convertAttributes(attrs) {
    if (!attrs.trim()) return '';
    
    return attrs
      .replace(/className=["']([^"']*)["']/g, "el.className = '$1';")
      .replace(/onClick=\{([^}]+)\}/g, "el.addEventListener('click', $1);")
      .replace(/(\w+)=["']([^"']*)["']/g, "el.setAttribute('$1', '$2');");
  }

  extractHTMLStructure(jsContent) {
    // Витягування базової HTML структури
    const returnMatch = jsContent.match(/return\s*\((.*?)\);/s);
    if (returnMatch) {
      return returnMatch[1]
        .replace(/\{[^}]*\}/g, '')
        .replace(/className/g, 'class')
        .trim();
    }
    return '<div></div>';
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
    // Тут можна додати логіку показу popup
  }
  
  // Початковий рендеринг
  const currentPath = window.location.pathname;
  router.currentRoute = currentPath === '/' ? '/home' : currentPath;
  router.render();
  
  // Обробка зміни мови
  window.changeLanguage = function(lang) {
    globalLanguage = lang;
    router.render();
  };
  
  console.log('Vanilla JS додаток ініціалізовано!');
});
`;

    fs.writeFileSync(path.join(config.outputDir, 'js', 'app.js'), appJS);
  }

  // Основний метод конвертації
  async convert() {
    console.log('🚀 Початок конвертації React проекту в Vanilla JS...');
    
    try {
      // 1. Підготовка
      this.setupOutputDir();
      console.log('✅ Директорія підготовлена');
      
      // 2. Копіювання статичних файлів
      this.copyStaticFiles();
      console.log('✅ Статичні файли скопійовані');
      
      // 3. Обробка компонентів
      this.processComponents();
      console.log('✅ Компоненти оброблені');
      
      // 4. Генерація файлів
      this.generateMainHTML();
      this.generateCSS();
      this.generateUtils();
      this.generateComponents();
      this.generateRouter();
      this.generateApp();
      console.log('✅ Файли згенеровані');
      
      console.log('🎉 Конвертація завершена! Файли знаходяться в папці vanilla-build/');
      console.log('📝 Для запуску використовуйте: npm run serve-vanilla');
      
    } catch (error) {
      console.error('❌ Помилка під час конвертації:', error);
      throw error;
    }
  }

  processComponents() {
    // Обробка CSS файлів
    this.processCSS('./src');
  }

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
}

// Запуск конвертації
const converter = new ReactToVanillaConverter();
converter.convert().catch(console.error);