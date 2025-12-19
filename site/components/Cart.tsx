'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from '@/types';
import { stripePromise, createCheckoutSession } from '@/lib/stripe';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load cart from localStorage
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCartItems(JSON.parse(stored));
    }

    // Listen for cart updates
    const handleStorageChange = () => {
      const updated = localStorage.getItem('cart');
      if (updated) {
        setCartItems(JSON.parse(updated));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const removeItem = (index: number) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    setLoading(true);
    try {
      const sessionId = await createCheckoutSession(cartItems);
      if (sessionId) {
        const stripe = await stripePromise;
        if (stripe) {
          // Use type assertion for redirectToCheckout
          const result = await (stripe as any).redirectToCheckout({ sessionId });
          if (result?.error) {
            throw result.error;
          }
        }
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white z-50 shadow-2xl overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-light">Cart</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <Link href="/shop" onClick={onClose} className="btn-primary text-gray-900">
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex gap-4 pb-4 border-b">
                        {item.image && (
                          <div className="w-20 h-20 relative bg-gray-200 rounded-lg flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.productName}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-light mb-1">{item.productName}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Qty: {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeItem(index)}
                            className="text-xs text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-light">Total</span>
                      <span className="text-xl font-light">${calculateTotal().toFixed(2)}</span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      disabled={loading}
                      className="btn-primary w-full text-gray-900 disabled:opacity-50"
                    >
                      {loading ? 'Processing...' : 'Checkout'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

