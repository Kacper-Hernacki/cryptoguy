import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('render component', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByTestId('navbar')).toBeInTheDocument();
  expect(getByTestId('feed')).toBeInTheDocument();
});
