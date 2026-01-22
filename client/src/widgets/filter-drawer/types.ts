export interface FilterState {
  categories: string[];
  brands: string[];
  priceMin: number | null;
  priceMax: number | null;
  colors: string[];
}

export const defaultFilters: FilterState = {
  categories: [],
  brands: [],
  priceMin: null,
  priceMax: null,
  colors: [],
};
