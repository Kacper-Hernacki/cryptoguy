import { configureStore } from '@reduxjs/toolkit';
import filteredCoinsReducer from '../features/filteredCoinsSlice';

export default configureStore({
  reducer: {
    filteredCoins: filteredCoinsReducer,
  },
});
