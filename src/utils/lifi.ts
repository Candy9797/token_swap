import axios from 'axios';
/**
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
import { Route, RoutesRequest, TokensRequest, getRoutes, getTokens } from '@lifi/sdk'

// const LI_FI_API_URL = 'https://api.li.fi/v1';
export const getChainName = (chainId: number): string => {
  const chains: Chains = {
    1: "Ethereum Mainnet",
    56: "Binance Smart Chain",
    137: "Polygon"
  };
  return chains[chainId] || `Chain ID: ${chainId}`;
};
export const getTokenList = async (params: TokensRequest) => {
  const { tokens } = await getTokens(params)
  console.log(tokens, 'tokens2')
  return tokens[Number(params?.chains?.[0])]
}


// 获取最优路由函数
export async function getBestSwapRoute(params: {
  fromChainId: number;    // 源链ID (e.g. 1 = Ethereum)
  fromTokenAddress: string;
  toChainId: number;      // 目标链ID (e.g. 137 = Polygon)
  toTokenAddress: string;
  amount: string;         // 原始精度金额 (e.g. "1000000")
  fromAddress: string;    // 用户钱包地址
}): Promise<Route | null> {

  try {
    // 1. 获取所有可能路由
    const { routes } = await getRoutes({
      fromChainId: params.fromChainId,
      fromTokenAddress: params.fromTokenAddress,
      toChainId: params.toChainId,
      toTokenAddress: params.toTokenAddress,
      fromAmount: params.amount,
      fromAddress: params.fromAddress,
      options: {
        // 高级过滤条件
        allowSwitchChain: false,    // 是否允许自动切换链
        slippage: 0.5,             // 滑点设置 (0.5%)
        bridges: {                  // 桥接协议过滤
          allow: ['stargate', 'hop', 'connext'],
        },
        exchanges: {                // DEX过滤
          deny: ['sushiswap']
        }
      }
    });

    if (!routes.length) {
      console.log('未找到可用路由');
      return null;
    }

    // 2. 路由排序算法（根据需求自定义）
    const sortedRoutes = routes.sort((a, b) => {
      // 按总成本排序（gas + 费用）
      // 或按预估到账金额排序
      return parseFloat(b.toAmountUSD) - parseFloat(a.toAmountUSD);
    });

    // 3. 选择最佳路由
    const bestRoute = sortedRoutes[0];

    console.log('最佳路由详情:', {
      fromAmount: bestRoute.fromAmount,
      toAmount: bestRoute.toAmount,
      gasCostUSD: bestRoute.gasCostUSD,
      steps: bestRoute.steps.map(step => ({
        type: step.type,
        tool: step.tool,
        estimateTime: step.estimate.executionDuration
      }))
    });

    return bestRoute;

  } catch (error) {
    console.error('获取路由失败:', error);
    return null;
  }
}

// 使用示例
// const main = async () => {
//   const bestRoute = await getBestSwapRoute({
//     fromChainId: 1, // Ethereum
//     fromTokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
//     toChainId: 137, // Polygon
//     toTokenAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', // WETH
//     amount: '100000000', // 100 USDC (6 decimals)
//     fromAddress: '0xUserWalletAddress'
//   });

//   if (bestRoute) {
//     // 执行交易
//     // const result = await lifi.executeRoute(bestRoute, { signer });
//   }
// };

// main();