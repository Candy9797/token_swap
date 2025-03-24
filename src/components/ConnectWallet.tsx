'use client'
import { useAccount, useBalance, useConnect, useDisconnect,  useSwitchChain } from "wagmi";
import { injected } from 'wagmi/connectors'
import { useEffect } from "react";
import { Button} from '@chakra-ui/react'
import { useAppContext } from "@/app/store";
import { Heading } from "@chakra-ui/react";
const ConnectWallet = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { chains, switchChain } = useSwitchChain()
  const { isConnected, address, chain = {} } = useAccount();
  const { setChainId, setShowTokenListModal } = useAppContext();
  const { data: balance } = useBalance({
    address
  });
  useEffect(() => {
    chain?.id && setChainId(chain.id)
  }, [chain?.id, setChainId]);
  return (
    <div>
      <Heading as='h4' size='md'>
        Current Chain Id: {chain.id}
      </Heading>
      {isConnected ? (
        <div>
          <Heading as='h4' size='md'>
            Connected as: {chain.name}
          </Heading>
          <Heading as='h4' size='md'>
            address: {address}
          </Heading>
          <Heading as='h4' size='md'>
            balance: {balance?.value} {balance?.symbol}
          </Heading>
          <Button style={{ margin: '12px 12px 12px 0' }} onClick={() => disconnect()} colorScheme='blue' >Disconnect</Button>
        </div>
      ) : (
        <div>
          <h2>Connect your wallet</h2>
          {connectors.map((connector: { id: string; name: string }) => (
            <Button colorScheme='blue' style={{ margin: '12px 12px 12px 0' }} key={connector.id} onClick={() => {
              console.log(connect, connector, typeof injected(), 'xlconnector')
              connect({
                connector: injected()
              })
            }}>
              Connect with {connector.name}
            </Button>
          ))}
        </div>
      )}
      <Heading as='h4' size='md'>
        select chain:
      </Heading>
      {chains.map((chain: { id: number; name: string }) => (
        <Button colorScheme='blue' style={{ margin: '12px 12px 12px 0' }}disabled={!isConnected} key={chain.id} onClick={() => {
          switchChain({ chainId: chain.id })
          setShowTokenListModal(true)
        }} margin="m-4">
          {chain.name}-{chain.id}
        </Button>
      ))}
    </div>
  );
};

export default ConnectWallet;


