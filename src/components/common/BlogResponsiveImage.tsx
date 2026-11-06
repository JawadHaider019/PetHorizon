import React, { useState } from 'react';

export interface BlogResponsiveImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  aspectRatio?: string;
  className?: string;
  imgClassName?: string;
  fallbackSrc?: string;
}

export default function BlogResponsiveImage({
  src,
  srcSet,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  alt,
  width = 1200,
  height = 750,
  priority = false,
  aspectRatio = 'aspect-[16/10] sm:aspect-[16/9]',
  className = '',
  imgClassName = '',
  fallbackSrc = '/3d-pets-hero.webp'
}: BlogResponsiveImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-slate-100 ${aspectRatio} ${className}`}
    >
      <picture className="w-full h-full block">
        {!hasError && srcSet && (
          <source type="image/webp" srcSet={srcSet} sizes={sizes} />
        )}
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'auto' : 'async'}
          // @ts-expect-error fetchpriority is a standard HTML attribute in React 19 / modern browsers
          fetchpriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover object-center transition-all duration-300 ${
            isLoaded ? 'opacity-100 blur-0' : 'opacity-80'
          } ${imgClassName}`}
        />
      </picture>
    </div>
  );
}
