# The Kids Hub Eco-Tourism Frontend

This Next.js application serves as the frontend for The Kids Hub Eco-Tourism platform, providing an interface for booking island tours, managing payments (both fiat and cryptocurrency), and showcasing the various tour offerings including historical sites, traditional village experiences, and catering services.

## Features

- **Tour Booking System**: Browse and book tours with dates and number of participants
- **Cryptocurrency Payments**: Integration with Ethereum-based payments on Arbitrum network
- **Fiat Payment Options**: Traditional payment processing for non-crypto users
- **Wallet Integration**: Using Dynamic and Wagmi for seamless wallet connections
- **Tour Management**: Display of historical sites, village experiences, and culinary adventures
- **Responsive Design**: Works on all device sizes

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

The frontend interacts with the following smart contracts:

1. **TourOfferings**: Manages tour listings and details
2. **PaymentProcessor**: Handles cryptocurrency payment processing
3. **TourBooking**: Manages bookings and availability

These smart contracts are deployed using the Foundry deployment script from the backend repository. The deployment process automatically generates contract files in the `app/contracts/` directory with the necessary ABIs and addresses.

### After Contract Deployment

Once the contracts are deployed using the `/home/user/Documents/pasifika-web3-tech-hub/the-kids-hub-be/deploy.sh` script, the contract JSON files and TypeScript utilities will be automatically generated in the `app/contracts/` directory.

The generated files include:
- `contracts.ts` - Contract addresses
- `TourOfferings.json` - ABI and address
- `PaymentProcessor.json` - ABI and address
- `TourBooking.json` - ABI and address
- TypeScript wrapper files for each contract

## Using the Contracts

You can import the contract wrappers in any component:

```typescript
import { getTourOfferingsContract } from '@/app/contracts';
import { useKidsHubContracts } from '@/app/contracts/ContractHook';

// In your component
const { bookTour, getTours, processPayment } = useKidsHubContracts();
```

## Building for Production

```bash
npm run build
# or
yarn build
```

The static output will be generated in the `out` directory, which can be deployed to any static hosting service like Netlify, Vercel, or AWS S3.

## Catering Service Management

The platform includes features for managing catering services:
- Browse local produce options
- Explore traditional Tongan cuisines
- Order baked goods for tour groups

## About The Kids Hub

The Kids Hub is an eco-tourism tour operator in Tonga focusing on sustainable tourism practices that showcase authentic Tongan culture, traditions, and natural beauty. The platform aims to connect visitors with genuine cultural experiences while preserving Tonga's heritage.
