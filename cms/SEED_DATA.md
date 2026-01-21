# Данные для заполнения Strapi CMS

## Категории (Categories)

### 1. Coffee Machines
- **Name (RU):** Кофемашины
- **Name (EN):** Coffee Machines
- **Name (TR):** Kahve Makineleri
- **Slug:** coffee-machines
- **Description (RU):** Премиальные кофемашины для идеального напитка
- **Description (EN):** Premium coffee machines for the perfect brew
- **Description (TR):** Mükemmel demleme için premium kahve makineleri

### 2. Kitchen Appliances
- **Name (RU):** Кухонная техника
- **Name (EN):** Kitchen Appliances
- **Name (TR):** Mutfak Aletleri
- **Slug:** kitchen-appliances
- **Description (RU):** Необходимая техника для вашей кухни
- **Description (EN):** Essential appliances for your kitchen
- **Description (TR):** Mutfağınız için temel aletler

### 3. Air Purifiers
- **Name (RU):** Очистители воздуха
- **Name (EN):** Air Purifiers
- **Name (TR):** Hava Temizleyicileri
- **Slug:** air-purifiers
- **Description (RU):** Чистый и свежий воздух для вашего дома
- **Description (EN):** Clean and fresh air for your home
- **Description (TR):** Eviniz için temiz ve taze hava

---

## Бренды (Brands)

### 1. ADEL
- **Slug:** adel

### 2. TechHome
- **Slug:** techhome

### 3. AirClean
- **Slug:** airclean

---

## Продукты (Products)

### Категория: Coffee Machines

#### 1. Espresso Master Pro
- **Slug:** espresso-master-pro
- **Price:** 599
- **Brand:** ADEL
- **Category:** Coffee Machines
- **In Stock:** true
- **Description (RU):** Профессиональная эспрессо-машина с насосом 15 бар, встроенной кофемолкой и капучинатором. Идеально подходит для ценителей кофе, которые требуют напитки кафе-качества дома.
- **Description (EN):** Professional-grade espresso machine with 15-bar pressure pump, built-in grinder, and milk frother. Perfect for coffee enthusiasts who demand cafe-quality drinks at home.
- **Description (TR):** 15 bar basınç pompası, dahili öğütücü ve süt köpürtücüsü ile profesyonel espresso makinesi. Evde kafe kalitesinde içecekler isteyen kahve tutkunları için mükemmel.
- **Colors:** `["#C0C0C0", "#000000"]`
- **Specs (RU):**
```json
[
  {"label": "Давление", "value": "15 бар"},
  {"label": "Бак для воды", "value": "2 л"},
  {"label": "Кофемолка", "value": "Встроенная жерновая"},
  {"label": "Мощность", "value": "1450 Вт"},
  {"label": "Капучинатор", "value": "Паровая трубка"}
]
```
- **Specs (EN):**
```json
[
  {"label": "Pressure", "value": "15 bar"},
  {"label": "Water Tank", "value": "2L"},
  {"label": "Grinder", "value": "Built-in Burr"},
  {"label": "Power", "value": "1450W"},
  {"label": "Milk Frother", "value": "Steam Wand"}
]
```

#### 2. Cappuccino Elite
- **Slug:** cappuccino-elite
- **Price:** 899
- **Brand:** ADEL
- **Category:** Coffee Machines
- **In Stock:** true
- **Description (EN):** Fully automatic cappuccino machine with one-touch brewing. Features ceramic grinder, automatic milk system, and customizable drink settings.
- **Description (RU):** Полностью автоматическая капучино-машина с приготовлением одним нажатием. Керамическая кофемолка, автоматическая система молока и настраиваемые параметры напитков.
- **Description (TR):** Tek dokunuşla demleme özellikli tam otomatik cappuccino makinesi. Seramik öğütücü, otomatik süt sistemi ve özelleştirilebilir içecek ayarları.
- **Colors:** `["#000000", "#FFFFFF"]`
- **Specs (EN):**
```json
[
  {"label": "Pressure", "value": "19 bar"},
  {"label": "Water Tank", "value": "1.8L"},
  {"label": "Bean Container", "value": "300g"},
  {"label": "Power", "value": "1500W"},
  {"label": "Drinks", "value": "12 Presets"}
]
```

#### 3. Drip Coffee Classic
- **Slug:** drip-coffee-classic
- **Price:** 129
- **Brand:** TechHome
- **Category:** Coffee Machines
- **In Stock:** true
- **Description (EN):** Classic drip coffee maker with programmable timer, thermal carafe, and anti-drip system. Brews up to 12 cups of perfectly balanced coffee.
- **Description (RU):** Классическая капельная кофеварка с программируемым таймером, термокувшином и системой антикапля. Заваривает до 12 чашек идеально сбалансированного кофе.
- **Description (TR):** Programlanabilir zamanlayıcı, termal sürahi ve damlama önleyici sistemli klasik filtre kahve makinesi. 12 bardağa kadar mükemmel dengelenmiş kahve demler.
- **Colors:** `["#000000", "#C0C0C0"]`
- **Specs (EN):**
```json
[
  {"label": "Capacity", "value": "12 cups"},
  {"label": "Carafe", "value": "Thermal"},
  {"label": "Timer", "value": "24-hour"},
  {"label": "Power", "value": "1000W"},
  {"label": "Keep Warm", "value": "4 hours"}
]
```

#### 4. Pod Coffee Compact
- **Slug:** pod-coffee-compact
- **Price:** 89
- **Brand:** TechHome
- **Category:** Coffee Machines
- **In Stock:** true
- **Description (EN):** Compact single-serve coffee maker compatible with all major pod systems. Fast heat-up, adjustable cup sizes, and sleek modern design.
- **Description (RU):** Компактная кофеварка для одной порции, совместимая со всеми основными капсульными системами. Быстрый нагрев, регулируемые размеры чашек и элегантный современный дизайн.
- **Description (TR):** Tüm büyük kapsül sistemleriyle uyumlu kompakt tek porsiyon kahve makinesi. Hızlı ısınma, ayarlanabilir fincan boyutları ve şık modern tasarım.
- **Colors:** `["#FF0000", "#000000", "#FFFFFF"]`
- **Specs (EN):**
```json
[
  {"label": "Heat-up Time", "value": "25 seconds"},
  {"label": "Water Tank", "value": "0.7L"},
  {"label": "Cup Sizes", "value": "3 options"},
  {"label": "Power", "value": "1400W"},
  {"label": "Dimensions", "value": "Compact"}
]
```

#### 5. Cold Brew Maker
- **Slug:** cold-brew-maker
- **Price:** 49
- **Brand:** AirClean
- **Category:** Coffee Machines
- **In Stock:** true
- **Description (EN):** Premium cold brew coffee system with airtight seal and fine mesh filter. Makes smooth, low-acid cold brew concentrate in 12-24 hours.
- **Description (RU):** Премиальная система для холодного заваривания кофе с герметичной крышкой и мелкой сеткой-фильтром. Готовит мягкий концентрат колд-брю с низкой кислотностью за 12-24 часа.
- **Description (TR):** Hava geçirmez kapak ve ince örgülü filtreli premium soğuk demleme kahve sistemi. 12-24 saat içinde yumuşak, düşük asitli soğuk demleme konsantresi yapar.
- **Colors:** `["#000000"]`
- **Specs (EN):**
```json
[
  {"label": "Capacity", "value": "1.5L"},
  {"label": "Filter", "value": "Fine Mesh"},
  {"label": "Material", "value": "Borosilicate Glass"},
  {"label": "Brew Time", "value": "12-24 hours"},
  {"label": "BPA Free", "value": "Yes"}
]
```

---

### Категория: Kitchen Appliances

#### 6. Smart Blender Pro
- **Slug:** smart-blender-pro
- **Price:** 199
- **Brand:** ADEL
- **Category:** Kitchen Appliances
- **In Stock:** true
- **Description (EN):** High-performance blender with 1500W motor, smart programs, and self-cleaning function. Perfect for smoothies, soups, and nut butters.
- **Description (RU):** Высокопроизводительный блендер с мотором 1500 Вт, умными программами и функцией самоочистки. Идеален для смузи, супов и ореховых паст.
- **Description (TR):** 1500W motor, akıllı programlar ve kendi kendini temizleme fonksiyonlu yüksek performanslı blender. Smoothie, çorba ve fıstık ezmesi için mükemmel.
- **Colors:** `["#C0C0C0", "#000000"]`
- **Specs (EN):**
```json
[
  {"label": "Power", "value": "1500W"},
  {"label": "Capacity", "value": "2L"},
  {"label": "Speed Settings", "value": "10"},
  {"label": "Programs", "value": "6 Auto"},
  {"label": "Blades", "value": "6 Stainless Steel"}
]
```

#### 7. Air Fryer XL
- **Slug:** air-fryer-xl
- **Price:** 149
- **Brand:** ADEL
- **Category:** Kitchen Appliances
- **In Stock:** true
- **Description (EN):** Large capacity air fryer with rapid air technology. Crispy results with up to 85% less fat. Digital touch screen and 8 preset programs.
- **Description (RU):** Аэрофритюрница большой ёмкости с технологией быстрого воздуха. Хрустящие результаты с на 85% меньше жира. Цифровой сенсорный экран и 8 предустановленных программ.
- **Description (TR):** Hızlı hava teknolojisine sahip büyük kapasiteli airfryer. %85'e kadar daha az yağ ile çıtır sonuçlar. Dijital dokunmatik ekran ve 8 ön ayarlı program.
- **Colors:** `["#000000", "#FFFFFF"]`
- **Specs (EN):**
```json
[
  {"label": "Capacity", "value": "5.5L"},
  {"label": "Power", "value": "1700W"},
  {"label": "Temperature", "value": "80-200°C"},
  {"label": "Programs", "value": "8 Presets"},
  {"label": "Timer", "value": "60 min"}
]
```

#### 8. Electric Kettle Smart
- **Slug:** electric-kettle-smart
- **Price:** 79
- **Brand:** TechHome
- **Category:** Kitchen Appliances
- **In Stock:** true
- **Description (EN):** Temperature-controlled electric kettle with keep-warm function. Perfect for tea, coffee, and baby formula. Borosilicate glass body.
- **Description (RU):** Электрочайник с контролем температуры и функцией поддержания тепла. Идеален для чая, кофе и детского питания. Корпус из боросиликатного стекла.
- **Description (TR):** Sıcak tutma fonksiyonlu sıcaklık kontrollü elektrikli su ısıtıcısı. Çay, kahve ve bebek maması için mükemmel. Borosilikat cam gövde.
- **Colors:** `["#C0C0C0", "#000000"]`
- **Specs (EN):**
```json
[
  {"label": "Capacity", "value": "1.7L"},
  {"label": "Power", "value": "2200W"},
  {"label": "Temperature", "value": "5 Settings"},
  {"label": "Keep Warm", "value": "2 hours"},
  {"label": "Material", "value": "Glass + Steel"}
]
```

#### 9. Toaster 4-Slice
- **Slug:** toaster-4-slice
- **Price:** 69
- **Brand:** TechHome
- **Category:** Kitchen Appliances
- **In Stock:** true
- **Description (EN):** Wide-slot 4-slice toaster with 7 browning levels. Extra-lift feature, defrost and bagel functions. Stainless steel design.
- **Description (RU):** 4-х слотовый тостер с широкими отверстиями и 7 уровнями подрумянивания. Функция подъёма, размораживания и для бейглов. Дизайн из нержавеющей стали.
- **Description (TR):** 7 kızartma seviyeli geniş yuvalı 4 dilimlik tost makinesi. Ekstra kaldırma özelliği, buz çözme ve simit fonksiyonları. Paslanmaz çelik tasarım.
- **Colors:** `["#C0C0C0", "#000000", "#B87333"]`
- **Specs (EN):**
```json
[
  {"label": "Slots", "value": "4 Wide"},
  {"label": "Browning", "value": "7 Levels"},
  {"label": "Functions", "value": "Defrost, Bagel, Reheat"},
  {"label": "Power", "value": "1800W"},
  {"label": "Material", "value": "Stainless Steel"}
]
```

#### 10. Stand Mixer Professional
- **Slug:** stand-mixer-professional
- **Price:** 349
- **Brand:** ADEL
- **Category:** Kitchen Appliances
- **In Stock:** true
- **Description (EN):** Professional stand mixer with 800W motor and 6L bowl. Includes dough hook, flat beater, and wire whisk. 10 speed settings.
- **Description (RU):** Профессиональный планетарный миксер с мотором 800 Вт и чашей 6 л. В комплекте крюк для теста, плоская насадка и венчик. 10 скоростей.
- **Description (TR):** 800W motor ve 6L kase ile profesyonel stand mikser. Hamur kancası, düz çırpıcı ve tel çırpıcı dahil. 10 hız ayarı.
- **Colors:** `["#FF0000", "#000000", "#FFFFFF", "#C0C0C0"]`
- **Specs (EN):**
```json
[
  {"label": "Power", "value": "800W"},
  {"label": "Bowl", "value": "6L Stainless"},
  {"label": "Speeds", "value": "10"},
  {"label": "Attachments", "value": "3 Included"},
  {"label": "Tilt Head", "value": "Yes"}
]
```

#### 11. Food Processor Multi
- **Slug:** food-processor-multi
- **Price:** 179
- **Brand:** AirClean
- **Category:** Kitchen Appliances
- **In Stock:** true
- **Description (EN):** Versatile food processor with 12-cup capacity. Includes slicing, shredding, and chopping discs. Powerful 750W motor.
- **Description (RU):** Универсальный кухонный комбайн с чашей 12 чашек. В комплекте диски для нарезки, шинковки и измельчения. Мощный мотор 750 Вт.
- **Description (TR):** 12 bardak kapasiteli çok yönlü mutfak robotu. Dilimleme, rendeleme ve doğrama diskleri dahil. Güçlü 750W motor.
- **Colors:** `["#FFFFFF", "#000000"]`
- **Specs (EN):**
```json
[
  {"label": "Capacity", "value": "12 cups"},
  {"label": "Power", "value": "750W"},
  {"label": "Discs", "value": "4 Included"},
  {"label": "Speeds", "value": "2 + Pulse"},
  {"label": "BPA Free", "value": "Yes"}
]
```

---

### Категория: Air Purifiers

#### 12. HEPA Air Purifier Large
- **Slug:** hepa-air-purifier-large
- **Price:** 299
- **Brand:** ADEL
- **Category:** Air Purifiers
- **In Stock:** true
- **Description (EN):** True HEPA air purifier for large rooms up to 50 sqm. Captures 99.97% of particles. 3-stage filtration with activated carbon.
- **Description (RU):** Очиститель воздуха True HEPA для больших комнат до 50 м². Захватывает 99,97% частиц. 3-ступенчатая фильтрация с активированным углём.
- **Description (TR):** 50 m²'ye kadar büyük odalar için True HEPA hava temizleyici. Parçacıkların %99,97'sini yakalar. Aktif karbonlu 3 aşamalı filtrasyon.
- **Colors:** `["#FFFFFF"]`
- **Specs (EN):**
```json
[
  {"label": "Coverage", "value": "50 sqm"},
  {"label": "CADR", "value": "400 m³/h"},
  {"label": "Filter", "value": "True HEPA H13"},
  {"label": "Noise Level", "value": "25-50 dB"},
  {"label": "Stages", "value": "3"}
]
```

#### 13. Smart Air Purifier WiFi
- **Slug:** smart-air-purifier-wifi
- **Price:** 399
- **Brand:** ADEL
- **Category:** Air Purifiers
- **In Stock:** true
- **Description (EN):** WiFi-enabled air purifier with app control and real-time air quality monitoring. Auto mode adjusts fan speed based on air quality.
- **Description (RU):** Очиститель воздуха с WiFi, управлением через приложение и мониторингом качества воздуха в реальном времени. Автоматический режим регулирует скорость вентилятора.
- **Description (TR):** Uygulama kontrolü ve gerçek zamanlı hava kalitesi izleme özellikli WiFi destekli hava temizleyici. Otomatik mod, hava kalitesine göre fan hızını ayarlar.
- **Colors:** `["#FFFFFF", "#000000"]`
- **Specs (EN):**
```json
[
  {"label": "Coverage", "value": "60 sqm"},
  {"label": "CADR", "value": "500 m³/h"},
  {"label": "WiFi", "value": "Yes"},
  {"label": "Air Quality Sensor", "value": "PM2.5"},
  {"label": "Auto Mode", "value": "Yes"}
]
```

#### 14. Compact Air Purifier
- **Slug:** compact-air-purifier
- **Price:** 99
- **Brand:** TechHome
- **Category:** Air Purifiers
- **In Stock:** true
- **Description (EN):** Compact and portable air purifier perfect for bedrooms and offices. Quiet operation and energy efficient. USB powered option.
- **Description (RU):** Компактный и портативный очиститель воздуха, идеальный для спален и офисов. Тихая работа и энергоэффективность. Возможность питания от USB.
- **Description (TR):** Yatak odaları ve ofisler için mükemmel kompakt ve taşınabilir hava temizleyici. Sessiz çalışma ve enerji verimliliği. USB güç seçeneği.
- **Colors:** `["#FFFFFF", "#87CEEB", "#FFB6C1"]`
- **Specs (EN):**
```json
[
  {"label": "Coverage", "value": "20 sqm"},
  {"label": "CADR", "value": "150 m³/h"},
  {"label": "Noise Level", "value": "20-40 dB"},
  {"label": "Power", "value": "USB / AC"},
  {"label": "Portable", "value": "Yes"}
]
```

#### 15. Air Purifier + Humidifier
- **Slug:** air-purifier-humidifier
- **Price:** 249
- **Brand:** AirClean
- **Category:** Air Purifiers
- **In Stock:** true
- **Description (EN):** 2-in-1 air purifier and humidifier combo. HEPA filtration plus cool mist humidification for optimal indoor air quality.
- **Description (RU):** Комбинация 2-в-1: очиститель воздуха и увлажнитель. HEPA-фильтрация плюс увлажнение холодным туманом для оптимального качества воздуха в помещении.
- **Description (TR):** 2'si 1 arada hava temizleyici ve nemlendirici kombinasyonu. Optimum iç mekan hava kalitesi için HEPA filtrasyon ve soğuk buhar nemlendirme.
- **Colors:** `["#FFFFFF"]`
- **Specs (EN):**
```json
[
  {"label": "Coverage", "value": "35 sqm"},
  {"label": "Humidifier", "value": "3L Tank"},
  {"label": "Filter", "value": "HEPA + Carbon"},
  {"label": "Mist Output", "value": "300ml/h"},
  {"label": "Timer", "value": "1-8 hours"}
]
```

#### 16. Car Air Purifier
- **Slug:** car-air-purifier
- **Price:** 59
- **Brand:** TechHome
- **Category:** Air Purifiers
- **In Stock:** true
- **Description (EN):** Compact car air purifier with HEPA filter and ionizer. Plugs into car USB or 12V outlet. Removes odors, smoke, and allergens.
- **Description (RU):** Компактный автомобильный очиститель воздуха с HEPA-фильтром и ионизатором. Подключается к USB или 12V розетке автомобиля. Удаляет запахи, дым и аллергены.
- **Description (TR):** HEPA filtre ve iyonlaştırıcılı kompakt araç hava temizleyici. Araç USB veya 12V çıkışına takılır. Kokuları, dumanı ve alerjenleri giderir.
- **Colors:** `["#000000", "#C0C0C0"]`
- **Specs (EN):**
```json
[
  {"label": "Coverage", "value": "Car Interior"},
  {"label": "Filter", "value": "HEPA + Ionizer"},
  {"label": "Power", "value": "12V / USB"},
  {"label": "Noise Level", "value": "< 30 dB"},
  {"label": "Size", "value": "Cup Holder Fit"}
]
```

---

## FAQ

### 1. What is the warranty period?
- **Order:** 1
- **Question (RU):** Какой гарантийный срок?
- **Question (EN):** What is the warranty period?
- **Question (TR):** Garanti süresi nedir?
- **Answer (RU):** Все продукты ADEL поставляются с 2-летней гарантией производителя, покрывающей дефекты материалов и изготовления.
- **Answer (EN):** All ADEL products come with a 2-year manufacturer warranty covering defects in materials and workmanship.
- **Answer (TR):** Tüm ADEL ürünleri, malzeme ve işçilik kusurlarını kapsayan 2 yıllık üretici garantisi ile birlikte gelir.

### 2. Do you offer free shipping?
- **Order:** 2
- **Question (RU):** Вы предлагаете бесплатную доставку?
- **Question (EN):** Do you offer free shipping?
- **Question (TR):** Ücretsiz kargo sunuyor musunuz?
- **Answer (RU):** Да, мы предлагаем бесплатную доставку для всех заказов свыше $100 по стране.
- **Answer (EN):** Yes, we offer free shipping on all orders over $100 within the country.
- **Answer (TR):** Evet, ülke içinde 100$ üzeri tüm siparişlerde ücretsiz kargo sunuyoruz.

### 3. How can I track my order?
- **Order:** 3
- **Question (RU):** Как я могу отследить мой заказ?
- **Question (EN):** How can I track my order?
- **Question (TR):** Siparişimi nasıl takip edebilirim?
- **Answer (RU):** После отправки вы получите трек-номер по электронной почте для отслеживания статуса доставки.
- **Answer (EN):** Once shipped, you'll receive a tracking number via email to monitor your delivery status.
- **Answer (TR):** Gönderildikten sonra, teslimat durumunuzu izlemek için e-posta ile bir takip numarası alacaksınız.

### 4. What payment methods do you accept?
- **Order:** 4
- **Question (RU):** Какие способы оплаты вы принимаете?
- **Question (EN):** What payment methods do you accept?
- **Question (TR):** Hangi ödeme yöntemlerini kabul ediyorsunuz?
- **Answer (RU):** Мы принимаем кредитные карты (Visa, Mastercard), PayPal и банковские переводы.
- **Answer (EN):** We accept credit cards (Visa, Mastercard), PayPal, and bank transfers.
- **Answer (TR):** Kredi kartları (Visa, Mastercard), PayPal ve banka havalesi kabul ediyoruz.

### 5. Can I return a product?
- **Order:** 5
- **Question (RU):** Могу ли я вернуть товар?
- **Question (EN):** Can I return a product?
- **Question (TR):** Ürünü iade edebilir miyim?
- **Answer (RU):** Да, вы можете вернуть любой товар в течение 30 дней после покупки в оригинальной упаковке.
- **Answer (EN):** Yes, you can return any product within 30 days of purchase in its original packaging.
- **Answer (TR):** Evet, satın alma tarihinden itibaren 30 gün içinde herhangi bir ürünü orijinal ambalajında iade edebilirsiniz.

### 6. Do you ship internationally?
- **Order:** 6
- **Question (RU):** Вы осуществляете международную доставку?
- **Question (EN):** Do you ship internationally?
- **Question (TR):** Uluslararası gönderim yapıyor musunuz?
- **Answer (RU):** В настоящее время мы доставляем в избранные страны. Свяжитесь с нами для уточнения доступности в вашем регионе.
- **Answer (EN):** Currently we ship to selected countries. Contact us for availability in your region.
- **Answer (TR):** Şu anda seçili ülkelere gönderim yapıyoruz. Bölgenizdeki uygunluk için bizimle iletişime geçin.
