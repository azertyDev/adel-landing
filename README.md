# Adel Landing

Монорепо проект: лендинг для компании Adel с CMS системой.

## Структура проекта

```
adel-landing/
├── admin/          # Strapi CMS (бэкенд)
├── client/         # Next.js (фронтенд)
├── package.json    # Корневой package.json
└── pnpm-workspace.yaml
```

## Требования

- Node.js >= 20.0.0
- pnpm >= 9.0.0

## Установка

```bash
# Клонирование репозитория
git clone https://github.com/azertyDev/adel-landing.git
cd adel-landing

# Установка зависимостей
pnpm install
```

## Настройка окружения

### Client (Next.js)

Создайте файл `client/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:1337/api
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Admin (Strapi)

Создайте файл `admin/.env`:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

Для генерации секретов используйте:
```bash
openssl rand -base64 32
```

## Команды

### Разработка

```bash
# Запуск клиента (Next.js) - http://localhost:3000
pnpm dev

# Запуск админки (Strapi) - http://localhost:1337
pnpm dev:admin

# Запуск обоих одновременно
pnpm dev:all

# Запуск с сидированием базы данных
pnpm dev:seed
```

### Сборка

```bash
# Сборка клиента
pnpm build

# Сборка админки
pnpm build:admin

# Сборка всего проекта
pnpm build:all
```

### Продакшн

```bash
# Запуск клиента
pnpm start

# Запуск админки
pnpm start:admin
```

### Линтинг и форматирование

```bash
# Проверка кода
pnpm check

# Исправление ошибок
pnpm check:fix

# Проверка типов
pnpm typecheck
```

## Технологии

### Client
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- TanStack Query
- next-intl (i18n)

### Admin
- Strapi 5
- SQLite (dev) / PostgreSQL (prod)
- TypeScript

## Локализация

Поддерживаемые языки:
- Русский (ru) - по умолчанию
- English (en)
- Türkçe (tr)

Файлы переводов находятся в `client/messages/`.

## DevOps

### Переменные окружения (Production)

#### Client (Next.js)

| Переменная | Описание | Пример |
|------------|----------|--------|
| `NEXT_PUBLIC_API_URL` | URL Strapi API | `https://api.adel.com/api` |
| `NEXT_PUBLIC_STRAPI_URL` | URL Strapi | `https://api.adel.com` |
| `NEXT_PUBLIC_SITE_URL` | URL сайта | `https://adel.com` |

#### Admin (Strapi)

| Переменная | Описание | Генерация |
|------------|----------|-----------|
| `HOST` | Хост сервера | `0.0.0.0` |
| `PORT` | Порт сервера | `1337` |
| `APP_KEYS` | Ключи приложения (2 шт через запятую) | `openssl rand -base64 32` |
| `API_TOKEN_SALT` | Соль для API токенов | `openssl rand -base64 32` |
| `ADMIN_JWT_SECRET` | JWT секрет админки | `openssl rand -base64 32` |
| `TRANSFER_TOKEN_SALT` | Соль для transfer токенов | `openssl rand -base64 32` |
| `JWT_SECRET` | JWT секрет | `openssl rand -base64 32` |
| `ENCRYPTION_KEY` | Ключ шифрования | `openssl rand -base64 32` |
| `DATABASE_CLIENT` | Клиент БД (prod) | `postgres` |
| `DATABASE_URL` | URL подключения к БД | `postgres://user:pass@host:5432/db` |

### Порты

| Сервис | Порт |
|--------|------|
| Client (Next.js) | 3000 |
| Admin (Strapi) | 1337 |

### Сборка и запуск (Production)

```bash
# 1. Установка зависимостей
pnpm install

# 2. Сборка проекта
pnpm build:all

# 3. Запуск Admin (Strapi)
NODE_ENV=production pnpm start:admin

# 4. Запуск Client (Next.js)
NODE_ENV=production pnpm start
```

### Health Checks

```bash
# Client
curl http://localhost:3000/ru

# Strapi API
curl http://localhost:1337/api

# Strapi Admin
curl http://localhost:1337/admin
```

### Рекомендации

- Используйте PostgreSQL для production (вместо SQLite)
- Настройте reverse proxy (nginx) для обоих сервисов
- Используйте PM2 или systemd для управления процессами
- Настройте SSL через Let's Encrypt