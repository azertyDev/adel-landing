// Seed data for Strapi CMS

export const categories = [
  {
    name: 'Coffee Machines',
    slug: 'coffee-machines',
    description: 'Premium coffee machines for the perfect brew',
    locale: 'en',
    localizations: {
      ru: { name: 'Кофемашины', description: 'Премиальные кофемашины для идеального напитка' },
      tr: {
        name: 'Kahve Makineleri',
        description: 'Mükemmel demleme için premium kahve makineleri',
      },
    },
  },
  {
    name: 'Kitchen Appliances',
    slug: 'kitchen-appliances',
    description: 'Essential appliances for your kitchen',
    locale: 'en',
    localizations: {
      ru: { name: 'Кухонная техника', description: 'Необходимая техника для вашей кухни' },
      tr: { name: 'Mutfak Aletleri', description: 'Mutfağınız için temel aletler' },
    },
  },
  {
    name: 'Air Purifiers',
    slug: 'air-purifiers',
    description: 'Clean and fresh air for your home',
    locale: 'en',
    localizations: {
      ru: { name: 'Очистители воздуха', description: 'Чистый и свежий воздух для вашего дома' },
      tr: { name: 'Hava Temizleyicileri', description: 'Eviniz için temiz ve taze hava' },
    },
  },
];

export const brands = [
  { name: 'ADEL', slug: 'adel' },
  { name: 'TechHome', slug: 'techhome' },
  { name: 'AirClean', slug: 'airclean' },
];

export const products = [
  // Coffee Machines
  {
    name: 'Espresso Master Pro',
    slug: 'espresso-master-pro',
    price: 599,
    inStock: true,
    colors: ['#C0C0C0', '#000000'],
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description:
      'Professional-grade espresso machine with 15-bar pressure pump, built-in grinder, and milk frother. Perfect for coffee enthusiasts who demand cafe-quality drinks at home.',
    specs: [
      { label: 'Pressure', value: '15 bar' },
      { label: 'Water Tank', value: '2L' },
      { label: 'Grinder', value: 'Built-in Burr' },
      { label: 'Power', value: '1450W' },
      { label: 'Milk Frother', value: 'Steam Wand' },
    ],
    localizations: {
      ru: {
        name: 'Espresso Master Pro',
        description:
          'Профессиональная эспрессо-машина с насосом 15 бар, встроенной кофемолкой и капучинатором.',
        specs: [
          { label: 'Давление', value: '15 бар' },
          { label: 'Бак для воды', value: '2 л' },
          { label: 'Кофемолка', value: 'Встроенная жерновая' },
          { label: 'Мощность', value: '1450 Вт' },
        ],
      },
      tr: {
        name: 'Espresso Master Pro',
        description:
          '15 bar basınç pompası, dahili öğütücü ve süt köpürtücüsü ile profesyonel espresso makinesi.',
        specs: [
          { label: 'Basınç', value: '15 bar' },
          { label: 'Su Tankı', value: '2L' },
          { label: 'Öğütücü', value: 'Dahili' },
          { label: 'Güç', value: '1450W' },
        ],
      },
    },
  },
  {
    name: 'Cappuccino Elite',
    slug: 'cappuccino-elite',
    price: 899,
    inStock: true,
    colors: ['#000000', '#FFFFFF'],
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description:
      'Fully automatic cappuccino machine with one-touch brewing. Features ceramic grinder, automatic milk system, and customizable drink settings.',
    specs: [
      { label: 'Pressure', value: '19 bar' },
      { label: 'Water Tank', value: '1.8L' },
      { label: 'Bean Container', value: '300g' },
      { label: 'Power', value: '1500W' },
      { label: 'Drinks', value: '12 Presets' },
    ],
    localizations: {
      ru: {
        name: 'Cappuccino Elite',
        description: 'Полностью автоматическая капучино-машина с приготовлением одним нажатием.',
      },
      tr: {
        name: 'Cappuccino Elite',
        description: 'Tek dokunuşla demleme özellikli tam otomatik cappuccino makinesi.',
      },
    },
  },
  {
    name: 'Drip Coffee Classic',
    slug: 'drip-coffee-classic',
    price: 129,
    inStock: true,
    colors: ['#000000', '#C0C0C0'],
    categorySlug: 'coffee-machines',
    brandSlug: 'techhome',
    description:
      'Classic drip coffee maker with programmable timer, thermal carafe, and anti-drip system. Brews up to 12 cups.',
    specs: [
      { label: 'Capacity', value: '12 cups' },
      { label: 'Carafe', value: 'Thermal' },
      { label: 'Timer', value: '24-hour' },
      { label: 'Power', value: '1000W' },
    ],
    localizations: {
      ru: {
        name: 'Drip Coffee Classic',
        description: 'Классическая капельная кофеварка с программируемым таймером и термокувшином.',
      },
      tr: {
        name: 'Drip Coffee Classic',
        description:
          'Programlanabilir zamanlayıcı ve termal sürahi ile klasik filtre kahve makinesi.',
      },
    },
  },
  {
    name: 'Pod Coffee Compact',
    slug: 'pod-coffee-compact',
    price: 89,
    inStock: true,
    colors: ['#FF0000', '#000000', '#FFFFFF'],
    categorySlug: 'coffee-machines',
    brandSlug: 'techhome',
    description:
      'Compact single-serve coffee maker compatible with all major pod systems. Fast heat-up and sleek modern design.',
    specs: [
      { label: 'Heat-up Time', value: '25 seconds' },
      { label: 'Water Tank', value: '0.7L' },
      { label: 'Cup Sizes', value: '3 options' },
      { label: 'Power', value: '1400W' },
    ],
    localizations: {
      ru: {
        name: 'Pod Coffee Compact',
        description: 'Компактная кофеварка для капсул, совместимая со всеми основными системами.',
      },
      tr: {
        name: 'Pod Coffee Compact',
        description: 'Tüm büyük kapsül sistemleriyle uyumlu kompakt kahve makinesi.',
      },
    },
  },
  {
    name: 'Cold Brew Maker',
    slug: 'cold-brew-maker',
    price: 49,
    inStock: true,
    colors: ['#000000'],
    categorySlug: 'coffee-machines',
    brandSlug: 'airclean',
    description:
      'Premium cold brew coffee system with airtight seal and fine mesh filter. Makes smooth, low-acid cold brew.',
    specs: [
      { label: 'Capacity', value: '1.5L' },
      { label: 'Filter', value: 'Fine Mesh' },
      { label: 'Material', value: 'Borosilicate Glass' },
      { label: 'Brew Time', value: '12-24 hours' },
    ],
    localizations: {
      ru: {
        name: 'Cold Brew Maker',
        description: 'Премиальная система для холодного заваривания кофе с герметичной крышкой.',
      },
      tr: {
        name: 'Cold Brew Maker',
        description: 'Hava geçirmez kapaklı premium soğuk demleme kahve sistemi.',
      },
    },
  },
  // Kitchen Appliances
  {
    name: 'Smart Blender Pro',
    slug: 'smart-blender-pro',
    price: 199,
    inStock: true,
    colors: ['#C0C0C0', '#000000'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    description:
      'High-performance blender with 1500W motor, smart programs, and self-cleaning function.',
    specs: [
      { label: 'Power', value: '1500W' },
      { label: 'Capacity', value: '2L' },
      { label: 'Speed Settings', value: '10' },
      { label: 'Programs', value: '6 Auto' },
    ],
    localizations: {
      ru: {
        name: 'Smart Blender Pro',
        description: 'Высокопроизводительный блендер с мотором 1500 Вт и умными программами.',
      },
      tr: {
        name: 'Smart Blender Pro',
        description: '1500W motor ve akıllı programlı yüksek performanslı blender.',
      },
    },
  },
  {
    name: 'Air Fryer XL',
    slug: 'air-fryer-xl',
    price: 149,
    inStock: true,
    colors: ['#000000', '#FFFFFF'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    description:
      'Large capacity air fryer with rapid air technology. Crispy results with up to 85% less fat.',
    specs: [
      { label: 'Capacity', value: '5.5L' },
      { label: 'Power', value: '1700W' },
      { label: 'Temperature', value: '80-200°C' },
      { label: 'Programs', value: '8 Presets' },
    ],
    localizations: {
      ru: {
        name: 'Air Fryer XL',
        description: 'Аэрофритюрница большой ёмкости с технологией быстрого воздуха.',
      },
      tr: {
        name: 'Air Fryer XL',
        description: 'Hızlı hava teknolojisine sahip büyük kapasiteli airfryer.',
      },
    },
  },
  {
    name: 'Electric Kettle Smart',
    slug: 'electric-kettle-smart',
    price: 79,
    inStock: true,
    colors: ['#C0C0C0', '#000000'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'techhome',
    description:
      'Temperature-controlled electric kettle with keep-warm function. Borosilicate glass body.',
    specs: [
      { label: 'Capacity', value: '1.7L' },
      { label: 'Power', value: '2200W' },
      { label: 'Temperature', value: '5 Settings' },
      { label: 'Keep Warm', value: '2 hours' },
    ],
    localizations: {
      ru: {
        name: 'Electric Kettle Smart',
        description: 'Электрочайник с контролем температуры и функцией поддержания тепла.',
      },
      tr: {
        name: 'Electric Kettle Smart',
        description: 'Sıcak tutma fonksiyonlu sıcaklık kontrollü elektrikli su ısıtıcısı.',
      },
    },
  },
  {
    name: 'Toaster 4-Slice',
    slug: 'toaster-4-slice',
    price: 69,
    inStock: true,
    colors: ['#C0C0C0', '#000000', '#B87333'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'techhome',
    description:
      'Wide-slot 4-slice toaster with 7 browning levels. Extra-lift feature, defrost and bagel functions.',
    specs: [
      { label: 'Slots', value: '4 Wide' },
      { label: 'Browning', value: '7 Levels' },
      { label: 'Functions', value: 'Defrost, Bagel, Reheat' },
      { label: 'Power', value: '1800W' },
    ],
    localizations: {
      ru: {
        name: 'Toaster 4-Slice',
        description: '4-х слотовый тостер с широкими отверстиями и 7 уровнями подрумянивания.',
      },
      tr: {
        name: 'Toaster 4-Slice',
        description: '7 kızartma seviyeli geniş yuvalı 4 dilimlik tost makinesi.',
      },
    },
  },
  {
    name: 'Stand Mixer Professional',
    slug: 'stand-mixer-professional',
    price: 349,
    inStock: true,
    colors: ['#FF0000', '#000000', '#FFFFFF', '#C0C0C0'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    description:
      'Professional stand mixer with 800W motor and 6L bowl. Includes dough hook, flat beater, and wire whisk.',
    specs: [
      { label: 'Power', value: '800W' },
      { label: 'Bowl', value: '6L Stainless' },
      { label: 'Speeds', value: '10' },
      { label: 'Attachments', value: '3 Included' },
    ],
    localizations: {
      ru: {
        name: 'Stand Mixer Professional',
        description: 'Профессиональный планетарный миксер с мотором 800 Вт и чашей 6 л.',
      },
      tr: {
        name: 'Stand Mixer Professional',
        description: '800W motor ve 6L kase ile profesyonel stand mikser.',
      },
    },
  },
  {
    name: 'Food Processor Multi',
    slug: 'food-processor-multi',
    price: 179,
    inStock: true,
    colors: ['#FFFFFF', '#000000'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'airclean',
    description:
      'Versatile food processor with 12-cup capacity. Includes slicing, shredding, and chopping discs.',
    specs: [
      { label: 'Capacity', value: '12 cups' },
      { label: 'Power', value: '750W' },
      { label: 'Discs', value: '4 Included' },
      { label: 'Speeds', value: '2 + Pulse' },
    ],
    localizations: {
      ru: {
        name: 'Food Processor Multi',
        description: 'Универсальный кухонный комбайн с чашей 12 чашек.',
      },
      tr: {
        name: 'Food Processor Multi',
        description: '12 bardak kapasiteli çok yönlü mutfak robotu.',
      },
    },
  },
  // Air Purifiers
  {
    name: 'HEPA Air Purifier Large',
    slug: 'hepa-air-purifier-large',
    price: 299,
    inStock: true,
    colors: ['#FFFFFF'],
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    description:
      'True HEPA air purifier for large rooms up to 50 sqm. Captures 99.97% of particles.',
    specs: [
      { label: 'Coverage', value: '50 sqm' },
      { label: 'CADR', value: '400 m³/h' },
      { label: 'Filter', value: 'True HEPA H13' },
      { label: 'Noise Level', value: '25-50 dB' },
    ],
    localizations: {
      ru: {
        name: 'HEPA Air Purifier Large',
        description: 'Очиститель воздуха True HEPA для больших комнат до 50 м².',
      },
      tr: {
        name: 'HEPA Air Purifier Large',
        description: '50 m²ye kadar büyük odalar için True HEPA hava temizleyici.',
      },
    },
  },
  {
    name: 'Smart Air Purifier WiFi',
    slug: 'smart-air-purifier-wifi',
    price: 399,
    inStock: true,
    colors: ['#FFFFFF', '#000000'],
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    description: 'WiFi-enabled air purifier with app control and real-time air quality monitoring.',
    specs: [
      { label: 'Coverage', value: '60 sqm' },
      { label: 'CADR', value: '500 m³/h' },
      { label: 'WiFi', value: 'Yes' },
      { label: 'Air Quality Sensor', value: 'PM2.5' },
    ],
    localizations: {
      ru: {
        name: 'Smart Air Purifier WiFi',
        description: 'Очиститель воздуха с WiFi и мониторингом качества воздуха.',
      },
      tr: {
        name: 'Smart Air Purifier WiFi',
        description:
          'Uygulama kontrolü ve hava kalitesi izleme özellikli WiFi destekli hava temizleyici.',
      },
    },
  },
  {
    name: 'Compact Air Purifier',
    slug: 'compact-air-purifier',
    price: 99,
    inStock: true,
    colors: ['#FFFFFF', '#87CEEB', '#FFB6C1'],
    categorySlug: 'air-purifiers',
    brandSlug: 'techhome',
    description:
      'Compact and portable air purifier perfect for bedrooms and offices. USB powered option.',
    specs: [
      { label: 'Coverage', value: '20 sqm' },
      { label: 'CADR', value: '150 m³/h' },
      { label: 'Noise Level', value: '20-40 dB' },
      { label: 'Power', value: 'USB / AC' },
    ],
    localizations: {
      ru: {
        name: 'Compact Air Purifier',
        description: 'Компактный и портативный очиститель воздуха для спален и офисов.',
      },
      tr: {
        name: 'Compact Air Purifier',
        description: 'Yatak odaları ve ofisler için kompakt ve taşınabilir hava temizleyici.',
      },
    },
  },
  {
    name: 'Air Purifier + Humidifier',
    slug: 'air-purifier-humidifier',
    price: 249,
    inStock: true,
    colors: ['#FFFFFF'],
    categorySlug: 'air-purifiers',
    brandSlug: 'airclean',
    description:
      '2-in-1 air purifier and humidifier combo. HEPA filtration plus cool mist humidification.',
    specs: [
      { label: 'Coverage', value: '35 sqm' },
      { label: 'Humidifier', value: '3L Tank' },
      { label: 'Filter', value: 'HEPA + Carbon' },
      { label: 'Mist Output', value: '300ml/h' },
    ],
    localizations: {
      ru: {
        name: 'Air Purifier + Humidifier',
        description: 'Комбинация 2-в-1: очиститель воздуха и увлажнитель.',
      },
      tr: {
        name: 'Air Purifier + Humidifier',
        description: '2si 1 arada hava temizleyici ve nemlendirici kombinasyonu.',
      },
    },
  },
  {
    name: 'Car Air Purifier',
    slug: 'car-air-purifier',
    price: 59,
    inStock: true,
    colors: ['#000000', '#C0C0C0'],
    categorySlug: 'air-purifiers',
    brandSlug: 'techhome',
    description:
      'Compact car air purifier with HEPA filter and ionizer. Removes odors, smoke, and allergens.',
    specs: [
      { label: 'Coverage', value: 'Car Interior' },
      { label: 'Filter', value: 'HEPA + Ionizer' },
      { label: 'Power', value: '12V / USB' },
      { label: 'Noise Level', value: '< 30 dB' },
    ],
    localizations: {
      ru: {
        name: 'Car Air Purifier',
        description: 'Компактный автомобильный очиститель воздуха с HEPA-фильтром.',
      },
      tr: {
        name: 'Car Air Purifier',
        description: 'HEPA filtre ve iyonlaştırıcılı kompakt araç hava temizleyici.',
      },
    },
  },
];

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
        answer: 'Evet, ülke içinde 100$ üzeri tüm siparişlerde ücretsiz kargo sunuyoruz.',
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
