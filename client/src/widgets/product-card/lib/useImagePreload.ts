'use client';

import { useCallback } from 'react';

export function useImagePreload() {
  const preload = useCallback((src: string) => {
    const img = new Image();
    img.src = src;
  }, []);

  return { preload };
}
