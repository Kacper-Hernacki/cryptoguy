import React from 'react';
import './Feed.css';
import { useSelector } from 'react-redux';
import { selectFilteredCoins } from '../../features/filteredCoinsSlice';

function Feed() {
  const filteredCoins = useSelector(selectFilteredCoins);

  console.log(filteredCoins);

  return <div className="feed"></div>;
}

export default Feed;
