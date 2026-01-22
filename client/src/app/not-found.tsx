'use client';

import { motion } from 'framer-motion';
import { Home, Package } from 'lucide-react';
import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#e4e4e4] font-sans">
        <div className="mx-auto w-full max-w-360 px-4 text-center sm:px-6 lg:px-16">
          {/* Floating 404 Animation */}
          <motion.div
            className="mb-8"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.span
              className="block text-[120px] font-bold leading-none text-[#311e1d] sm:text-[180px] lg:text-[220px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              404
            </motion.span>
          </motion.div>

          {/* Error Text */}
          <motion.h1
            className="mb-4 text-2xl font-semibold text-[#311e1d] sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-md text-base text-[#585858] sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/en"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[18px] bg-black px-6 text-base font-semibold text-white shadow-md transition-all duration-200 hover:shadow-xl sm:h-14 sm:rounded-[20px] sm:px-11 sm:text-lg"
            >
              <Home className="h-5 w-5" />
              Go to Home
            </Link>

            <Link
              href="/en/products"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[18px] bg-white px-6 text-base font-semibold text-[#311e1d] shadow-md transition-all duration-200 hover:shadow-xl sm:h-14 sm:rounded-[20px] sm:px-11 sm:text-lg"
            >
              <Package className="h-5 w-5" />
              Browse Products
            </Link>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
