#!/bin/bash

# Script to build Next.js app optimized for custom domain
echo "Building for custom domain: thekidshub.work"

# Clean previous build artifacts
npm run clean

# Build with custom domain flag
NEXT_PUBLIC_CUSTOM_DOMAIN=true npm run build

echo "Build completed for custom domain deployment"
echo "Files are ready to be deployed to GitHub Pages"
