// Seed data for Strapi CMS
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
    name: 'Copper',
    hex: '#B87333',
    localizations: {
      ru: { name: 'Медный' },
      tr: { name: 'Bakır' },
    },
  },
  {
    name: 'Sky Blue',
    hex: '#87CEEB',
    localizations: {
      ru: { name: 'Голубой' },
      tr: { name: 'Gök Mavisi' },
    },
  },
  {
    name: 'Pink',
    hex: '#FFB6C1',
    localizations: {
      ru: { name: 'Розовый' },
      tr: { name: 'Pembe' },
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
    name: 'TechHome',
    slug: 'techhome',
    localizations: {
      ru: { name: 'TechHome' },
      tr: { name: 'TechHome' },
    },
  },
  {
    name: 'AirClean',
    slug: 'airclean',
    localizations: {
      ru: { name: 'AirClean' },
      tr: { name: 'AirClean' },
    },
  },
];

// =============================================================================
// PRODUCTS
// =============================================================================
export const products = [
  // Coffee Machines
  {
    name: 'Espresso Master Pro',
    slug: 'espresso-master-pro',
    model: 'EMP-2024',
    size: '35x25x40 cm',
    price: 599,
    currency: 'USD',
    originalPrice: 699,
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    variantColors: ['#C0C0C0', '#000000'],
    description:
      'Professional-grade espresso machine with 15-bar pressure pump, built-in grinder, and milk frother. Perfect for coffee enthusiasts who demand cafe-quality drinks at home.',
    specs: [
      { label: 'Pressure', value: '15 bar' },
      { label: 'Water Tank', value: '2L' },
      { label: 'Grinder', value: 'Built-in Burr' },
      { label: 'Power', value: '1450W' },
      { label: 'Milk Frother', value: 'Steam Wand' },
    ],
    features: [
      {
        title: 'Professional Brewing',
        description: '15-bar pressure for authentic espresso extraction',
      },
      { title: 'Built-in Grinder', description: 'Fresh ground coffee for every cup' },
      { title: 'Steam Wand', description: 'Create perfect milk foam for lattes and cappuccinos' },
    ],
    localizations: {
      ru: {
        name: 'Espresso Master Pro',
        description:
          'Профессиональная эспрессо-машина с насосом 15 бар, встроенной кофемолкой и капучинатором. Идеальна для ценителей кофе, требующих качества кафе дома.',
        specs: [
          { label: 'Давление', value: '15 бар' },
          { label: 'Бак для воды', value: '2 л' },
          { label: 'Кофемолка', value: 'Встроенная жерновая' },
          { label: 'Мощность', value: '1450 Вт' },
          { label: 'Капучинатор', value: 'Паровая трубка' },
        ],
        features: [
          {
            title: 'Профессиональное заваривание',
            description: 'Давление 15 бар для аутентичной экстракции эспрессо',
          },
          { title: 'Встроенная кофемолка', description: 'Свежемолотый кофе для каждой чашки' },
          {
            title: 'Паровая трубка',
            description: 'Создавайте идеальную молочную пену для латте и капучино',
          },
        ],
      },
      tr: {
        name: 'Espresso Master Pro',
        description:
          '15 bar basınç pompası, dahili öğütücü ve süt köpürtücüsü ile profesyonel espresso makinesi. Evde kafe kalitesinde içecek talep eden kahve tutkunları için mükemmel.',
        specs: [
          { label: 'Basınç', value: '15 bar' },
          { label: 'Su Tankı', value: '2L' },
          { label: 'Öğütücü', value: 'Dahili' },
          { label: 'Güç', value: '1450W' },
          { label: 'Süt Köpürtücü', value: 'Buhar Çubuğu' },
        ],
        features: [
          {
            title: 'Profesyonel Demleme',
            description: 'Otantik espresso ekstraksiyonu için 15 bar basınç',
          },
          { title: 'Dahili Öğütücü', description: 'Her fincan için taze çekilmiş kahve' },
          {
            title: 'Buhar Çubuğu',
            description: 'Latte ve cappuccino için mükemmel süt köpüğü oluşturun',
          },
        ],
      },
    },
  },
  {
    name: 'Cappuccino Elite',
    slug: 'cappuccino-elite',
    model: 'CE-3000',
    size: '30x40x35 cm',
    price: 899,
    currency: 'USD',
    originalPrice: 999,
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    variantColors: ['#000000', '#FFFFFF'],
    description:
      'Fully automatic cappuccino machine with one-touch brewing. Features ceramic grinder, automatic milk system, and customizable drink settings.',
    specs: [
      { label: 'Pressure', value: '19 bar' },
      { label: 'Water Tank', value: '1.8L' },
      { label: 'Bean Container', value: '300g' },
      { label: 'Power', value: '1500W' },
      { label: 'Drinks', value: '12 Presets' },
    ],
    features: [
      { title: 'One-Touch Brewing', description: 'Perfect drinks at the press of a button' },
      { title: 'Ceramic Grinder', description: 'Quiet and durable for consistent grinding' },
      { title: '12 Preset Drinks', description: 'From espresso to latte macchiato' },
    ],
    localizations: {
      ru: {
        name: 'Cappuccino Elite',
        description:
          'Полностью автоматическая капучино-машина с приготовлением одним нажатием. Керамическая кофемолка, автоматическая молочная система и настраиваемые параметры напитков.',
        specs: [
          { label: 'Давление', value: '19 бар' },
          { label: 'Бак для воды', value: '1.8 л' },
          { label: 'Контейнер для зёрен', value: '300 г' },
          { label: 'Мощность', value: '1500 Вт' },
          { label: 'Напитки', value: '12 пресетов' },
        ],
        features: [
          {
            title: 'Приготовление одним нажатием',
            description: 'Идеальные напитки одним нажатием кнопки',
          },
          {
            title: 'Керамическая кофемолка',
            description: 'Тихая и долговечная для стабильного помола',
          },
          { title: '12 пресетов напитков', description: 'От эспрессо до латте макиато' },
        ],
      },
      tr: {
        name: 'Cappuccino Elite',
        description:
          'Tek dokunuşla demleme özellikli tam otomatik cappuccino makinesi. Seramik öğütücü, otomatik süt sistemi ve özelleştirilebilir içecek ayarları.',
        specs: [
          { label: 'Basınç', value: '19 bar' },
          { label: 'Su Tankı', value: '1.8L' },
          { label: 'Çekirdek Haznesi', value: '300g' },
          { label: 'Güç', value: '1500W' },
          { label: 'İçecekler', value: '12 Ön Ayar' },
        ],
        features: [
          { title: 'Tek Dokunuşla Demleme', description: 'Bir düğmeye basarak mükemmel içecekler' },
          {
            title: 'Seramik Öğütücü',
            description: 'Tutarlı öğütme için sessiz ve dayanıklı',
          },
          { title: '12 Ön Ayarlı İçecek', description: "Espresso'dan latte macchiato'ya" },
        ],
      },
    },
  },
  {
    name: 'Drip Coffee Classic',
    slug: 'drip-coffee-classic',
    model: 'DCC-1200',
    size: '25x20x35 cm',
    price: 129,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'techhome',
    variantColors: ['#000000', '#C0C0C0'],
    description:
      'Classic drip coffee maker with programmable timer, thermal carafe, and anti-drip system. Brews up to 12 cups.',
    specs: [
      { label: 'Capacity', value: '12 cups' },
      { label: 'Carafe', value: 'Thermal' },
      { label: 'Timer', value: '24-hour' },
      { label: 'Power', value: '1000W' },
    ],
    features: [
      { title: 'Programmable Timer', description: 'Wake up to fresh brewed coffee' },
      { title: 'Thermal Carafe', description: 'Keeps coffee hot for hours without burning' },
    ],
    localizations: {
      ru: {
        name: 'Drip Coffee Classic',
        description:
          'Классическая капельная кофеварка с программируемым таймером, термокувшином и системой антикапля. До 12 чашек.',
        specs: [
          { label: 'Объём', value: '12 чашек' },
          { label: 'Кувшин', value: 'Термо' },
          { label: 'Таймер', value: '24 часа' },
          { label: 'Мощность', value: '1000 Вт' },
        ],
        features: [
          { title: 'Программируемый таймер', description: 'Просыпайтесь со свежесваренным кофе' },
          {
            title: 'Термокувшин',
            description: 'Сохраняет кофе горячим часами без подгорания',
          },
        ],
      },
      tr: {
        name: 'Drip Coffee Classic',
        description:
          'Programlanabilir zamanlayıcı, termal sürahi ve damla önleme sistemi ile klasik filtre kahve makinesi. 12 fincana kadar.',
        specs: [
          { label: 'Kapasite', value: '12 fincan' },
          { label: 'Sürahi', value: 'Termal' },
          { label: 'Zamanlayıcı', value: '24 saat' },
          { label: 'Güç', value: '1000W' },
        ],
        features: [
          { title: 'Programlanabilir Zamanlayıcı', description: 'Taze demlenmiş kahveyle uyanın' },
          { title: 'Termal Sürahi', description: 'Kahveyi saatlerce yakmadan sıcak tutar' },
        ],
      },
    },
  },
  {
    name: 'Pod Coffee Compact',
    slug: 'pod-coffee-compact',
    model: 'PCC-500',
    size: '15x30x25 cm',
    price: 89,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'techhome',
    variantColors: ['#FF0000', '#000000', '#FFFFFF'],
    description:
      'Compact single-serve coffee maker compatible with all major pod systems. Fast heat-up and sleek modern design.',
    specs: [
      { label: 'Heat-up Time', value: '25 seconds' },
      { label: 'Water Tank', value: '0.7L' },
      { label: 'Cup Sizes', value: '3 options' },
      { label: 'Power', value: '1400W' },
    ],
    features: [
      { title: 'Fast Heat-up', description: 'Ready in just 25 seconds' },
      { title: 'Universal Compatibility', description: 'Works with all major pod systems' },
    ],
    localizations: {
      ru: {
        name: 'Pod Coffee Compact',
        description:
          'Компактная кофеварка для капсул, совместимая со всеми основными системами. Быстрый нагрев и современный дизайн.',
        specs: [
          { label: 'Время нагрева', value: '25 секунд' },
          { label: 'Бак для воды', value: '0.7 л' },
          { label: 'Размеры чашек', value: '3 варианта' },
          { label: 'Мощность', value: '1400 Вт' },
        ],
        features: [
          { title: 'Быстрый нагрев', description: 'Готова всего за 25 секунд' },
          {
            title: 'Универсальная совместимость',
            description: 'Работает со всеми основными капсульными системами',
          },
        ],
      },
      tr: {
        name: 'Pod Coffee Compact',
        description:
          'Tüm büyük kapsül sistemleriyle uyumlu kompakt tek porsiyonluk kahve makinesi. Hızlı ısınma ve şık modern tasarım.',
        specs: [
          { label: 'Isınma Süresi', value: '25 saniye' },
          { label: 'Su Tankı', value: '0.7L' },
          { label: 'Fincan Boyutları', value: '3 seçenek' },
          { label: 'Güç', value: '1400W' },
        ],
        features: [
          { title: 'Hızlı Isınma', description: 'Sadece 25 saniyede hazır' },
          { title: 'Evrensel Uyumluluk', description: 'Tüm büyük kapsül sistemleriyle çalışır' },
        ],
      },
    },
  },
  {
    name: 'Cold Brew Maker',
    slug: 'cold-brew-maker',
    model: 'CBM-150',
    size: '15x15x30 cm',
    price: 49,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'airclean',
    variantColors: ['#000000'],
    description:
      'Premium cold brew coffee system with airtight seal and fine mesh filter. Makes smooth, low-acid cold brew.',
    specs: [
      { label: 'Capacity', value: '1.5L' },
      { label: 'Filter', value: 'Fine Mesh' },
      { label: 'Material', value: 'Borosilicate Glass' },
      { label: 'Brew Time', value: '12-24 hours' },
    ],
    features: [
      { title: 'Airtight Seal', description: 'Preserves freshness during brewing' },
      { title: 'Fine Mesh Filter', description: 'Smooth coffee without sediment' },
    ],
    localizations: {
      ru: {
        name: 'Cold Brew Maker',
        description:
          'Премиальная система для холодного заваривания кофе с герметичной крышкой и мелкосетчатым фильтром.',
        specs: [
          { label: 'Объём', value: '1.5 л' },
          { label: 'Фильтр', value: 'Мелкая сетка' },
          { label: 'Материал', value: 'Боросиликатное стекло' },
          { label: 'Время заваривания', value: '12-24 часа' },
        ],
        features: [
          { title: 'Герметичная крышка', description: 'Сохраняет свежесть при заваривании' },
          { title: 'Мелкосетчатый фильтр', description: 'Гладкий кофе без осадка' },
        ],
      },
      tr: {
        name: 'Cold Brew Maker',
        description:
          'Hava geçirmez kapak ve ince filtre ile premium soğuk demleme kahve sistemi. Pürüzsüz, düşük asitli soğuk demleme.',
        specs: [
          { label: 'Kapasite', value: '1.5L' },
          { label: 'Filtre', value: 'İnce Örgü' },
          { label: 'Malzeme', value: 'Borosilikat Cam' },
          { label: 'Demleme Süresi', value: '12-24 saat' },
        ],
        features: [
          { title: 'Hava Geçirmez Kapak', description: 'Demleme sırasında tazeliği korur' },
          { title: 'İnce Örgü Filtre', description: 'Tortu olmadan pürüzsüz kahve' },
        ],
      },
    },
  },
  {
    name: 'Turkish Coffee Maker',
    slug: 'turkish-coffee-maker',
    model: 'TCM-400',
    size: '20x15x25 cm',
    price: 79,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    variantColors: ['#B87333', '#000000', '#C0C0C0'],
    description:
      'Authentic Turkish coffee maker with automatic sand heating simulation. Makes rich, traditional Turkish coffee with perfect foam.',
    specs: [
      { label: 'Capacity', value: '4 cups' },
      { label: 'Power', value: '800W' },
      { label: 'Auto Shut-off', value: 'Yes' },
      { label: 'Foam Level', value: 'Adjustable' },
    ],
    features: [
      { title: 'Sand Heating Simulation', description: 'Authentic brewing method' },
      { title: 'Adjustable Foam', description: 'Customize your foam level' },
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
        features: [
          { title: 'Имитация нагрева на песке', description: 'Аутентичный метод заваривания' },
          { title: 'Регулируемая пена', description: 'Настройте уровень пены по вкусу' },
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
        features: [
          { title: 'Kum Isıtma Simülasyonu', description: 'Otantik demleme yöntemi' },
          { title: 'Ayarlanabilir Köpük', description: 'Köpük seviyenizi özelleştirin' },
        ],
      },
    },
  },
  {
    name: 'Latte Art Machine',
    slug: 'latte-art-machine',
    model: 'LAM-5800',
    size: '40x35x45 cm',
    price: 1299,
    currency: 'USD',
    originalPrice: 1499,
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'adel',
    variantColors: ['#C0C0C0', '#000000'],
    description:
      'Professional barista-grade espresso machine with dual boiler system and PID temperature control. Perfect for latte art enthusiasts.',
    specs: [
      { label: 'Boilers', value: 'Dual' },
      { label: 'Pressure', value: '9 bar' },
      { label: 'PID Control', value: 'Yes' },
      { label: 'Steam Power', value: '1800W' },
      { label: 'Portafilter', value: '58mm' },
    ],
    features: [
      { title: 'Dual Boiler', description: 'Brew and steam simultaneously' },
      {
        title: 'PID Temperature Control',
        description: 'Precise temperature for perfect extraction',
      },
      { title: '58mm Portafilter', description: 'Professional standard for even extraction' },
    ],
    localizations: {
      ru: {
        name: 'Latte Art Machine',
        description:
          'Профессиональная эспрессо-машина баристы с двойным бойлером и PID-контролем температуры. Идеальна для латте-арта.',
        specs: [
          { label: 'Бойлеры', value: 'Двойной' },
          { label: 'Давление', value: '9 бар' },
          { label: 'PID контроль', value: 'Да' },
          { label: 'Мощность пара', value: '1800 Вт' },
          { label: 'Портафильтр', value: '58 мм' },
        ],
        features: [
          {
            title: 'Двойной бойлер',
            description: 'Заваривание и взбивание пара одновременно',
          },
          {
            title: 'PID контроль температуры',
            description: 'Точная температура для идеальной экстракции',
          },
          {
            title: 'Портафильтр 58 мм',
            description: 'Профессиональный стандарт для равномерной экстракции',
          },
        ],
      },
      tr: {
        name: 'Latte Art Machine',
        description:
          'Çift kazan sistemi ve PID sıcaklık kontrolü ile profesyonel barista sınıfı espresso makinesi. Latte art meraklıları için mükemmel.',
        specs: [
          { label: 'Kazanlar', value: 'Çift' },
          { label: 'Basınç', value: '9 bar' },
          { label: 'PID Kontrol', value: 'Evet' },
          { label: 'Buhar Gücü', value: '1800W' },
          { label: 'Portafiltre', value: '58mm' },
        ],
        features: [
          { title: 'Çift Kazan', description: 'Aynı anda demleme ve buhar' },
          {
            title: 'PID Sıcaklık Kontrolü',
            description: 'Mükemmel ekstraksiyon için hassas sıcaklık',
          },
          {
            title: '58mm Portafiltre',
            description: 'Eşit ekstraksiyon için profesyonel standart',
          },
        ],
      },
    },
  },
  {
    name: 'Moka Pot Electric',
    slug: 'moka-pot-electric',
    model: 'MPE-600',
    size: '15x12x20 cm',
    price: 69,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'techhome',
    variantColors: ['#C0C0C0', '#000000', '#FF0000'],
    description:
      'Electric version of the classic Italian moka pot. Auto shut-off, keep warm function, and modern design.',
    specs: [
      { label: 'Capacity', value: '6 cups' },
      { label: 'Power', value: '480W' },
      { label: 'Keep Warm', value: '30 min' },
      { label: 'Material', value: 'Aluminum + Steel' },
    ],
    features: [
      { title: 'Auto Shut-off', description: 'Safe and energy efficient' },
      { title: 'Keep Warm', description: 'Maintains temperature for 30 minutes' },
    ],
    localizations: {
      ru: {
        name: 'Электрическая гейзерная кофеварка',
        description:
          'Электрическая версия классической итальянской гейзерной кофеварки. Автоотключение и функция подогрева.',
        specs: [
          { label: 'Объём', value: '6 чашек' },
          { label: 'Мощность', value: '480 Вт' },
          { label: 'Подогрев', value: '30 мин' },
          { label: 'Материал', value: 'Алюминий + Сталь' },
        ],
        features: [
          { title: 'Автоотключение', description: 'Безопасно и энергоэффективно' },
          { title: 'Поддержание тепла', description: 'Сохраняет температуру 30 минут' },
        ],
      },
      tr: {
        name: 'Elektrikli Moka Pot',
        description:
          'Klasik İtalyan moka potunun elektrikli versiyonu. Otomatik kapanma, sıcak tutma özelliği ve modern tasarım.',
        specs: [
          { label: 'Kapasite', value: '6 fincan' },
          { label: 'Güç', value: '480W' },
          { label: 'Sıcak Tutma', value: '30 dk' },
          { label: 'Malzeme', value: 'Alüminyum + Çelik' },
        ],
        features: [
          { title: 'Otomatik Kapanma', description: 'Güvenli ve enerji verimli' },
          { title: 'Sıcak Tutma', description: '30 dakika sıcaklığı korur' },
        ],
      },
    },
  },
  {
    name: 'French Press Thermal',
    slug: 'french-press-thermal',
    model: 'FPT-100',
    size: '12x12x25 cm',
    price: 45,
    currency: 'USD',
    inStock: true,
    categorySlug: 'coffee-machines',
    brandSlug: 'airclean',
    variantColors: ['#000000', '#C0C0C0', '#B87333'],
    description:
      'Double-wall vacuum insulated French press. Keeps coffee hot for hours while brewing the perfect cup.',
    specs: [
      { label: 'Capacity', value: '1L' },
      { label: 'Insulation', value: 'Double Wall' },
      { label: 'Heat Retention', value: '4 hours' },
      { label: 'Material', value: 'Stainless Steel' },
    ],
    features: [
      { title: 'Double Wall Insulation', description: 'Keeps drinks hot for 4 hours' },
      { title: 'Stainless Steel', description: 'Durable and easy to clean' },
    ],
    localizations: {
      ru: {
        name: 'Термо Френч-пресс',
        description:
          'Френч-пресс с двойными стенками и вакуумной изоляцией. Сохраняет кофе горячим часами.',
        specs: [
          { label: 'Объём', value: '1 л' },
          { label: 'Изоляция', value: 'Двойные стенки' },
          { label: 'Сохранение тепла', value: '4 часа' },
          { label: 'Материал', value: 'Нержавеющая сталь' },
        ],
        features: [
          { title: 'Двойные стенки', description: 'Сохраняет напитки горячими 4 часа' },
          { title: 'Нержавеющая сталь', description: 'Прочный и легко моется' },
        ],
      },
      tr: {
        name: 'Termal French Press',
        description: 'Çift cidarlı vakumlu yalıtımlı French press. Kahveyi saatlerce sıcak tutar.',
        specs: [
          { label: 'Kapasite', value: '1L' },
          { label: 'Yalıtım', value: 'Çift Cidar' },
          { label: 'Isı Tutma', value: '4 saat' },
          { label: 'Malzeme', value: 'Paslanmaz Çelik' },
        ],
        features: [
          { title: 'Çift Cidar Yalıtım', description: 'İçecekleri 4 saat sıcak tutar' },
          { title: 'Paslanmaz Çelik', description: 'Dayanıklı ve temizlemesi kolay' },
        ],
      },
    },
  },
  // Kitchen Appliances
  {
    name: 'Smart Blender Pro',
    slug: 'smart-blender-pro',
    model: 'SBP-1500',
    size: '20x20x45 cm',
    price: 199,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    variantColors: ['#C0C0C0', '#000000'],
    description:
      'High-performance blender with 1500W motor, smart programs, and self-cleaning function.',
    specs: [
      { label: 'Power', value: '1500W' },
      { label: 'Capacity', value: '2L' },
      { label: 'Speed Settings', value: '10' },
      { label: 'Programs', value: '6 Auto' },
    ],
    features: [
      { title: '1500W Motor', description: 'Powerful blending for any ingredient' },
      { title: 'Self-Cleaning', description: 'One-touch cleaning in 60 seconds' },
    ],
    localizations: {
      ru: {
        name: 'Smart Blender Pro',
        description:
          'Высокопроизводительный блендер с мотором 1500 Вт, умными программами и функцией самоочистки.',
        specs: [
          { label: 'Мощность', value: '1500 Вт' },
          { label: 'Объём', value: '2 л' },
          { label: 'Скорости', value: '10' },
          { label: 'Программы', value: '6 авто' },
        ],
        features: [
          { title: 'Мотор 1500 Вт', description: 'Мощное измельчение любых ингредиентов' },
          { title: 'Самоочистка', description: 'Очистка одним нажатием за 60 секунд' },
        ],
      },
      tr: {
        name: 'Smart Blender Pro',
        description:
          '1500W motor, akıllı programlar ve kendi kendini temizleme fonksiyonlu yüksek performanslı blender.',
        specs: [
          { label: 'Güç', value: '1500W' },
          { label: 'Kapasite', value: '2L' },
          { label: 'Hız Ayarları', value: '10' },
          { label: 'Programlar', value: '6 Otomatik' },
        ],
        features: [
          { title: '1500W Motor', description: 'Her malzeme için güçlü karıştırma' },
          { title: 'Kendi Kendini Temizleme', description: '60 saniyede tek dokunuşla temizlik' },
        ],
      },
    },
  },
  {
    name: 'Air Fryer XL',
    slug: 'air-fryer-xl',
    model: 'AFX-550',
    size: '35x30x35 cm',
    price: 149,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    variantColors: ['#000000', '#FFFFFF'],
    description:
      'Large capacity air fryer with rapid air technology. Crispy results with up to 85% less fat.',
    specs: [
      { label: 'Capacity', value: '5.5L' },
      { label: 'Power', value: '1700W' },
      { label: 'Temperature', value: '80-200°C' },
      { label: 'Programs', value: '8 Presets' },
    ],
    features: [
      { title: 'Rapid Air Technology', description: 'Crispy food with minimal oil' },
      { title: '8 Preset Programs', description: 'Perfect results every time' },
    ],
    localizations: {
      ru: {
        name: 'Air Fryer XL',
        description:
          'Аэрофритюрница большой ёмкости с технологией быстрого воздуха. Хрустящие блюда с 85% меньше жира.',
        specs: [
          { label: 'Объём', value: '5.5 л' },
          { label: 'Мощность', value: '1700 Вт' },
          { label: 'Температура', value: '80-200°C' },
          { label: 'Программы', value: '8 пресетов' },
        ],
        features: [
          { title: 'Технология быстрого воздуха', description: 'Хрустящая еда с минимумом масла' },
          { title: '8 программ', description: 'Идеальный результат каждый раз' },
        ],
      },
      tr: {
        name: 'Air Fryer XL',
        description:
          "Hızlı hava teknolojisine sahip büyük kapasiteli airfryer. %85'e kadar daha az yağ ile çıtır sonuçlar.",
        specs: [
          { label: 'Kapasite', value: '5.5L' },
          { label: 'Güç', value: '1700W' },
          { label: 'Sıcaklık', value: '80-200°C' },
          { label: 'Programlar', value: '8 Ön Ayar' },
        ],
        features: [
          { title: 'Hızlı Hava Teknolojisi', description: 'Minimum yağ ile çıtır yiyecekler' },
          { title: '8 Ön Ayarlı Program', description: 'Her seferinde mükemmel sonuçlar' },
        ],
      },
    },
  },
  {
    name: 'Electric Kettle Smart',
    slug: 'electric-kettle-smart',
    model: 'EKS-170',
    size: '20x15x25 cm',
    price: 79,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'techhome',
    variantColors: ['#C0C0C0', '#000000'],
    description:
      'Temperature-controlled electric kettle with keep-warm function. Borosilicate glass body.',
    specs: [
      { label: 'Capacity', value: '1.7L' },
      { label: 'Power', value: '2200W' },
      { label: 'Temperature', value: '5 Settings' },
      { label: 'Keep Warm', value: '2 hours' },
    ],
    features: [
      { title: 'Temperature Control', description: 'Perfect temperature for every beverage' },
      { title: 'Glass Body', description: 'See-through design for water level' },
    ],
    localizations: {
      ru: {
        name: 'Electric Kettle Smart',
        description:
          'Электрочайник с контролем температуры и функцией поддержания тепла. Корпус из боросиликатного стекла.',
        specs: [
          { label: 'Объём', value: '1.7 л' },
          { label: 'Мощность', value: '2200 Вт' },
          { label: 'Температура', value: '5 настроек' },
          { label: 'Подогрев', value: '2 часа' },
        ],
        features: [
          {
            title: 'Контроль температуры',
            description: 'Идеальная температура для любого напитка',
          },
          { title: 'Стеклянный корпус', description: 'Прозрачный дизайн для контроля уровня воды' },
        ],
      },
      tr: {
        name: 'Electric Kettle Smart',
        description:
          'Sıcak tutma fonksiyonlu sıcaklık kontrollü elektrikli su ısıtıcısı. Borosilikat cam gövde.',
        specs: [
          { label: 'Kapasite', value: '1.7L' },
          { label: 'Güç', value: '2200W' },
          { label: 'Sıcaklık', value: '5 Ayar' },
          { label: 'Sıcak Tutma', value: '2 saat' },
        ],
        features: [
          { title: 'Sıcaklık Kontrolü', description: 'Her içecek için mükemmel sıcaklık' },
          { title: 'Cam Gövde', description: 'Su seviyesi için şeffaf tasarım' },
        ],
      },
    },
  },
  {
    name: 'Toaster 4-Slice',
    slug: 'toaster-4-slice',
    model: 'T4S-180',
    size: '30x20x20 cm',
    price: 69,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'techhome',
    variantColors: ['#C0C0C0', '#000000', '#B87333'],
    description:
      'Wide-slot 4-slice toaster with 7 browning levels. Extra-lift feature, defrost and bagel functions.',
    specs: [
      { label: 'Slots', value: '4 Wide' },
      { label: 'Browning', value: '7 Levels' },
      { label: 'Functions', value: 'Defrost, Bagel, Reheat' },
      { label: 'Power', value: '1800W' },
    ],
    features: [
      { title: 'Wide Slots', description: 'Fits thick bread and bagels' },
      { title: '7 Browning Levels', description: 'Customize your toast perfectly' },
    ],
    localizations: {
      ru: {
        name: 'Toaster 4-Slice',
        description:
          '4-х слотовый тостер с широкими отверстиями и 7 уровнями подрумянивания. Разморозка и режим бейгл.',
        specs: [
          { label: 'Слоты', value: '4 широких' },
          { label: 'Подрумянивание', value: '7 уровней' },
          { label: 'Функции', value: 'Разморозка, Бейгл, Подогрев' },
          { label: 'Мощность', value: '1800 Вт' },
        ],
        features: [
          { title: 'Широкие слоты', description: 'Подходит для толстого хлеба и бейглов' },
          { title: '7 уровней подрумянивания', description: 'Настройте тост идеально' },
        ],
      },
      tr: {
        name: 'Toaster 4-Slice',
        description:
          '7 kızartma seviyeli geniş yuvalı 4 dilimlik tost makinesi. Buz çözme ve bagel fonksiyonları.',
        specs: [
          { label: 'Yuvalar', value: '4 Geniş' },
          { label: 'Kızartma', value: '7 Seviye' },
          { label: 'Fonksiyonlar', value: 'Buz Çözme, Bagel, Isıtma' },
          { label: 'Güç', value: '1800W' },
        ],
        features: [
          { title: 'Geniş Yuvalar', description: 'Kalın ekmek ve bagel için uygun' },
          { title: '7 Kızartma Seviyesi', description: 'Tostunuzu mükemmel özelleştirin' },
        ],
      },
    },
  },
  {
    name: 'Stand Mixer Professional',
    slug: 'stand-mixer-professional',
    model: 'SMP-800',
    size: '40x25x35 cm',
    price: 349,
    currency: 'USD',
    originalPrice: 399,
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    variantColors: ['#FF0000', '#000000', '#FFFFFF', '#C0C0C0'],
    description:
      'Professional stand mixer with 800W motor and 6L bowl. Includes dough hook, flat beater, and wire whisk.',
    specs: [
      { label: 'Power', value: '800W' },
      { label: 'Bowl', value: '6L Stainless' },
      { label: 'Speeds', value: '10' },
      { label: 'Attachments', value: '3 Included' },
    ],
    features: [
      { title: 'Planetary Mixing', description: 'Thorough mixing from all angles' },
      { title: '3 Attachments', description: 'Dough hook, beater, and whisk included' },
    ],
    localizations: {
      ru: {
        name: 'Stand Mixer Professional',
        description:
          'Профессиональный планетарный миксер с мотором 800 Вт и чашей 6 л. В комплекте крюк для теста, лопатка и венчик.',
        specs: [
          { label: 'Мощность', value: '800 Вт' },
          { label: 'Чаша', value: '6 л нерж.' },
          { label: 'Скорости', value: '10' },
          { label: 'Насадки', value: '3 в комплекте' },
        ],
        features: [
          {
            title: 'Планетарное смешивание',
            description: 'Тщательное перемешивание со всех сторон',
          },
          { title: '3 насадки', description: 'Крюк для теста, лопатка и венчик в комплекте' },
        ],
      },
      tr: {
        name: 'Stand Mixer Professional',
        description:
          '800W motor ve 6L kase ile profesyonel stand mikser. Hamur kancası, düz çırpıcı ve tel çırpıcı dahil.',
        specs: [
          { label: 'Güç', value: '800W' },
          { label: 'Kase', value: '6L Paslanmaz' },
          { label: 'Hızlar', value: '10' },
          { label: 'Aksesuarlar', value: '3 Dahil' },
        ],
        features: [
          { title: 'Gezegen Karıştırma', description: 'Her açıdan kapsamlı karıştırma' },
          { title: '3 Aksesuar', description: 'Hamur kancası, çırpıcı ve tel dahil' },
        ],
      },
    },
  },
  {
    name: 'Food Processor Multi',
    slug: 'food-processor-multi',
    model: 'FPM-750',
    size: '25x25x40 cm',
    price: 179,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'airclean',
    variantColors: ['#FFFFFF', '#000000'],
    description:
      'Versatile food processor with 12-cup capacity. Includes slicing, shredding, and chopping discs.',
    specs: [
      { label: 'Capacity', value: '12 cups' },
      { label: 'Power', value: '750W' },
      { label: 'Discs', value: '4 Included' },
      { label: 'Speeds', value: '2 + Pulse' },
    ],
    features: [
      { title: '12-Cup Capacity', description: 'Process large batches easily' },
      { title: '4 Disc Set', description: 'Slice, shred, chop, and puree' },
    ],
    localizations: {
      ru: {
        name: 'Food Processor Multi',
        description:
          'Универсальный кухонный комбайн с чашей 12 чашек. В комплекте диски для нарезки, шинковки и измельчения.',
        specs: [
          { label: 'Объём', value: '12 чашек' },
          { label: 'Мощность', value: '750 Вт' },
          { label: 'Диски', value: '4 в комплекте' },
          { label: 'Скорости', value: '2 + Пульс' },
        ],
        features: [
          { title: 'Объём 12 чашек', description: 'Обработка больших порций с лёгкостью' },
          { title: 'Набор из 4 дисков', description: 'Нарезка, шинковка, измельчение и пюре' },
        ],
      },
      tr: {
        name: 'Food Processor Multi',
        description:
          '12 bardak kapasiteli çok yönlü mutfak robotu. Dilimleme, rendeleme ve doğrama diskleri dahil.',
        specs: [
          { label: 'Kapasite', value: '12 bardak' },
          { label: 'Güç', value: '750W' },
          { label: 'Diskler', value: '4 Dahil' },
          { label: 'Hızlar', value: '2 + Darbe' },
        ],
        features: [
          { title: '12 Bardak Kapasite', description: 'Büyük miktarları kolayca işleyin' },
          { title: '4 Disk Seti', description: 'Dilimleyin, rendeleyin, doğrayın ve püreleyin' },
        ],
      },
    },
  },
  {
    name: 'Sous Vide Precision Cooker',
    slug: 'sous-vide-precision-cooker',
    model: 'SVPC-1100',
    size: '10x10x35 cm',
    price: 129,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    variantColors: ['#000000', '#C0C0C0'],
    description:
      'Precision sous vide immersion circulator with WiFi control. Cook restaurant-quality meals at exact temperatures.',
    specs: [
      { label: 'Power', value: '1100W' },
      { label: 'Temperature Range', value: '25-99°C' },
      { label: 'Accuracy', value: '±0.1°C' },
      { label: 'WiFi', value: 'Yes' },
    ],
    features: [
      { title: 'Precision Control', description: '±0.1°C accuracy for perfect results' },
      { title: 'WiFi Control', description: 'Monitor and control from your phone' },
    ],
    localizations: {
      ru: {
        name: 'Sous Vide погружной',
        description:
          'Прецизионный погружной циркулятор с WiFi-управлением. Готовьте блюда ресторанного качества при точной температуре.',
        specs: [
          { label: 'Мощность', value: '1100 Вт' },
          { label: 'Диапазон температур', value: '25-99°C' },
          { label: 'Точность', value: '±0.1°C' },
          { label: 'WiFi', value: 'Да' },
        ],
        features: [
          { title: 'Точный контроль', description: 'Точность ±0.1°C для идеальных результатов' },
          { title: 'WiFi управление', description: 'Контролируйте с телефона' },
        ],
      },
      tr: {
        name: 'Sous Vide Hassas Pişirici',
        description:
          'WiFi kontrolü ile hassas sous vide daldırma sirkülatörü. Tam sıcaklıklarda restoran kalitesinde yemekler pişirin.',
        specs: [
          { label: 'Güç', value: '1100W' },
          { label: 'Sıcaklık Aralığı', value: '25-99°C' },
          { label: 'Hassasiyet', value: '±0.1°C' },
          { label: 'WiFi', value: 'Evet' },
        ],
        features: [
          { title: 'Hassas Kontrol', description: 'Mükemmel sonuçlar için ±0.1°C hassasiyet' },
          { title: 'WiFi Kontrol', description: 'Telefonunuzdan izleyin ve kontrol edin' },
        ],
      },
    },
  },
  {
    name: 'Electric Grill Indoor',
    slug: 'electric-grill-indoor',
    model: 'EGI-2000',
    size: '50x35x15 cm',
    price: 159,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    variantColors: ['#000000', '#C0C0C0'],
    description:
      'Smokeless indoor electric grill with ceramic non-stick coating. Drip tray for healthy cooking.',
    specs: [
      { label: 'Surface', value: '40x30 cm' },
      { label: 'Power', value: '2000W' },
      { label: 'Temperature', value: '100-250°C' },
      { label: 'Coating', value: 'Ceramic' },
    ],
    features: [
      { title: 'Smokeless Design', description: 'Grill indoors without smoke' },
      { title: 'Ceramic Coating', description: 'Non-stick and easy to clean' },
    ],
    localizations: {
      ru: {
        name: 'Электрогриль домашний',
        description:
          'Бездымный домашний электрогриль с керамическим антипригарным покрытием. Поддон для здорового приготовления.',
        specs: [
          { label: 'Поверхность', value: '40x30 см' },
          { label: 'Мощность', value: '2000 Вт' },
          { label: 'Температура', value: '100-250°C' },
          { label: 'Покрытие', value: 'Керамика' },
        ],
        features: [
          { title: 'Бездымный дизайн', description: 'Готовьте на гриле дома без дыма' },
          { title: 'Керамическое покрытие', description: 'Антипригарное и легко моется' },
        ],
      },
      tr: {
        name: 'Kapalı Alan Elektrikli Izgara',
        description:
          'Seramik yapışmaz kaplama ile dumansız kapalı alan elektrikli ızgara. Sağlıklı pişirme için damla tepsisi.',
        specs: [
          { label: 'Yüzey', value: '40x30 cm' },
          { label: 'Güç', value: '2000W' },
          { label: 'Sıcaklık', value: '100-250°C' },
          { label: 'Kaplama', value: 'Seramik' },
        ],
        features: [
          { title: 'Dumansız Tasarım', description: 'Dumansız kapalı alanda ızgara yapın' },
          { title: 'Seramik Kaplama', description: 'Yapışmaz ve temizlemesi kolay' },
        ],
      },
    },
  },
  {
    name: 'Ice Cream Maker',
    slug: 'ice-cream-maker',
    model: 'ICM-150',
    size: '25x25x30 cm',
    price: 89,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'techhome',
    variantColors: ['#FFFFFF', '#FFB6C1', '#87CEEB'],
    description:
      'Automatic ice cream maker with built-in compressor. Make fresh ice cream, gelato, or sorbet in 30 minutes.',
    specs: [
      { label: 'Capacity', value: '1.5L' },
      { label: 'Compressor', value: 'Built-in' },
      { label: 'Time', value: '30-60 min' },
      { label: 'Power', value: '150W' },
    ],
    features: [
      { title: 'Built-in Compressor', description: 'No pre-freezing required' },
      { title: 'Fast Freezing', description: 'Fresh ice cream in 30 minutes' },
    ],
    localizations: {
      ru: {
        name: 'Мороженица',
        description:
          'Автоматическая мороженица со встроенным компрессором. Свежее мороженое, джелато или сорбет за 30 минут.',
        specs: [
          { label: 'Объём', value: '1.5 л' },
          { label: 'Компрессор', value: 'Встроенный' },
          { label: 'Время', value: '30-60 мин' },
          { label: 'Мощность', value: '150 Вт' },
        ],
        features: [
          { title: 'Встроенный компрессор', description: 'Не требует предварительной заморозки' },
          { title: 'Быстрая заморозка', description: 'Свежее мороженое за 30 минут' },
        ],
      },
      tr: {
        name: 'Dondurma Makinesi',
        description:
          'Dahili kompresörlü otomatik dondurma makinesi. 30 dakikada taze dondurma, gelato veya sorbe yapın.',
        specs: [
          { label: 'Kapasite', value: '1.5L' },
          { label: 'Kompresör', value: 'Dahili' },
          { label: 'Süre', value: '30-60 dk' },
          { label: 'Güç', value: '150W' },
        ],
        features: [
          { title: 'Dahili Kompresör', description: 'Ön dondurma gerektirmez' },
          { title: 'Hızlı Dondurma', description: '30 dakikada taze dondurma' },
        ],
      },
    },
  },
  {
    name: 'Bread Maker Pro',
    slug: 'bread-maker-pro',
    model: 'BMP-550',
    size: '35x25x30 cm',
    price: 179,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'adel',
    variantColors: ['#FFFFFF', '#000000', '#C0C0C0'],
    description:
      'Automatic bread maker with 15 programs including gluten-free and artisan bread. Delayed start timer.',
    specs: [
      { label: 'Loaf Size', value: '500g-1kg' },
      { label: 'Programs', value: '15' },
      { label: 'Timer', value: '13 hours' },
      { label: 'Power', value: '550W' },
    ],
    features: [
      { title: '15 Programs', description: 'From basic to artisan breads' },
      { title: 'Delayed Start', description: 'Wake up to fresh baked bread' },
    ],
    localizations: {
      ru: {
        name: 'Хлебопечка Pro',
        description:
          'Автоматическая хлебопечка с 15 программами, включая безглютеновый и ремесленный хлеб. Таймер отложенного старта.',
        specs: [
          { label: 'Размер буханки', value: '500г-1кг' },
          { label: 'Программы', value: '15' },
          { label: 'Таймер', value: '13 часов' },
          { label: 'Мощность', value: '550 Вт' },
        ],
        features: [
          { title: '15 программ', description: 'От базового до ремесленного хлеба' },
          { title: 'Отложенный старт', description: 'Просыпайтесь со свежим хлебом' },
        ],
      },
      tr: {
        name: 'Ekmek Yapma Makinesi Pro',
        description:
          'Glutensiz ve zanaatkar ekmek dahil 15 programlı otomatik ekmek yapma makinesi. Gecikmeli başlatma zamanlayıcısı.',
        specs: [
          { label: 'Ekmek Boyutu', value: '500g-1kg' },
          { label: 'Programlar', value: '15' },
          { label: 'Zamanlayıcı', value: '13 saat' },
          { label: 'Güç', value: '550W' },
        ],
        features: [
          { title: '15 Program', description: 'Temel ekmekten zanaatkar ekmeğe' },
          { title: 'Gecikmeli Başlatma', description: 'Taze pişmiş ekmekle uyanın' },
        ],
      },
    },
  },
  {
    name: 'Vacuum Sealer',
    slug: 'vacuum-sealer',
    model: 'VS-120',
    size: '40x15x10 cm',
    price: 79,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'airclean',
    variantColors: ['#000000', '#FFFFFF'],
    description:
      'Food vacuum sealer for long-term storage. Works with bags and containers. Marinate mode included.',
    specs: [
      { label: 'Vacuum', value: '-0.8 bar' },
      { label: 'Seal Width', value: '30 cm' },
      { label: 'Modes', value: 'Dry, Moist, Marinate' },
      { label: 'Power', value: '120W' },
    ],
    features: [
      { title: 'Strong Vacuum', description: '-0.8 bar for maximum freshness' },
      { title: 'Marinate Mode', description: 'Quick marinating in minutes' },
    ],
    localizations: {
      ru: {
        name: 'Вакууматор',
        description:
          'Вакуумный упаковщик для длительного хранения продуктов. Работает с пакетами и контейнерами. Режим маринования.',
        specs: [
          { label: 'Вакуум', value: '-0.8 бар' },
          { label: 'Ширина шва', value: '30 см' },
          { label: 'Режимы', value: 'Сухое, Влажное, Маринование' },
          { label: 'Мощность', value: '120 Вт' },
        ],
        features: [
          { title: 'Мощный вакуум', description: '-0.8 бар для максимальной свежести' },
          { title: 'Режим маринования', description: 'Быстрое маринование за минуты' },
        ],
      },
      tr: {
        name: 'Vakum Makinesi',
        description:
          'Uzun süreli saklama için gıda vakum makinesi. Poşet ve kaplarla çalışır. Marine modu dahil.',
        specs: [
          { label: 'Vakum', value: '-0.8 bar' },
          { label: 'Mühür Genişliği', value: '30 cm' },
          { label: 'Modlar', value: 'Kuru, Nemli, Marine' },
          { label: 'Güç', value: '120W' },
        ],
        features: [
          { title: 'Güçlü Vakum', description: 'Maksimum tazelik için -0.8 bar' },
          { title: 'Marine Modu', description: 'Dakikalar içinde hızlı marinasyon' },
        ],
      },
    },
  },
  {
    name: 'Electric Wok',
    slug: 'electric-wok',
    model: 'EW-2400',
    size: '40x40x15 cm',
    price: 99,
    currency: 'USD',
    inStock: true,
    categorySlug: 'kitchen-appliances',
    brandSlug: 'techhome',
    variantColors: ['#000000', '#FF0000'],
    description:
      'Large capacity electric wok with non-stick coating. High heat for authentic stir-fry cooking.',
    specs: [
      { label: 'Capacity', value: '5L' },
      { label: 'Power', value: '2400W' },
      { label: 'Temperature', value: 'up to 240°C' },
      { label: 'Coating', value: 'Non-stick' },
    ],
    features: [
      { title: 'High Heat', description: 'Up to 240°C for authentic wok cooking' },
      { title: 'Large Capacity', description: '5L for family-sized meals' },
    ],
    localizations: {
      ru: {
        name: 'Электрический вок',
        description:
          'Электрический вок большой ёмкости с антипригарным покрытием для аутентичной азиатской кухни.',
        specs: [
          { label: 'Объём', value: '5 л' },
          { label: 'Мощность', value: '2400 Вт' },
          { label: 'Температура', value: 'до 240°C' },
          { label: 'Покрытие', value: 'Антипригарное' },
        ],
        features: [
          {
            title: 'Высокая температура',
            description: 'До 240°C для аутентичного вок-приготовления',
          },
          { title: 'Большой объём', description: '5 л для блюд на всю семью' },
        ],
      },
      tr: {
        name: 'Elektrikli Wok',
        description:
          'Yapışmaz kaplama ile büyük kapasiteli elektrikli wok. Otantik stir-fry için yüksek ısı.',
        specs: [
          { label: 'Kapasite', value: '5L' },
          { label: 'Güç', value: '2400W' },
          { label: 'Sıcaklık', value: "240°C'ye kadar" },
          { label: 'Kaplama', value: 'Yapışmaz' },
        ],
        features: [
          { title: 'Yüksek Isı', description: "Otantik wok pişirimi için 240°C'ye kadar" },
          { title: 'Büyük Kapasite', description: 'Aile boyutu yemekler için 5L' },
        ],
      },
    },
  },
  // Air Purifiers
  {
    name: 'HEPA Air Purifier Large',
    slug: 'hepa-air-purifier-large',
    model: 'HAP-400',
    size: '30x30x60 cm',
    price: 299,
    currency: 'USD',
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    variantColors: ['#FFFFFF'],
    description:
      'True HEPA air purifier for large rooms up to 50 sqm. Captures 99.97% of particles.',
    specs: [
      { label: 'Coverage', value: '50 sqm' },
      { label: 'CADR', value: '400 m³/h' },
      { label: 'Filter', value: 'True HEPA H13' },
      { label: 'Noise Level', value: '25-50 dB' },
    ],
    features: [
      { title: 'True HEPA H13', description: 'Captures 99.97% of particles down to 0.3 microns' },
      { title: 'Large Coverage', description: 'Purifies rooms up to 50 sqm' },
    ],
    localizations: {
      ru: {
        name: 'HEPA Air Purifier Large',
        description:
          'Очиститель воздуха True HEPA для больших комнат до 50 м². Улавливает 99.97% частиц.',
        specs: [
          { label: 'Покрытие', value: '50 м²' },
          { label: 'CADR', value: '400 м³/ч' },
          { label: 'Фильтр', value: 'True HEPA H13' },
          { label: 'Уровень шума', value: '25-50 дБ' },
        ],
        features: [
          {
            title: 'True HEPA H13',
            description: 'Улавливает 99.97% частиц размером от 0.3 микрон',
          },
          { title: 'Большое покрытие', description: 'Очищает комнаты до 50 м²' },
        ],
      },
      tr: {
        name: 'HEPA Air Purifier Large',
        description:
          "50 m²'ye kadar büyük odalar için True HEPA hava temizleyici. Partiküllerin %99.97'sini yakalar.",
        specs: [
          { label: 'Kapsama', value: '50 m²' },
          { label: 'CADR', value: '400 m³/h' },
          { label: 'Filtre', value: 'True HEPA H13' },
          { label: 'Gürültü Seviyesi', value: '25-50 dB' },
        ],
        features: [
          {
            title: 'True HEPA H13',
            description: "0.3 mikrona kadar partiküllerin %99.97'sini yakalar",
          },
          { title: 'Geniş Kapsama', description: "50 m²'ye kadar odaları temizler" },
        ],
      },
    },
  },
  {
    name: 'Smart Air Purifier WiFi',
    slug: 'smart-air-purifier-wifi',
    model: 'SAP-500',
    size: '30x30x65 cm',
    price: 399,
    currency: 'USD',
    originalPrice: 449,
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    variantColors: ['#FFFFFF', '#000000'],
    description: 'WiFi-enabled air purifier with app control and real-time air quality monitoring.',
    specs: [
      { label: 'Coverage', value: '60 sqm' },
      { label: 'CADR', value: '500 m³/h' },
      { label: 'WiFi', value: 'Yes' },
      { label: 'Air Quality Sensor', value: 'PM2.5' },
    ],
    features: [
      { title: 'WiFi Control', description: 'Control from anywhere via app' },
      { title: 'Real-time Monitoring', description: 'Track air quality on your phone' },
    ],
    localizations: {
      ru: {
        name: 'Smart Air Purifier WiFi',
        description:
          'Очиститель воздуха с WiFi, управлением через приложение и мониторингом качества воздуха в реальном времени.',
        specs: [
          { label: 'Покрытие', value: '60 м²' },
          { label: 'CADR', value: '500 м³/ч' },
          { label: 'WiFi', value: 'Да' },
          { label: 'Датчик качества воздуха', value: 'PM2.5' },
        ],
        features: [
          { title: 'WiFi управление', description: 'Управляйте из любого места через приложение' },
          {
            title: 'Мониторинг в реальном времени',
            description: 'Отслеживайте качество воздуха на телефоне',
          },
        ],
      },
      tr: {
        name: 'Smart Air Purifier WiFi',
        description:
          'Uygulama kontrolü ve gerçek zamanlı hava kalitesi izleme özellikli WiFi destekli hava temizleyici.',
        specs: [
          { label: 'Kapsama', value: '60 m²' },
          { label: 'CADR', value: '500 m³/h' },
          { label: 'WiFi', value: 'Evet' },
          { label: 'Hava Kalitesi Sensörü', value: 'PM2.5' },
        ],
        features: [
          { title: 'WiFi Kontrol', description: 'Uygulama ile her yerden kontrol edin' },
          {
            title: 'Gerçek Zamanlı İzleme',
            description: 'Telefonunuzda hava kalitesini takip edin',
          },
        ],
      },
    },
  },
  {
    name: 'Compact Air Purifier',
    slug: 'compact-air-purifier',
    model: 'CAP-150',
    size: '20x20x35 cm',
    price: 99,
    currency: 'USD',
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'techhome',
    variantColors: ['#FFFFFF', '#87CEEB', '#FFB6C1'],
    description:
      'Compact and portable air purifier perfect for bedrooms and offices. USB powered option.',
    specs: [
      { label: 'Coverage', value: '20 sqm' },
      { label: 'CADR', value: '150 m³/h' },
      { label: 'Noise Level', value: '20-40 dB' },
      { label: 'Power', value: 'USB / AC' },
    ],
    features: [
      { title: 'Compact Design', description: 'Perfect for desks and nightstands' },
      { title: 'USB Powered', description: 'Use with power bank or laptop' },
    ],
    localizations: {
      ru: {
        name: 'Compact Air Purifier',
        description:
          'Компактный и портативный очиститель воздуха для спален и офисов. Питание от USB.',
        specs: [
          { label: 'Покрытие', value: '20 м²' },
          { label: 'CADR', value: '150 м³/ч' },
          { label: 'Уровень шума', value: '20-40 дБ' },
          { label: 'Питание', value: 'USB / AC' },
        ],
        features: [
          { title: 'Компактный дизайн', description: 'Идеален для столов и тумбочек' },
          { title: 'Питание от USB', description: 'Используйте с power bank или ноутбуком' },
        ],
      },
      tr: {
        name: 'Compact Air Purifier',
        description:
          'Yatak odaları ve ofisler için kompakt ve taşınabilir hava temizleyici. USB güç seçeneği.',
        specs: [
          { label: 'Kapsama', value: '20 m²' },
          { label: 'CADR', value: '150 m³/h' },
          { label: 'Gürültü Seviyesi', value: '20-40 dB' },
          { label: 'Güç', value: 'USB / AC' },
        ],
        features: [
          { title: 'Kompakt Tasarım', description: 'Masalar ve komodinler için mükemmel' },
          { title: 'USB Güçlü', description: 'Power bank veya dizüstü bilgisayarla kullanın' },
        ],
      },
    },
  },
  {
    name: 'Air Purifier + Humidifier',
    slug: 'air-purifier-humidifier',
    model: 'APH-350',
    size: '30x30x50 cm',
    price: 249,
    currency: 'USD',
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'airclean',
    variantColors: ['#FFFFFF'],
    description:
      '2-in-1 air purifier and humidifier combo. HEPA filtration plus cool mist humidification.',
    specs: [
      { label: 'Coverage', value: '35 sqm' },
      { label: 'Humidifier', value: '3L Tank' },
      { label: 'Filter', value: 'HEPA + Carbon' },
      { label: 'Mist Output', value: '300ml/h' },
    ],
    features: [
      { title: '2-in-1 Function', description: 'Purifies and humidifies simultaneously' },
      { title: '3L Tank', description: 'Up to 10 hours of continuous humidification' },
    ],
    localizations: {
      ru: {
        name: 'Air Purifier + Humidifier',
        description:
          'Комбинация 2-в-1: очиститель воздуха и увлажнитель. HEPA-фильтрация плюс холодный пар.',
        specs: [
          { label: 'Покрытие', value: '35 м²' },
          { label: 'Увлажнитель', value: 'Бак 3 л' },
          { label: 'Фильтр', value: 'HEPA + Угольный' },
          { label: 'Выход пара', value: '300 мл/ч' },
        ],
        features: [
          { title: 'Функция 2-в-1', description: 'Очищает и увлажняет одновременно' },
          { title: 'Бак 3 л', description: 'До 10 часов непрерывного увлажнения' },
        ],
      },
      tr: {
        name: 'Air Purifier + Humidifier',
        description:
          '2si 1 arada hava temizleyici ve nemlendirici kombinasyonu. HEPA filtreleme artı soğuk buhar nemlendirme.',
        specs: [
          { label: 'Kapsama', value: '35 m²' },
          { label: 'Nemlendirici', value: '3L Tank' },
          { label: 'Filtre', value: 'HEPA + Karbon' },
          { label: 'Buhar Çıkışı', value: '300ml/h' },
        ],
        features: [
          { title: '2si 1 Arada Fonksiyon', description: 'Aynı anda temizler ve nemlendirir' },
          { title: '3L Tank', description: '10 saate kadar sürekli nemlendirme' },
        ],
      },
    },
  },
  {
    name: 'Car Air Purifier',
    slug: 'car-air-purifier',
    model: 'CAP-030',
    size: '10x10x15 cm',
    price: 59,
    currency: 'USD',
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'techhome',
    variantColors: ['#000000', '#C0C0C0'],
    description:
      'Compact car air purifier with HEPA filter and ionizer. Removes odors, smoke, and allergens.',
    specs: [
      { label: 'Coverage', value: 'Car Interior' },
      { label: 'Filter', value: 'HEPA + Ionizer' },
      { label: 'Power', value: '12V / USB' },
      { label: 'Noise Level', value: '< 30 dB' },
    ],
    features: [
      { title: 'Car-Optimized', description: 'Perfect fit for cup holders' },
      { title: 'Dual Power', description: '12V car or USB powered' },
    ],
    localizations: {
      ru: {
        name: 'Car Air Purifier',
        description:
          'Компактный автомобильный очиститель воздуха с HEPA-фильтром и ионизатором. Удаляет запахи, дым и аллергены.',
        specs: [
          { label: 'Покрытие', value: 'Салон авто' },
          { label: 'Фильтр', value: 'HEPA + Ионизатор' },
          { label: 'Питание', value: '12V / USB' },
          { label: 'Уровень шума', value: '< 30 дБ' },
        ],
        features: [
          { title: 'Для автомобиля', description: 'Идеально подходит для подстаканника' },
          { title: 'Двойное питание', description: '12V от авто или USB' },
        ],
      },
      tr: {
        name: 'Car Air Purifier',
        description:
          'HEPA filtre ve iyonlaştırıcılı kompakt araç hava temizleyici. Kokuları, dumanı ve alerjenleri giderir.',
        specs: [
          { label: 'Kapsama', value: 'Araç İçi' },
          { label: 'Filtre', value: 'HEPA + İyonizer' },
          { label: 'Güç', value: '12V / USB' },
          { label: 'Gürültü Seviyesi', value: '< 30 dB' },
        ],
        features: [
          { title: 'Araç için Optimize', description: 'Bardak tutucular için mükemmel uyum' },
          { title: 'Çift Güç', description: '12V araç veya USB güçlü' },
        ],
      },
    },
  },
  {
    name: 'Desktop Air Purifier',
    slug: 'desktop-air-purifier',
    model: 'DAP-100',
    size: '15x15x25 cm',
    price: 49,
    currency: 'USD',
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'techhome',
    variantColors: ['#FFFFFF', '#000000', '#87CEEB'],
    description:
      'Ultra-compact desktop air purifier with negative ion generator. Perfect for office desks and nightstands.',
    specs: [
      { label: 'Coverage', value: '10 sqm' },
      { label: 'Ionizer', value: 'Yes' },
      { label: 'Noise Level', value: '< 25 dB' },
      { label: 'Power', value: 'USB' },
    ],
    features: [
      { title: 'Ultra Compact', description: 'Fits on any desk' },
      { title: 'Whisper Quiet', description: 'Less than 25 dB noise' },
    ],
    localizations: {
      ru: {
        name: 'Настольный очиститель воздуха',
        description:
          'Ультракомпактный настольный очиститель с генератором отрицательных ионов. Идеален для офисных столов.',
        specs: [
          { label: 'Покрытие', value: '10 м²' },
          { label: 'Ионизатор', value: 'Да' },
          { label: 'Уровень шума', value: '< 25 дБ' },
          { label: 'Питание', value: 'USB' },
        ],
        features: [
          { title: 'Ультракомпактный', description: 'Поместится на любом столе' },
          { title: 'Тихая работа', description: 'Менее 25 дБ шума' },
        ],
      },
      tr: {
        name: 'Masaüstü Hava Temizleyici',
        description:
          'Negatif iyon jeneratörlü ultra kompakt masaüstü hava temizleyici. Ofis masaları için mükemmel.',
        specs: [
          { label: 'Kapsama', value: '10 m²' },
          { label: 'İyonizer', value: 'Evet' },
          { label: 'Gürültü Seviyesi', value: '< 25 dB' },
          { label: 'Güç', value: 'USB' },
        ],
        features: [
          { title: 'Ultra Kompakt', description: 'Her masaya sığar' },
          { title: 'Fısıltı Sessizliğinde', description: "25 dB'den az gürültü" },
        ],
      },
    },
  },
  {
    name: 'Air Purifier with UV-C',
    slug: 'air-purifier-uv-c',
    model: 'APUV-350',
    size: '30x30x55 cm',
    price: 349,
    currency: 'USD',
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    variantColors: ['#FFFFFF'],
    description:
      'Advanced air purifier with UV-C light sterilization. Destroys 99.9% of bacteria and viruses.',
    specs: [
      { label: 'Coverage', value: '45 sqm' },
      { label: 'UV-C', value: '254nm Germicidal' },
      { label: 'Filter', value: 'HEPA H14' },
      { label: 'CADR', value: '350 m³/h' },
    ],
    features: [
      { title: 'UV-C Sterilization', description: 'Destroys 99.9% of germs' },
      { title: 'Medical-Grade HEPA', description: 'H14 filter for maximum protection' },
    ],
    localizations: {
      ru: {
        name: 'Очиститель воздуха с UV-C',
        description:
          'Продвинутый очиститель воздуха с UV-C стерилизацией. Уничтожает 99.9% бактерий и вирусов.',
        specs: [
          { label: 'Покрытие', value: '45 м²' },
          { label: 'UV-C', value: '254нм бактерицидный' },
          { label: 'Фильтр', value: 'HEPA H14' },
          { label: 'CADR', value: '350 м³/ч' },
        ],
        features: [
          { title: 'UV-C стерилизация', description: 'Уничтожает 99.9% микробов' },
          { title: 'Медицинский HEPA', description: 'H14 фильтр для максимальной защиты' },
        ],
      },
      tr: {
        name: 'UV-C Hava Temizleyici',
        description:
          "UV-C ışık sterilizasyonlu gelişmiş hava temizleyici. Bakteri ve virüslerin %99.9'unu yok eder.",
        specs: [
          { label: 'Kapsama', value: '45 m²' },
          { label: 'UV-C', value: '254nm Bakterisidal' },
          { label: 'Filtre', value: 'HEPA H14' },
          { label: 'CADR', value: '350 m³/h' },
        ],
        features: [
          { title: 'UV-C Sterilizasyon', description: "Mikropların %99.9'unu yok eder" },
          { title: 'Medikal Sınıf HEPA', description: 'Maksimum koruma için H14 filtre' },
        ],
      },
    },
  },
  {
    name: 'Tower Air Purifier',
    slug: 'tower-air-purifier',
    model: 'TAP-600',
    size: '25x25x100 cm',
    price: 449,
    currency: 'USD',
    originalPrice: 499,
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    variantColors: ['#FFFFFF', '#000000'],
    description:
      'Elegant tower design air purifier with 360° air intake. True HEPA + activated carbon for odor removal.',
    specs: [
      { label: 'Coverage', value: '80 sqm' },
      { label: 'CADR', value: '600 m³/h' },
      { label: 'Filter', value: '3-in-1 HEPA' },
      { label: 'Noise Level', value: '22-52 dB' },
    ],
    features: [
      { title: '360° Air Intake', description: 'Purifies air from all directions' },
      { title: 'Elegant Tower Design', description: 'Blends with modern interiors' },
    ],
    localizations: {
      ru: {
        name: 'Башенный очиститель воздуха',
        description:
          'Элегантный башенный очиститель с 360° забором воздуха. True HEPA + активированный уголь для удаления запахов.',
        specs: [
          { label: 'Покрытие', value: '80 м²' },
          { label: 'CADR', value: '600 м³/ч' },
          { label: 'Фильтр', value: '3-в-1 HEPA' },
          { label: 'Уровень шума', value: '22-52 дБ' },
        ],
        features: [
          { title: '360° забор воздуха', description: 'Очищает воздух со всех сторон' },
          {
            title: 'Элегантный башенный дизайн',
            description: 'Вписывается в современные интерьеры',
          },
        ],
      },
      tr: {
        name: 'Kule Hava Temizleyici',
        description:
          '360° hava girişli zarif kule tasarımlı hava temizleyici. Koku giderme için True HEPA + aktif karbon.',
        specs: [
          { label: 'Kapsama', value: '80 m²' },
          { label: 'CADR', value: '600 m³/h' },
          { label: 'Filtre', value: '3ü 1 Arada HEPA' },
          { label: 'Gürültü Seviyesi', value: '22-52 dB' },
        ],
        features: [
          { title: '360° Hava Girişi', description: 'Her yönden havayı temizler' },
          { title: 'Zarif Kule Tasarımı', description: 'Modern iç mekanlarla uyum sağlar' },
        ],
      },
    },
  },
  {
    name: 'Pet Air Purifier',
    slug: 'pet-air-purifier',
    model: 'PAP-300',
    size: '30x30x50 cm',
    price: 199,
    currency: 'USD',
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'airclean',
    variantColors: ['#FFFFFF', '#87CEEB'],
    description:
      'Specialized air purifier for pet owners. Extra-strong filter captures pet dander, hair, and odors.',
    specs: [
      { label: 'Coverage', value: '40 sqm' },
      { label: 'Pet Filter', value: 'Enhanced HEPA' },
      { label: 'Carbon Filter', value: 'Extra Thick' },
      { label: 'CADR', value: '300 m³/h' },
    ],
    features: [
      { title: 'Pet-Optimized Filter', description: 'Captures dander, hair, and odors' },
      { title: 'Extra Thick Carbon', description: 'Eliminates pet odors completely' },
    ],
    localizations: {
      ru: {
        name: 'Очиститель воздуха для владельцев питомцев',
        description:
          'Специализированный очиститель для владельцев домашних животных. Усиленный фильтр улавливает перхоть, шерсть и запахи.',
        specs: [
          { label: 'Покрытие', value: '40 м²' },
          { label: 'Фильтр для питомцев', value: 'Усиленный HEPA' },
          { label: 'Угольный фильтр', value: 'Сверхтолстый' },
          { label: 'CADR', value: '300 м³/ч' },
        ],
        features: [
          { title: 'Фильтр для питомцев', description: 'Улавливает перхоть, шерсть и запахи' },
          { title: 'Сверхтолстый угольный', description: 'Полностью устраняет запахи питомцев' },
        ],
      },
      tr: {
        name: 'Evcil Hayvan Hava Temizleyici',
        description:
          'Evcil hayvan sahipleri için özel hava temizleyici. Güçlendirilmiş filtre tüy, kıl ve kokuları yakalar.',
        specs: [
          { label: 'Kapsama', value: '40 m²' },
          { label: 'Evcil Hayvan Filtresi', value: 'Güçlendirilmiş HEPA' },
          { label: 'Karbon Filtre', value: 'Ekstra Kalın' },
          { label: 'CADR', value: '300 m³/h' },
        ],
        features: [
          { title: 'Evcil Hayvan Optimize Filtre', description: 'Tüy, kıl ve kokuları yakalar' },
          { title: 'Ekstra Kalın Karbon', description: 'Evcil hayvan kokularını tamamen giderir' },
        ],
      },
    },
  },
  {
    name: 'Whole House Air Purifier',
    slug: 'whole-house-air-purifier',
    model: 'WHAP-800',
    size: '40x40x80 cm',
    price: 699,
    currency: 'USD',
    originalPrice: 799,
    inStock: true,
    categorySlug: 'air-purifiers',
    brandSlug: 'adel',
    variantColors: ['#FFFFFF'],
    description:
      'Industrial-grade air purifier for whole house coverage. Medical-grade H14 HEPA filter with smart sensors.',
    specs: [
      { label: 'Coverage', value: '150 sqm' },
      { label: 'CADR', value: '800 m³/h' },
      { label: 'Filter', value: 'Medical H14 HEPA' },
      { label: 'Sensors', value: 'PM2.5, VOC, CO2' },
    ],
    features: [
      { title: 'Whole House Coverage', description: 'Purifies up to 150 sqm' },
      { title: 'Smart Sensors', description: 'Monitors PM2.5, VOC, and CO2 levels' },
    ],
    localizations: {
      ru: {
        name: 'Очиститель воздуха для всего дома',
        description:
          'Промышленный очиститель для всего дома. Медицинский H14 HEPA фильтр с умными датчиками.',
        specs: [
          { label: 'Покрытие', value: '150 м²' },
          { label: 'CADR', value: '800 м³/ч' },
          { label: 'Фильтр', value: 'Медицинский H14 HEPA' },
          { label: 'Датчики', value: 'PM2.5, VOC, CO2' },
        ],
        features: [
          { title: 'Покрытие всего дома', description: 'Очищает до 150 м²' },
          { title: 'Умные датчики', description: 'Мониторинг PM2.5, VOC и CO2' },
        ],
      },
      tr: {
        name: 'Tüm Ev Hava Temizleyici',
        description:
          'Tüm ev kapsamı için endüstriyel sınıf hava temizleyici. Akıllı sensörlü medikal H14 HEPA filtre.',
        specs: [
          { label: 'Kapsama', value: '150 m²' },
          { label: 'CADR', value: '800 m³/h' },
          { label: 'Filtre', value: 'Medikal H14 HEPA' },
          { label: 'Sensörler', value: 'PM2.5, VOC, CO2' },
        ],
        features: [
          { title: 'Tüm Ev Kapsamı', description: "150 m²'ye kadar temizler" },
          { title: 'Akıllı Sensörler', description: 'PM2.5, VOC ve CO2 seviyelerini izler' },
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
    { platform: 'facebook', url: 'https://facebook.com/adel', label: 'facebook.com/adel' },
    { platform: 'instagram', url: 'https://instagram.com/adel', label: 'instagram.com/adel' },
    { platform: 'twitter', url: 'https://twitter.com/adel', label: 'twitter.com/adel' },
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
