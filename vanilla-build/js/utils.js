
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
