'use client';

import { useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getProductById } from '@/lib/products';
import { CartItem } from '@/types';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = getProductById(params.id as string);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [customizations, setCustomizations] = useState<Record<string, string | File>>({});
  const [quantity, setQuantity] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  if (!product) {
    return (
      <main className="relative min-h-screen pt-32 pb-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-light mb-4">Product Not Found</h1>
          <button onClick={() => router.push('/shop')} className="btn-primary">
            Back to Shop
          </button>
        </div>
      </main>
    );
  }

  const handleOptionChange = (optionName: string, value: string) => {
    setCustomizations((prev) => ({ ...prev, [optionName]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setCustomizations((prev) => ({ ...prev, 'Design Upload': file }));
    }
  };

  const calculateTotal = () => {
    return (product.price * quantity).toFixed(2);
  };

  const handleAddToCart = () => {
    // Validate required options
    const requiredOptions = product.options?.filter((opt) => opt.required) || [];
    const missingRequired = requiredOptions.some(
      (opt) => !customizations[opt.name] || customizations[opt.name] === ''
    );

    if (missingRequired) {
      alert('Please fill in all required fields');
      return;
    }

    const cartItem: CartItem = {
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity,
      customizations,
      image: product.images[0],
    };

    // Store in localStorage (in production, use proper state management)
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));

    router.push('/shop?added=true');
  };

  return (
    <main className="relative min-h-screen pt-32 pb-16 px-6 sm:px-8">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-800/30 to-gray-900/40" />
        <Image
          src="/images/hero-bg.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Product Images */}
          <div>
            <div className="glass rounded-2xl overflow-hidden mb-4">
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src={product.images[selectedImage] || '/images/placeholder.svg'}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`glass rounded-lg overflow-hidden flex-1 aspect-square relative ${
                      selectedImage === index ? 'ring-2 ring-white' : ''
                    }`}
                  >
                    <Image
                      src={img || '/images/placeholder.svg'}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="glass rounded-2xl p-8">
            <h1 className="text-4xl font-light mb-4">{product.name}</h1>
            <p className="text-2xl font-light mb-6">${product.price.toFixed(2)}</p>
            <p className="text-sm font-extralight text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Customization Options */}
            {product.options && (
              <div className="space-y-6 mb-8">
                {product.options.map((option) => (
                  <div key={option.name}>
                    <label className="block text-sm font-light mb-2">
                      {option.name}
                      {option.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {option.type === 'select' && option.values && (
                      <select
                        value={customizations[option.name] as string || ''}
                        onChange={(e) => handleOptionChange(option.name, e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                        required={option.required}
                      >
                        <option value="">Select {option.name}</option>
                        {option.values.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    )}
                    {option.type === 'text' && (
                      <input
                        type="text"
                        value={customizations[option.name] as string || ''}
                        onChange={(e) => handleOptionChange(option.name, e.target.value)}
                        placeholder={option.placeholder}
                        className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                        required={option.required}
                      />
                    )}
                    {option.type === 'file' && (
                      <div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 hover:bg-white/90 transition-colors"
                        >
                          {uploadedFile ? uploadedFile.name : 'Upload Design'}
                        </button>
                        {uploadedFile && (
                          <p className="text-xs text-gray-600 mt-2">
                            File: {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-light mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white transition-colors"
                >
                  −
                </button>
                <span className="text-lg font-light w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price Summary */}
            <div className="border-t border-white/20 pt-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-light">Subtotal</span>
                <span className="text-xl font-light">${calculateTotal()}</span>
              </div>
              <p className="text-xs font-extralight text-gray-600">
                Shipping calculated at checkout
              </p>
            </div>

            {/* Add to Cart Button */}
            <button onClick={handleAddToCart} className="btn-primary w-full text-gray-900">
              Add to Cart
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

