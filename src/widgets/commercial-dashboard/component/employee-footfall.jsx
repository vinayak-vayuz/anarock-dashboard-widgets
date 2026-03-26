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
import { BriefcaseBusiness } from "lucide-react";
import EmptyState from "../../utils/EmptyState";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const EmployeeFootfall = ({ data: apiData }) => {
  const hasApiData = apiData !== undefined && apiData !== null;
  const employeeList = apiData?.employee_data;

  // ✅ fallback to static if no data passed
  const staticLabels = ["HP", "Adobe", "Anarock", "Swiggy", "Infosys", "Zepto"];
  const staticValues = [2000, 1700, 1500, 1200, 900, 800];

  // ✅ dynamic extraction (for-loop as per your rule)
  const labels = [];
  const values = [];

  // ✅ FIXED LOGIC
  if (hasApiData) {
    if (employeeList && employeeList.length > 0) {
      for (let i = 0; i < employeeList.length; i++) {
        labels.push(employeeList[i].name);
        values.push(employeeList[i].employees);
      }
    }
  } else {
    // ONLY fallback when NO API DATA
    for (let i = 0; i < staticLabels.length; i++) {
      labels.push(staticLabels[i]);
      values.push(staticValues[i]);
    }
  }

  // ✅ EMPTY CHECK (correct)
  let isAllZero = false;

  if (hasApiData) {
    if (!employeeList || employeeList.length === 0) {
      isAllZero = true;
    } else {
      isAllZero = true;

      for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].employees !== 0) {
          isAllZero = false;
          break;
        }
      }
    }
  }

  // ✅ dynamic max calculation
  let maxValue = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > maxValue) {
      maxValue = values[i];
    }
  }

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [],
        barThickness: 34,
        // borderRadius: 6,
      },
    ],
  };

  // ✅ add colors dynamically
  for (let i = 0; i < values.length; i++) {
    data.datasets[0].backgroundColor.push("#3C81F6");
  }

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
        max: maxValue > 0 ? maxValue + 5 : 2000,
        ticks: {
          stepSize:
            maxValue > 0 ? Math.ceil((maxValue + 5) / 5) : 500,
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

  // ✅ EARLY RETURN → ONLY EmptyState (no count, no chart)
  if (hasApiData && isAllZero) {
    return (
      <Card
        className="w-full h-[238px]"
        title="Employee Footfall"
        period="Today"
        icon={<BriefcaseBusiness className="!text-[24px] text-[#8B5CF6]" />}
      >
        <div className="h-full flex items-center justify-center mt-[-20px]">
          <EmptyState
            title="No Employee footfall Found"
            description="Catch up all the data. Change the date range to see the data."
          />
        </div>
      </Card>
    );
  }

  return (
    <Card
      className="w-full h-[238px]"
      title="Employee Footfall"
      period="Today"
      icon={<BriefcaseBusiness className="!text-[24px] text-[#8B5CF6]" />}
    >
      <div className="mb-[10px] mt-[8px] flex flex-col gap-[4px]!">
        <div className="text-[12px] leading-[16px] text-[#64748B]">
          Employees Inside
        </div>
        <div className="text-[20px] leading-[24px] font-medium text-[#3C81F6]">
          {hasApiData
            ? apiData.total_employees
            : 7500}
        </div>
      </div>

      <div className="h-[110px]">
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};

export default EmployeeFootfall;