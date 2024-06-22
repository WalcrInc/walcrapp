import React, {useEffect, useState} from 'react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend  } from 'chart.js'
import Style from './Chart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: '# of earnings',
        data: [3000, 1500, 500], // Initial data values
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(128, 128, 128, 1)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(128, 128, 128, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 4,
        // className: Style.Chart,
      },
    ],
    labels: ['In app', 'Cash', 'Other'],
  });

  useEffect(() => {
    // Check if all data values are 0
    const allValuesAreZero = chartData.datasets[0].data.every((value) => value === 0);

    if (allValuesAreZero) {
      // Update background and border colors to grey
      setChartData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          backgroundColor: [
            'rgba(128, 128, 128, 1)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(75, 192, 192, 0.7)',
          ],
          borderColor: [
            'rgba(128, 128, 128, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(75, 192, 192, 1)',
          ],
        })),
      }));
    }
  }, [chartData]);

  const options = {
    responsive: true,
    cutout: '65%', // Adjust the inner circle size here (percentage of radius)
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true, // Use point style for labels
          pointStyle: 'circle', // Set point style to circle
          boxWidth: 15, // Width of the colored box
          padding: 20, // Padding around the text and box
          borderRadius: 50, 
          generateLabels: (chart) => {
            const data = chart.data;
            return data.labels.map((label, index) => {
              const value = data.datasets[0].data[index];
              return {
                text: `${label} ($ ${value})`,
                fillStyle: data.datasets[0].backgroundColor[index],
                strokeStyle: data.datasets[0].borderColor[index],
                lineWidth: data.datasets[0].borderWidth,
                className: Style.customItem, // Use the custom CSS module class
              };
            });
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || '';
            return `${label}: ${value} ${label}`;
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  useEffect(() => {
    const legendItems = document.querySelectorAll(`.${Style.customItem}`);
    legendItems.forEach((item) => {
      const span = item.querySelector('span');
      if (span) {
        span.className = Style.customItemText; // Apply the text style
      }
    });
  }, []);

  return (
    <div className={Style.chartContainer}>
      <Box w="300px" h="300px" className={Style.bg}>
        <Doughnut data={chartData} options={options} />
        <Text position="absolute" top="37%" left="50%" transform="translate(-50%, -50%)" className={Style.Amount}>
          <p className={Style.text}>Total Earnings</p>
          $5000
        </Text>
      </Box>
      <p>
        show breakdown {'>'}
      </p>
    </div>
  );
};

const CancelChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: '# of earnings',
        data: [70, 30], // Initial data values
        backgroundColor: [
          'rgb(255, 77, 77, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgb(255, 77, 77, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 4,
        // className: Style.Chart,
      },
    ],
    labels: ['You Cancelled', 'Client Cancelled'],
  });

  useEffect(() => {
    // Check if all data values are 0
    const allValuesAreZero = chartData.datasets[0].data.every((value) => value === 0);

    if (allValuesAreZero) {
      // Update background and border colors to grey
      setChartData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          backgroundColor: [
            'rgba(128, 128, 128, 1)',
            'rgba(255, 159, 64, 0.7)',
          ],
          borderColor: [
            'rgba(128, 128, 128, 1)',
            'rgba(255, 159, 64, 1)',
          ],
        })),
      }));
    }
  }, [chartData]);

  const options = {
    responsive: true,
    cutout: '70%', // Adjust the inner circle size here (percentage of radius)
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
        labels: {
          usePointStyle: true, // Use point style for labels
          pointStyle: 'circle', // Set point style to circle
          // boxWidth: 15, // Width of the colored box
          borderRadius: 50, 
          generateLabels: (chart) => {
            const data = chart.data;
            return data.labels.map((label, index) => {
              const value = data.datasets[0].data[index];
              return {
                text: `${label} ($ ${value})`,
                fillStyle: data.datasets[0].backgroundColor[index],
                strokeStyle: data.datasets[0].borderColor[index],
                lineWidth: data.datasets[0].borderWidth,
                className: Style.customItem, // Use the custom CSS module class
              };
            });
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || '';
            return `${label}: ${value} ${label}`;
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  useEffect(() => {
    const legendItems = document.querySelectorAll(`.${Style.customItem}`);
    legendItems.forEach((item) => {
      const span = item.querySelector('span');
      if (span) {
        span.className = Style.customItemText; // Apply the text style
      }
    });
  }, []);

  return (
    <div className={Style.chartContainer}>
      <Box w="250px" h="250px" className={Style.bg}>
        <Doughnut data={chartData} options={options} />
        <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" className={Style.Amount}>
          100
        </Text>
      </Box>
    </div>
  );
}
export {PieChart, CancelChart};