# 📝 Forms

Проект для работы с формами на чистом JavaScript.

## 🎯 Описание

Учебный проект, демонстрирующий создание и обработку HTML-форм с использованием современного JavaScript, сборки Webpack и тестирования Jest.

## 🛠 Технологический стек

- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- **Webpack** — сборка модулей
- **Babel** — транспиляция JS
- **Jest** — тестирование
- **AppVeyor** — CI/CD

## 🚀 Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/your-username/forms.git
cd forms

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start

# Сборка для продакшена
npm run build

# Запуск тестов
npm test
```

## 💻 Пример использования

```javascript
// src/app/app.js
import App from './app';

const app = new App();
app.init();
```

```bash
# Проверка качества кода
npm run lint
```

## 📂 Структура проекта

```
forms/
├── README.md
├── appveyor.yml
├── babel.config.js
├── jest.config.js
├── package-lock.json
├── package.json
├── webpack.config.js
└── src/
    ├── index.html
    ├── index.js
    ├── styles.css
    ├── __tests__/
    │   └── app.test.js
    └── app/
        └── app.js
```

## 📄 Лицензия

MIT