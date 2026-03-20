import React, { useRef, useState } from "react";
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
import Card from "../../components/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const DEFAULT_LABELS = [
  "10 AM",
  "12 PM",
  "2 PM",
  "4 PM",
  "6 PM",
  "8 PM",
  "10 PM",
];

const DEFAULT_SERIES = {
  guest: [9, 5, 12, 7, 3, 6, 4],
  cab: [15, 12, 10, 14, 7, 12, 8],
  delivery: [22, 18, 16, 20, 22, 14, 17],
  service: [13, 12, 8, 9, 5, 10, 7],
};

const LEGEND_ITEMS = [
  { key: "Guest", datasetIndex: 0, color: "#EF4444" },
  { key: "Cab", datasetIndex: 1, color: "#7C3AED" },
  { key: "Delivery", datasetIndex: 2, color: "#10B981" },
  { key: "Service", datasetIndex: 3, color: "#F59E0B" },
];

const DiamondIcon = ({ color, size = 12 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    style={{ display: "block", flexShrink: 0 }}
  >
    <rect
      x="1"
      y="1"
      width="10"
      height="10"
      rx="0"
      fill={color}
      transform="rotate(45 6 6)"
    />
  </svg>
);

const CustomLegend = ({ chartRef }) => {
  const [hiddenMap, setHiddenMap] = useState({});

  const handleClick = (datasetIndex) => {
    const chart = chartRef.current;
    if (!chart) return;
    const meta = chart.getDatasetMeta(datasetIndex);
    const isCurrentlyHidden = !!meta.hidden;
    meta.hidden = !isCurrentlyHidden;
    chart.update();
    setHiddenMap((prev) => ({ ...prev, [datasetIndex]: !isCurrentlyHidden }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        marginTop: "12px",
        paddingBottom: "16px",
        flexWrap: "wrap",
      }}
    >
      {LEGEND_ITEMS.map(({ key, datasetIndex, color }) => {
        const isHidden = !!hiddenMap[datasetIndex];
        return (
          <div
            key={key}
            onClick={() => handleClick(datasetIndex)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              userSelect: "none",
              opacity: isHidden ? 0.45 : 1,
              transition: "opacity 0.2s ease",
            }}
          >
            <DiamondIcon color={color} size={12} />
            <span
              style={{
                fontSize: "13px",
                color: "#64748B",
                fontWeight: 400,
                lineHeight: 1,
                textDecoration: isHidden ? "line-through" : "none",
                transition: "text-decoration 0.15s ease",
              }}
            >
              {key}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const HourlyTrafficFlow = ({ data }) => {
  const chartRef = useRef(null);

  const labels =
    Array.isArray(data?.labels) && data.labels.length > 0
      ? data.labels
      : DEFAULT_LABELS;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Guest",
        data:
          Array.isArray(data?.guest) && data.guest.length > 0
            ? data.guest
            : DEFAULT_SERIES.guest,
        borderColor: "#EF4444",
        backgroundColor: "rgba(239,68,68,0.15)",
        pointBackgroundColor: "#EF4444",
        pointStyle: "rectRot",
        fill: false,
      },
      {
        label: "Cab",
        data:
          Array.isArray(data?.cab) && data.cab.length > 0
            ? data.cab
            : DEFAULT_SERIES.cab,
        borderColor: "#7C3AED",
        backgroundColor: "rgba(124,58,237,0.15)",
        pointBackgroundColor: "#7C3AED",
        pointStyle: "rectRot",
        fill: false,
      },
      {
        label: "Delivery",
        data:
          Array.isArray(data?.delivery) && data.delivery.length > 0
            ? data.delivery
            : DEFAULT_SERIES.delivery,
        borderColor: "#10B981",
        backgroundColor: "rgba(16,185,129,0.15)",
        pointBackgroundColor: "#10B981",
        pointStyle: "rectRot",
        fill: false,
      },
      {
        label: "Service",
        data:
          Array.isArray(data?.service) && data.service.length > 0
            ? data.service
            : DEFAULT_SERIES.service,
        borderColor: "#F59E0B",
        backgroundColor: "rgba(245,158,11,0.15)",
        pointBackgroundColor: "#F59E0B",
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
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0F172A",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        displayColors: false,
        padding: 12,
        caretSize: 0,
        callbacks: {
          title: (items) => items[0].label,
          label: (ctx) => `${ctx.dataset.label}  ${ctx.parsed.y}`,
        },
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
    <Card title="Hourly Traffic Flow" className="w-full h-[362px]">
      {/* Chart takes remaining height, leaving space for legend + its bottom padding */}
      <div style={{ height: "calc(100% - 56px)", width: "100%" }}>
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
      <CustomLegend chartRef={chartRef} />
    </Card>
  );
};

export default HourlyTrafficFlow;
