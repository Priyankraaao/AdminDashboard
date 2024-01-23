import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./styles.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function getIntersection(pointA1, pointA2, pointB1, pointB2) {
  const x1 = pointA1.x;
  const y1 = pointA1.y;
  const x2 = pointA2.x;
  const y2 = pointA2.y;
  const x3 = pointB1.x;
  const y3 = pointB1.y;
  const x4 = pointB2.x;
  const y4 = pointB2.y;

  const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

  if (denom === 0) {
    return null;
  }

  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;

  const x = x1 + ua * (x2 - x1);
  const y = y1 + ua * (y2 - y1);

  return { x, y };
}

function isPointOnLine(point, lineStart, lineEnd) {
  const minX = Math.min(lineStart.x, lineEnd.x);
  const maxX = Math.max(lineStart.x, lineEnd.x);
  const minY = Math.min(lineStart.y, lineEnd.y);
  const maxY = Math.max(lineStart.y, lineEnd.y);

  return (
    point.x >= minX && point.x <= maxX && point.y >= minY && point.y <= maxY
  );
}

function formatData(originalData) {
  const groupedData = {};

  originalData.forEach((entry) => {
    const [day, month, year] = entry.date.split("-");
    const formattedMonth = new Date(`${month} 1, 2000`).toLocaleString(
      "en-US",
      { month: "short" }
    );

    const key = `${year}-${formattedMonth}`;
    if (!groupedData[key]) {
      groupedData[key] = {
        year: parseInt(year),
        month: formattedMonth,
        dates: [],
        navSum: 0,
        navCount: 0,
      };
    }

    groupedData[key].dates.push(`${day}-${month}-${year}`);
    groupedData[key].navSum += parseFloat(entry.nav);
    groupedData[key].navCount += 1;
  });

  const formattedData = Object.values(groupedData).map((group) => ({
    year: group.year,
    month: group.month,
    averageNav: group.navSum / group.navCount,
    dates: group.dates,
  }));

  formattedData.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    } else {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return months.indexOf(a.month) - months.indexOf(b.month);
    }
  });

  return formattedData;
}

const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: "Total User",
      position: "left",
    },
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        font: {
          size: 12,
        },
      },

      backgroundColor: "blue",
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.dataset.label || "";
          if (label) {
            return `${label}: ${context.parsed.y}`;
          }
          return null;
        },
      },
    },
    intersectionPoints: {
      showPoints: true,
      pointRadius: 5,
      pointColor: "grey",
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
    },
  },
};

const intersectionPointsPlugin = {
  id: "intersectionPoints",
  afterDraw: (chart, args, options) => {
    if (options.showPoints) {
      const {
        ctx,
        chartArea: { top, right, bottom, left },
      } = chart;
      const { pointRadius, pointColor } = options;

      const currentData = chart.getDatasetMeta(0).data || [];
      const previousData = chart.getDatasetMeta(1).data || [];

      for (let i = 0; i < currentData.length - 1; i++) {
        const currentPointA = currentData[i];
        const currentPointB = currentData[i + 1];
        const previousPointA = previousData[i];
        const previousPointB = previousData[i + 1];

        const intersection = getIntersection(
          currentPointA,
          currentPointB,
          previousPointA,
          previousPointB
        );

        if (
          intersection &&
          isPointOnLine(intersection, currentPointA, currentPointB) &&
          isPointOnLine(intersection, previousPointA, previousPointB)
        ) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(intersection.x, intersection.y, pointRadius, 0, 2 * Math.PI);
          ctx.fillStyle = pointColor;
          ctx.fill();
          ctx.restore();
        }
      }
    }
  },
};

ChartJS.register(intersectionPointsPlugin);

const TotalUsers = ({ data = [] }) => {
  const [displayType, setDisplaytype] = useState("Months");
  const [selectedYear, setSelectedYear] = useState(2022);

  const years = Array.from({ length: 11 }, (_, index) => 2013 + index);

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  const formattedData = formatData(data);

  const currentYear = selectedYear;
  const currentYearData =
    displayType === "Months"
      ? formattedData.filter((entry) => entry.year === currentYear)
      : data
          .filter((entry) => new Date(entry.date).getFullYear() === currentYear)
          .reverse();
  const previousYearData =
    displayType === "Months"
      ? formattedData.filter((entry) => entry.year === currentYear - 1)
      : data
          .filter(
            (entry) => new Date(entry.date).getFullYear() === currentYear - 1
          )
          .reverse();

  const currentYearLabels =
    displayType === "Months"
      ? currentYearData.map((entry) => entry.month)
      : currentYearData.map((entry) => entry.date);
  const currentYearNav =
    displayType === "Months"
      ? currentYearData.map((entry) => entry.averageNav)
      : currentYearData.map((entry) => parseFloat(entry.nav));

  const previousYearNav =
    displayType === "Months"
      ? previousYearData.map((entry) => entry.averageNav)
      : previousYearData.map((entry) => parseFloat(entry.nav));

  const chartData = {
    labels: currentYearLabels,
    datasets: [
      {
        label: `${currentYear}`,
        borderColor: "grey",
        data: currentYearNav,
        fill: false,
        cubicInterpolationMode: "monotone",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 1.5,
      },
      {
        label: `${currentYear - 1}`,
        borderColor: "green",
        data: previousYearNav,
        fill: false,
        cubicInterpolationMode: "monotone",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 1.5,
        borderDash: [5, 5],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>Total Users</div>
        <div style={{ display: "flex", gap: 12 }}>
          <div>
            <label className={styles.labelText} htmlFor="yearSelect">
              Select current year:{" "}
            </label>
            <select
              className={styles.select}
              id="yearSelect"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button
            className={styles.button}
            onClick={() => {
              if (displayType === "Months") {
                setDisplaytype("Days");
              }
              if (displayType === "Days") {
                setDisplaytype("Months");
              }
            }}
          >
            {displayType}
          </button>
        </div>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default TotalUsers;
