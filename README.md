# The Kids Hub - Food & Community Services Frontend

This Next.js application serves as the frontend for The Kids Hub platform, empowering communities through food services and mentorship programs. The platform provides an interface for ordering artisanal cakes & pastries, eco-friendly catering services, and applying for community mentorship programs that help young entrepreneurs in Tonga.

## Our Services

### 🎂 Artisanal Cakes & Pastries
- Handcrafted desserts featuring traditional Tongan flavors
- Premium local ingredients and traditional baking techniques
- Custom designs available for special occasions
- Coming Soon - Pre-orders available

### 🌱 Eco-Friendly Catering Service
- Sustainable catering using 100% organic, locally-sourced Tongan produce
- Traditional island cuisine prepared with environmentally conscious practices
- Zero waste practices and local produce sourcing
- Coming Soon - Bookings available

### 🤝 Community Mentorship Program
- **FREE** entrepreneurship training for unemployed school leavers
- One-on-one mentoring and practical workshops
- Business skills development and ongoing support
- Empowering young Tongans to become successful entrepreneurs

## Features

- **Service Ordering System**: Browse and order cakes, pastries, and catering services
- **Cryptocurrency Payments**: Bitcoin (BTC) and Ethereum (ETH) payments for food services
- **Traditional Payment Options**: Credit/debit card processing for food orders
- **Wallet Integration**: Using ConnectKit and Wagmi for seamless crypto payments
- **Community Applications**: Free application system for mentorship programs
- **Responsive Design**: Works perfectly on all device sizes
- **Modern UI/UX**: Beautiful, accessible design with consistent branding

## Prerequisites

- Node.js 18.x or higher
- npm or yarn

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=your_dynamic_environment_id
   NEXT_PUBLIC_DEFAULT_NETWORK=arbitrum
   ```

3. **Development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Smart Contract Integration

The frontend integrates with blockchain technology to enable cryptocurrency payments for food services:

### Payment Processing
1. **Bitcoin (BTC) Payments**: Direct Bitcoin payments for food orders
2. **Ethereum (ETH) Payments**: Ethereum-based payment processing
3. **PaymentProcessor**: Handles cryptocurrency payment processing for orders
4. **ServiceBooking**: Manages service bookings and order tracking

### Wallet Integration
The platform uses modern Web3 wallet integration:
- **ConnectKit**: Seamless wallet connection experience
- **Wagmi**: React hooks for Ethereum interactions
- **Multi-wallet support**: Compatible with MetaMask, WalletConnect, and other popular wallets

### Payment Methods
- **🪙 Cryptocurrency**: Bitcoin (BTC) and Ethereum (ETH) for food services
- **💳 Traditional**: Credit/debit cards for food orders
- **🆓 Community Programs**: Completely free - no payment required

## Using the Payment System

The payment integration is handled through React hooks:

```typescript
import { useAccount } from 'wagmi';
import { ConnectKitButton } from 'connectkit';
import { useKidsHubContracts } from '@/app/contracts/ContractHook';

// In your component
const { isConnected } = useAccount();
const { processPayment } = useKidsHubContracts();
```

## Building for Production

```bash
npm run build
# or
yarn build
```

The static output will be generated in the `out` directory, which can be deployed to any static hosting service like Netlify, Vercel, or AWS S3.

## Platform Pages

The website includes the following main sections:

### 🏠 Homepage
- Hero section showcasing our mission
- Overview of all three core services
- Call-to-action buttons for each service category

### 🍰 Services Page
- Detailed information about cakes & pastries
- Eco-friendly catering service details
- Community mentorship program overview
- Payment method information

### 🌿 Catering Page
- Browse organic, locally-sourced menu options
- Traditional Tongan cuisine offerings
- Sustainable catering practices
- Order placement system (Coming Soon)

### 🤝 Community Page
- Detailed mentorship program information
- Application form for aspiring entrepreneurs
- Program benefits and success stories
- Free application process

### 📋 Booking/Application Page
- Service ordering for food items
- Community program applications
- Payment processing for food services
- Application tracking and confirmation

## About The Kids Hub

The Kids Hub is a community-focused organization in Tonga dedicated to empowering local communities through food services and entrepreneurship mentorship. Our mission is to:

- **Preserve Traditional Flavors**: Create artisanal cakes and pastries using traditional Tongan ingredients and techniques
- **Promote Sustainability**: Provide eco-friendly catering services using 100% organic, locally-sourced produce
- **Empower Youth**: Offer free mentorship programs to help unemployed school leavers become successful entrepreneurs
- **Build Community**: Strengthen local communities through food, education, and economic opportunities

We believe in the power of combining traditional Tongan culture with modern entrepreneurship to create sustainable economic opportunities for young people while preserving our heritage.

## Technology Stack

- **Frontend**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS for responsive design
- **Web3 Integration**: Wagmi + ConnectKit for wallet connections
- **Cryptocurrency**: Bitcoin (BTC) and Ethereum (ETH) payment support
- **TypeScript**: Full type safety throughout the application
- **Deployment**: Static export compatible with major hosting platforms
