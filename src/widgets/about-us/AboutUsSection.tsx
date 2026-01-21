import { getAboutUs } from '@/shared/api/strapi';
import { AboutUs } from './AboutUs';

interface AboutUsSectionProps {
  locale: string;
}

export async function AboutUsSection({ locale }: AboutUsSectionProps) {
  const data = await getAboutUs(locale);

  if (!data) {
    return null;
  }

  return <AboutUs data={data} />;
}
