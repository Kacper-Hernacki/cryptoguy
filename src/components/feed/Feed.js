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
    if (filteredCoins !== [null]) {
      setFiltered(true);
    } else {
      setFiltered(true);
    }
  }, [filteredCoins]);

  return (
    <div className="feed">
      {filtered ? (
        <div className="feed__coins">
          {filteredCoins?.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.market_cap}
                price={coin.current_price}
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
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Feed;
