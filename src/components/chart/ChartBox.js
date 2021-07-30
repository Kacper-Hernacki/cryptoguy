import React from 'react';
import './ChartBox.css';
import LineChart from './LineChart';

function ChartBox({ id }) {
  return (
    <div className="chart">
      <h1>Chart</h1>
      <LineChart id={id} />
    </div>
  );
}

export default ChartBox;
