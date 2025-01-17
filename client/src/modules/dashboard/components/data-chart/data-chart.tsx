"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./data-chart.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataChart = () => {
  const labels = [
    "10代未満",
    "10代",
    "20代",
    "30代",
    "40代",
    "50代",
    "60代",
    "70代",
    "80代",
    "90代以上",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "男性",
        data: [120, 150, 200, 200, 250, 280, 200, 80, 60, 0],
        backgroundColor: "rgb(255, 140, 0)",
        stack: "Stack 0",
      },
      {
        label: "女性",
        data: [50, 100, 250, 300, 200, 150, 150, 30, 20, 0],
        backgroundColor: "rgb(255, 180, 0)",
        stack: "Stack 0",
      },
      {
        label: "その他",
        data: [30, 80, 150, 200, 300, 150, 100, 20, 30, 0],
        backgroundColor: "rgb(255, 220, 180)",
        stack: "Stack 0",
      },
      {
        label: "回答なし",
        data: [20, 50, 100, 150, 100, 100, 50, 10, 10, 0],
        backgroundColor: "rgb(255, 235, 220)",
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        align: "start" as const,
        labels: {
          padding: 20,
          font: {
            size: 10,
          },
          generateLabels: function (chart: any) {
            const datasets = chart.data.datasets;
            return datasets.map((dataset: any, i: number) => ({
              text: dataset.label,
              fillStyle: dataset.backgroundColor,
              strokeStyle: dataset.backgroundColor,
              lineWidth: 0,
              hidden: !chart.isDatasetVisible(i),
              index: i,
              width: 8,
              height: 8,
            }));
          },
          boxWidth: 8, // Try a smaller value directly
          boxHeight: 8, // Try a smaller value directly
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: 'black',
        bodyColor: 'black',
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.raw}人`;
          },
        }
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            size: 8, // X-axis labels font size
          },
          rotation: 0, // Remove rotation
        },
      },
      y: {
        stacked: true,
        position: "left" as const,
        max: 1000,
        ticks: {
          stepSize: 100,
          font: {
            size: 12, // Y-axis labels font size
          },
        },
        grid: {
          color: "#DFDAD4",
          lineWidth: 0.3, 
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default DataChart;
