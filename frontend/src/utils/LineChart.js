import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // ADD THIS

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

let data;

export const LineChart = ({ dataPoints, sensorType }) => {
    const labels = dataPoints.map((dataPoint) => {
      const timestamp = new Date(dataPoint.timestamp);
      const hours = timestamp.getHours();
      const minutes = timestamp.getMinutes();
      return `${hours}:${minutes}`;
    }); 

    switch (sensorType) {
      case 'Temperature':
        data = dataPoints.map((dataPoint) => dataPoint.temperature);
        break;
      case 'Light Intensity':
        data = dataPoints.map((dataPoint) => dataPoint.ldr);
        break;
      case 'Humidity':
        data = dataPoints.map((dataPoint) => dataPoint.humidity);
        break;
      default:
        break;
    }

  const chartData = {
    labels,
    datasets: [
      {
        label: `${sensorType} Cargo`,
        data: data,
        borderColor: 'rgb(66, 107, 253)',
        backgroundColor: 'rgba(104, 137, 253, 0.5)',
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};