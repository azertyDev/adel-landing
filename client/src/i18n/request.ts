import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Import namespace files and merge them
async function loadMessages(locale: string) {
  const namespaces = [
    'about',
    'common',
    'contact',
    'error',
    'faq',
    'footer',
    'headerDropdown',
    'home',
    'navigation',
    'product',
    'products',
  ];

  const messages: Record<string, Record<string, unknown>> = {};

  // Load each namespace
  for (const ns of namespaces) {
    try {
      const nsMessages = (await import(`../../messages/${ns}/${locale}.json`)).default;
      messages[ns] = nsMessages;
    } catch {
      // Namespace file doesn't exist for this locale, skip
    }
  }

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'tr' | 'ru')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await loadMessages(locale),
  };
});
