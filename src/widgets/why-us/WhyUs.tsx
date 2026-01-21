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
        <div className="mb-12">
          <SectionTitle title={data.sectionTitle} />
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {data.features.map((feature) => (
            <motion.div
              key={feature.id}
              className="rounded-[40px] bg-white/40 px-8 py-12 text-center"
              variants={itemVariants}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                {feature.icon && (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                )}
              </div>
              <h3 className="mb-4 text-3xl font-semibold text-main-2 whitespace-pre-line font-body">
                {feature.title}
              </h3>
              <Text className="text-gray-600">{feature.description}</Text>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
