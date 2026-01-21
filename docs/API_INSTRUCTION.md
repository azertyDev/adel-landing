# API Инструкция для ADEL Landing

## Диаграмма связей сущностей

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│   Brand     │       │   Product   │       │  Category   │
├─────────────┤       ├─────────────┤       ├─────────────┤
│ id          │◄──────│ brandId     │       │ id          │
│ slug        │       │ categoryId  │──────►│ slug        │
│ name        │       │ id          │       │ name        │
│ logo        │       │ slug        │       │ description │
└─────────────┘       │ name        │       │ image       │
                      │ description │       │ parentId    │──┐
                      │ price       │       └─────────────┘  │
                      │ currency    │              ▲         │
                      │ images[]    │              └─────────┘
                      │ colors[]    │              (self-ref)
                      │ specs[]     │
                      │ inStock     │       ┌─────────────┐
                      │ createdAt   │       │   FAQItem   │
                      │ updatedAt   │       ├─────────────┤
                      └─────────────┘       │ id          │
                                            │ question    │
                                            │ answer      │
                                            │ category    │
                                            └─────────────┘
```

---

## Модели данных

### 1. Product (Продукт)

```typescript
interface Product {
  id: string;
  slug: string;              // URL-friendly идентификатор
  name: string;
  description: string;
  price: number;
  currency: string;          // "USD"
  images: string[];          // массив URL изображений
  categoryId: string;        // FK → Category.id
  brandId: string;           // FK → Brand.id
  colors: string[];          // HEX цвета: ["#C0C0C0", "#000000"]
  specs: ProductSpec[];      // характеристики
  inStock: boolean;
  createdAt: string;         // ISO datetime
  updatedAt: string;
}

interface ProductSpec {
  label: string;             // "Power", "Capacity"
  value: string;             // "1500W", "2L"
}
```

### 2. Category (Категория)

```typescript
interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;             // URL изображения категории
  parentId: string | null;   // FK → Category.id (для подкатегорий)
}
```

### 3. Brand (Бренд)

```typescript
interface Brand {
  id: string;
  slug: string;
  name: string;
  logo: string;              // URL логотипа
}
```

### 4. FAQItem (FAQ)

```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'orders' | 'returns' | 'products';
}
```

---

## Рекомендуемые API Endpoints

```
# Categories
GET    /api/categories           # Список всех категорий
GET    /api/categories/:slug     # Категория по slug
POST   /api/categories           # Создать категорию
PUT    /api/categories/:id       # Обновить категорию
DELETE /api/categories/:id       # Удалить категорию

# Products
GET    /api/products             # Список продуктов (с фильтрами)
GET    /api/products/:slug       # Продукт по slug
POST   /api/products             # Создать продукт
PUT    /api/products/:id         # Обновить продукт
DELETE /api/products/:id         # Удалить продукт

# Brands
GET    /api/brands               # Список брендов
POST   /api/brands               # Создать бренд
PUT    /api/brands/:id           # Обновить бренд
DELETE /api/brands/:id           # Удалить бренд

# FAQ
GET    /api/faq                  # Список FAQ
POST   /api/faq                  # Создать FAQ
PUT    /api/faq/:id              # Обновить FAQ
DELETE /api/faq/:id              # Удалить FAQ
```

---

## Фильтрация продуктов

```
GET /api/products?categoryId=1&brandId=2&minPrice=100&maxPrice=500&inStock=true&sort=price_asc
```

| Параметр | Тип | Описание |
|----------|-----|----------|
| `categoryId` | string | Фильтр по категории |
| `brandId` | string | Фильтр по бренду |
| `minPrice` | number | Минимальная цена |
| `maxPrice` | number | Максимальная цена |
| `inStock` | boolean | Только в наличии |
| `colors` | string[] | Фильтр по цветам |
| `sort` | string | `price_asc`, `price_desc`, `newest`, `name_asc` |
| `page` | number | Номер страницы |
| `limit` | number | Количество на странице |

---

## Пример БД схемы (PostgreSQL/Prisma)

```prisma
model Brand {
  id        String    @id @default(cuid())
  slug      String    @unique
  name      String
  logo      String
  products  Product[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model Category {
  id          String     @id @default(cuid())
  slug        String     @unique
  name        String
  description String
  image       String
  parentId    String?
  parent      Category?  @relation("CategoryToCategory", fields: [parentId], references: [id])
  children    Category[] @relation("CategoryToCategory")
  products    Product[]
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
}

model Product {
  id          String        @id @default(cuid())
  slug        String        @unique
  name        String
  description String
  price       Float
  currency    String        @default("USD")
  images      String[]
  colors      String[]
  inStock     Boolean       @default(true)
  categoryId  String
  category    Category      @relation(fields: [categoryId], references: [id])
  brandId     String
  brand       Brand         @relation(fields: [brandId], references: [id])
  specs       ProductSpec[]
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
}

model ProductSpec {
  id        String  @id @default(cuid())
  label     String
  value     String
  productId String
  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)
}

model FAQItem {
  id       String @id @default(cuid())
  question String
  answer   String
  category String // 'general' | 'orders' | 'returns' | 'products'
}
```

---

## Локализация

Для мультиязычности (ru/en/tr) нужно добавить таблицу переводов или использовать JSON поля:

```prisma
model ProductTranslation {
  id          String  @id @default(cuid())
  productId   String
  product     Product @relation(fields: [productId], references: [id])
  locale      String  // 'en', 'ru', 'tr'
  name        String
  description String

  @@unique([productId, locale])
}

model CategoryTranslation {
  id          String   @id @default(cuid())
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  locale      String   // 'en', 'ru', 'tr'
  name        String
  description String

  @@unique([categoryId, locale])
}

model FAQTranslation {
  id        String  @id @default(cuid())
  faqItemId String
  faqItem   FAQItem @relation(fields: [faqItemId], references: [id])
  locale    String  // 'en', 'ru', 'tr'
  question  String
  answer    String

  @@unique([faqItemId, locale])
}
```

---

## Примеры запросов/ответов

### GET /api/products

**Response:**
```json
{
  "data": [
    {
      "id": "1",
      "slug": "espresso-master-pro",
      "name": "Espresso Master Pro",
      "description": "Professional-grade espresso machine...",
      "price": 599,
      "currency": "USD",
      "images": ["/image/product-1.png"],
      "categoryId": "1",
      "brandId": "1",
      "colors": ["#C0C0C0", "#000000"],
      "specs": [
        { "label": "Pressure", "value": "15 bar" },
        { "label": "Water Tank", "value": "2L" }
      ],
      "inStock": true,
      "createdAt": "2024-01-15T10:00:00Z",
      "updatedAt": "2024-01-15T10:00:00Z"
    }
  ],
  "meta": {
    "total": 16,
    "page": 1,
    "limit": 10,
    "totalPages": 2
  }
}
```

### POST /api/products

**Request:**
```json
{
  "slug": "new-product",
  "name": "New Product",
  "description": "Product description",
  "price": 299,
  "currency": "USD",
  "images": ["/image/new-product.png"],
  "categoryId": "1",
  "brandId": "1",
  "colors": ["#000000"],
  "specs": [
    { "label": "Power", "value": "1000W" }
  ],
  "inStock": true
}
```

### GET /api/categories

**Response:**
```json
{
  "data": [
    {
      "id": "1",
      "slug": "coffee-machines",
      "name": "Coffee Machines",
      "description": "Premium coffee machines for the perfect brew",
      "image": "/image/category-1.png",
      "parentId": null,
      "productCount": 5
    }
  ]
}
```
