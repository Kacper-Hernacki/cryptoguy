import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import '@testing-library/jest-dom/extend-expect';
import Coin from '../Coin';

test('render coins', async () => {
  const fakeCoins = [
    {
      id: 1,
      name: 'Bitcoin',
    },
    {
      id: 2,
      name: 'Ethereum',
    },
  ];
  const { getAllByTestId } = render(
    <Provider store={store}>
      {fakeCoins?.map((coin) => {
        return <Coin key={coin.id} name={coin.name} />;
      })}
    </Provider>
  );
  const coinData = getAllByTestId('coin-name').map((li) => li.textContent);
  const fakeCoinsNames = fakeCoins.map((c) => c.name);
  expect(coinData).toEqual(fakeCoinsNames);
});
