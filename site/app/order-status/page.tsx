'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OrderStatusPage() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // In production, this would query an API
    setTimeout(() => {
      setOrder(null);
      setLoading(false);
      alert('Order not found. Please check your order ID and email.');
    }, 1000);
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

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-light text-white text-shadow mb-4">
              Order Status
            </h1>
            <p className="text-lg font-extralight text-white/80 text-shadow">
              Track your order
            </p>
          </div>

          <div className="glass rounded-2xl p-8 sm:p-12">
            <form onSubmit={handleSearch} className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-light mb-2">Order ID</label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter your order ID"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-gray-900 disabled:opacity-50"
              >
                {loading ? 'Searching...' : 'Check Status'}
              </button>
            </form>

            {order && (
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-xl font-light mb-4">Order Details</h3>
                {/* Order details would be displayed here */}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

