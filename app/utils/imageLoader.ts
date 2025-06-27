// Helper function to get correct image paths with basePath support
export function getImagePath(src: string): string {
  // Remove leading slash if present
  const path = src.startsWith('/') ? src.slice(1) : src;
  
  // In production, images will be served from the basePath
  // This matches the basePath in next.config.js
  // Using typeof window check to avoid issues with server-side rendering
  const isProduction = typeof window !== 'undefined' && 
                     window.location.hostname !== 'localhost' && 
                     !window.location.hostname.includes('127.0.0.1');
  
  const basePath = isProduction ? '/the-kids-hub-fe' : '';
  
  return `${basePath}/${path}`;
}
