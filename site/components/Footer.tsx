'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-32 py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-light tracking-wide mb-4">
            Not Mass-Made. Kustom-Made.
          </h3>
          <p className="text-sm font-extralight text-gray-600 mb-8 max-w-md mx-auto">
            Every product is crafted with care, attention to detail, and your unique vision in mind.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-light">
            <Link href="/shop" className="hover:opacity-70 transition-opacity">
              Shop
            </Link>
            <Link href="/customize" className="hover:opacity-70 transition-opacity">
              Customize
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
            <Link href="/order-status" className="hover:opacity-70 transition-opacity">
              Order Status
            </Link>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-xs font-extralight text-gray-500">
              © {new Date().getFullYear()} Kelsey's Kustom Kreation. All rights reserved.
            </p>
            <p className="text-xs font-extralight text-gray-500 mt-2">
              kelseys.mixedmakershop.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

