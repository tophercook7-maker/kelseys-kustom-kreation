'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // In production, fetch order details using sessionId
    if (sessionId) {
      // This would call an API endpoint to get order details
      console.log('Order session:', sessionId);
    }
  }, [sessionId]);

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
          className="text-center"
        >
          <div className="glass rounded-2xl p-12 sm:p-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-light mb-4">Order Confirmed!</h1>
            <p className="text-lg font-extralight text-gray-700 mb-8">
              Thank you for your order. We've received your payment and will begin processing your
              custom creation shortly.
            </p>

            {sessionId && (
              <div className="mb-8 p-4 bg-white/50 rounded-lg">
                <p className="text-sm font-light text-gray-600">
                  Order ID: <span className="font-normal">{sessionId}</span>
                </p>
              </div>
            )}

            <div className="space-y-4">
              <p className="text-sm font-extralight text-gray-600">
                You'll receive an email confirmation with order details shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop" className="btn-primary text-gray-900">
                  Continue Shopping
                </Link>
                <Link href="/order-status" className="btn-secondary">
                  Track Order
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <main className="relative min-h-screen pt-32 pb-16 px-6 sm:px-8 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </main>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}

