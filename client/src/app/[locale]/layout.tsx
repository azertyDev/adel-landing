import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Toaster } from 'sonner';
import { routing } from '@/i18n/routing';
import { getHeaderAbout, getHeaderContact } from '@/shared/api/strapi/client';
import { QueryProvider } from '@/shared/providers';
import { Footer, Header } from '@/widgets';
import { inter, montserrat } from '../fonts';
import '../globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ADEL | Ev Aletleri - Mutfak ve Ev için Kaliteli Ürünler',
    template: '%s | ADEL',
  },
  description:
    'ADEL ev aletleri ile mutfağınızı ve evinizi modernleştirin. Mikrodalga fırınlar, çamaşır makineleri, buzdolapları ve daha fazlası. Kalite ve güvenilirlik bir arada.',
  keywords: [
    'ADEL',
    'ev aletleri',
    'mutfak aletleri',
    'mikrodalga fırın',
    'çamaşır makinesi',
    'buzdolabı',
    'ev elektroniği',
    'beyaz eşya',
    'home appliances',
    'kitchen appliances',
    'бытовая техника',
  ],
  authors: [{ name: 'ADEL' }],
  creator: 'ADEL',
  publisher: 'ADEL',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      tr: '/tr',
      ru: '/ru',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US', 'ru_RU'],
    siteName: 'ADEL',
    title: 'ADEL | Ev Aletleri - Mutfak ve Ev için Kaliteli Ürünler',
    description:
      'ADEL ev aletleri ile mutfağınızı ve evinizi modernleştirin. Kalite ve güvenilirlik bir arada.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADEL - Ev Aletleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADEL | Ev Aletleri',
    description: 'ADEL ev aletleri ile mutfağınızı ve evinizi modernleştirin.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'electronics',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'tr' | 'ru')) {
    notFound();
  }

  setRequestLocale(locale);

  const [messages, headerAbout, headerContact] = await Promise.all([
    getMessages(),
    getHeaderAbout(locale),
    getHeaderContact(locale),
  ]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            <div className="flex min-h-screen flex-col bg-[url('/image/content-bg.png')] bg-no-repeat bg-top sm:bg-center bg-cover bg-scroll">
              <Header headerAbout={headerAbout} headerContact={headerContact} />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
          <Toaster position="bottom-right" richColors closeButton />
        </QueryProvider>
      </body>
    </html>
  );
}
