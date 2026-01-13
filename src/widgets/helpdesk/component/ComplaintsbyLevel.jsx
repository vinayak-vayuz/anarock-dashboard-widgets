import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const STATUS_CONFIG = [
  { key: "closed_count", label: "Closed", color: "#12B981" },
  { key: "in_progress_count", label: "In Progress", color: "#F59D0D" },
  { key: "open_count", label: "Open", color: "#EF4444" },
];

const toBoldNumber = (num) => {
  const map = {
    0: "𝟎",
    1: "𝟏",
    2: "𝟐",
    3: "𝟑",
    4: "𝟒",
    5: "𝟓",
    6: "𝟔",
    7: "𝟕",
    8: "𝟖",
    9: "𝟗",
  };

  return String(num)
    .split("")
    .map((d) => map[d] || d)
    .join("");
};

const DUMMY_LEVELS = [
  {
    level: "Level 1",
    open_count: 3,
    in_progress_count: 4,
    closed_count: 5,
    total: 12,
  },
  {
    level: "Level 2",
    open_count: 1,
    in_progress_count: 1,
    closed_count: 1,
    total: 3,
  },
  {
    level: "Level 3",
    open_count: 5,
    in_progress_count: 2,
    closed_count: 3,
    total: 10,
  },
];

const Card = ({
  title,
  children,
  className = "",
  titleWeight = "semi-bold",
  titleClassName = "",
}) => (
  <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
    <h2
      className={`mb-4 ${
        titleWeight === "semi-bold" ? "font-semibold" : "font-bold"
      } ${titleClassName}`}
    >
      {title}
    </h2>
    {children}
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;

  const TOOLTIP_CONFIG = [
    { key: "open_count", label: "Open", color: "#EF4444" },
    { key: "in_progress_count", label: "In Progress", color: "#F59D0D" },
    { key: "closed_count", label: "Closed", color: "#12B981" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0B0B0B",
        padding: "14px 40px 14px 18px",
        borderRadius: "10px",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          color: "#ffffff",
          fontSize: "12px",
          fontWeight: "900",
          marginBottom: "10px",
        }}
      >
        {label}
      </div>
      {TOOLTIP_CONFIG.map((status, idx) => {
        const value = payload[0]?.payload[status.key] || 0;
        const boldValue = toBoldNumber(value);

        return (
          <div
            key={status.key}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: idx < TOOLTIP_CONFIG.length - 1 ? "8px" : "0",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: status.color,
                transform: "rotate(45deg)",
                marginRight: "8px",
              }}
            />
            <span style={{ color: "D1D3D4", minWidth: "100px" }}>
              {status.label}
            </span>
            <span style={{ marginLeft: "auto", fontWeight: "700" }}>
              {boldValue}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const CustomLegend = () => {
  const LEGEND_ORDER = [
    { label: "Open", color: "#EF4444" },
    { label: "In Progress", color: "#F59D0D" },
    { label: "Closed", color: "#12B981" },
  ];

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
    >
      {LEGEND_ORDER.map((item) => (
        <div
          key={item.label}
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: item.color,
              transform: "rotate(45deg)",
            }}
          />
          <span style={{ fontSize: "14px" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const ComplaintsByLevelChart = ({ data }) => {
  const levels = useMemo(() => {
    const isValidData =
      Array.isArray(data?.complaints_by_level) &&
      data.complaints_by_level.some((l) => Number(l.total) > 0);

    const rawLevels = isValidData ? data.complaints_by_level : DUMMY_LEVELS;

    return rawLevels.map((item) => ({
      level: item.level || "—",
      open_count: Number(item.open_count) || 0,
      in_progress_count: Number(item.in_progress_count) || 0,
      closed_count: Number(item.closed_count) || 0,
      total: Number(item.total) || 0,
    }));
  }, [data]);

  const maxTotal = useMemo(() => {
    return Math.max(...levels.map((item) => item.total), 5);
  }, [levels]);

  const yAxisMax = Math.ceil(maxTotal * 1.2);
  const tickCount = 6;
  const stepSize = Math.max(Math.ceil(maxTotal / tickCount), 1);

  return (
    <Card
      title="Complaints by Level"
      className="w-full h-[362px]"
      titleWeight="semi-bold"
      titleClassName="!text-[20px] !leading-[24px]"
    >
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={levels}
          margin={{ top: 5, right: -25, left: -30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="0" vertical={false} />
          <XAxis dataKey="level" />
          <YAxis
            domain={[0, yAxisMax]}
            ticks={Array.from(
              { length: tickCount + 1 },
              (_, i) => i * stepSize
            )}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />

          <Bar
            dataKey="open_count"
            stackId="a"
            fill="#EF4444"
            barSize={44}
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="in_progress_count"
            stackId="a"
            fill="#F59D0D"
            barSize={44}
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="closed_count"
            stackId="a"
            fill="#12B981"
            barSize={44}
            radius={[0, 0, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      <CustomLegend />
    </Card>
  );
};

export default ComplaintsByLevelChart;
