'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { products, categories } from '@/lib/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-light text-white text-shadow mb-4">
            Shop
          </h1>
          <p className="text-lg font-extralight text-white/80 text-shadow">
            Explore our premium collection
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-2 rounded-full font-light text-sm transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'glass text-gray-900'
                : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-light text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'glass text-gray-900'
                  : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/shop/${product.id}`}>
                <div className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 h-full flex flex-col">
                  <div className="aspect-square relative bg-gray-200">
                    <Image
                      src={product.images[0] || '/images/placeholder.svg'}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-light mb-2">{product.name}</h3>
                    <p className="text-sm font-extralight text-gray-600 mb-4 flex-1">
                      {product.description}
                    </p>
                    <p className="text-lg font-light">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: filteredProducts.length * 0.1 }}
            className="glass rounded-2xl overflow-hidden h-full flex flex-col items-center justify-center p-12"
          >
            <div className="text-center">
              <h3 className="text-xl font-light mb-2">And More</h3>
              <p className="text-sm font-extralight text-gray-600">Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

