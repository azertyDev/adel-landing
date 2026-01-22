'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n';
import type { HeroSection as HeroSectionData } from '@/shared/api/strapi';
import { Button, Container } from '@/shared/ui';

interface HeroProps {
  data: HeroSectionData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative sm:min-h-165 h-62.5 overflow-hidden">
      {/* Video Background */}
      {data.backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-center object-cover"
        >
          <source src={data.backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Content Block - Text */}
      <Container className="relative h-full">
        <div className="absolute inset-x-0 top-[15%] z-10 flex flex-col items-center px-4 text-center text-main sm:inset-x-auto sm:right-[10%] sm:top-[20%] sm:items-end sm:px-0 sm:text-right">
          <motion.h1
            className="text-2xl font-black tracking-[3px] sm:text-5xl sm:tracking-[5px] lg:text-6xl xl:text-[5rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {data.title}
          </motion.h1>

          <motion.p
            className="text-base font-medium tracking-[1px] sm:mt-2 sm:text-3xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {data.subtitle}
          </motion.p>
        </div>
      </Container>

      {/* CTA Button - centered at bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 sm:bottom-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link href={data.ctaLink}>
          <Button variant="glass" size="md" className="sm:hidden">
            {data.ctaText}
          </Button>
          <Button variant="glass" size="lg" className="hidden sm:flex">
            {data.ctaText}
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
