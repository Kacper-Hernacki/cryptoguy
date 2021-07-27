import React from 'react';
import './ChartBox.css';
import LineChart from './LineChart';

function ChartBox({ id, coinId }) {
  return (
    <div className="chart">
      <h1>Chart</h1>
      <LineChart coinId={coinId} id={id} />
    </div>
  );
}

export default ChartBox;
