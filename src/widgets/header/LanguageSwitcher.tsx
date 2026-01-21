'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n';
import { cn } from '@/shared/lib';

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
  { code: 'ru', label: 'RU' },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];
  const otherLocales = locales.filter((l) => l.code !== locale);

  const handleLocaleChange = (newLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          'flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-black',
          isPending && 'opacity-50'
        )}
      >
        {currentLocale.label}
        <ChevronUp
          className={cn('h-4 w-4 transition-transform duration-200', !isOpen && 'rotate-180')}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 min-w-[60px] overflow-hidden rounded-2xl bg-white py-2 shadow-lg"
          >
            {otherLocales.map((loc) => (
              <button
                key={loc.code}
                type="button"
                onClick={() => handleLocaleChange(loc.code)}
                className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-black"
              >
                {loc.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
