import { configureStore } from '@reduxjs/toolkit';
import filteredCoinsReducer from '../features/filteredCoinsSlice';
import coinsReducer from '../features/coinsSlice';

export default configureStore({
  reducer: {
    filteredCoins: filteredCoinsReducer,
    coins: coinsReducer,
  },
});
