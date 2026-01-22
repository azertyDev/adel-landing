'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n';
import type { AboutUsSection as AboutUsSectionData } from '@/shared/api/strapi';
import { Button, Container, GlassLine, Section, SectionTitle } from '@/shared/ui';

interface AboutUsProps {
  data: AboutUsSectionData;
}

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function AboutUs({ data }: AboutUsProps) {
  return (
    <Section>
      <Container>
        <div className="mb-9">
          <SectionTitle title={data.sectionTitle} />
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[40px]"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Background Image */}
          <div className="relative aspect-[16/13] sm:aspect-[16/14] lg:aspect-[16/12.5]">
            {data.backgroundImage && (
              <Image
                src={data.backgroundImage}
                alt={data.heading}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
            )}

            {/* Glass Lines */}
            <div className="absolute left-[20%] top-0 bottom-0 flex gap-0.5 sm:gap-1 lg:gap-0.5">
              {/* biome-ignore lint/suspicious/noArrayIndexKey: static decorative elements */}
              {[...Array(8)].map((_, i) => (
                <GlassLine
                  key={`glass-line-${i}`}
                  orientation="vertical"
                  className="w-3 sm:w-5 md:w-10"
                />
              ))}
            </div>

            {/* Heading Overlay */}
            <div className="absolute inset-0 flex items-start justify-center pt-8 sm:pt-12 lg:pt-16">
              <h2 className="text-center text-2xl text-main sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 sm:px-12 lg:px-60">
                {data.heading}
              </h2>
            </div>

            {/* Learn More Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8 lg:bottom-10">
              <Link href={data.buttonLink}>
                <Button variant="secondary" size="lg">
                  {data.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
