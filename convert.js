// const babel = require('@babel/core');
// const fs = require('fs');
// const path = require('path');

// // Повна конвертація React проекту у vanilla HTML/CSS/JS
// const convertReactToVanilla = (srcDir) => {
//   const outputDir = path.join(__dirname, 'vanilla-build');
  
//   // Створити output директорію з кращою обробкою помилок
//   try {
//     if (fs.existsSync(outputDir)) {
//       // Спочатку спробувати fs.rmSync
//       try {
//         fs.rmSync(outputDir, { recursive: true, force: true });
//       } catch (error) {
//         // Якщо не вдалося, спробувати альтернативний метод
//         console.log('Використовую альтернативний метод очищення...');
//         const rimraf = require('rimraf');
//         rimraf.sync(outputDir);
//       }
//     }
//   } catch (error) {
//     console.warn('Попередження: не вдалося повністю очистити директорію:', error.message);
//   }
  
//   // Створити директорію
//   if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir, { recursive: true });
//   }
  
//   // Зберігати інформацію про компоненти
//   const components = new Map();
//   const pages = new Map();
  
//   // Babel конфігурація для JSX/TSX
//   const babelConfig = {
//     presets: [
//       '@babel/preset-env',
//       '@babel/preset-react',
//       '@babel/preset-typescript'
//     ],
//     plugins: [
//       ['@babel/plugin-transform-react-jsx', { runtime: 'classic' }]
//     ]
//   };
  
//   // Парсер React компонентів з використанням Babel
//   const parseReactComponent = (filePath) => {
//     const content = fs.readFileSync(filePath, 'utf8');
//     const componentName = path.basename(filePath, path.extname(filePath));
    
//     try {
//       // Використовуємо Babel для парсингу
//       const result = babel.transformSync(content, {
//         ...babelConfig,
//         filename: filePath
//       });
      
//       // Витягти props interface
//       const propsMatch = content.match(/interface\s+(\w+Props)\s*{([^}]+)}/s);
//       const props = propsMatch ? parseProps(propsMatch[2]) : {};
      
//       // Витягти стан компонента
//       const stateMatches = content.match(/useState<?([\w<>\[\]]+)>?\(([^)]+)\)/g) || [];
//       const state = parseState(stateMatches);
      
//       // Витягти контент для мов
//       const contentMatch = content.match(/const\s+content\s*=\s*{([^}]+(?:{[^}]*}[^}]*)*)}/s);
//       const translations = contentMatch ? parseTranslations(contentMatch[1]) : {};
      
//       // Витягти JSX структуру
//       const jsxMatch = content.match(/return\s*\((([\s\S]*?))\);?\s*}/s) || content.match(/return\s+([\s\S]*?);\s*}/s);
//       const jsx = jsxMatch ? jsxMatch[1] : '';
      
//       // Витягти методи компонента
//       const methods = extractMethods(content);
      
//       return {
//         name: componentName,
//         props,
//         state,
//         translations,
//         jsx,
//         methods,
//         filePath,
//         transformedCode: result ? result.code : null
//       };
//     } catch (error) {
//       console.warn(`Помилка парсингу ${filePath}:`, error.message);
//       return {
//         name: componentName,
//         props: {},
//         state: {},
//         translations: {},
//         jsx: '',
//         methods: [],
//         filePath,
//         transformedCode: null
//       };
//     }
//   };
  
//   // Витягти методи компонента
//   const extractMethods = (content) => {
//     const methods = [];
    
//     // Витягти обробники подій
//     const handlerMatches = content.match(/const\s+(handle\w+)\s*=\s*\(([^)]*)\)\s*=>\s*{([^}]+(?:{[^}]*}[^}]*)*)}/g) || [];
//     handlerMatches.forEach(match => {
//       const methodMatch = match.match(/const\s+(\w+)\s*=\s*\(([^)]*)\)\s*=>\s*{([\s\S]*)}/s);
//       if (methodMatch) {
//         methods.push({
//           name: methodMatch[1],
//           params: methodMatch[2],
//           body: methodMatch[3]
//         });
//       }
//     });
    
//     // Витягти функції
//     const functionMatches = content.match(/const\s+(\w+)\s*=\s*\(([^)]*)\)\s*=>\s*{([^}]+(?:{[^}]*}[^}]*)*)}/g) || [];
//     functionMatches.forEach(match => {
//       const methodMatch = match.match(/const\s+(\w+)\s*=\s*\(([^)]*)\)\s*=>\s*{([\s\S]*)}/s);
//       if (methodMatch && !methodMatch[1].startsWith('handle')) {
//         methods.push({
//           name: methodMatch[1],
//           params: methodMatch[2],
//           body: methodMatch[3]
//         });
//       }
//     });
    
//     return methods;
//   };
  
//   // Парсер props
//   const parseProps = (propsString) => {
//     const props = {};
//     const lines = propsString.split(';').filter(line => line.trim());
    
//     lines.forEach(line => {
//       const match = line.match(/(\w+)\s*:\s*([^;]+)/);
//       if (match) {
//         props[match[1].trim()] = match[2].trim();
//       }
//     });
    
//     return props;
//   };
  
//   // Парсер стану
//   const parseState = (stateMatches) => {
//     const state = {};
    
//     stateMatches.forEach(match => {
//       const stateMatch = match.match(/\[(\w+),\s*set\w+\]\s*=\s*useState(?:<([\w<>\[\]]+)>)?\(([^)]+)\)/);
//       if (stateMatch) {
//         const [, varName, type, defaultValue] = stateMatch;
//         let parsedDefault = defaultValue.replace(/['"\`]/g, '');
        
//         // Спробувати розпарсити як JSON для об'єктів/масивів
//         try {
//           if (defaultValue.includes('{') || defaultValue.includes('[')) {
//             parsedDefault = JSON.parse(defaultValue);
//           } else if (defaultValue === 'true' || defaultValue === 'false') {
//             parsedDefault = defaultValue === 'true';
//           } else if (!isNaN(Number(defaultValue))) {
//             parsedDefault = Number(defaultValue);
//           }
//         } catch (e) {
//           // Залишити як рядок
//         }
        
//         state[varName] = {
//           type: type || 'any',
//           default: parsedDefault
//         };
//       }
//     });
    
//     return state;
//   };
  
//   // Парсер перекладів
//   const parseTranslations = (contentString) => {
//     const translations = {};
    
//     try {
//       // Більш надійний парсер для об'єкта перекладів
//       const ruMatch = contentString.match(/ru\s*:\s*{([^}]+(?:{[^}]*}[^}]*)*)}/s);
//       const enMatch = contentString.match(/en\s*:\s*{([^}]+(?:{[^}]*}[^}]*)*)}/s);
      
//       if (ruMatch) translations.ru = parseLanguageObject(ruMatch[1]);
//       if (enMatch) translations.en = parseLanguageObject(enMatch[1]);
//     } catch (e) {
//       console.warn('Помилка парсингу перекладів:', e.message);
//     }
    
//     return translations;
//   };
  
//   // Парсер мовного об'єкта
//   const parseLanguageObject = (langString) => {
//     const result = {};
    
//     // Парсити menu масив
//     const menuMatch = langString.match(/menu\s*:\s*\[([^\]]+)\]/);
//     if (menuMatch) {
//       const menuItems = [];
//       const itemMatches = menuMatch[1].match(/{[^}]+}/g) || [];
      
//       itemMatches.forEach(item => {
//         const keyMatch = item.match(/key\s*:\s*['"\`]([^'"\`]+)['"\`]/);
//         const labelMatch = item.match(/label\s*:\s*['"\`]([^'"\`]+)['"\`]/);
        
//         if (keyMatch && labelMatch) {
//           menuItems.push({ key: keyMatch[1], label: labelMatch[1] });
//         }
//       });
      
//       result.menu = menuItems;
//     }
    
//     // Парсити інші властивості
//     const otherMatches = langString.match(/(\w+)\s*:\s*['"\`]([^'"\`]+)['"\`]/g) || [];
//     otherMatches.forEach(match => {
//       const [, key, value] = match.match(/(\w+)\s*:\s*['"\`]([^'"\`]+)['"\`]/);
//       if (key !== 'menu') {
//         result[key] = value;
//       }
//     });
    
//     return result;
//   };
  
//   // Покращений конвертер JSX у HTML
//   const convertJSXToHTML = (jsx, componentData) => {
//     let html = jsx;
    
//     // Очистити від зайвих пробілів та переносів
//     html = html.replace(/\n\s+/g, '\n').trim();
    
//     // Замінити React елементи на HTML
//     html = html.replace(/<React\.Fragment>/g, '<div class="fragment">');
//     html = html.replace(/<\/React\.Fragment>/g, '</div>');
//     html = html.replace(/<>/g, '<div class="fragment">');
//     html = html.replace(/<\/>/g, '</div>');
    
//     // Замінити className на class
//     html = html.replace(/className=/g, 'class=');
    
//     // Замінити onClick на onclick
//     html = html.replace(/onClick={([^}]+)}/g, (match, handler) => {
//       const functionName = extractFunctionName(handler);
//       return `onclick="${functionName}()"`;  
//     });
    
//     // Замінити onChange на onchange
//     html = html.replace(/onChange={([^}]+)}/g, (match, handler) => {
//       const functionName = extractFunctionName(handler);
//       return `onchange="${functionName}(event)"`;  
//     });
    
//     // Замінити умовний рендеринг
//     html = html.replace(/{([^}]+)\s*&&\s*\(([^)]+(?:\([^)]*\)[^)]*)*?)\)}/g, 
//       '<div class="conditional" data-condition="$1" style="display: none;">$2</div>');
    
//     // Замінити змінні на значення
//     html = html.replace(/{(\w+)}/g, (match, varName) => {
//       if (componentData.state[varName]) {
//         const defaultValue = componentData.state[varName].default;
//         return `<span class="dynamic" data-var="${varName}">${defaultValue}</span>`;
//       }
//       return `<span class="dynamic" data-var="${varName}">${varName}</span>`;
//     });
    
//     // Замінити map функції
//     html = html.replace(/{([^}]+)\.map\(\(([^)]+)\)\s*=>\s*\(([^)]+(?:\([^)]*\)[^)]*)*?)\)\)}/g,
//       (match, arrayName, itemName, itemJSX) => {
//         return `<div class="map-container" data-array="${arrayName}" data-item="${itemName}">${itemJSX}</div>`;
//       });
    
//     // Замінити self-closing теги
//     html = html.replace(/<(\w+)([^>]*?)\s*\/>/g, '<$1$2></$1>');
    
//     return html;
//   };
  
//   // Витягти назву функції
//   const extractFunctionName = (handler) => {
//     const match = handler.match(/(\w+)/);
//     return match ? match[1] : 'handleClick';
//   };
  
//   // Покращений генератор JavaScript для компонента
//   const generateComponentJS = (componentData) => {
//     const { name, state, translations, props, methods } = componentData;
    
//     // Генерувати методи
//     const methodsCode = methods.map(method => {
//       let body = method.body;
      
//       // Конвертувати React специфічні виклики
//       body = body.replace(/set(\w+)\(([^)]+)\)/g, 'this.setState({ $1: $2 })');
//       body = body.replace(/navigate\(([^)]+)\)/g, 'this.navigate($1)');
//       body = body.replace(/setCurrentPage\(([^)]+)\)/g, 'this.props.setCurrentPage && this.props.setCurrentPage($1)');
//       body = body.replace(/setLanguage\(([^)]+)\)/g, 'this.props.setLanguage && this.props.setLanguage($1)');
      
//       return `
//   ${method.name}(${method.params}) {
//     ${body}
//   }`;
//     }).join('');
    
//     return `
// // ${name} Component
// class ${name} {
//   constructor(container, props = {}) {
//     this.container = container;
//     this.props = props;
//     this.state = ${JSON.stringify(Object.fromEntries(Object.entries(state).map(([key, value]) => [key, value.default])), null, 2)};
//     this.translations = ${JSON.stringify(translations, null, 2)};
//     this.init();
//   }
  
//   init() {
//     this.render();
//     this.bindEvents();
//   }
  
//   setState(newState) {
//     this.state = { ...this.state, ...newState };
//     this.render();
//   }
  
//   updateProps(newProps) {
//     this.props = { ...this.props, ...newProps };
//     this.render();
//   }
  
//   getTranslation(key, lang = 'ru') {
//     return this.translations[lang] && this.translations[lang][key] || key;
//   }
  
//   render() {
//     const html = this.getHTML();
//     this.container.innerHTML = html;
//     this.bindEvents();
//     this.updateConditionals();
//     this.updateDynamicContent();
//   }
  
//   getHTML() {
//     return \`${this.generateHTMLTemplate(componentData)}\`;
//   }
  
//   bindEvents() {
//     // Прив'язка подій
//     const clickableElements = this.container.querySelectorAll('[onclick]');
//     clickableElements.forEach(element => {
//       const handler = element.getAttribute('onclick').replace('()', '');
//       element.onclick = (event) => {
//         event.preventDefault();
//         if (this[handler]) {
//           this[handler](event);
//         }
//       };
//     });
    
//     const changeableElements = this.container.querySelectorAll('[onchange]');
//     changeableElements.forEach(element => {
//       const handler = element.getAttribute('onchange').replace('(event)', '');
//       element.onchange = (event) => {
//         if (this[handler]) {
//           this[handler](event);
//         }
//       };
//     });
//   }
  
//   updateConditionals() {
//     const conditionals = this.container.querySelectorAll('.conditional');
//     conditionals.forEach(element => {
//       const condition = element.getAttribute('data-condition');
//       const shouldShow = this.evaluateCondition(condition);
//       element.style.display = shouldShow ? 'block' : 'none';
//     });
//   }
  
//   updateDynamicContent() {
//     const dynamicElements = this.container.querySelectorAll('.dynamic');
//     dynamicElements.forEach(element => {
//       const varName = element.getAttribute('data-var');
//       if (this.state[varName] !== undefined) {
//         element.textContent = this.state[varName];
//       }
//     });
//   }
  
//   evaluateCondition(condition) {
//     // Простий евалюатор умов
//     try {
//       // Замінити змінні на їх значення
//       let evalCondition = condition;
//       Object.keys(this.state).forEach(key => {
//         evalCondition = evalCondition.replace(new RegExp(\`\\b\${key}\\b\`, 'g'), JSON.stringify(this.state[key]));
//       });
//       return eval(evalCondition);
//     } catch (e) {
//       return false;
//     }
//   }
  
//   navigate(path) {
//     if (window.app && window.app.navigate) {
//       window.app.navigate(path);
//     }
//   }
//   ${methodsCode}
// }

// // Експорт для використання
// if (typeof module !== 'undefined' && module.exports) {
//   module.exports = ${name};
// }
// `;
//   };
  
//   // Генерувати HTML шаблон
//   const generateHTMLTemplate = (componentData) => {
//     const html = convertJSXToHTML(componentData.jsx, componentData);
//     return html;
//   };
  
//   // ... existing code ...
  
//   // Запуск конвертації
//   console.log('Початок повної конвертації React -> Vanilla JS...');
//   processDirectory(srcDir);
//   copyImages();
//   copyGlobalCSS();
//   generateMainIndex();
//   console.log(`Конвертація завершена! Файли збережено в: ${outputDir}`);
//   console.log('Для запуску: npm run serve-vanilla');
// };

// // Запуск
// if (require.main === module) {
//   const srcPath = path.join(__dirname, 'src');
//   convertReactToVanilla(srcPath);
// }

// module.exports = { convertReactToVanilla };