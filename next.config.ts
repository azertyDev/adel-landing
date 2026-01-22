import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  distDir: 'build',
  output: 'standalone',
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http', // Or 'https' in production
        hostname: 'localhost', // Your Strapi instance hostname
        port: '1337', // Your Strapi instance port (default is 1337)
        pathname: '/**/*', // Path to your images
      },
    ],
  },
};

export default withNextIntl(nextConfig);
