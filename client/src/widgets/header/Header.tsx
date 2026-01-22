'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Suspense, useEffect, useState } from 'react';
import { Link } from '@/i18n';
import type { HeaderAboutSection, HeaderContactSection } from '@/shared/api/strapi/types';
import { OptionsIcon } from '@/shared/icons';
import { Button, Container } from '@/shared/ui';
import { FilterDrawer, LanguageSwitcher } from '@/widgets';
import { AboutDropdown } from './AboutDropdown';
import { ContactDropdown } from './ContactDropdown';

type DropdownType = 'about' | 'contact' | null;
type MobileAccordionType = 'about' | 'contact' | null;

interface HeaderProps {
  headerAbout: HeaderAboutSection | null;
  headerContact: HeaderContactSection | null;
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: component with multiple interactive states
export function Header({ headerAbout, headerContact }: HeaderProps) {
  const t = useTranslations('navigation');
  const commonT = useTranslations('common');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [mobileAccordion, setMobileAccordion] = useState<MobileAccordionType>(null);

  // Close dropdown on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally run on pathname change
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (dropdown: 'about' | 'contact') => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleMobileMenuOpen = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(true);
  };

  const toggleMobileAccordion = (accordion: MobileAccordionType) => {
    setMobileAccordion((prev) => (prev === accordion ? null : accordion));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/image/adel_logo.svg"
              alt="ADEL Logo"
              width={110}
              height={52}
              className="h-8 w-auto sm:h-10 md:h-11 lg:h-13"
            />
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
              {filterDrawerOpen ? <X className="h-4 w-4" /> : <OptionsIcon className="h-4 w-4" />}
              {commonT('filters')}
            </Button>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile: Actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Filters Button - icon only */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
              aria-label={filterDrawerOpen ? 'Close filters' : 'Open filters'}
              type="button"
            >
              {filterDrawerOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <OptionsIcon className="h-5 w-5 text-main-2" />
              )}
            </Button>

            {/* Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-main-2"
              onClick={() => (mobileMenuOpen ? setMobileMenuOpen(false) : handleMobileMenuOpen())}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              type="button"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5 text-main-2" />
              )}
            </Button>

            {/* Language Switcher */}
            <LanguageSwitcher className="text-main-2" />
          </div>
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
              <div className="flex flex-col py-6">
                {/* Navigation links */}
                <ul className="flex flex-col gap-2">
                  {/* Products - regular link */}
                  <li>
                    <Link
                      href="/products"
                      className="block py-3 text-lg font-medium text-gray-600 transition-colors hover:text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('products')}
                    </Link>
                  </li>

                  {/* About us - accordion */}
                  <li className="border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion('about')}
                      className="flex w-full items-center justify-between py-3 text-lg font-medium text-gray-600 transition-colors hover:text-black"
                    >
                      {t('about')}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          mobileAccordion === 'about' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileAccordion === 'about' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 text-sm leading-relaxed text-gray-600">
                            <p>{headerAbout?.paragraph1}</p>
                            {headerAbout?.paragraph2 && (
                              <p className="mt-3">{headerAbout.paragraph2}</p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Contact us - accordion */}
                  <li className="border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion('contact')}
                      className="flex w-full items-center justify-between py-3 text-lg font-medium text-gray-600 transition-colors hover:text-black"
                    >
                      {t('contact')}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          mobileAccordion === 'contact' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileAccordion === 'contact' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-4 pb-4 text-sm">
                            {/* Chat */}
                            {headerContact?.chatTitle && (
                              <div>
                                <p className="font-medium text-gray-700">
                                  {headerContact.chatTitle}
                                </p>
                                <a
                                  href={headerContact.chatUrl || '#'}
                                  className="text-main-2 underline underline-offset-2"
                                >
                                  {headerContact.chatLink}
                                </a>
                              </div>
                            )}
                            {/* Phone */}
                            {headerContact?.phoneNumber && (
                              <div>
                                <p className="font-medium text-gray-700">
                                  {headerContact.phoneTitle}
                                </p>
                                <a
                                  href={`tel:${headerContact.phoneNumber.replace(/\s/g, '')}`}
                                  className="text-main-2 underline underline-offset-2"
                                >
                                  {headerContact.phoneNumber}
                                </a>
                              </div>
                            )}
                            {/* Social */}
                            {headerContact?.socialLinks && headerContact.socialLinks.length > 0 && (
                              <div>
                                <p className="font-medium text-gray-700">
                                  {headerContact.socialTitle}
                                </p>
                                <div className="flex flex-col gap-1">
                                  {headerContact.socialLinks.map((link) => (
                                    <a
                                      key={link.id}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-main-2 underline underline-offset-2"
                                    >
                                      {link.platform}: {link.label}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </ul>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Drawer - self-contained with URL sync */}
      <Suspense fallback={null}>
        <FilterDrawer
          mode="drawer"
          isOpen={filterDrawerOpen}
          onClose={() => setFilterDrawerOpen(false)}
        />
      </Suspense>
    </header>
  );
}
