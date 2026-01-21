'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, SlidersHorizontal, X } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n';
import { Button, Container } from '@/shared/ui';
import { FilterDrawer, LanguageSwitcher } from '@/widgets';

const navLinks = [
  { href: '/products', label: 'products' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
] as const;

export function Header() {
  const t = useTranslations('navigation');
  const commonT = useTranslations('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <Image src="/image/adel_logo.svg" alt="ADEL Logo" width="110" height="52" />
          </Link>

          {/* Desktop: Navigation + Actions together on right */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {/* Navigation Links */}
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-black lg:text-base"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Filters Button */}
            <Button
              variant="glass"
              size="md"
              className="gap-2"
              onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
            >
              {filterDrawerOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <SlidersHorizontal className="h-4 w-4" />
              )}
              {commonT('filters')}
            </Button>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-100 bg-white md:hidden"
          >
            <Container>
              <div className="flex flex-col items-center py-6">
                {/* Navigation links - top center */}
                <ul className="flex flex-col items-center gap-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block text-lg font-medium text-gray-600 transition-colors hover:text-black"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Language switcher - bottom center */}
                <div className="mt-6 pt-4 border-t border-gray-100 w-full flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Drawer - self-contained with URL sync */}
      <FilterDrawer
        mode="drawer"
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
      />
    </header>
  );
}
