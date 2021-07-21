import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import '@testing-library/jest-dom/extend-expect';
import CoinData from '../CoinData';

test('render component', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CoinData />
    </Provider>
  );
  expect(getByTestId('coin-data')).toBeInTheDocument();
});
