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