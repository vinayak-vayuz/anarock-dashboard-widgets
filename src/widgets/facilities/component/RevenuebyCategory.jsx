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

const DEFAULT_ITEMS = [
  { label: "Gym", value: 13000, units: 18 },
  { label: "Parking", value: 9400, units: 12 },
  { label: "Swimming Pool", value: 8800, units: 18 },
  { label: "Community Hall", value: 7200, units: 6 },
  { label: "Tennis Court", value: 6000, units: 10 },
];

const RevenuebyCategory = ({ data }) => {
  const items =
    Array.isArray(data) && data.length > 0 ? data : DEFAULT_ITEMS;
  const labels = items.map((item) => item.label);
  const values = items.map((item) => Number(item.value ?? 0));
  const units = items.map((item) => Number(item.units ?? 0));
  const chartData = {
    labels,
    datasets: [
      {
        label: "Due",
        data: values,
        backgroundColor: "#8B5CF6",
        barThickness: 60,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: createChartJsExternalTooltip({
          titleFormatter: (tooltip) => tooltip.title?.[0] || "",
          hideTitleForSingle: false,
          rowsFormatter: (tooltip) => {
            const point = tooltip.dataPoints?.[0];
            if (!point) return [];

            return [
              {
                label: "Revenue",
                value: `AED ${(Number(point.raw ?? 0) / 1000).toFixed(1)}K`,
                color: point.dataset.backgroundColor,
              },
              {
                label: "Units Count",
                value: `${units[point.dataIndex] ?? 0}`,
                color: point.dataset.backgroundColor,
              },
            ];
          },
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
      title="Revenue by Category"
      className="w-full h-[362px]"
      // period={
      //   <OpenInNewOutlinedIcon className="h-5 w-5 text-[#884EA7] cursor-pointer" />
      // }
      titleWeight="semi-bold"
    >
      <Bar data={chartData} options={options} />
    </Card>
  );
};

export default RevenuebyCategory;
