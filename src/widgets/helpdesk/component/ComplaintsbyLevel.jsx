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
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const STATUS_CONFIG = [
  {
    key: "closed_count",
    label: "Closed",
    color: "#12B981",
  },
  {
    key: "in_progress_count",
    label: "In Progress",
    color: "#F59D0D",
  },
  {
    key: "open_count",
    label: "Open",
    color: "#EF4444",
  },
];

const ComplaintsByLevelChart = ({ data = [] }) => {
  console.log(data,"data for complaint");
  const chartConfig = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return { labels: [], datasets: [] };
    }

    const labels = data.map((item) => item.level ?? "—");

    const maxTotal = Math.max(
      ...data.map((item) => Number(item.total || 0)),
      0
    );

    const spacer = data.map(() => 1);

    const datasets = STATUS_CONFIG.flatMap((status, index) => [
      {
        label: status.label,
        data: data.map((item) => Number(item[status.key] || 0)),
        backgroundColor: status.color,
        barThickness: 44,
      },
      ...(index < STATUS_CONFIG.length - 1
        ? [
            {
              label: "",
              data: spacer,
              backgroundColor: "transparent",
              barThickness: 44,
            },
          ]
        : []),
    ]);

    return {
      labels,
      datasets,
      maxTotal,
    };
  }, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10,
          pointStyle: "rectRot",
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            ctx.dataset.label
              ? `${ctx.dataset.label}: ${ctx.parsed.y}`
              : null,
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
        suggestedMax: Math.ceil(chartConfig.maxTotal * 1.2) || 5,
        ticks: {
          stepSize: Math.max(Math.ceil(chartConfig.maxTotal / 6), 1),
        },
      },
    },
  };

  return (
    <Card
      title="Complaints by Level"
      className="w-full h-[362px]"
      period={<OpenInNewOutlinedIcon className="text-[20px] text-[#884EA7]" />}
    >
      <Bar data={chartConfig} options={options} />
    </Card>
  );
};

export default ComplaintsByLevelChart;
