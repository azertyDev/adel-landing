'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/shared/lib';

interface SectionProps {
  animated?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Section({ className, animated = true, children, id }: SectionProps) {
  const baseClassName = cn('py-12 sm:py-16 lg:py-12', className);

  if (animated) {
    return (
      <motion.section
        id={id}
        className={baseClassName}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section id={id} className={baseClassName}>
      {children}
    </section>
  );
}
