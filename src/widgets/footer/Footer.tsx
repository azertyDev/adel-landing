'use client';

import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n';
import { Container } from '@/shared/ui';

const navLinks = [
  { href: '/products', label: 'products' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
  { href: '/privacy', label: 'privacyPolicy', useFooterT: true },
  { href: '/faq', label: 'faq' },
] as const;

const socialLinks = [
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
] as const;

export function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('navigation');

  return (
    <footer>
      <div className="rounded-t-[40px] bg-[#F5F5F5] px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="flex flex-col items-center gap-6 py-10 sm:py-14 lg:flex-row lg:justify-between lg:gap-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/image/adel_logo.svg"
                alt="ADEL Logo"
                width={90}
                height={43}
                className="h-10 w-auto sm:h-12"
              />
            </Link>

            {/* Navigation Links & Social Icons */}
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8 lg:gap-10">
              <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-black sm:text-base"
                  >
                    {'useFooterT' in link && link.useFooterT ? t(link.label) : navT(link.label)}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-black"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
