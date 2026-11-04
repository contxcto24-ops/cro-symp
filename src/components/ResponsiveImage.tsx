import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResponsiveImageProps {
  basePath: string; // e.g. "/assets/images/amigurumi_bear_toy_1793792197834"
  alt: string;
  width: number;
  height: number;
  aspectRatioClass?: string; // e.g. "aspect-[4/3]", "aspect-[16/9]", "aspect-[2/3]"
  className?: string;
  priority?: boolean;
  sizes?: string;
  pinterestButton?: {
    pageUrl?: string;
    description?: string;
  };
}

export function ResponsiveImage({
  basePath,
  alt,
  width,
  height,
  aspectRatioClass = 'aspect-[4/3]',
  className = '',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px',
  pinterestButton
}: ResponsiveImageProps) {
  const [hasError, setHasError] = useState(false);

  // Normalize path removing .jpg or .webp if passed
  const cleanBase = basePath.replace(/\.(jpg|jpeg|webp)$/i, '');

  const webp640 = `${cleanBase}-640w.webp`;
  const webpFull = `${cleanBase}.webp`;
  const jpg640 = `${cleanBase}-640w.jpg`;
  const jpgFull = `${cleanBase}.jpg`;

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-[#F3EFE9] border border-[#DFCFC1] rounded-2xl flex flex-col items-center justify-center p-4 text-center text-[#8C7A6B] ${className}`}
      >
        <ImageOff className="w-8 h-8 mb-2 text-[#C4B1A0]" />
        <span className="text-xs font-medium">{alt}</span>
      </div>
    );
  }

  const handlePinterestClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    const shareUrl = pinterestButton?.pageUrl || (typeof window !== 'undefined' ? window.location.href : '');
    const mediaUrl = webpFull.startsWith('http') ? webpFull : `${currentOrigin}${webpFull}`;
    const desc = pinterestButton?.description || alt;

    const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(mediaUrl)}&description=${encodeURIComponent(desc)}`;
    window.open(pinUrl, '_blank', 'noopener,noreferrer,width=750,height=600');
  };

  const pictureElement = (
    <picture className={`block w-full ${aspectRatioClass} overflow-hidden ${className}`}>
      {/* 1. Next-gen WebP with srcset for mobile and desktop */}
      <source
        type="image/webp"
        srcSet={`${webp640} 640w, ${webpFull} 1200w`}
        sizes={sizes}
      />
      {/* 2. Optimized JPEG fallback */}
      <source
        type="image/jpeg"
        srcSet={`${jpg640} 640w, ${jpgFull} 1200w`}
        sizes={sizes}
      />
      {/* 3. Base img with explicit width/height and layout shift prevention */}
      <img
        src={webpFull}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover transition-transform duration-300"
        referrerPolicy="no-referrer"
      />
    </picture>
  );

  if (pinterestButton) {
    return (
      <div className="relative group w-full overflow-hidden">
        {pictureElement}
        <button
          type="button"
          onClick={handlePinterestClick}
          className="absolute top-3 right-3 z-10 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1.5 bg-[#E60023] hover:bg-[#C8001F] text-white text-xs font-semibold rounded-lg shadow-lg flex items-center gap-1.5 cursor-pointer no-print backdrop-blur-xs"
          title="Guardar en tablero de Pinterest"
          aria-label="Guardar este patrón en Pinterest"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.24-.19.291-.439.175-1.643-.766-2.67-3.169-2.67-5.101 0-4.155 3.018-7.971 8.709-7.971 4.572 0 8.125 3.259 8.125 7.614 0 4.543-2.864 8.2-6.839 8.2-1.336 0-2.591-.695-3.02-1.514l-.823 3.136c-.298 1.146-1.104 2.583-1.644 3.456 1.226.378 2.531.583 3.882.583 6.627 0 12-5.373 12-12C24 5.372 18.627 0 12 0z"/>
          </svg>
          <span>Guardar en Pinterest</span>
        </button>
      </div>
    );
  }

  return pictureElement;
}
