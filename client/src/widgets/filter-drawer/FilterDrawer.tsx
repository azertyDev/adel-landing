'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useFilterData } from '@/shared/hooks';
import { cn } from '@/shared/lib';
import { Button, Checkbox, Input } from '@/shared/ui';
import { FilterSection } from './FilterSection';
import { defaultFilters, type FilterState } from './types';

// Props for inline mode (controlled)
interface InlineFilterProps {
  mode: 'inline';
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearAll: () => void;
  className?: string;
}

// Props for drawer mode (self-contained with URL sync)
interface DrawerFilterProps {
  mode: 'drawer';
  isOpen: boolean;
  onClose: () => void;
}

type FilterDrawerProps = InlineFilterProps | DrawerFilterProps;

export function FilterDrawer(props: FilterDrawerProps) {
  const t = useTranslations('products.filters');
  const { categories, brands, colors, isLoading } = useFilterData();
  const [mounted, setMounted] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    categories: true,
    brands: true,
    price: true,
    colors: true,
  });

  // URL sync hooks (only used in drawer mode)
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();

  // Parse filters from URL
  const filtersFromUrl = useMemo((): FilterState => {
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

  // Local state for drawer mode
  const [drawerFilters, setDrawerFilters] = useState<FilterState>(defaultFilters);

  // Sync drawer filters from URL when drawer opens
  const isDrawerOpen = props.mode === 'drawer' && props.isOpen;
  useEffect(() => {
    if (isDrawerOpen) {
      setDrawerFilters(filtersFromUrl);
    }
  }, [isDrawerOpen, filtersFromUrl]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get current filters based on mode
  const filters = props.mode === 'inline' ? props.filters : drawerFilters;
  const setFilters = props.mode === 'inline' ? props.onFiltersChange : setDrawerFilters;

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleCategory = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((id) => id !== categoryId)
      : [...filters.categories, categoryId];
    setFilters({ ...filters, categories: newCategories });
  };

  const toggleBrand = (brandId: string) => {
    const newBrands = filters.brands.includes(brandId)
      ? filters.brands.filter((id) => id !== brandId)
      : [...filters.brands, brandId];
    setFilters({ ...filters, brands: newBrands });
  };

  const toggleColor = (colorHex: string) => {
    const newColors = filters.colors.includes(colorHex)
      ? filters.colors.filter((c) => c !== colorHex)
      : [...filters.colors, colorHex];
    setFilters({ ...filters, colors: newColors });
  };

  const handlePriceMinChange = (value: string) => {
    setFilters({
      ...filters,
      priceMin: value ? Number(value) : null,
    });
  };

  const handlePriceMaxChange = (value: string) => {
    setFilters({
      ...filters,
      priceMax: value ? Number(value) : null,
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.priceMin !== null ||
    filters.priceMax !== null ||
    filters.colors.length > 0;

  // Drawer-specific handlers
  const handleApply = useCallback(() => {
    if (props.mode !== 'drawer') return;

    // Build URL params from filters
    const params = new URLSearchParams();
    if (drawerFilters.categories.length > 0) {
      params.set('categories', drawerFilters.categories.join(','));
    }
    if (drawerFilters.brands.length > 0) {
      params.set('brands', drawerFilters.brands.join(','));
    }
    if (drawerFilters.priceMin !== null) {
      params.set('priceMin', String(drawerFilters.priceMin));
    }
    if (drawerFilters.priceMax !== null) {
      params.set('priceMax', String(drawerFilters.priceMax));
    }
    if (drawerFilters.colors.length > 0) {
      params.set('colors', drawerFilters.colors.join(','));
    }

    const queryString = params.toString();
    router.push(`/${locale}/products${queryString ? `?${queryString}` : ''}`);
    props.onClose();
  }, [props, drawerFilters, locale, router]);

  const handleClose = useCallback(() => {
    if (props.mode !== 'drawer') return;
    // Reset to URL state when closing without applying
    setDrawerFilters(filtersFromUrl);
    props.onClose();
  }, [props, filtersFromUrl]);

  const handleClearAll = useCallback(() => {
    if (props.mode === 'drawer') {
      setDrawerFilters(defaultFilters);
    } else {
      props.onClearAll();
    }
  }, [props]);

  // Filter content (shared between modes)
  const filterContent = (
    <div className="space-y-6">
      {/* Header for inline mode */}
      {props.mode === 'inline' && (
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{t('title')}</h2>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleClearAll}
              className="text-sm text-gray-500 transition-colors hover:text-black"
            >
              {t('clearAll')}
            </button>
          )}
        </div>
      )}

      {isLoading ? (
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-lg bg-gray-100" />
          ))}
        </div>
      ) : (
        <>
          {/* Categories */}
          <FilterSection
            title={t('categories')}
            isOpen={openSections.categories}
            onToggle={() => toggleSection('categories')}
          >
            <div className="space-y-3">
              {categories.map((category) => (
                <Checkbox
                  key={category.id}
                  label={category.name}
                  checked={filters.categories.includes(category.id)}
                  onChange={() => toggleCategory(category.id)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Brands */}
          <FilterSection
            title={t('brands')}
            isOpen={openSections.brands}
            onToggle={() => toggleSection('brands')}
          >
            <div className="space-y-3">
              {brands.map((brand) => (
                <Checkbox
                  key={brand.id}
                  label={brand.name}
                  checked={filters.brands.includes(brand.id)}
                  onChange={() => toggleBrand(brand.id)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Price Range */}
          <FilterSection
            title={t('priceRange')}
            isOpen={openSections.price}
            onToggle={() => toggleSection('price')}
          >
            <div className="flex gap-3">
              <Input
                type="number"
                placeholder={t('minPrice')}
                value={filters.priceMin ?? ''}
                onChange={(e) => handlePriceMinChange(e.target.value)}
                className="h-10"
              />
              <Input
                type="number"
                placeholder={t('maxPrice')}
                value={filters.priceMax ?? ''}
                onChange={(e) => handlePriceMaxChange(e.target.value)}
                className="h-10"
              />
            </div>
          </FilterSection>

          {/* Colors */}
          <FilterSection
            title={t('colors')}
            isOpen={openSections.colors}
            onToggle={() => toggleSection('colors')}
          >
            <div className="flex flex-wrap gap-2 p-2 pt-0">
              {colors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => toggleColor(color.hex)}
                  className={cn(
                    'h-8 w-8 rounded-full border-2 transition-all',
                    filters.colors.includes(color.hex)
                      ? 'border-black ring-2 ring-black ring-offset-2'
                      : 'border-gray-200 hover:border-gray-400'
                  )}
                  style={{ backgroundColor: color.hex }}
                  aria-label={color.name}
                  title={color.name}
                />
              ))}
            </div>
          </FilterSection>
        </>
      )}
    </div>
  );

  // Inline mode - render directly
  if (props.mode === 'inline') {
    return <div className={cn('w-full', props.className)}>{filterContent}</div>;
  }

  // Drawer mode - render in portal
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {props.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={handleClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%', opacity: 0.8, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: '100%', opacity: 0, scale: 0.95 }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 350,
              mass: 0.8,
            }}
            className="fixed top-20 bottom-4 right-4 z-50 w-full max-w-sm shadow-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(20px)',
              borderRadius: '34px',
            }}
          >
            <motion.div
              className="flex h-full flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              {/* Filters */}
              <div className="flex-1 overflow-y-auto p-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {filterContent}
              </div>

              {/* Footer */}
              <motion.div
                className="space-y-3 border-t border-white/30 p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.25 }}
              >
                <Button onClick={handleApply} className="w-full" variant="glass">
                  {t('showResults')}
                </Button>
                {hasActiveFilters && (
                  <Button variant="primary" onClick={handleClearAll} className="w-full">
                    {t('clearAll')}
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
