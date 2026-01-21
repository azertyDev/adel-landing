type Currency = 'USD' | 'TRY';

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  TRY: '₺',
};

export function formatPrice(price: number, currency: Currency): string {
  const symbol = CURRENCY_SYMBOLS[currency];
  const formatted = price.toLocaleString('en-US');
  return `${symbol}${formatted}`;
}
