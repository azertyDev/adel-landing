'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { WhyUsSection as WhyUsSectionData } from '@/shared/api/strapi';
import { Container, Section, SectionTitle, Text } from '@/shared/ui';

interface WhyUsProps {
  data: WhyUsSectionData;
}

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

export function WhyUs({ data }: WhyUsProps) {
  return (
    <Section>
      <Container>
        {/* Section title - responsive margin */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <SectionTitle title={data.sectionTitle} />
        </div>

        {/* Features grid - responsive columns and gap */}
        <motion.div
          className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {data.features.map((feature) => (
            <motion.div
              key={feature.id}
              className="rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-[40px] bg-white/40 px-4 py-6 sm:px-6 sm:py-8 md:px-7 md:py-10 lg:px-8 lg:py-12 text-center"
              variants={itemVariants}
            >
              {/* Icon container - responsive size */}
              <div className="mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 items-center justify-center">
                {feature.icon && (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 object-contain"
                  />
                )}
              </div>
              {/* Title - responsive font size */}
              <h3 className="mb-2 sm:mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-main-2 whitespace-pre-line font-body">
                {feature.title}
              </h3>
              {/* Description - responsive text size */}
              <Text className="text-gray-600 text-sm sm:text-base">{feature.description}</Text>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
