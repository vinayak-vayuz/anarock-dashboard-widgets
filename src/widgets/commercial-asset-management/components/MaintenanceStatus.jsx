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

const MaintenanceStatus = () => {
  const [hiddenBars, setHiddenBars] = useState({});

  const data =  [
      { name: "Lifts", Missed: 55, Completed: 45, Scheduled: 50 },
      { name: "Fire Systems", Missed: 15, Completed: 45, Scheduled: 15 },
      { name: "Generators", Missed: 12, Completed: 45, Scheduled: 75 },
      { name: "HVAC", Missed: 45, Completed: 80, Scheduled: 30 },
      { name: "Others", Missed: 18, Completed: 18, Scheduled: 45 },
    ]

  const handleLegendClick = (e) => {
    const { dataKey } = e;
    setHiddenBars((prev) => ({
      ...prev,
      [dataKey]: !prev[dataKey],
    }));
  };

  return (
    <Card title="Maintenance Status" titleWeight="semi-bold" className="h-full">
      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
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
                <span
                  style={{
                    color: hiddenBars[value] ? "#CBD5E1" : "#64748B",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  {value}
                </span>
              )}
              wrapperStyle={{
                paddingTop: "18px",
              }}
            />

            <Bar
              dataKey="Scheduled"
              stackId="a"
              fill="#3B82F6"
              hide={hiddenBars["Scheduled"]}
            />
            <Bar
              dataKey="Completed"
              stackId="a"
              fill="#10B981"
              hide={hiddenBars["Completed"]}
            />
            <Bar
              dataKey="Missed"
              stackId="a"
              fill="#B91C1C"
              hide={hiddenBars["Missed"]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MaintenanceStatus;