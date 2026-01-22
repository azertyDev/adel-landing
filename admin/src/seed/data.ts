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
  // Additional Coffee Machines
  {
    name: 'Turkish Coffee Maker',
    slug: 'turkish-coffee-maker',
    price: 79,
    inStock: true,
    colors: ['#B87333', '#000000', '#C0C0C0'],
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description:
      'Authentic Turkish coffee maker with automatic sand heating simulation. Makes rich, traditional Turkish coffee with perfect foam.',
    specs: [
      { label: 'Capacity', value: '4 cups' },
      { label: 'Power', value: '800W' },
      { label: 'Auto Shut-off', value: 'Yes' },
      { label: 'Foam Level', value: 'Adjustable' },
    ],
    localizations: {
      ru: {
        name: 'Турецкая кофеварка',
        description:
          'Аутентичная турецкая кофеварка с имитацией нагрева на песке. Готовит насыщенный традиционный турецкий кофе с идеальной пенкой.',
        specs: [
          { label: 'Объём', value: '4 чашки' },
          { label: 'Мощность', value: '800 Вт' },
          { label: 'Автоотключение', value: 'Да' },
          { label: 'Уровень пены', value: 'Регулируемый' },
        ],
      },
      tr: {
        name: 'Türk Kahve Makinesi',
        description:
          'Otomatik kum ısıtma simülasyonlu otantik Türk kahve makinesi. Mükemmel köpüklü geleneksel Türk kahvesi yapar.',
        specs: [
          { label: 'Kapasite', value: '4 fincan' },
          { label: 'Güç', value: '800W' },
          { label: 'Otomatik Kapanma', value: 'Evet' },
          { label: 'Köpük Seviyesi', value: 'Ayarlanabilir' },
        ],
      },
    },
  },
  {
    name: 'Latte Art Machine',
    slug: 'latte-art-machine',
    price: 1299,
    inStock: true,
    colors: ['#C0C0C0', '#000000'],
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    description:
      'Professional barista-grade espresso machine with dual boiler system and PID temperature control. Perfect for latte art enthusiasts.',
    specs: [
      { label: 'Boilers', value: 'Dual' },
      { label: 'Pressure', value: '9 bar' },
      { label: 'PID Control', value: 'Yes' },
      { label: 'Steam Power', value: '1800W' },
      { label: 'Portafilter', value: '58mm' },
    ],
    localizations: {
      ru: {
        name: 'Latte Art Machine',
        description:
          'Профессиональная эспрессо-машина с двойным бойлером и PID-контролем температуры. Идеальна для латте-арта.',
      },
      tr: {
        name: 'Latte Art Machine',
        description:
          'Çift kazan sistemi ve PID sıcaklık kontrolü ile profesyonel barista sınıfı espresso makinesi.',
      },
    },
  },
  {
    name: 'Moka Pot Electric',
    slug: 'moka-pot-electric',
    price: 69,
    inStock: true,
    colors: ['#C0C0C0', '#000000', '#FF0000'],
    categorySlug: 'coffee-machines',
    brandSlug: 'techhome',
    description:
      'Electric version of the classic Italian moka pot. Auto shut-off, keep warm function, and modern design.',
    specs: [
      { label: 'Capacity', value: '6 cups' },
      { label: 'Power', value: '480W' },
      { label: 'Keep Warm', value: '30 min' },
      { label: 'Material', value: 'Aluminum + Steel' },
    ],
    localizations: {
      ru: {
        name: 'Электрическая гейзерная кофеварка',
        description:
          'Электрическая версия классической итальянской гейзерной кофеварки. Автоотключение и функция подогрева.',
      },
      tr: {
        name: 'Elektrikli Moka Pot',
        description:
          'Klasik İtalyan moka potunun elektrikli versiyonu. Otomatik kapanma ve sıcak tutma özelliği.',
      },
    },
  },
  {
    name: 'French Press Thermal',
    slug: 'french-press-thermal',
    price: 45,
    inStock: true,
    colors: ['#000000', '#C0C0C0', '#B87333'],
    categorySlug: 'coffee-machines',
    brandSlug: 'airclean',
    description:
      'Double-wall vacuum insulated French press. Keeps coffee hot for hours while brewing the perfect cup.',
    specs: [
      { label: 'Capacity', value: '1L' },
      { label: 'Insulation', value: 'Double Wall' },
      { label: 'Heat Retention', value: '4 hours' },
      { label: 'Material', value: 'Stainless Steel' },
    ],
    localizations: {
      ru: {
        name: 'Термо Френч-пресс',
        description:
          'Френч-пресс с двойными стенками и вакуумной изоляцией. Сохраняет кофе горячим часами.',
      },
      tr: {
        name: 'Termal French Press',
        description: 'Çift cidarlı vakumlu yalıtımlı French press. Kahveyi saatlerce sıcak tutar.',
      },
    },
  },
  // Additional Kitchen Appliances
  {
    name: 'Sous Vide Precision Cooker',
    slug: 'sous-vide-precision-cooker',
    price: 129,
    inStock: true,
    colors: ['#000000', '#C0C0C0'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    description:
      'Precision sous vide immersion circulator with WiFi control. Cook restaurant-quality meals at exact temperatures.',
    specs: [
      { label: 'Power', value: '1100W' },
      { label: 'Temperature Range', value: '25-99°C' },
      { label: 'Accuracy', value: '±0.1°C' },
      { label: 'WiFi', value: 'Yes' },
    ],
    localizations: {
      ru: {
        name: 'Sous Vide погружной',
        description:
          'Прецизионный погружной циркулятор с WiFi-управлением. Готовьте блюда ресторанного качества.',
      },
      tr: {
        name: 'Sous Vide Hassas Pişirici',
        description:
          'WiFi kontrolü ile hassas sous vide daldırma sirkülatörü. Restoran kalitesinde yemekler pişirin.',
      },
    },
  },
  {
    name: 'Electric Grill Indoor',
    slug: 'electric-grill-indoor',
    price: 159,
    inStock: true,
    colors: ['#000000', '#C0C0C0'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    description:
      'Smokeless indoor electric grill with ceramic non-stick coating. Drip tray for healthy cooking.',
    specs: [
      { label: 'Surface', value: '40x30 cm' },
      { label: 'Power', value: '2000W' },
      { label: 'Temperature', value: '100-250°C' },
      { label: 'Coating', value: 'Ceramic' },
    ],
    localizations: {
      ru: {
        name: 'Электрогриль домашний',
        description: 'Бездымный домашний электрогриль с керамическим антипригарным покрытием.',
      },
      tr: {
        name: 'Kapalı Alan Elektrikli Izgara',
        description: 'Seramik yapışmaz kaplama ile dumansız kapalı alan elektrikli ızgara.',
      },
    },
  },
  {
    name: 'Ice Cream Maker',
    slug: 'ice-cream-maker',
    price: 89,
    inStock: true,
    colors: ['#FFFFFF', '#FFB6C1', '#87CEEB'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'techhome',
    description:
      'Automatic ice cream maker with built-in compressor. Make fresh ice cream, gelato, or sorbet in 30 minutes.',
    specs: [
      { label: 'Capacity', value: '1.5L' },
      { label: 'Compressor', value: 'Built-in' },
      { label: 'Time', value: '30-60 min' },
      { label: 'Power', value: '150W' },
    ],
    localizations: {
      ru: {
        name: 'Мороженица',
        description:
          'Автоматическая мороженица со встроенным компрессором. Свежее мороженое за 30 минут.',
      },
      tr: {
        name: 'Dondurma Makinesi',
        description:
          'Dahili kompresörlü otomatik dondurma makinesi. 30 dakikada taze dondurma yapın.',
      },
    },
  },
  {
    name: 'Bread Maker Pro',
    slug: 'bread-maker-pro',
    price: 179,
    inStock: true,
    colors: ['#FFFFFF', '#000000', '#C0C0C0'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    description:
      'Automatic bread maker with 15 programs including gluten-free and artisan bread. Delayed start timer.',
    specs: [
      { label: 'Loaf Size', value: '500g-1kg' },
      { label: 'Programs', value: '15' },
      { label: 'Timer', value: '13 hours' },
      { label: 'Power', value: '550W' },
    ],
    localizations: {
      ru: {
        name: 'Хлебопечка Pro',
        description:
          'Автоматическая хлебопечка с 15 программами, включая безглютеновый и ремесленный хлеб.',
      },
      tr: {
        name: 'Ekmek Yapma Makinesi Pro',
        description:
          'Glutensiz ve zanaatkar ekmek dahil 15 programlı otomatik ekmek yapma makinesi.',
      },
    },
  },
  {
    name: 'Vacuum Sealer',
    slug: 'vacuum-sealer',
    price: 79,
    inStock: true,
    colors: ['#000000', '#FFFFFF'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'airclean',
    description:
      'Food vacuum sealer for long-term storage. Works with bags and containers. Marinate mode included.',
    specs: [
      { label: 'Vacuum', value: '-0.8 bar' },
      { label: 'Seal Width', value: '30 cm' },
      { label: 'Modes', value: 'Dry, Moist, Marinate' },
      { label: 'Power', value: '120W' },
    ],
    localizations: {
      ru: {
        name: 'Вакууматор',
        description:
          'Вакуумный упаковщик для длительного хранения продуктов. Работает с пакетами и контейнерами.',
      },
      tr: {
        name: 'Vakum Makinesi',
        description: 'Uzun süreli saklama için gıda vakum makinesi. Poşet ve kaplarla çalışır.',
      },
    },
  },
  {
    name: 'Electric Wok',
    slug: 'electric-wok',
    price: 99,
    inStock: true,
    colors: ['#000000', '#FF0000'],
    categorySlug: 'kitchen-appliances',
    brandSlug: 'techhome',
    description:
      'Large capacity electric wok with non-stick coating. High heat for authentic stir-fry cooking.',
    specs: [
      { label: 'Capacity', value: '5L' },
      { label: 'Power', value: '2400W' },
      { label: 'Temperature', value: 'up to 240°C' },
      { label: 'Coating', value: 'Non-stick' },
    ],
    localizations: {
      ru: {
        name: 'Электрический вок',
        description:
          'Электрический вок большой ёмкости с антипригарным покрытием для аутентичной азиатской кухни.',
      },
      tr: {
        name: 'Elektrikli Wok',
        description:
          'Yapışmaz kaplama ile büyük kapasiteli elektrikli wok. Otantik Asya mutfağı için.',
      },
    },
  },
  // Additional Air Purifiers
  {
    name: 'Desktop Air Purifier',
    slug: 'desktop-air-purifier',
    price: 49,
    inStock: true,
    colors: ['#FFFFFF', '#000000', '#87CEEB'],
    categorySlug: 'air-purifiers',
    brandSlug: 'techhome',
    description:
      'Ultra-compact desktop air purifier with negative ion generator. Perfect for office desks and nightstands.',
    specs: [
      { label: 'Coverage', value: '10 sqm' },
      { label: 'Ionizer', value: 'Yes' },
      { label: 'Noise Level', value: '< 25 dB' },
      { label: 'Power', value: 'USB' },
    ],
    localizations: {
      ru: {
        name: 'Настольный очиститель воздуха',
        description: 'Ультракомпактный настольный очиститель с генератором отрицательных ионов.',
      },
      tr: {
        name: 'Masaüstü Hava Temizleyici',
        description: 'Negatif iyon jeneratörlü ultra kompakt masaüstü hava temizleyici.',
      },
    },
  },
  {
    name: 'Air Purifier with UV-C',
    slug: 'air-purifier-uv-c',
    price: 349,
    inStock: true,
    colors: ['#FFFFFF'],
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    description:
      'Advanced air purifier with UV-C light sterilization. Destroys 99.9% of bacteria and viruses.',
    specs: [
      { label: 'Coverage', value: '45 sqm' },
      { label: 'UV-C', value: '254nm Germicidal' },
      { label: 'Filter', value: 'HEPA H14' },
      { label: 'CADR', value: '350 m³/h' },
    ],
    localizations: {
      ru: {
        name: 'Очиститель воздуха с UV-C',
        description:
          'Продвинутый очиститель воздуха с UV-C стерилизацией. Уничтожает 99.9% бактерий и вирусов.',
      },
      tr: {
        name: 'UV-C Hava Temizleyici',
        description:
          'UV-C ışık sterilizasyonlu gelişmiş hava temizleyici. Bakteri ve virüslerin %99.9unu yok eder.',
      },
    },
  },
  {
    name: 'Tower Air Purifier',
    slug: 'tower-air-purifier',
    price: 449,
    inStock: true,
    colors: ['#FFFFFF', '#000000'],
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    description:
      'Elegant tower design air purifier with 360° air intake. True HEPA + activated carbon for odor removal.',
    specs: [
      { label: 'Coverage', value: '80 sqm' },
      { label: 'CADR', value: '600 m³/h' },
      { label: 'Filter', value: '3-in-1 HEPA' },
      { label: 'Noise Level', value: '22-52 dB' },
    ],
    localizations: {
      ru: {
        name: 'Башенный очиститель воздуха',
        description:
          'Элегантный башенный очиститель с 360° забором воздуха. True HEPA + активированный уголь.',
      },
      tr: {
        name: 'Kule Hava Temizleyici',
        description:
          '360° hava girişli zarif kule tasarımlı hava temizleyici. Koku giderme için aktif karbon.',
      },
    },
  },
  {
    name: 'Pet Air Purifier',
    slug: 'pet-air-purifier',
    price: 199,
    inStock: true,
    colors: ['#FFFFFF', '#87CEEB'],
    categorySlug: 'air-purifiers',
    brandSlug: 'airclean',
    description:
      'Specialized air purifier for pet owners. Extra-strong filter captures pet dander, hair, and odors.',
    specs: [
      { label: 'Coverage', value: '40 sqm' },
      { label: 'Pet Filter', value: 'Enhanced HEPA' },
      { label: 'Carbon Filter', value: 'Extra Thick' },
      { label: 'CADR', value: '300 m³/h' },
    ],
    localizations: {
      ru: {
        name: 'Очиститель воздуха для владельцев питомцев',
        description:
          'Специализированный очиститель для владельцев домашних животных. Усиленный фильтр против шерсти и запахов.',
      },
      tr: {
        name: 'Evcil Hayvan Hava Temizleyici',
        description:
          'Evcil hayvan sahipleri için özel hava temizleyici. Tüy ve koku giderme için güçlendirilmiş filtre.',
      },
    },
  },
  {
    name: 'Whole House Air Purifier',
    slug: 'whole-house-air-purifier',
    price: 699,
    inStock: true,
    colors: ['#FFFFFF'],
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    description:
      'Industrial-grade air purifier for whole house coverage. Medical-grade H14 HEPA filter with smart sensors.',
    specs: [
      { label: 'Coverage', value: '150 sqm' },
      { label: 'CADR', value: '800 m³/h' },
      { label: 'Filter', value: 'Medical H14 HEPA' },
      { label: 'Sensors', value: 'PM2.5, VOC, CO2' },
    ],
    localizations: {
      ru: {
        name: 'Очиститель воздуха для всего дома',
        description:
          'Промышленный очиститель для всего дома. Медицинский H14 HEPA фильтр с умными датчиками.',
      },
      tr: {
        name: 'Tüm Ev Hava Temizleyici',
        description:
          'Tüm ev kapsamı için endüstriyel sınıf hava temizleyici. Akıllı sensörlü medikal H14 HEPA filtre.',
      },
    },
  },
];

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

export const headerContact = {
  chatTitle: 'Chat support',
  chatLink: 'Support 24/7',
  chatUrl: '#',
  socialTitle: 'Social media',
  socialLinks: [
    { platform: 'facebook', url: 'https://facebook.com/adel', label: 'facebook.com' },
    { platform: 'instagram', url: 'https://instagram.com/adel', label: 'linkforinsta.com' },
    { platform: 'twitter', url: 'https://twitter.com/adel', label: 'twitterlink.com' },
  ],
  phoneTitle: 'Phone',
  phoneNumber: '123 254 85',
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

export const siteSettings = {
  siteName: 'ADEL',
  siteTitle: 'ADEL | Home Appliances - Quality Products for Kitchen and Home',
  siteDescription:
    'Modernize your kitchen and home with ADEL home appliances. Microwave ovens, washing machines, refrigerators and more. Quality and reliability combined.',
  keywords:
    'ADEL, home appliances, kitchen appliances, microwave oven, washing machine, refrigerator',
  twitterHandle: '@adel_appliances',
  localizations: {
    ru: {
      siteTitle: 'ADEL | Бытовая техника - Качественные товары для кухни и дома',
      siteDescription:
        'Модернизируйте вашу кухню и дом с бытовой техникой ADEL. Микроволновые печи, стиральные машины, холодильники и многое другое.',
      keywords: 'ADEL, бытовая техника, кухонная техника, микроволновая печь, стиральная машина',
    },
    tr: {
      siteTitle: 'ADEL | Ev Aletleri - Mutfak ve Ev için Kaliteli Ürünler',
      siteDescription:
        'ADEL ev aletleri ile mutfağınızı ve evinizi modernleştirin. Mikrodalga fırınlar, çamaşır makineleri, buzdolapları ve daha fazlası.',
      keywords: 'ADEL, ev aletleri, mutfak aletleri, mikrodalga fırın, çamaşır makinesi, buzdolabı',
    },
  },
};

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
