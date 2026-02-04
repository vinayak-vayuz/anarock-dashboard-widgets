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
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Card from "../../components/Card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function TicketEscalation() {
  const data = {
    labels: ["L1", "L2", "L3"],
   datasets: [
  {
    label: "Open",
    data: [55, 45, 58],
    backgroundColor: "#3B82F6",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    barThickness: 38,
    stack: "tickets",
  },
  {
    label: "In Progress",
    data: [22, 25, 23],
    backgroundColor: "#F59E0B",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    barThickness: 38,
    stack: "tickets",
  },
  {
    label: "On-Hold",
    data: [15, 18, 14],
    backgroundColor: "#64748B",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    barThickness: 38,
    stack: "tickets",
  },
  {
    label: "Cancelled",
    data: [6, 5, 6],
    backgroundColor: "#EF4444",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    barThickness: 38,
    stack: "tickets",
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
          color: "#64748B",
        },
      },
      tooltip: {
        backgroundColor: "#0F172A",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#64748B",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          color: "#E5E7EB",
          borderDash: [4, 4],
          drawBorder: false,
        },
        ticks: {
          color: "#64748B",
        },
      },
    },
  };

  return (
    <Card
      className="h-[267px]"
      title={
        <div className="flex items-center gap-2">
          <TrendingUpOutlinedIcon className="text-blue-500" />
          <span className="font-semibold">Ticket Escalation Levels</span>
        </div>
      }
      period={<span className="text-sm text-gray-400">Today</span>}
    >
      <div className="h-full">
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
}

export default TicketEscalation;
