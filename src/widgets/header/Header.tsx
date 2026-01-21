'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, SlidersHorizontal, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Link } from '@/i18n';
import type { HeaderAboutSection, HeaderContactSection } from '@/shared/api/strapi/types';
import { Button, Container } from '@/shared/ui';
import { FilterDrawer, LanguageSwitcher } from '@/widgets';
import { AboutDropdown } from './AboutDropdown';
import { ContactDropdown } from './ContactDropdown';

type DropdownType = 'about' | 'contact' | null;

interface HeaderProps {
  headerAbout: HeaderAboutSection | null;
  headerContact: HeaderContactSection | null;
}

export function Header({ headerAbout, headerContact }: HeaderProps) {
  const t = useTranslations('navigation');
  const commonT = useTranslations('common');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally run on pathname change
  }, [pathname]);

  const toggleDropdown = (dropdown: 'about' | 'contact') => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleMobileMenuOpen = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(true);
  };

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
              {/* Products - regular link */}
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-600 transition-colors hover:text-black lg:text-base"
                >
                  {t('products')}
                </Link>
              </li>

              {/* About us - dropdown toggle */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleDropdown('about')}
                  className="flex items-center gap-1.5 text-sm text-gray-600 transition-colors hover:text-black lg:text-base"
                >
                  {t('about')}
                  {activeDropdown === 'about' && <X className="h-4 w-4" />}
                </button>
              </li>

              {/* Contact us - dropdown toggle */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleDropdown('contact')}
                  className="flex items-center gap-1.5 text-sm text-gray-600 transition-colors hover:text-black lg:text-base"
                >
                  {t('contact')}
                  {activeDropdown === 'contact' && <X className="h-4 w-4" />}
                </button>
              </li>
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
            onClick={() => (mobileMenuOpen ? setMobileMenuOpen(false) : handleMobileMenuOpen())}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>
      </Container>

      {/* Desktop Dropdowns */}
      <AnimatePresence>
        {activeDropdown === 'about' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden overflow-hidden md:block"
          >
            <AboutDropdown data={headerAbout} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeDropdown === 'contact' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden overflow-hidden md:block"
          >
            <ContactDropdown data={headerContact} />
          </motion.div>
        )}
      </AnimatePresence>

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
                  <li>
                    <Link
                      href="/products"
                      className="block text-lg font-medium text-gray-600 transition-colors hover:text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('products')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block text-lg font-medium text-gray-600 transition-colors hover:text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('about')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="block text-lg font-medium text-gray-600 transition-colors hover:text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('contact')}
                    </Link>
                  </li>
                </ul>
                {/* Language switcher - bottom center */}
                <div className="mt-6 flex w-full justify-center border-t border-gray-100 pt-4">
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
