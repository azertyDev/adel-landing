'use client';

import { useTranslations } from 'next-intl';
import type { Category } from '@/shared/api/strapi';
import { Container, Section, SectionTitle } from '@/shared/ui';
import { CategoryGrid } from '@/widgets/category-grid';

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  const t = useTranslations('home.products');

  if (categories.length === 0) {
    return null;
  }

  return (
    <Section>
      <Container>
        <div className="mb-9">
          <SectionTitle title={t('title')} />
        </div>
        <CategoryGrid categories={categories} />
      </Container>
    </Section>
  );
}
