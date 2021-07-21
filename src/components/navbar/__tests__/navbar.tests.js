import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar';

test('render component', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
  expect(getByText('Crypto')).toBeInTheDocument();
});

test('render input', async () => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
  const input = screen.getByTestId('search-input');
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
});
