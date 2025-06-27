// Check if we're using the custom domain
const isCustomDomain = typeof window !== 'undefined' && 
  (window.location.hostname === 'thekidshub.work' || 
   process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === 'true');

// Helper function to get correct image paths with basePath support
export function getImagePath(src: string): string {
  // Remove leading slash if present
  const path = src.startsWith('/') ? src.slice(1) : src;
  
  // Use basePath only when not on custom domain
  const basePath = isCustomDomain ? '' : '/the-kids-hub-fe';
  
  return `${basePath}/${path}`;
}

// Custom image loader to be used by Next.js Image component
// Implementation based on https://nextjs.org/docs/pages/api-reference/components/image#loader
export default function imageLoader({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Handle both relative and absolute paths
  if (src.startsWith('http')) {
    return src;
  }
  
  const path = src.startsWith('/') ? src.slice(1) : src;
  
  // Use basePath only when not on custom domain
  const basePath = isCustomDomain ? '' : '/the-kids-hub-fe';
  
  return `${basePath}/${path}`;
}
