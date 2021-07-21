import React, { useState, useEffect } from 'react';
import './Navbar.css';
// Reducer stuff
import { useDispatch } from 'react-redux';
import { setFilteredCoins } from '../../features/filteredCoinsSlice';
import { selectCoins } from '../../features/coinsSlice';
import { useSelector } from 'react-redux';

function Navbar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const coins = useSelector(selectCoins);

  useEffect(() => {
    storeFilteredCoins();
  }, [search]);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const storeFilteredCoins = () => {
    dispatch(
      setFilteredCoins({
        filteredCoins: filteredCoins,
      })
    );
  };

  return (
    <div data-testid="navbar" className="navbar">
      <h1 className="navbar__header">
        Crypto<span>GUY</span>
      </h1>
      <div className="navbar__search">
        <form>
          <input
            data-testid="search-input"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
