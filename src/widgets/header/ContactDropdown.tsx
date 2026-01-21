'use client';

import { MessageCircle, Phone, Share2, Truck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { HeaderContactSection } from '@/shared/api/strapi/types';
import { Container } from '@/shared/ui';

interface ContactDropdownProps {
  data: HeaderContactSection | null;
}

export function ContactDropdown({ data }: ContactDropdownProps) {
  const t = useTranslations('headerDropdown.contact');

  // Use API data if available, fallback to translations
  const chatTitle = data?.chatTitle || t('chat.title');
  const chatLink = data?.chatLink || t('chat.link');
  const chatUrl = data?.chatUrl || '#';

  const socialTitle = data?.socialTitle || t('social.title');
  const socialLinks = data?.socialLinks || [
    { id: 1, platform: 'facebook', url: 'https://facebook.com', label: t('social.facebook') },
    { id: 2, platform: 'instagram', url: 'https://instagram.com', label: t('social.instagram') },
    { id: 3, platform: 'twitter', url: 'https://twitter.com', label: t('social.twitter') },
  ];

  const phoneTitle = data?.phoneTitle || t('phone.title');
  const phoneNumber = data?.phoneNumber || t('phone.number');

  const deliveryTitle = data?.deliveryTitle || t('delivery.title');
  const deliverySupportLink = data?.deliverySupportLink || t('delivery.support');
  const deliverySupportUrl = data?.deliverySupportUrl || '#';
  const deliveryReturnsLink = data?.deliveryReturnsLink || t('delivery.returns');
  const deliveryReturnsUrl = data?.deliveryReturnsUrl || '#';

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center bg-gray-50 py-16 md:py-20 lg:py-24">
      <Container className="max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">
          {/* Chat support */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-2nd">
              <MessageCircle className="h-6 w-6" />
              <h3 className="text-xl font-medium">{chatTitle}</h3>
            </div>
            <a
              href={chatUrl}
              className="w-fit text-left text-lg text-main-2 underline underline-offset-2 hover:text-blue-800"
            >
              {chatLink}
            </a>
          </div>

          {/* Social media */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-2nd">
              <Share2 className="h-6 w-6" />
              <h3 className="text-xl font-medium">{socialTitle}</h3>
            </div>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <div key={link.id} className="flex gap-2 text-2xl text-2nd">
                  {link.platform}:
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-main-2 underline underline-offset-2 hover:text-blue-800"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-2nd">
              <Phone className="h-6 w-6" />
              <h3 className="text-xl font-medium">{phoneTitle}</h3>
            </div>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="text-lg text-main-2 underline underline-offset-2 hover:text-blue-800"
            >
              {phoneNumber}
            </a>
          </div>

          {/* Delivery and returns */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-2nd">
              <Truck className="h-6 w-6" />
              <h3 className="text-xl font-medium">{deliveryTitle}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={deliverySupportUrl}
                className="w-fit text-left text-lg text-main-2 underline underline-offset-2 hover:text-blue-800"
              >
                {deliverySupportLink}
              </a>
              <a
                href={deliveryReturnsUrl}
                className="w-fit text-left text-lg text-main-2 underline underline-offset-2 hover:text-blue-800"
              >
                {deliveryReturnsLink}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
