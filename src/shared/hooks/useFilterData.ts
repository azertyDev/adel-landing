'use client';

import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { getBrands, getCategories, getColors } from '@/shared/api/strapi';

export function useCategories() {
  const locale = useLocale();

  return useQuery({
    queryKey: ['categories', locale],
    queryFn: () => getCategories(locale),
  });
}

export function useBrands() {
  const locale = useLocale();

  return useQuery({
    queryKey: ['brands', locale],
    queryFn: () => getBrands(locale),
  });
}

export function useColors() {
  const locale = useLocale();

  return useQuery({
    queryKey: ['colors', locale],
    queryFn: () => getColors(locale),
  });
}

export function useFilterData() {
  const categories = useCategories();
  const brands = useBrands();
  const colors = useColors();

  return {
    categories: categories.data ?? [],
    brands: brands.data ?? [],
    colors: colors.data ?? [],
    isLoading: categories.isLoading || brands.isLoading || colors.isLoading,
    isError: categories.isError || brands.isError || colors.isError,
  };
}
