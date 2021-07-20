import React from 'react';
import './Coin.css';

function Coin({ image, name, symbol, price, volume }) {
  return (
    <div className="coin">
      <div className="coin__row">
        <div className="coin__basics">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>
        <div className="coin__data">
          <p>${price}</p>
          <p>${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
