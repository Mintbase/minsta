import React, { createContext, useContext } from 'react';

interface ImageCacheContextType {
  cacheImage: (imageUrl: string) => void;
}

const ImageCacheContext = createContext<ImageCacheContextType | undefined>(
  undefined
);

export function useImageCache() {
  const context = useContext(ImageCacheContext);
  if (!context) {
    throw new Error('useImageCache must be used within an ImageCacheProvider');
  }
  return context;
}

interface ImageCacheProviderProps {
  children: React.ReactNode;
}

export function ImageCacheProvider({ children }: ImageCacheProviderProps) {
  const imageCache: Record<string, HTMLImageElement> = {};

  const cacheImage = (imageUrl: string) => {
    if (!imageCache[imageUrl]) {
      const image = new Image();
      image.src = imageUrl;
      imageCache[imageUrl] = image;
    }
  };

  return (
    <ImageCacheContext.Provider value={{ cacheImage }}>
      {children}
    </ImageCacheContext.Provider>
  );
}
