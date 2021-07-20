import { createSlice } from '@reduxjs/toolkit';

export const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
  },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload.coins;
    },
  },
});

export const { setCoins } = coinsSlice.actions;
export const selectCoins = (state) => state.coins.coins;

export default coinsSlice.reducer;
