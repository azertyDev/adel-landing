import type { Core } from '@strapi/strapi';
import {
  aboutUs,
  brands,
  categories,
  colors,
  faqs,
  headerAbout,
  headerContact,
  hero,
  products,
  siteSettings,
  whyUs,
} from './data';

export async function seedDatabase(strapi: Core.Strapi) {
  const shouldSeed = process.env.SEED_DATABASE === 'true';

  if (!shouldSeed) {
    strapi.log.info('Skipping database seed (set SEED_DATABASE=true to enable)');
    return;
  }

  strapi.log.info('Starting database seed...');

  try {
    // Seed locales first
    strapi.log.info('Setting up locales...');
    const localeService = strapi.plugin('i18n').service('locales');
    const existingLocales = await localeService.find();
    const existingCodes = existingLocales.map((l: { code: string }) => l.code);

    const requiredLocales = [
      { code: 'en', name: 'English (en)', isDefault: true },
      { code: 'ru', name: 'Russian (ru)', isDefault: false },
      { code: 'tr', name: 'Turkish (tr)', isDefault: false },
    ];

    for (const locale of requiredLocales) {
      if (!existingCodes.includes(locale.code)) {
        await localeService.create({
          code: locale.code,
          name: locale.name,
          isDefault: locale.isDefault,
        });
        strapi.log.info(`Created locale: ${locale.name}`);
      } else {
        strapi.log.info(`Locale already exists: ${locale.name}`);
      }
    }

    // Check if data already exists
    const existingCategories = await strapi.documents('api::category.category').findMany({});

    if (existingCategories.length > 0) {
      strapi.log.info('Database already seeded, skipping...');
      return;
    }

    // Seed Brands
    strapi.log.info('Seeding brands...');
    const brandMap = new Map<string, string>();

    for (const brand of brands) {
      const created = await strapi.documents('api::brand.brand').create({
        data: {
          name: brand.name,
          slug: brand.slug,
          locale: 'en',
          publishedAt: new Date(),
        },
      });
      brandMap.set(brand.slug, created.documentId);
      strapi.log.info(`Created brand: ${brand.name}`);

      // Create localizations for brands
      if (brand.localizations) {
        for (const [locale, locData] of Object.entries(brand.localizations)) {
          try {
            await strapi.documents('api::brand.brand').update({
              documentId: created.documentId,
              locale,
              data: {
                name: locData.name,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created ${locale} localization for brand: ${brand.name}`);
          } catch (_e) {
            strapi.log.warn(`Failed to create ${locale} localization for brand: ${brand.name}`);
          }
        }
      }
    }

    // Seed Categories
    strapi.log.info('Seeding categories...');
    const categoryMap = new Map<string, string>();

    for (const category of categories) {
      // Create English version first
      const created = await strapi.documents('api::category.category').create({
        data: {
          name: category.name,
          slug: category.slug,
          description: category.description,
          locale: 'en',
          publishedAt: new Date(),
        },
      });
      categoryMap.set(category.slug, created.documentId);
      strapi.log.info(`Created category: ${category.name}`);

      // Create localizations
      if (category.localizations) {
        for (const [locale, locData] of Object.entries(category.localizations)) {
          try {
            await strapi.documents('api::category.category').update({
              documentId: created.documentId,
              locale,
              data: {
                name: locData.name,
                description: locData.description,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created ${locale} localization for category: ${category.name}`);
          } catch (_e) {
            strapi.log.warn(
              `Failed to create ${locale} localization for category: ${category.name}`
            );
          }
        }
      }
    }

    // Seed Colors
    strapi.log.info('Seeding colors...');
    const colorMap = new Map<string, string>();

    for (const color of colors) {
      const existing = await strapi.documents('api::color.color').findMany({
        filters: { hex: color.hex },
      });

      if (existing.length > 0) {
        colorMap.set(color.hex, existing[0].documentId);
        strapi.log.info(`Color already exists: ${color.name}`);
      } else {
        const created = await strapi.documents('api::color.color').create({
          data: {
            name: color.name,
            hex: color.hex,
            locale: 'en',
            publishedAt: new Date(),
          },
        });
        colorMap.set(color.hex, created.documentId);
        strapi.log.info(`Created color: ${color.name}`);

        // Create localizations for colors
        if (color.localizations) {
          for (const [locale, locData] of Object.entries(color.localizations)) {
            try {
              await strapi.documents('api::color.color').update({
                documentId: created.documentId,
                locale,
                data: {
                  name: locData.name,
                  publishedAt: new Date(),
                },
              });
              strapi.log.info(`Created ${locale} localization for color: ${color.name}`);
            } catch (_e) {
              strapi.log.warn(`Failed to create ${locale} localization for color: ${color.name}`);
            }
          }
        }
      }
    }

    // Seed Products
    strapi.log.info('Seeding products...');

    for (const product of products) {
      const categoryId = categoryMap.get(product.categorySlug);
      const brandId = brandMap.get(product.brandSlug);

      // Convert variants array to Strapi format (with color relation)
      const variants = product.variants
        .map((variant) => {
          const colorId = colorMap.get(variant.color);
          if (!colorId) return null;
          return { color: colorId };
          // Note: image field requires media upload, handled separately
        })
        .filter(Boolean);

      const created = await strapi.documents('api::product.product').create({
        data: {
          name: product.name,
          slug: product.slug,
          description: product.description,
          model: product.model,
          size: (product as { size?: string }).size ?? '',
          price: product.price,
          currency: product.currency as 'USD' | 'EUR' | 'TRY' | 'RUB',
          originalPrice: (product as { originalPrice?: number }).originalPrice ?? null,
          inStock: product.inStock,
          variants,
          specs: product.specs,
          features: product.features,
          locale: 'en',
          publishedAt: new Date(),
          category: categoryId,
          brand: brandId,
        },
      });
      strapi.log.info(`Created product: ${product.name}`);

      // Create localizations
      if (product.localizations) {
        for (const [locale, locData] of Object.entries(product.localizations)) {
          try {
            await strapi.documents('api::product.product').update({
              documentId: created.documentId,
              locale,
              data: {
                name: locData.name,
                description: locData.description,
                specs: locData.specs ?? product.specs,
                features: locData.features ?? product.features,
                variants, // Required field, not localized
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created ${locale} localization for product: ${product.name}`);
          } catch (e) {
            strapi.log.error(
              `Failed to create ${locale} localization for product: ${product.name}`
            );
            strapi.log.error(e instanceof Error ? e.message : String(e));
          }
        }
      }
    }

    // Seed FAQs
    strapi.log.info('Seeding FAQs...');

    for (const faq of faqs) {
      const created = await strapi.documents('api::faq.faq').create({
        data: {
          question: faq.question,
          answer: faq.answer,
          order: faq.order,
          locale: 'en',
          publishedAt: new Date(),
        },
      });
      strapi.log.info(`Created FAQ: ${faq.question.substring(0, 30)}...`);

      // Create localizations
      if (faq.localizations) {
        for (const [locale, locData] of Object.entries(faq.localizations)) {
          try {
            await strapi.documents('api::faq.faq').update({
              documentId: created.documentId,
              locale,
              data: {
                question: locData.question,
                answer: locData.answer,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created ${locale} localization for FAQ`);
          } catch (_e) {
            strapi.log.warn(`Failed to create ${locale} localization for FAQ`);
          }
        }
      }
    }

    // Seed Hero Section (Single Type)
    strapi.log.info('Seeding Hero Section...');
    try {
      const existingHero = await strapi.documents('api::hero.hero').findFirst({
        locale: 'en',
      });

      if (!existingHero) {
        const createdHero = await strapi.documents('api::hero.hero').create({
          data: {
            title: hero.title,
            subtitle: hero.subtitle,
            ctaText: hero.ctaText,
            ctaLink: hero.ctaLink,
            locale: 'en',
            publishedAt: new Date(),
          },
        });
        strapi.log.info('Created Hero Section (EN)');

        // Create localizations
        for (const [locale, locData] of Object.entries(hero.localizations)) {
          try {
            await strapi.documents('api::hero.hero').update({
              documentId: createdHero.documentId,
              locale,
              data: {
                title: locData.title,
                subtitle: locData.subtitle,
                ctaText: locData.ctaText,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created Hero Section (${locale.toUpperCase()})`);
          } catch (_e) {
            strapi.log.warn(`Failed to create ${locale} localization for Hero Section`);
          }
        }
      } else {
        strapi.log.info('Hero Section already exists, skipping...');
      }
    } catch (_e) {
      strapi.log.warn('Hero content type not found, skipping...');
    }

    // Seed About Us Section (Single Type)
    strapi.log.info('Seeding About Us Section...');
    try {
      const existingAboutUs = await strapi.documents('api::about-us.about-us').findFirst({
        locale: 'en',
      });

      if (!existingAboutUs) {
        const createdAboutUs = await strapi.documents('api::about-us.about-us').create({
          data: {
            sectionTitle: aboutUs.sectionTitle,
            heading: aboutUs.heading,
            buttonText: aboutUs.buttonText,
            buttonLink: aboutUs.buttonLink,
            locale: 'en',
            publishedAt: new Date(),
          },
        });
        strapi.log.info('Created About Us Section (EN)');

        // Create localizations
        for (const [locale, locData] of Object.entries(aboutUs.localizations)) {
          try {
            await strapi.documents('api::about-us.about-us').update({
              documentId: createdAboutUs.documentId,
              locale,
              data: {
                sectionTitle: locData.sectionTitle,
                heading: locData.heading,
                buttonText: locData.buttonText,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created About Us Section (${locale.toUpperCase()})`);
          } catch (_e) {
            strapi.log.warn(`Failed to create ${locale} localization for About Us Section`);
          }
        }
      } else {
        strapi.log.info('About Us Section already exists, skipping...');
      }
    } catch (_e) {
      strapi.log.warn('About Us content type not found, skipping...');
    }

    // Seed Why Us Section (Single Type)
    strapi.log.info('Seeding Why Us Section...');
    try {
      const existingWhyUs = await strapi.documents('api::why-us.why-us').findFirst({
        locale: 'en',
      });

      if (!existingWhyUs) {
        // Prepare features for English
        const featuresEn = whyUs.features.map((feature) => ({
          title: feature.title,
          description: feature.description,
        }));

        const createdWhyUs = await strapi.documents('api::why-us.why-us').create({
          data: {
            sectionTitle: whyUs.sectionTitle,
            features: featuresEn,
            locale: 'en',
            publishedAt: new Date(),
          },
        });
        strapi.log.info('Created Why Us Section (EN)');

        // Create localizations
        for (const [locale, locData] of Object.entries(whyUs.localizations)) {
          try {
            // Prepare features for this locale
            const featuresLocale = whyUs.features.map((feature) => {
              const featureLoc = feature.localizations?.[locale];
              return {
                title: featureLoc?.title || feature.title,
                description: featureLoc?.description || feature.description,
              };
            });

            await strapi.documents('api::why-us.why-us').update({
              documentId: createdWhyUs.documentId,
              locale,
              data: {
                sectionTitle: locData.sectionTitle,
                features: featuresLocale,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created Why Us Section (${locale.toUpperCase()})`);
          } catch (_e) {
            strapi.log.warn(`Failed to create ${locale} localization for Why Us Section`);
          }
        }
      } else {
        strapi.log.info('Why Us Section already exists, skipping...');
      }
    } catch (_e) {
      strapi.log.warn('Why Us content type not found, skipping...');
    }

    // Seed Header About (Single Type)
    strapi.log.info('Seeding Header About...');
    try {
      const existingHeaderAbout = await strapi
        .documents('api::header-about.header-about')
        .findFirst({
          locale: 'en',
        });

      if (!existingHeaderAbout) {
        const createdHeaderAbout = await strapi.documents('api::header-about.header-about').create({
          data: {
            paragraph1: headerAbout.paragraph1,
            paragraph2: headerAbout.paragraph2,
            locale: 'en',
            publishedAt: new Date(),
          },
        });
        strapi.log.info('Created Header About (EN)');

        // Create localizations
        for (const [locale, locData] of Object.entries(headerAbout.localizations)) {
          try {
            await strapi.documents('api::header-about.header-about').update({
              documentId: createdHeaderAbout.documentId,
              locale,
              data: {
                paragraph1: locData.paragraph1,
                paragraph2: locData.paragraph2,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created Header About (${locale.toUpperCase()})`);
          } catch (_e) {
            strapi.log.warn(`Failed to create ${locale} localization for Header About`);
          }
        }
      } else {
        strapi.log.info('Header About already exists, skipping...');
      }
    } catch (_e) {
      strapi.log.warn('Header About content type not found, skipping...');
    }

    // Seed Header Contact (Single Type)
    strapi.log.info('Seeding Header Contact...');
    try {
      const existingHeaderContact = await strapi
        .documents('api::header-contact.header-contact')
        .findFirst({
          locale: 'en',
        });

      if (!existingHeaderContact) {
        const createdHeaderContact = await strapi
          .documents('api::header-contact.header-contact')
          .create({
            data: {
              chatTitle: headerContact.chatTitle,
              chatLink: headerContact.chatLink,
              chatUrl: headerContact.chatUrl,
              socialTitle: headerContact.socialTitle,
              socialLinks: headerContact.socialLinks,
              phoneTitle: headerContact.phoneTitle,
              phoneNumber: headerContact.phoneNumber,
              deliveryTitle: headerContact.deliveryTitle,
              deliverySupportLink: headerContact.deliverySupportLink,
              deliverySupportUrl: headerContact.deliverySupportUrl,
              deliveryReturnsLink: headerContact.deliveryReturnsLink,
              deliveryReturnsUrl: headerContact.deliveryReturnsUrl,
              locale: 'en',
              publishedAt: new Date(),
            },
          });
        strapi.log.info('Created Header Contact (EN)');

        // Create localizations
        for (const [locale, locData] of Object.entries(headerContact.localizations)) {
          try {
            await strapi.documents('api::header-contact.header-contact').update({
              documentId: createdHeaderContact.documentId,
              locale,
              data: {
                chatTitle: locData.chatTitle,
                chatLink: locData.chatLink,
                socialTitle: locData.socialTitle,
                phoneTitle: locData.phoneTitle,
                deliveryTitle: locData.deliveryTitle,
                deliverySupportLink: locData.deliverySupportLink,
                deliveryReturnsLink: locData.deliveryReturnsLink,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created Header Contact (${locale.toUpperCase()})`);
          } catch (_e) {
            strapi.log.warn(`Failed to create ${locale} localization for Header Contact`);
          }
        }
      } else {
        strapi.log.info('Header Contact already exists, skipping...');
      }
    } catch (_e) {
      strapi.log.warn('Header Contact content type not found, skipping...');
    }

    // Seed Site Settings (Single Type)
    strapi.log.info('Seeding Site Settings...');
    try {
      const existingSiteSettings = await strapi
        .documents('api::site-setting.site-setting')
        .findFirst({
          locale: 'en',
        });

      if (!existingSiteSettings) {
        const createdSiteSettings = await strapi
          .documents('api::site-setting.site-setting')
          .create({
            data: {
              siteName: siteSettings.siteName,
              siteTitle: siteSettings.siteTitle,
              siteDescription: siteSettings.siteDescription,
              keywords: siteSettings.keywords,
              twitterHandle: siteSettings.twitterHandle,
              locale: 'en',
              publishedAt: new Date(),
            },
          });
        strapi.log.info('Created Site Settings (EN)');

        // Create localizations
        for (const [locale, locData] of Object.entries(siteSettings.localizations)) {
          try {
            await strapi.documents('api::site-setting.site-setting').update({
              documentId: createdSiteSettings.documentId,
              locale,
              data: {
                siteTitle: locData.siteTitle,
                siteDescription: locData.siteDescription,
                keywords: locData.keywords,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created Site Settings (${locale.toUpperCase()})`);
          } catch (_e) {
            strapi.log.warn(`Failed to create ${locale} localization for Site Settings`);
          }
        }
      } else {
        strapi.log.info('Site Settings already exists, skipping...');
      }
    } catch (_e) {
      strapi.log.warn('Site Settings content type not found, skipping...');
    }

    strapi.log.info('Database seed completed successfully!');
  } catch (error) {
    strapi.log.error('Error seeding database:', error);
  }
}
