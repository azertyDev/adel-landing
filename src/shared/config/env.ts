import { z } from 'zod';

const envSchema = z.object({
  API_URL: z.string().url().default('http://localhost:1337/api'),
  STRAPI_URL: z.string().url().default('http://localhost:1337'),
  SITE_URL: z.string().url().default('http://localhost:3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const envParsed = envSchema.safeParse({
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NODE_ENV: process.env.NODE_ENV,
});

if (!envParsed.success) {
  console.error('Invalid environment variables:', envParsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

export const env = envParsed.data;
