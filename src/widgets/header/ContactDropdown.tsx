'use client';

import { MessageCircle, Phone, Share2, Truck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/shared/ui';

export function ContactDropdown() {
  const t = useTranslations('headerDropdown.contact');

  return (
    <div className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">
          {/* Chat support */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-gray-500">
              <MessageCircle className="h-6 w-6" />
              <h3 className="text-xl font-medium">{t('chat.title')}</h3>
            </div>
            <button
              type="button"
              className="w-fit text-left text-lg text-blue-600 underline underline-offset-2 hover:text-blue-800"
            >
              {t('chat.link')}
            </button>
          </div>

          {/* Social media */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-gray-500">
              <Share2 className="h-6 w-6" />
              <h3 className="text-xl font-medium">{t('social.title')}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 underline underline-offset-2 hover:text-blue-800"
              >
                facebook: {t('social.facebook')}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 underline underline-offset-2 hover:text-blue-800"
              >
                instagram: {t('social.instagram')}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 underline underline-offset-2 hover:text-blue-800"
              >
                twitter: {t('social.twitter')}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-gray-500">
              <Phone className="h-6 w-6" />
              <h3 className="text-xl font-medium">{t('phone.title')}</h3>
            </div>
            <a
              href="tel:+12325485"
              className="text-lg text-blue-600 underline underline-offset-2 hover:text-blue-800"
            >
              {t('phone.number')}
            </a>
          </div>

          {/* Delivery and returns */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-gray-500">
              <Truck className="h-6 w-6" />
              <h3 className="text-xl font-medium">{t('delivery.title')}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="w-fit text-left text-lg text-blue-600 underline underline-offset-2 hover:text-blue-800"
              >
                {t('delivery.support')}
              </button>
              <button
                type="button"
                className="w-fit text-left text-lg text-blue-600 underline underline-offset-2 hover:text-blue-800"
              >
                {t('delivery.returns')}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
