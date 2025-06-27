/** @type {import('next').NextConfig} */

// Check if we're using a custom domain
// For local development or GitHub Pages subdirectory deployment, we need the basePath
// For custom domain deployment, we don't want any basePath
const isCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === 'true';

const nextConfig = {
  images: {
    unoptimized: true,
    // Add loader for GitHub Pages compatibility
    loader: 'custom',
    loaderFile: './app/utils/imageLoader.ts',
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  // Use basePath only when not using a custom domain
  basePath: isCustomDomain ? '' : '/the-kids-hub-fe',
  assetPrefix: isCustomDomain ? '' : '/the-kids-hub-fe',
  // Set proper cache directories to avoid ENOENT errors
  experimental: {
    // Disabling outputFileTracingRoot fixes issues with monorepo setups and Next.js
    outputFileTracingRoot: undefined,
  },
  webpack: (config) => {
    // Handle MetaMask SDK and React Native dependencies
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-native-async-storage/async-storage': 'next/dist/compiled/util',
      'react-native': 'react-native-web',
    };
    
    // Add fallbacks for Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      os: require.resolve('os-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      assert: require.resolve('assert'),
      path: require.resolve('path-browserify'),
    };
    
    return config;
  },
}

module.exports = nextConfig
