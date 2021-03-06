import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import '@testing-library/jest-dom/extend-expect';
import CoinData from '../CoinData';
import { BrowserRouter as Router } from 'react-router-dom';

test('render component', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <CoinData />
      </Router>
    </Provider>
  );
  expect(getByTestId('coin-data')).toBeInTheDocument();
  expect(getByTestId('coin-name')).toBeInTheDocument();
});
