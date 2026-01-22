import { z } from 'zod';

const envSchema = z.object({
  // Public URLs (client-side, baked into JS bundle)
  API_URL: z.string().url().default('http://localhost:1337/api'),
  STRAPI_URL: z.string().url().default('http://localhost:1337'),
  SITE_URL: z.string().url().default('http://localhost:3000'),
  // Internal URLs (server-side only, for Docker networking)
  API_URL_INTERNAL: z.string().url().optional(),
  STRAPI_URL_INTERNAL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const envParsed = envSchema.safeParse({
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  API_URL_INTERNAL: process.env.API_URL_INTERNAL,
  STRAPI_URL_INTERNAL: process.env.STRAPI_URL_INTERNAL,
  NODE_ENV: process.env.NODE_ENV,
});

if (!envParsed.success) {
  console.error('Invalid environment variables:', envParsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

// For server-side, prefer internal URLs (Docker network), fall back to public URLs
const isServer = typeof window === 'undefined';
const parsed = envParsed.data;

export const env = {
  API_URL: isServer && parsed.API_URL_INTERNAL ? parsed.API_URL_INTERNAL : parsed.API_URL,
  STRAPI_URL:
    isServer && parsed.STRAPI_URL_INTERNAL ? parsed.STRAPI_URL_INTERNAL : parsed.STRAPI_URL,
  SITE_URL: parsed.SITE_URL,
  NODE_ENV: parsed.NODE_ENV,
};
