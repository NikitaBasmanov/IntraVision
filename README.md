# IntraVision

Современное веб-приложение, построенное на React с использованием TypeScript, Vite и Tailwind CSS.

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

### Предварительные требования

-   Node.js (версия 16 или выше)
-   npm или yarn

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

### Сборка для продакшена

```bash
npm run build
```

Оптимизированные файлы будут созданы в директории `dist/`

### Предварительный просмотр продакшен-сборки

```bash
npm run preview
```

### Проверка кода (линтинг)

```bash
npm run lint
```

## 📝 Доступные скрипты

| Команда           | Описание                                       |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Запускает dev-сервер с hot reload              |
| `npm run build`   | Создает оптимизированную сборку для продакшена |
| `npm run preview` | Локальный просмотр продакшен-сборки            |
| `npm run lint`    | Проверяет код с помощью ESLint                 |

## 🎨 Работа с Tailwind CSS

Проект использует Tailwind CSS для стилизации. Все utility-классы доступны "из коробки":

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
    Пример стилизации с Tailwind
</div>
```

Для кастомизации темы отредактируйте `tailwind.config.js`.

## 📦 Ресурсы проекта

В директории `assets/` находятся следующие ресурсы:

-   `logo.png` - логотип приложения
-   `analytics.png` - иконка аналитики
-   `noun_Book_121819.png` - иконка книги
-   `noun_City_1923172.png` - иконка города
-   `noun_File_453295.png` - иконка файла
-   `noun_people_1923174.png` - иконка людей
-   `noun_Search_449332.png` - иконка поиска
-   `noun_Settings_1048928.png` - иконка настроек

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

## 📄 Лицензия

Этот проект создан для внутреннего использования.

---

**IntraVision** - современное решение для ваших задач! 🎉
