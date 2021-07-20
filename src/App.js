import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import Feed from './components/feed/Feed';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => alert('Error with network'));
  }, []);

  return (
    <div className="app">
      <Navbar coins={coins} />
      <Feed />
    </div>
  );
}

export default App;
