import React, { useState, useEffect } from 'react';
import './CoinData.css';
import { useParams } from 'react-router-dom';
import { selectCoins } from '../../features/coinsSlice';
import { useSelector } from 'react-redux';
import Chart from '../../components/chart/Chart';

function CoinData() {
  const { coinId } = useParams();
  const coins = useSelector(selectCoins);

  console.log(coins);

  let result = coins.find((obj) => obj.name === coinId);
  console.table(result);

  return (
    <div data-testid="coin-data" className="coinData">
      <h1 data-testid="coin-name">{coinId}</h1>
      <div className="coinData__basics">
        <img src={result?.image} alt="" />
        <p>${result?.current_price}</p>
        <p>${result?.market_cap}</p>
        <p>{result?.market_cap_rank}</p>
        <p>${result?.total_volume}</p>
      </div>
      <div className="coinData__priceFlow">
        <h2>Price change</h2>
        <p>${result?.high_24h}</p>
        <p>${result?.low_24h}</p>
        <p>${result?.price_change_24h}</p>
        <p>{result?.price_change_percentage_24h}%</p>
        <p>${result?.market_cap_change_24h}</p>
        <p>{result?.market_cap_change_percentage_24h}%</p>
        <p>${result?.circulating_supply}</p>
      </div>
      <div className="coinData__priceFlow">
        <h2>ATH</h2>
        <p>${result?.ath}</p>
        <p>{result?.ath_change_percentage}%</p>
        <p>{result?.ath_date}</p>
        <p>${result?.atl}</p>
        <p>{result?.atl_change_percentage}%</p>
        <p>{result?.atl_date}</p>
      </div>
      <div className="coinData__priceFlow">
        <h2>ROI</h2>
        <p>{result?.roi?.times}</p>
        <p>{result?.roi?.percentage}%</p>
      </div>
      <p>{result?.last_updated}</p>
      <Chart />
    </div>
  );
}

export default CoinData;
