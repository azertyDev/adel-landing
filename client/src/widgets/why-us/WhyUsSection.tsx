import { getWhyUs } from '@/shared/api/strapi';
import { WhyUs } from './WhyUs';

interface WhyUsSectionProps {
  locale: string;
}

export async function WhyUsSection({ locale }: WhyUsSectionProps) {
  const data = await getWhyUs(locale);

  if (!data) {
    return null;
  }

  return <WhyUs data={data} />;
}
