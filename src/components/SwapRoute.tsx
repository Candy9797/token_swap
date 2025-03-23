import React from 'react';
import { useEffect, useState } from 'react';
import { useWallet } from '../hooks/useWallet';
import { fetchBestSwapRoute } from '../utils/lifi';

const SwapRoute = () => {
  const { walletAddress, selectedToken, targetToken, amount } = useWallet();
  const [swapRoute, setSwapRoute] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSwapRoute = async () => {
      if (selectedToken && targetToken && amount) {
        setLoading(true);
        setError(null);
        try {
          const route = await fetchBestSwapRoute(selectedToken, targetToken, amount, walletAddress);
          setSwapRoute(route);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    getSwapRoute();
  }, [selectedToken, targetToken, amount, walletAddress]);

  if (loading) return <div>Loading swap route...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {swapRoute ? (
        <div>
          <h2>Best Swap Route</h2>
          <p>From: {swapRoute.fromToken}</p>
          <p>To: {swapRoute.toToken}</p>
          <p>Amount: {swapRoute.amount}</p>
          <p>Estimated Output: {swapRoute.estimatedOutput}</p>
          <button onClick={swapRoute.execute}>Execute Swap</button>
        </div>
      ) : (
        <div>No swap route available. Please select tokens and amount.</div>
      )}
    </div>
  );
};

export default SwapRoute;