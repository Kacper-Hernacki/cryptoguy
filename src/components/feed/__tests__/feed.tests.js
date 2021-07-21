import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import '@testing-library/jest-dom/extend-expect';
import Feed from '../Feed';

test('render component', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Feed />
    </Provider>
  );
  expect(getByText('Coin')).toBeInTheDocument();
  expect(getByText('Symbol')).toBeInTheDocument();
  expect(getByText('Price')).toBeInTheDocument();
  expect(getByText('Total Volume')).toBeInTheDocument();
  expect(getByText('Price Change')).toBeInTheDocument();
  expect(getByText('Market Cap')).toBeInTheDocument();
});
