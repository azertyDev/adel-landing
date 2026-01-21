import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Toaster } from 'sonner';
import { routing } from '@/i18n/routing';
import { QueryProvider } from '@/shared/providers';
import { Footer, Header } from '@/widgets';
import { inter, montserrat } from '../fonts';
import '../globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ADEL - Premium Home Appliances',
    template: '%s | ADEL',
  },
  description:
    'Discover premium home appliances from ADEL. Quality products for your kitchen and home with modern design and reliable performance.',
  keywords: ['home appliances', 'kitchen appliances', 'ADEL', 'premium appliances'],
  authors: [{ name: 'ADEL' }],
  creator: 'ADEL',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['tr_TR', 'ru_RU'],
    siteName: 'ADEL',
    title: 'ADEL - Premium Home Appliances',
    description:
      'Discover premium home appliances from ADEL. Quality products for your kitchen and home.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADEL - Premium Home Appliances',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADEL - Premium Home Appliances',
    description: 'Discover premium home appliances from ADEL.',
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

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            <div className="flex min-h-screen flex-col">
              <Header />
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
