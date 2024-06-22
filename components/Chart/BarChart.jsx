import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './BarChart.module.css'; // Import the CSS module

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [10, 29, 20, 30, 50, 45, 25],
                backgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    });

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    display: false, // Hide x-axis labels
                },
            },
            y: {
                ticks: {
                    stepSize: 10, // Set step size to 5 hours
                    callback: function (max) {
                        return `${max} hrs`; // Display intervals in hours
                    },
                    beginAtZero: true, // Ensure the y-axis starts at zero
                    max: 55, // Set the maximum value to 55 hours
                },
            },
        },
    };

    useEffect(() => {
        const legendItems = document.querySelectorAll(`.${styles.customItem}`);
        legendItems.forEach((item) => {
            const span = item.querySelector('span');
            if (span) {
                span.className = styles.customItemText; // Apply the text style
            }
        });
    }, []);

    return (
        <div className={styles.chartContainer}>
            <Box w="500px" h="300px" position="relative">
                <Bar data={chartData} options={options} className="custom-chart-class" />
            </Box>
        </div>
    );
};

export default BarChart;
