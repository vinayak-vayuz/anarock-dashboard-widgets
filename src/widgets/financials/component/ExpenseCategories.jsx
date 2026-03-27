import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";
import Card from "../../components/Card";
import { createChartJsExternalTooltip } from "../../utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const DEFAULT_ITEMS = [
  { label: "Maintenance", value: 450000, color: "#08B6D4" },
  { label: "Utilities", value: 320000, color: "#8B5CF6" },
  { label: "Security", value: 280000, color: "#EF4444" },
  { label: "Administration", value: 180000, color: "#F69E0A" },
  { label: "Others", value: 120000, color: "#12B981" },
];

const ExpenseCategories = ({ data }) => {
  const items =
    Array.isArray(data?.items) && data.items.length > 0
      ? data.items
      : Array.isArray(data) && data.length > 0
      ? data
      : DEFAULT_ITEMS;
  const labels = items.map((item) => item.label);
  const values = items.map((item) => Number(item.value ?? 0));
  const colors = items.map((item) => item.color);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: values,
        backgroundColor: colors,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        cutout: "70%",
      },
    ],
  };

  const total = values.reduce((sum, val) => sum + val, 0);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: createChartJsExternalTooltip({
          rowsFormatter: (tooltip) =>
            (tooltip.dataPoints || []).map((point) => ({
              label: point.label,
              value: `AED ${point.formattedValue}`,
              color: Array.isArray(point.dataset.backgroundColor)
                ? point.dataset.backgroundColor[point.dataIndex]
                : point.dataset.backgroundColor,
            })),
        }),
      },
    },
  };

  return (
    <Card
      title="Expense Categories"
      className="w-full h-[523px]"
      period={
        <OpenInNewOutlinedIcon className="h-5 w-5 text-[#884EA7] cursor-pointer" />
      }
      titleWeight="semi-bold"
    >
      <div className="relative h-[259px] flex justify-center items-center">
        <Doughnut data={chartData} options={options} />

        <div className="absolute text-center">
          <div className="!text-[24px] font-medium leading-[28px] text-[#121212]">
            AED {(total / 1000000).toFixed(2)}M
          </div>
          <div className="text-[#121212] leading-[18px] text-[14px]">
            Total Expenses
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {labels.map((label, i) => (
          <div
            key={label}
            className="flex justify-between items-center text-[14px] pb-2"
          >
            <div className="flex items-center gap-[8px] !text-[12px] leading-[16px] text-[#64748B]">
              <div
                className="w-[7px] h-[7px] rotate-45"
                style={{ backgroundColor: chartData.datasets[0].backgroundColor[i] }}
              ></div>
              {label}
            </div>
            <div className="leading-[16px] !text-[12px] text-[#64748B]">
              AED {(values[i] / 1000).toFixed(0)}K
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ExpenseCategories;
