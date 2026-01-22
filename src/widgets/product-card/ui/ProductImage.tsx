'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/shared/lib';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FALLBACK_IMAGE = '/image/placeholder.png';

export function ProductImage({ src, alt, className }: ProductImageProps) {
  const [imgError, setImgError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // Reset error state when src changes
  if (src !== currentSrc) {
    setCurrentSrc(src);
    setImgError(false);
  }

  const imageSrc = imgError ? FALLBACK_IMAGE : src;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={imageSrc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn('relative', className)}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 45vw, 35vw"
          className="object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      </motion.div>
    </AnimatePresence>
  );
}
