import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";
import Card from "../../components/Card";
import { createChartJsExternalTooltip } from "../../utils";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const DEFAULT_LABELS = [
    "Maintenance",
    "Security",
    "Utilities",
    "Housekeeping",
    "Administration",
    "Others",
];
const DEFAULT_BUDGET_VALUES = [55000, 56000, 64000, 38000, 54000, 65000];
const DEFAULT_ACTUAL_VALUES = [63000, 48000, 51300, 28000, 42000, 35000];

const BudgetVsActuals = ({ data = {} }) => {
  const labels =
    Array.isArray(data?.labels) && data.labels.length > 0
      ? data.labels
      : DEFAULT_LABELS;
  const budgetValues =
    Array.isArray(data?.budgetValues) && data.budgetValues.length > 0
      ? data.budgetValues
      : DEFAULT_BUDGET_VALUES;
  const actualValues =
    Array.isArray(data?.actualValues) && data.actualValues.length > 0
      ? data.actualValues
      : DEFAULT_ACTUAL_VALUES;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Budget",
        data: budgetValues,
        backgroundColor: "#93C5FD",
        barThickness: 60,
      },
      {
        label: "Actual",
        data: actualValues,
        backgroundColor: "#3B82F6",
        barThickness: 60,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRot",
          padding: 20,
        },
      },
      tooltip: {
        enabled: false,
        external: createChartJsExternalTooltip({
          titleFormatter: (tooltip) => tooltip.title?.[0] || "",
          hideTitleForSingle: false,
          rowsFormatter: (tooltip) =>
            (tooltip.dataPoints || []).map((point) => ({
              label: point.dataset.label || point.label,
              value: `AED ${(Number(point.raw ?? 0) / 1000).toFixed(1)}K`,
              color: point.dataset.backgroundColor,
            })),
        }),
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B" },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#F1F5F9" },
        ticks: {
          color: "#64748B",
          callback: (val) => `${val / 1000}K`,
        },
      },
    },
  };

  return (
    <Card
      title="Budget vs Actuals"
      className="w-full h-[362px]"
      period={
        <OpenInNewOutlinedIcon className="h-5 w-5 text-[#884EA7] cursor-pointer" />
      }
      titleWeight="semi-bold"
    >
      <Bar data={chartData} options={options} />
    </Card>
  );
};

export default BudgetVsActuals;
