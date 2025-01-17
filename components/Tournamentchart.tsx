// components/TournamentChart.tsx
'use client'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface TournamentChartProps {
  labels: string[];
  data: number[];
}

const TournamentChart = ({ labels, data }: TournamentChartProps) => {
  // Chart data and options
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Total Tournaments',
        data,
        borderColor: '#4c6ef5', // Line color
        backgroundColor: '#2a2a2a', // Darker background color for the chart area
        fill: true, // Fill under the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Tournaments Over Time',
        color: '#ffffff', // Title color to stand out
      },
    },
    scales: {
      x: {
        grid: {
          color: '#444444', // Lighter grid lines
        },
      },
      y: {
        grid: {
          color: '#444444', // Lighter grid lines
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Line data={chartData} options={options} height={200} />
    </div>
  );
};

export default TournamentChart;
