import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Card from "../../components/Card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const STATUS_CONFIG = [
  { key: "closed_count", label: "Closed", color: "#12B981" },
  { key: "in_progress_count", label: "In Progress", color: "#F59D0D" },
  { key: "open_count", label: "Open", color: "#EF4444" },
];

// 🔹 Dummy fallback data
const DUMMY_LEVELS = [
  {
    level: "L1",
    open_count: "3",
    in_progress_count: "4",
    closed_count: "5",
    total: 12,
  },
  {
    level: "L2",
    open_count: "1",
    in_progress_count: "1",
    closed_count: "1",
    total: 3,
  },
  {
    level: "L3",
    open_count: "5",
    in_progress_count: "2",
    closed_count: "3",
    total: 10,
  },
];

const ComplaintsByLevelChart = ({ data }) => {
  // ✅ strict fallback condition
  const levels =
    Array.isArray(data?.complaints_by_level) &&
    data.complaints_by_level.some((l) => Number(l.total) > 0)
      ? data.complaints_by_level
      : DUMMY_LEVELS;

  const chartConfig = useMemo(() => {
    const labels = levels.map((item) => item.level || "—");

    const maxTotal = Math.max(
      ...levels.map((item) => Number(item.total) || 0),
      5,
    );

    const datasets = STATUS_CONFIG.map((status, index) => ({
      label: status.label,
      data: levels.map((item) => Number(item[status.key]) || 0),
      backgroundColor: status.color,
      barThickness: 44,
      stack: "stack1",

      // ✅ THIS CREATES THE GAP
      borderColor: "#ffffff", // chart background
      borderWidth: {
        top: index === STATUS_CONFIG.length - 1 ? 0 : 1.5,
        bottom: index === 0 ? 0 : 2,
      },

      borderSkipped: false,
    }));

    return { labels, datasets, maxTotal };
  }, [levels]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRot", // ✅ This creates the diamond/rhombus shape
          boxWidth: 10,
          boxHeight: 10,
          padding: 15,
          font: {
            size: 14,
          },
        },
      },

      tooltip: {
        backgroundColor: "#000000",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        usePointStyle: true,

        callbacks: {
          title: (items) => items[0]?.label || "",

          // ✅ THIS makes the tooltip marker rectRot
          labelPointStyle: () => ({
            pointStyle: "rectRot",
            rotation: 90,
          }),

          label: (context) => {
            const dataIndex = context.dataIndex;
            const item = levels[dataIndex];
            const status = STATUS_CONFIG[context.datasetIndex];

            if (!item || !status) return "";

            const value = Number(item[status.key]) || 0;
            return `${status.label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        suggestedMax: Math.ceil(chartConfig.maxTotal * 1.2),
        ticks: {
          stepSize: Math.max(Math.ceil(chartConfig.maxTotal / 6), 1),
        },
      },
    },
  };

  return (
    <Card title="Complaints by Level" className="w-full h-[362px]">
      <Bar data={chartConfig} options={options} />
    </Card>
  );
};

export default ComplaintsByLevelChart;
