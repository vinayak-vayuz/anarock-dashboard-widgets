import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Card from "../../components/Card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const EmployeeFootfall = () => {
  const labels = ["HP", "Adobe", "Anarock", "Swiggy", "Infosys", "Zepto"];

  const data = {
    labels,
    datasets: [
      {
        data: [2000, 1700, 1500, 1200, 900, 800],
        backgroundColor: [
          "#329DFF",
          "#EF4645",
          "#8A2E64",
          "#F69E0A",
          "#A2BB40",
          "#8B5CF6",
        ],
        barThickness: 34,
        // borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0F172A",
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
        callbacks: {
          label: (ctx) => `Employees: ${ctx.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B", font: { size: 12 } },
      },
     y: {
  beginAtZero: true,
  max: 2000,
  ticks: {
    stepSize: 500,
    color: "#64748B",
  },
  grid: {
    color: "#E5E7EB",
    borderDash: [4, 4],
    drawBorder: false,
  },

      },
    },
  };

  return (
    <Card
      className="w-full h-[238px]"
      title={
        <div className="flex items-center gap-2">
          <WorkOutlineIcon className="!text-[20px] text-[#8B5CF6]" />
          <div className="font-medium text-[#121212]">Employee Footfall</div>
        </div>
      }
      period={<span className="text-[12px] leading-[16px] text-[#64748B]">Today</span>}
    >
      <div className="mb-4 mt-2">
        <div className="text-[12px] leading-[16px] text-[#64748B]">Employees Inside</div>
        <div className="text-[20px] leading-[24px] font-medium text-[#1FA05B]">7,500</div>
      </div>

      <div className="h-[97px]">
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};

export default EmployeeFootfall;
