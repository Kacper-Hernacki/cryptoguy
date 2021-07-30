import axios from 'axios';
import { response } from 'msw';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

const options_v2 = {
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
};

const options = {
  legend: {
    display: false,
  },
  elements: {
    points: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format('+0,0');
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};

const LineChart = ({ id }) => {
  const [coinDataDaily, setCoinDataDaily] = useState({});
  const [coinData, setCoinData] = useState({});
  const [xLabel, setXLabel] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
        )

        .then((data) => {
          setCoinDataDaily({
            coins: data.data,
          });
        })
        .catch((err) => alert('Error with network'));
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    setCoinData(buildChartData(coinDataDaily?.coins));
  }, [coinDataDaily]);

  const xLabeling = (data) => {
    const labelData = [];
    if (data !== undefined) {
      data?.forEach((label) => {
        const newPoint = {
          x: label.x,
        };
        labelData.push(newPoint);
      });
      return labelData;
    } else {
      return labelData;
    }
  };

  const buildChartData = (data) => {
    const chartData = [];
    if (data !== undefined) {
      data['prices'].forEach((date) => {
        //
        const newDataPoint = {
          x: date[0],
          y: date[1],
        };
        chartData.push(newDataPoint);
      });
      return chartData;
    } else {
      return chartData;
    }
  };

  console.log(coinData);
  console.log(xLabeling(coinData));

  return (
    <div>
      <Line
        options={options_v2}
        data={{
          labels: [1, 2, 3, 4, 5, 6],
          datasets: [
            {
              backgroundColor: 'rgba(204,16,53,0.5)',
              borderColor: '#CC1034',
              data: coinData,
            },
          ],
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default LineChart;

// {
//   lineHeightAnnotation: {
//     always: true,
//     hover: false,
//     lineWeight: 1.5,
//   },
//   animation: {
//     duration: 2000,
//   },
//   maintainAspectRatio: false,
//   scales: {
//     xAxes: [{ type: 'time', distribution: 'linear' }],
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//   },
//   legend: {
//     labels: {
//       fontSize: 25,
//     },
//   },
// }

// const [coinDataWeekly, setCoinDataWeekly] = useState({});
// const [coinDataMonthly, setCoinDataMonthly] = useState({});
// const [coinDataYearly, setCoinDataYearly] = useState({});

// const formatData = (data) => {
//   return data.map((el)=>{
//     return(
//       t: el[0],
//       y: el[1],
//     )
//   })
// }

//  const formData = (arr) => {
//   const result = [];
//   if (arr !== undefined) {

//     return arr.map((el) => {
//       let data = toObject(el);
//       result.push(data);
//     return result
//     });
//   }

//   console.log(result)
// };

//   function toObject(arr) {
//   var rv = {};
//   for (var i = 0; i < arr?.length; ++i)
//     if (arr[i] !== undefined) rv[i] = arr[i];
//   return rv;
// }

// console.log(coinDataYearly?.coins?.prices);

// const formData = (arr) => {
//   if (arr !== undefined) {

//     var result = arr.map( );

//   }

// };
// console.log('result', formData(coinDataYearly?.coins?.prices));

// useEffect(() => {
//   setIsLoading(true);
//   if (id) {
//     axios
//       .get(
//         `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
//       )
//       .then((res) => {
//         setCoinDataWeekly({
//           coins: res.data,
//         });
//       });
//   }
//   setIsLoading(false);
// }, []);

// useEffect(() => {
//   setIsLoading(true);
//   if (id) {
//     axios
//       .get(
//         `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
//       )
//       .then((res) => {
//         setCoinDataMonthly({
//           coins: res.data,
//         });
//       })
//       .catch((err) => alert('Error with network'));
//   }
//   setIsLoading(false);
// }, []);

// useEffect(() => {
//   setIsLoading(true);
//   if (id) {
//     axios
//       .get(
//         `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
//       )
//       .then((res) => {
//         setCoinDataYearly({
//           coins: res.data,
//         });
//       })
//       .catch((err) => alert('Error with network'));
//   }
//   setIsLoading(false);
// }, []);
