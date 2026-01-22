import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { type FAQItem, getFAQs } from '@/shared/api/strapi';
import { FAQContent } from './FAQContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  let faqs: FAQItem[] = [];
  try {
    faqs = await getFAQs(locale);
  } catch (error) {
    console.error('Failed to fetch FAQs:', error);
  }

  return <FAQContent faqs={faqs} />;
}
