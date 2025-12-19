'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="relative min-h-screen">
      {/* Background Image - User will replace this */}
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

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight text-white text-shadow mb-6">
            Where Your Ideas
            <br />
            <span className="font-extralight">Come Alive</span>
          </h1>
          <p className="text-xl sm:text-2xl font-extralight text-white/90 text-shadow mb-12 max-w-2xl mx-auto">
            Premium custom products crafted with precision and care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-primary text-gray-900">
              Shop Now
            </Link>
            <Link href="/customize" className="btn-secondary">
              Start Customizing
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Gallery Preview Section */}
      <section className="relative z-10 py-32 px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-white text-shadow mb-4">
              Featured Products
            </h2>
            <p className="text-lg font-extralight text-white/80 text-shadow">
              Discover our premium collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/shop/${product.id}`}>
                  <div className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                    <div className="aspect-square relative bg-gray-200">
                      <Image
                        src={product.images[0] || '/images/placeholder.svg'}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-light mb-2">{product.name}</h3>
                      <p className="text-sm font-extralight text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <p className="text-lg font-light">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Value Statement Section */}
      <section className="relative z-10 py-32 px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass rounded-2xl p-12 sm:p-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-8">
              Not Mass-Made.
              <br />
              <span className="font-extralight">Kustom-Made.</span>
            </h2>
            <p className="text-lg font-extralight text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Every product is crafted with meticulous attention to detail. We believe in quality
              over quantity, personalization over mass production, and creating something truly
              unique for each customer.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
