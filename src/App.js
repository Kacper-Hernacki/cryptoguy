import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Feed from './components/feed/Feed';
import Navbar from './components/navbar/Navbar';
// Reducer stuff
import { useDispatch } from 'react-redux';
import { setCoins } from './features/coinsSlice';
import CoinData from './pages/coinData/CoinData';
import Login from './pages/login/Login';

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
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/coins/:coinId">
            <CoinData />
          </Route>
          <Route path="/">
            <div className="app">
              <Navbar />
              <Feed />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
