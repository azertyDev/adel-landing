'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useMemo } from 'react';
import { Button } from '@/shared';
import { useFilterData } from '@/shared/hooks';
import { cn } from '@/shared/lib';

interface FilterChipProps {
  label: string;
  onRemove: () => void;
  colorHex?: string;
}

function FilterChip({ label, onRemove, colorHex }: FilterChipProps) {
  return (
    <motion.button
      type="button"
      onClick={onRemove}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1.5',
        'bg-white/60 backdrop-blur-sm border border-gray-200',
        'text-sm text-gray-700 transition-all',
        'hover:bg-white/80 hover:border-gray-300'
      )}
    >
      {colorHex && (
        <span
          className="h-3 w-3 rounded-full border border-gray-300"
          style={{ backgroundColor: colorHex }}
        />
      )}
      <span>{label}</span>
      <X className="h-3.5 w-3.5 text-gray-500" />
    </motion.button>
  );
}

export function ActiveFilters() {
  const t = useTranslations('products.filters');
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const { categories, brands, colors } = useFilterData();

  // Parse current filters from URL
  const activeFilters = useMemo(() => {
    const categoriesParam = searchParams.get('categories');
    const brandsParam = searchParams.get('brands');
    const priceMinParam = searchParams.get('priceMin');
    const priceMaxParam = searchParams.get('priceMax');
    const colorsParam = searchParams.get('colors');

    return {
      categories: categoriesParam ? categoriesParam.split(',') : [],
      brands: brandsParam ? brandsParam.split(',') : [],
      priceMin: priceMinParam ? Number(priceMinParam) : null,
      priceMax: priceMaxParam ? Number(priceMaxParam) : null,
      colors: colorsParam ? colorsParam.split(',') : [],
    };
  }, [searchParams]);

  // Check if any filters are active
  const hasActiveFilters =
    activeFilters.categories.length > 0 ||
    activeFilters.brands.length > 0 ||
    activeFilters.priceMin !== null ||
    activeFilters.priceMax !== null ||
    activeFilters.colors.length > 0;

  // Update URL with new params
  const updateUrl = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(updates)) {
        if (value === null || value === '') {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      }

      const queryString = params.toString();
      router.push(`/${locale}/products${queryString ? `?${queryString}` : ''}`);
    },
    [searchParams, router, locale]
  );

  // Remove handlers
  const removeCategory = useCallback(
    (categoryId: string) => {
      const newCategories = activeFilters.categories.filter((id) => id !== categoryId);
      updateUrl({ categories: newCategories.length > 0 ? newCategories.join(',') : null });
    },
    [activeFilters.categories, updateUrl]
  );

  const removeBrand = useCallback(
    (brandId: string) => {
      const newBrands = activeFilters.brands.filter((id) => id !== brandId);
      updateUrl({ brands: newBrands.length > 0 ? newBrands.join(',') : null });
    },
    [activeFilters.brands, updateUrl]
  );

  const removeColor = useCallback(
    (colorHex: string) => {
      const newColors = activeFilters.colors.filter((c) => c !== colorHex);
      updateUrl({ colors: newColors.length > 0 ? newColors.join(',') : null });
    },
    [activeFilters.colors, updateUrl]
  );

  const removePrice = useCallback(() => {
    updateUrl({ priceMin: null, priceMax: null });
  }, [updateUrl]);

  const clearAll = useCallback(() => {
    router.push(`/${locale}/products`);
  }, [router, locale]);

  // Get display names
  const getCategoryName = (id: string) => categories.find((c) => c.id === id)?.name ?? id;
  const getBrandName = (id: string) => brands.find((b) => b.id === id)?.name ?? id;
  const getColorData = (hex: string) => colors.find((c) => c.hex === hex);

  // Format price label
  const getPriceLabel = () => {
    const { priceMin, priceMax } = activeFilters;
    if (priceMin !== null && priceMax !== null) {
      return `${priceMin.toLocaleString()} - ${priceMax.toLocaleString()}`;
    }
    if (priceMin !== null) {
      return `${t('from')} ${priceMin.toLocaleString()}`;
    }
    if (priceMax !== null) {
      return `${t('to')} ${priceMax.toLocaleString()}`;
    }
    return null;
  };

  if (!hasActiveFilters) {
    return null;
  }

  const priceLabel = getPriceLabel();
  const totalFilters =
    activeFilters.categories.length +
    activeFilters.brands.length +
    activeFilters.colors.length +
    (priceLabel ? 1 : 0);

  return (
    <div className="flex gap-4 flex-col justify-center items-start">
      <div className="flex flex-wrap items-center gap-2">
        {/* Category chips */}
        {activeFilters.categories.map((categoryId) => (
          <FilterChip
            key={`category-${categoryId}`}
            label={getCategoryName(categoryId)}
            onRemove={() => removeCategory(categoryId)}
          />
        ))}

        {/* Brand chips */}
        {activeFilters.brands.map((brandId) => (
          <FilterChip
            key={`brand-${brandId}`}
            label={getBrandName(brandId)}
            onRemove={() => removeBrand(brandId)}
          />
        ))}

        {/* Color chips */}
        {activeFilters.colors.map((colorHex) => {
          const colorData = getColorData(colorHex);
          return (
            <FilterChip
              key={`color-${colorHex}`}
              label={colorData?.name ?? colorHex}
              colorHex={colorHex}
              onRemove={() => removeColor(colorHex)}
            />
          );
        })}

        {/* Price chip */}
        {priceLabel && <FilterChip key="price" label={priceLabel} onRemove={removePrice} />}
      </div>
      {/* Clear all */}
      {totalFilters > 1 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAll}
          className="text-sm text-gray-500 hover:text-black transition-colors w-auto"
        >
          {t('clearAll')}
        </Button>
      )}{' '}
    </div>
  );
}
