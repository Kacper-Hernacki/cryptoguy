import React, { useRef, useEffect } from 'react';
import './ChartBox.css';
import Chart from 'chart.js/auto';

function ChartBox() {
  const chartRef = useRef();
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: '# of Votes',
              data: [
                { x: 1, y: 15 },
                { x: 20, y: 12 },
                { x: 30, y: 25 },
              ],
              backgroundColor: 'rgba(174,305,194, 0.5',

              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  }, []);
  return (
    <div className="chart">
      <h1>Chart</h1>
      <div className="chart__container">
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>
    </div>
  );
}

export default ChartBox;
