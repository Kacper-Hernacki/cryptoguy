import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import '@testing-library/jest-dom/extend-expect';
import Chart from '../Chart';
import { BrowserRouter as Router } from 'react-router-dom';

test('render chart', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <Chart />
      </Router>
    </Provider>
  );
  expect(getByText('Chart')).toBeInTheDocument();
});
