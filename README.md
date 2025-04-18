# React Vite TypeScript Firebase Authentication

Это тестовый проект на React с использованием Vite, TypeScript и Firebase. Проект демонстрирует базовую авторизацию через Google.

---

## Содержание

1. [Что реализовано](#что-реализовано)
2. [Как запустить проект](#как-запустить-проект)


---

## Что реализовано

Проект включает следующие функции:

1. **Авторизация через Google**:
    - Пользователь может войти в систему с помощью учетной записи Google.
    - Используется Firebase Authentication для управления аутентификацией.

2. **Управление состоянием пользователя**:
    - Состояние пользователя хранится в контексте (`AuthContext`).
    - Реализованы хуки для удобного доступа к данным пользователя.

3. **Маршрутизация**:
    - Две страницы: вход (`LoginPage`) и приветствие (`WelcomePage`).
    - Программный редирект между страницами в зависимости от состояния авторизации.

4. **Стилизация**:
    - Используются CSS-модули для стилизации компонентов.

5. **Линтер и форматирование**:
    - Настроены ESLint и Prettier для поддержания качества кода.
    - Включена автоматическая сортировка импортов.

---

## Как запустить проект

### 1. Установите зависимости

Убедитесь, что у вас установлен Node.js (версии 18 или выше) и Yarn.

```bash
yarn install
```

## 2. Настройте переменные окружения

Создайте файл .env в корне проекта и добавьте туда свои параметры Firebase:

1. VITE_API_KEY= Ключ API Firebase для вашего проекта.
2. VITE_AUTH_DOMAIN= Домен для аутентификации Firebase 
3. VITE_PROJECT_ID= ID вашего проекта Firebase.
4. VITE_STORAGE_BUCKET= Бакет Firebase Storage для хранения файлов.
5. VITE_MESSAGING_SENDER_ID= ID отправителя сообщений Firebase Cloud Messaging.
6. VITE_APP_ID= ID приложения Firebase.

## 3 Запустите проект

Запустите проект с помощью команды

```bash
yarn dev
```