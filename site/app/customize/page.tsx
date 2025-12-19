'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CustomizePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    productType: '',
    customText: '',
    notes: '',
    email: '',
    name: '',
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    alert('Customization request submitted! We\'ll contact you soon.');
    router.push('/');
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
              Customize
            </h1>
            <p className="text-lg font-extralight text-white/80 text-shadow">
              Bring your vision to life
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 sm:p-12 space-y-6">
            <div>
              <label className="block text-sm font-light mb-2">
                Product Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.productType}
                onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="">Select a product</option>
                <option value="shirt">Custom T-Shirt</option>
                <option value="tumbler">Custom Tumbler</option>
                <option value="plate">Custom License Plate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-light mb-2">Custom Text</label>
              <input
                type="text"
                value={formData.customText}
                onChange={(e) => setFormData({ ...formData, customText: e.target.value })}
                placeholder="Enter your custom text"
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-light mb-2">Design Upload</label>
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
                {uploadedFile ? uploadedFile.name : 'Upload Your Design'}
              </button>
              {uploadedFile && (
                <p className="text-xs text-gray-600 mt-2">
                  File: {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-light mb-2">Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any special instructions or requests..."
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-light mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-light mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <button type="submit" className="btn-primary w-full text-gray-900">
              Submit Customization Request
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

