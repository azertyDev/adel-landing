'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { FAQItem } from '@/shared/api/strapi';
import { cn } from '@/shared/lib';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => (
        <FAQAccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}

interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordionItem({ item, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
      >
        <span className="pr-4 font-medium text-gray-900">{item.question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <div className="border-t border-gray-100 px-6 pb-6 pt-4">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
