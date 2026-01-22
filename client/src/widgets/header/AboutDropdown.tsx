'use client';

import { useTranslations } from 'next-intl';
import type { HeaderAboutSection } from '@/shared/api/strapi/types';
import { Container } from '@/shared/ui';

interface AboutDropdownProps {
  data: HeaderAboutSection | null;
}

export function AboutDropdown({ data }: AboutDropdownProps) {
  const t = useTranslations('headerDropdown.about');

  // Use API data if available, fallback to translations
  const paragraph1 = data?.paragraph1 || t('paragraph1');
  const paragraph2 = data?.paragraph2 || t('paragraph2');

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center bg-gray-50 py-16 md:py-20 lg:py-24">
      <Container className="max-w-7xl">
        <p className="text-lg leading-relaxed text-gray-700 md:text-xl md:leading-relaxed">
          {paragraph1}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl md:leading-relaxed">
          {paragraph2}
        </p>
      </Container>
    </div>
  );
}
