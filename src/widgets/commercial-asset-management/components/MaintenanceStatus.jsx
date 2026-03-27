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
import EmptyState from "../../utils/EmptyState";
import { CommercialCustomTooltip } from "../../utils";
import FixTooltip from "../../utils/Tooltip";
const MaintenanceStatus = ({ data , title }) => {
  const [hiddenBars, setHiddenBars] = useState({});

  const dummyData = [
    {
      name: "Lifts",
      Cancelled: 55,
      Closed: 45,
      Open: 50,
      OnHold: 20,
      InProgress: 10,
    },
    {
      name: "Fire Systems",
      Cancelled: 15,
      Closed: 45,
      Open: 15,
      OnHold: 8,
      InProgress: 5,
    },
    {
      name: "Generators",
      Cancelled: 12,
      Closed: 45,
      Open: 75,
      OnHold: 18,
      InProgress: 7,
    },
    {
      name: "HVAC",
      Cancelled: 45,
      Closed: 80,
      Open: 30,
      OnHold: 22,
      InProgress: 12,
    },
    {
      name: "Others",
      Cancelled: 18,
      Closed: 18,
      Open: 45,
      OnHold: 9,
      InProgress: 4,
    },
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
      <Card
        title={title || "Maintenance Status"}
        titleWeight="semi-bold"
        className="h-full"
      >
        <div className="w-full h-[260px] flex items-center justify-center">
          <EmptyState
            title="No Maintenance Assets Status Found"
            description="Catch up all the data. Change the date range to see the data."
          />
        </div>
      </Card>
    );
  }
  return (
    <Card title={title || "Maintenance Status"}  titleWeight="semi-bold" className="h-full">
      <div className="w-full h-[260px] flex items-center justify-center">
        {Array.isArray(data) && data.length === 0 ? (
          <div className="text-[#94A3B8] text-sm">No Data Found</div>
        ) : (
          <div className="relative w-full h-[297px] mt-[20px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                barSize={54}
                barCategoryGap="40%"
                margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />

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
                  allowDecimals={false}
                />

              <Tooltip
  cursor={{ fill: "rgba(148, 163, 184, 0.12)" }}
  allowEscapeViewBox={{ x: true, y: true }}
  content={(props) => {
    if (!props.active || !props.payload || !props.payload.length) return null;

    return (
      <FixTooltip {...props} data={chartData}>
        <div
          className="bg-black rounded-[10px] px-[14px] py-[10px] text-[12px] text-white"
        >
          <div className="mb-[6px] font-semibold">
            {props.label}
          </div>

          {props.payload.map((item, index) => {
            const color = item.color || item.fill || "#fff";

            return (
              <div
                key={index}
                className="flex items-center gap-[6px]"
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: color }}
                />

                <span className="text-[#D1D3D4]">
                  {item.name}
                </span>

                <span className="text-white font-semibold">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </FixTooltip>
    );
  }}
/>
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  onClick={handleLegendClick}
                  content={({ payload }) => (
                    <div className="flex items-center justify-center gap-[16px] pt-4 flex-wrap">
                      {payload.map((entry, index) => (
                        <div
                          key={index}
                          onClick={() =>
                            handleLegendClick({ dataKey: entry.dataKey })
                          }
                          className="flex items-center gap-[8px] cursor-pointer"
                        >
                          <div
                            style={{
                              width: "16px",
                              height: "8px",
                              backgroundColor: hiddenBars[entry.dataKey]
                                ? "#CBD5E1"
                                : entry.color,
                              // borderRadius: "2px",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "12px",
                              color: hiddenBars[entry.dataKey]
                                ? "#CBD5E1"
                                : "#64748B",
                            }}
                          >
                            {entry.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                />

                <Bar
                  dataKey="Open"
                  stackId="a"
                  fill="#3B82F6"
                  hide={hiddenBars["Open"]}
                />
                <Bar
                  dataKey="Closed"
                  stackId="a"
                  fill="#10B981"
                  hide={hiddenBars["Closed"]}
                />
                <Bar
                  dataKey="Cancelled"
                  stackId="a"
                  fill="#B91C1C"
                  hide={hiddenBars["Cancelled"]}
                />
                <Bar
                  dataKey="OnHold"
                  stackId="a"
                  fill="#64748B"
                  hide={hiddenBars["OnHold"]}
                  name="On-Hold"
                />
                <Bar
                  dataKey="InProgress"
                  stackId="a"
                  fill="#F59E0B"
                  hide={hiddenBars["InProgress"]}
                  name="In Progress"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MaintenanceStatus;
