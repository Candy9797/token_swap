# Token Swap Tool

## Overview
The Token Swap Tool is a decentralized application built with Next.js that allows users to swap tokens seamlessly using the Li.Fi API. The application connects to the user's MetaMask wallet, retrieves token balances, and provides an intuitive interface for selecting tokens and executing swaps.

## Features
- Connect to MetaMask wallet
- Retrieve token balances and switch chains
- Fetch token lists from Li.Fi
- Select tokens for swapping through a user-friendly dialog
- Obtain the best swap route using Li.Fi
- Execute token swaps through smart contract interactions

## Project Structure
```
token-swap-tool
├── public
│   └── next.svg               # Logo for the application
├── src
│   ├── components
│   │   ├── ConnectWallet.tsx   # Component for wallet connection
│   │   ├── TokenListDialog.tsx  # Component for selecting tokens
│   │   └── SwapRoute.tsx        # Component for displaying swap routes
│   ├── hooks
│   │   └── useWallet.ts         # Custom hook for wallet logic
│   ├── pages
│   │   ├── api
│   │   │   └── lifi.ts          # API route for Li.Fi interactions
│   │   └── index.tsx            # Main entry point of the application
│   ├── styles
│   │   └── globals.css          # Global CSS styles
│   ├── utils
│   │   └── lifi.ts              # Utility functions for Li.Fi API
│   └── app
│       └── page.tsx             # Main layout of the application
├── package.json                  # npm configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd token-swap-tool
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- Connect your MetaMask wallet to start using the token swap tool.
- Select the tokens you wish to swap from the dialog.
- Review the best swap route and execute the transaction.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.