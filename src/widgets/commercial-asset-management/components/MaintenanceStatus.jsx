import React, { useState } from "react";
import Card from "../../components/CardNoLogo";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const MaintenanceStatus = ({ data }) => {
  const [hiddenBars, setHiddenBars] = useState({});

  const dummyData = [
    { name: "Lifts", Cancelled: 55, Closed: 45, Open: 50, OnHold: 20, InProgress: 10 },
    { name: "Fire Systems", Cancelled: 15, Closed: 45, Open: 15, OnHold: 8, InProgress: 5 },
    { name: "Generators", Cancelled: 12, Closed: 45, Open: 75, OnHold: 18, InProgress: 7 },
    { name: "HVAC", Cancelled: 45, Closed: 80, Open: 30, OnHold: 22, InProgress: 12 },
    { name: "Others", Cancelled: 18, Closed: 18, Open: 45, OnHold: 9, InProgress: 4 },
  ];

const chartData = React.useMemo(() => {
  // Case 1: data not provided → show dummy
  if (!data) return dummyData;

  // Case 2: data provided but empty → show empty
  if (Array.isArray(data) && data.length === 0) return [];

  // Case 3: actual data
  return data;
}, [data]);
  const handleLegendClick = (e) => {
    const { dataKey } = e;
    setHiddenBars((prev) => ({
      ...prev,
      [dataKey]: !prev[dataKey],
    }));
  };

  if (Array.isArray(data) && data.length === 0) {
  return (
    <Card title="Maintenance Status" titleWeight="semi-bold" className="h-full">
      <div className="flex items-center justify-center h-[260px] text-[#94A3B8]">
        No Data Found
      </div>
    </Card>
  );
}
  return (
  <Card title="Maintenance Status" titleWeight="semi-bold" className="h-full">
  <div className="w-full h-[260px] flex items-center justify-center">
    {Array.isArray(data) && data.length === 0 ? (
      <div className="text-[#94A3B8] text-sm">No Data Found</div>
    ) : (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          barSize={50}
          margin={{ top: 0, right: 0, left: -30, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="name"
            tick={{ fill: "#64748B", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#64748B", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "rgba(148, 163, 184, 0.12)" }}
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #E2E8F0",
              fontSize: "12px",
            }}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="square"
            onClick={handleLegendClick}
            formatter={(value) => (
              <div
                style={{
                  color: hiddenBars[value] ? "#CBD5E1" : "#64748B",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                {value}
              </div>
            )}
            wrapperStyle={{ paddingTop: "18px" }}
          />

          <Bar dataKey="Open" stackId="a" fill="#3B82F6" hide={hiddenBars["Open"]} />
          <Bar dataKey="Closed" stackId="a" fill="#10B981" hide={hiddenBars["Closed"]} />
          <Bar dataKey="Cancelled" stackId="a" fill="#B91C1C" hide={hiddenBars["Cancelled"]} />
          <Bar dataKey="OnHold" stackId="a" fill="#64748B" hide={hiddenBars["OnHold"]} />
          <Bar dataKey="InProgress" stackId="a" fill="#F59E0B" hide={hiddenBars["InProgress"]} />
        </BarChart>
      </ResponsiveContainer>
    )}
  </div>
</Card>
  );
};

export default MaintenanceStatus;