import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ coinId, id }) => {
  const [coinDataDaily, setCoinDataDaily] = useState([]);
  const [coinDataWeekly, setCoinDataWeekly] = useState([]);
  const [coinDataMonthly, setCoinDataMonthly] = useState([]);
  const [coinDataYearly, setCoinDataYearly] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1'
      )
      .then((res) => {
        setCoinDataDaily({
          coins: res.data,
        });
      })
      .catch((err) => alert('Error with network'));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1'
      )
      .then((res) => {
        setCoinDataWeekly({
          coins: res.data,
        });
      })
      .catch((err) => alert('Error with network'));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1'
      )
      .then((res) => {
        setCoinDataMonthly({
          coins: res.data,
        });
      })
      .catch((err) => alert('Error with network'));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1'
      )
      .then((res) => {
        setCoinDataYearly({
          coins: res.data,
        });
      })
      .catch((err) => alert('Error with network'));
    setIsLoading(false);
  }, []);

  console.table(coinDataYearly?.coins?.prices);

  // const formatData = (data) => {
  //   return data.map((el)=>{
  //     return(
  //       t: el[0],
  //       y: el[1],
  //     )
  //   })
  // }

  const toObject = (arr) => {
    var rv = {};
    for (var i = 0; i < arr.length; ++i) rv[i] = arr[i];
    return rv;
  };

  console.log(toObject(coinDataYearly?.coins?.prices));

  return (
    <div>
      <Line
        data={{
          labels: [1, 2, 3, 4, 5, 6],
          datasets: [
            {
              label: 'Price',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)'],
              borderWidth: 1,
            },
            {
              label: 'Quantity',
              data: [47, 52, 67, 58, 9, 50],
              backgroundColor: 'orange',
              borderColor: 'red',
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          lineHeightAnnotation: {
            always: true,
            hover: false,
            lineWeight: 1.5,
          },
          animation: {
            duration: 2000,
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [{ type: 'time', distribution: 'linear' }],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
