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
  min: 0,
  max: 2000,
  ticks: {
    stepSize: 500,
    color: "#64748B",
    callback: (value) => value,
  },
  grid: {
    display: false,  
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
        title="Employee Footfall (Static Data)"
            period="Today"
      icon={
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-briefcase-business text-blue-500"
    style={{ color: "#8B5CF6"}}
  >
    <path d="M12 12h.01" />
    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
}
     >
  <div
  style={{
    marginBottom: "16px",
    marginTop: "8px",
  }}
>
        <div className="text-[12px] leading-[16px] text-[#64748B]">Employees Inside</div>
        <div className="text-[20px] leading-[24px] font-medium text-[#1FA05B]">7,500</div>
      </div>

      <div className="h-[110px]">
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};

export default EmployeeFootfall;
