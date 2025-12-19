'use client';

import Image from 'next/image';
import { CSSProperties } from 'react';

interface SVGImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
}

/**
 * Smart image component that handles SVGs properly
 * SVGs use regular img tag, other images use Next.js Image
 */
export default function SVGImage({ 
  src, 
  alt, 
  fill, 
  className, 
  priority,
  style 
}: SVGImageProps) {
  const isSVG = src.endsWith('.svg');
  
  if (isSVG) {
    // For SVGs, use regular img tag with proper styling
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          ...(fill ? { 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            objectPosition: 'center'
          } : {}),
          ...style
        }}
      />
    );
  }
  
  // For other images, use Next.js Image component
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        style={style}
      />
    );
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      style={style}
    />
  );
}

