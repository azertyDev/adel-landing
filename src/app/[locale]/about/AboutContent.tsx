'use client';

import { motion } from 'framer-motion';
import { Award, Leaf, Lightbulb, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Breadcrumbs, Card, Container, Heading, Section, Text } from '@/shared/ui';

const values = [
  { key: 'quality', icon: Award },
  { key: 'innovation', icon: Lightbulb },
  { key: 'sustainability', icon: Leaf },
  { key: 'customer', icon: Users },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function AboutContent() {
  const t = useTranslations('about');
  const navT = useTranslations('navigation');

  const breadcrumbs = [{ label: navT('home'), href: '/' }, { label: navT('about') }];

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
              <Heading as="h1" className="mb-6">
                {t('hero.title')}
              </Heading>
              <Text variant="lead" className="text-gray-600">
                {t('hero.subtitle')}
              </Text>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h2" className="mb-6">
                {t('mission.title')}
              </Heading>
              <Text variant="lead" className="text-gray-600">
                {t('mission.description')}
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-video rounded-2xl bg-gray-200"
            >
              {/* Placeholder for image/video */}
              <div className="flex h-full items-center justify-center text-gray-400">
                Mission Image
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="mb-12 text-center">
            <Heading as="h2" className="mb-4">
              {t('values.title')}
            </Heading>
          </div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {values.map((value) => (
              <motion.div key={value.key} variants={itemVariants}>
                <Card className="h-full p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                    <value.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold">{t(`values.${value.key}`)}</h3>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section>
        <Container>
          <motion.div
            className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50K+', label: 'Happy Customers' },
              { value: '100+', label: 'Products' },
              { value: '30+', label: 'Countries' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <p className="mb-2 text-4xl font-bold">{stat.value}</p>
                <Text variant="muted">{stat.label}</Text>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
