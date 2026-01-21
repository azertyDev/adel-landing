import { setRequestLocale } from 'next-intl/server';
import { type Category, getCategories } from '@/shared/api/strapi';
import { AboutUsSection, CategoriesSection, HeroSection, WhyUsSection } from '@/widgets';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Fetch categories from API
  let categories: Category[] = [];
  try {
    categories = await getCategories(locale);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }

  return (
    <>
      <div className="bg-[url('/image/content-bg.png')] bg-no-repeat bg-center bg-cover bg-fixed">
        <HeroSection locale={locale} />
        <CategoriesSection categories={categories} />
        <WhyUsSection locale={locale} />
      </div>
      <AboutUsSection locale={locale} />
    </>
  );
}
