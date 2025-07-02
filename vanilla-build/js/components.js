
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
