"use client";

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

export const preloadImages = async (imagePaths: string[]): Promise<void> => {
  try {
    await Promise.all(imagePaths.map(preloadImage));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// Extract thumbnail images from projects data (Updated for Cinevood, Tarzau, Climatek & others)
export const getProjectThumbnails = (): string[] => {
  return [
    "/projects/cinevood.png",     // Cinevood (https://cinenvood.onrender.com)
    "/projects/tarzau.png",       // Tarzau (https://tarzau.netlify.app)
    "/projects/climatek.png",     // Climatek (https://climatek.netlify.app)
  ];                              // <-- Yeh bracket aur semicolon zaroori hai bhai!
};
