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
const DUMMY_LEVELS =
  // [
  //   { level: "L1", open_count: 3, in_progress_count: 0, closed_count: 0, total: 15 },
  //   { level: "L2", open_count: 3, in_progress_count: 2, closed_count: 6, total: 11 },
  //   { level: "L3", open_count: 2, in_progress_count: 1, closed_count: 4, total: 7 },
  // ];

  [
    {
      level: "L1",
      open_count: "1",
      in_progress_count: "0",
      closed_count: "0",
      total: 1,
    },
    {
      level: "L2",
      open_count: "0",
      in_progress_count: "0",
      closed_count: "0",
      total: 0,
    },
    {
      level: "L3",
      open_count: "0",
      in_progress_count: "0",
      closed_count: "0",
      total: 0,
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

    const spacer = levels.map(() => 1);

    const datasets = STATUS_CONFIG.map((status) => ({
      label: status.label,
      data: levels.map((item) => Number(item[status.key]) || 0),
      backgroundColor: status.color,
      barThickness: 44,
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
          boxWidth: 10,
          boxHeight: 10,
          filter: (item) => item.text !== "__spacer__",
        },
      },

      tooltip: {
        callbacks: {
          title: (items) => items[0]?.label || "",

          // ❌ Disable per-dataset labels
          label: () => null,

          // ✅ Render once per index
          afterBody: (items) => {
            const index = items[0]?.dataIndex;
            const item = levels[index];

            if (!item) return [];

            return [
              `Open: ${Number(item.open_count) || 0}`,
              `In Progress: ${Number(item.in_progress_count) || 0}`,
              `Closed: ${Number(item.closed_count) || 0}`,
            ];
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
