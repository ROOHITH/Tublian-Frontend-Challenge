import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import BarGraphViewModel from '../../ViewModel/BarGraphViewModel';

const BarGraph = () => {
  const chartRef = useRef(null);
  const { engagementRates, getChartData, fullDayLabels } = BarGraphViewModel();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chartData = getChartData();

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {

          y: {
            beginAtZero: true,

            suggestedMin: 0, // Minimum value
            suggestedMax: 100, // Maximum value
            ticks: {
              stepSize: 20,
              color: '#6A6A6A',

              fontSize: 20,


            },

            border: {
              display: false,
              dash: [6, 6],
              dashOffset: 6
            },
            grid: {
              z: 1,
              tickBorderDash: [3, 6]
            },
            gridLines: {
              // You can change the color, the dash effect, the main axe color, etc.
              borderDash: [8, 4],
              color: 'rgba(143, 143, 143, 1)',

            },

          },
          x: {
            beginAtZero: true,
            ticks: {

              color: '#6A6A6A',
            },

            grid: {
              display: false // Hide grid lines on x-axis
            }
          }
        },
        plugins: {
          title: {
            display: false,
            text: 'Engagement Rate'
          },
          legend: {
            display: false,
            position: 'bottom'
          }, tooltip: {
            callbacks: {
              title: function (tooltipItem) {
                return fullDayLabels[tooltipItem[0].dataIndex]; // Display full day name on hover
              }
            }
          }
        },
        elements: {
          bar: {
            borderWidth: 0,
            backgroundColor: 'rgb(232, 246, 237)',
            barThickness: 10
          }
        },
        layout: {
          padding: {
            left: 2, // Add padding to the left side to make room for y-axis labels
            right: 2 // Add padding to the right side
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1 // Adjust aspect ratio as needed
      }
    });

    myChart.options.elements.bar.barPercentage = 0.10;
    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};
export default BarGraph;
