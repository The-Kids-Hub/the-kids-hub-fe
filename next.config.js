/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  // For GitHub Pages deployment at /the-kids-hub-fe subdirectory
  basePath: '',
  assetPrefix: '',
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
