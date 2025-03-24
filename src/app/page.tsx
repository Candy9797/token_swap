import ConnectWallet from "../components/ConnectWallet";
import TokenListModal from "../components/TokenListModal";
import { AppProvider } from "./store";
import { ChakraProvider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import './globals.css'
export default function Home() {
  return (
      <div className="flex items-center flex-col h-screen">
        <ChakraProvider >
        <Heading>Token Swap</Heading>
          <AppProvider>
            <ConnectWallet />
            <TokenListModal />
          </AppProvider>
          </ChakraProvider>
      </div>

  );
}
