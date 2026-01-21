import type { Core } from '@strapi/strapi';
import { brands, categories, faqs, products } from './data';

export async function seedDatabase(strapi: Core.Strapi) {
  const shouldSeed = process.env.SEED_DATABASE === 'true';

  if (!shouldSeed) {
    strapi.log.info('Skipping database seed (set SEED_DATABASE=true to enable)');
    return;
  }

  strapi.log.info('Starting database seed...');

  try {
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
          publishedAt: new Date(),
        },
      });
      brandMap.set(brand.slug, created.documentId);
      strapi.log.info(`Created brand: ${brand.name}`);
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

    const colorData = [
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Red', hex: '#FF0000' },
      { name: 'Copper', hex: '#B87333' },
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'Pink', hex: '#FFB6C1' },
    ];

    for (const color of colorData) {
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
      }
    }

    // Seed Products
    strapi.log.info('Seeding products...');

    for (const product of products) {
      const categoryId = categoryMap.get(product.categorySlug);
      const brandId = brandMap.get(product.brandSlug);

      // Convert colors array to variants format
      const variants = product.colors
        .map((hex) => {
          const colorId = colorMap.get(hex);
          if (!colorId) return null;
          return { color: colorId };
        })
        .filter(Boolean);

      const created = await strapi.documents('api::product.product').create({
        data: {
          name: product.name,
          slug: product.slug,
          description: product.description,
          price: product.price,
          inStock: product.inStock,
          variants,
          specs: product.specs,
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
                specs: locData.specs || product.specs,
                publishedAt: new Date(),
              },
            });
            strapi.log.info(`Created ${locale} localization for product: ${product.name}`);
          } catch (_e) {
            strapi.log.warn(`Failed to create ${locale} localization for product: ${product.name}`);
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

    strapi.log.info('Database seed completed successfully!');
  } catch (error) {
    strapi.log.error('Error seeding database:', error);
  }
}
