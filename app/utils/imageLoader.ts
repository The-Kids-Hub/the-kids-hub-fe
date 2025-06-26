// Helper function to get correct image paths with basePath support
export function getImagePath(src: string): string {
  // Remove leading slash if present
  const path = src.startsWith('/') ? src.slice(1) : src;
  
  // In production, images will be served from the basePath
  // This matches the basePath in next.config.js
  const basePath = process.env.NODE_ENV === 'production' ? '/the-kids-hub-fe' : '';
  
  return `${basePath}/${path}`;
}
