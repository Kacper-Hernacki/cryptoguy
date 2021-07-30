import React, { useState, useEffect } from 'react';
import './CoinData.css';
import { useParams } from 'react-router-dom';
import { selectCoins } from '../../features/coinsSlice';
import { useSelector } from 'react-redux';
import ChartBox from '../../components/chart/ChartBox';

function CoinData() {
  const { coinId } = useParams();
  const coins = useSelector(selectCoins);

  let result = coins.find((obj) => obj.name === coinId);

  return (
    <div data-testid="coin-data" className="coinData">
      <h1 data-testid="coin-name">{coinId}</h1>
      <div className="coinData__basics">
        <img src={result?.image} alt="" />
        <div className="coinData__basicsData">
          <p className="coinData__textRow">
            <span className="coinData__attribute">Price:</span> $
            {result?.current_price}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">Market cap:</span> $
            {result?.market_cap}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">Market cap ranking: </span>{' '}
            {result?.market_cap_rank}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">Total Volume: </span> $
            {result?.total_volume}
          </p>
        </div>
      </div>
      {/*++++++++++++++++++++++++++++++Chart++++++++++++++++++++++++++++++*/}
      <ChartBox id={result?.id} />
      {/*++++++++++++++++++++++++++++++Chart++++++++++++++++++++++++++++++*/}
      <div className="coinData__priceData">
        <div className="coinData__priceFlow">
          <h2>Price change</h2>
          <p className="coinData__textRow">
            <span className="coinData__attribute">Day Max Price:</span>$
            {result?.high_24h}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">Day Min Price:</span>$
            {result?.low_24h}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">Day Price Change: </span>$
            {result?.price_change_24h}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">
              Day Price Change Percentage:
            </span>
            {result?.price_change_percentage_24h}%
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">Day Market Cap Change:</span>$
            {result?.market_cap_change_24h}
          </p>
          <p className="coinData__textRow">
            {' '}
            <span className="coinData__attribute">
              Day Market Cap Change Percentage:
            </span>
            {result?.market_cap_change_percentage_24h}%
          </p>
          <p className="coinData__textRow">
            {' '}
            <span className="coinData__attribute">Circulating Supply:</span>$
            {result?.circulating_supply}
          </p>
        </div>
        <div className="coinData__priceFlow">
          <h2>ATH</h2>
          <p className="coinData__textRow">
            <span className="coinData__attribute">ATH:</span>${result?.ath}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">ATH Change Percentage:</span>
            {result?.ath_change_percentage}%
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">ATH Date</span>
            {result?.ath_date}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">ATL:</span>${result?.atl}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">ATL Change Percentage::</span>
            {result?.atl_change_percentage}%
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">ATL Date</span>
            {result?.atl_date}
          </p>
        </div>
        <div className="coinData__priceFlow">
          <h2>ROI</h2>
          <p className="coinData__textRow">
            <span className="coinData__attribute">ROI times:</span>
            {result?.roi?.times}
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">ROI Percentage:</span>
            {result?.roi?.percentage}%
          </p>
          <p className="coinData__textRow">
            <span className="coinData__attribute">Last Update:</span>
            {result?.last_updated}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoinData;
