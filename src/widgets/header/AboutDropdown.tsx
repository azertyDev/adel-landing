'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/shared/ui';

export function AboutDropdown() {
  const t = useTranslations('headerDropdown.about');

  return (
    <div className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl md:leading-relaxed">
            {t('paragraph1')}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl md:leading-relaxed">
            {t('paragraph2')}
          </p>
        </div>
      </Container>
    </div>
  );
}
