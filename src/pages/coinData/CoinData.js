import React from 'react';
import './CoinData.css';
import { useParams } from 'react-router-dom';

function CoinData() {
  const { coinId } = useParams();

  return (
    <div data-testid="coin-data" className="coinData">
      <h1>{coinId}</h1>
    </div>
  );
}

export default CoinData;
