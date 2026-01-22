type Currency = 'USD' | 'EUR' | 'TRY' | 'RUB';

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  TRY: '₺',
  RUB: '₽',
};

export function formatPrice(price: number, currency: Currency): string {
  const symbol = CURRENCY_SYMBOLS[currency];
  const formatted = price.toLocaleString('en-US');
  return `${symbol}${formatted}`;
}
