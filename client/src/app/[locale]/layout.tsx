import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Toaster } from 'sonner';
import { routing } from '@/i18n/routing';
import { getHeaderAbout, getHeaderContact, getSiteSettings } from '@/shared/api/strapi/client';
import { QueryProvider } from '@/shared/providers';
import { Footer, Header } from '@/widgets';
import { inter, montserrat } from '../fonts';
import '../globals.css';

const LOCALE_MAP: Record<string, string> = {
  en: 'en_US',
  tr: 'tr_TR',
  ru: 'ru_RU',
};

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const settings = await getSiteSettings(locale);

  const siteName = settings?.siteName || 'ADEL';
  const title = settings?.siteTitle || 'ADEL | Home Appliances';
  const description = settings?.siteDescription || 'Quality home appliances for kitchen and home.';
  const keywords = settings?.keywords || ['ADEL', 'home appliances'];
  const ogImage = settings?.ogImage || '/og-image.jpg';
  const twitterHandle = settings?.twitterHandle;

  const ogLocale = LOCALE_MAP[locale] || 'en_US';
  const alternateLocales = Object.values(LOCALE_MAP).filter((l) => l !== ogLocale);

  return {
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    keywords,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
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
      locale: ogLocale,
      alternateLocale: alternateLocales,
      siteName,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteName} - Home Appliances`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: twitterHandle || undefined,
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
}

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
