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
  { label: "Current Month", value: 13000, units: 18 },
  { label: "1-3 Months", value: 9400, units: 12 },
  { label: "3-6 Months", value: 8800, units: 18 },
  { label: "6+ Months", value: 7200, units: 6 },
];

const DuesAgeing = ({ data }) => {
  const items =
    Array.isArray(data?.items) && data.items.length > 0
      ? data.items
      : Array.isArray(data) && data.length > 0
        ? data
        : DEFAULT_ITEMS;
  const labels = items.map((item) => item.label);
  const values = items.map((item) => Number(item.value ?? 0));
  const units = items.map((item) => Number(item.units ?? 0));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Due",
        data: values,
        backgroundColor: "#EF4444",
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
                label: "Due",
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
      title="Dues Ageing"
      className="w-full h-[362px]"
      period={
        <OpenInNewOutlinedIcon className="h-5 w-5 text-[#884EA7] cursor-pointer" />
      }
      titleWeight="semi-bold"
    >
      <div className="grid grid-cols-4 md:grid-cols-4 gap-[12px] h-[48px]">
        {labels.map((label, i) => (
          <div key={label} className="p-[8px] rounded-[8px] bg-slate-50">
            <div className="flex justify-between items-start">
              <div className="font-medium leading-[16px] !text-[12px] rounded">
                {label}
              </div>
              <div className="text-right">
                <div className="text-red-600 font-medium leading-[16px] !text-[12px]">
                  AED {(values[i] / 1000).toFixed(1)}K
                </div>
                <div className=" text-gray-500 leading-[14px] text-[10px]">
                  {units[i]} Units
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[192px]">
        <Bar data={chartData} options={options} />
      </div>
    </Card>
  );
};

export default DuesAgeing;
