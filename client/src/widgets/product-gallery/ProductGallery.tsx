'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  selectedIndex?: number;
  onIndexChange?: (index: number) => void;
}

export function ProductGallery({
  images,
  productName,
  selectedIndex,
  onIndexChange,
}: ProductGalleryProps) {
  const [internalIndex, setInternalIndex] = useState(0);

  // Use controlled index if provided, otherwise use internal state
  const currentIndex = selectedIndex ?? internalIndex;

  const setCurrentIndex = (index: number) => {
    setInternalIndex(index);
    onIndexChange?.(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images.length === 0) {
    return (
      <div className="aspect-square rounded-2xl bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">No image available</span>
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Main Image */}
      <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-video flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-4/5 w-9/12 sm:h-5/6 sm:w-8/12 lg:w-7/12"
          >
            <Image
              src={images[currentIndex] || '/image/general-img-square.png'}
              alt={`${productName} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 128px), (max-width: 1440px) calc(50vw - 104px), 600px"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-400 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6 sm:size-7 lg:size-8" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 hover:text-gray-400 cursor-pointer transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="size-6 sm:size-7 lg:size-8" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
