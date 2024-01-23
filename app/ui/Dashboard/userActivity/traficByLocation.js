import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const TraficByLocation = () => {
  const data = {
    labels: ["USA", "Mexico", "Canada", "Other"],
    datasets: [
      {
        data: [38.6, 30.8, 22.5, 8.1],
        backgroundColor: ["#1C1C1C", "#B1E3FF", "#A1E3CB", "#A8C5DA"],
        hoverBackgroundColor: ["#1C1C1C", "#B1E3FF", "#A1E3CB", "#A8C5DA"],
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    cutout: "50%",
    elements: {
      arc: {
        borderWidth: 0,
        borderRadius: 8,
      },
    },
    spacing: 6,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          boxWidth:16,
          font: {
            size: 12,
          },
          padding: 32,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i];
                const meta = chart.getDatasetMeta(0);
                const style = meta.controller.getStyle(i);

                return {
                  text: `${label}: ${value}%`,
                  fillStyle: style.backgroundColor,
                  borderColor: style.backgroundColor,
                  hidden: isNaN(value) || meta.data[i].hidden,
                  index: i,
                  gap:20
                };
              });
            }
            return [];
          },
        },

        title: {
          display: true,
          text: "Traffic by Location",
        },
      },
    },
  };

  return (
    <div
      id="chart"
      style={{ display: "flex", flexDirection: "column", padding: "30px" }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TraficByLocation;
