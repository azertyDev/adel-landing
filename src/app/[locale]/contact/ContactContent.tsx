'use client';

import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Breadcrumbs, Button, Card, Container, Heading, Section, Text } from '@/shared/ui';

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function ContactContent() {
  const t = useTranslations('contact');
  const navT = useTranslations('navigation');

  const breadcrumbs = [{ label: navT('home'), href: '/' }, { label: navT('contact') }];

  const handleChatClick = () => {
    toast.info('Chat support coming soon!', {
      description: 'Our chat feature is currently being set up.',
    });
  };

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

      {/* Contact Cards */}
      <Section>
        <Container>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Phone */}
            <motion.div variants={itemVariants}>
              <Card className="h-full p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <Phone className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="mb-2 font-semibold">{t('phone.title')}</h3>
                <Text variant="small" className="mb-4 text-gray-500">
                  {t('phone.description')}
                </Text>
                <a
                  href="tel:+1234567890"
                  className="text-lg font-medium text-black hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </Card>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <Card className="h-full p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <Mail className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="mb-2 font-semibold">{t('email.title')}</h3>
                <Text variant="small" className="mb-4 text-gray-500">
                  {t('email.description')}
                </Text>
                <a
                  href="mailto:support@adel.com"
                  className="text-lg font-medium text-black hover:underline"
                >
                  support@adel.com
                </a>
              </Card>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants}>
              <Card className="h-full p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <MapPin className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="mb-2 font-semibold">{t('address.title')}</h3>
                <Text variant="small" className="mb-4 text-gray-500">
                  {t('address.description')}
                </Text>
                <p className="text-gray-700">
                  123 Business Street
                  <br />
                  Istanbul, Turkey
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Social & Chat Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h2" className="mb-4">
                {t('social.title')}
              </Heading>
              <Text className="mb-6 text-gray-600">{t('social.description')}</Text>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all hover:bg-black hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Live Chat */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <MessageCircle className="h-6 w-6 text-gray-700" />
                </div>
                <Heading as="h3" className="mb-2">
                  {t('chat.title')}
                </Heading>
                <Text className="mb-6 text-gray-600">{t('chat.description')}</Text>
                <Button onClick={handleChatClick}>{t('chat.button')}</Button>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
