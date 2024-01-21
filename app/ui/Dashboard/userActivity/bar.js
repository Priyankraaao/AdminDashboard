import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarComponent() {
  const labels = ["Linux", "Max", "IOS", "Windows", "Android", "Other"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [60, 30, 50, 20, 50, 80, 90],
        backgroundColor: [
          "#95A4FC",
          "#BAEDBD",
          "#1C1C1C",
          "#B1E3FF",
          "#A8C5DA",
          "#A1E3CB",
        ],
        hoverBackgroundColor: [
          "1C1C1C",
        ],
        borderRadius:12,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Traffic by Device",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        barPercentage: 0.8,
        categoryPercentage: 0.9,
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar  options={options} data={data} />;
}

export default BarComponent;
