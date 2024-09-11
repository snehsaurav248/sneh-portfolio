// src/components/SkillsChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillsChart = () => {
  const data = {
    labels: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'MongoDB', 'CSS', 'HTML', 'C++', 'Java'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 95, 90, 80, 90, 85, 75, 90, 90, 65],
        backgroundColor: [
          '#FF5733',  // JavaScript - Bright Orange
          '#3498DB',  // React - Blue
          '#2ECC71',  // Node.js - Green
          '#9B59B6',  // Python - Purple
          '#F1C40F',  // SQL - Yellow
          '#E67E22',  // MongoDB - Orange
          '#1ABC9C',  // CSS - Teal
          '#E74C3C',  // HTML - Red
          '#8E44AD',  // C++ - Dark Purple
          '#2C3E50',  // Java - Dark Blue
        ],
        borderColor: [
          '#C0392B',  // JavaScript
          '#2980B9',  // React
          '#27AE60',  // Node.js
          '#8E44AD',  // Python
          '#F39C12',  // SQL
          '#D35400',  // MongoDB
          '#16A085',  // CSS
          '#C0392B',  // HTML
          '#7D3C98',  // C++
          '#34495E',  // Java
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333', // Dark color for legend labels
          font: {
            size: 14,
            weight: 'bold', // Bold labels for emphasis
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#000',  // Black color for x-axis labels
          font: {
            size: 12,
            weight: 'bold', // Bold and large for better readability
          },
        },
      },
      y: {
        ticks: {
          color: '#000',  // Black color for y-axis labels
          font: {
            size: 12,
            weight: 'bold',
          },
          beginAtZero: true,
          max: 100, // Ensuring the y-axis goes from 0 to 100 for percentages
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SkillsChart;
