// Helper function to get correct image paths with basePath support
export function getImagePath(src: string): string {
  // Remove leading slash if present
  const path = src.startsWith('/') ? src.slice(1) : src;
  
  // Always include the basePath for GitHub Pages
  // This hardcoded approach is more reliable for static exports
  const basePath = '/the-kids-hub-fe';
  
  return `${basePath}/${path}`;
}
