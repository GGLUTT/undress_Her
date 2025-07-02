
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
