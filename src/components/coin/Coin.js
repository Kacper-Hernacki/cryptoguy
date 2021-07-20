import React from 'react';
import './Coin.css';

function Coin({ image, name, symbol, price, volume, priceChange, marketCap }) {
  return (
    <div className="coin">
      <div className="coin__row">
        <div className="coin__basics">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
        </div>
        <div className="coin__data">
          <p>{symbol}</p>
          <p>${price.toLocaleString()}</p>
          <p>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin__percentage red">
              {' '}
              <span>{priceChange.toFixed(2)}%</span>
            </p>
          ) : (
            <p className="coin__percentage green">
              <span>{priceChange.toFixed(2)}%</span>
            </p>
          )}
          <p className="coin__marketCap">{marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
