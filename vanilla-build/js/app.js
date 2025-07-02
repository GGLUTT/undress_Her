
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
