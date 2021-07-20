import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredCoins } from '../../features/filteredCoinsSlice';

function Navbar({ coins }) {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    storeFilteredCoins();
    console.log(filteredCoins);
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
    <div className="navbar">
      <h1 className="navbar__header">
        Crypto<span>GUY</span>
      </h1>
      <div className="navbar__search">
        <form>
          <input
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
