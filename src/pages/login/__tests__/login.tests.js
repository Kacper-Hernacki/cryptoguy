import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import '@testing-library/jest-dom/extend-expect';
import Login from '../Login';
import { BrowserRouter as Router } from 'react-router-dom';

test('login', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
  expect(getByTestId('login')).toBeInTheDocument();
});
