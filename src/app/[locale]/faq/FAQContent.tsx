'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n';
import type { FAQItem } from '@/shared/api/strapi';
import { Breadcrumbs, Button, Card, Container, Heading, Section, Text } from '@/shared/ui';
import { FAQAccordion } from '@/widgets';

interface FAQContentProps {
  faqs: FAQItem[];
}

export function FAQContent({ faqs }: FAQContentProps) {
  const t = useTranslations('faq');
  const navT = useTranslations('navigation');

  const breadcrumbs = [{ label: navT('home'), href: '/' }, { label: navT('faq') }];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gray-50">
        <Container>
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h1" className="mb-4">
                {t('title')}
              </Heading>
              <Text variant="lead" className="text-gray-600">
                {t('subtitle')}
              </Text>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* FAQ List */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            {faqs.length > 0 ? (
              <FAQAccordion items={faqs} />
            ) : (
              <div className="py-12 text-center">
                <Text variant="muted">{t('noResults')}</Text>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <Container>
          <Card className="mx-auto max-w-2xl p-8 text-center">
            <Heading as="h3" className="mb-4">
              {t('notFound')}
            </Heading>
            <Link href="/contact">
              <Button>{t('contactUs')}</Button>
            </Link>
          </Card>
        </Container>
      </Section>
    </>
  );
}
