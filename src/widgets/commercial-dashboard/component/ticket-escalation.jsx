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
import { FaArrowUpShortWide } from "react-icons/fa6";
import Card from "../../components/Card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function TicketEscalation({ data = [] }) {
  const staticData = [
    {
      level: "L1",
      open_count: 55,
      in_progress_count: 22,
      on_hold: 15,
      closed_count: 6,
    },
    {
      level: "L2",
      open_count: 45,
      in_progress_count: 25,
      on_hold: 18,
      closed_count: 5,
    },
    {
      level: "L3",
      open_count: 58,
      in_progress_count: 23,
      on_hold: 14,
      closed_count: 6,
    },
  ];

  const finalData = data.length > 0 ? data : staticData;

  const labels = [];
  const openData = [];
  const inProgressData = [];
  const onHoldData = [];
  const closedData = [];

  for (let i = 0; i < finalData.length; i++) {
    labels.push(finalData[i].level);

    openData.push(Number(finalData[i].open_count));
    inProgressData.push(Number(finalData[i].in_progress_count));
    onHoldData.push(Number(finalData[i].on_hold));
    closedData.push(Number(finalData[i].closed_count));
  }

  const chartData = {
    labels,
   datasets: [
  {
    label: "Open",
    data: openData,
    backgroundColor: "#3B82F6",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    barThickness: 38,
    stack: "tickets",
  },
  {
    label: "In Progress",
    data: inProgressData,
    backgroundColor: "#F59E0B",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    barThickness: 38,
    stack: "tickets",
  },
  {
    label: "On-Hold",
    data: onHoldData,
    backgroundColor: "#64748B",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    barThickness: 38,
    stack: "tickets",
  },
  {
    label: "Closed",
    data: closedData,
    backgroundColor: "#10B981",
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
          display: false,   
          color: "#E5E7EB",
          borderDash: [4, 4],
          drawBorder: false,
        },
        ticks: {
          color: "#64748B",
        stepSize: 1,
        precision: 0,
        callback: (value) => Math.round(value),
        },
      },
    },
  };

  return (
    <Card
      className="h-[267px]"
      title={
        <div className="flex items-center gap-2">
          <FaArrowUpShortWide className="!text-[20px] text-[#3C81F6]" />
          <div className="font-medium text-[#121212]">Ticket Escalation Levels</div>
        </div>
      }
      period={<div className="text-[12px] leading-[16px] text-[#64748B]">Today</div>}
    >
      <div className="h-full">
        <Bar data={chartData} options={options} />
      </div>
    </Card>
  );
}

export default TicketEscalation;
