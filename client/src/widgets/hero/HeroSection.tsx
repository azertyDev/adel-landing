import { getHero } from '@/shared/api/strapi';
import { Hero } from './Hero';

interface HeroSectionProps {
  locale: string;
}

export async function HeroSection({ locale }: HeroSectionProps) {
  const data = await getHero(locale);

  if (!data) {
    return null;
  }

  return <Hero data={data} />;
}
