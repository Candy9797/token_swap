'use client'
import { useAppContext } from '@/app/store';
import { ChainType, Token } from '@lifi/sdk';
import React, { useEffect, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Heading, Spinner } from '@chakra-ui/react';
import { getChainName, getTokenList } from '@/utils/lifi';
export interface TokenListModalProps {
  show?: boolean;
  onClose?: () => void;
  tokens?: { name: string; symbol: string }[];
}


const TokenListModal = () => {
  const { tokens, chainId, setChainId, showTokenListModal, setShowTokenListModal, setTokens } = useAppContext();
  const [loading, setLoading] = useState(true)
  const fetchTokenList = async () => {
    setLoading(true)
    const res = await getTokenList({
      chains: [chainId],
      chainTypes: [ChainType.EVM]
    })
    setTokens(res)
    setLoading(false)
  }
  const onClose = () => {
    setChainId(0)
    setTokens([])
    setShowTokenListModal(false)
  }
  useEffect(() => {
    if (showTokenListModal && chainId) {
      fetchTokenList()
    }
  }, [chainId, showTokenListModal, fetchTokenList])
  const onTokenClick = (token: Token) => {
    const { chainId, address
    } = token;
    console.log(token,chainId, address, 'token clicked')
    // const res = getBestSwapRoute({
    //   fromChainId: chainId,
    //   fromAmount: 2,
    //   fromTokenAddress: address,
    // })
  }

  return (
    <Modal
      onClose={onClose}
      isOpen={showTokenListModal}
      scrollBehavior={'inside'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading as='h4' size='md'>
            Token List  {tokens.length ? `总计${tokens.length}` : null}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody >
          <div className='flex flex-col align-center'>
            {loading || !tokens?.length ? <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            /> : (
              tokens || []).map((token: Token, index: number) => (
                <div key={index + token.name} className="cursor-pointer mt-4 max-w-md bg-white rounded-xl shadow-md overflow-hidden p-5 border border-gray-200" onClick={() => onTokenClick(token)}>
                  <div className="flex items-center gap-4">
                    <img
                      src={token.logoURI}
                      alt={typeof token.symbol === 'string' ? token.symbol : 'Token Logo'}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {index} :{token.name} ({token.symbol})
                      </h2>
                      <p className="text-green-600 font-bold mt-1">
                        ${Number(token.priceUSD).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="border-t pt-2">
                    {/* Contract Address */}
                    {/* <div className="mb-4">
                      <span className="text-sm text-gray-500 block">Contract Address</span>
                      <span className="text-base text-gray-900 font-mono break-all">
                        {token.address}
                      </span>
                    </div> */}
                    {/* Grid Details */}
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <span className="text-sm text-gray-500 block">Network</span>
                        <span className="text-base text-gray-900">
                          {getChainName(token.chainId)}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 block">Decimals</span>
                        <span className="text-base text-gray-900">
                          {token.decimals}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 block">Coin Key</span>
                        <span className="text-base text-gray-900">
                          {token.coinKey}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
              )}
          </div>

        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
};

export default TokenListModal;
