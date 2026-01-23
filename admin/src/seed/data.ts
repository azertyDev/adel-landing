// Seed data for Strapi CMS
// Generated from product images catalog: AD9201A (2)
// Supports 3 locales: en (default), ru, tr

// =============================================================================
// COLORS
// =============================================================================
export const colors = [
  {
    name: 'Silver',
    hex: '#C0C0C0',
    localizations: {
      ru: { name: 'Серебристый' },
      tr: { name: 'Gümüş' },
    },
  },
  {
    name: 'Black',
    hex: '#000000',
    localizations: {
      ru: { name: 'Чёрный' },
      tr: { name: 'Siyah' },
    },
  },
  {
    name: 'White',
    hex: '#FFFFFF',
    localizations: {
      ru: { name: 'Белый' },
      tr: { name: 'Beyaz' },
    },
  },
  {
    name: 'Red',
    hex: '#FF0000',
    localizations: {
      ru: { name: 'Красный' },
      tr: { name: 'Kırmızı' },
    },
  },
  {
    name: 'Grey',
    hex: '#808080',
    localizations: {
      ru: { name: 'Серый' },
      tr: { name: 'Gri' },
    },
  },
];

// =============================================================================
// CATEGORIES
// =============================================================================
export const categories = [
  {
    name: 'Coffee Machines',
    slug: 'coffee-machines',
    description: 'Premium coffee machines for the perfect brew',
    localizations: {
      ru: { name: 'Кофемашины', description: 'Премиальные кофемашины для идеального напитка' },
      tr: {
        name: 'Kahve Makineleri',
        description: 'Mükemmel demleme için premium kahve makineleri',
      },
    },
  },
  {
    name: 'Meat Grinders',
    slug: 'meat-grinders',
    description: 'Powerful meat grinders for your kitchen',
    localizations: {
      ru: { name: 'Мясорубки', description: 'Мощные мясорубки для вашей кухни' },
      tr: { name: 'Kıyma Makineleri', description: 'Mutfağınız için güçlü kıyma makineleri' },
    },
  },
  {
    name: 'Kitchen Machines',
    slug: 'kitchen-machines',
    description: 'Professional stand mixers and kitchen machines',
    localizations: {
      ru: {
        name: 'Кухонные комбайны',
        description: 'Профессиональные кухонные комбайны и миксеры',
      },
      tr: {
        name: 'Mutfak Makineleri',
        description: 'Profesyonel stand mikserler ve mutfak makineleri',
      },
    },
  },
  {
    name: 'Other Appliances',
    slug: 'other-appliances',
    description: 'Other kitchen and home appliances',
    localizations: {
      ru: { name: 'Другая техника', description: 'Другая кухонная и домашняя техника' },
      tr: { name: 'Diğer Cihazlar', description: 'Diğer mutfak ve ev aletleri' },
    },
  },
];

// =============================================================================
// BRANDS
// =============================================================================
export const brands = [
  {
    name: 'ADEL',
    slug: 'adel',
    localizations: {
      ru: { name: 'ADEL' },
      tr: { name: 'ADEL' },
    },
  },
  {
    name: 'Demaria',
    slug: 'demaria',
    localizations: {
      ru: { name: 'Demaria' },
      tr: { name: 'Demaria' },
    },
  },
  {
    name: 'Invitop',
    slug: 'invitop',
    localizations: {
      ru: { name: 'Invitop' },
      tr: { name: 'Invitop' },
    },
  },
  {
    name: 'Maggie',
    slug: 'maggie',
    localizations: {
      ru: { name: 'Maggie' },
      tr: { name: 'Maggie' },
    },
  },
];

// =============================================================================
// PRODUCTS
// =============================================================================
export const products = [
  // ==========================================================================
  // COFFEE MACHINES - ADEL Brand
  // ==========================================================================
  {
    name: 'AD6628T Coffee Machine',
    slug: 'ad6628t',
    model: 'AD6628T',
    price: 299,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description: 'Compact and efficient coffee machine with modern design.',
    variants: [
      { color: '#C0C0C0', images: ['AD6628T.png'] },
      { color: '#000000', images: ['AD6628T 侧面.png'] },
    ],
    specs: [
      { label: 'Power', value: '1000W' },
      { label: 'Capacity', value: '1.2L' },
    ],
    features: [
      { title: 'Compact Design', description: 'Space-saving design for any kitchen' },
      { title: 'Easy Operation', description: 'Simple controls for quick brewing' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина AD6628T',
        description: 'Компактная и эффективная кофемашина с современным дизайном.',
        specs: [
          { label: 'Мощность', value: '1000 Вт' },
          { label: 'Объём', value: '1.2 л' },
        ],
        features: [
          { title: 'Компактный дизайн', description: 'Компактный дизайн для любой кухни' },
          {
            title: 'Простое управление',
            description: 'Простые элементы управления для быстрого приготовления',
          },
        ],
      },
      tr: {
        name: 'AD6628T Kahve Makinesi',
        description: 'Modern tasarımlı kompakt ve verimli kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1000W' },
          { label: 'Kapasite', value: '1.2L' },
        ],
        features: [
          {
            title: 'Kompakt Tasarım',
            description: 'Her mutfak için yer tasarrufu sağlayan tasarım',
          },
          { title: 'Kolay Kullanım', description: 'Hızlı demleme için basit kontroller' },
        ],
      },
    },
  },
  {
    name: 'AD6629T Coffee Machine',
    slug: 'ad6629t',
    model: 'AD6629T',
    price: 329,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description: 'Advanced coffee machine with enhanced brewing capabilities.',
    variants: [
      { color: '#C0C0C0', images: ['AD6629T.png'] },
      { color: '#000000', images: ['AD6629T-2.png'] },
    ],
    specs: [
      { label: 'Power', value: '1200W' },
      { label: 'Capacity', value: '1.5L' },
    ],
    features: [
      { title: 'Enhanced Brewing', description: 'Advanced brewing technology for better taste' },
      { title: 'Multiple Settings', description: 'Customizable brewing options' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина AD6629T',
        description: 'Продвинутая кофемашина с улучшенными возможностями заваривания.',
        specs: [
          { label: 'Мощность', value: '1200 Вт' },
          { label: 'Объём', value: '1.5 л' },
        ],
        features: [
          {
            title: 'Улучшенное заваривание',
            description: 'Продвинутая технология заваривания для лучшего вкуса',
          },
          { title: 'Несколько режимов', description: 'Настраиваемые параметры заваривания' },
        ],
      },
      tr: {
        name: 'AD6629T Kahve Makinesi',
        description: 'Gelişmiş demleme özelliklerine sahip gelişmiş kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1200W' },
          { label: 'Kapasite', value: '1.5L' },
        ],
        features: [
          {
            title: 'Gelişmiş Demleme',
            description: 'Daha iyi tat için gelişmiş demleme teknolojisi',
          },
          { title: 'Çoklu Ayarlar', description: 'Özelleştirilebilir demleme seçenekleri' },
        ],
      },
    },
  },
  {
    name: 'AD6858 Coffee Machine',
    slug: 'ad6858',
    model: 'AD6858',
    price: 449,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description: 'Premium coffee machine with professional-grade features.',
    variants: [
      { color: '#000000', images: ['AD6858 正面.jpg'] },
      { color: '#C0C0C0', images: ['AD6858 侧面.png'] },
    ],
    specs: [
      { label: 'Power', value: '1400W' },
      { label: 'Capacity', value: '1.8L' },
      { label: 'Pressure', value: '15 bar' },
    ],
    features: [
      { title: 'Professional Grade', description: 'Cafe-quality coffee at home' },
      { title: 'High Pressure', description: '15 bar pressure for perfect extraction' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина AD6858',
        description: 'Премиальная кофемашина с профессиональными функциями.',
        specs: [
          { label: 'Мощность', value: '1400 Вт' },
          { label: 'Объём', value: '1.8 л' },
          { label: 'Давление', value: '15 бар' },
        ],
        features: [
          { title: 'Профессиональный класс', description: 'Кофе качества кафе дома' },
          { title: 'Высокое давление', description: 'Давление 15 бар для идеальной экстракции' },
        ],
      },
      tr: {
        name: 'AD6858 Kahve Makinesi',
        description: 'Profesyonel düzeyde özelliklere sahip premium kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1400W' },
          { label: 'Kapasite', value: '1.8L' },
          { label: 'Basınç', value: '15 bar' },
        ],
        features: [
          { title: 'Profesyonel Sınıf', description: 'Evde kafe kalitesinde kahve' },
          { title: 'Yüksek Basınç', description: 'Mükemmel ekstraksiyon için 15 bar basınç' },
        ],
      },
    },
  },
  {
    name: 'AD7203 Coffee Machine',
    slug: 'ad7203',
    model: 'AD7203',
    price: 379,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description: 'Versatile coffee machine with multiple brewing modes.',
    variants: [
      { color: '#C0C0C0', images: ['AD7203 正面.png'] },
      { color: '#000000', images: ['AD7203 侧视图.png'] },
    ],
    specs: [
      { label: 'Power', value: '1300W' },
      { label: 'Capacity', value: '1.6L' },
    ],
    features: [
      { title: 'Multiple Modes', description: 'Espresso, cappuccino, and more' },
      { title: 'Easy Cleaning', description: 'Removable parts for easy maintenance' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина AD7203',
        description: 'Универсальная кофемашина с несколькими режимами заваривания.',
        specs: [
          { label: 'Мощность', value: '1300 Вт' },
          { label: 'Объём', value: '1.6 л' },
        ],
        features: [
          { title: 'Несколько режимов', description: 'Эспрессо, капучино и другие' },
          { title: 'Простая очистка', description: 'Съёмные части для лёгкого обслуживания' },
        ],
      },
      tr: {
        name: 'AD7203 Kahve Makinesi',
        description: 'Çoklu demleme modlarına sahip çok yönlü kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1300W' },
          { label: 'Kapasite', value: '1.6L' },
        ],
        features: [
          { title: 'Çoklu Modlar', description: 'Espresso, cappuccino ve daha fazlası' },
          { title: 'Kolay Temizlik', description: 'Kolay bakım için çıkarılabilir parçalar' },
        ],
      },
    },
  },
  {
    name: 'AD7205 Coffee Machine',
    slug: 'ad7205',
    model: 'AD7205',
    price: 399,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description: 'Smart coffee machine with programmable settings.',
    variants: [
      { color: '#000000', images: ['AD7205.png'] },
      { color: '#C0C0C0', images: ['AD7205 正.png'] },
    ],
    specs: [
      { label: 'Power', value: '1350W' },
      { label: 'Capacity', value: '1.7L' },
    ],
    features: [
      { title: 'Smart Controls', description: 'Programmable brewing schedules' },
      { title: 'Energy Efficient', description: 'Auto shut-off feature' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина AD7205',
        description: 'Умная кофемашина с программируемыми настройками.',
        specs: [
          { label: 'Мощность', value: '1350 Вт' },
          { label: 'Объём', value: '1.7 л' },
        ],
        features: [
          { title: 'Умное управление', description: 'Программируемое расписание заваривания' },
          { title: 'Энергоэффективность', description: 'Функция автоматического отключения' },
        ],
      },
      tr: {
        name: 'AD7205 Kahve Makinesi',
        description: 'Programlanabilir ayarlara sahip akıllı kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1350W' },
          { label: 'Kapasite', value: '1.7L' },
        ],
        features: [
          { title: 'Akıllı Kontroller', description: 'Programlanabilir demleme zamanlamaları' },
          { title: 'Enerji Verimli', description: 'Otomatik kapanma özelliği' },
        ],
      },
    },
  },
  {
    name: 'AD7310 Coffee Machine',
    slug: 'ad7310',
    model: 'AD7310',
    price: 549,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description: 'High-end coffee machine with built-in grinder.',
    variants: [
      { color: '#C0C0C0', images: ['AD7310.png'] },
      { color: '#000000', images: ['AD7310 正面.png'] },
    ],
    specs: [
      { label: 'Power', value: '1500W' },
      { label: 'Capacity', value: '2L' },
      { label: 'Grinder', value: 'Built-in Burr' },
    ],
    features: [
      { title: 'Built-in Grinder', description: 'Fresh ground coffee for every cup' },
      { title: 'Large Capacity', description: '2L water tank for multiple servings' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина AD7310',
        description: 'Высококлассная кофемашина со встроенной кофемолкой.',
        specs: [
          { label: 'Мощность', value: '1500 Вт' },
          { label: 'Объём', value: '2 л' },
          { label: 'Кофемолка', value: 'Встроенная жерновая' },
        ],
        features: [
          { title: 'Встроенная кофемолка', description: 'Свежемолотый кофе для каждой чашки' },
          { title: 'Большой объём', description: 'Бак на 2 л для нескольких порций' },
        ],
      },
      tr: {
        name: 'AD7310 Kahve Makinesi',
        description: 'Dahili öğütücüye sahip üst düzey kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1500W' },
          { label: 'Kapasite', value: '2L' },
          { label: 'Öğütücü', value: 'Dahili' },
        ],
        features: [
          { title: 'Dahili Öğütücü', description: 'Her fincan için taze çekilmiş kahve' },
          { title: 'Büyük Kapasite', description: 'Birden fazla servis için 2L su tankı' },
        ],
      },
    },
  },
  {
    name: 'AD7311 Coffee Machine',
    slug: 'ad7311',
    model: 'AD7311',
    price: 599,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description: 'Premium automatic coffee machine with touch display.',
    variants: [
      { color: '#000000', images: ['AD7311.png'] },
      { color: '#C0C0C0', images: ['AD7311 正面.png'] },
    ],
    specs: [
      { label: 'Power', value: '1550W' },
      { label: 'Capacity', value: '2.2L' },
      { label: 'Display', value: 'Touch Screen' },
    ],
    features: [
      { title: 'Touch Display', description: 'Intuitive touch screen controls' },
      { title: 'Automatic Cleaning', description: 'Self-cleaning system' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина AD7311',
        description: 'Премиальная автоматическая кофемашина с сенсорным дисплеем.',
        specs: [
          { label: 'Мощность', value: '1550 Вт' },
          { label: 'Объём', value: '2.2 л' },
          { label: 'Дисплей', value: 'Сенсорный экран' },
        ],
        features: [
          { title: 'Сенсорный дисплей', description: 'Интуитивное сенсорное управление' },
          { title: 'Автоматическая очистка', description: 'Система самоочистки' },
        ],
      },
      tr: {
        name: 'AD7311 Kahve Makinesi',
        description: 'Dokunmatik ekranlı premium otomatik kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1550W' },
          { label: 'Kapasite', value: '2.2L' },
          { label: 'Ekran', value: 'Dokunmatik Ekran' },
        ],
        features: [
          { title: 'Dokunmatik Ekran', description: 'Sezgisel dokunmatik ekran kontrolleri' },
          { title: 'Otomatik Temizlik', description: 'Kendi kendini temizleme sistemi' },
        ],
      },
    },
  },

  // ==========================================================================
  // COFFEE MACHINES - Demaria Brand
  // ==========================================================================
  {
    name: 'CG018 Coffee Grinder',
    slug: 'cg018',
    model: 'CG018',
    price: 149,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'demaria',
    description: 'Professional coffee grinder with precision settings.',
    variants: [
      { color: '#000000', images: ['cg018-正视图.png'] },
      { color: '#C0C0C0', images: ['cg018-左视图.png'] },
    ],
    specs: [
      { label: 'Power', value: '200W' },
      { label: 'Capacity', value: '250g' },
    ],
    features: [
      { title: 'Precision Grinding', description: 'Adjustable grind settings' },
      { title: 'Low Noise', description: 'Quiet operation' },
    ],
    localizations: {
      ru: {
        name: 'Кофемолка CG018',
        description: 'Профессиональная кофемолка с точными настройками.',
        specs: [
          { label: 'Мощность', value: '200 Вт' },
          { label: 'Объём', value: '250 г' },
        ],
        features: [
          { title: 'Точный помол', description: 'Регулируемые настройки помола' },
          { title: 'Тихая работа', description: 'Низкий уровень шума' },
        ],
      },
      tr: {
        name: 'CG018 Kahve Öğütücü',
        description: 'Hassas ayarlara sahip profesyonel kahve öğütücü.',
        specs: [
          { label: 'Güç', value: '200W' },
          { label: 'Kapasite', value: '250g' },
        ],
        features: [
          { title: 'Hassas Öğütme', description: 'Ayarlanabilir öğütme ayarları' },
          { title: 'Düşük Gürültü', description: 'Sessiz çalışma' },
        ],
      },
    },
  },
  {
    name: 'CG301 Coffee Grinder',
    slug: 'cg301',
    model: 'CG301',
    price: 199,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'demaria',
    description: 'Advanced coffee grinder with burr mechanism.',
    variants: [
      { color: '#C0C0C0', images: ['CG301正面.png'] },
      { color: '#000000', images: ['CG301侧面.png'] },
    ],
    specs: [
      { label: 'Power', value: '250W' },
      { label: 'Capacity', value: '300g' },
      { label: 'Grinder Type', value: 'Burr' },
    ],
    features: [
      { title: 'Burr Grinder', description: 'Consistent grind size' },
      { title: 'Large Capacity', description: '300g bean container' },
    ],
    localizations: {
      ru: {
        name: 'Кофемолка CG301',
        description: 'Продвинутая кофемолка с жерновым механизмом.',
        specs: [
          { label: 'Мощность', value: '250 Вт' },
          { label: 'Объём', value: '300 г' },
          { label: 'Тип кофемолки', value: 'Жерновая' },
        ],
        features: [
          { title: 'Жерновая кофемолка', description: 'Равномерный размер помола' },
          { title: 'Большой объём', description: 'Контейнер для зёрен 300 г' },
        ],
      },
      tr: {
        name: 'CG301 Kahve Öğütücü',
        description: 'Burr mekanizmalı gelişmiş kahve öğütücü.',
        specs: [
          { label: 'Güç', value: '250W' },
          { label: 'Kapasite', value: '300g' },
          { label: 'Öğütücü Tipi', value: 'Burr' },
        ],
        features: [
          { title: 'Burr Öğütücü', description: 'Tutarlı öğütme boyutu' },
          { title: 'Büyük Kapasite', description: '300g çekirdek haznesi' },
        ],
      },
    },
  },
  {
    name: 'CM601 Coffee Machine',
    slug: 'cm601',
    model: 'CM601',
    price: 499,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'demaria',
    description: 'Professional espresso machine with black panel design.',
    variants: [{ color: '#000000', images: ['CM601-黑色面板正俯视.png'] }],
    specs: [
      { label: 'Power', value: '1400W' },
      { label: 'Pressure', value: '15 bar' },
      { label: 'Capacity', value: '1.8L' },
    ],
    features: [
      { title: 'Professional Grade', description: '15 bar pressure system' },
      { title: 'Elegant Design', description: 'Black panel finish' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина CM601',
        description: 'Профессиональная эспрессо-машина с чёрной панелью.',
        specs: [
          { label: 'Мощность', value: '1400 Вт' },
          { label: 'Давление', value: '15 бар' },
          { label: 'Объём', value: '1.8 л' },
        ],
        features: [
          { title: 'Профессиональный класс', description: 'Система давления 15 бар' },
          { title: 'Элегантный дизайн', description: 'Отделка чёрной панелью' },
        ],
      },
      tr: {
        name: 'CM601 Kahve Makinesi',
        description: 'Siyah panel tasarımlı profesyonel espresso makinesi.',
        specs: [
          { label: 'Güç', value: '1400W' },
          { label: 'Basınç', value: '15 bar' },
          { label: 'Kapasite', value: '1.8L' },
        ],
        features: [
          { title: 'Profesyonel Sınıf', description: '15 bar basınç sistemi' },
          { title: 'Şık Tasarım', description: 'Siyah panel kaplaması' },
        ],
      },
    },
  },
  {
    name: 'CM602 Coffee Machine',
    slug: 'cm602',
    model: 'CM602',
    price: 549,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'demaria',
    description: 'Advanced coffee machine with automatic milk frothing.',
    variants: [
      { color: '#C0C0C0', images: ['CM602正视图.png'] },
      { color: '#000000', images: ['CM602左45度.png'] },
    ],
    specs: [
      { label: 'Power', value: '1500W' },
      { label: 'Pressure', value: '19 bar' },
      { label: 'Capacity', value: '2L' },
    ],
    features: [
      { title: 'Auto Milk Frother', description: 'One-touch cappuccino' },
      { title: 'High Pressure', description: '19 bar for perfect extraction' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина CM602',
        description: 'Продвинутая кофемашина с автоматическим капучинатором.',
        specs: [
          { label: 'Мощность', value: '1500 Вт' },
          { label: 'Давление', value: '19 бар' },
          { label: 'Объём', value: '2 л' },
        ],
        features: [
          { title: 'Авто-капучинатор', description: 'Капучино одним нажатием' },
          { title: 'Высокое давление', description: '19 бар для идеальной экстракции' },
        ],
      },
      tr: {
        name: 'CM602 Kahve Makinesi',
        description: 'Otomatik süt köpürtücülü gelişmiş kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1500W' },
          { label: 'Basınç', value: '19 bar' },
          { label: 'Kapasite', value: '2L' },
        ],
        features: [
          { title: 'Otomatik Süt Köpürtücü', description: 'Tek dokunuşla cappuccino' },
          { title: 'Yüksek Basınç', description: 'Mükemmel ekstraksiyon için 19 bar' },
        ],
      },
    },
  },

  // ==========================================================================
  // COFFEE MACHINES - Maggie Brand
  // ==========================================================================
  {
    name: 'CM827M Coffee Machine',
    slug: 'cm827m',
    model: 'CM827M',
    price: 429,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'maggie',
    description: 'Multi-functional coffee machine with modern features.',
    variants: [
      { color: '#C0C0C0', images: ['CM827M.jpg'] },
      { color: '#000000', images: ['CM827M (2).jpg'] },
    ],
    specs: [
      { label: 'Power', value: '1350W' },
      { label: 'Capacity', value: '1.8L' },
    ],
    features: [
      { title: 'Multi-functional', description: 'Multiple brewing options' },
      { title: 'Modern Design', description: 'Sleek and stylish appearance' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина CM827M',
        description: 'Многофункциональная кофемашина с современными функциями.',
        specs: [
          { label: 'Мощность', value: '1350 Вт' },
          { label: 'Объём', value: '1.8 л' },
        ],
        features: [
          { title: 'Многофункциональность', description: 'Несколько вариантов заваривания' },
          { title: 'Современный дизайн', description: 'Стильный и элегантный внешний вид' },
        ],
      },
      tr: {
        name: 'CM827M Kahve Makinesi',
        description: 'Modern özelliklere sahip çok işlevli kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1350W' },
          { label: 'Kapasite', value: '1.8L' },
        ],
        features: [
          { title: 'Çok İşlevli', description: 'Çoklu demleme seçenekleri' },
          { title: 'Modern Tasarım', description: 'Şık ve zarif görünüm' },
        ],
      },
    },
  },
  {
    name: 'CM832 Coffee Machine',
    slug: 'cm832',
    model: 'CM832',
    price: 479,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'maggie',
    description: 'Premium coffee machine with advanced brewing technology.',
    variants: [
      { color: '#000000', images: ['CM832.jpg'] },
      { color: '#C0C0C0', images: ['CM832.png'] },
    ],
    specs: [
      { label: 'Power', value: '1450W' },
      { label: 'Capacity', value: '2L' },
      { label: 'Pressure', value: '15 bar' },
    ],
    features: [
      { title: 'Advanced Brewing', description: 'Superior extraction technology' },
      { title: 'Large Capacity', description: '2L water tank' },
    ],
    localizations: {
      ru: {
        name: 'Кофемашина CM832',
        description: 'Премиальная кофемашина с продвинутой технологией заваривания.',
        specs: [
          { label: 'Мощность', value: '1450 Вт' },
          { label: 'Объём', value: '2 л' },
          { label: 'Давление', value: '15 бар' },
        ],
        features: [
          { title: 'Продвинутое заваривание', description: 'Превосходная технология экстракции' },
          { title: 'Большой объём', description: 'Бак для воды 2 л' },
        ],
      },
      tr: {
        name: 'CM832 Kahve Makinesi',
        description: 'Gelişmiş demleme teknolojisine sahip premium kahve makinesi.',
        specs: [
          { label: 'Güç', value: '1450W' },
          { label: 'Kapasite', value: '2L' },
          { label: 'Basınç', value: '15 bar' },
        ],
        features: [
          { title: 'Gelişmiş Demleme', description: 'Üstün ekstraksiyon teknolojisi' },
          { title: 'Büyük Kapasite', description: '2L su tankı' },
        ],
      },
    },
  },

  // ==========================================================================
  // MEAT GRINDERS - Demaria Brand
  // ==========================================================================
  {
    name: 'MG-1D Meat Grinder',
    slug: 'mg-1d',
    model: 'MG-1D',
    price: 199,
    currency: 'USD',
    inStock: true,
    categorySlug: 'meat-grinders',
    brandSlug: 'demaria',
    description: 'Powerful meat grinder with multiple attachments.',
    variants: [
      { color: '#808080', images: ['MG-1D (15).jpg'] },
      { color: '#C0C0C0', images: ['MG-1D 灰.jpg'] },
    ],
    specs: [
      { label: 'Power', value: '1800W' },
      { label: 'Capacity', value: '2kg/min' },
    ],
    features: [
      { title: 'High Power', description: '1800W motor for efficient grinding' },
      { title: 'Multiple Attachments', description: 'Various grinding plates included' },
    ],
    localizations: {
      ru: {
        name: 'Мясорубка MG-1D',
        description: 'Мощная мясорубка с несколькими насадками.',
        specs: [
          { label: 'Мощность', value: '1800 Вт' },
          { label: 'Производительность', value: '2 кг/мин' },
        ],
        features: [
          { title: 'Высокая мощность', description: 'Мотор 1800 Вт для эффективного измельчения' },
          {
            title: 'Несколько насадок',
            description: 'Различные диски для измельчения в комплекте',
          },
        ],
      },
      tr: {
        name: 'MG-1D Kıyma Makinesi',
        description: 'Çoklu aparatlara sahip güçlü kıyma makinesi.',
        specs: [
          { label: 'Güç', value: '1800W' },
          { label: 'Kapasite', value: '2kg/dk' },
        ],
        features: [
          { title: 'Yüksek Güç', description: 'Verimli öğütme için 1800W motor' },
          { title: 'Çoklu Aparatlar', description: 'Çeşitli öğütme plakaları dahil' },
        ],
      },
    },
  },
  {
    name: 'MG-1F Meat Grinder',
    slug: 'mg-1f',
    model: 'MG-1F',
    price: 229,
    currency: 'USD',
    inStock: true,
    categorySlug: 'meat-grinders',
    brandSlug: 'demaria',
    description: 'Professional meat grinder with sausage making attachments.',
    variants: [
      { color: '#C0C0C0', images: ['MG-1F 1.jpg'] },
      { color: '#000000', images: ['MG-1F 2.jpg'] },
    ],
    specs: [
      { label: 'Power', value: '2000W' },
      { label: 'Capacity', value: '2.5kg/min' },
    ],
    features: [
      { title: 'Sausage Making', description: 'Includes sausage stuffing tubes' },
      { title: 'Powerful Motor', description: '2000W for heavy-duty grinding' },
    ],
    localizations: {
      ru: {
        name: 'Мясорубка MG-1F',
        description: 'Профессиональная мясорубка с насадками для колбас.',
        specs: [
          { label: 'Мощность', value: '2000 Вт' },
          { label: 'Производительность', value: '2.5 кг/мин' },
        ],
        features: [
          { title: 'Приготовление колбас', description: 'Насадки для набивки колбас в комплекте' },
          { title: 'Мощный мотор', description: '2000 Вт для интенсивного измельчения' },
        ],
      },
      tr: {
        name: 'MG-1F Kıyma Makinesi',
        description: 'Sosis yapma aparatlarına sahip profesyonel kıyma makinesi.',
        specs: [
          { label: 'Güç', value: '2000W' },
          { label: 'Kapasite', value: '2.5kg/dk' },
        ],
        features: [
          { title: 'Sosis Yapımı', description: 'Sosis doldurma tüpleri dahil' },
          { title: 'Güçlü Motor', description: 'Ağır hizmet öğütme için 2000W' },
        ],
      },
    },
  },
  {
    name: 'MG-1K Meat Grinder',
    slug: 'mg-1k',
    model: 'MG-1K',
    price: 259,
    currency: 'USD',
    inStock: true,
    categorySlug: 'meat-grinders',
    brandSlug: 'demaria',
    description: 'Heavy-duty meat grinder for commercial use.',
    variants: [{ color: '#C0C0C0', images: ['7897e988300d73520c3bc742f91f6bc.png'] }],
    specs: [
      { label: 'Power', value: '2200W' },
      { label: 'Capacity', value: '3kg/min' },
    ],
    features: [
      { title: 'Commercial Grade', description: 'Built for heavy use' },
      { title: 'High Capacity', description: '3kg per minute output' },
    ],
    localizations: {
      ru: {
        name: 'Мясорубка MG-1K',
        description: 'Мясорубка для коммерческого использования.',
        specs: [
          { label: 'Мощность', value: '2200 Вт' },
          { label: 'Производительность', value: '3 кг/мин' },
        ],
        features: [
          { title: 'Коммерческий класс', description: 'Создана для интенсивного использования' },
          { title: 'Высокая производительность', description: 'Выход 3 кг в минуту' },
        ],
      },
      tr: {
        name: 'MG-1K Kıyma Makinesi',
        description: 'Ticari kullanım için ağır hizmet kıyma makinesi.',
        specs: [
          { label: 'Güç', value: '2200W' },
          { label: 'Kapasite', value: '3kg/dk' },
        ],
        features: [
          { title: 'Ticari Sınıf', description: 'Yoğun kullanım için üretildi' },
          { title: 'Yüksek Kapasite', description: 'Dakikada 3kg çıkış' },
        ],
      },
    },
  },
  {
    name: 'MGV Meat Grinder',
    slug: 'mgv',
    model: 'MGV',
    price: 289,
    currency: 'USD',
    inStock: true,
    categorySlug: 'meat-grinders',
    brandSlug: 'demaria',
    description: 'Versatile meat grinder with vegetable processing capability.',
    variants: [{ color: '#C0C0C0', images: ['MGV-高清图.jpg'] }],
    specs: [
      { label: 'Power', value: '2000W' },
      { label: 'Capacity', value: '2.5kg/min' },
      { label: 'Functions', value: 'Meat & Vegetables' },
    ],
    features: [
      { title: 'Multi-purpose', description: 'Process meat and vegetables' },
      { title: 'Complete Set', description: 'Full accessory kit included' },
    ],
    localizations: {
      ru: {
        name: 'Мясорубка MGV',
        description: 'Универсальная мясорубка с возможностью обработки овощей.',
        specs: [
          { label: 'Мощность', value: '2000 Вт' },
          { label: 'Производительность', value: '2.5 кг/мин' },
          { label: 'Функции', value: 'Мясо и овощи' },
        ],
        features: [
          { title: 'Многофункциональность', description: 'Обработка мяса и овощей' },
          { title: 'Полный комплект', description: 'Полный набор аксессуаров в комплекте' },
        ],
      },
      tr: {
        name: 'MGV Kıyma Makinesi',
        description: 'Sebze işleme özelliğine sahip çok yönlü kıyma makinesi.',
        specs: [
          { label: 'Güç', value: '2000W' },
          { label: 'Kapasite', value: '2.5kg/dk' },
          { label: 'Fonksiyonlar', value: 'Et ve Sebze' },
        ],
        features: [
          { title: 'Çok Amaçlı', description: 'Et ve sebze işleme' },
          { title: 'Tam Set', description: 'Tam aksesuar kiti dahil' },
        ],
      },
    },
  },

  // ==========================================================================
  // KITCHEN MACHINES - Invitop Brand
  // ==========================================================================
  {
    name: 'Cody Pro Stand Mixer',
    slug: 'cody-pro',
    model: 'Cody Pro',
    price: 449,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-machines',
    brandSlug: 'invitop',
    description: 'Professional stand mixer with powerful motor and multiple attachments.',
    variants: [
      { color: '#C0C0C0', images: ['Cody Pro 正面.884.png'] },
      { color: '#000000', images: ['Cody Pro 斜面.885.png'] },
    ],
    specs: [
      { label: 'Power', value: '1200W' },
      { label: 'Bowl Capacity', value: '6.5L' },
      { label: 'Speed Settings', value: '10' },
    ],
    features: [
      { title: 'Powerful Motor', description: '1200W for tough doughs' },
      { title: 'Large Bowl', description: '6.5L stainless steel bowl' },
      { title: 'Multiple Attachments', description: 'Whisk, dough hook, and paddle' },
    ],
    localizations: {
      ru: {
        name: 'Планетарный миксер Cody Pro',
        description:
          'Профессиональный планетарный миксер с мощным мотором и несколькими насадками.',
        specs: [
          { label: 'Мощность', value: '1200 Вт' },
          { label: 'Объём чаши', value: '6.5 л' },
          { label: 'Скорости', value: '10' },
        ],
        features: [
          { title: 'Мощный мотор', description: '1200 Вт для тяжёлого теста' },
          { title: 'Большая чаша', description: 'Чаша из нержавеющей стали 6.5 л' },
          { title: 'Несколько насадок', description: 'Венчик, крюк для теста и лопатка' },
        ],
      },
      tr: {
        name: 'Cody Pro Stand Mikser',
        description: 'Güçlü motora ve çoklu aparatlara sahip profesyonel stand mikser.',
        specs: [
          { label: 'Güç', value: '1200W' },
          { label: 'Kase Kapasitesi', value: '6.5L' },
          { label: 'Hız Ayarları', value: '10' },
        ],
        features: [
          { title: 'Güçlü Motor', description: 'Sert hamurlar için 1200W' },
          { title: 'Büyük Kase', description: '6.5L paslanmaz çelik kase' },
          { title: 'Çoklu Aparatlar', description: 'Çırpıcı, hamur kancası ve kürek' },
        ],
      },
    },
  },
  {
    name: 'Colin Stand Mixer',
    slug: 'colin',
    model: 'Colin',
    price: 379,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-machines',
    brandSlug: 'invitop',
    description: 'Elegant stand mixer with quiet operation and precise control.',
    variants: [
      { color: '#FFFFFF', images: ['20230605-Colin 正视图.png'] },
      { color: '#000000', images: ['20230605-Colin 侧视图1.png'] },
      { color: '#FFB6C1', images: ['白色顶盖正面Colin.png'] },
    ],
    specs: [
      { label: 'Power', value: '1000W' },
      { label: 'Bowl Capacity', value: '5.5L' },
      { label: 'Speed Settings', value: '8' },
    ],
    features: [
      { title: 'Quiet Operation', description: 'Low noise motor technology' },
      { title: 'Elegant Design', description: 'Available in multiple colors' },
    ],
    localizations: {
      ru: {
        name: 'Планетарный миксер Colin',
        description: 'Элегантный планетарный миксер с тихой работой и точным управлением.',
        specs: [
          { label: 'Мощность', value: '1000 Вт' },
          { label: 'Объём чаши', value: '5.5 л' },
          { label: 'Скорости', value: '8' },
        ],
        features: [
          { title: 'Тихая работа', description: 'Технология малошумного мотора' },
          { title: 'Элегантный дизайн', description: 'Доступен в нескольких цветах' },
        ],
      },
      tr: {
        name: 'Colin Stand Mikser',
        description: 'Sessiz çalışma ve hassas kontrole sahip şık stand mikser.',
        specs: [
          { label: 'Güç', value: '1000W' },
          { label: 'Kase Kapasitesi', value: '5.5L' },
          { label: 'Hız Ayarları', value: '8' },
        ],
        features: [
          { title: 'Sessiz Çalışma', description: 'Düşük gürültülü motor teknolojisi' },
          { title: 'Şık Tasarım', description: 'Birden fazla renkte mevcut' },
        ],
      },
    },
  },
  {
    name: 'Jupiter Plus Stand Mixer',
    slug: 'jupiter-plus',
    model: 'Jupiter Plus',
    price: 529,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-machines',
    brandSlug: 'invitop',
    description: 'Premium stand mixer with advanced features and large capacity.',
    variants: [
      { color: '#C0C0C0', images: ['Jupiter plus 正面.945.png'] },
      { color: '#000000', images: ['Jupiter plus 侧面.944.png'] },
    ],
    specs: [
      { label: 'Power', value: '1500W' },
      { label: 'Bowl Capacity', value: '7L' },
      { label: 'Speed Settings', value: '12' },
    ],
    features: [
      { title: 'Premium Build', description: 'Die-cast metal construction' },
      { title: 'Extra Large Bowl', description: '7L capacity for big batches' },
      { title: 'Pro Features', description: '12 speed settings with pulse' },
    ],
    localizations: {
      ru: {
        name: 'Планетарный миксер Jupiter Plus',
        description: 'Премиальный планетарный миксер с продвинутыми функциями и большой ёмкостью.',
        specs: [
          { label: 'Мощность', value: '1500 Вт' },
          { label: 'Объём чаши', value: '7 л' },
          { label: 'Скорости', value: '12' },
        ],
        features: [
          { title: 'Премиальное качество', description: 'Литой металлический корпус' },
          { title: 'Очень большая чаша', description: 'Ёмкость 7 л для больших порций' },
          { title: 'Профессиональные функции', description: '12 скоростей с импульсным режимом' },
        ],
      },
      tr: {
        name: 'Jupiter Plus Stand Mikser',
        description: 'Gelişmiş özelliklere ve büyük kapasiteye sahip premium stand mikser.',
        specs: [
          { label: 'Güç', value: '1500W' },
          { label: 'Kase Kapasitesi', value: '7L' },
          { label: 'Hız Ayarları', value: '12' },
        ],
        features: [
          { title: 'Premium Yapı', description: 'Döküm metal yapı' },
          { title: 'Ekstra Büyük Kase', description: 'Büyük partiler için 7L kapasite' },
          { title: 'Pro Özellikler', description: 'Darbe ile 12 hız ayarı' },
        ],
      },
    },
  },
  {
    name: 'Mercury Stand Mixer',
    slug: 'mercury',
    model: 'Mercury',
    price: 399,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-machines',
    brandSlug: 'invitop',
    description: 'Versatile stand mixer with sleek design and reliable performance.',
    variants: [
      { color: '#C0C0C0', images: ['Mercury.1671.jpg'] },
      { color: '#000000', images: ['Mercury.1672.jpg'] },
      { color: '#FF0000', images: ['Mercury.1673.jpg'] },
    ],
    specs: [
      { label: 'Power', value: '1100W' },
      { label: 'Bowl Capacity', value: '6L' },
      { label: 'Speed Settings', value: '10' },
    ],
    features: [
      { title: 'Versatile', description: 'Perfect for all mixing tasks' },
      { title: 'Reliable', description: 'Built to last' },
    ],
    localizations: {
      ru: {
        name: 'Планетарный миксер Mercury',
        description: 'Универсальный планетарный миксер с элегантным дизайном и надёжной работой.',
        specs: [
          { label: 'Мощность', value: '1100 Вт' },
          { label: 'Объём чаши', value: '6 л' },
          { label: 'Скорости', value: '10' },
        ],
        features: [
          { title: 'Универсальность', description: 'Идеален для любых задач смешивания' },
          { title: 'Надёжность', description: 'Создан на долгие годы' },
        ],
      },
      tr: {
        name: 'Mercury Stand Mikser',
        description: 'Şık tasarıma ve güvenilir performansa sahip çok yönlü stand mikser.',
        specs: [
          { label: 'Güç', value: '1100W' },
          { label: 'Kase Kapasitesi', value: '6L' },
          { label: 'Hız Ayarları', value: '10' },
        ],
        features: [
          { title: 'Çok Yönlü', description: 'Tüm karıştırma görevleri için mükemmel' },
          { title: 'Güvenilir', description: 'Dayanıklı olarak üretildi' },
        ],
      },
    },
  },
  {
    name: 'Zoe Plus Stand Mixer',
    slug: 'zoe-plus',
    model: 'Zoe Plus',
    price: 359,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-machines',
    brandSlug: 'invitop',
    description: 'Compact stand mixer with stylish design and efficient performance.',
    variants: [
      { color: '#FFFFFF', images: ['zoeplus正面.jpg'] },
      { color: '#FFB6C1', images: ['zoeplus正侧面.jpg'] },
      { color: '#87CEEB', images: ['zoeplus全侧面.19.jpg'] },
    ],
    specs: [
      { label: 'Power', value: '800W' },
      { label: 'Bowl Capacity', value: '5L' },
      { label: 'Speed Settings', value: '6' },
    ],
    features: [
      { title: 'Compact Size', description: 'Perfect for smaller kitchens' },
      { title: 'Stylish Colors', description: 'Available in trendy pastel colors' },
    ],
    localizations: {
      ru: {
        name: 'Планетарный миксер Zoe Plus',
        description: 'Компактный планетарный миксер со стильным дизайном и эффективной работой.',
        specs: [
          { label: 'Мощность', value: '800 Вт' },
          { label: 'Объём чаши', value: '5 л' },
          { label: 'Скорости', value: '6' },
        ],
        features: [
          { title: 'Компактный размер', description: 'Идеален для небольших кухонь' },
          { title: 'Стильные цвета', description: 'Доступен в модных пастельных тонах' },
        ],
      },
      tr: {
        name: 'Zoe Plus Stand Mikser',
        description: 'Şık tasarıma ve verimli performansa sahip kompakt stand mikser.',
        specs: [
          { label: 'Güç', value: '800W' },
          { label: 'Kase Kapasitesi', value: '5L' },
          { label: 'Hız Ayarları', value: '6' },
        ],
        features: [
          { title: 'Kompakt Boyut', description: 'Küçük mutfaklar için mükemmel' },
          { title: 'Şık Renkler', description: 'Trend pastel renklerde mevcut' },
        ],
      },
    },
  },
  {
    name: 'A5-A Kitchen Machine',
    slug: 'a5-a',
    model: 'A5-A',
    price: 599,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-machines',
    brandSlug: 'invitop',
    description: 'Multi-functional kitchen machine with food processor capabilities.',
    variants: [
      { color: '#C0C0C0', images: ['01.jpg'] },
      { color: '#000000', images: ['03.jpg'] },
    ],
    specs: [
      { label: 'Power', value: '1500W' },
      { label: 'Bowl Capacity', value: '6.7L' },
      { label: 'Functions', value: 'Mix, Knead, Chop, Blend' },
    ],
    features: [
      { title: 'Multi-functional', description: 'Mixer, food processor, and blender in one' },
      { title: 'Professional Power', description: '1500W motor for any task' },
    ],
    localizations: {
      ru: {
        name: 'Кухонная машина A5-A',
        description: 'Многофункциональная кухонная машина с возможностями кухонного комбайна.',
        specs: [
          { label: 'Мощность', value: '1500 Вт' },
          { label: 'Объём чаши', value: '6.7 л' },
          { label: 'Функции', value: 'Смешивание, замес, нарезка, блендер' },
        ],
        features: [
          {
            title: 'Многофункциональность',
            description: 'Миксер, кухонный комбайн и блендер в одном',
          },
          { title: 'Профессиональная мощность', description: 'Мотор 1500 Вт для любой задачи' },
        ],
      },
      tr: {
        name: 'A5-A Mutfak Makinesi',
        description: 'Mutfak robotu özelliklerine sahip çok işlevli mutfak makinesi.',
        specs: [
          { label: 'Güç', value: '1500W' },
          { label: 'Kase Kapasitesi', value: '6.7L' },
          { label: 'Fonksiyonlar', value: 'Karıştır, Yoğur, Doğra, Blend' },
        ],
        features: [
          { title: 'Çok İşlevli', description: 'Tek cihazda mikser, mutfak robotu ve blender' },
          { title: 'Profesyonel Güç', description: 'Her görev için 1500W motor' },
        ],
      },
    },
  },
  {
    name: 'Apolo Kitchen Machine',
    slug: 'apolo',
    model: 'Apolo',
    price: 649,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-machines',
    brandSlug: 'invitop',
    description: 'Premium kitchen machine with advanced mixing technology.',
    variants: [
      { color: '#C0C0C0', images: ['APOLO (1).png'] },
      { color: '#000000', images: ['APOLO (2).png'] },
    ],
    specs: [
      { label: 'Power', value: '1800W' },
      { label: 'Bowl Capacity', value: '7L' },
      { label: 'Speed Settings', value: '12' },
    ],
    features: [
      { title: 'Advanced Technology', description: 'Planetary mixing action' },
      { title: 'Heavy Duty', description: 'Built for intensive use' },
    ],
    localizations: {
      ru: {
        name: 'Кухонная машина Apolo',
        description: 'Премиальная кухонная машина с продвинутой технологией смешивания.',
        specs: [
          { label: 'Мощность', value: '1800 Вт' },
          { label: 'Объём чаши', value: '7 л' },
          { label: 'Скорости', value: '12' },
        ],
        features: [
          { title: 'Продвинутая технология', description: 'Планетарное перемешивание' },
          { title: 'Тяжёлый режим', description: 'Создан для интенсивного использования' },
        ],
      },
      tr: {
        name: 'Apolo Mutfak Makinesi',
        description: 'Gelişmiş karıştırma teknolojisine sahip premium mutfak makinesi.',
        specs: [
          { label: 'Güç', value: '1800W' },
          { label: 'Kase Kapasitesi', value: '7L' },
          { label: 'Hız Ayarları', value: '12' },
        ],
        features: [
          { title: 'Gelişmiş Teknoloji', description: 'Gezegensel karıştırma hareketi' },
          { title: 'Ağır Hizmet', description: 'Yoğun kullanım için üretildi' },
        ],
      },
    },
  },
  {
    name: 'Titan Kitchen Machine',
    slug: 'titan',
    model: 'Titan',
    price: 799,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-machines',
    brandSlug: 'invitop',
    description: 'Professional-grade kitchen machine for serious home chefs.',
    variants: [
      { color: '#C0C0C0', images: ['Titan (1).png'] },
      { color: '#000000', images: ['Titan (2).png'] },
    ],
    specs: [
      { label: 'Power', value: '2200W' },
      { label: 'Bowl Capacity', value: '8L' },
      { label: 'Speed Settings', value: '15' },
    ],
    features: [
      { title: 'Professional Grade', description: 'Commercial-quality performance' },
      { title: 'Maximum Power', description: '2200W for the toughest tasks' },
      { title: 'Extra Large Capacity', description: '8L bowl for big batches' },
    ],
    localizations: {
      ru: {
        name: 'Кухонная машина Titan',
        description: 'Профессиональная кухонная машина для серьёзных домашних поваров.',
        specs: [
          { label: 'Мощность', value: '2200 Вт' },
          { label: 'Объём чаши', value: '8 л' },
          { label: 'Скорости', value: '15' },
        ],
        features: [
          {
            title: 'Профессиональный класс',
            description: 'Производительность коммерческого качества',
          },
          { title: 'Максимальная мощность', description: '2200 Вт для самых сложных задач' },
          { title: 'Очень большая ёмкость', description: 'Чаша 8 л для больших порций' },
        ],
      },
      tr: {
        name: 'Titan Mutfak Makinesi',
        description: 'Ciddi ev şefleri için profesyonel düzeyde mutfak makinesi.',
        specs: [
          { label: 'Güç', value: '2200W' },
          { label: 'Kase Kapasitesi', value: '8L' },
          { label: 'Hız Ayarları', value: '15' },
        ],
        features: [
          { title: 'Profesyonel Sınıf', description: 'Ticari kalite performans' },
          { title: 'Maksimum Güç', description: 'En zorlu görevler için 2200W' },
          { title: 'Ekstra Büyük Kapasite', description: 'Büyük partiler için 8L kase' },
        ],
      },
    },
  },

  // ==========================================================================
  // OTHER APPLIANCES
  // ==========================================================================
  {
    name: 'AD9201A',
    slug: 'ad9201a',
    model: 'AD9201A',
    price: 249,
    currency: 'USD',
    inStock: true,
    categorySlug: 'other-appliances',
    brandSlug: 'adel',
    description: 'Versatile home appliance with modern design.',
    variants: [
      { color: '#C0C0C0', images: ['AD9201 正.png'] },
      { color: '#000000', images: ['AD9201 侧.png'] },
    ],
    specs: [{ label: 'Power', value: '1000W' }],
    features: [
      { title: 'Modern Design', description: 'Sleek and contemporary look' },
      { title: 'Easy to Use', description: 'Simple and intuitive controls' },
    ],
    localizations: {
      ru: {
        name: 'AD9201A',
        description: 'Универсальный бытовой прибор с современным дизайном.',
        specs: [{ label: 'Мощность', value: '1000 Вт' }],
        features: [
          { title: 'Современный дизайн', description: 'Элегантный и современный вид' },
          { title: 'Простота использования', description: 'Простое и интуитивное управление' },
        ],
      },
      tr: {
        name: 'AD9201A',
        description: 'Modern tasarımlı çok yönlü ev aleti.',
        specs: [{ label: 'Güç', value: '1000W' }],
        features: [
          { title: 'Modern Tasarım', description: 'Şık ve çağdaş görünüm' },
          { title: 'Kullanımı Kolay', description: 'Basit ve sezgisel kontroller' },
        ],
      },
    },
  },
  {
    name: 'AD5320',
    slug: 'ad5320',
    model: 'AD5320',
    price: 179,
    currency: 'USD',
    inStock: true,
    categorySlug: 'other-appliances',
    brandSlug: 'maggie',
    description: 'Compact home appliance for everyday use.',
    variants: [
      { color: '#C0C0C0', images: ['AD5320.jpg'] },
      { color: '#000000', images: ['AD5320.png'] },
    ],
    specs: [{ label: 'Power', value: '800W' }],
    features: [
      { title: 'Compact', description: 'Space-saving design' },
      { title: 'Everyday Use', description: 'Perfect for daily tasks' },
    ],
    localizations: {
      ru: {
        name: 'AD5320',
        description: 'Компактный бытовой прибор для повседневного использования.',
        specs: [{ label: 'Мощность', value: '800 Вт' }],
        features: [
          { title: 'Компактность', description: 'Компактный дизайн' },
          { title: 'Повседневное использование', description: 'Идеален для ежедневных задач' },
        ],
      },
      tr: {
        name: 'AD5320',
        description: 'Günlük kullanım için kompakt ev aleti.',
        specs: [{ label: 'Güç', value: '800W' }],
        features: [
          { title: 'Kompakt', description: 'Yer tasarrufu sağlayan tasarım' },
          { title: 'Günlük Kullanım', description: 'Günlük görevler için mükemmel' },
        ],
      },
    },
  },
];

// =============================================================================
// HERO SECTION
// =============================================================================
export const hero = {
  title: 'Elevate Your Everyday',
  subtitle: 'Premium home appliances designed for modern living',
  ctaText: 'Explore Products',
  ctaLink: '/products',
  localizations: {
    ru: {
      title: 'Улучшите свой каждый день',
      subtitle: 'Премиальная бытовая техника для современной жизни',
      ctaText: 'Смотреть продукты',
    },
    tr: {
      title: 'Günlük Yaşamınızı Yükseltin',
      subtitle: 'Modern yaşam için tasarlanmış premium ev aletleri',
      ctaText: 'Ürünleri Keşfedin',
    },
  },
};

// =============================================================================
// ABOUT US SECTION
// =============================================================================
export const aboutUs = {
  sectionTitle: 'About Us',
  heading: 'Quality and innovation in every product',
  buttonText: 'Learn More',
  buttonLink: '/about',
  localizations: {
    ru: {
      sectionTitle: 'О нас',
      heading: 'Качество и инновации в каждом продукте',
      buttonText: 'Узнать больше',
    },
    tr: {
      sectionTitle: 'Hakkımızda',
      heading: 'Her üründe kalite ve yenilik',
      buttonText: 'Daha Fazla Bilgi',
    },
  },
};

// =============================================================================
// WHY US SECTION
// =============================================================================
export const whyUs = {
  sectionTitle: 'Why Choose ADEL',
  features: [
    {
      title: 'Premium Quality',
      description: 'Built with the finest materials for lasting performance',
      localizations: {
        ru: {
          title: 'Премиальное качество',
          description: 'Создано из лучших материалов для долговечной работы',
        },
        tr: {
          title: 'Premium Kalite',
          description: 'Kalıcı performans için en iyi malzemelerle üretildi',
        },
      },
    },
    {
      title: '2-Year Warranty',
      description: 'Full manufacturer warranty on all products',
      localizations: {
        ru: {
          title: '2 года гарантии',
          description: 'Полная гарантия производителя на все продукты',
        },
        tr: {
          title: '2 Yıl Garanti',
          description: 'Tüm ürünlerde tam üretici garantisi',
        },
      },
    },
    {
      title: 'Free Shipping',
      description: 'Free delivery on orders over $100',
      localizations: {
        ru: {
          title: 'Бесплатная доставка',
          description: 'Бесплатная доставка при заказе от $100',
        },
        tr: {
          title: 'Ücretsiz Kargo',
          description: '$100 üzeri siparişlerde ücretsiz teslimat',
        },
      },
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance',
      localizations: {
        ru: {
          title: 'Поддержка 24/7',
          description: 'Круглосуточная помощь клиентам',
        },
        tr: {
          title: '7/24 Destek',
          description: 'Günün her saati müşteri yardımı',
        },
      },
    },
    {
      title: 'Easy Returns',
      description: '30-day hassle-free return policy',
      localizations: {
        ru: {
          title: 'Простой возврат',
          description: '30-дневная политика возврата без проблем',
        },
        tr: {
          title: 'Kolay İade',
          description: '30 gün sorunsuz iade politikası',
        },
      },
    },
    {
      title: 'Eco-Friendly',
      description: 'Energy-efficient and sustainable designs',
      localizations: {
        ru: {
          title: 'Экологичность',
          description: 'Энергоэффективный и устойчивый дизайн',
        },
        tr: {
          title: 'Çevre Dostu',
          description: 'Enerji verimli ve sürdürülebilir tasarımlar',
        },
      },
    },
  ],
  localizations: {
    ru: {
      sectionTitle: 'Почему ADEL',
    },
    tr: {
      sectionTitle: "Neden ADEL'i Seçmelisiniz",
    },
  },
};

// =============================================================================
// HEADER ABOUT DROPDOWN
// =============================================================================
export const headerAbout = {
  paragraph1:
    'At ADEL, we design small home appliances that combine refined aesthetics with everyday performance. Every product is created with attention to detail, intuitive usability, and long-lasting quality.',
  paragraph2:
    'We believe technology should feel simple, elegant, and reliable — seamlessly fitting into modern life.',
  localizations: {
    ru: {
      paragraph1:
        'В ADEL мы создаём малую бытовую технику, сочетающую изысканную эстетику с повседневной функциональностью. Каждый продукт разработан с вниманием к деталям, интуитивной простотой использования и долговечным качеством.',
      paragraph2:
        'Мы верим, что технологии должны быть простыми, элегантными и надёжными — органично вписываясь в современную жизнь.',
    },
    tr: {
      paragraph1:
        "ADEL'de, zarif estetiği günlük performansla birleştiren küçük ev aletleri tasarlıyoruz. Her ürün, detaylara özen, sezgisel kullanılabilirlik ve uzun ömürlü kalite ile oluşturulmaktadır.",
      paragraph2:
        'Teknolojinin basit, şık ve güvenilir hissettirmesi gerektiğine inanıyoruz — modern yaşama sorunsuzca uyum sağlayarak.',
    },
  },
};

// =============================================================================
// HEADER CONTACT DROPDOWN
// =============================================================================
export const headerContact = {
  chatTitle: 'Chat support',
  chatLink: 'Support 24/7',
  chatUrl: '#',
  socialTitle: 'Social media',
  socialLinks: [
    {
      platform: 'facebook',
      url: 'https://facebook.com/adel',
      label: 'facebook.com/adel',
      localizations: {
        ru: { label: 'facebook.com/adel' },
        tr: { label: 'facebook.com/adel' },
      },
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/adel',
      label: 'instagram.com/adel',
      localizations: {
        ru: { label: 'instagram.com/adel' },
        tr: { label: 'instagram.com/adel' },
      },
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/adel',
      label: 'twitter.com/adel',
      localizations: {
        ru: { label: 'twitter.com/adel' },
        tr: { label: 'twitter.com/adel' },
      },
    },
  ],
  phoneTitle: 'Phone',
  phoneNumber: '+90 123 456 78 90',
  deliveryTitle: 'Delivery and returns',
  deliverySupportLink: 'Online support for your order',
  deliverySupportUrl: '#',
  deliveryReturnsLink: 'Return policy',
  deliveryReturnsUrl: '#',
  localizations: {
    ru: {
      chatTitle: 'Чат поддержки',
      chatLink: 'Поддержка 24/7',
      socialTitle: 'Социальные сети',
      phoneTitle: 'Телефон',
      deliveryTitle: 'Доставка и возврат',
      deliverySupportLink: 'Онлайн поддержка вашего заказа',
      deliveryReturnsLink: 'Политика возврата',
    },
    tr: {
      chatTitle: 'Sohbet desteği',
      chatLink: '7/24 Destek',
      socialTitle: 'Sosyal medya',
      phoneTitle: 'Telefon',
      deliveryTitle: 'Teslimat ve iade',
      deliverySupportLink: 'Siparişiniz için online destek',
      deliveryReturnsLink: 'İade politikası',
    },
  },
};

// =============================================================================
// SITE SETTINGS
// =============================================================================
export const siteSettings = {
  siteName: 'ADEL',
  siteTitle: 'ADEL | Home Appliances - Quality Products for Kitchen and Home',
  siteDescription:
    'Modernize your kitchen and home with ADEL home appliances. Coffee machines, air purifiers, kitchen appliances and more. Quality and reliability combined.',
  keywords:
    'ADEL, home appliances, kitchen appliances, coffee machines, air purifiers, blender, air fryer',
  twitterHandle: '@adel_appliances',
  localizations: {
    ru: {
      siteTitle: 'ADEL | Бытовая техника - Качественные товары для кухни и дома',
      siteDescription:
        'Модернизируйте вашу кухню и дом с бытовой техникой ADEL. Кофемашины, очистители воздуха, кухонная техника и многое другое. Качество и надёжность.',
      keywords:
        'ADEL, бытовая техника, кухонная техника, кофемашины, очистители воздуха, блендер, аэрогриль',
    },
    tr: {
      siteTitle: 'ADEL | Ev Aletleri - Mutfak ve Ev için Kaliteli Ürünler',
      siteDescription:
        'ADEL ev aletleri ile mutfağınızı ve evinizi modernleştirin. Kahve makineleri, hava temizleyiciler, mutfak aletleri ve daha fazlası. Kalite ve güvenilirlik bir arada.',
      keywords:
        'ADEL, ev aletleri, mutfak aletleri, kahve makinesi, hava temizleyici, blender, airfryer',
    },
  },
};

// =============================================================================
// FAQS
// =============================================================================
export const faqs = [
  {
    order: 1,
    question: 'What is the warranty period?',
    answer:
      'All ADEL products come with a 2-year manufacturer warranty covering defects in materials and workmanship.',
    localizations: {
      ru: {
        question: 'Какой гарантийный срок?',
        answer:
          'Все продукты ADEL поставляются с 2-летней гарантией производителя, покрывающей дефекты материалов и изготовления.',
      },
      tr: {
        question: 'Garanti süresi nedir?',
        answer:
          'Tüm ADEL ürünleri, malzeme ve işçilik kusurlarını kapsayan 2 yıllık üretici garantisi ile birlikte gelir.',
      },
    },
  },
  {
    order: 2,
    question: 'Do you offer free shipping?',
    answer: 'Yes, we offer free shipping on all orders over $100 within the country.',
    localizations: {
      ru: {
        question: 'Вы предлагаете бесплатную доставку?',
        answer: 'Да, мы предлагаем бесплатную доставку для всех заказов свыше $100 по стране.',
      },
      tr: {
        question: 'Ücretsiz kargo sunuyor musunuz?',
        answer: 'Evet, ülke içinde $100 üzeri tüm siparişlerde ücretsiz kargo sunuyoruz.',
      },
    },
  },
  {
    order: 3,
    question: 'How can I track my order?',
    answer:
      'Once shipped, you will receive a tracking number via email to monitor your delivery status.',
    localizations: {
      ru: {
        question: 'Как я могу отследить мой заказ?',
        answer:
          'После отправки вы получите трек-номер по электронной почте для отслеживания статуса доставки.',
      },
      tr: {
        question: 'Siparişimi nasıl takip edebilirim?',
        answer:
          'Gönderildikten sonra, teslimat durumunuzu izlemek için e-posta ile bir takip numarası alacaksınız.',
      },
    },
  },
  {
    order: 4,
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards (Visa, Mastercard), PayPal, and bank transfers.',
    localizations: {
      ru: {
        question: 'Какие способы оплаты вы принимаете?',
        answer: 'Мы принимаем кредитные карты (Visa, Mastercard), PayPal и банковские переводы.',
      },
      tr: {
        question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
        answer: 'Kredi kartları (Visa, Mastercard), PayPal ve banka havalesi kabul ediyoruz.',
      },
    },
  },
  {
    order: 5,
    question: 'Can I return a product?',
    answer: 'Yes, you can return any product within 30 days of purchase in its original packaging.',
    localizations: {
      ru: {
        question: 'Могу ли я вернуть товар?',
        answer:
          'Да, вы можете вернуть любой товар в течение 30 дней после покупки в оригинальной упаковке.',
      },
      tr: {
        question: 'Ürünü iade edebilir miyim?',
        answer:
          'Evet, satın alma tarihinden itibaren 30 gün içinde herhangi bir ürünü orijinal ambalajında iade edebilirsiniz.',
      },
    },
  },
  {
    order: 6,
    question: 'Do you ship internationally?',
    answer: 'Currently we ship to selected countries. Contact us for availability in your region.',
    localizations: {
      ru: {
        question: 'Вы осуществляете международную доставку?',
        answer:
          'В настоящее время мы доставляем в избранные страны. Свяжитесь с нами для уточнения доступности в вашем регионе.',
      },
      tr: {
        question: 'Uluslararası gönderim yapıyor musunuz?',
        answer:
          'Şu anda seçili ülkelere gönderim yapıyoruz. Bölgenizdeki uygunluk için bizimle iletişime geçin.',
      },
    },
  },
];
