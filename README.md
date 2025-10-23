## 🚀 Технологии

-   **React 18.2** - библиотека для создания пользовательских интерфейсов
-   **TypeScript 5.2** - типизированный JavaScript для более надежной разработки
-   **Vite 5.0** - быстрый инструмент сборки и dev-сервер с HMR (Hot Module Replacement)
-   **Tailwind CSS 3.4** - utility-first CSS фреймворк для быстрой стилизации
-   **ESLint** - линтер для поддержания качества кода

## 📁 Структура проекта

```
IntraVision/
├── assets/              # Статические ресурсы (изображения, иконки)
│   ├── analytics.png
│   ├── logo.png
│   └── ...
├── src/                 # Исходный код приложения
│   ├── App.tsx         # Главный компонент приложения
│   ├── main.tsx        # Точка входа React приложения
│   ├── index.css       # Глобальные стили с Tailwind директивами
│   └── vite-env.d.ts   # TypeScript декларации для Vite
├── index.html          # HTML шаблон
├── package.json        # Зависимости и скрипты проекта
├── tsconfig.json       # Конфигурация TypeScript
├── vite.config.ts      # Конфигурация Vite
├── tailwind.config.js  # Конфигурация Tailwind CSS
└── postcss.config.js   # Конфигурация PostCSS
```

## 🛠️ Установка и запуск

### Установка зависимостей

```bash
cd IntraVision
npm install
```

### Запуск dev-сервера

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

## 📝 Доступные скрипты

| Команда           | Описание                                       |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Запускает dev-сервер с hot reload              |
| `npm run build`   | Создает оптимизированную сборку для продакшена |
| `npm run preview` | Локальный просмотр продакшен-сборки            |
| `npm run lint`    | Проверяет код с помощью ESLint                 |

## 🔧 Конфигурация TypeScript

Проект использует строгую конфигурацию TypeScript с включенными опциями:

-   `strict: true` - строгая проверка типов
-   `noUnusedLocals: true` - предупреждения о неиспользуемых переменных
-   `noUnusedParameters: true` - предупреждения о неиспользуемых параметрах
-   `noFallthroughCasesInSwitch: true` - проверка switch-case

## 🚀 Особенности

-   ⚡ **Молниеносная сборка** с Vite
-   🔥 **Hot Module Replacement (HMR)** для мгновенного обновления при разработке
-   📱 **Responsive дизайн** с Tailwind CSS
-   🎯 **Строгая типизация** с TypeScript
-   🧹 **Качество кода** обеспечивается ESLint
-   🎨 **Современный UI** с градиентами и анимациями

## 📚 Полезные ссылки

-   [React документация](https://react.dev/)
-   [TypeScript документация](https://www.typescriptlang.org/)
-   [Vite документация](https://vitejs.dev/)
-   [Tailwind CSS документация](https://tailwindcss.com/)

## 🤝 Разработка

Для начала разработки:

1. Клонируйте репозиторий
2. Установите зависимости: `npm install`
3. Запустите dev-сервер: `npm run dev`
4. Начните редактировать файлы в `src/`

Изменения будут автоматически отображаться в браузере благодаря HMR.
