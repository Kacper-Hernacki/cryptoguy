import React, { useState, useEffect } from 'react';
import './Feed.css';
// Reducer stuff
import { useSelector } from 'react-redux';
import { selectFilteredCoins } from '../../features/filteredCoinsSlice';
import { selectCoins } from '../../features/coinsSlice';
// Components
import Coin from '../coin/Coin';

function Feed() {
  const [filtered, setFiltered] = useState(false);
  const filteredCoins = useSelector(selectFilteredCoins);
  const coins = useSelector(selectCoins);

  useEffect(() => {
    if (filteredCoins.length > 0) {
      setFiltered(true);
    } else {
      setFiltered(false);
    }
  }, [filteredCoins]);
  console.log(coins);

  return (
    <div data-testid="feed" className="feed">
      <div className="feed__header">
        <h4 className="feed__headerName">Coin</h4>
        <div className="feed__headerRight">
          <h4>Symbol</h4>
          <h4>Price</h4>
          <h4>Total Volume</h4>
          <h4>Price Change</h4>
          <h4>Market Cap</h4>
        </div>
      </div>
      {filtered ? (
        <div className="feed__coins">
          {filteredCoins?.map((coin) => {
            return (
              <Coin
                id={coin.id}
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
              />
            );
          })}
        </div>
      ) : (
        <div className="feed__coins">
          {coins?.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Feed;
