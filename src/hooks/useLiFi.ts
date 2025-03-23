
/**
 * useLiFi - 获取token列表和最佳交易路径
 * @module useLiFi
 * @author candy
 * 
 * 功能特性：
 * - getBestRoute: 
 * 默认情况下，getRoutes 会返回按优化规则排序的多个可行路径，但不保证第一个就是绝对最优。
 * 其排序逻辑基于：1.最高净收益（toAmountUSD - gasCostUSD）2.最少交易步骤，3.最低滑点风险
 * - getTokenList:
 * 获取当前链上的所有代币列表
 */
interface Chains {
    [key: number]: string;
}
import { useState } from 'react'
import  { RoutesRequest, TokensRequest, getRoutes, getTokens } from '@lifi/sdk'

export function useLiFi() {
    const [tokens, setTokens] = useState<any>([])
    const [route, setRoute] = useState<any>(null)

    const getBestRoute = async (params: RoutesRequest) => {
        const { routes = [] } = await getRoutes(params)

        setRoute(routes[0])
        return routes
    }
    const getTokenList = async (params: TokensRequest) => {
        const { tokens } = await getTokens(params)
        setTokens(tokens[Number(params?.chains?.[0])])
        return tokens
    }
   

    const getChainName = (chainId: number): string => {
        const chains: Chains = {
            1: "Ethereum Mainnet",
            56: "Binance Smart Chain",
            137: "Polygon"
        };
        return chains[chainId] || `Chain ID: ${chainId}`;
    };

    return { route, tokens, getChainName, setTokens, setRoute, getTokenList, getBestRoute }
}