import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { createChartJsExternalTooltip } from "../../utils";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);


const prettyMonth = (shortLabel) => {
  const [mon, yy] = String(shortLabel).split(" ");
  const map = {
    Jan: "January", Feb: "February", Mar: "March", Apr: "April",
    May: "May", Jun: "June", Jul: "July", Aug: "August",
    Sep: "September", Oct: "October", Nov: "November", Dec: "December",
  };
  return `${map[mon] || mon} 20${yy}`;
};

const DEFAULT_LABELS = ["Jan 25", "Feb 25", "Mar 25", "Apr 25", "May 25"];
const DEFAULT_INCOME = [24, 27, 20, 26, 23];
const DEFAULT_EXPENDITURE = [4, 17, 8, 5, 16];

const IncomeExpenditure = ({ data, labels, moveIn, moveOut }) => {
  const resolvedLabels =
    Array.isArray(data?.labels) && data.labels.length > 0
      ? data.labels
      : Array.isArray(labels) && labels.length > 0
      ? labels
      : DEFAULT_LABELS;
  const incomeValues =
    Array.isArray(data?.moveIn) && data.moveIn.length > 0
      ? data.moveIn
      : Array.isArray(moveIn) && moveIn.length > 0
      ? moveIn
      : DEFAULT_INCOME;
  const expenditureValues =
    Array.isArray(data?.moveOut) && data.moveOut.length > 0
      ? data.moveOut
      : Array.isArray(moveOut) && moveOut.length > 0
      ? moveOut
      : DEFAULT_EXPENDITURE;

  const chartData = {
    labels: resolvedLabels,
    datasets: [
      {
        label: "Income",
        data: incomeValues,
        borderColor: "#10B981",
        backgroundColor: "rgba(16,185,129,0.15)",
        pointBackgroundColor: "#10B981",
        pointStyle: "rectRot",
        fill: false,
      },
      {
        label: "Expenditure",
        data: expenditureValues,
        borderColor: "#AB0000",
        backgroundColor: "rgba(124,58,237,0.15)",
        pointBackgroundColor: "#AB0000",
        pointStyle: "rectRot",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10,
          padding: 20
        },
      },
      tooltip: {
        enabled: false,
        external: createChartJsExternalTooltip({
          titleFormatter: (tooltip) =>
            tooltip.title?.[0] ? prettyMonth(tooltip.title[0]) : "",
          hideTitleForSingle: false,
        }),
      },
    },

    scales: {
      x: {
        grid: { color: "#F1F5F9" },
        ticks: { color: "#64748B" },
      },
      y: {
        beginAtZero: true,
        suggestedMax: 28,
        grid: { color: "#F1F5F9" },
        ticks: { color: "#64748B", stepSize: 4, precision: 0 },
      },
    },

    elements: {
      line: { borderWidth: 2, tension: 0 },
      point: { radius: 0, hoverRadius: 3, hitRadius: 10 },
    },
  };

  return (
  
        <Line data={chartData} options={options}  />
  );
};

export default IncomeExpenditure;
