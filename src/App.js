import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
// Components
import Feed from './components/feed/Feed';
// Reducer stuff
import { useDispatch } from 'react-redux';
import { setCoins } from './features/coinsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        dispatch(
          setCoins({
            coins: res.data,
          })
        );
      })
      .catch((err) => alert('Error with network'));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Feed />
    </div>
  );
}

export default App;
