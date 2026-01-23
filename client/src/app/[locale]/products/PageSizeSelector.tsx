import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/shared/lib';

interface PageSizeSelectorProps {
  current: number;
  buildUrl: (params: Record<string, string | number | undefined>) => string;
}

const PAGE_SIZES = [12, 24, 48];

export function PageSizeSelector({ current, buildUrl }: PageSizeSelectorProps) {
  const t = useTranslations('products');

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">{t('pagination.show')}:</span>
      {PAGE_SIZES.map((size) => (
        <Link
          key={size}
          href={buildUrl({ pageSize: size, page: 1 })}
          className={cn(
            'px-3 py-1 text-sm rounded transition-colors',
            current === size ? 'bg-main text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          )}
        >
          {size}
        </Link>
      ))}
    </div>
  );
}
