'use client';

import { motion } from 'framer-motion';
import { Home, Package } from 'lucide-react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Button, Container } from '@/shared/ui';

export default function NotFound() {
  const t = useTranslations('error');
  const locale = useLocale();

  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-16 sm:py-24">
      <div className="text-center">
        {/* Floating 404 Animation */}
        <motion.div
          className="mb-8"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.span
            className="block text-[120px] font-bold leading-none text-main sm:text-[180px] lg:text-[220px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.span>
        </motion.div>

        {/* Error Text */}
        <motion.h1
          className="mb-4 text-2xl font-semibold text-main sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('title')}
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-md text-base text-2nd sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t('description')}
        </motion.p>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href={`/${locale}`}>
            <Button variant="primary" size="lg">
              <Home className="h-5 w-5" />
              {t('backToHome')}
            </Button>
          </Link>

          <Link href={`/${locale}/products`}>
            <Button variant="secondary" size="lg">
              <Package className="h-5 w-5" />
              {t('browseProducts')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
}
