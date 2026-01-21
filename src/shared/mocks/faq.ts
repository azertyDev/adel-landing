export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'orders' | 'returns' | 'products';
}

export const mockFAQ: FAQItem[] = [
  {
    id: '1',
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for all products in their original condition and packaging. Simply contact our support team to initiate a return.',
    category: 'returns',
  },
  {
    id: '2',
    question: 'How long does shipping take?',
    answer:
      'Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. Free shipping on orders over $500.',
    category: 'orders',
  },
  {
    id: '3',
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship to over 50 countries worldwide. International shipping times and costs vary by location. Check our shipping page for details.',
    category: 'orders',
  },
  {
    id: '4',
    question: 'What warranty do you provide?',
    answer:
      'All ADEL products come with a 2-year manufacturer warranty covering defects in materials and workmanship. Extended warranty options are available.',
    category: 'returns',
  },
  {
    id: '5',
    question: 'How do I track my order?',
    answer:
      "Once your order ships, you'll receive an email with tracking information. You can also track your order by logging into your account on our website.",
    category: 'orders',
  },
  {
    id: '6',
    question: 'Are your products energy efficient?',
    answer:
      'Yes, all our products are designed with energy efficiency in mind. Most of our appliances are rated A++ or higher, helping you save on electricity bills.',
    category: 'products',
  },
  {
    id: '7',
    question: 'Do you offer installation services?',
    answer:
      'We offer professional installation services for large appliances in select areas. Installation can be added during checkout or by contacting our support team.',
    category: 'general',
  },
  {
    id: '8',
    question: 'How can I contact customer support?',
    answer:
      "Our support team is available 24/7 via phone, email, or live chat. Visit our Contact page for all contact options. We're here to help!",
    category: 'general',
  },
  {
    id: '9',
    question: 'Can I cancel or modify my order?',
    answer:
      "Orders can be modified or cancelled within 2 hours of placement. After that, please contact our support team and we'll do our best to accommodate your request.",
    category: 'orders',
  },
  {
    id: '10',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers. Payment is secure and encrypted.',
    category: 'general',
  },
];
