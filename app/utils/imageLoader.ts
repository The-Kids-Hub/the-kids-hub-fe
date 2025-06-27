/**
 * A simple, reliable image path helper that works with static exports
 */
export function getImagePath(src: string): string {
  // If already a full URL, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // Remove leading slash if present
  const path = src.startsWith('/') ? src.slice(1) : src;
  
  // Static image path - use relative path for maximum compatibility
  return `/${path}`;
}

/**
 * Default image loader for Next.js Image component
 */
export default function imageLoader({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) {
  // If already a full URL, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // Remove leading slash if present and use relative path
  const path = src.startsWith('/') ? src.substring(1) : src;
  return `/${path}`;
}
