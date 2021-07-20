import { createSlice } from '@reduxjs/toolkit';

export const filteredCoinsSlice = createSlice({
  name: 'filteredCoins',
  initialState: {
    filteredCoins: [],
  },
  reducers: {
    setFilteredCoins: (state, action) => {
      state.filteredCoins = action.payload.filteredCoins;
    },
  },
});

export const { setFilteredCoins } = filteredCoinsSlice.actions;
export const selectFilteredCoins = (state) => state.filteredCoins.filteredCoins;

export default filteredCoinsSlice.reducer;
