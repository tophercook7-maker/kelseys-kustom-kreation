import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'shirt-001',
    name: 'Custom T-Shirt',
    category: 'Shirts',
    price: 29.99,
    images: ['/images/products/shirt-1.svg', '/images/products/shirt-2.svg'],
    description: 'Premium quality custom t-shirts available in multiple colors and sizes.',
    options: [
      {
        name: 'Size',
        type: 'select',
        required: true,
        values: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      },
      {
        name: 'Color',
        type: 'select',
        required: true,
        values: ['Black', 'White', 'Heather Gray'],
      },
      {
        name: 'Custom Text',
        type: 'text',
        required: false,
        placeholder: 'Enter custom text for your shirt',
      },
      {
        name: 'Design Upload',
        type: 'file',
        required: false,
      },
      {
        name: 'Notes',
        type: 'text',
        required: false,
        placeholder: 'Any special instructions or requests',
      },
    ],
  },
  {
    id: 'tumbler-001',
    name: 'Custom Tumbler',
    category: 'Tumblers',
    price: 39.99,
    images: ['/images/products/tumbler-1.svg', '/images/products/tumbler-2.svg'],
    description: '20oz stainless steel tumbler with custom design. Available in matte and glossy finishes.',
    options: [
      {
        name: 'Finish',
        type: 'select',
        required: true,
        values: ['Matte', 'Glossy'],
      },
      {
        name: 'Custom Text',
        type: 'text',
        required: false,
        placeholder: 'Enter custom text for your tumbler',
      },
      {
        name: 'Design Upload',
        type: 'file',
        required: false,
      },
      {
        name: 'Notes',
        type: 'text',
        required: false,
        placeholder: 'Any special instructions or requests',
      },
    ],
  },
  {
    id: 'plate-001',
    name: 'Custom License Plate',
    category: 'License Plates',
    price: 24.99,
    images: ['/images/products/plate-1.svg', '/images/products/plate-2.svg'],
    description: 'Aluminum novelty license plate with your custom text and design.',
    options: [
      {
        name: 'Text',
        type: 'text',
        required: true,
        placeholder: 'Enter your custom text (max 8 characters recommended)',
      },
      {
        name: 'Design Upload',
        type: 'file',
        required: false,
      },
      {
        name: 'Notes',
        type: 'text',
        required: false,
        placeholder: 'Any special instructions or requests',
      },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export const categories = ['Shirts', 'Tumblers', 'License Plates'];

